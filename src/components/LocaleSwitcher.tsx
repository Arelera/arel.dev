'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Globe02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { localeNames, locales, localizedPath, type Locale } from '@/lib/site'

export default function LocaleSwitcher({ locale, path, availableLocales, label }: { locale: Locale; path: string; availableLocales: readonly Locale[]; label: string }) {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    function closeOnOutside(event: PointerEvent) {
      const details = detailsRef.current
      if (details && !details.contains(event.target as Node)) details.open = false
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape' || !detailsRef.current?.open) return
      detailsRef.current.open = false
      detailsRef.current.querySelector('summary')?.focus()
    }

    document.addEventListener('pointerdown', closeOnOutside)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutside)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  return <details className="locale-switch" ref={detailsRef}>
    <summary aria-label={`${label}: ${localeNames[locale]}`} title={`${label}: ${localeNames[locale]}`}>
      <HugeiconsIcon icon={Globe02Icon} size={21} strokeWidth={1.8} aria-hidden="true" />
    </summary>
    <div className="locale-switch-menu" role="group" aria-label={label}>
      {locales.map((target) => {
        const samePage = availableLocales.includes(target)
        return <Link key={target} href={localizedPath(target, samePage ? path : '')} lang={target} aria-current={target === locale ? 'page' : undefined} title={samePage ? localeNames[target] : `${localeNames[target]} home`}>
          {localeNames[target]}
        </Link>
      })}
    </div>
  </details>
}
