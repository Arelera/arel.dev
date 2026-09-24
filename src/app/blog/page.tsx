import type { Metadata } from 'next'
import ArticleCard from '@/components/ArticleCard'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Chinese learning guides',
  description: 'Practical guides to understanding Chinese through video, reading, and useful words.',
  alternates: { canonical: '/blog/' },
}

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <main className="blog-index shell">
      <div className="blog-index-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> THE AREL GUIDES</p>
        <h1>Make Chinese<br /><em>make sense.</em></h1>
        <p>Clear ideas you can try the next time you watch, read, or pause over a word.</p>
      </div>
      <div className="blog-index-count"><span>ALL GUIDES</span><span>{String(posts.length).padStart(2, '0')}</span></div>
      <div className="article-grid blog-grid">{posts.map((post, index) => <ArticleCard key={post.slug} post={post} index={index} />)}</div>
    </main>
  )
}
