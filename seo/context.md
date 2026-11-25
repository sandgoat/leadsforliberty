# SEO context: leadsforliberty.com

Last updated 2026-11-24. Every fact below names its source. Anything put on the site must trace back to this file.

## Offer
- Done-for-you lead-capture and calendar-booking system for appointment-based service businesses. Captures the calls, missed calls, texts, emails, DMs and forms a business already gets and books them. It is not a lead-generation (new-demand) offer. Source: `app/layout.tsx` (default description), homepage `app/page.tsx`.
- Guarantee: "Every inquiry captured, or your next month is on us." Source: `app/the-offer/page.tsx`.
- First month free, no contracts. Source: announcement bar in `app/layout.tsx`, `/the-offer`.
- Built on GoHighLevel. Source: owner notes; `/resources` article list mentions GoHighLevel.

## Prices
- Foundation $1,000/month, Freedom $2,500/month, Legacy $5,000+/month. Source: `app/pricing/page.tsx`.
- Offer page: $2,500 setup included; $1,000/mo rate locked. Source: `app/the-offer/page.tsx`.

## Buyer
- Owners of appointment-based service businesses: home services, contractors/remodelers, real estate, dental/medical, professional services (attorneys, CPAs), auto shops/detailers. Source: `app/industries/*`.

## Service area
- Based in Liberty Hill, TX 78642; LocalBusiness schema lists Liberty Hill, Austin and Texas Hill Country. Source: `app/layout.tsx` (localBusinessLd). Delivered remotely, so buyers can be anywhere in the US; the local angle is `/liberty-hill`.
- No street address is published. Do not invent one.

## Contact / NAP
- Name: Leads for Liberty (site brand "LeadsforLiberty.com"). Phone (559) 349-6165. Email hello@leadsforliberty.com. Source: footer in `app/layout.tsx`.
- A2P 10DLC approved. Source: owner notes; `/services/business-texting`.

## Proof
- None publishable yet. PR #1 (2026-11-19) removed fake testimonials and unsourced stats. Founder photo/bio on `/about` still missing. Do not fabricate stats, reviews, testimonials or case studies.

## Conversion
- Primary: booked walkthrough on `/book` (GoHighLevel calendar embed). Secondary: `/contact` form, `/audit` (noindex), phone, chat widget.
- GA4 key events configured: `close_convert_lead`, `qualify_lead`, `purchase` (OpenSEO GA measurement health, 2026-11-24). Not verified that any of them fires on a `/book` booking.
- Never submit live forms in testing: they push real contacts into GoHighLevel and can trigger SMS.

## Money pages
- `/book`, `/the-offer`, `/pricing`, `/services/missed-call-text-back`, `/services/voice-ai`.

## Competitors
- Not researched yet (paid SERP/keyword data unavailable on 2026-11-24, see log.md).

## Technical facts
- Next.js 16 App Router on Vercel; merge to main = production deploy.
- Canonical host is `https://www.leadsforliberty.com` (`metadataBase` in `app/layout.tsx`). The apex `https://leadsforliberty.com` also serves 200 with no redirect (checked 2026-11-24).
- Titles/descriptions live in each `page.tsx` `metadata`; canonicals self-reference via `alternates.canonical: "./"`; robots in `app/robots.ts`; sitemap is hand-listed in `app/sitemap.ts` (add every new indexable route there).
- The Search Console property connected in OpenSEO is the URL-prefix `https://leadsforliberty.com/` (apex). Google treats apex URLs as alternates of www, so the property shows zero rows. See backlog item 1.
