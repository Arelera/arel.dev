import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'arel.dev',
  icons: { icon: '/icon.svg' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
