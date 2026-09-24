import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import './globals.css'

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://arel.dev'),
  title: { default: 'arel.dev — Learn Chinese by watching and reading', template: '%s | arel.dev' },
  description: 'Practical guides and tools for understanding Chinese in videos and stories.',
  icons: { icon: '/icon.svg' },
  openGraph: { type: 'website', siteName: 'arel.dev', title: 'arel.dev — Learn Chinese by watching and reading', description: 'Practical guides and tools for understanding Chinese in videos and stories.', url: 'https://arel.dev/' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={rubik.variable}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
