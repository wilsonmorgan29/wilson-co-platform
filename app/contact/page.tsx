import WilsonShell from '@/components/wilson/WilsonShell'
import ContactPage from '@/components/wilson/ContactPage'

export const metadata = {
  title: 'Contact — The Wilson Co.',
  description: 'Get in touch with The Wilson Co. — legal recruiting for law firms, in-house teams, and attorneys. Every conversation is confidential.',
}

export default function Page() {
  return <WilsonShell><ContactPage /></WilsonShell>
}
