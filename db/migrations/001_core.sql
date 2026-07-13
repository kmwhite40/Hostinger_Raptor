-- 001_core.sql — Raptor Solutions core application schema (internal PostgreSQL)
-- Target: PostgreSQL 15+. Application-owned objects only. Accessed exclusively
-- through the server-side API with a least-privilege role (see 000_roles.sql).
-- No Supabase platform schemas (auth/storage/realtime) are imported here.

BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;   -- gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS citext;     -- case-insensitive email

-- Application users (replaces Supabase auth.users for app roles). Passwords are
-- stored as bcrypt/argon2 hashes by the API; never plaintext.
CREATE TABLE app_users (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email         citext UNIQUE NOT NULL,
  password_hash text,
  name          text,
  department    text,
  role          text NOT NULL DEFAULT 'member' CHECK (role IN ('member','admin')),
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now()
);

-- Contact form submissions (PII).
CREATE TABLE contacts (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text NOT NULL,
  email      citext NOT NULL,
  phone      text,
  company    text,
  interest   text,
  message    text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE jobs (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title       text NOT NULL,
  location    text,
  department  text,
  description text,
  is_active   boolean NOT NULL DEFAULT true,
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE applications (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id       uuid REFERENCES jobs(id) ON DELETE SET NULL,
  full_name    text NOT NULL,
  email        citext NOT NULL,
  phone        text,
  resume_key   text,               -- object-store key (see storage replacement)
  cover_letter text,
  status       text NOT NULL DEFAULT 'submitted',
  created_at   timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE blog_categories (
  id   uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL
);

CREATE TABLE blog_posts (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title          text NOT NULL,
  slug           text UNIQUE NOT NULL,
  excerpt        text,
  body           text,
  cover_image    text,
  category_id    uuid REFERENCES blog_categories(id) ON DELETE SET NULL,
  status         text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','published')),
  views_count    integer NOT NULL DEFAULT 0,
  published_date timestamptz,
  created_at     timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE page_views (
  id         bigserial PRIMARY KEY,
  path       text NOT NULL,
  referrer   text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_blog_posts_status_date ON blog_posts (status, published_date DESC);
CREATE INDEX idx_applications_job ON applications (job_id);
CREATE INDEX idx_page_views_created ON page_views (created_at);

COMMIT;
