import Link from 'next/link'

export default function NotFound() {
  return <main className="not-found-page shell"><span className="section-kicker">404 / PAGE NOT FOUND</span><h1>Lost the thread?</h1><p>This page isn&apos;t here. The guides are a good place to begin again.</p><Link className="button button-dark" href="/blog/">Browse the guides <span aria-hidden="true">↗</span></Link></main>
}
