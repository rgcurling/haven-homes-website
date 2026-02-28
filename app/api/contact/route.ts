import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendContactEmail } from '@/lib/email/send';
import { checkRateLimit } from '@/lib/rateLimit/memory';

const payloadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(20),
  website: z.string().optional(),
});

export async function POST(request: NextRequest): Promise<NextResponse> {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }
  const json = await request.json();
  const parsed = payloadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
  }
  if (parsed.data.website) {
    return NextResponse.json({ success: true });
  }
  await sendContactEmail(parsed.data);
  return NextResponse.json({ success: true });
}
