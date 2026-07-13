# Supabase → Internal PostgreSQL Migration

Status: **architecture + schema implemented; production cutover BLOCKED on
infrastructure.** No production cutover has occurred. Do not claim one.

## Why blocked
The site currently deploys as a **static SPA on Hostinger shared hosting**, which
provides no Node/app-server runtime and no PostgreSQL. The mandated target
architecture — `browser → server API → internal PostgreSQL`, with the browser never
touching the database — requires a server the current plan does not offer. The path
to real cutover is a **provisioned host** (e.g. a Hostinger VPS running the API +
PostgreSQL, or an approved private/VPC Postgres). That is a billable infrastructure
decision for the owner; the MCP VPS tooling can provision it once authorized.

## Supabase dependency inventory (current app)
| Service | Used? | Replacement |
|---|---|---|
| PostgreSQL (tables `blog_posts`, `blog_categories`, `jobs`, `contacts`; full app also `users`, `applications`, `page_views`) | Yes | Internal Postgres — `db/migrations/001_core.sql` |
| PostgREST / browser-side `.from()` with anon key | Yes (interim) | Server API endpoints (parameterized queries) |
| Auth (`signInWithPassword`/`signUp`) | Original app | API sessions + `app_users` (bcrypt/argon2) |
| Storage bucket `resumes` | Original app | Server-mediated object store (S3-compatible/VPS disk), keys in `applications.resume_key` |
| Realtime / Edge Functions / cron / webhooks | Not used | n/a |

No Supabase platform schemas (`auth`, `storage`, `realtime`, `vault`, `supabase_functions`)
are migrated — only application-owned objects.

## Target architecture
```
Browser  →  Raptor API (Node/Express, server-only)  →  Internal PostgreSQL
                     │  authN/authZ, input validation, rate limiting,
                     │  parameterized queries, pooling, timeouts, audit log
                     └─ least-privilege DB role (see db/migrations/000_roles.sql)
```
The frontend data layer is already isolated (`src/lib/supabase.js`, `src/lib/scheduling.js`)
so swapping to `fetch('/api/...')` is a contained change. No DB credentials, hostnames,
or service keys are ever shipped to the browser.

## Schema (versioned, in repo)
- `db/migrations/001_core.sql` — core app tables, `app_users` roles, indexes, `pgcrypto`/`citext`.
- `db/migrations/002_scheduling.sql` — Cal.com-style engine: `event_types`,
  `availability_rules`, `availability_overrides`, `bookings` (with a GiST **exclusion
  constraint** preventing overlapping bookings), `btree_gist`.

## Scheduling engine (Cal.com-style)
Holistic owner calendar + customer self-booking:
1. API computes free slots = weekly `availability_rules` + `overrides` − existing
   `bookings` − buffers − `min_notice`, in the owner's timezone.
2. Booking insert runs in a transaction; the exclusion constraint guarantees no
   double-booking under concurrency.
3. On confirm: generate meeting link, send invitee + owner email/ICS, expose a
   `cancel_token` reschedule/cancel link.
The public booking UI is live now (`/schedule`) and persists via `createBooking()`
(interim: Supabase `bookings` table, falling back to `contacts` so no request is lost).

## Staged, reversible cutover plan
1. Provision VPS + PostgreSQL 15+; create least-privilege roles.
2. `pg_dump` (custom format) of source; **test-restore** to staging; validate.
3. Apply `db/migrations/*` to target; import application data (COPY / `pg_restore`
   of app tables only — preserve UUIDs, timestamps, sequences, JSONB, enums).
4. Stand up the API; run functional + authz + performance tests against target.
5. Row-count / checksum / FK-integrity validation source vs. target.
6. Point frontend at `/api`; deploy API; monitor.
7. Rollback = re-point frontend to prior data layer (kept intact until acceptance).
8. Decommission Supabase only after acceptance criteria pass.

**Do not** reset/delete production Supabase data, disable security to ease migration,
or cut over without a tested restore, a passing dry run, and explicit authorization.

## Compatibility checklist (to verify on the target)
UUID/`pgcrypto`, `citext`, `btree_gist`, JSONB, enums/CHECKs, sequences/identity,
timestamptz + timezone behavior, collation/locale, indexes (GiST for ranges).
Install approved equivalents rather than silently dropping any extension.
