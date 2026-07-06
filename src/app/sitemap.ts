import type { MetadataRoute } from 'next';
import { icons } from '@/lib/icons';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://iconyx-cdn.vercel.app';

  // Base pages
  const routes = [
    '',
    '/icons',
    '/docs',
    '/sandbox',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic pages for all 160 icons!
  const iconRoutes = icons.map((icon) => ({
    url: `${baseUrl}/icons/${icon.name}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...iconRoutes];
}
