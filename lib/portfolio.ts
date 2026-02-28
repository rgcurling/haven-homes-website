import { InstagramPost } from '@/lib/instagram/types';

export function collectFilters(posts: InstagramPost[]): string[] {
  const set = new Set<string>();
  set.add('all');
  for (const post of posts) {
    for (const hashtag of post.hashtags) {
      set.add(hashtag);
    }
  }
  return Array.from(set).slice(0, 12);
}

export function filterPosts(posts: InstagramPost[], filter: string, query: string): InstagramPost[] {
  const lower = query.toLowerCase();
  const results: InstagramPost[] = [];
  for (const post of posts) {
    const matchesFilter = filter === 'all' || post.hashtags.includes(filter);
    const haystack = `${post.caption} ${post.keywords.join(' ')} ${post.hashtags.join(' ')}`.toLowerCase();
    const matchesQuery = lower.length === 0 || haystack.includes(lower);
    if (matchesFilter && matchesQuery) {
      results.push(post);
    }
  }
  return results;
}

export function findPostBySlug(posts: InstagramPost[], slug: string): InstagramPost | undefined {
  for (const post of posts) {
    if (post.slug === slug) return post;
  }
  return undefined;
}
