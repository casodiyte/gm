import { MetadataRoute } from 'next';
import { SITE } from '@/lib/site-data';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || SITE.url;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
