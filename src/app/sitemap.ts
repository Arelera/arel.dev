import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://arel.dev/' },
    { url: 'https://arel.dev/blog/' },
    ...getAllPosts().map((post) => ({ url: `https://arel.dev/blog/${post.slug}/`, lastModified: new Date(post.updated ?? post.date) })),
  ]
}
