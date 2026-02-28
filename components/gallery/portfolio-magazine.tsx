import Image from 'next/image';
import Link from 'next/link';
import { InstagramPost } from '@/lib/instagram/types';

function renderMagazine(posts: InstagramPost[]): JSX.Element[] {
  const rows: JSX.Element[] = [];
  for (let index = 0; index < posts.length; index += 3) {
    const lead = posts[index];
    const second = posts[index + 1];
    const third = posts[index + 2];
    if (!lead) continue;
    rows.push(
      <section key={lead.id} className="grid gap-5 md:grid-cols-3">
        <Link href={`/portfolio/${lead.slug}`} className="md:col-span-2 overflow-hidden rounded-2xl">
          <Image src={lead.mediaUrl} alt={lead.caption} width={1200} height={820} className="h-[500px] w-full object-cover" />
        </Link>
        <div className="space-y-5">
          {second ? <Link href={`/portfolio/${second.slug}`} className="block overflow-hidden rounded-2xl"><Image src={second.mediaUrl} alt={second.caption} width={600} height={500} className="h-[240px] w-full object-cover" /></Link> : null}
          {third ? <Link href={`/portfolio/${third.slug}`} className="block overflow-hidden rounded-2xl"><Image src={third.mediaUrl} alt={third.caption} width={600} height={500} className="h-[240px] w-full object-cover" /></Link> : null}
        </div>
      </section>,
    );
  }
  return rows;
}

export function PortfolioMagazine({ posts }: { posts: InstagramPost[] }): JSX.Element {
  return <div className="space-y-12">{renderMagazine(posts)}</div>;
}
