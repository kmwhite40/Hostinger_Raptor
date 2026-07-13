import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';
import { Reveal } from '@/components/Reveal';
import { SERVICES } from './serviceData';

function Cards({ items }) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <Reveal key={it.title} delay={i * 0.05}>
          <div className="h-full rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50">
            <h4 className="font-semibold">{it.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function Bullets({ items }) {
  return (
    <div className="mx-auto mt-10 grid max-w-3xl gap-3">
      {items.map((it, i) => (
        <Reveal key={it} delay={i * 0.05}>
          <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Check className="h-4 w-4" />
            </span>
            <span className="text-sm text-foreground/90">{it}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function Steps({ items }) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {items.map((it, i) => (
        <Reveal key={it.title} delay={i * 0.06}>
          <div className="relative h-full rounded-lg border border-border bg-card p-6">
            <div className="text-3xl font-extrabold text-primary/30">{String(i + 1).padStart(2, '0')}</div>
            <h4 className="mt-2 font-semibold">{it.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const svc = SERVICES[slug];
  if (!svc) return <Navigate to="/services" replace />;

  return (
    <>
      <PageHero eyebrow={svc.eyebrow} title={svc.title} subtitle={svc.description}>
        <Button asChild size="lg">
          <Link to="/contact">{svc.cta} <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </PageHero>

      {svc.blocks.map((block, i) => (
        <Section key={block.title} className={i % 2 === 1 ? 'bg-secondary/20' : ''}>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{block.title}</h2>
            {block.intro && <p className="mt-4 text-muted-foreground">{block.intro}</p>}
          </Reveal>
          {block.type === 'cards' && <Cards items={block.items} />}
          {block.type === 'bullets' && <Bullets items={block.items} />}
          {block.type === 'steps' && <Steps items={block.items} />}
        </Section>
      ))}

      {/* Other solutions */}
      <Section title="Other Solutions">
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {svc.other.map((o) => (
            <Link
              key={o.to}
              to={o.to}
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              {o.label}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-b-0">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to elevate your mission?</h2>
          <p className="mt-4 text-muted-foreground">Contact our team of experts to discuss your specific requirements.</p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact">{svc.cta} <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
