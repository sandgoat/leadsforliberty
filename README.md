# LeadsforLiberty

Lead capture and booking platform for local service businesses, live at **[leadsforliberty.com](https://leadsforliberty.com)**.

Visitors run a free marketing audit of their business website; qualified leads flow into a CRM with SMS follow-up and online booking.

## Stack

- **Next.js 16** (App Router, TypeScript) on Vercel
- **Tailwind CSS**
- **GoHighLevel CRM** — audit leads are pushed via a private integration (`GHL_API_KEY` / `GHL_LOCATION_ID`); without credentials the flow degrades gracefully and logs server-side
- **Google Places API** (optional) — adds Google Business Profile scoring (rating + review count) to the audit
- **Twilio SMS via GHL** — A2P-registered messaging with consent-compliant forms

## Features

- Automated website audit: on-page signal scoring plus optional Google reviews check
- Lead capture forms with SMS consent handling (A2P compliant)
- Booking flow backed by GHL calendars
- Fully responsive, performance-tuned marketing pages

## Development

```bash
npm install
cp .env.example .env.local   # fill in keys, or leave empty for degraded mode
npm run dev
```
