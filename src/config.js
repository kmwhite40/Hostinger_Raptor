// Site configuration.
//
// Microsoft Bookings public page URL. When set, /schedule embeds your live
// Bookings page (real Outlook availability + automatic Microsoft Teams meeting
// + invites). Get it in Microsoft 365:
//   outlook.office.com/bookings  →  your booking calendar  →  "Booking page"
//   →  copy the published page URL, e.g.
//   https://outlook.office365.com/owa/calendar/RaptorSolutions@raptor-ent.com/bookings/
//
// Microsoft blocks iframe embedding of Bookings (CSP frame-ancestors), so the
// site opens this page in a new tab for the actual booking + Teams meeting.
// Override at build time via VITE_BOOKINGS_URL.
export const BOOKINGS_URL =
  import.meta.env.VITE_BOOKINGS_URL ||
  'https://outlook.office.com/bookwithme/user/c5fef7529ebc48ad8b261e5fe441c160@Raptor-ent.com/meetingtype/adHlN20IW0uxhFBPb_X0WA2?anonymous&ismsaljsauthenabled&ep=mlink';
