export type HanziScript = 'simplified' | 'traditional'

type Voice = Pick<SpeechSynthesisVoice, 'name' | 'lang' | 'localService' | 'default'>

export function mandarinRegion(voice: Voice): 'CN' | 'TW' | undefined {
  const lang = voice.lang.replaceAll('_', '-').toLowerCase()
  if (lang.includes('-tw') || lang.includes('-hant')) return 'TW'
  if (lang.includes('-cn') || lang.includes('-hans')) return 'CN'
}

export function selectMandarinVoice<T extends Voice>(voices: readonly T[], script: HanziScript): T | undefined {
  const region = script === 'traditional' ? 'TW' : 'CN'
  // Region comes before quality: a premium mainland voice is not a Taiwan voice.
  const candidates = voices.filter((voice) => {
    const lang = voice.lang.replaceAll('_', '-').toLowerCase()
    return /^(zh|cmn)(-|$)/.test(lang) && !/(^yue|-hk|-mo)/.test(lang) &&
      !/cantonese|\byue\b|粤|粵/i.test(voice.name)
  })
  const score = (voice: T) => {
    const match = mandarinRegion(voice)
    return (match === region ? 1000 : match ? 0 : 100) +
      (/natural|neural|premium|enhanced/i.test(voice.name) ? 40 : 0) +
      (/ting[\s-]?ting|mei[\s-]?jia|tian[\s-]?tian|yu[\s-]?shu|li[\s-]?mu|hsiao(chen|yu)|xiaoxiao|yunxi|yunyang/i.test(voice.name) ? 25 : 0) +
      (/google/i.test(voice.name) ? 30 : /microsoft/i.test(voice.name) ? 10 : 0) +
      (voice.localService ? 2 : 0) + (voice.default ? 1 : 0)
  }
  return candidates.sort((a, b) => score(b) - score(a) || a.name.localeCompare(b.name))[0]
}

export function currentHanziScript(): HanziScript {
  return document.documentElement.dataset.hanziScript === 'traditional' ? 'traditional' : 'simplified'
}

export function subscribeToHanziScript(callback: () => void) {
  window.addEventListener('arel-script-change', callback)
  return () => window.removeEventListener('arel-script-change', callback)
}

// Sentence-sized utterances avoid long browser queues and make cancellation immediate.
export function speechSegments(text: string): string[] {
  return (text.match(/[^。！？!?；;]+[。！？!?；;]?/g) ?? []).map((part) => part.replace(/[…\.]{2,}/g, '，').trim()).filter(Boolean)
}
