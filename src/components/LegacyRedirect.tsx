import { absoluteUrl } from '@/lib/site'

export default function LegacyRedirect({ destination }: { destination: string }) {
  return <main id="main-content">
    <meta httpEquiv="refresh" content={`0; url=${absoluteUrl(destination)}`} />
  </main>
}
