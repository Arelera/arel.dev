import Link from 'next/link'
import type { PostSummary } from '@/lib/posts'

export default function ArticleCard({ post, index }: { post: PostSummary; index: number }) {
  return (
    <article className="article-card">
      <Link href={`/blog/${post.slug}/`} className="article-card-link">
        <div className="article-card-top">
          <span className="article-number">{String(index + 1).padStart(2, '0')}</span>
          <span className="topic-pill">{post.topic}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <div className="article-card-bottom">
          <span>{post.readingMinutes} min read</span>
          <span className="arrow" aria-hidden="true">↗</span>
        </div>
      </Link>
    </article>
  )
}
