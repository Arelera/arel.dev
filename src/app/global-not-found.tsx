import type { Metadata } from 'next'
import NotFoundContent from '@/components/NotFoundContent'
import { quicksand } from '@/lib/font'
import { siteUrl } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Page not found | arel.dev',
}

export default function GlobalNotFound() {
  return <html lang="en"><body className={quicksand.variable}><a className="skip-link" href="#main-content">Skip to content</a><NotFoundContent /></body></html>
}
