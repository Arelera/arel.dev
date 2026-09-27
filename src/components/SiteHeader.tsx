import Link from 'next/link'

export default function SiteHeader() {
  return <header className="site-header"><div className="shell header-inner">
    <Link className="brand" href="/" aria-label="arel home, Chinese immersion guides"><span className="brand-name">arel</span><span className="brand-chinese" lang="zh">中文</span></Link>
    <nav aria-label="Main navigation"><Link href="/blog/">Guides</Link></nav>
  </div></header>
}
