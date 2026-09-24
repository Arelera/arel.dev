import Link from 'next/link'
import { formatPostDate, type PostSummary } from '@/lib/posts'

export default function ArticleCard({ post }: { post: PostSummary }) {
  return <article className="article-row">
    <Link href={`/blog/${post.slug}/`}>
      <span className="article-meta">{formatPostDate(post.date)}</span>
      <span className="article-title">{post.title}</span>
      <span className="article-description">{post.description}</span>
      <span className="article-arrow" aria-hidden="true">→</span>
    </Link>
  </article>
}
