import type { MetadataRoute } from 'next'
import { LANDING_LIST, SITE } from './data/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    ...LANDING_LIST.map((l) => ({
      url: `${SITE.url}${l.path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    { url: `${SITE.url}/tentang`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE.url}/daftar`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
