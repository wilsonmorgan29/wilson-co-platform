import WilsonShell from '@/components/wilson/WilsonShell'
import PricingPage from '@/components/wilson/PricingPage'

export const metadata = {
  title: 'Pricing — The Wilson Co.',
  description: 'Transparent legal recruiting pricing — 25–30% of first-year compensation, with a 90-day replacement guarantee. Coaching, consulting, and workshop pricing scoped per engagement.',
}

export default function Pricing() {
  return (
    <WilsonShell>
      <PricingPage />
    </WilsonShell>
  )
}
