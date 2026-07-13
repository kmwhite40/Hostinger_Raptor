-- 002_scheduling.sql — Cal.com-style scheduling engine (internal PostgreSQL)
-- A holistic view of the owner's calendar + customer self-booking. Availability
-- is computed by the API from rules/overrides minus existing bookings; the DB
-- enforces integrity and prevents double-booking via an exclusion constraint.

BEGIN;

CREATE EXTENSION IF NOT EXISTS btree_gist;  -- exclusion constraints over ranges

-- Bookable meeting templates (e.g. "Mission Briefing", 30 min).
CREATE TABLE event_types (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id       uuid REFERENCES app_users(id) ON DELETE CASCADE,
  slug           text UNIQUE NOT NULL,
  title          text NOT NULL,
  description    text,
  duration_min   integer NOT NULL DEFAULT 30 CHECK (duration_min > 0),
  location_type  text NOT NULL DEFAULT 'google_meet',
  buffer_before  integer NOT NULL DEFAULT 0,
  buffer_after   integer NOT NULL DEFAULT 0,
  min_notice_min integer NOT NULL DEFAULT 240,   -- earliest bookable lead time
  is_active      boolean NOT NULL DEFAULT true,
  created_at     timestamptz NOT NULL DEFAULT now()
);

-- Recurring weekly availability (owner's holistic calendar rules).
CREATE TABLE availability_rules (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id    uuid REFERENCES app_users(id) ON DELETE CASCADE,
  weekday     smallint NOT NULL CHECK (weekday BETWEEN 0 AND 6),  -- 0=Sun
  start_min   smallint NOT NULL CHECK (start_min BETWEEN 0 AND 1440),
  end_min     smallint NOT NULL CHECK (end_min BETWEEN 0 AND 1440),
  timezone    text NOT NULL DEFAULT 'America/Chicago',
  CHECK (end_min > start_min)
);

-- One-off blocks or added windows (holidays, PTO, extra hours).
CREATE TABLE availability_overrides (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id   uuid REFERENCES app_users(id) ON DELETE CASCADE,
  day        date NOT NULL,
  is_blocked boolean NOT NULL DEFAULT true,
  start_min  smallint,
  end_min    smallint
);

-- Confirmed / requested bookings. slot is a tstzrange for conflict detection.
CREATE TABLE bookings (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type_id     uuid REFERENCES event_types(id) ON DELETE SET NULL,
  owner_id          uuid REFERENCES app_users(id) ON DELETE SET NULL,
  invitee_name      text NOT NULL,
  invitee_email     citext NOT NULL,
  organization      text,
  notes             text,
  slot              tstzrange NOT NULL,
  status            text NOT NULL DEFAULT 'requested'
                      CHECK (status IN ('requested','confirmed','cancelled','completed')),
  meeting_url       text,
  cancel_token      uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at        timestamptz NOT NULL DEFAULT now(),
  -- No two active bookings for the same owner may overlap.
  EXCLUDE USING gist (
    owner_id WITH =,
    slot WITH &&
  ) WHERE (status IN ('requested','confirmed'))
);

CREATE INDEX idx_bookings_slot ON bookings USING gist (slot);
CREATE INDEX idx_bookings_owner_status ON bookings (owner_id, status);
CREATE INDEX idx_avail_rules_owner ON availability_rules (owner_id, weekday);

COMMIT;

-- Seed (run once, parameterized by the API, not committed with real creds):
--   INSERT INTO event_types (owner_id, slug, title, duration_min)
--   VALUES (:owner, 'mission-briefing', 'Mission Briefing', 30);
--   INSERT INTO availability_rules (owner_id, weekday, start_min, end_min)
--   SELECT :owner, d, 9*60, 17*60 FROM generate_series(1,5) d;  -- Mon–Fri 9–5
