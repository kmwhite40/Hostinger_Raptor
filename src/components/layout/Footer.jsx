import { Link } from 'react-router-dom';
import { Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const QUICK = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/services', label: 'Services' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

const CERTS = ['SDVOSB', 'Top Secret', 'CMMC L2', 'ISO 9001', 'NIST 800-171'];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/assets/logo-eagle.png" alt="Raptor Solutions" className="h-10 w-auto" />
            <span className="text-lg font-extrabold tracking-tight">
              RAPTOR <span className="text-primary">SOLUTIONS</span>
            </span>
          </Link>
          <p className="mt-3 text-xs font-semibold tracking-widest text-primary">
            STRATEGIC. SECURE. ADVANCED.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Empowering federal agencies with secure, veteran-led technology solutions.
            Delivering mission-focused excellence across the defense industrial base.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"
               className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer"
               className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-widest text-foreground/60">QUICK LINKS</h4>
          <ul className="mt-4 space-y-2.5">
            {QUICK.map((q) => (
              <li key={q.to}>
                <Link to={q.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {q.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-widest text-foreground/60">CONTACT INFO</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>3090 N Goliad St, Suite 102 #834<br />Rockwall, TX 75087</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+19456672013" className="transition-colors hover:text-primary">(945) 667-2013</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:info@raptor-ent.com" className="transition-colors hover:text-primary">info@raptor-ent.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-widest text-foreground/60">COMPANY</h4>
          <ul className="mt-4 flex flex-wrap gap-2">
            {CERTS.map((c) => (
              <li key={c} className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground">
                {c}
              </li>
            ))}
          </ul>
          <img src="/assets/sdvosb-badge.png" alt="SDVOSB Certified" className="mt-6 h-24 w-24 opacity-80" />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} RAPTOR SOLUTIONS, LLC. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="transition-colors hover:text-primary">Privacy Policy</Link>
            <Link to="/terms-of-service" className="transition-colors hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
