'use client'

import { useSyncExternalStore } from 'react'

type Theme = 'system' | 'light' | 'dark'
const storageKey = 'arel-color-theme'
const changeEvent = 'arel-theme-change'

function currentTheme(): Theme {
  const theme = document.documentElement.dataset.theme
  return theme === 'light' || theme === 'dark' ? theme : 'system'
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

  function choose(value: Theme) {
    if (value === 'system') delete document.documentElement.dataset.theme
    else document.documentElement.dataset.theme = value

    try {
      if (value === 'system') localStorage.removeItem(storageKey)
      else localStorage.setItem(storageKey, value)
    } catch {}

    window.dispatchEvent(new Event(changeEvent))
  }

  return (
    <div className="theme-switch">
      <select aria-label="Color theme" title="Choose the site's color theme" value={theme} onChange={(event) => choose(event.target.value as Theme)}>
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <span aria-hidden="true">⌄</span>
    </div>
  )
}
