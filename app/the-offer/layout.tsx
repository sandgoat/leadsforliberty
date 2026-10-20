import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Month Free Booking System Offer",
  description:
    "Get your first month free. Everything included from day one, plus bonuses for our first 10 founding clients. Book a free 30-minute demo.",
};

export default function TheOfferLayout({ children }: { children: React.ReactNode }) {
  return children;
}
