import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/services', label: 'Services' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/why-choose-us', label: 'Why Choose Us' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top eyebrow bar */}
      <div className="hidden md:flex items-center justify-center gap-2 bg-secondary/60 py-1.5 text-xs font-medium tracking-widest text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5 text-primary" />
        SDVOSB CERTIFIED
        <span className="mx-2 text-border">|</span>
        <Link to="/signin" className="transition-colors hover:text-primary">ADMIN LOGIN</Link>
      </div>

      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled ? 'border-b border-border bg-background/80 backdrop-blur-xl' : 'bg-transparent'
        )}
      >
        <nav className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/assets/logo-eagle.png" alt="Raptor Solutions" className="h-9 w-auto" />
            <span className="text-lg font-extrabold tracking-tight">
              RAPTOR <span className="text-primary">SOLUTIONS</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button asChild size="sm">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-md p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
            <div className="container flex flex-col gap-1 py-4">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                      isActive ? 'bg-secondary text-primary' : 'text-foreground/80 hover:bg-secondary'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button asChild className="mt-2">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
