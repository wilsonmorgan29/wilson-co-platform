import WilsonShell from '@/components/wilson/WilsonShell'
import ContactPage from '@/components/wilson/ContactPage'

export const metadata = { title: 'Contact — The Wilson Co.' }

export default function Page() {
  return <WilsonShell><ContactPage /></WilsonShell>
}
