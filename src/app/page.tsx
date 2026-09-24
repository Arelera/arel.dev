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
          <span className="section-number">01 / THE TOOLS</span>
          <h2 id="products-heading">Watch it. Read it.</h2>
          <p>Two useful places to follow your curiosity.</p>
        </div>
        <div className="product-list">
          <article className="product">
            <div className="product-copy">
              <span className="product-label">WATCH / 01</span>
              <h3>Moyu Chinese</h3>
              <p>Find a short Chinese video, hear a phrase in its scene, then check the caption and play it again. Moyu keeps the words you notice close to the moment you heard them.</p>
              <a className="inline-link" href="https://moyuchinese.com/en">Explore Moyu <span aria-hidden="true">↗</span></a>
            </div>
            <div className="product-image product-image-moyu">
              <Image src="/images/moyu-app.webp" width={750} height={1360} alt="Moyu Chinese video with Chinese captions, a translation, and vocabulary progress" sizes="(max-width: 700px) 100vw, 470px" />
            </div>
          </article>
          <article className="product">
            <div className="product-copy">
              <span className="product-label">READ / 02</span>
              <h3>Miaozi</h3>
              <p>Follow a Chinese story until a word stops you. Check it in Miaozi’s dictionary, then get straight back to reading. Stories and vocabulary tools live in the same place.</p>
              <a className="inline-link" href="https://miaozi.co/en">Explore Miaozi <span aria-hidden="true">↗</span></a>
            </div>
            <div className="product-image product-image-miaozi">
              <Image src="/images/miaozi-dictionary.webp" width={678} height={480} alt="Miaozi dictionary entry for 顺便, with pinyin and English definitions" sizes="(max-width: 700px) 100vw, 470px" />
            </div>
          </article>
        </div>
      </section>

      <section className="guides shell" aria-labelledby="guides-heading">
        <div className="section-intro guides-intro">
          <div><span className="section-number">02 / THE GUIDES</span><h2 id="guides-heading">Recent guides</h2></div>
          <Link className="inline-link" href="/blog/">All guides <span aria-hidden="true">→</span></Link>
        </div>
        <div className="article-list">{posts.map((post) => <ArticleCard key={post.slug} post={post} />)}</div>
      </section>
    </main>
  )
}
