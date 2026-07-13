/** @type {import('tailwindcss').Config} */
const oklch = (v) => `oklch(var(${v}) / <alpha-value>)`;

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Archivo', 'Schibsted Grotesk', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        background: oklch('--background'),
        foreground: oklch('--foreground'),
        surface: oklch('--surface'),
        elevated: oklch('--elevated'),
        muted: {
          DEFAULT: oklch('--muted'),
          foreground: oklch('--muted-foreground'),
        },
        border: oklch('--border'),
        'border-strong': oklch('--border-strong'),
        accent: {
          DEFAULT: oklch('--accent'),
          bright: oklch('--accent-bright'),
          foreground: oklch('--accent-foreground'),
        },
        ring: oklch('--ring'),
        data: oklch('--data'),
        success: oklch('--success'),
        warning: oklch('--warning'),
        error: oklch('--error'),
        /* Back-compat aliases so earlier pages map onto the new palette */
        primary: { DEFAULT: oklch('--accent'), foreground: oklch('--accent-foreground') },
        secondary: { DEFAULT: oklch('--elevated'), foreground: oklch('--foreground') },
        card: { DEFAULT: oklch('--surface'), foreground: oklch('--foreground') },
        popover: { DEFAULT: oklch('--surface'), foreground: oklch('--foreground') },
        input: oklch('--border'),
        destructive: { DEFAULT: oklch('--error'), foreground: oklch('--accent-foreground') },
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        lg: 'var(--radius-lg)',
        none: '0',
      },
      maxWidth: {
        container: 'var(--container)',
      },
      transitionTimingFunction: {
        precise: 'cubic-bezier(0.22, 1, 0.36, 1)',
        exit: 'cubic-bezier(0.4, 0, 1, 1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-10px,0)' },
        },
        'dash-flow': {
          to: { 'stroke-dashoffset': '-1000' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(1200%)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        drift: 'drift 9s ease-in-out infinite',
        'dash-flow': 'dash-flow 22s linear infinite',
        scan: 'scan 7s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
