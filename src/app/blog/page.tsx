import type { Metadata } from 'next'
import ArticleCard from '@/components/ArticleCard'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Chinese learning guides',
  description: 'Practical guides to understanding Chinese through videos and reading.',
  alternates: { canonical: '/blog/' },
  openGraph: {
    type: 'website',
    siteName: 'arel.dev',
    title: 'Chinese learning guides',
    description: 'Practical guides to understanding Chinese through videos and reading.',
    url: 'https://arel.dev/blog/',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()
  return <main className="blog-index shell">
    <h1>Chinese immersion guides<span className="hero-period">.</span></h1>
    <p>Practical help for choosing Chinese videos, reading stories, and making sense of unfamiliar words.</p>
    <div className="article-list">{posts.map((post) => <ArticleCard key={post.slug} post={post} />)}</div>
  </main>
}
