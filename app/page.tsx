import { EditorialGallery } from '@/components/sections/editorial-gallery';
import { HomeHero } from '@/components/sections/home-hero';
import { StudioNotesStrip } from '@/components/sections/studio-notes-strip';
import { testimonials } from '@/data/testimonials';
import { readInstagramData } from '@/lib/instagram/read';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata('Haven Homes Interiors | Editorial Interior Design', 'A premium residential interior design studio.', '/');

function renderTestimonials(): JSX.Element[] {
  const cards: JSX.Element[] = [];
  for (const item of testimonials) {
    cards.push(
      <article key={item.name} className="rounded-2xl border border-accent/20 p-6">
        <p className="font-serif text-2xl">“{item.quote}”</p>
        <p className="mt-3 text-sm uppercase tracking-[0.18em] text-accent">{item.name}</p>
      </article>,
    );
  }
  return cards;
}

export default function HomePage(): JSX.Element {
  const posts = readInstagramData();
  return (
    <main>
      <HomeHero posts={posts} />
      <StudioNotesStrip />
      <EditorialGallery posts={posts} />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 font-serif text-4xl">What clients feel</h2>
        <div className="grid gap-6 md:grid-cols-2">{renderTestimonials()}</div>
      </section>
    </main>
  );
}
