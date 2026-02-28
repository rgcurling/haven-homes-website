import Link from 'next/link';

function renderFilterLinks(filters: string[], active: string, search: string, view: string): JSX.Element[] {
  const items: JSX.Element[] = [];
  for (const filter of filters) {
    const href = `/portfolio?filter=${encodeURIComponent(filter)}&q=${encodeURIComponent(search)}&view=${view}`;
    const style = active === filter ? 'bg-foreground text-background' : 'border border-foreground/30';
    items.push(
      <Link key={filter} href={href} className={`rounded-full px-4 py-2 text-sm ${style}`}>
        {filter}
      </Link>,
    );
  }
  return items;
}

export function PortfolioControls(props: {
  filters: string[];
  activeFilter: string;
  search: string;
  view: string;
}): JSX.Element {
  const { filters, activeFilter, search, view } = props;
  return (
    <section className="space-y-4">
      <form action="/portfolio" className="flex gap-2">
        <input type="hidden" name="filter" value={activeFilter} />
        <input type="hidden" name="view" value={view} />
        <input name="q" defaultValue={search} placeholder="Search by mood, room, material" className="w-full rounded-full border border-accent/40 px-4 py-2" />
        <button className="rounded-full bg-foreground px-4 py-2 text-background">Search</button>
      </form>
      <div className="flex flex-wrap gap-2">{renderFilterLinks(filters, activeFilter, search, view)}</div>
      <div className="flex gap-3 text-sm uppercase tracking-[0.16em]">
        <Link href={`/portfolio?filter=${activeFilter}&q=${search}&view=grid`} className={view === 'grid' ? 'text-accent' : ''}>Grid</Link>
        <Link href={`/portfolio?filter=${activeFilter}&q=${search}&view=magazine`} className={view === 'magazine' ? 'text-accent' : ''}>Magazine</Link>
      </div>
    </section>
  );
}
