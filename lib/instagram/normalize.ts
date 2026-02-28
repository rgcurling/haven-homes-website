import { extractHashtags, inferKeywords } from '@/lib/instagram/keywords';
import { createSlug } from '@/lib/instagram/slug';
import { InstagramPost } from '@/lib/instagram/types';

type GraphPost = {
  id: string;
  caption?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  timestamp?: string;
};

export function normalizeInstagramPosts(posts: GraphPost[]): InstagramPost[] {
  const normalized: InstagramPost[] = [];
  for (const post of posts) {
    const caption = post.caption ?? 'Haven Homes Interiors project';
    normalized.push({
      id: post.id,
      slug: createSlug(caption),
      caption,
      mediaUrl: post.media_url ?? '/portfolio/room-1.svg',
      thumbnailUrl: post.thumbnail_url ?? post.media_url ?? '/portfolio/room-1.svg',
      permalink: post.permalink ?? 'https://www.instagram.com/',
      timestamp: post.timestamp ?? new Date().toISOString(),
      hashtags: extractHashtags(caption),
      keywords: inferKeywords(caption),
    });
  }
  return normalized;
}
