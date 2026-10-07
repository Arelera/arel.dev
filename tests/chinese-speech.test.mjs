import assert from 'node:assert/strict'
import test from 'node:test'
import { selectMandarinVoice, speechSegments } from '../src/lib/chinese-speech.ts'

const voice = (name, lang, extras = {}) => ({ name, lang, default: false, localService: true, ...extras })

test('regional match wins over premium voices from the other region', () => {
  const cn = voice('Mainland Natural', 'zh-CN')
  const tw = voice('Taiwan', 'zh-TW')
  const hk = voice('Cantonese Premium', 'zh-HK')
  assert.equal(selectMandarinVoice([cn, hk, tw], 'traditional'), tw)
  assert.equal(selectMandarinVoice([tw, hk, cn], 'simplified'), cn)
})

test('prefers labelled enhanced voices within the correct region', () => {
  const basic = voice('Taiwan default', 'zh-TW', { default: true })
  const enhanced = voice('Taiwan Enhanced', 'zh_TW')
  assert.equal(selectMandarinVoice([basic, enhanced], 'traditional'), enhanced)
})

test('handles script and cmn language tags', () => {
  const cn = voice('Mainland', 'cmn-Hans-CN')
  const tw = voice('Taiwan', 'cmn-Hant-TW')
  assert.equal(selectMandarinVoice([cn, tw], 'traditional'), tw)
  assert.equal(selectMandarinVoice([tw, cn], 'simplified'), cn)
})

test('uses dedicated Mandarin voices rather than generic Apple character voices', () => {
  const tingting = voice('Tingting', 'zh-CN')
  const meijia = voice('Meijia', 'zh-TW')
  const eddy = voice('Eddy (Chinese (China mainland))', 'zh-CN')
  const eddyTw = voice('Eddy (Chinese (Taiwan))', 'zh-TW')
  assert.equal(selectMandarinVoice([eddy, tingting, meijia, eddyTw], 'simplified'), tingting)
  assert.equal(selectMandarinVoice([eddy, tingting, meijia, eddyTw], 'traditional'), meijia)
})

test('falls back to Mandarin, never English or Cantonese', () => {
  const cn = voice('Chinese', 'zh-CN')
  const neutral = voice('Mandarin', 'cmn')
  assert.equal(selectMandarinVoice([cn], 'traditional'), cn)
  assert.equal(selectMandarinVoice([cn, neutral], 'traditional'), neutral)
  assert.equal(selectMandarinVoice([voice('English', 'en-US'), voice('Sin-Ji', 'zh-HK'), voice('Cantonese', 'yue-Hant-HK')], 'traditional'), undefined)
  assert.equal(selectMandarinVoice([], 'simplified'), undefined)
})

test('sentence playback preserves punctuation and omits placeholder ellipses', () => {
  assert.deepEqual(speechSegments('她去买面包。店里没有了！'), ['她去买面包。', '店里没有了！'])
  assert.deepEqual(speechSegments('刚到……就……'), ['刚到，就，'])
  assert.deepEqual(speechSegments(''), [])
})
