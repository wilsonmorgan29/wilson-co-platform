import WilsonShell from '@/components/wilson/WilsonShell'
import HomePage from '@/components/wilson/HomePage'

export const metadata = {
  title: 'The Wilson Co. — Executive Search for Growing Companies',
  description: 'The Wilson Co. places executive and senior talent across People, Talent, Operations, Marketing, HR, and Legal for venture-backed and growing companies from seed to Series C.',
}

export default function RootPage() {
  return (
    <WilsonShell>
      <HomePage />
    </WilsonShell>
  )
}
