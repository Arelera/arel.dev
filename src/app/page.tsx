import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> A FIELD GUIDE TO CHINESE</p>
          <h1>Find your way<br />into <em>Chinese.</em></h1>
          <p className="hero-lede">Useful ideas for learning from what you watch, what you read, and the words that stay with you.</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/blog/">Explore the guides <span aria-hidden="true">↗</span></Link>
            <a className="text-link" href="#tools">Find your tools <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="A Chinese sentence with pronunciation and meaning">
          <span className="visual-index">LANGUAGE IN CONTEXT / 001</span>
          <div className="visual-character" aria-hidden="true">读</div>
          <div className="sentence-block">
            <span className="sentence-label">A LINE WORTH KEEPING</span>
            <p lang="zh-Hans">今天有点冷，我们去喝茶吧。</p>
            <span className="pinyin">Jīntiān yǒudiǎn lěng, wǒmen qù hē chá ba.</span>
            <span className="translation">It&apos;s a little cold today. Let&apos;s go have tea.</span>
          </div>
          <span className="visual-stamp" aria-hidden="true">看<br />读<br />记</span>
        </div>
      </section>

      <section className="intro-band" aria-label="Learning approach">
        <div className="shell intro-inner">
          <span className="section-kicker">THE IDEA</span>
          <p>Chinese starts to click when a line means something to you. <em>Notice it in a video. Meet it again in a story. Keep the words you want to use.</em></p>
        </div>
      </section>

      <section className="tools-section shell" id="tools">
        <div className="section-heading">
          <div>
            <p className="section-kicker">TWO WAYS IN</p>
            <h2>Watch it. Read it.<br /><em>Make it yours.</em></h2>
          </div>
          <p>Pick the kind of Chinese you want to spend time with today. Both paths leave room to follow your curiosity.</p>
        </div>
        <div className="tools-grid">
          <article className="tool-panel tool-panel-video">
            <div className="tool-panel-top"><span>01 / WATCH</span><span className="tool-symbol" aria-hidden="true">▶</span></div>
            <div className="tool-illustration video-illustration" aria-hidden="true">
              <div className="video-frame"><span className="video-play">▶</span><span className="video-caption">你今天想看什么？</span></div>
            </div>
            <div className="tool-panel-copy">
              <span className="tool-name">MOYU CHINESE</span>
              <h3>Learn through<br /><em>the moment.</em></h3>
              <p>Short Chinese videos with captions, lookup, and review that help you understand what you are watching.</p>
              <a href="https://moyuchinese.com/en" target="_blank" rel="noopener noreferrer">Explore Moyu <span aria-hidden="true">↗</span></a>
            </div>
          </article>
          <article className="tool-panel tool-panel-reading">
            <div className="tool-panel-top"><span>02 / READ</span><span className="tool-symbol" aria-hidden="true">文</span></div>
            <div className="tool-illustration reading-illustration" aria-hidden="true">
              <div className="reading-page"><span>读一点，懂多一点。</span><span>Read a little. Understand a little more.</span><i /></div>
            </div>
            <div className="tool-panel-copy">
              <span className="tool-name">MIAOZI</span>
              <h3>Follow the<br /><em>next line.</em></h3>
              <p>Stories, a Chinese dictionary, and flashcards in one calm place to read and remember new words.</p>
              <a href="https://miaozi.co/en" target="_blank" rel="noopener noreferrer">Explore Miaozi <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        </div>
      </section>

      <section className="guides-section">
        <div className="shell">
          <div className="section-heading guides-heading">
            <div><p className="section-kicker">THE GUIDES</p><h2>Small steps.<br /><em>Real progress.</em></h2></div>
            <Link className="text-link" href="/blog/">View all guides <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="article-grid">{posts.slice(0, 3).map((post, index) => <ArticleCard key={post.slug} post={post} index={index} />)}</div>
        </div>
      </section>
    </main>
  )
}
