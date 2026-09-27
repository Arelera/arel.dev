'use client'

import { useSyncExternalStore } from 'react'

type HanziScript = 'simplified' | 'traditional'

function currentScript(): HanziScript {
  return document.documentElement.dataset.hanziScript === 'traditional' ? 'traditional' : 'simplified'
}

function subscribe(callback: () => void) {
  window.addEventListener('arel-script-change', callback)
  return () => window.removeEventListener('arel-script-change', callback)
}

export default function ScriptSwitch() {
  const script = useSyncExternalStore(subscribe, currentScript, () => 'simplified')

  function choose(value: HanziScript) {
    document.documentElement.dataset.hanziScript = value
    try { localStorage.setItem('arel-hanzi-script', value) } catch {}
    window.dispatchEvent(new Event('arel-script-change'))
  }

  return (
    <div className="script-switch" role="group" aria-label="Chinese character script">
      <button type="button" aria-label="Show simplified Chinese characters" title="Show Chinese characters in simplified form" aria-pressed={script === 'simplified'} onClick={() => choose('simplified')}>Simplified <span lang="zh-Hans">简体</span></button>
      <button type="button" aria-label="Show traditional Chinese characters" title="Show Chinese characters in traditional form" aria-pressed={script === 'traditional'} onClick={() => choose('traditional')}>Traditional <span lang="zh-Hant">繁體</span></button>
    </div>
  )
}
