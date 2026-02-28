import { locations } from '@/data/locations';
import { buildMetadata } from '@/lib/seo/metadata';

function renderLocations(): JSX.Element[] {
  const items: JSX.Element[] = [];
  for (const location of locations) {
    items.push(<li key={location}>{location}</li>);
  }
  return items;
}

export const metadata = buildMetadata('About | Haven Homes Interiors', 'Meet the Haven Homes Interiors design studio.', '/about');

export default function AboutPage(): JSX.Element {
  return (
    <main className="mx-auto max-w-5xl space-y-8 px-6 py-16">
      <h1 className="font-serif text-5xl">Our Studio</h1>
      <p className="max-w-3xl text-foreground/75">Haven Homes Interiors creates soulful residences grounded in natural materials, tailored details, and serene proportion.</p>
      <ul className="list-disc space-y-2 pl-5 text-foreground/75">{renderLocations()}</ul>
    </main>
  );
}
