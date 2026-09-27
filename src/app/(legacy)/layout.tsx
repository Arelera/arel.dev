import type { Metadata } from 'next'
import Script from 'next/script'
import { quicksand } from '@/lib/font'
import { siteUrl } from '@/lib/site'
import '../globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: '/icon.png' },
}

export default function LegacyLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-scroll-behavior="smooth" data-hanzi-script="simplified" suppressHydrationWarning>
    <head>
      <Script id="restore-hanzi-script" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: "try{var script=localStorage.getItem('arel-hanzi-script');if(script==='traditional')document.documentElement.dataset.hanziScript='traditional'}catch(_){}" }} />
      <Script id="restore-color-theme" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: "try{var theme=localStorage.getItem('arel-color-theme');if(theme==='light'||theme==='dark')document.documentElement.dataset.theme=theme}catch(_){}" }} />
    </head>
    <body className={quicksand.variable}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      {children}
    </body>
  </html>
}
