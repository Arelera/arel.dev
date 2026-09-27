import Link from 'next/link'

export default function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-inner">
    <Link className="footer-brand" href="/">arel <span lang="zh">中文</span></Link>
    <Link href="/blog/">Guides</Link>
  </div></footer>
}
