import type { Metadata } from 'next'
import { Inter, Kumbh_Sans } from 'next/font/google'
import Script from 'next/script'
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
      <body className="font-sans antialiased">
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9CYXR5QHEC" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9CYXR5QHEC');
        `}</Script>
      </body>
    </html>
  )
}
