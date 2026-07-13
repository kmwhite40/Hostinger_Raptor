import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, ShieldCheck, Cloud, ClipboardCheck, Compass,
  Radar, Lock, Workflow, Activity, ArrowRight,
} from 'lucide-react';
import { HeroVisual } from '@/components/site/HeroVisual';

const rise = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const CREDS = ['SDVOSB', 'CMMC Level 2', 'NIST 800-171'];

const CAPS = [
  { n: '01', icon: ShieldCheck, title: 'Cybersecurity & Mission Assurance', to: '/services/cybersecurity',
    body: 'US-based SOC, XDR, incident response, and zero-trust architecture that mitigate threats before they reach the mission.' },
  { n: '02', icon: Cloud, title: 'Secure Cloud & Infrastructure', to: '/services/government-cloud',
    body: 'Microsoft 365 GCC High and Azure Government — architected, migrated, and governed for CUI and FCI.' },
  { n: '03', icon: ClipboardCheck, title: 'Compliance & Readiness', to: '/services/cmmc-compliance',
    body: 'CMMC Level 2, NIST 800-171, and DFARS readiness — from gap assessment to C3PAO certification.' },
  { n: '04', icon: Compass, title: 'Advisory & Strategy', to: '/services/advisory',
    body: 'Fractional vCISO and vCIO leadership that aligns security investment to mission outcomes.' },
];

const STAGES = [
  { icon: Radar, k: 'Assess', d: 'Establish the baseline — boundaries, exposure, and compliance posture against the standard that governs your mission.' },
  { icon: Lock, k: 'Secure', d: 'Implement controls, harden the environment, and stand up monitoring that holds under pressure.' },
  { icon: Workflow, k: 'Transform', d: 'Modernize infrastructure and workflows toward compliant, resilient, future-ready operations.' },
  { icon: Activity, k: 'Sustain', d: 'Continuous monitoring, evidence generation, and operational support that keep readiness constant.' },
];

const AUDIENCES = [
  { k: 'Federal Agencies', d: 'Secure modernization and compliance for agencies operating under federal mandates.' },
  { k: 'Defense Industrial Base', d: 'CUI protection and CMMC readiness for the organizations that supply the DoD.' },
  { k: 'Primes & Subcontractors', d: 'Compliant collaboration and inherited controls across contract vehicles.' },
  { k: 'Regulated Enterprise', d: 'Enterprise-grade security for organizations navigating complex federal regulation.' },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="container-x grid items-center gap-10 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <motion.p {...rise} className="label-mono tick">Veteran-Led · SDVOSB · Mission-Ready</motion.p>
            <motion.h1 {...rise} transition={{ ...rise.transition, delay: 0.05 }} className="fluid-display mt-6 font-display font-extrabold">
              Strategic technology<br className="hidden sm:block" /> for missions that <span className="text-accent">cannot fail.</span>
            </motion.h1>
            <motion.p {...rise} transition={{ ...rise.transition, delay: 0.1 }} className="measure mt-7 text-lg text-muted-foreground">
              Raptor Solutions delivers secure cyber, cloud, compliance, data, and cleared-workforce
              capabilities to federal agencies and the Defense Industrial Base.
            </motion.p>
            <motion.div {...rise} transition={{ ...rise.transition, delay: 0.15 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/schedule" className="group inline-flex items-center justify-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-bright raptor-cut">
                Start a mission briefing
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 border border-border-strong px-6 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent">
                Explore capabilities
              </Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none">
            <HeroVisual />
          </motion.div>
        </div>
      </section>

      {/* ── Trust / credentials rail ─────────────────────── */}
      <section className="border-y border-border">
        <div className="container-x flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <p className="label-mono shrink-0">Verified Credentials</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {CREDS.map((c) => (
              <span key={c} className="font-mono text-sm tracking-tight text-foreground/80">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capability suite ─────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <motion.div {...rise} className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="label-mono tick">Capabilities</p>
              <h2 className="fluid-h2 mt-4 max-w-2xl font-display font-bold">Integrated capability across the mission lifecycle</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              All capabilities <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {CAPS.map((c, i) => (
              <motion.div key={c.title} {...rise} transition={{ ...rise.transition, delay: i * 0.06 }}>
                <Link to={c.to} className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-surface md:p-10">
                  <div className="flex items-center justify-between">
                    <c.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                    <span className="label-mono">{c.n}</span>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-bold">{c.title}</h3>
                  <p className="measure mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                    Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission architecture ─────────────────────────── */}
      <section className="surface-bone bg-background py-20 text-foreground md:py-28">
        <div className="container-x">
          <motion.div {...rise}>
            <p className="label-mono tick">How We Deliver</p>
            <h2 className="fluid-h2 mt-4 max-w-2xl font-display font-bold">A disciplined operating model, from baseline to sustainment</h2>
          </motion.div>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {STAGES.map((s, i) => (
              <motion.div key={s.k} {...rise} transition={{ ...rise.transition, delay: i * 0.08 }} className="relative">
                <div className="hairline mb-5 flex items-center justify-between pt-5">
                  <s.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                  <span className="label-mono">{`0${i + 1}`}</span>
                </div>
                <h3 className="font-display text-lg font-bold">{s.k}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who we serve ─────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div {...rise}>
            <p className="label-mono tick">Who We Serve</p>
            <h2 className="fluid-h2 mt-4 font-display font-bold">Built for organizations that carry the mission</h2>
            <p className="measure mt-5 text-muted-foreground">
              Commercial IT providers stumble in the federal space. Our work is designed for the
              regulations, clearances, and operational tempo that define government and defense.
            </p>
            <Link to="/who-we-serve" className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              Explore who we serve <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {AUDIENCES.map((a, i) => (
              <motion.div key={a.k} {...rise} transition={{ ...rise.transition, delay: i * 0.06 }} className="bg-background p-7">
                <h3 className="font-display text-base font-bold">{a.k}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Veteran-led story ────────────────────────────── */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="container-x">
          <motion.div {...rise} className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <p className="label-mono tick">Veteran-Led</p>
              <h2 className="fluid-h2 mt-4 font-display font-bold">Discipline is a design principle, not a slogan.</h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Raptor Solutions was built by people who have operated where failure is not an option.
                That perspective shapes how we assess risk, secure systems, and stand beside our customers —
                as a dedicated extension of the mission, not a vendor at arm's length.
              </p>
              <Link to="/about" className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Our story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-border py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_50%_100%,oklch(0.66_0.2_31/0.12),transparent)]" />
        <motion.div {...rise} className="container-x relative text-center">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Bring us the hard problem.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Talk with a mission specialist about cyber, cloud, compliance, workforce, or operational support.
          </p>
          <Link to="/schedule" className="mt-9 inline-flex items-center justify-center gap-2 bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent-bright raptor-cut">
            Start a mission briefing <ArrowUpRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
