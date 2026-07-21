export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  service?: string;
  message?: string;
  smsConsent?: boolean;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Creates the contact-form lead in GoHighLevel, with the message and service
 * interest attached as a note so it shows up in the conversation timeline.
 * Requires GHL_API_KEY (Private Integration token) and GHL_LOCATION_ID.
 * If those are not set, the submission is logged and the flow still succeeds,
 * so the form works in development before the CRM is wired.
 */
async function createGhlContact(body: ContactBody): Promise<{ ok: boolean; reason?: string; contactId?: string }> {
  const token = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) {
    console.warn('[contact] GHL env not set, lead not pushed to CRM:', {
      email: body.email,
      businessName: body.businessName,
      service: body.service,
    });
    return { ok: true, reason: 'crm-not-configured' };
  }

  const [firstName, ...rest] = (body.name || '').trim().split(/\s+/);
  const lastName = rest.join(' ') || undefined;

  const res = await fetch('https://services.leadconnectorhq.com/contacts/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Version: '2021-07-28',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      locationId,
      email: body.email,
      firstName: firstName || undefined,
      lastName,
      phone: body.phone || undefined,
      companyName: body.businessName || undefined,
      source: 'Website Contact Form',
      tags: [
        'contact-form',
        body.service ? `interest-${body.service}` : 'interest-unspecified',
        body.smsConsent && body.phone ? 'sms-opt-in' : 'sms-no-consent',
      ],
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    console.error('[contact] GHL contact error', res.status, text);
    return { ok: false, reason: `crm-error-${res.status}` };
  }

  const data = (await res.json().catch(() => null)) as { contact?: { id?: string } } | null;
  const contactId = data?.contact?.id;

  if (contactId && body.message) {
    const noteRes = await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Version: '2021-07-28',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        body: `Service interest: ${body.service || 'not specified'}\n\nSMS consent: ${
          body.smsConsent && body.phone
            ? `YES — opted in via website contact form checkbox on ${new Date().toISOString()}`
            : 'no'
        }\n\n${body.message}`,
      }),
    });
    if (!noteRes.ok) {
      const text = await noteRes.text().catch(() => '');
      console.error('[contact] GHL note error', noteRes.status, text);
    }
  }

  return { ok: true, contactId };
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  if (!body.email || !EMAIL_RE.test(body.email)) {
    return Response.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (!body.name?.trim()) {
    return Response.json({ ok: false, error: 'Please enter your name.' }, { status: 400 });
  }
  if (!body.businessName?.trim()) {
    return Response.json({ ok: false, error: 'Please enter your business name.' }, { status: 400 });
  }
  if (!body.message?.trim()) {
    return Response.json({ ok: false, error: 'Please tell us a bit about your business.' }, { status: 400 });
  }

  try {
    const result = await createGhlContact(body);
    if (!result.ok) {
      return Response.json({ ok: false, error: 'Something went wrong on our end. Please try again or call us.' }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error('[contact] unexpected error', err);
    return Response.json({ ok: false, error: 'Something went wrong on our end. Please try again or call us.' }, { status: 500 });
  }
}
