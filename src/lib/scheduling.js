import { supabase } from './supabase';

/*
  Booking persistence. On the production Postgres backend this calls the
  scheduling API (POST /api/bookings -> server -> internal Postgres), which
  enforces availability, prevents double-booking, and issues the meeting link.

  Interim (static hosting, current Supabase): write to a `bookings` table if it
  exists, otherwise fall back to the existing `contacts` table so no request is
  ever lost. See DATABASE_MIGRATION.md and db/migrations/002_scheduling.sql.
*/
export async function createBooking({ name, email, org, notes, event, duration, when }) {
  // Preferred: dedicated bookings table
  const booking = {
    invitee_name: name,
    invitee_email: email,
    organization: org || null,
    notes: notes || null,
    event_type: event,
    duration_minutes: duration,
    requested_slot: when,
    status: 'requested',
  };
  const { error } = await supabase.from('bookings').insert([booking]);
  if (!error) return true;

  // Fallback: contacts table (guaranteed to exist)
  const { error: fbErr } = await supabase.from('contacts').insert([{
    name,
    email,
    company: org || null,
    interest: 'Meeting Request',
    message: `Requested ${event} (${duration} min) for ${when}.` + (notes ? `\n\nNotes: ${notes}` : ''),
  }]);
  return !fbErr;
}
