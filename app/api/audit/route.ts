import { runAudit } from '@/app/lib/audit';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  let url = '';
  try {
    const body = (await request.json()) as { url?: string };
    url = (body.url || '').toString();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  if (!url.trim()) {
    return Response.json({ ok: false, error: 'Please enter a website address.' }, { status: 400 });
  }

  try {
    const result = await runAudit(url);
    const status = result.ok ? 200 : 422;
    return Response.json(result, { status });
  } catch {
    return Response.json(
      { ok: false, error: 'Something went wrong while analyzing the site.' },
      { status: 500 },
    );
  }
}
