import { Link } from 'react-router-dom';
import { Cloud, Shield, ClipboardCheck, Compass, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';
import { CTASection } from '@/components/site/CTASection';
import { Reveal } from '@/components/Reveal';

const SERVICES = [
  { icon: Cloud, title: 'Government Cloud (GCC High)', desc: 'Expertise in secure cloud migration and management for federal agencies.', to: '/services/government-cloud' },
  { icon: Shield, title: 'Cybersecurity Services', desc: 'Robust cybersecurity frameworks, threat intelligence, and compliance.', to: '/services/cybersecurity' },
  { icon: ClipboardCheck, title: 'CMMC & Compliance', desc: 'Readiness assessments, NIST 800-171 implementation, and certification pathways.', to: '/services/cmmc-compliance' },
  { icon: Compass, title: 'Advisory & Strategy', desc: 'Executive-level technology guidance, vCISO services, and strategic roadmapping.', to: '/services/advisory' },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title="Solutions for a Secure Government"
        subtitle="Delivering cutting-edge IT solutions to empower federal agencies and safeguard national interests."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <Link
                to={s.to}
                className="group flex h-full flex-col rounded-lg border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/50 hover:glow-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to Secure Your Future?"
        subtitle="Partner with RAPTOR SOLUTIONS for reliable, veteran-led IT solutions."
        ctaLabel="Get a Consultation"
      />
    </>
  );
}
