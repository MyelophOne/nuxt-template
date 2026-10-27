# Booking / appointments / events

Read for a real reservation, appointment or dated-event decision. Choose the relevant path; do not invent a calendar, availability or ticket backend.

- **Appointment/service booking:** service/eligibility and conditions → actual date/time choices when available → necessary participant/contact details → review → confirmed outcome or actionable failure.
- **Event information/tickets:** what/for whom → verified date, time zone, place/remote access → relevant programme/format → real ticket/registration action → practical access information.

A desktop context summary beside the longer choice/form can retain orientation; mobile places essential conditions before choices and makes the next action reachable. Sticky summaries must fit and release correctly. Show total/selected conditions before commitment if the real flow has them.

Inspect installed selection/form/disclosure APIs; report a genuine missing calendar/booking capability upstream instead of creating a replacement primitive or adding a dependency silently. Reuse shared Grid, forms, state, i18n and feedback. Use locale-aware formatting of real dates/times, preserving SSR agreement.

Distinguish inquiry, requested slot, pending payment and confirmed reservation. Never show success from a timer, guessed availability, invented capacity/urgency or a fake contact. If only an enquiry is supported, describe it honestly.

Verify unavailable/empty/error states, preserving entered data and selections, keyboard/touch access, correct displayed time zone, recovery and actual confirmation. Required remote services must work with both deployment outputs; static output cannot rely on an absent Nitro endpoint.
