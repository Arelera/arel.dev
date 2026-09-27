import Link from 'next/link'
import LinkArrow from '@/components/LinkArrow'
import PageFrame from '@/components/PageFrame'

export default function NotFoundContent() {
  return <PageFrame locale="en" availableLocales={['en']}>
    <main className="not-found-page shell"><span>404</span><h1>Page not found</h1><p>This page isn&apos;t here.</p><Link className="inline-link" href="/en/blog/">Browse the guides <LinkArrow /></Link></main>
  </PageFrame>
}
