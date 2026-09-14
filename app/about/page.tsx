import WilsonShell from '@/components/wilson/WilsonShell'
import AboutPage from '@/components/wilson/AboutPage'

export const metadata = {
  title: 'About — The Wilson Co.',
  description: 'From assistant to Director at Locke Lord, Weil Gotshal & Manges, and Kirkland & Ellis — a decade building people functions from the inside.',
}

export default function Page() {
  return <WilsonShell><AboutPage /></WilsonShell>
}
