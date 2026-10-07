import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'
import { defaultLocale, locales, type Locale } from '@/lib/site'
import { articleUiCopy } from '@/lib/copy'

const postsDirectory = path.join(process.cwd(), 'content', 'blog')

export type PostSummary = {
  slug: string
  title: string
  description: string
  date: string
  updated?: string
  image?: string
  imageAlt?: string
  cta?: { title: string; description: string; label: string }
}

export type Post = PostSummary & { contentHtml: string; headings: { id: string; titleHtml: string }[] }

function readPost(slug: string, locale: Locale): { summary: PostSummary; markdown: string } {
  const source = fs.readFileSync(path.join(postsDirectory, locale, `${slug}.md`), 'utf8')
  const { data, content } = matter(source)
  for (const field of ['title', 'description', 'date']) {
    if (typeof data[field] !== 'string' || !data[field].trim()) {
      throw new Error(`Missing or invalid ${field} in ${slug}.md`)
    }
  }
  if (Number.isNaN(Date.parse(data.date))) throw new Error(`Invalid date in ${slug}.md`)
  if (data.updated !== undefined && (typeof data.updated !== 'string' || Number.isNaN(Date.parse(data.updated)))) {
    throw new Error(`Invalid updated in ${slug}.md`)
  }
  if (data.image !== undefined && (typeof data.image !== 'string' || !/^\/images\/guides\/[a-z0-9-]+\.webp$/.test(data.image))) {
    throw new Error(`Invalid image in ${slug}.md`)
  }
  if (data.image !== undefined && (typeof data.imageAlt !== 'string' || !data.imageAlt.trim())) {
    throw new Error(`Missing imageAlt in ${slug}.md`)
  }
  if (data.cta !== undefined && (
    !data.cta ||
    ['title', 'description', 'label'].some((key) => typeof data.cta[key] !== 'string' || !data.cta[key].trim())
  )) throw new Error(`Invalid cta in ${slug}.md`)

  return {
    summary: {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      updated: data.updated,
      image: data.image,
      imageAlt: data.imageAlt,
      cta: data.cta,
    },
    markdown: content,
  }
}

export function getAllPosts(locale: Locale = defaultLocale): PostSummary[] {
  const directory = path.join(postsDirectory, locale)
  if (!fs.existsSync(directory)) return []
  return fs.readdirSync(directory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => readPost(file.slice(0, -3), locale).summary)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPublishedBlogLocales(): Locale[] {
  return locales.filter((locale) => getAllPosts(locale).length > 0)
}

export function getPostLocales(slug: string): Locale[] {
  return locales.filter((locale) => getAllPosts(locale).some((post) => post.slug === slug))
}

export async function getPost(slug: string, locale: Locale = defaultLocale): Promise<Post> {
  const { summary, markdown } = readPost(slug, locale)
  const rendered = String(await remark().use(remarkGfm).use(html).process(markdown))
  const renderHanzi = (source: string, allowAudio = false) => source.replace(/\[\[(zh|audio):([^|\]]+)\|([^\]]+)\]\]/g, (_, kind: string, simplified: string, traditional: string) => {
    const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    const hanzi = `<span class="hanzi" lang="zh"><span class="hanzi-simplified" lang="zh-Hans">${escape(simplified)}</span><span class="hanzi-traditional" lang="zh-Hant">${escape(traditional)}</span></span>`
    return kind === 'audio' && allowAudio ? `<span class="spoken-hanzi">${hanzi}<span class="hanzi-audio-slot"></span></span>` : hanzi
  })
  const headings: Post['headings'] = []
  const usedIds = new Map<string, number>()
  const withHeadings = rendered.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_, level: string, titleHtml: string) => {
    const plainTitle = titleHtml.replace(/\[\[(?:zh|audio):([^|\]]+)\|[^\]]+\]\]/g, '$1').replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, ' ')
    const base = `section-${plainTitle.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '') || 'heading'}`
    const count = (usedIds.get(base) ?? 0) + 1
    usedIds.set(base, count)
    const id = count === 1 ? base : `${base}-${count}`
    if (level === '2') headings.push({ id, titleHtml: renderHanzi(titleHtml) })
    return `<h${level} id="${id}" tabindex="-1">${titleHtml}</h${level}>`
  })
  const withCallouts = withHeadings.replace(/<blockquote>\s*<p>\[!(EXAMPLE|CHECK|NOTE|WORDS)\]([\s\S]*?)<\/p>([\s\S]*?)<\/blockquote>/g, (_, kind: string, first: string, rest: string) => {
    const firstParagraph = first.trim() ? `<p>${first.trim()}</p>` : ''
    if (kind === 'EXAMPLE') {
      const body = firstParagraph + rest
      const split = body.match(/^\s*(<p>[\s\S]*?<\/p>)([\s\S]*)$/)
      const explanation = split?.[2].trim()
      const passage = `<div class="example-passage">${split?.[1] ?? body}<span class="hanzi-audio-slot"></span></div>`
      return `<blockquote class="article-example">${passage}${explanation ? `<details class="example-details"><summary>${articleUiCopy[locale].exampleDetails}</summary>${explanation}</details>` : ''}</blockquote>`
    }
    const tag = kind === 'WORDS' ? 'div' : 'aside'
    return `<${tag} class="article-${kind.toLowerCase()}">${firstParagraph}${rest}</${tag}>`
  })
  const withHanzi = renderHanzi(withCallouts, true).replace('<p>', '<p class="post-lead">')
  const imageDimensions: Record<string, [number, number]> = {
    '/images/moyu-caption-lookup.webp': [750, 1631],
    '/images/miaozi-reader-lookup.webp': [900, 385],
  }
  const contentHtml = withHanzi.replace(/<img src="([^"]+)" alt="([^"]*)">/g, (tag, src: string) => {
    const dimensions = imageDimensions[src]
    return dimensions ? tag.replace('>', ` width="${dimensions[0]}" height="${dimensions[1]}" loading="lazy" decoding="async">`) : tag
  })
  return { ...summary, contentHtml, headings }
}

export function formatPostDate(date: string, locale: Locale = defaultLocale): string {
  return new Intl.DateTimeFormat(locale, { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(date))
}
