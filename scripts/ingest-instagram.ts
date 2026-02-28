import { promises as fs } from 'fs';
import path from 'path';
import { fetchInstagramPosts } from '@/lib/instagram/client';

async function run(): Promise<void> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;
  if (!token || !userId) {
    throw new Error('Set INSTAGRAM_ACCESS_TOKEN and INSTAGRAM_USER_ID');
  }
  const posts = await fetchInstagramPosts(token, userId);
  const outputPath = path.join(process.cwd(), 'data', 'instagram.json');
  await fs.writeFile(outputPath, JSON.stringify(posts, null, 2));
  process.stdout.write(`Wrote ${posts.length} posts to data/instagram.json\n`);
}

run();
