import Image from 'next/image'
import Link from 'next/link'

export default function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-inner">
    <Image className="footer-cat" src="/images/mascot/cat-lounging-v1.webp" width={520} height={260} alt="" aria-hidden="true" />
    <Link className="footer-brand" href="/">arel <span lang="zh">中文</span></Link>
    <Link href="/blog/">Guides</Link>
  </div></footer>
}
