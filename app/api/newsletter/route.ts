export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Newsletter signup from the /resources page. The form is a plain HTML POST,
 * so this handler reads form-encoded data and redirects back to /resources
 * with a status flag instead of returning JSON. The subscriber is created in
 * GoHighLevel with a `newsletter` tag; if GHL env vars are not set the signup
 * is logged and the redirect still succeeds (same pattern as /api/contact).
 */
export async function POST(request: Request) {
  const url = new URL(request.url);
  const redirectTo = (status: 'subscribed' | 'invalid' | 'error') =>
    Response.redirect(new URL(`/resources?newsletter=${status}#newsletter`, url.origin), 303);

  let email = '';
  try {
    const form = await request.formData();
    email = String(form.get('email') || '').trim();
  } catch {
    return redirectTo('invalid');
  }

  if (!EMAIL_RE.test(email)) {
    return redirectTo('invalid');
  }

  const token = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) {
    console.warn('[newsletter] GHL env not set, signup not pushed to CRM:', { email });
    return redirectTo('subscribed');
  }

  try {
    // Upsert so an existing lead subscribing again gets tagged, not duplicated.
    const res = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Version: '2021-07-28',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        locationId,
        email,
        source: 'Website Newsletter',
        tags: ['newsletter'],
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error('[newsletter] GHL upsert error', res.status, text);
      return redirectTo('error');
    }
    return redirectTo('subscribed');
  } catch (err) {
    console.error('[newsletter] unexpected error', err);
    return redirectTo('error');
  }
}
