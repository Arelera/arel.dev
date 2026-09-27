import type { Metadata } from 'next'
import { absoluteUrl, languageAlternates, localizedPath, ogLocales, type Locale } from '@/lib/site'

type PageMetadata = {
  locale: Locale
  path?: string
  title: string
  description: string
  availableLocales: readonly Locale[]
  image?: { path: string; alt: string; width: number; height: number }
  article?: { published: string; modified: string }
}

export function pageMetadata({ locale, path = '', title, description, availableLocales, image, article }: PageMetadata): Metadata {
  const url = absoluteUrl(localizedPath(locale, path))
  const socialImage = image ?? { path: '/images/social/arel-home.png', alt: 'arel 中文 — Learn Chinese through immersion', width: 1200, height: 630 }
  const images = [{ url: absoluteUrl(socialImage.path), width: socialImage.width, height: socialImage.height, alt: socialImage.alt }]

  return {
    title: path ? title : { absolute: `arel.dev — ${title}` },
    description,
    alternates: {
      canonical: url,
      ...(availableLocales.length > 1 ? { languages: languageAlternates(path, availableLocales) } : {}),
    },
    robots: { index: true, follow: true },
    openGraph: {
      type: article ? 'article' : 'website',
      siteName: 'arel.dev',
      title,
      description,
      locale: ogLocales[locale],
      url,
      images,
      ...(article ? { publishedTime: article.published, modifiedTime: article.modified } : {}),
    },
    twitter: { card: 'summary_large_image', title, description, images },
  }
}

export function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}
