import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Users, BarChart3, Scale, ArrowRight, Target, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/Reveal';

const CAPABILITIES = [
  {
    icon: Shield,
    title: 'Cyber Security',
    desc: 'Military-grade protection for your digital assets and infrastructure.',
    to: '/services/cybersecurity',
  },
  {
    icon: Users,
    title: 'Talent Management',
    desc: 'Connecting top-tier clearance-ready professionals with mission-critical roles.',
    to: '/careers',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    desc: 'Data-driven insights to optimize workforce deployment and operational efficiency.',
    to: '/solutions',
  },
  {
    icon: Scale,
    title: 'Compliance & Governance',
    desc: 'Navigating complex federal regulations with automated compliance solutions.',
    to: '/services/cmmc-compliance',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(190_100%_50%/0.12),transparent)]" />
        <div className="container relative flex flex-col items-center py-20 text-center md:py-28">
          <motion.img
            src="/assets/logo-eagle.png"
            alt="Raptor Solutions"
            className="mb-8 h-40 w-auto drop-shadow-[0_0_40px_hsl(190_100%_50%/0.4)] md:h-52"
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary">
              <Shield className="h-3.5 w-3.5" /> TRUSTED BY FEDERAL AGENCIES &amp; DIB
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-7xl">
              RAPTOR <span className="text-gradient-brand">SOLUTIONS</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Strategic, secure, and advanced IT services empowering the Defense Industrial Base
              with mission-critical cybersecurity and cloud transformation.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/contact">Request Consultation <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="border-t border-border py-20 md:py-24">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-widest text-primary">CORE CAPABILITIES</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Elite Solutions for Critical Missions
            </h2>
            <p className="mt-4 text-muted-foreground">
              We deliver integrated capabilities across the full spectrum of government contracting
              and enterprise support.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <Link
                  to={c.to}
                  className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:glow-primary"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-primary">
                    EXPLORE SOLUTION
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="border-t border-border py-20 md:py-24">
        <div className="container grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-lg border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Our Mission</h3>
              <p className="mt-4 text-muted-foreground">
                To empower national security and enterprise resilience through innovative technology
                solutions, specialized workforce strategies, and unwavering commitment to mission success.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-lg border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Our Vision</h3>
              <p className="mt-4 text-muted-foreground">
                To be the premier partner for government and industry in navigating the digital frontier,
                setting the standard for integrity, innovation, and operational excellence in the modern era.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
