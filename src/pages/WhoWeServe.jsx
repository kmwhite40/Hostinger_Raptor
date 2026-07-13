import { Link } from 'react-router-dom';
import { Landmark, Shield, Network, Building2, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';
import { CTASection } from '@/components/site/CTASection';
import { Reveal } from '@/components/Reveal';

const SEGMENTS = [
  {
    icon: Landmark, k: 'Federal Agencies',
    challenge: 'Modernize under federal mandates without compromising security or continuity.',
    outcome: 'Secure cloud, compliance, and operational support aligned to agency mission and oversight.',
  },
  {
    icon: Shield, k: 'Defense Industrial Base',
    challenge: 'Protect CUI and reach CMMC readiness while staying eligible for DoD contracts.',
    outcome: 'NIST 800-171 implementation, GovCloud enclaves, and a clear path to certification.',
  },
  {
    icon: Network, k: 'Primes & Subcontractors',
    challenge: 'Collaborate securely across contract vehicles with inherited, auditable controls.',
    outcome: 'Compliant environments and a shared-responsibility model that holds up to scrutiny.',
  },
  {
    icon: Building2, k: 'Regulated Enterprise',
    challenge: 'Meet federal-grade security expectations in a commercial operating context.',
    outcome: 'Enterprise security architecture and advisory that translate mandates into practice.',
  },
];

export default function WhoWeServe() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title="Built for organizations that carry the mission"
        subtitle="Commercial IT providers stumble in the federal space. Our work is designed for the regulations, clearances, and operational tempo that define government and defense."
      />

      <Section className="border-b-0">
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {SEGMENTS.map((s, i) => (
            <Reveal key={s.k} delay={i * 0.06}>
              <div className="flex h-full flex-col bg-background p-8 md:p-10">
                <s.icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                <h2 className="mt-6 font-display text-2xl font-bold">{s.k}</h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed">
                  <p><span className="label-mono block mb-1">Challenge</span><span className="text-muted-foreground">{s.challenge}</span></p>
                  <p><span className="label-mono block mb-1">Outcome</span><span className="text-muted-foreground">{s.outcome}</span></p>
                </div>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Discuss your mission <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Bring us the hard problem."
        subtitle="Talk with a mission specialist about cyber, cloud, compliance, workforce, or operational support."
      />
    </>
  );
}
