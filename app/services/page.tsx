import Link from 'next/link';
import type { Metadata } from 'next';
import type { ElementType } from 'react';
import {
  Globe,
  MapPin,
  Robot,
  Star,
  InstagramLogo,
  MagnifyingGlass,
  Envelope,
  ChatCircleText,
  ChatText,
  Chats,
  NotePencil,
  Microphone,
  Newspaper,
  Megaphone,
  ArrowRight,
} from '@phosphor-icons/react/dist/ssr';

export const metadata: Metadata = {
  title: 'Lead Capture & Booking Services',
  description:
    'Every capability that captures the inquiries you already get, phone calls, missed calls, texts, emails, forms, and DMs, and turns each into a booked appointment on your calendar.',
  alternates: { canonical: 'https://www.leadsforliberty.com/services' },
};

type ServiceLink = {
  slug: string;
  name: string;
  desc: string;
  Icon: ElementType;
};

const allServices: ServiceLink[] = [
  { slug: 'local-seo', name: 'Local SEO', Icon: MapPin, desc: 'Bring more of the right inquiries to an inbox that books them.' },
  { slug: 'google-ads', name: 'Google Ads & LSAs', Icon: MagnifyingGlass, desc: 'High-intent clicks that land in a system that answers and books.' },
  { slug: 'facebook-ads', name: 'Facebook & Instagram Ads', Icon: InstagramLogo, desc: 'Turn social interest into captured, booked appointments.' },
  { slug: 'websites', name: 'Websites', Icon: Globe, desc: 'Fast, mobile-first sites that capture and book every visitor.' },
  { slug: 'google-business-profile', name: 'Google Business Profile', Icon: MapPin, desc: 'Let customers book you straight from Google.' },
  { slug: 'reputation-management', name: 'Reputation Management', Icon: Star, desc: 'Automatic review requests after every booked job.' },
  { slug: 'ai-lead-management', name: 'AI Front Desk', Icon: Robot, desc: 'Answers every channel and books the appointment, 24/7.' },
  { slug: 'email-marketing', name: 'Email Marketing', Icon: Envelope, desc: 'Reminders, rebooking, and win-back that fill the calendar.' },
  { slug: 'sms-marketing', name: 'SMS Marketing', Icon: ChatCircleText, desc: 'Confirmations and reminders that keep appointments booked.' },
  { slug: 'business-texting', name: 'Business Texting', Icon: ChatText, desc: 'A2P-registered texting from your number, so messages actually deliver.' },
  { slug: 'chat-widget', name: 'Website Chat Widget', Icon: Chats, desc: 'Visitors start a text conversation from your site and you reply anywhere.' },
  { slug: 'contact-forms', name: 'Custom Contact Forms', Icon: NotePencil, desc: 'Capture exactly what you need, wired to your calendar and inbox.' },
  { slug: 'voice-ai', name: 'Voice AI Agent', Icon: Microphone, desc: 'An AI that answers the phone, handles FAQs, and books, 24/7.' },
  { slug: 'press-releases', name: 'Press Releases', Icon: Newspaper, desc: 'Build trust that turns more inquiries into bookings.' },
];

export default function ServicesIndexPage() {
  return (
    <>
      <section className="bg-linen section-lg">
        <div className="page-container">
          <p className="font-body mb-5 flex items-center gap-2 text-xs font-semibold uppercase text-crimson" style={{ letterSpacing: '0.12em' }}>
            <Megaphone size={14} weight="fill" aria-hidden="true" />
            Services
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-navy mb-6" style={{ lineHeight: 1.05 }}>
            Fourteen capabilities. <span className="block text-crimson">One booking system.</span>
          </h1>
          <p className="font-body text-lg leading-relaxed text-warm-gray max-w-prose mb-10">
            Each capability below captures the inquiries you already get and turns them into booked appointments. They work on their own, and they compound when you run them together.
          </p>
          <Link href="/the-offer" className="btn-primary" style={{ padding: '0.875rem 1.75rem', fontSize: '1rem', boxShadow: '0 6px 20px rgba(185,28,28,0.20)' }}>
            Get your free month
          </Link>
        </div>
      </section>

      <section className="bg-stone section">
        <div className="page-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allServices.map(({ slug, name, desc, Icon }) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="service-card"
                aria-label={name}
              >
                <div className="sc-head">
                  <Icon size={28} color="#0D1F3C" weight="regular" aria-hidden="true" />
                  <p className="font-body text-base font-semibold text-navy">{name}</p>
                </div>
                <div className="sc-body">
                  <p className="font-body text-sm leading-relaxed text-warm-gray mb-3">{desc}</p>
                  <span className="font-body inline-flex items-center gap-1 text-xs font-semibold text-crimson uppercase" style={{ letterSpacing: '0.08em' }}>
                    Learn more
                    <ArrowRight size={12} weight="bold" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
