import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import type { Locale } from '@/lib/site'

export default function PageFrame({ locale, path = '', availableLocales, children }: { locale: Locale; path?: string; availableLocales: readonly Locale[]; children: React.ReactNode }) {
  return <>
    <SiteHeader locale={locale} path={path} availableLocales={availableLocales} />
    <div id="main-content">{children}</div>
    <SiteFooter locale={locale} />
  </>
}
