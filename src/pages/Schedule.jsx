import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Video, CheckCircle2, Loader2, ArrowLeft } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { createBooking } from '@/lib/scheduling';

/*
  Cal.com-style booking flow. Availability is derived from a simple rule set
  (weekday business hours) minus taken slots; on the production Postgres
  backend this is replaced by the scheduling engine (see DATABASE_MIGRATION.md
  and db/migrations). Interim persistence goes through createBooking().
*/

const EVENT = { title: 'Mission Briefing', duration: 30, mode: 'Google Meet · secure link' };
const SLOTS = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function startOfMonth(y, m) { return new Date(y, m, 1); }
function daysInMonth(y, m) { return new Date(y, m + 1, 0).getDate(); }
function isWeekday(d) { const n = d.getDay(); return n >= 1 && n <= 5; }
function sameDay(a, b) { return a && b && a.toDateString() === b.toDateString(); }

export default function Schedule() {
  const today = useMemo(() => { const t = new Date(); t.setHours(0, 0, 0, 0); return t; }, []);
  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', org: '', notes: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | done | error

  const grid = useMemo(() => {
    const first = startOfMonth(view.y, view.m).getDay();
    const total = daysInMonth(view.y, view.m);
    const cells = [];
    for (let i = 0; i < first; i++) cells.push(null);
    for (let d = 1; d <= total; d++) cells.push(new Date(view.y, view.m, d));
    return cells;
  }, [view]);

  const canGoBack = view.y > today.getFullYear() || (view.y === today.getFullYear() && view.m > today.getMonth());
  const shiftMonth = (delta) => setView((v) => { const d = new Date(v.y, v.m + delta, 1); return { y: d.getFullYear(), m: d.getMonth() }; });
  const selectable = (d) => d && d >= today && isWeekday(d);

  async function confirm(e) {
    e.preventDefault();
    setStatus('sending');
    const when = `${DOW[date.getDay()]} ${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} at ${slot}`;
    const ok = await createBooking({ ...form, event: EVENT.title, duration: EVENT.duration, when });
    setStatus(ok ? 'done' : 'error');
  }

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section className="container-x py-16 md:py-24">
      <Reveal className="max-w-3xl">
        <p className="label-mono tick">Schedule</p>
        <h1 className="fluid-h2 mt-4 font-display font-extrabold">Book a mission briefing</h1>
        <p className="measure mt-5 text-muted-foreground">
          A focused 30-minute call to scope your cyber, cloud, compliance, workforce, or operational
          challenge — and outline exactly how Raptor can help.
        </p>
      </Reveal>

      <div className="mt-12 overflow-hidden border border-border bg-surface">
        <div className="grid lg:grid-cols-[300px_1fr_300px] lg:divide-x lg:divide-border">
          {/* Event summary */}
          <div className="border-b border-border p-7 lg:border-b-0">
            <p className="label-mono">Raptor Solutions</p>
            <h2 className="mt-3 font-display text-xl font-bold">{EVENT.title}</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5"><Clock className="h-4 w-4 text-accent" /> {EVENT.duration} minutes</li>
              <li className="flex items-center gap-2.5"><Video className="h-4 w-4 text-accent" /> {EVENT.mode}</li>
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">Times shown in your local timezone. Weekdays only.</p>
          </div>

          {status === 'done' ? (
            <div className="p-10 lg:col-span-2">
              <div className="mx-auto max-w-md text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-accent" strokeWidth={1.5} />
                <h2 className="mt-5 font-display text-2xl font-bold">Briefing requested</h2>
                <p className="mt-3 text-muted-foreground">
                  Thanks, {form.name.split(' ')[0] || 'there'}. We've logged your request for{' '}
                  <span className="text-foreground">{DOW[date.getDay()]} {MONTHS[date.getMonth()]} {date.getDate()} at {slot}</span> and
                  will confirm by email at {form.email} with a secure meeting link.
                </p>
              </div>
            </div>
          ) : !slot ? (
            <>
              {/* Calendar */}
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold">{MONTHS[view.m]} <span className="text-muted-foreground">{view.y}</span></h3>
                  <div className="flex gap-1">
                    <button onClick={() => shiftMonth(-1)} disabled={!canGoBack} className="grid h-8 w-8 place-items-center border border-border transition-colors hover:border-accent disabled:opacity-30" aria-label="Previous month"><ChevronLeft className="h-4 w-4" /></button>
                    <button onClick={() => shiftMonth(1)} className="grid h-8 w-8 place-items-center border border-border transition-colors hover:border-accent" aria-label="Next month"><ChevronRight className="h-4 w-4" /></button>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-7 gap-1 text-center">
                  {DOW.map((d) => <div key={d} className="label-mono py-1 text-[0.6rem]">{d}</div>)}
                  {grid.map((d, i) => (
                    <div key={i} className="aspect-square">
                      {d && (
                        <button
                          disabled={!selectable(d)}
                          onClick={() => setDate(d)}
                          className={[
                            'h-full w-full text-sm transition-colors',
                            selectable(d) ? 'hover:bg-elevated' : 'text-muted-foreground/30 cursor-not-allowed',
                            sameDay(d, date) ? 'bg-accent font-semibold text-accent-foreground' : '',
                          ].join(' ')}
                        >
                          {d.getDate()}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Slots */}
              <div className="border-t border-border p-7 lg:border-t-0">
                <p className="label-mono">{date ? `${DOW[date.getDay()]} ${MONTHS[date.getMonth()]} ${date.getDate()}` : 'Select a date'}</p>
                <div className="mt-5 space-y-2">
                  {date ? SLOTS.map((s) => (
                    <button key={s} onClick={() => setSlot(s)} className="w-full border border-border py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent">
                      {s}
                    </button>
                  )) : <p className="text-sm text-muted-foreground">Pick a day to see available times.</p>}
                </div>
              </div>
            </>
          ) : (
            /* Confirmation form */
            <form onSubmit={confirm} className="p-7 lg:col-span-2">
              <button type="button" onClick={() => setSlot(null)} className="mb-5 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent">
                <ArrowLeft className="h-4 w-4" /> {DOW[date.getDay()]} {MONTHS[date.getMonth()]} {date.getDate()} · {slot}
              </button>
              {status === 'error' && (
                <p className="mb-4 border border-error/40 bg-error/10 p-3 text-sm text-error">Could not submit. Please email info@raptor-ent.com.</p>
              )}
              <div className="grid max-w-lg gap-4">
                <Field label="Full name" required><input required className={inp} value={form.name} onChange={set('name')} /></Field>
                <Field label="Work email" required><input required type="email" className={inp} value={form.email} onChange={set('email')} /></Field>
                <Field label="Organization"><input className={inp} value={form.org} onChange={set('org')} /></Field>
                <Field label="What should we prepare for?"><textarea rows={3} className={inp} value={form.notes} onChange={set('notes')} /></Field>
                <button disabled={status === 'sending'} className="mt-1 inline-flex items-center justify-center gap-2 bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-bright raptor-cut">
                  {status === 'sending' ? <><Loader2 className="h-4 w-4 animate-spin" /> Confirming…</> : 'Confirm briefing'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inp = 'w-full border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent';
function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}{required && <span className="text-accent"> *</span>}</span>
      {children}
    </label>
  );
}
