import WilsonShell from '@/components/wilson/WilsonShell'
import ServicesPage from '@/components/wilson/ServicesPage'

export const metadata = {
  title: 'Services — The Wilson Co.',
  description: 'Three ways to work with us: executive recruiting, 1:1 career coaching, and corporate hiring consulting. NYC-based, serving clients nationwide.',
}

export default function Page() {
  return <WilsonShell><ServicesPage /></WilsonShell>
}
