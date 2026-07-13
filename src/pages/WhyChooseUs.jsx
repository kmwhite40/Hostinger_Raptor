import { Link } from 'react-router-dom';
import { Lightbulb, ShieldCheck, Lock, Handshake, TrendingUp, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/site/PageHero';
import { Section, FeatureCard } from '@/components/site/Section';
import { Reveal } from '@/components/Reveal';

const ADVANTAGES = [
  { icon: Lightbulb, title: 'Innovative Solutions', desc: 'Cutting-edge technology to solve complex federal challenges.' },
  { icon: ShieldCheck, title: 'Veteran-Led Excellence', desc: 'Unparalleled discipline, integrity, and mission focus.' },
  { icon: Lock, title: 'Uncompromising Security', desc: 'Robust cybersecurity frameworks and compliance.' },
  { icon: Handshake, title: 'Trusted Partnership', desc: 'Transparency, reliability, and deep federal expertise.' },
  { icon: TrendingUp, title: 'Proven Track Record', desc: 'History of successful project delivery and client satisfaction.' },
  { icon: BadgeCheck, title: 'Certified SDVOSB', desc: 'Service-Disabled Veteran-Owned Small Business advantages.' },
];

export default function WhyChooseUs() {
  return (
    <>
      <PageHero
        eyebrow="WHY CHOOSE RAPTOR?"
        title="The RAPTOR Advantage"
        subtitle="Your trusted partner for secure, innovative, and mission-critical federal IT solutions."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((a, i) => (
            <FeatureCard key={a.title} {...a} delay={i * 0.06} />
          ))}
        </div>
      </Section>

      <Section className="border-b-0">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Our Commitment</h2>
            <p className="mt-4 text-muted-foreground">
              At RAPTOR SOLUTIONS, LLC, we are more than just a contractor; we are a dedicated extension
              of your mission. Our unique perspective fuels our passion for service and national security.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="outline"><Link to="/about">Learn Our Story</Link></Button>
              <Button asChild><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
