import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';
import { CTASection } from '@/components/site/CTASection';
import { Reveal } from '@/components/Reveal';
import { supabase } from '@/lib/supabase';
import { cn } from '@/lib/utils';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      const [{ data: p }, { data: c }] = await Promise.all([
        supabase
          .from('blog_posts')
          .select('*, category:category_id(*)')
          .eq('status', 'published')
          .order('published_date', { ascending: false }),
        supabase.from('blog_categories').select('*').order('name'),
      ]);
      if (!alive) return;
      setPosts(p || []);
      setCategories(c || []);
      setLoading(false);
    })();
    return () => { alive = false; };
  }, []);

  const filtered = active === 'all' ? posts : posts.filter((p) => p.category_id === active || p.category === active);

  return (
    <>
      <PageHero
        eyebrow="INSIGHTS & INTELLIGENCE"
        title="Insights & Intelligence"
        subtitle="Expert perspectives on cybersecurity, compliance, and federal cloud modernization."
      />

      <Section className="border-b-0">
        <div className="grid gap-10 lg:grid-cols-[1fr_260px]">
          <div>
            {loading ? (
              <div className="flex justify-center py-16 text-muted-foreground"><Loader2 className="h-6 w-6 animate-spin" /></div>
            ) : filtered.length === 0 ? (
              <div className="rounded-2xl border border-border bg-card p-12 text-center text-muted-foreground">
                No articles found matching your criteria.
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {filtered.map((post, i) => (
                  <Reveal key={post.id} delay={i * 0.05}>
                    <Link to={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/50">
                      {post.cover_image && (
                        <img src={post.cover_image} alt={post.title} className="aspect-video w-full object-cover" />
                      )}
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="text-lg font-semibold group-hover:text-primary">{post.title}</h3>
                        {post.excerpt && <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>}
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                          Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside>
            <h3 className="text-xs font-bold tracking-widest text-foreground/60">CATEGORIES</h3>
            <div className="mt-4 flex flex-col gap-1.5">
              <CategoryButton label="All Posts" active={active === 'all'} onClick={() => setActive('all')} />
              {categories.map((c) => (
                <CategoryButton key={c.id} label={c.name} active={active === c.id} onClick={() => setActive(c.id)} />
              ))}
            </div>
          </aside>
        </div>
      </Section>

      <CTASection
        title="Need Expert Guidance?"
        subtitle="Connect with our team for specialized compliance and security solutions."
        ctaLabel="Contact Us"
      />
    </>
  );
}

function CategoryButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-md px-3 py-2 text-left text-sm transition-colors',
        active ? 'bg-primary/10 font-medium text-primary' : 'text-muted-foreground hover:bg-secondary'
      )}
    >
      {label}
    </button>
  );
}
