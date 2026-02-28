import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata('Services | Haven Homes Interiors', 'Interior design services for full-home transformations.', '/services');

export default function ServicesPage(): JSX.Element {
  return (
    <main className="mx-auto max-w-5xl space-y-8 px-6 py-16">
      <h1 className="font-serif text-5xl">Services</h1>
      <p className="max-w-3xl text-foreground/75">From concept to final styling, we guide every decision to create homes that age beautifully.</p>
      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl bg-muted p-6"><h2 className="font-serif text-2xl">Full-Service Design</h2><p className="mt-3 text-sm">Comprehensive design, procurement, and installation.</p></article>
        <article className="rounded-2xl bg-muted p-6"><h2 className="font-serif text-2xl">Renovation Direction</h2><p className="mt-3 text-sm">Selections and detailing for remodels and new builds.</p></article>
        <article className="rounded-2xl bg-muted p-6"><h2 className="font-serif text-2xl">Virtual Studio</h2><p className="mt-3 text-sm">Remote design plans for clients nationwide.</p></article>
      </section>
    </main>
  );
}
