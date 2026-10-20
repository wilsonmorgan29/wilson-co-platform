import WilsonShell from '@/components/wilson/WilsonShell'
import AboutPage from '@/components/wilson/AboutPage'

export const metadata = {
  title: 'About — The Wilson Co.',
  description: 'From assistant to Director across Kirkland & Ellis, Weil Gotshal & Manges, and Locke Lord, then into financial services — building people functions from the inside.',
}

export default function Page() {
  return <WilsonShell><AboutPage /></WilsonShell>
}
