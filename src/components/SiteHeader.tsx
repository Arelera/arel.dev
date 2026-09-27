import Image from 'next/image'
import Link from 'next/link'
import ThemeSwitch from '@/components/ThemeSwitch'
import LocaleSwitcher from '@/components/LocaleSwitcher'
import { homeCopy } from '@/lib/copy'
import { localizedPath, type Locale } from '@/lib/site'

export default function SiteHeader({ locale, path, availableLocales }: { locale: Locale; path: string; availableLocales: readonly Locale[] }) {
  const copy = homeCopy[locale]
  return <header className="site-header"><div className="shell header-inner">
    <Link className="brand" href={localizedPath(locale)} aria-label="arel 中文"><Image className="brand-mark" src="/images/mascot/arel-cat-mark-v1.webp" width={256} height={256} alt="" priority /><Image className="brand-wordmark" src="/images/brands/arel-wordmark-v1.png" width={400} height={300} alt="arel 中文" priority /></Link>
    <nav aria-label="Main navigation"><Link href={localizedPath(locale, 'blog')}>{copy.guides}</Link><LocaleSwitcher locale={locale} path={path} availableLocales={availableLocales} label={copy.language} /><ThemeSwitch locale={locale} /></nav>
  </div></header>
}
