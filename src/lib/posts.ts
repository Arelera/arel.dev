import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content', 'blog')
export const publishedLocales = ['en'] as const
export type Locale = (typeof publishedLocales)[number]
export const defaultLocale: Locale = 'en'

export type PostSummary = {
  slug: string
  title: string
  description: string
  date: string
  updated?: string
}

export type Post = PostSummary & { contentHtml: string }

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

  return {
    summary: {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      updated: data.updated,
    },
    markdown: content,
  }
}

export function getAllPosts(locale: Locale = defaultLocale): PostSummary[] {
  return fs.readdirSync(path.join(postsDirectory, locale))
    .filter((file) => file.endsWith('.md'))
    .map((file) => readPost(file.slice(0, -3), locale).summary)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export async function getPost(slug: string, locale: Locale = defaultLocale): Promise<Post> {
  const { summary, markdown } = readPost(slug, locale)
  const rendered = String(await remark().use(remarkGfm).use(html).process(markdown))
  const withHanzi = rendered.replace(/\[\[zh:([^|\]]+)\|([^\]]+)\]\]/g, (_, simplified: string, traditional: string) => {
    const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    return `<span class="hanzi" lang="zh"><span class="hanzi-simplified" lang="zh-Hans">${escape(simplified)}</span><span class="hanzi-traditional" lang="zh-Hant">${escape(traditional)}</span></span>`
  })
  const imageDimensions: Record<string, [number, number]> = {
    '/images/moyu-video.webp': [750, 1631],
    '/images/miaozi-dictionary.webp': [620, 385],
  }
  const contentHtml = withHanzi.replace(/<img src="([^"]+)" alt="([^"]*)">/g, (tag, src: string) => {
    const dimensions = imageDimensions[src]
    return dimensions ? tag.replace('>', ` width="${dimensions[0]}" height="${dimensions[1]}" loading="lazy" decoding="async">`) : tag
  })
  return { ...summary, contentHtml }
}

export function formatPostDate(date: string, locale: Locale = defaultLocale): string {
  return new Intl.DateTimeFormat(locale, { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(date))
}
