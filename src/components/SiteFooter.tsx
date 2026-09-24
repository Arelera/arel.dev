import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <Link className="footer-brand" href="/">arel.dev<span className="footer-dot">.</span></Link>
        <p>Good Chinese is found in the things you want to understand.</p>
        <Link href="/blog/">Read the guides <span aria-hidden="true">↗</span></Link>
      </div>
    </footer>
  )
}
