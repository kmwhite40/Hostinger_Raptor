import { Link } from 'react-router-dom';
import { Shield, Eye, Compass, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section, FeatureCard } from '@/components/site/Section';
import { CTASection } from '@/components/site/CTASection';
import { Reveal } from '@/components/Reveal';

const PILLARS = [
  { icon: Shield, title: 'Shield', desc: 'Hardened, secure Microsoft Government environments designed specifically for CUI and FCI protection.' },
  { icon: Eye, title: 'Overwatch', desc: '24/7/365 monitoring and rapid threat response powered by Microsoft Sentinel and XDR.' },
  { icon: Compass, title: 'Pathfinder', desc: 'Strategic modernization and secure cloud roadmapping. Guide your legacy systems to future-proof operations.' },
];

export default function Solutions() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_0%,hsl(190_100%_50%/0.12),transparent)]" />
        <div className="container relative py-20 text-center md:py-28">
          <Reveal><p className="text-xs font-bold tracking-widest text-primary">FEDERAL SOLUTIONS</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              SECURE MISSION.<br />
              <span className="text-gradient-brand">SIMPLIFY COMPLIANCE.</span><br />
              STRENGTHEN DEFENSE.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Fully managed cybersecurity and IT solutions designed specifically for federal contractors and the DIB.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg"><Link to="/contact">Talk to an Expert <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link to="/contact">Schedule Readiness Consult</Link></Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Section eyebrow="OUR PLATFORM" title="Built for the Defense Industrial Base">
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <FeatureCard key={p.title} {...p} delay={i * 0.08} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to Secure Your Environment?"
        subtitle="Let's assess where you are — and map out where you need to go."
        ctaLabel="Schedule Consultation"
      />
    </>
  );
}
