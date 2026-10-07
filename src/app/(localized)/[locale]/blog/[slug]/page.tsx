import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { formatPostDate, getAllPosts, getPost, getPostLocales, getPublishedBlogLocales } from '@/lib/posts'
import ScriptSwitch from '@/components/ScriptSwitch'
import LinkArrow from '@/components/LinkArrow'
import PageFrame from '@/components/PageFrame'
import ArticleCard from '@/components/ArticleCard'
import ArticleCTA from '@/components/ArticleCTA'
import { articleUiCopy, blogCopy } from '@/lib/copy'
import { pageMetadata, safeJsonLd } from '@/lib/seo'
import { absoluteUrl, isLocale, localizedPath } from '@/lib/site'

type PageProps = { params: Promise<{ locale: string; slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getPublishedBlogLocales().flatMap((locale) => getAllPosts(locale).map(({ slug }) => ({ locale, slug })))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const summary = getAllPosts(locale).find((post) => post.slug === slug)
  if (!summary) notFound()
  return pageMetadata({
    locale,
    path: `blog/${slug}`,
    title: summary.title,
    description: summary.description,
    availableLocales: getPostLocales(slug),
    ...(summary.image ? { image: { path: summary.image, width: 960, height: 640, alt: summary.imageAlt ?? summary.title } } : {}),
    article: { published: summary.date, modified: summary.updated ?? summary.date },
  })
}

export default async function PostPage({ params }: PageProps) {
  const { locale, slug } = await params
  if (!isLocale(locale) || !getAllPosts(locale).some((post) => post.slug === slug)) notFound()
  const post = await getPost(slug, locale)
  const more = getAllPosts(locale).filter((item) => item.slug !== slug).slice(0, 2)
  const url = absoluteUrl(localizedPath(locale, `blog/${slug}`))
  const copy = blogCopy[locale]
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: locale,
    url,
    mainEntityOfPage: url,
    ...(post.image ? { image: absoluteUrl(post.image) } : {}),
  }

  return (
    <PageFrame locale={locale} path={`blog/${slug}`} availableLocales={getPostLocales(slug)}>
    <main className="post-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(articleJsonLd) }} />
      <div className="shell post-shell">
        <Link className="back-link" href={localizedPath(locale, 'blog')}><LinkArrow direction="left" /> {copy.allGuides}</Link>
        <header className="post-header">
          <div className="post-details">
            <span className="post-meta">{formatPostDate(post.date, locale)}</span>
            <ScriptSwitch />
          </div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </header>
        {post.image && <Image className="post-cover" src={post.image} width={960} height={640} alt={post.imageAlt ?? ''} sizes="(max-width: 700px) calc(100vw - 36px), 720px" loading="eager" />}
        {post.headings.length > 1 && <nav className="post-contents" aria-label={articleUiCopy[locale].contents}>
          <details open>
            <summary>{articleUiCopy[locale].contents}</summary>
            <ol>{post.headings.map((heading) => <li key={heading.id}><a href={`#${heading.id}`} dangerouslySetInnerHTML={{ __html: heading.titleHtml }} /></li>)}</ol>
          </details>
        </nav>}
        <article className="post-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        {post.cta && <ArticleCTA cta={post.cta} locale={locale} />}
      </div>
      {more.length > 0 && <section className="more-guides shell"><h2>{copy.moreGuides}</h2><div className="article-list">{more.map((item) => <ArticleCard key={item.slug} post={item} locale={locale} />)}</div></section>}
    </main>
    </PageFrame>
  )
}
