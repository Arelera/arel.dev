import Link from 'next/link'
import { absoluteUrl } from '@/lib/site'

export default function LegacyRedirect({ destination }: { destination: string }) {
  return <main id="main-content" className="legacy-redirect shell">
    <meta httpEquiv="refresh" content={`0; url=${absoluteUrl(destination)}`} />
    <p>This page has moved. <Link href={destination}>Continue to the new address</Link>.</p>
  </main>
}
