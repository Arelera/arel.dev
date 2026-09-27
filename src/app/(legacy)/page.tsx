import type { Metadata } from 'next'
import LegacyRedirect from '@/components/LegacyRedirect'

export const metadata: Metadata = { alternates: { canonical: '/en/' } }

export default function LegacyHome() {
  return <LegacyRedirect destination="/en/" />
}
