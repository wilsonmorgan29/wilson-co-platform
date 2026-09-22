import WilsonShell from '@/components/wilson/WilsonShell'
import AboutPage from '@/components/wilson/AboutPage'

export const metadata = {
  title: 'About — The Wilson Co.',
  description: 'From assistant to Director at Kirkland & Ellis, Weil Gotshal & Manges, and Locke Lord — a decade of legal recruiting from the inside.',
}

export default function Page() {
  return <WilsonShell><AboutPage /></WilsonShell>
}
