import sample from '@/data/instagram.sample.json';
import live from '@/data/instagram.json';
import { InstagramPost } from '@/lib/instagram/types';

export function readInstagramData(): InstagramPost[] {
  if (live.length > 0) {
    return live as InstagramPost[];
  }
  return sample as InstagramPost[];
}
