import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { formatPostDate, getAllPosts, getPost } from '@/lib/posts'
import ScriptSwitch from '@/components/ScriptSwitch'
import LinkArrow from '@/components/LinkArrow'

type PageProps = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const summary = getAllPosts().find((post) => post.slug === slug)
  if (!summary) return {}
  return {
    title: summary.title,
    description: summary.description,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: { type: 'article', siteName: 'arel.dev', title: summary.title, description: summary.description, url: `https://arel.dev/blog/${slug}/`, publishedTime: summary.date, modifiedTime: summary.updated ?? summary.date, images: summary.image ? [{ url: summary.image, width: 960, height: 640, alt: summary.imageAlt }] : undefined },
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  if (!getAllPosts().some((post) => post.slug === slug)) notFound()
  const post = await getPost(slug)
  const more = getAllPosts().filter((item) => item.slug !== slug).slice(0, 2)
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: 'en',
    url: `https://arel.dev/blog/${slug}/`,
    mainEntityOfPage: `https://arel.dev/blog/${slug}/`,
    ...(post.image ? { image: `https://arel.dev${post.image}` } : {}),
  }

  return (
    <main className="post-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }} />
      <div className="shell post-shell">
        <Link className="back-link" href="/blog/"><LinkArrow direction="left" /> All guides</Link>
        <header className="post-header">
          <div className="post-details">
            <span className="post-meta">{formatPostDate(post.date)}</span>
            <ScriptSwitch />
          </div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </header>
        {post.image && <Image className="post-cover" src={post.image} width={960} height={640} alt={post.imageAlt ?? ''} sizes="(max-width: 700px) calc(100vw - 36px), 720px" loading="eager" />}
        <article className="post-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </div>
      {more.length > 0 && <section className="more-guides shell"><h2>More guides</h2><div className="article-list">{more.map((item) => <div className="more-guide-row" key={item.slug}><Link href={`/blog/${item.slug}/`}>{item.title} <LinkArrow /></Link></div>)}</div></section>}
    </main>
  )
}
