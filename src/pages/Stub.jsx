import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Temporary placeholder while pages are being rebuilt from the captured content.
export default function Stub({ title = 'Page' }) {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-xs font-bold tracking-widest text-primary">RAPTOR SOLUTIONS</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        This page is being rebuilt in the new codebase. Content is captured and on the way.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">Back to Home</Link>
      </Button>
    </section>
  );
}
