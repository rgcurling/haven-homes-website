import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.SITE_URL ?? 'http://localhost:3000';
  const paths = ['', '/services', '/portfolio', '/about', '/contact', '/privacy', '/terms'];
  const entries: MetadataRoute.Sitemap = [];
  for (const item of paths) {
    entries.push({ url: `${base}${item}`, lastModified: new Date() });
  }
  return entries;
}
