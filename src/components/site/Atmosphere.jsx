import { cn } from '@/lib/utils';

/*
  Ambient "floating clouds" — the drifting volumetric atmosphere from the hero,
  as a reusable background layer. Absolutely positioned, non-interactive, and
  motion is disabled under prefers-reduced-motion (global rule in index.css).
  Place inside a `relative` container, behind content.
*/
export function Atmosphere({ className }) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)} aria-hidden="true">
      <div className="absolute -right-[10%] -top-[15%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,oklch(0.66_0.2_31/0.14),transparent_70%)] blur-3xl animate-drift" />
      <div className="absolute -left-[12%] top-[35%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.09_236/0.12),transparent_70%)] blur-3xl animate-drift [animation-delay:-4s]" />
      <div className="absolute bottom-[-10%] right-[20%] h-[40vh] w-[40vh] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.008_220/0.1),transparent_70%)] blur-3xl animate-drift [animation-delay:-7s]" />
      <div className="absolute inset-0 grain opacity-50" />
    </div>
  );
}
