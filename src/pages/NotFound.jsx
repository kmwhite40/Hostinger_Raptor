import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Atmosphere } from '@/components/site/Atmosphere';

export default function NotFound() {
  return (
    <section className="relative">
      <Atmosphere />
      <div className="container-x flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="label-mono tick">Error · 404</p>
        <h1 className="mt-6 font-display text-7xl font-extrabold tracking-tight md:text-9xl">404</h1>
        <p className="mt-4 max-w-md text-lg text-muted-foreground">
          That coordinate isn't on the map. The page may have moved or never existed.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="inline-flex items-center justify-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-bright raptor-cut">
            Back to home <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/services" className="inline-flex items-center justify-center gap-2 border border-border-strong px-6 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent">
            Explore capabilities <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
