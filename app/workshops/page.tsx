import WilsonShell from '@/components/wilson/WilsonShell'
import WorkshopsPage from '@/components/wilson/WorkshopsPage'

export const metadata = {
  title: 'Workshops — The Wilson Co.',
  description: 'Group workshops on interview skills, networking, executive presence, and career strategy — for conferences, corporate teams, summits, and companies. Based in NYC, available nationwide.',
}

export default function Page() {
  return <WilsonShell><WorkshopsPage /></WilsonShell>
}
