import { Reveal } from '@/components/Reveal';

/** Standard interior-page hero: eyebrow label, title, and optional subtitle. */
export function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_0%,hsl(190_100%_50%/0.1),transparent)]" />
      <div className="container relative py-20 text-center md:py-28">
        {eyebrow && (
          <Reveal>
            <p className="text-xs font-bold tracking-widest text-primary">{eyebrow}</p>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {children}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
