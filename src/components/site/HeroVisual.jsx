/*
  Original "trajectory field" hero visual for Precision in Motion.
  Layered obsidian atmosphere (the "clouds") + plotted flight paths + drifting
  precision nodes + coordinate markers + a slow scan line. Pure SVG/CSS, no
  libraries. Continuous motion is stripped by prefers-reduced-motion (see
  index.css), leaving a composed static diagram.
*/
export function HeroVisual() {
  return (
    <div className="relative aspect-square w-full overflow-hidden">
      {/* Volumetric atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-1/4 top-0 h-3/4 w-3/4 rounded-full bg-[radial-gradient(circle,oklch(0.66_0.2_31/0.16),transparent_70%)] blur-2xl animate-drift" />
        <div className="absolute -left-1/4 bottom-0 h-2/3 w-2/3 rounded-full bg-[radial-gradient(circle,oklch(0.72_0.09_236/0.14),transparent_70%)] blur-2xl animate-drift [animation-delay:-4s]" />
        <div className="absolute inset-0 grain opacity-60" />
      </div>

      <svg viewBox="0 0 400 400" className="relative h-full w-full" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="path-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="oklch(0.66 0.2 31)" stopOpacity="0" />
            <stop offset="0.5" stopColor="oklch(0.66 0.2 31)" stopOpacity="0.9" />
            <stop offset="1" stopColor="oklch(0.66 0.2 31)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="node-glow">
            <stop offset="0" stopColor="oklch(0.66 0.2 31)" stopOpacity="0.5" />
            <stop offset="1" stopColor="oklch(0.66 0.2 31)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* fine grid */}
        <g stroke="oklch(0.72 0.008 220 / 0.1)" strokeWidth="0.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="400" />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
          ))}
        </g>

        {/* plotted flight paths */}
        <path d="M-20 320 C 120 300, 180 120, 420 60" stroke="oklch(0.72 0.008 220 / 0.35)" strokeWidth="1" />
        <path d="M-20 380 C 160 360, 240 180, 420 140" stroke="oklch(0.72 0.008 220 / 0.2)" strokeWidth="1" strokeDasharray="2 6" />
        <path
          d="M-20 320 C 120 300, 180 120, 420 60"
          stroke="url(#path-a)"
          strokeWidth="2"
          strokeDasharray="60 940"
          className="animate-dash-flow"
        />

        {/* precision nodes / waypoints */}
        {[
          { x: 110, y: 250, r: 3, a: true },
          { x: 205, y: 168, r: 4, a: true },
          { x: 300, y: 110, r: 2.5 },
          { x: 150, y: 300, r: 2 },
          { x: 330, y: 200, r: 2.5 },
        ].map((n, i) => (
          <g key={i} className="animate-drift" style={{ animationDelay: `${-i * 1.4}s`, transformBox: 'fill-box', transformOrigin: 'center' }}>
            {n.a && <circle cx={n.x} cy={n.y} r="16" fill="url(#node-glow)" />}
            <circle cx={n.x} cy={n.y} r={n.r} fill={n.a ? 'oklch(0.66 0.2 31)' : 'oklch(0.72 0.008 220)'} />
            <circle cx={n.x} cy={n.y} r={n.r + 4} stroke="oklch(0.72 0.008 220 / 0.4)" strokeWidth="0.5" />
          </g>
        ))}

        {/* coordinate markers */}
        <g fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="oklch(0.72 0.008 220 / 0.7)">
          <text x="212" y="160">38.9N · 77.0W</text>
          <text x="116" y="244">VECTOR·01</text>
          <text x="300" y="222">SECURE</text>
        </g>

        {/* corner framing ticks (Raptor Cut language) */}
        <g stroke="oklch(0.66 0.2 31)" strokeWidth="1.5">
          <path d="M8 28 V8 H28" />
          <path d="M372 8 H392 V28" />
          <path d="M392 372 V392 H372" />
          <path d="M28 392 H8 V372" />
        </g>

        {/* scan line */}
        <line x1="0" y1="0" x2="400" y2="0" stroke="oklch(0.66 0.2 31 / 0.35)" strokeWidth="1" className="animate-scan" />
      </svg>
    </div>
  );
}
