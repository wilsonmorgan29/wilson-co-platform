import WilsonShell from '@/components/wilson/WilsonShell'
import ContactPage from '@/components/wilson/ContactPage'

export const metadata = {
  title: 'Contact — The Wilson Co.',
  description: 'Get in touch with The Wilson Co. — executive search across People, Talent, Operations, Marketing, HR, and Legal. Every conversation is confidential.',
}

export default function Page() {
  return <WilsonShell><ContactPage /></WilsonShell>
}
