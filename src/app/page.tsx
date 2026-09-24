import Image from 'next/image'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <main>
      <section className="hero shell">
        <h1>Learn Chinese by watching and reading.</h1>
        <p>Practical guides for understanding Chinese in videos and stories, with tools that help you keep going.</p>
        <Link className="inline-link" href="/blog/">Read the guides <span aria-hidden="true">→</span></Link>
      </section>

      <section className="products shell" aria-labelledby="products-heading">
        <div className="section-intro">
          <h2 id="products-heading">Tools for the next step</h2>
          <p>Watch something you enjoy. Read a little further. Look up what matters.</p>
        </div>
        <div className="product-list">
          <article className="product">
            <div className="product-copy">
              <h3>Moyu Chinese</h3>
              <p>Short Chinese videos with interactive captions and vocabulary review. Use it when you want to hear a phrase in a real scene, then check what you missed.</p>
              <a className="inline-link" href="https://moyuchinese.com/en">Explore Moyu <span aria-hidden="true">↗</span></a>
            </div>
            <div className="product-image product-image-moyu">
              <Image src="/images/moyu-app.webp" width={750} height={1360} alt="Moyu Chinese video with Chinese captions, a translation, and vocabulary progress" sizes="(max-width: 700px) 100vw, 470px" />
            </div>
          </article>
          <article className="product">
            <div className="product-copy">
              <h3>Miaozi</h3>
              <p>A Chinese dictionary, stories, and vocabulary tools for reading. Look up a word without losing the thread of what you were reading.</p>
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
          <h2 id="guides-heading">Recent guides</h2>
          <Link className="inline-link" href="/blog/">All guides <span aria-hidden="true">→</span></Link>
        </div>
        <div className="article-list">{posts.map((post) => <ArticleCard key={post.slug} post={post} />)}</div>
      </section>
    </main>
  )
}
