import { Clock, Video, CalendarCheck, ShieldCheck, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { BOOKINGS_URL } from '@/config';

/*
  Booking hand-off to Microsoft Bookings. Microsoft blocks iframe embedding
  (CSP frame-ancestors), so we present an on-brand booking card that launches
  the live Bookings page in a new tab — real Outlook availability, automatic
  Microsoft Teams meeting, and calendar invites are handled by Microsoft 365.
*/

const DETAILS = [
  { icon: Clock, label: '30 minutes', sub: 'Focused working session' },
  { icon: Video, label: 'Microsoft Teams', sub: 'Secure meeting link, auto-generated' },
  { icon: CalendarCheck, label: 'Live availability', sub: 'Real times from our Outlook calendar' },
  { icon: ShieldCheck, label: 'No obligation', sub: 'Scope the problem, outline a path' },
];

export default function Schedule() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Left — framing */}
        <Reveal>
          <p className="label-mono tick">Schedule</p>
          <h1 className="fluid-h2 mt-4 font-display font-extrabold">Book a mission briefing</h1>
          <p className="measure mt-5 text-lg text-muted-foreground">
            A focused 30-minute call to scope your cyber, cloud, compliance, workforce, or
            operational challenge — and outline exactly how Raptor can help.
          </p>
          <ul className="mt-9 space-y-5">
            {DETAILS.map((d) => (
              <li key={d.label} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center border border-border text-accent">
                  <d.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-semibold">{d.label}</p>
                  <p className="text-sm text-muted-foreground">{d.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right — booking card */}
        <Reveal delay={0.08}>
          <div className="relative overflow-hidden border border-border bg-surface p-8 md:p-10 raptor-cut-tl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_80%_0%,oklch(0.66_0.2_31/0.1),transparent)]" />
            <div className="relative">
              <p className="label-mono">Raptor Solutions</p>
              <h2 className="mt-3 font-display text-2xl font-bold">Mission Briefing</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Choose a time that works for you on our live calendar. You'll get an instant
                confirmation and a Microsoft Teams link — no back-and-forth email.
              </p>

              <a
                href={BOOKINGS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-accent px-6 py-4 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent-bright raptor-cut"
              >
                Choose a time
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Opens our secure Microsoft Bookings page in a new tab.
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-border pt-6 text-sm">
                <span className="text-muted-foreground">Prefer to write first?</span>
                <Link to="/contact" className="inline-flex items-center gap-1.5 font-semibold text-accent">
                  Send a message <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
