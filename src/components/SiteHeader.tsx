import Link from 'next/link'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="arel.dev home">
          <span className="brand-mark" aria-hidden="true">a<span>.</span></span>
          <span className="brand-name">arel<span>.dev</span></span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/blog/">Guides</Link>
          <Link href="/#tools">Tools</Link>
        </nav>
      </div>
    </header>
  )
}
