import Image from 'next/image'
import Link from 'next/link'

export default function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-inner">
    <Image className="footer-cat" src="/images/mascot/cat-lounging-v1.webp" width={520} height={260} alt="" aria-hidden="true" />
    <Link className="brand footer-brand" href="/" aria-label="arel home, Chinese immersion guides"><Image className="brand-mark" src="/images/mascot/arel-cat-mark-v2.webp" width={256} height={256} alt="" /><span className="brand-type"><span className="brand-name">arel</span><span className="brand-chinese" lang="zh">中文</span></span></Link>
    <nav className="footer-links" aria-label="Footer navigation">
      <Link href="/blog/">Guides</Link>
      <a href="https://moyuchinese.com/en">Moyu Chinese <span aria-hidden="true">↗</span></a>
      <a href="https://miaozi.co/en">Miaozi <span aria-hidden="true">↗</span></a>
    </nav>
  </div></footer>
}
