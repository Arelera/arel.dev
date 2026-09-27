'use client'

import { useEffect, useRef, useSyncExternalStore } from 'react'
import { ComputerIcon, Moon02Icon, Sun03Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import type { Locale } from '@/lib/site'

type Theme = 'system' | 'light' | 'dark'
const storageKey = 'arel-color-theme'
const changeEvent = 'arel-theme-change'
const themes = [
  { value: 'system', icon: ComputerIcon },
  { value: 'light', icon: Sun03Icon },
  { value: 'dark', icon: Moon02Icon },
] as const
const labels: Record<Locale, { theme: string; system: string; light: string; dark: string }> = {
  en: { theme: 'Color theme', system: 'Use system theme', light: 'Use light theme', dark: 'Use dark theme' },
  es: { theme: 'Tema de color', system: 'Usar tema del sistema', light: 'Usar tema claro', dark: 'Usar tema oscuro' },
  de: { theme: 'Farbschema', system: 'Systemdesign verwenden', light: 'Helles Design verwenden', dark: 'Dunkles Design verwenden' },
  fr: { theme: 'Thème', system: 'Utiliser le thème du système', light: 'Utiliser le thème clair', dark: 'Utiliser le thème sombre' },
  'pt-BR': { theme: 'Tema de cores', system: 'Usar tema do sistema', light: 'Usar tema claro', dark: 'Usar tema escuro' },
  vi: { theme: 'Giao diện', system: 'Dùng giao diện hệ thống', light: 'Dùng giao diện sáng', dark: 'Dùng giao diện tối' },
  id: { theme: 'Tema warna', system: 'Gunakan tema sistem', light: 'Gunakan tema terang', dark: 'Gunakan tema gelap' },
  ja: { theme: 'カラーテーマ', system: 'システム設定を使用', light: 'ライトテーマを使用', dark: 'ダークテーマを使用' },
  ko: { theme: '색상 테마', system: '시스템 테마 사용', light: '라이트 테마 사용', dark: '다크 테마 사용' },
  th: { theme: 'ธีมสี', system: 'ใช้ธีมตามระบบ', light: 'ใช้ธีมสว่าง', dark: 'ใช้ธีมมืด' },
}

function currentTheme(): Theme {
  const theme = document.documentElement.dataset.theme
  return theme === 'light' || theme === 'dark' ? theme : 'system'
}

function applyTheme(value: Theme) {
  if (value === 'system') delete document.documentElement.dataset.theme
  else document.documentElement.dataset.theme = value

  try {
    if (value === 'system') localStorage.removeItem(storageKey)
    else localStorage.setItem(storageKey, value)
  } catch {}

  window.dispatchEvent(new Event(changeEvent))
}

function subscribe(callback: () => void) {
  function onStorage(event: StorageEvent) {
    if (event.key !== storageKey && event.key !== null) return
    try {
      const theme = localStorage.getItem(storageKey)
      if (theme === 'light' || theme === 'dark') document.documentElement.dataset.theme = theme
      else delete document.documentElement.dataset.theme
    } catch {
      delete document.documentElement.dataset.theme
    }
    callback()
  }

  window.addEventListener(changeEvent, callback)
  window.addEventListener('storage', onStorage)
  return () => {
    window.removeEventListener(changeEvent, callback)
    window.removeEventListener('storage', onStorage)
  }
}

export default function ThemeSwitch({ locale }: { locale: Locale }) {
  const theme = useSyncExternalStore<Theme>(subscribe, currentTheme, () => 'system')
  const detailsRef = useRef<HTMLDetailsElement>(null)
  const copy = labels[locale]

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

  function choose(value: Theme) {
    applyTheme(value)
    if (detailsRef.current) detailsRef.current.open = false
    detailsRef.current?.querySelector('summary')?.focus()
  }

  return (
    <details className="theme-switch" ref={detailsRef}>
      <summary aria-label={`${copy.theme}: ${copy[theme]}`} title={copy.theme}>
        <HugeiconsIcon icon={themes.find((item) => item.value === theme)!.icon} size={21} strokeWidth={1.8} aria-hidden="true" />
      </summary>
      <div className="theme-switch-menu" role="group" aria-label={copy.theme}>
        {themes.map(({ value, icon }) => (
          <button key={value} type="button" aria-label={copy[value]} title={copy[value]} aria-pressed={theme === value} onClick={() => choose(value)}>
            <HugeiconsIcon icon={icon} size={20} strokeWidth={1.8} aria-hidden="true" />
          </button>
        ))}
      </div>
    </details>
  )
}
