import type { Metadata } from 'next'
import ArticleCard from '@/components/ArticleCard'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Chinese learning guides',
  description: 'Practical guides to understanding Chinese through videos and reading.',
  alternates: { canonical: '/blog/' },
}

export default function BlogPage() {
  const posts = getAllPosts()
  return <main className="blog-index shell">
    <h1>Guides<span className="hero-period">.</span></h1>
    <p>Useful ways to choose what to watch, read with more confidence, and learn from the language you find.</p>
    <div className="article-list">{posts.map((post) => <ArticleCard key={post.slug} post={post} />)}</div>
  </main>
}
