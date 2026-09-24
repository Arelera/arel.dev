import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import Script from 'next/script'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import './globals.css'

const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://arel.dev'),
  title: { default: 'arel.dev — Learn Chinese through immersion', template: '%s | arel.dev' },
  description: 'Practical guides and tools for understanding Chinese in videos and stories.',
  icons: { icon: '/icon.svg' },
  openGraph: { type: 'website', siteName: 'arel.dev', title: 'arel.dev — Learn Chinese through immersion', description: 'Practical guides and tools for understanding Chinese in videos and stories.', url: 'https://arel.dev/' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" data-hanzi-script="simplified" suppressHydrationWarning>
      <body className={quicksand.variable}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
      <Script id="restore-hanzi-script" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: "try{var script=localStorage.getItem('arel-hanzi-script');if(script==='traditional')document.documentElement.dataset.hanziScript='traditional'}catch(_){}" }} />
    </html>
  )
}
