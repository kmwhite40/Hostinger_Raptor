# Raptor Solutions — Brand System

Concept: **Precision in Motion.** Brand essence: Precision · Readiness · Momentum.
Personality: disciplined, decisive, technically fluent, calm under pressure, veteran-led.

## Logo

The mark is an **ascending precision wedge** — an aerodynamic delta that reads as a
vector in motion. The inner negative-space triangle is **The Raptor Cut**; the
wedge tip carries the **signal vermilion** accent. It is intentionally abstract
(no bird, shield, eagle, or crosshair) and holds up from 16 px to large format.

- Construction: single symmetric wedge; apex on the vertical axis; inner cut at ~0.4 of height.
- Clear space: minimum ½ mark-height on all sides.
- Minimum size: 16 px (favicon) / 18 px (UI).
- Color treatments: bone on obsidian (primary), obsidian on bone (light), single-color
  (accent off) for embroidery/one-color print, reversed white.
- Incorrect use: do not recolor the whole mark vermilion, add shadows/bevels/gradients,
  rotate, outline, or place on low-contrast backgrounds.

Files: `public/brand/raptor-mark.svg` (currentColor + accent tip), `public/brand/favicon.svg`
(obsidian tile). React: `src/components/brand/Logo.jsx` (`RaptorMark`, `Logo` lockup).

## Color (OKLCH tokens — see `src/index.css`)

| Token | OKLCH | Use |
|---|---|---|
| Obsidian (bg) | `0.13 0.008 220` | Primary surface |
| Warm Bone (fg / light band) | `0.95 0.012 90` | Text on dark; light section bg |
| Iron / Steel | `0.27–0.72 …` | Elevated surfaces, muted text |
| Signal Vermilion (accent) | `0.66 0.20 31` | CTAs, active states, waypoints, mark tip — **strategic, not flooded** |
| Technical Blue (data) | `0.72 0.09 236` | Restrained data details only |

Editorial pacing flips sections to bone via the `.surface-bone` utility (tokens re-declared per subtree).

## Typography

- **Display:** Archivo (600–800) — assertive neo-grotesk, tight tracking, oversized editorial headlines.
- **Body:** IBM Plex Sans — humanist, highly legible.
- **Labels / metadata:** IBM Plex Mono — uppercase, wide tracking (`.label-mono`), used sparingly.
- Fluid scale via `clamp()` (`.fluid-display`, `.fluid-h2`). No gradient text. Google Fonts now; self-hosting/subsetting is a documented follow-up.

## The Raptor Cut (motif)

A single forward-pointing wedge / notched corner derived from the mark. Used selectively:
`.raptor-cut` (clip-path) on primary CTAs; corner framing ticks in the hero trajectory field;
the vermilion `.tick` eyebrow marker. Not applied to every container.

## Motion

Ease-out / custom `cubic-bezier(0.22,1,0.36,1)`, 180–700 ms. Viewport reveals, directional
hovers, one slow scan + drift in the hero. All continuous motion is disabled under
`prefers-reduced-motion` (global rule in `index.css`).
