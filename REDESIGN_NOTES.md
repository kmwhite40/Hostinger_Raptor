# Raptor Solutions — Redesign Notes

## Audit (starting state)
- **Stack:** Vite 5 + React 18 + React Router 6 + Tailwind 3 + Framer Motion + lucide-react.
  Package manager npm. Build → static `dist/`. Deployed to Hostinger static hosting
  (`raptor-ent.com`) as a client-rendered SPA with an `.htaccess` SPA fallback.
- **Data:** `@supabase/supabase-js` used **client-side** with the anon key
  (`src/lib/supabase.js`) against 4 tables: `blog_posts`, `blog_categories`, `jobs`,
  `contacts`. The full original app also used Supabase Auth, Storage (`resumes`),
  and `users`/`applications`/`page_views`.
- **No server runtime** on current hosting → a secure browser→server→DB path (and
  the scheduling engine + Postgres migration) require a VPS/app server (see DATABASE_MIGRATION.md).

## What changed
- **New brand system** (`BRAND.md`, `design-system/MASTER.md`, `src/index.css` OKLCH tokens):
  obsidian/bone/iron/steel + signal vermilion; Archivo/IBM Plex Sans/IBM Plex Mono;
  "Precision in Motion" + The Raptor Cut.
- **New original logo** replacing the AI-generated eagle mark (`public/brand/`).
- **New IA / navigation:** Capabilities (dropdown) · Who We Serve · About · Careers ·
  Insights · Contact + "Start a Mission Briefing" CTA. **"Admin Login" removed from
  public nav.**
- **Homepage rebuilt** as an editorial narrative: asymmetric hero + original SVG
  trajectory-field visual (reduced-motion safe), credentials rail, capability suite,
  mission architecture (Assess/Secure/Transform/Sustain), Who We Serve, veteran-led
  story, decisive final CTA.
- **New pages:** `/who-we-serve`, `/schedule` (Cal.com-style booking). Insights alias `/insights`.
- **Internal pages** cascade to the new system via shared components + token aliases.
- **Copy** rewritten to the mission-grade voice; buzzwords and gradient text removed.

## Claims — verify before relying on them (anti-fabrication)
These are carried over from the **client's own existing site** (their representations
about their own company). Confirm exact wording/status; do not add new ones:
- SDVOSB / veteran-led · CMMC Level 2 · ISO 9001:2015 · NIST 800-171 · Top Secret FCL
- UEI `GM7LU1DX7B68`, CAGE `7FJ04`, address/phone/email.
No customers, agencies, metrics, testimonials, or case studies were fabricated. The
homepage deliberately uses a **credentials rail** (not a fake customer-logo marquee)
and mission/delivery narratives in place of unverified proof.

## Skills applied
- **ui-ux-pro-max:** ran `search.py --design-system --persist`. Output was generic
  (Aurora gradients / pink / Atkinson) and was **critically rejected** per the brief;
  reconciled to the Raptor-specific direction. Persisted system authored in `design-system/MASTER.md`.
- **impeccable:** PostToolUse design hooks ran on every file; one finding (gradient text)
  was fixed to solid color. Manual application of shape/typeset/layout/motion principles.
- **frontend-design:** applied to hero composition, type scale, and asymmetric layout.

## Known follow-ups (not yet done)
- Bespoke per-page layouts for some internal pages (currently cascade the system faithfully but reuse shared templates).
- Auth + `/admin` CMS + job-apply (résumé upload) + blog detail rebuild.
- Self-host/subset fonts. Structured data (Organization/Service), XML sitemap, robots, per-route OG images.
- Full Postgres cutover + scheduling engine server (needs VPS — see DATABASE_MIGRATION.md).
