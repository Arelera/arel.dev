import Image from 'next/image'
import Link from 'next/link'
import LinkArrow from '@/components/LinkArrow'

export default function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-inner">
    <Image className="footer-cat" src="/images/mascot/cat-lounging-v1.webp" width={520} height={260} alt="" aria-hidden="true" />
    <Link className="brand footer-brand" href="/" aria-label="arel 中文 home"><Image className="brand-mark" src="/images/mascot/arel-cat-mark-v1.webp" width={256} height={256} alt="" /><Image className="brand-wordmark" src="/images/brands/arel-wordmark-v1.png" width={400} height={300} alt="arel 中文" /></Link>
    <nav className="footer-links" aria-label="Footer navigation">
      <Link href="/blog/">Guides</Link>
      <a href="https://moyuchinese.com/en">Moyu Chinese <LinkArrow direction="up-right" /></a>
      <a href="https://miaozi.co/en">Miaozi <LinkArrow direction="up-right" /></a>
    </nav>
  </div></footer>
}
