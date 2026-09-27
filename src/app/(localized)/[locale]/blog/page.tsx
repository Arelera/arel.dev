import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ArticleCard from '@/components/ArticleCard'
import PageFrame from '@/components/PageFrame'
import { blogCopy } from '@/lib/copy'
import { getAllPosts } from '@/lib/posts'
import { pageMetadata } from '@/lib/seo'
import { isLocale, locales } from '@/lib/site'

type PageProps = { params: Promise<{ locale: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const copy = blogCopy[locale]
  return pageMetadata({ locale, path: 'blog', title: copy.title, description: copy.description, availableLocales: locales })
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const copy = blogCopy[locale]
  const englishPosts = getAllPosts('en')
  const translatedPosts = getAllPosts(locale)
  const translations = new Map(translatedPosts.map((post) => [post.slug, post]))
  const englishSlugs = new Set(englishPosts.map((post) => post.slug))
  const posts = [...englishPosts.map((post) => translations.get(post.slug) ?? post), ...translatedPosts.filter((post) => !englishSlugs.has(post.slug))]
  const hasEnglishArticles = locale !== 'en' && englishPosts.some((post) => !translations.has(post.slug))

  return <PageFrame locale={locale} path="blog" availableLocales={locales}>
    <main className="blog-index shell">
      <h1>{copy.title}</h1>
      <p>{copy.intro}</p>
      {hasEnglishArticles && <p className="blog-language-note">{copy.englishArticlesNote}</p>}
      <div className="article-list">{posts.map((post) => <ArticleCard key={post.slug} post={post} locale={locale} articleLocale={translations.has(post.slug) ? locale : 'en'} />)}</div>
    </main>
  </PageFrame>
}
