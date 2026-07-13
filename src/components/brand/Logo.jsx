import { cn } from '@/lib/utils';

/** The Raptor mark — ascending precision wedge with the Raptor Cut + vermilion tip. */
export function RaptorMark({ className, accent = true }) {
  return (
    <svg viewBox="0 0 48 48" className={cn('h-8 w-8', className)} fill="none" role="img" aria-label="Raptor Solutions" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M25 4 L44 44 H31.5 L24 27.8 L16.5 44 H4 L25 4 Z" />
      <path fill={accent ? 'oklch(0.66 0.2 31)' : 'currentColor'} d="M25 4 L31.9 18.5 H18.1 L25 4 Z" />
    </svg>
  );
}

/** Full horizontal lockup: mark + wordmark. Inherits color via currentColor. */
export function Logo({ className, markClassName }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <RaptorMark className={cn('h-7 w-7', markClassName)} />
      <span className="font-display text-[1.05rem] font-extrabold uppercase leading-none tracking-[-0.01em]">
        Raptor <span className="font-semibold text-muted-foreground">Solutions</span>
      </span>
    </span>
  );
}
