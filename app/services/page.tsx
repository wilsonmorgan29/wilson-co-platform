import WilsonShell from '@/components/wilson/WilsonShell'
import ServicesPage from '@/components/wilson/ServicesPage'

export const metadata = { title: 'Services — The Wilson Co.' }

export default function Page() {
  return <WilsonShell><ServicesPage /></WilsonShell>
}
