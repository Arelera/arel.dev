import Link from 'next/link'

export default function SiteHeader() {
  return <header className="site-header"><div className="shell header-inner">
    <Link className="brand" href="/" aria-label="arel.dev home">arel<span>.</span>dev</Link>
    <nav aria-label="Main navigation"><Link href="/blog/">Guides</Link></nav>
  </div></header>
}
