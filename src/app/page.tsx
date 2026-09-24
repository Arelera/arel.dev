import Image from 'next/image'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <main>
      <section className="hero shell">
        <h1>Learn Chinese by watching and reading<span className="hero-period">.</span></h1>
        <p>Hear a line you want to replay. Find a story you want to finish. Learn more from the Chinese you already want to spend time with.</p>
        <Link className="inline-link" href="/blog/">Read the guides <span aria-hidden="true">→</span></Link>
      </section>

      <section className="products shell" aria-labelledby="products-heading">
        <div className="section-intro">
          <span className="section-number">THE TOOLS</span>
          <h2 id="products-heading">Watch it. Read it.</h2>
          <p>Two ways to stay with the Chinese you find interesting.</p>
        </div>
        <div className="product-list">
          <article className="product">
            <div className="product-copy">
              <span className="product-label">WATCH</span>
              <h3>Moyu Chinese</h3>
              <p>Find a short Chinese video, hear a phrase in its scene, then check the caption and play it again. Moyu keeps the words you notice close to the moment you heard them.</p>
              <a className="inline-link" href="https://moyuchinese.com/en">Explore Moyu <span aria-hidden="true">↗</span></a>
            </div>
            <div className="product-stage product-stage-moyu" aria-label="Moyu Chinese app screens">
              <div className="phone phone-video">
                <Image src="/images/moyu-video.webp" width={750} height={1631} alt="Moyu Chinese video player with Chinese captions and a translation" sizes="(max-width: 700px) 43vw, 210px" priority />
              </div>
              <div className="phone phone-review">
                <Image src="/images/moyu-review.webp" width={750} height={1631} alt="Moyu Chinese vocabulary review screen" sizes="(max-width: 700px) 39vw, 185px" />
              </div>
            </div>
          </article>
          <article className="product">
            <div className="product-copy">
              <span className="product-label">READ</span>
              <h3>Miaozi</h3>
              <p>Follow a Chinese story until a word stops you. Check it in Miaozi’s dictionary, then get straight back to reading. Stories and vocabulary tools live in the same place.</p>
              <a className="inline-link" href="https://miaozi.co/en">Explore Miaozi <span aria-hidden="true">↗</span></a>
            </div>
            <div className="product-stage product-stage-miaozi" aria-label="Miaozi reader and dictionary screens">
              <div className="miaozi-shot miaozi-shot-reader">
                <Image src="/images/miaozi-reader.webp" width={410} height={515} alt="Miaozi reader showing a Chinese story with its illustration and title" sizes="(max-width: 700px) 45vw, 240px" />
              </div>
              <div className="miaozi-shot miaozi-shot-dictionary">
                <Image src="/images/miaozi-dictionary.webp" width={620} height={385} alt="Miaozi dictionary entry for 顺便 with definitions and an example sentence" sizes="(max-width: 700px) 45vw, 240px" />
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="guides shell" aria-labelledby="guides-heading">
        <div className="section-intro guides-intro">
          <div><span className="section-number">KEEP GOING</span><h2 id="guides-heading">Recent guides</h2></div>
          <Link className="inline-link" href="/blog/">All guides <span aria-hidden="true">→</span></Link>
        </div>
        <div className="article-list">{posts.map((post) => <ArticleCard key={post.slug} post={post} />)}</div>
      </section>
    </main>
  )
}
