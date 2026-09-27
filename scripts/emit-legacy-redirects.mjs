import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const site = 'https://arel.dev'
const redirects = new Map([
  ['/', '/en/'],
  ['/blog/', '/en/blog/'],
  ['/blog/choose-a-chinese-video/', '/en/blog/choose-a-chinese-video/'],
  ['/blog/read-without-translating-every-word/', '/en/blog/read-without-translating-every-word/'],
])

for (const [from, to] of redirects) {
  const destination = new URL(to, site).toString()
  const file = join('out', from.slice(1), 'index.html')
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${destination}"><link rel="canonical" href="${destination}"><title>Redirecting…</title></head></html>\n`
  await mkdir(join('out', from.slice(1)), { recursive: true })
  await writeFile(file, html)
}
