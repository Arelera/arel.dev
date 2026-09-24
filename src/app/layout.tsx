import type { Metadata } from 'next'
import { DM_Sans, Instrument_Serif } from 'next/font/google'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import './globals.css'

const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', variable: '--font-serif', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://arel.dev'),
  title: { default: 'arel.dev — A field guide to Chinese', template: '%s | arel.dev' },
  description: 'Practical guides for learning Chinese through what you watch, read, and remember.',
  icons: { icon: '/icon.svg' },
  openGraph: { type: 'website', siteName: 'arel.dev', title: 'arel.dev — A field guide to Chinese', description: 'Practical guides for learning Chinese through what you watch, read, and remember.', url: 'https://arel.dev/' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${sans.variable} ${serif.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
