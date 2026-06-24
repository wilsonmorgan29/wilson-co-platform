import WilsonShell from '@/components/wilson/WilsonShell'
import PricingPage from '@/components/wilson/PricingPage'

export const metadata = {
  title: 'Pricing — The Wilson Co.',
  description: 'Transparent pricing for career coaching, corporate consulting, and recruiting. Sessions start at $300. Recruiting pricing discussed based on your needs.',
}

export default function Pricing() {
  return (
    <WilsonShell>
      <PricingPage />
    </WilsonShell>
  )
}
