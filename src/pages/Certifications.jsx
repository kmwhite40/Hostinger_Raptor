import { BadgeCheck, Award, ShieldCheck, Lock, FileCheck } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Section, FeatureCard } from '@/components/site/Section';
import { CTASection } from '@/components/site/CTASection';

const CERTS = [
  { icon: BadgeCheck, title: 'Certified SDVOSB Company', desc: 'Service-Disabled Veteran-Owned Small Business.' },
  { icon: Award, title: 'ISO 9001:2015 Certified', desc: 'Quality management systems ensuring consistent high-quality services.' },
  { icon: ShieldCheck, title: 'CMMC Level 2 Compliance', desc: 'Cybersecurity Maturity Model Certification for protecting CUI.' },
  { icon: Lock, title: 'Top Secret Facility Clearance', desc: 'Authorized handling of highly classified national security information.' },
  { icon: FileCheck, title: 'NIST 800-171 Compliance', desc: 'Meeting standards for protecting CUI in nonfederal systems.' },
];

export default function Certifications() {
  return (
    <>
      <PageHero
        eyebrow="OUR CERTIFICATIONS"
        title="Recognized for Quality & Security"
        subtitle="Demonstrating our commitment to excellence, security, and quality in federal contracting."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c, i) => (
            <FeatureCard key={c.title} {...c} delay={i * 0.06} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Partner with a Certified Leader"
        subtitle="Our credentials speak to our capability and commitment to your mission."
        ctaLabel="Get in Touch"
      />
    </>
  );
}
