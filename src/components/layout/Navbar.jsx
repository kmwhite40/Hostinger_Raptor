import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { cn } from '@/lib/utils';

const CAPABILITIES = [
  { to: '/services/cybersecurity', label: 'Cybersecurity & Mission Assurance', desc: 'SOC, XDR, incident response, zero trust' },
  { to: '/services/government-cloud', label: 'Secure Cloud & Infrastructure', desc: 'GCC High, Azure Government, migration' },
  { to: '/services/cmmc-compliance', label: 'Compliance & Readiness', desc: 'CMMC, NIST 800-171, DFARS, RMF' },
  { to: '/services/advisory', label: 'Advisory & Strategy', desc: 'vCISO / vCIO, roadmaps, risk' },
];

const NAV = [
  { label: 'Capabilities', to: '/services', menu: CAPABILITIES },
  { label: 'Who We Serve', to: '/who-we-serve' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Insights', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const capRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && (setMenuOpen(false), setOpen(false));
    const onClick = (e) => { if (capRef.current && !capRef.current.contains(e.target)) setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onClick); };
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors duration-300',
        scrolled ? 'border-b border-border bg-background/85 backdrop-blur-xl' : 'border-b border-transparent'
      )}
    >
      <nav className="container-x flex h-[68px] items-center justify-between gap-6" aria-label="Primary">
        <Link to="/" className="text-foreground transition-opacity hover:opacity-80" aria-label="Raptor Solutions home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.menu ? (
              <div key={item.label} ref={capRef} className="relative">
                <button
                  className="flex items-center gap-1 rounded px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                  aria-expanded={menuOpen}
                  aria-haspopup="true"
                  onClick={() => setMenuOpen((v) => !v)}
                >
                  {item.label}
                  <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', menuOpen && 'rotate-180')} />
                </button>
                {menuOpen && (
                  <div className="absolute left-0 top-full mt-2 w-[22rem] animate-fade-up border border-border bg-surface p-2 shadow-2xl">
                    {item.menu.map((m) => (
                      <Link key={m.to} to={m.to} className="group block rounded px-3 py-2.5 transition-colors hover:bg-elevated">
                        <span className="flex items-center justify-between text-sm font-semibold">
                          {m.label}
                          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition group-hover:opacity-100 group-hover:text-accent" />
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">{m.desc}</span>
                      </Link>
                    ))}
                    <Link to="/services" className="mt-1 block border-t border-border px-3 pt-2.5 text-xs font-semibold uppercase tracking-widest text-accent">
                      All capabilities →
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn('rounded px-3 py-2 text-sm font-medium transition-colors', isActive ? 'text-foreground' : 'text-foreground/70 hover:text-foreground')
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/schedule"
            className="group inline-flex items-center gap-2 bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-bright raptor-cut"
          >
            Start a Mission Briefing
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button className="inline-flex items-center justify-center p-2 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-x flex flex-col py-4">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} className="border-b border-border/60 py-3 text-sm font-medium text-foreground/85">
                {item.label}
              </NavLink>
            ))}
            <Link to="/schedule" className="mt-4 inline-flex items-center justify-center gap-2 bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground raptor-cut">
              Start a Mission Briefing <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
