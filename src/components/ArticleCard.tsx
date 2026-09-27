import Image from 'next/image'
import Link from 'next/link'
import { formatPostDate, type PostSummary } from '@/lib/posts'
import { guidePreviewCopy } from '@/lib/copy'
import { localizedPath, type Locale } from '@/lib/site'

export default function ArticleCard({ post, locale, articleLocale = locale }: { post: PostSummary; locale: Locale; articleLocale?: Locale }) {
  const preview = articleLocale === locale ? undefined : guidePreviewCopy[locale]?.[post.slug]
  return <article className="article-row">
    <Link href={localizedPath(articleLocale, `blog/${post.slug}`)}>
      {post.image && <Image className="article-image" src={post.image} width={960} height={640} alt={articleLocale === locale ? post.imageAlt ?? '' : ''} sizes="(max-width: 700px) calc(100vw - 36px), 500px" />}
      <span className="article-meta">{formatPostDate(post.date, locale)}</span>
      <span className="article-title" lang={preview ? locale : articleLocale}>{preview?.title ?? post.title}</span>
      <span className="article-description" lang={preview ? locale : articleLocale}>{preview?.description ?? post.description}</span>
    </Link>
  </article>
}
