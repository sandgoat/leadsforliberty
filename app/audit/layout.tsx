import type { Metadata } from "next";

// /audit is a client page whose content depends on ?site=, so it needs its own
// metadata (it inherited the homepage title and description) and is kept out
// of the index: every ?site= variant is a per-prospect result, not a landing page.
export const metadata: Metadata = {
  title: "Free Booking Leak Audit for Your Website",
  description:
    "See where your website leaks bookings: we check how calls, texts, forms, and chat reach you and show what to fix so every inquiry gets booked.",
  robots: { index: false, follow: true },
};

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
