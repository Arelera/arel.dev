import type { Metadata } from 'next'
import LegacyRedirect from '@/components/LegacyRedirect'

export const metadata: Metadata = { alternates: { canonical: '/en/blog/' } }

export default function LegacyBlog() {
  return <LegacyRedirect destination="/en/blog/" />
}
