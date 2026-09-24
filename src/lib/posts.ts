import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content', 'blog')

export type PostSummary = {
  slug: string
  title: string
  description: string
  date: string
  topic: string
  readingMinutes: number
}

export type Post = PostSummary & { contentHtml: string }

function readPost(slug: string): { summary: PostSummary; markdown: string } {
  const source = fs.readFileSync(path.join(postsDirectory, `${slug}.md`), 'utf8')
  const { data, content } = matter(source)
  for (const field of ['title', 'description', 'date', 'topic']) {
    if (typeof data[field] !== 'string' || !data[field].trim()) {
      throw new Error(`Missing or invalid ${field} in ${slug}.md`)
    }
  }
  if (Number.isNaN(Date.parse(data.date))) throw new Error(`Invalid date in ${slug}.md`)

  const words = content.replace(/[#*`>\[\]()|]/g, ' ').trim().split(/\s+/).length
  return {
    summary: {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      topic: data.topic,
      readingMinutes: Math.max(1, Math.ceil(words / 220)),
    },
    markdown: content,
  }
}

export function getAllPosts(): PostSummary[] {
  return fs.readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => readPost(file.slice(0, -3)).summary)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export async function getPost(slug: string): Promise<Post> {
  const { summary, markdown } = readPost(slug)
  const contentHtml = String(await remark().use(remarkGfm).use(html).process(markdown))
  return { ...summary, contentHtml }
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(date))
}
