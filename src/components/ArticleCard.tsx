import Image from 'next/image'
import Link from 'next/link'
import { formatPostDate, type PostSummary } from '@/lib/posts'
import { localizedPath, type Locale } from '@/lib/site'

export default function ArticleCard({ post, locale }: { post: PostSummary; locale: Locale }) {
  return <article className="article-row">
    <Link href={localizedPath(locale, `blog/${post.slug}`)}>
      {post.image && <Image className="article-image" src={post.image} width={960} height={640} alt={post.imageAlt ?? ''} sizes="(max-width: 700px) calc(100vw - 36px), 500px" />}
      <span className="article-meta">{formatPostDate(post.date, locale)}</span>
      <span className="article-title">{post.title}</span>
      <span className="article-description">{post.description}</span>
    </Link>
  </article>
}
