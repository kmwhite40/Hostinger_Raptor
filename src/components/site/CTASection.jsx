import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

/** Full-width closing call-to-action band. */
export function CTASection({ title, subtitle, ctaLabel = 'Start a mission briefing', ctaTo = '/schedule' }) {
  return (
    <section className="relative overflow-hidden border-b border-border py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_50%_100%,oklch(0.66_0.2_31/0.1),transparent)]" />
      <Reveal className="container-x relative text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h2>
        {subtitle && <p className="mx-auto mt-5 max-w-xl text-muted-foreground">{subtitle}</p>}
        <Link
          to={ctaTo}
          className="mt-8 inline-flex items-center justify-center gap-2 bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-bright raptor-cut"
        >
          {ctaLabel} <ArrowUpRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  );
}
