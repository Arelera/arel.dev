export const locales = ['en', 'es', 'de', 'fr', 'pt-BR', 'vi', 'id', 'ja', 'ko', 'th'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'
export const siteUrl = 'https://arel.dev'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
  'pt-BR': 'Português (Brasil)',
  vi: 'Tiếng Việt',
  id: 'Bahasa Indonesia',
  ja: '日本語',
  ko: '한국어',
  th: 'ไทย',
}

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  es: '🇪🇸',
  de: '🇩🇪',
  fr: '🇫🇷',
  'pt-BR': '🇧🇷',
  vi: '🇻🇳',
  id: '🇮🇩',
  ja: '🇯🇵',
  ko: '🇰🇷',
  th: '🇹🇭',
}

export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_ES',
  de: 'de_DE',
  fr: 'fr_FR',
  'pt-BR': 'pt_BR',
  vi: 'vi_VN',
  id: 'id_ID',
  ja: 'ja_JP',
  ko: 'ko_KR',
  th: 'th_TH',
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function localizedPath(locale: Locale, path = ''): string {
  const suffix = path.replace(/^\/+|\/+$/g, '')
  return suffix ? `/${locale}/${suffix}/` : `/${locale}/`
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).toString()
}

export function languageAlternates(path: string, available: readonly Locale[]): Record<string, string> {
  const languages = Object.fromEntries(available.map((locale) => [locale, absoluteUrl(localizedPath(locale, path))]))
  if (available.includes(defaultLocale)) languages['x-default'] = absoluteUrl(localizedPath(defaultLocale, path))
  return languages
}

export function miaoziLocale(locale: Locale): string {
  return locale === 'pt-BR' ? 'en' : locale
}
