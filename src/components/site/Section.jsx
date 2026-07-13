import { Reveal } from '@/components/Reveal';
import { cn } from '@/lib/utils';

/** A page section with an optional centered heading block. */
export function Section({ eyebrow, title, subtitle, className, children, containerClassName }) {
  return (
    <section className={cn('border-b border-border py-20 md:py-24', className)}>
      <div className={cn('container', containerClassName)}>
        {(eyebrow || title || subtitle) && (
          <Reveal className="mx-auto max-w-2xl text-center">
            {eyebrow && <p className="text-xs font-bold tracking-widest text-primary">{eyebrow}</p>}
            {title && <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>}
            {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

/** Icon feature card used across marketing pages. */
export function FeatureCard({ icon: Icon, title, desc, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="group h-full rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50">
        {Icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-6 w-6" />
          </div>
        )}
        <h3 className="mt-5 text-lg font-semibold">{title}</h3>
        {desc && <p className="mt-2 text-sm text-muted-foreground">{desc}</p>}
      </div>
    </Reveal>
  );
}
