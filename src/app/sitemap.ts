import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/blog-data';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://gmcorporativoindustrial.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/catalogo',
    '/servicios',
    '/nosotros',
    '/marcas',
    '/blog',
    '/contacto',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
