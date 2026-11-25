# SEO log: leadsforliberty.com

## 2026-11-24
- Shipped (PR for review, not live until merged): added 6 indexable pages missing from `app/sitemap.ts` (`/services/missed-call-text-back`, `/services/voice-ai`, `/services/chat-widget`, `/services/contact-forms`, `/services/business-texting`, `/demo`). Footer Services column now links Missed-Call Text-Back and Voice AI Receptionist. Meta descriptions trimmed to 160 characters or fewer on 7 service pages (were 163-182). Added `seo/` context, backlog, log and a citation draft.
- Found: the Search Console property in OpenSEO is the apex URL-prefix, but Google indexes www (the canonical). 0 rows for 2026-08-22 to 2026-11-22. GA4 property 559845845 is connected and tag G-22LDEBCFVC is in `app/layout.tsx`; 0 organic sessions 2026-10-24 to 2026-11-22 and the 30 days before.
- Found: apex and www both serve 200; robots.txt and the sitemap point to www.
- Not connected: DataForSEO (HTTP 401 on SERP and backlinks via OpenSEO; the seo skill's `.env` has placeholder credentials). No keyword, SERP, backlink or GBP data this session.
- Spent: 0 credits (paid calls failed with 401).
- Already fixed earlier: `/resources` article cards no longer link to the missing `/resources/[slug]` route (PR #1).
- Recheck 2026-12-22: in the new GSC property, indexed page count (target: the 6 money pages indexed), impressions for the last 28 days (baseline 0), and organic sessions in GA4 (baseline 0).
