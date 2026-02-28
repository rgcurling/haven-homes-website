import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { readInstagramData } from '@/lib/instagram/read';
import { findPostBySlug } from '@/lib/portfolio';

type DetailProps = { params: { slug: string } };

function renderSequence(src: string, caption: string): JSX.Element[] {
  const sequence: JSX.Element[] = [];
  for (let i = 0; i < 3; i += 1) {
    sequence.push(<Image key={`${src}-${i}`} src={src} alt={caption} width={1200} height={860} className="h-[460px] w-full rounded-2xl object-cover" />);
  }
  return sequence;
}

function renderList(items: string[]): JSX.Element[] {
  const list: JSX.Element[] = [];
  for (const item of items) {
    list.push(<li key={item}>{item}</li>);
  }
  return list;
}

export default function PortfolioDetailPage({ params }: DetailProps): JSX.Element {
  const posts = readInstagramData();
  const post = findPostBySlug(posts, params.slug);
  if (!post) notFound();
  const project = projects[0];
  return (
    <main className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <h1 className="font-serif text-5xl">{project?.title ?? 'Project Detail'}</h1>
      <p className="text-foreground/75">{post.caption}</p>
      <section className="grid gap-5 md:grid-cols-3">{renderSequence(post.mediaUrl, post.caption)}</section>
      <section className="grid gap-6 rounded-2xl bg-muted p-8 md:grid-cols-2">
        <div><h2 className="font-serif text-3xl">Materials</h2><ul className="mt-3 list-disc pl-4">{renderList(project?.materials ?? [])}</ul></div>
        <div><h2 className="font-serif text-3xl">Mood</h2><ul className="mt-3 list-disc pl-4">{renderList(project?.mood ?? [])}</ul></div>
      </section>
      <section className="rounded-2xl border border-accent/30 p-6">
        <h2 className="font-serif text-3xl">Before / After</h2>
        <p className="mt-2 text-sm text-foreground/70">Interactive slider placeholder for renovation reveal.</p>
      </section>
      <Link href={post.permalink} target="_blank" className="text-sm uppercase tracking-[0.2em] text-accent">View original Instagram post</Link>
    </main>
  );
}
