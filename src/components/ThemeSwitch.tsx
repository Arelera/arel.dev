'use client'

import { useEffect, useRef, useSyncExternalStore } from 'react'
import { ComputerIcon, Moon02Icon, Sun03Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

type Theme = 'system' | 'light' | 'dark'
const storageKey = 'arel-color-theme'
const changeEvent = 'arel-theme-change'
const themes = [
  { value: 'system', label: 'Use system theme', icon: ComputerIcon },
  { value: 'light', label: 'Use light theme', icon: Sun03Icon },
  { value: 'dark', label: 'Use dark theme', icon: Moon02Icon },
] as const

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

export default function ThemeSwitch() {
  const theme = useSyncExternalStore(subscribe, currentTheme, () => 'system')
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

  function choose(value: Theme) {
    applyTheme(value)
    if (detailsRef.current) detailsRef.current.open = false
    detailsRef.current?.querySelector('summary')?.focus()
  }

  return (
    <details className="theme-switch" ref={detailsRef}>
      <summary aria-label={`Color theme: ${theme}. Choose color theme`} title="Choose color theme">
        <HugeiconsIcon icon={themes.find((item) => item.value === theme)!.icon} size={21} strokeWidth={1.8} aria-hidden="true" />
      </summary>
      <div className="theme-switch-menu" role="group" aria-label="Color theme">
        {themes.map(({ value, label, icon }) => (
          <button key={value} type="button" aria-label={label} title={label} aria-pressed={theme === value} onClick={() => choose(value)}>
            <HugeiconsIcon icon={icon} size={20} strokeWidth={1.8} aria-hidden="true" />
          </button>
        ))}
      </div>
    </details>
  )
}
