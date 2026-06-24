import WilsonShell from '@/components/wilson/WilsonShell'
import AboutPage from '@/components/wilson/AboutPage'

export const metadata = {
  title: 'About — The Wilson Co.',
  description: 'Built by someone who\'s been in the room. Over ten years in recruiting across legal, financial services, private equity, and startups — and a better way forward.',
}

export default function Page() {
  return <WilsonShell><AboutPage /></WilsonShell>
}
