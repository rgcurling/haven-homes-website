import { PortfolioControls } from '@/components/gallery/portfolio-controls';
import { PortfolioGrid } from '@/components/gallery/portfolio-grid';
import { PortfolioMagazine } from '@/components/gallery/portfolio-magazine';
import { readInstagramData } from '@/lib/instagram/read';
import { buildMetadata } from '@/lib/seo/metadata';
import { collectFilters, filterPosts } from '@/lib/portfolio';

export const metadata = buildMetadata('Portfolio | Haven Homes Interiors', 'A curated portfolio inspired by Haven Homes Interiors Instagram.', '/portfolio');

type PortfolioPageProps = {
  searchParams: { filter?: string; q?: string; view?: string };
};

export default function PortfolioPage({ searchParams }: PortfolioPageProps): JSX.Element {
  const posts = readInstagramData();
  const filter = searchParams.filter ?? 'all';
  const query = searchParams.q ?? '';
  const view = searchParams.view === 'magazine' ? 'magazine' : 'grid';
  const filters = collectFilters(posts);
  const visiblePosts = filterPosts(posts, filter, query);
  return (
    <main className="mx-auto max-w-6xl space-y-8 px-6 py-16">
      <h1 className="font-serif text-5xl">Portfolio</h1>
      <PortfolioControls filters={filters} activeFilter={filter} search={query} view={view} />
      {view === 'magazine' ? <PortfolioMagazine posts={visiblePosts} /> : <PortfolioGrid posts={visiblePosts} />}
    </main>
  );
}
