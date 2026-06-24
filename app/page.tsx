import WilsonShell from '@/components/wilson/WilsonShell'
import HomePage from '@/components/wilson/HomePage'

export const metadata = {
  title: 'The Wilson Co. — Career Coaching, Recruiting & Corporate Consulting',
  description: 'The Wilson Co. works with mid-level to senior professionals in legal, financial services, PE, and startups — and the companies looking to hire them. Built on real relationships.',
}

export default function RootPage() {
  return (
    <WilsonShell>
      <HomePage />
    </WilsonShell>
  )
}
