import Image from 'next/image'
import LinkArrow from '@/components/LinkArrow'
import type { PostSummary } from '@/lib/posts'
import type { Locale } from '@/lib/site'

export default function ArticleCTA({ cta, locale }: { cta: NonNullable<PostSummary['cta']>; locale: Locale }) {
  const href = `https://moyuchinese.com/${locale}/`

  return (
    <aside className="article-cta" aria-labelledby="article-cta-title">
      <div className="article-cta-copy">
        <h2 id="article-cta-title">{cta.title}</h2>
        <p>{cta.description}</p>
        <a className="article-cta-link" href={href}>{cta.label}<LinkArrow direction="up-right" /></a>
      </div>
      <Image className="article-cta-mascot" src="/images/brands/moyu-celebrate.webp" alt="" width={900} height={801} sizes="(max-width: 700px) 205px, 285px" loading="lazy" />
    </aside>
  )
}
