import Starfield from '@/components/Starfield'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="sky sky--not-found">
      <Starfield />
      <div className="not-found">
        <p>404</p>
        <Link href="/">Back home</Link>
      </div>
    </main>
  )
}
