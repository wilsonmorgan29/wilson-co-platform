import WilsonShell from '@/components/wilson/WilsonShell'
import PricingPage from '@/components/wilson/PricingPage'

export const metadata = {
  title: 'Pricing — The Wilson Co.',
}

export default function Pricing() {
  return (
    <WilsonShell>
      <PricingPage />
    </WilsonShell>
  )
}
