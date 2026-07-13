import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Target, BadgeCheck, Scale, Star, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/site/PageHero';
import { Section, FeatureCard } from '@/components/site/Section';
import { Reveal } from '@/components/Reveal';

const HIGHLIGHTS = [
  { icon: ShieldCheck, title: 'Veteran-Led Dedication', desc: 'Our leadership brings a unique understanding of federal mission-critical needs.' },
  { icon: Award, title: 'Proven Expertise', desc: 'Delivering innovative and secure IT solutions since 2015.' },
  { icon: Target, title: 'Mission-Focused Approach', desc: 'Aligning technology with strategic objectives to achieve impactful results.' },
  { icon: BadgeCheck, title: 'Certified SDVOSB Company', desc: 'A trusted partner committed to excellence and integrity.' },
];

const VALUES = [
  { icon: Scale, title: 'INTEGRITY', desc: 'Unwavering honesty and ethical principles in every engagement.' },
  { icon: Star, title: 'EXCELLENCE', desc: 'Highest quality standards and continuous mission improvement.' },
  { icon: HeartHandshake, title: 'COMMITMENT', desc: "Dedicated to clients' missions and secure federal success." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT RAPTOR"
        title="Driving Federal Excellence with Proven IT Solutions"
        subtitle="Empowering federal agencies with secure, veteran-led technology solutions."
      />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-5 text-muted-foreground">
              <p>
                RAPTOR SOLUTIONS, LLC is a distinguished federal contractor dedicated to delivering
                cutting-edge, secure, and reliable information technology services. Founded in 2015,
                our firm is built on a foundation of veteran leadership, bringing unparalleled discipline,
                strategic insight, and a deep understanding of mission-critical environments to every project.
              </p>
              <p>
                We specialize in supporting federal agencies with comprehensive IT solutions, including
                cloud migration, cybersecurity, data management, and custom software development.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((h, i) => (
              <FeatureCard key={h.title} {...h} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="OUR CORE VALUES" title="The Pillars of Our Service"
        subtitle="Integrity, Excellence, and Commitment are the pillars of our service.">
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <FeatureCard key={v.title} {...v} delay={i * 0.08} />
          ))}
        </div>
      </Section>

      <Section className="border-b-0">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Explore Our Impact</h2>
          <p className="mt-4 text-muted-foreground">
            Discover our approach to federal IT modernization and security.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/services">View Services</Link>
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
