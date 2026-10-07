'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { HugeiconsIcon } from '@hugeicons/react'
import { StopIcon, VolumeHighIcon } from '@hugeicons/core-free-icons'
import { currentHanziScript, mandarinRegion, selectMandarinVoice, speechSegments, subscribeToHanziScript, type HanziScript } from '@/lib/chinese-speech'

export default function ArticleAudio() {
  const script = useSyncExternalStore<HanziScript>(subscribeToHanziScript, currentHanziScript, () => 'simplified')
  const [slots, setSlots] = useState<HTMLElement[]>([])
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [active, setActive] = useState<number | null>(null)
  const [error, setError] = useState('')
  const session = useRef(0)
  const utterance = useRef<SpeechSynthesisUtterance | null>(null)
  const voice = selectMandarinVoice(voices, script)

  useEffect(() => {
    if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) return
    const synth = window.speechSynthesis
    const refresh = () => setVoices(synth.getVoices())
    const stop = () => {
      session.current += 1
      utterance.current = null
      synth.cancel()
      setActive(null)
    }
    const hide = () => { if (document.hidden) stop() }
    // Portal targets belong to server-rendered Markdown, so discover them after mounting.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSlots(Array.from(document.querySelectorAll<HTMLElement>('.post-content .hanzi-audio-slot')))
    refresh()
    synth.addEventListener('voiceschanged', refresh)
    window.addEventListener('arel-script-change', stop)
    window.addEventListener('pagehide', stop)
    document.addEventListener('visibilitychange', hide)
    return () => {
      session.current += 1
      utterance.current = null
      synth.cancel()
      synth.removeEventListener('voiceschanged', refresh)
      window.removeEventListener('arel-script-change', stop)
      window.removeEventListener('pagehide', stop)
      document.removeEventListener('visibilitychange', hide)
    }
  }, [])

  function play(index: number, text: string) {
    if (!voice) return
    const synth = window.speechSynthesis
    const id = ++session.current
    utterance.current = null
    synth.cancel()
    setError('')
    if (active === index) { setActive(null); return }
    setActive(index)
    const segments = speechSegments(text)
    function next() {
      if (id !== session.current) return
      const segment = segments.shift()
      if (!segment) { utterance.current = null; setActive(null); return }
      const speech = new SpeechSynthesisUtterance(segment)
      speech.voice = voice!
      speech.lang = voice!.lang
      speech.rate = 0.9
      speech.onend = next
      speech.onerror = (event) => {
        if (id !== session.current) return
        utterance.current = null
        setActive(null)
        if (event.error !== 'canceled' && event.error !== 'interrupted') setError('Audio couldn’t play. Please try again.')
      }
      utterance.current = speech
      try {
        if (synth.paused) synth.resume()
        synth.speak(speech)
      } catch {
        utterance.current = null
        setActive(null)
        setError('Audio couldn’t play. Please try again.')
      }
    }
    next()
  }

  return <>
    {voice && slots.map((slot, index) => {
      const source = slot.closest('.spoken-hanzi, .example-passage')
      const text = source?.querySelector(`.hanzi-${script}`)?.textContent?.trim() ?? ''
      const playing = active === index
      const region = mandarinRegion(voice)
      const desired = script === 'traditional' ? 'TW' : 'CN'
      const title = `Listen in ${region === 'TW' ? 'Taiwan Mandarin' : region === 'CN' ? 'mainland Mandarin' : 'Mandarin'}: ${voice.name}${region !== desired ? ' (preferred regional voice unavailable)' : ''}`
      return text && createPortal(<button type="button" className="hanzi-audio" aria-label={playing ? 'Stop audio' : source?.classList.contains('example-passage') ? 'Listen to this Chinese passage' : `Listen to ${text}`} title={playing ? 'Stop audio' : title} aria-pressed={playing} onClick={() => play(index, text)}>
        <HugeiconsIcon icon={playing ? StopIcon : VolumeHighIcon} size={18} strokeWidth={1.7} aria-hidden="true" />
      </button>, slot, index)
    })}
    <p className="audio-error" role="status">{error}</p>
  </>
}
