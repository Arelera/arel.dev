import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LegacyRedirect from '@/components/LegacyRedirect'
import { localizedPath } from '@/lib/site'

const legacySlugs = ['choose-a-chinese-video', 'read-without-translating-every-word'] as const
type PageProps = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return legacySlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  if (!legacySlugs.some((legacy) => legacy === slug)) notFound()
  return { alternates: { canonical: localizedPath('en', `blog/${slug}`) } }
}

export default async function LegacyPost({ params }: PageProps) {
  const { slug } = await params
  if (!legacySlugs.some((legacy) => legacy === slug)) notFound()
  return <LegacyRedirect destination={localizedPath('en', `blog/${slug}`)} />
}
