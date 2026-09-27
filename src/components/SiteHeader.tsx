import Image from 'next/image'
import Link from 'next/link'

export default function SiteHeader() {
  return <header className="site-header"><div className="shell header-inner">
    <Link className="brand" href="/" aria-label="arel 中文 home"><Image className="brand-mark" src="/images/mascot/arel-cat-mark-v1.webp" width={256} height={256} alt="" priority /><Image className="brand-wordmark" src="/images/brands/arel-wordmark-v1.png" width={400} height={300} alt="arel 中文" priority /></Link>
    <nav aria-label="Main navigation"><Link href="/blog/">Guides</Link></nav>
  </div></header>
}
