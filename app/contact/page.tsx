import WilsonShell from '@/components/wilson/WilsonShell'
import ContactPage from '@/components/wilson/ContactPage'

export const metadata = {
  title: 'Contact — The Wilson Co.',
  description: 'Get in touch with The Wilson Co. Whether you\'re looking for career coaching, recruiting support, or corporate consulting — we\'d love to hear from you.',
}

export default function Page() {
  return <WilsonShell><ContactPage /></WilsonShell>
}
