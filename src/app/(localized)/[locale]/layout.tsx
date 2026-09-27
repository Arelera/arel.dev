import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { homeCopy } from '@/lib/copy'
import { quicksand } from '@/lib/font'
import { isLocale, locales, siteUrl } from '@/lib/site'
import '../../globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'arel.dev', template: '%s | arel.dev' },
  icons: { icon: '/icon.png' },
}

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <html lang={locale} data-scroll-behavior="smooth" data-hanzi-script="simplified" suppressHydrationWarning>
    <head>
      <Script id="restore-hanzi-script" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: "try{var script=localStorage.getItem('arel-hanzi-script');if(script==='traditional')document.documentElement.dataset.hanziScript='traditional'}catch(_){}" }} />
      <Script id="restore-color-theme" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: "try{var theme=localStorage.getItem('arel-color-theme');if(theme==='light'||theme==='dark')document.documentElement.dataset.theme=theme}catch(_){}" }} />
    </head>
    <body className={quicksand.variable}>
      <a className="skip-link" href="#main-content">{homeCopy[locale].skip}</a>
      {children}
    </body>
  </html>
}
