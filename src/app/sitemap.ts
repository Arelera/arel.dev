import type { MetadataRoute } from 'next'
import { getAllPosts, getPostLocales, getPublishedBlogLocales } from '@/lib/posts'
import { absoluteUrl, languageAlternates, locales, localizedPath } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogLocales = getPublishedBlogLocales()
  return [
    ...locales.map((locale) => ({
      url: absoluteUrl(localizedPath(locale)),
      alternates: { languages: languageAlternates('', locales) },
    })),
    ...blogLocales.map((locale) => ({
      url: absoluteUrl(localizedPath(locale, 'blog')),
      ...(blogLocales.length > 1 ? { alternates: { languages: languageAlternates('blog', blogLocales) } } : {}),
    })),
    ...blogLocales.flatMap((locale) => getAllPosts(locale).map((post) => {
      const available = getPostLocales(post.slug)
      return {
        url: absoluteUrl(localizedPath(locale, `blog/${post.slug}`)),
        lastModified: new Date(post.updated ?? post.date),
        ...(available.length > 1 ? { alternates: { languages: languageAlternates(`blog/${post.slug}`, available) } } : {}),
      }
    })),
  ]
}
