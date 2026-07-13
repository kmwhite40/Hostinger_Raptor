# Raptor Solutions — Design System (MASTER)

Source of truth for the redesign. Supersedes the auto-generated
`design-system/raptor-solutions/MASTER.md` (which returned a generic Aurora/pink
recommendation and was critically rejected per the brief). See `BRAND.md` for full brand rules.

## Foundations
- **Concept:** Precision in Motion · **Essence:** Precision · Readiness · Momentum
- **Palette (OKLCH, `src/index.css`):** Obsidian bg · Warm Bone fg/light-band · Iron/Steel
  surfaces & muted text · **Signal Vermilion** accent (strategic only) · Technical Blue (data).
- **Type:** Archivo (display) · IBM Plex Sans (body) · IBM Plex Mono (labels). Fluid `clamp()` scale.
- **Radius:** small only (4/8 px). Signature = **The Raptor Cut** wedge, used selectively.
- **Grid:** 12-col feel via `.container-x` (max 1240px, fluid gutters). Asymmetric, editorial.

## Semantic tokens
`--background --foreground --surface --elevated --muted --muted-foreground --border
--border-strong --accent --accent-bright --accent-foreground --ring --data --success
--warning --error`. Light editorial bands via `.surface-bone` (tokens re-declared per subtree).

## Component conventions
- Eyebrows: `.label-mono` (+ `.tick` vermilion marker). Headlines: `.font-display` + `.fluid-*`.
- Primary CTA: `bg-accent text-accent-foreground .raptor-cut`, hover `accent-bright`.
- Cards/panels: 1px `border-border`, `bg-surface`, hairline dividers, accent on hover — **not** rounded-pill tiles, not card-in-card.
- Body copy: `text-muted-foreground`, `.measure` (~62ch).

## Motion
`cubic-bezier(0.22,1,0.36,1)`, 180–700 ms. Viewport reveals (once), directional hovers,
hero drift/scan. Global `prefers-reduced-motion` kill-switch in `index.css`.

## Anti-patterns (do not)
Blue-cyber gradients, gradient text, glassmorphism, neon glows on every card, equal
3-card grids everywhere, decorative icons in rounded tiles, flooding the accent, fake
customer-logo marquees, fabricated metrics/testimonials, exposed admin nav.

## Accessibility / quality bar
WCAG AA contrast, visible focus rings, keyboard-operable nav/dropdown/carousels,
semantic headings, reduced-motion support, no horizontal scroll at 375px, no console/hydration errors.

## Page overrides
Add `design-system/pages/<page>.md` for deviations; otherwise this MASTER governs.
