import Image from 'next/image'
import LinkArrow from '@/components/LinkArrow'
import type { PostSummary } from '@/lib/posts'
import { miaoziLocale, type Locale } from '@/lib/site'

export default function ArticleCTA({ cta, locale }: { cta: NonNullable<PostSummary['cta']>; locale: Locale }) {
  const isMoyu = cta.product === 'moyu'
  const name = isMoyu ? 'Moyu Chinese' : 'Miaozi'
  const href = isMoyu ? `https://moyuchinese.com/${locale}/` : `https://miaozi.co/${miaoziLocale(locale)}/read`

  return (
    <aside className={`article-cta article-cta-${cta.product}`} aria-labelledby="article-cta-title">
      <div className="article-cta-copy">
        <div className="article-cta-brand">
          <Image src={isMoyu ? '/images/brands/moyu-icon.webp' : '/images/brands/miaozi-header-mascot.svg'} alt="" width={42} height={42} />
          <span>{name}</span>
        </div>
        <h2 id="article-cta-title">{cta.title}</h2>
        <p>{cta.description}</p>
        <a className="article-cta-link" href={href}>{cta.label}<LinkArrow direction="up-right" /></a>
      </div>
    </aside>
  )
}
