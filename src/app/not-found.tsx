import Link from 'next/link'

export default function NotFound() {
  return <main className="not-found-page shell"><span>404</span><h1>Page not found</h1><p>This page isn&apos;t here.</p><Link className="inline-link" href="/blog/">Browse the guides →</Link></main>
}
