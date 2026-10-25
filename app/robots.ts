import type { MetadataRoute } from 'next'
import { SITE } from './data/seo'

// Semua mesin pencari dan mesin AI (Google, Bing, ChatGPT, Claude, Perplexity) boleh membaca seluruh situs.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'PerplexityBot', 'Google-Extended'], allow: '/' },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
