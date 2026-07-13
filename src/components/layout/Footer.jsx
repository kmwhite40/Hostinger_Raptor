import { Link } from 'react-router-dom';
import { Linkedin, ArrowUpRight } from 'lucide-react';
import { RaptorMark } from '@/components/brand/Logo';

const COLS = [
  {
    title: 'Capabilities',
    links: [
      { to: '/services/cybersecurity', label: 'Cybersecurity' },
      { to: '/services/government-cloud', label: 'Secure Cloud' },
      { to: '/services/cmmc-compliance', label: 'Compliance & Readiness' },
      { to: '/services/advisory', label: 'Advisory & Strategy' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/who-we-serve', label: 'Who We Serve' },
      { to: '/about', label: 'About' },
      { to: '/careers', label: 'Careers' },
      { to: '/insights', label: 'Insights', alt: '/blog' },
    ],
  },
];

const CREDS = ['SDVOSB', 'CMMC L2', 'ISO 9001', 'NIST 800-171', 'Top Secret FCL'];

export function Footer() {
  return (
    <footer className="surface-bone border-t border-border bg-background text-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <span className="flex items-center gap-2.5 text-foreground">
            <RaptorMark className="h-8 w-8" />
            <span className="font-display text-lg font-extrabold uppercase tracking-[-0.01em]">
              Raptor <span className="font-semibold text-muted-foreground">Solutions</span>
            </span>
          </span>
          <p className="label-mono mt-4">Precision · Readiness · Momentum</p>
          <p className="measure mt-4 text-sm text-muted-foreground">
            Veteran-led technology services for federal agencies and the Defense Industrial Base —
            secure cyber, cloud, compliance, data, and cleared-workforce capabilities for missions
            that cannot fail.
          </p>
        </div>

        {COLS.map((col) => (
          <div key={col.title}>
            <h3 className="label-mono">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.alt || l.to} className="text-sm text-muted-foreground transition-colors hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="label-mono">Contact</h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-muted-foreground">
            <p>3090 N Goliad St, Suite 102 #834<br />Rockwall, TX 75087</p>
            <p><a href="tel:+19456672013" className="transition-colors hover:text-accent">(945) 667-2013</a></p>
            <p><a href="mailto:info@raptor-ent.com" className="transition-colors hover:text-accent">info@raptor-ent.com</a></p>
          </address>
          <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
            Start a mission briefing <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {CREDS.map((c) => (
              <span key={c} className="label-mono text-[0.62rem]">{c}</span>
            ))}
          </div>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent">
              <Linkedin className="h-4 w-4" />
            </a>
            <Link to="/privacy-policy" className="transition-colors hover:text-accent">Privacy</Link>
            <Link to="/terms-of-service" className="transition-colors hover:text-accent">Terms</Link>
            <span>© {new Date().getFullYear()} Raptor Solutions, LLC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
