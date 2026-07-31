import type { MetadataRoute } from 'next';
import { icons } from '@/lib/icons';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://iconyx-cdn.vercel.app';

  // Base pages
  const routes = [
    '',
    '/icons',
    '/docs',
    '/sandbox',
    '/changelog',
    '/privacy',
    '/terms',
    '/contact',
    '/status',
    '/request-icon',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic pages for all icons!
  const iconRoutes = icons.map((icon) => ({
    url: `${baseUrl}/icons/${icon.name}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...iconRoutes];
}
