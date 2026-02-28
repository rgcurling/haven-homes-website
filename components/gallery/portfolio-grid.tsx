import Image from 'next/image';
import Link from 'next/link';
import { InstagramPost } from '@/lib/instagram/types';

function renderCards(posts: InstagramPost[]): JSX.Element[] {
  const cards: JSX.Element[] = [];
  for (const post of posts) {
    cards.push(
      <article key={post.id} className="group">
        <Link href={`/portfolio/${post.slug}`}>
          <div className="overflow-hidden rounded-2xl">
            <Image src={post.mediaUrl} alt={post.caption} width={700} height={900} className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <p className="mt-3 text-sm text-foreground/70">{post.caption}</p>
        </Link>
      </article>,
    );
  }
  return cards;
}

export function PortfolioGrid({ posts }: { posts: InstagramPost[] }): JSX.Element {
  return <div className="grid gap-6 md:grid-cols-3">{renderCards(posts)}</div>;
}
