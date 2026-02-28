import { normalizeInstagramPosts } from '@/lib/instagram/normalize';
import { InstagramPost } from '@/lib/instagram/types';

type GraphResponse = { data: Array<Record<string, string>> };

const fields = 'id,caption,media_url,thumbnail_url,permalink,timestamp';

export async function fetchInstagramPosts(token: string, userId: string): Promise<InstagramPost[]> {
  const endpoint = `https://graph.instagram.com/${userId}/media?fields=${fields}&access_token=${token}`;
  const response = await fetch(endpoint, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Instagram fetch failed');
  }
  const payload = (await response.json()) as GraphResponse;
  return normalizeInstagramPosts(payload.data);
}
