import Image from 'next/image'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <main>
      <section className="hero shell">
        <h1>Learn Chinese through immersion<span className="hero-period">.</span></h1>
        <p>Spend time with Chinese videos and stories you want to finish, and get help with the parts you don’t understand yet.</p>
        <Link className="inline-link" href="/blog/">Read the guides <span aria-hidden="true">→</span></Link>
      </section>

      <section className="products shell" aria-label="Chinese learning products">
        <div className="product-list">
          <article className="product">
            <div className="product-copy">
              <h2>Moyu Chinese</h2>
              <p>Moyu makes short Chinese videos easier to learn from, with captions you can revisit and words you can save without leaving the scene.</p>
              <a className="inline-link" href="https://moyuchinese.com/en">Explore Moyu <span aria-hidden="true">↗</span></a>
            </div>
            <div className="product-stage product-stage-moyu" aria-label="Moyu Chinese app screens">
              <div className="phone phone-video">
                <Image src="/images/moyu-spongebob.webp" width={750} height={1631} alt="Moyu Chinese video player showing SpongeBob with interactive Chinese captions" sizes="(max-width: 700px) 43vw, 210px" priority />
              </div>
              <div className="phone phone-review">
                <Image src="/images/moyu-review.webp" width={750} height={1631} alt="Moyu Chinese vocabulary review screen" sizes="(max-width: 700px) 39vw, 185px" />
              </div>
            </div>
          </article>
          <article className="product">
            <div className="product-copy">
              <h2>Miaozi</h2>
              <p>Miaozi pairs original Chinese stories with a dictionary, so you can check a word and keep reading without losing your place.</p>
              <a className="inline-link" href="https://miaozi.co/en">Explore Miaozi <span aria-hidden="true">↗</span></a>
            </div>
            <div className="product-stage product-stage-miaozi" aria-label="Miaozi reader and dictionary screens">
              <div className="miaozi-shot miaozi-shot-reader">
                <Image src="/images/miaozi-reader.webp" width={704} height={540} alt="Miaozi reader showing a Chinese story with its illustration and title" sizes="(max-width: 700px) 64vw, 300px" />
              </div>
              <div className="miaozi-shot miaozi-shot-dictionary">
                <Image src="/images/miaozi-dictionary.webp" width={620} height={385} alt="Miaozi dictionary entry for 顺便 with definitions and an example sentence" sizes="(max-width: 700px) 64vw, 300px" />
              </div>
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
