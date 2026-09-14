import WilsonShell from '@/components/wilson/WilsonShell'
import AdditionalServicesPage from './AdditionalServicesPage'

export const metadata = {
  title: 'Additional Services — The Wilson Co.',
  description: 'Career coaching, talent consulting, and workshops — offered alongside our core recruiting practice.',
}

export default function Page() {
  return <WilsonShell><AdditionalServicesPage /></WilsonShell>
}
