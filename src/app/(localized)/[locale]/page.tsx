import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ArticleCard from '@/components/ArticleCard'
import HeroCarousel from '@/components/HeroCarousel'
import LinkArrow from '@/components/LinkArrow'
import PageFrame from '@/components/PageFrame'
import { homeCopy } from '@/lib/copy'
import { getAllPosts } from '@/lib/posts'
import { pageMetadata, safeJsonLd } from '@/lib/seo'
import { isLocale, locales, localizedPath, miaoziLocale } from '@/lib/site'

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const copy = homeCopy[locale]
  return pageMetadata({
    locale,
    title: `${copy.heroBefore}${copy.heroChinese}${copy.heroAfter}`,
    description: copy.heroDescription,
    availableLocales: locales,
  })
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const copy = homeCopy[locale]
  const posts = getAllPosts(locale)
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'arel.dev',
    url: 'https://arel.dev/en/',
  }

  return (
    <PageFrame locale={locale} availableLocales={locales}>
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteJsonLd) }} />
      <section className="hero shell">
        <div className="hero-copy">
          <h1>{copy.heroBefore}<span className="hero-highlight">{copy.heroChinese}</span>{copy.heroAfter}</h1>
          <p>{copy.heroDescription}</p>
          <Link className="inline-link" href={localizedPath(locale, 'blog')}>{copy.readGuides} <LinkArrow /></Link>
        </div>
        <HeroCarousel />
      </section>

      <section className="products shell" aria-label="Moyu Chinese and Miaozi">
        <div className="product-list">
          <article className="product">
            <div className="product-copy">
              <h2><Image className="product-icon" src="/images/brands/moyu-icon.webp" width={96} height={96} alt="" />Moyu Chinese</h2>
              <p>{copy.moyuDescription}</p>
              <a className="inline-link" href={`https://moyuchinese.com/${locale}/`}>{copy.exploreMoyu} <LinkArrow direction="up-right" /></a>
            </div>
            <div className="product-stage product-stage-moyu" aria-label="Moyu Chinese app screens">
              <div className="phone phone-video">
                <Image src="/images/moyu-spongebob.webp" width={750} height={1631} alt="Moyu Chinese video player showing SpongeBob with interactive Chinese captions" sizes="(max-width: 700px) 43vw, 210px" />
              </div>
              <div className="phone phone-review">
                <Image src="/images/moyu-review.webp" width={750} height={1631} alt="Moyu Chinese vocabulary review screen" sizes="(max-width: 700px) 39vw, 185px" />
              </div>
            </div>
          </article>
          <article className="product">
            <div className="product-copy">
              <h2><Image className="product-icon miaozi-product-icon" src="/images/brands/miaozi-header-mascot.svg" width={96} height={96} alt="" />Miaozi</h2>
              <p>{copy.miaoziDescription}</p>
              <a className="inline-link" href={`https://miaozi.co/${miaoziLocale(locale)}/`}>{copy.exploreMiaozi} <LinkArrow direction="up-right" /></a>
            </div>
            <div className="product-stage product-stage-miaozi">
              <Image className="miaozi-shot" src="/images/miaozi-story-menu.webp" width={900} height={473} alt="Miaozi story about a menu with the word 菜单 open in the reader" sizes="(max-width: 700px) calc(100vw - 36px), 500px" />
            </div>
          </article>
        </div>
      </section>

      <section className="guides shell" aria-labelledby="guides-heading">
        <h2 id="guides-heading">{copy.guides}</h2>
        {posts.length > 0
          ? <div className="article-list">{posts.map((post) => <ArticleCard key={post.slug} post={post} locale={locale} />)}</div>
          : <div className="guides-fallback"><p>{copy.englishGuidesNote}</p><Link className="inline-link" href={localizedPath(locale, 'blog')}>{copy.readGuides} <LinkArrow /></Link></div>}
      </section>
    </main>
    </PageFrame>
  )
}
