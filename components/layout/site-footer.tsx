import Link from 'next/link';
import { siteConfig } from '@/data/site';

export function SiteFooter(): JSX.Element {
  return (
    <footer className="mt-20 border-t border-accent/20">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-foreground/70">{siteConfig.description}</p>
        </div>
        <div className="text-sm text-foreground/70">
          <p>{siteConfig.address}</p>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
        </div>
        <div className="flex gap-4 text-sm">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
