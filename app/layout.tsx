import type { Metadata } from 'next'
import { Inter, Kumbh_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const kumbhSans = Kumbh_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-kumbh',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Wilson Co. — Career Coaching & Talent Collective',
  description: 'A career coaching and talent collective built for mid-career professionals. Clarity, confidence, purpose.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${kumbhSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
