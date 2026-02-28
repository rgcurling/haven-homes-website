import Link from 'next/link';
import { navItems, siteConfig } from '@/data/site';

function renderNavItems(): JSX.Element[] {
  const result: JSX.Element[] = [];
  for (const item of navItems) {
    result.push(
      <Link key={item.href} href={item.href} className="text-sm uppercase tracking-[0.18em] hover:text-accent">
        {item.label}
      </Link>,
    );
  }
  return result;
}

export function SiteHeader(): JSX.Element {
  return (
    <header className="border-b border-accent/20 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-serif text-xl tracking-wide">{siteConfig.name}</Link>
        <nav className="hidden gap-6 md:flex">{renderNavItems()}</nav>
      </div>
    </header>
  );
}
