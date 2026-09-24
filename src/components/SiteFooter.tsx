import Link from 'next/link'

export default function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-inner">
    <Link href="/">arel<span>.</span>dev</Link>
    <Link href="/blog/">Guides</Link>
  </div></footer>
}
