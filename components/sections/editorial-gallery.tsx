import Image from 'next/image';
import Link from 'next/link';
import { InstagramPost } from '@/lib/instagram/types';

function renderImages(posts: InstagramPost[]): JSX.Element[] {
  const list: JSX.Element[] = [];
  for (const post of posts.slice(0, 3)) {
    list.push(
      <article key={post.id} className="space-y-3">
        <div className="overflow-hidden rounded-2xl">
          <Image src={post.mediaUrl} alt={post.caption} width={900} height={1200} className="h-[420px] w-full object-cover" />
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Cover Story</p>
        <p>{post.caption}</p>
      </article>,
    );
  }
  return list;
}

export function EditorialGallery({ posts }: { posts: InstagramPost[] }): JSX.Element {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="font-serif text-4xl">Editorial Gallery</h2>
        <Link href="/portfolio" className="text-sm uppercase tracking-[0.2em]">View all projects</Link>
      </div>
      <div className="grid gap-8 md:grid-cols-3">{renderImages(posts)}</div>
    </section>
  );
}
