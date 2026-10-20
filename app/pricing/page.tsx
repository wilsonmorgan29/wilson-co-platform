import WilsonShell from '@/components/wilson/WilsonShell'
import PricingPage from '@/components/wilson/PricingPage'

export const metadata = {
  title: 'Pricing — The Wilson Co.',
  description: 'Retained executive search scoped per engagement, with a 90-day replacement guarantee and no cost to candidates. Coaching, consulting, and workshop pricing scoped per engagement.',
}

export default function Pricing() {
  return (
    <WilsonShell>
      <PricingPage />
    </WilsonShell>
  )
}
