import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/Reveal';

/** Full-width closing call-to-action band. */
export function CTASection({ title, subtitle, ctaLabel = 'Contact Us', ctaTo = '/contact' }) {
  return (
    <section className="border-b border-border">
      <div className="container py-20 md:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-secondary/40 px-6 py-14 text-center">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_0%,hsl(190_100%_50%/0.15),transparent)]" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
              {subtitle && <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{subtitle}</p>}
              <Button asChild size="lg" className="mt-8">
                <Link to={ctaTo}>{ctaLabel} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
