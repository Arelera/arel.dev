import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import HeroCarousel from '@/components/HeroCarousel'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  alternates: { canonical: 'https://arel.dev/' },
}

export default function Home() {
  const posts = getAllPosts()
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'arel.dev',
    url: 'https://arel.dev/',
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd).replace(/</g, '\\u003c') }} />
      <section className="hero shell">
        <div className="hero-copy">
          <h1>Learn Chinese through immersion<span className="hero-period">.</span></h1>
          <p>Spend time with Chinese videos and stories you want to finish, and get help with the parts you don’t understand yet.</p>
          <Link className="inline-link" href="/blog/">Read the guides <span aria-hidden="true">→</span></Link>
        </div>
        <HeroCarousel />
      </section>

      <section className="products shell" aria-label="Chinese learning products">
        <div className="product-list">
          <article className="product">
            <div className="product-copy">
              <h2><Image className="product-icon" src="/images/brands/moyu-icon.webp" width={96} height={96} alt="" />Moyu Chinese</h2>
              <p>Moyu makes short Chinese videos easier to learn from, with captions you can revisit and words you can save without leaving the scene.</p>
              <a className="inline-link" href="https://moyuchinese.com/en">Explore Moyu <span aria-hidden="true">↗</span></a>
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
              <p>Miaozi pairs original Chinese stories with a dictionary, so you can check a word and keep reading without losing your place.</p>
              <a className="inline-link" href="https://miaozi.co/en">Explore Miaozi <span aria-hidden="true">↗</span></a>
            </div>
            <div className="product-stage product-stage-miaozi">
              <Image className="miaozi-shot" src="/images/miaozi-story-menu.webp" width={900} height={473} alt="Miaozi story about a menu with the word 菜单 open in the reader" sizes="(max-width: 700px) calc(100vw - 36px), 500px" />
            </div>
          </article>
        </div>
      </section>

      <section className="guides shell" aria-labelledby="guides-heading">
        <h2 id="guides-heading">Guides</h2>
        <div className="article-list">{posts.map((post) => <ArticleCard key={post.slug} post={post} />)}</div>
      </section>
    </main>
  )
}
