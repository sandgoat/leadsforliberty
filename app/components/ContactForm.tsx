'use client';

import { useState } from 'react';

const inputStyle: React.CSSProperties = {
  borderColor: '#d1d5db',
  fontFamily: 'var(--font-sans)',
  background: '#ffffff',
  color: 'var(--iron)',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      phone: String(data.get('phone') || ''),
      businessName: String(data.get('businessName') || ''),
      service: String(data.get('service') || ''),
      message: String(data.get('message') || ''),
      smsConsent: data.get('smsConsent') === 'on',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!res.ok || !result.ok) {
        setError(result.error || 'Something went wrong. Please try again or call us.');
        setStatus('error');
        return;
      }
      setStatus('success');
      form.reset();
    } catch {
      setError('Something went wrong. Please check your connection and try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-md p-6 text-center"
        style={{ background: 'rgba(11, 130, 61, 0.08)', border: '1px solid rgba(11, 130, 61, 0.25)' }}
      >
        <p className="text-lg font-bold mb-2" style={{ color: 'var(--iron)', fontFamily: 'var(--font-serif)' }}>
          Message sent.
        </p>
        <p className="text-sm" style={{ color: 'var(--iron)', fontFamily: 'var(--font-sans)' }}>
          We typically respond within 2 hours during business hours. In the meantime, you can{' '}
          <a href="/book" className="font-semibold underline">
            book a free walkthrough
          </a>{' '}
          directly on our calendar.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Contact form" className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--iron)', fontFamily: 'var(--font-sans)' }}>
            Your Name <span aria-hidden="true" style={{ color: 'var(--independence-red)' }}>*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-md text-base border outline-none transition-colors"
            style={inputStyle}
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--iron)', fontFamily: 'var(--font-sans)' }}>
            Email Address <span aria-hidden="true" style={{ color: 'var(--independence-red)' }}>*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="john@yourbusiness.com"
            className="w-full px-4 py-3 rounded-md text-base border outline-none transition-colors"
            style={inputStyle}
            aria-required="true"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--iron)', fontFamily: 'var(--font-sans)' }}>
            Phone Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="(559) 349-6165"
            className="w-full px-4 py-3 rounded-md text-base border outline-none transition-colors"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="contact-business" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--iron)', fontFamily: 'var(--font-sans)' }}>
            Business Name <span aria-hidden="true" style={{ color: 'var(--independence-red)' }}>*</span>
          </label>
          <input
            id="contact-business"
            type="text"
            name="businessName"
            required
            autoComplete="organization"
            placeholder="Smith HVAC LLC"
            className="w-full px-4 py-3 rounded-md text-base border outline-none transition-colors"
            style={inputStyle}
            aria-required="true"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-service" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--iron)', fontFamily: 'var(--font-sans)' }}>
          How can we help? <span aria-hidden="true" style={{ color: 'var(--independence-red)' }}>*</span>
        </label>
        <select
          id="contact-service"
          name="service"
          required
          aria-required="true"
          className="w-full px-4 py-3 rounded-md text-base border outline-none transition-colors"
          style={inputStyle}
          defaultValue=""
        >
          <option value="" disabled>Select what you need most…</option>
          <option value="missed-call-text-back">Capture missed calls with text-back</option>
          <option value="google-business-profile">Turn Google Business Profile clicks into bookings</option>
          <option value="facebook-ads">Book appointments from Facebook &amp; Instagram DMs</option>
          <option value="google-ads">Capture and book inquiries from ads</option>
          <option value="local-seo">Convert website visitors into appointments</option>
          <option value="reputation-management">Reputation &amp; review management</option>
          <option value="websites">Website with built-in booking</option>
          <option value="business-texting">Compliant business texting (A2P)</option>
          <option value="chat-widget">Website chat widget</option>
          <option value="ai-lead-management">Automatic follow-up that books the appointment</option>
          <option value="press-releases">Press releases &amp; PR</option>
          <option value="full-system">The full capture-and-booking system</option>
          <option value="not-sure">Not sure, I need help figuring that out</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--iron)', fontFamily: 'var(--font-sans)' }}>
          Tell us about your business <span aria-hidden="true" style={{ color: 'var(--independence-red)' }}>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your business and where inquiries are slipping through the cracks today..."
          className="w-full px-4 py-3 rounded-md text-base border outline-none transition-colors resize-y"
          style={inputStyle}
          aria-required="true"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="contact-sms-consent"
          type="checkbox"
          name="smsConsent"
          className="mt-1 h-4 w-4 shrink-0 rounded border"
          style={{ borderColor: '#d1d5db', accentColor: 'var(--iron)' }}
        />
        <label htmlFor="contact-sms-consent" className="text-xs leading-relaxed" style={{ color: '#6b7280', fontFamily: 'var(--font-sans)' }}>
          I agree to receive text messages from Leads for Liberty at the phone number provided
          regarding my inquiry. Message frequency varies. Message &amp; data rates may apply.
          Reply STOP to opt out or HELP for help. See our{' '}
          <a href="/legal/privacy" className="underline">Privacy Policy</a> and{' '}
          <a href="/legal/terms" className="underline">Terms of Service</a>. Consent is not a
          condition of purchase.
        </label>
      </div>

      {status === 'error' && error && (
        <p role="alert" className="text-sm font-semibold" style={{ color: 'var(--independence-red)', fontFamily: 'var(--font-sans)' }}>
          {error}
        </p>
      )}

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message →'}
      </button>
      <p className="text-xs" style={{ color: '#9ca3af', fontFamily: 'var(--font-sans)' }}>
        We typically respond within 2 hours during business hours.
      </p>
    </form>
  );
}
