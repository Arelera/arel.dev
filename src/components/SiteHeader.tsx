import Image from 'next/image'
import Link from 'next/link'

export default function SiteHeader() {
  return <header className="site-header"><div className="shell header-inner">
    <Link className="brand" href="/" aria-label="arel home, Chinese immersion guides"><Image className="brand-mark" src="/images/mascot/arel-cat-mark-v1.webp" width={256} height={256} alt="" priority /><span className="brand-type"><span className="brand-name">arel</span><span className="brand-chinese" lang="zh">中文</span></span></Link>
    <nav aria-label="Main navigation"><Link href="/blog/">Guides</Link></nav>
  </div></header>
}
