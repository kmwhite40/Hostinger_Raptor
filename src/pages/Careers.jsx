import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';
import { Reveal } from '@/components/Reveal';
import { supabase } from '@/lib/supabase';

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false });
      if (!active) return;
      if (error) console.warn('[careers] jobs query failed:', error.message);
      setJobs(data || []);
      setLoading(false);
    })();
    return () => { active = false; };
  }, []);

  return (
    <>
      <PageHero
        eyebrow="JOIN OUR MISSION"
        title="Build Your Career at Raptor"
        subtitle="Be part of a veteran-led team dedicated to securing federal IT solutions."
      />

      <Section eyebrow="CURRENT OPENINGS" title="Find the role that matches your expertise.">
        <div className="mx-auto mt-6 max-w-3xl">
          <p className="mb-6 text-center text-sm font-semibold tracking-widest text-primary">
            {loading ? '—' : jobs.length} POSITION{jobs.length === 1 ? '' : 'S'} AVAILABLE
          </p>

          {loading ? (
            <div className="flex justify-center py-12 text-muted-foreground">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          ) : jobs.length === 0 ? (
            <Reveal>
              <div className="rounded-2xl border border-border bg-card p-10 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">No Openings Right Now</h3>
                <p className="mt-2 text-muted-foreground">
                  We don't have active listings at the moment. Check back later.
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="grid gap-4">
              {jobs.map((job, i) => (
                <Reveal key={job.id} delay={i * 0.05}>
                  <Link
                    to={`/jobs/${job.id}`}
                    className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
                  >
                    <div>
                      <h3 className="font-semibold group-hover:text-primary">{job.title}</h3>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" /> {job.location || 'Remote / On-site'}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </Section>

      <Section className="border-b-0">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Don't see the right fit?</h2>
          <p className="mt-4 text-muted-foreground">Connect with us to stay updated on future opportunities.</p>
          <Button asChild size="lg" className="mt-8"><Link to="/contact">Send General Inquiry</Link></Button>
        </Reveal>
      </Section>
    </>
  );
}
