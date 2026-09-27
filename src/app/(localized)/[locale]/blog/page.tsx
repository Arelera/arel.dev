import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ArticleCard from '@/components/ArticleCard'
import PageFrame from '@/components/PageFrame'
import { blogCopy } from '@/lib/copy'
import { getAllPosts, getPublishedBlogLocales } from '@/lib/posts'
import { pageMetadata } from '@/lib/seo'
import { isLocale } from '@/lib/site'

type PageProps = { params: Promise<{ locale: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getPublishedBlogLocales().map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale) || !getPublishedBlogLocales().includes(locale)) notFound()
  const copy = blogCopy[locale]
  return pageMetadata({ locale, path: 'blog', title: copy.title, description: copy.description, availableLocales: getPublishedBlogLocales() })
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale) || !getPublishedBlogLocales().includes(locale)) notFound()
  const copy = blogCopy[locale]
  const posts = getAllPosts(locale)

  return <PageFrame locale={locale} path="blog" availableLocales={getPublishedBlogLocales()}>
    <main className="blog-index shell">
      <h1>{copy.title}</h1>
      <p>{copy.intro}</p>
      <div className="article-list">{posts.map((post) => <ArticleCard key={post.slug} post={post} locale={locale} />)}</div>
    </main>
  </PageFrame>
}
