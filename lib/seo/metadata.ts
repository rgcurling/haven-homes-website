import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export function buildMetadata(title: string, description: string, path = ''): Metadata {
  const url = `${process.env.SITE_URL ?? 'http://localhost:3000'}${path}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
    },
  };
}

export function localBusinessJsonLd(): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: siteConfig.name,
    address: siteConfig.address,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    url: process.env.SITE_URL ?? 'http://localhost:3000',
  });
}
