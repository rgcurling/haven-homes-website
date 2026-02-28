import { promises as fs } from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { fetchInstagramPosts } from '@/lib/instagram/client';

export async function POST(request: NextRequest): Promise<NextResponse> {
  const secret = process.env.IG_INGEST_PASSWORD;
  const provided = request.headers.get('x-ingest-password');
  if (secret && provided !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;
  if (!token || !userId) {
    return NextResponse.json({ error: 'Instagram credentials missing' }, { status: 400 });
  }
  const posts = await fetchInstagramPosts(token, userId);
  const outputPath = path.join(process.cwd(), 'data', 'instagram.json');
  await fs.writeFile(outputPath, JSON.stringify(posts, null, 2));
  return NextResponse.json({ count: posts.length });
}
