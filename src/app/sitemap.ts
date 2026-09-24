import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://arel.dev/', changeFrequency: 'monthly', priority: 1 },
    { url: 'https://arel.dev/blog/', changeFrequency: 'weekly', priority: 0.9 },
    ...getAllPosts().map((post) => ({ url: `https://arel.dev/blog/${post.slug}/`, lastModified: new Date(post.date), changeFrequency: 'monthly' as const, priority: 0.8 })),
  ]
}
