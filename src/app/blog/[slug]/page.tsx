import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { formatPostDate, getAllPosts, getPost } from '@/lib/posts'

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
    openGraph: { type: 'article', title: summary.title, description: summary.description, url: `https://arel.dev/blog/${slug}/`, publishedTime: summary.date },
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  if (!getAllPosts().some((post) => post.slug === slug)) notFound()
  const post = await getPost(slug)
  const more = getAllPosts().filter((item) => item.slug !== slug).slice(0, 2)

  return (
    <main className="post-page">
      <div className="shell post-shell">
        <Link className="back-link" href="/blog/"><span aria-hidden="true">←</span> All guides</Link>
        <header className="post-header">
          <div className="post-meta"><span className="topic-pill">{post.topic}</span><span>{formatPostDate(post.date)}</span><span>{post.readingMinutes} min read</span></div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </header>
        <article className="post-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        <div className="post-end"><span aria-hidden="true">✳</span><p>Keep following the language.</p></div>
      </div>
      {more.length > 0 && <section className="more-guides"><div className="shell"><div className="more-guides-heading"><p className="section-kicker">KEEP READING</p><Link className="text-link" href="/blog/">All guides <span aria-hidden="true">↗</span></Link></div><div className="more-guides-list">{more.map((item) => <Link key={item.slug} href={`/blog/${item.slug}/`}><span>{item.topic}</span><strong>{item.title}</strong><span aria-hidden="true">↗</span></Link>)}</div></div></section>}
    </main>
  )
}
