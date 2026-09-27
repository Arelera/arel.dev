import Image from 'next/image'
import Link from 'next/link'
import { formatPostDate, type PostSummary } from '@/lib/posts'

export default function ArticleCard({ post }: { post: PostSummary }) {
  return <article className="article-row">
    <Link href={`/blog/${post.slug}/`}>
      {post.image && <Image className="article-image" src={post.image} width={960} height={640} alt={post.imageAlt ?? ''} sizes="(max-width: 700px) calc(100vw - 36px), 500px" />}
      <span className="article-meta">{formatPostDate(post.date)}</span>
      <span className="article-title">{post.title}</span>
      <span className="article-description">{post.description}</span>
    </Link>
  </article>
}
