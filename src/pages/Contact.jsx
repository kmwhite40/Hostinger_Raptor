import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';
import { Reveal } from '@/components/Reveal';
import { supabase } from '@/lib/supabase';

const INTERESTS = [
  'Cybersecurity Services',
  'Government Cloud',
  'CMMC & Compliance',
  'Advisory & Strategy',
  'Other Inquiry',
];

const inputClass =
  'w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40';

export default function Contact() {
  const [form, setForm] = useState({ full_name: '', work_email: '', phone: '', company: '', interest: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const { error } = await supabase.from('contacts').insert([{
      name: form.full_name,
      email: form.work_email,
      phone: form.phone,
      company: form.company,
      interest: form.interest,
      message: form.message,
    }]);
    if (error) {
      console.warn('[contact] insert failed:', error.message);
      setStatus('error');
    } else {
      setStatus('sent');
      setForm({ full_name: '', work_email: '', phone: '', company: '', interest: '', message: '' });
    }
  }

  return (
    <>
      <PageHero
        eyebrow="CONTACT US"
        title="Let's Secure Your Mission"
        subtitle="Reach out to discuss your cybersecurity, compliance, or IT modernization needs."
      />

      <Section className="border-b-0">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <Reveal>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Contact Information</h2>
              <p className="mt-3 text-muted-foreground">
                We're ready to partner with you for CMMC readiness, strategic vCISO services, and enterprise modernization.
              </p>
              <ul className="mt-8 space-y-5">
                {[
                  { icon: MapPin, label: 'Headquarters', value: '3090 N Goliad St, Suite 102 #834, Rockwall, TX 75087' },
                  { icon: Phone, label: 'Phone', value: '(945) 667-2013' },
                  { icon: Mail, label: 'Email', value: 'info@raptor-ent.com' },
                  { icon: Clock, label: 'Hours', value: 'Mon-Fri: 8:00 AM - 6:00 PM CST' },
                ].map((c) => (
                  <li key={c.label} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{c.label}</p>
                      <p className="text-sm text-muted-foreground">{c.value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-lg border border-border bg-card p-5">
                <p className="text-xs font-bold tracking-widest text-foreground/60">FEDERAL IDENTIFIERS</p>
                <div className="mt-3 flex gap-8 text-sm">
                  <div><span className="text-muted-foreground">UEI:</span> <span className="font-mono font-medium">GM7LU1DX7B68</span></div>
                  <div><span className="text-muted-foreground">CAGE:</span> <span className="font-mono font-medium">7FJ04</span></div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-xl font-semibold">Send a Message</h2>

              {status === 'sent' && (
                <div className="mt-5 flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 p-3 text-sm text-primary">
                  <CheckCircle2 className="h-4 w-4" /> Message sent — we'll be in touch shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="mt-5 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
                  Something went wrong. Please email us directly at info@raptor-ent.com.
                </div>
              )}

              <div className="mt-5 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" required>
                    <input className={inputClass} required value={form.full_name} onChange={set('full_name')} />
                  </Field>
                  <Field label="Work Email" required>
                    <input type="email" className={inputClass} required value={form.work_email} onChange={set('work_email')} />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone Number">
                    <input className={inputClass} value={form.phone} onChange={set('phone')} />
                  </Field>
                  <Field label="Company Name">
                    <input className={inputClass} value={form.company} onChange={set('company')} />
                  </Field>
                </div>
                <Field label="Primary Interest">
                  <select className={inputClass} value={form.interest} onChange={set('interest')}>
                    <option value="">Select a service</option>
                    {INTERESTS.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </Field>
                <Field label="Message" required>
                  <textarea rows={5} className={inputClass} required value={form.message} onChange={set('message')} />
                </Field>
                <Button type="submit" size="lg" disabled={status === 'sending'}>
                  {status === 'sending' ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : 'Send Message'}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}
