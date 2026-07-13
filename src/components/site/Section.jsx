import { Reveal } from '@/components/Reveal';
import { cn } from '@/lib/utils';

/** A page section with an optional editorial heading block. */
export function Section({ eyebrow, title, subtitle, className, children, containerClassName }) {
  return (
    <section className={cn('border-b border-border py-20 md:py-28', className)}>
      <div className={cn('container-x', containerClassName)}>
        {(eyebrow || title || subtitle) && (
          <Reveal className="max-w-3xl">
            {eyebrow && <p className="label-mono tick">{eyebrow}</p>}
            {title && <h2 className="fluid-h2 mt-4 font-display font-bold">{title}</h2>}
            {subtitle && <p className="measure mt-5 text-muted-foreground">{subtitle}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

/** Feature card — squared, hairline-framed, accent on hover. */
export function FeatureCard({ icon: Icon, title, desc, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="group h-full border border-border bg-surface p-7 transition-colors hover:border-accent/60">
        {Icon && <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} />}
        <h3 className="mt-6 font-display text-lg font-bold">{title}</h3>
        {desc && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>}
      </div>
    </Reveal>
  );
}
