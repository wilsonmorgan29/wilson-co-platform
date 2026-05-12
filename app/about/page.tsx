import WilsonShell from '@/components/wilson/WilsonShell'
import AboutPage from '@/components/wilson/AboutPage'

export const metadata = { title: 'About — The Wilson Co.' }

export default function Page() {
  return <WilsonShell><AboutPage /></WilsonShell>
}
