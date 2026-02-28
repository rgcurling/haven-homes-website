import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { InstagramPost } from '@/lib/instagram/types';

function renderCollage(posts: InstagramPost[]): JSX.Element[] {
  const cards: JSX.Element[] = [];
  let index = 0;
  for (const post of posts.slice(0, 4)) {
    const rotate = index % 2 === 0 ? 'md:rotate-[-1.5deg]' : 'md:rotate-[1.5deg]';
    cards.push(
      <div key={post.id} className={`overflow-hidden rounded-2xl ${rotate}`}>
        <Image src={post.mediaUrl} alt={post.caption} width={600} height={760} className="h-full w-full object-cover" />
      </div>,
    );
    index += 1;
  }
  return cards;
}

export function HomeHero({ posts }: { posts: InstagramPost[] }): JSX.Element {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">Haven Homes Interiors</p>
        <h1 className="font-serif text-5xl leading-tight md:text-6xl">Timeless spaces with editorial soul.</h1>
        <p className="max-w-lg text-foreground/75">We design quietly luxurious homes that balance architecture, comfort, and collected beauty.</p>
        <div className="flex gap-4">
          <Link href="/contact"><Button>Book a Consultation</Button></Link>
          <Link href="/portfolio"><Button variant="outline">Explore Portfolio</Button></Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">{renderCollage(posts)}</div>
    </section>
  );
}
