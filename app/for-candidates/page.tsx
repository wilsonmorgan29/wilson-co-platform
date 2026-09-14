import WilsonShell from '@/components/wilson/WilsonShell'
import ForPeopleLeadersPage from './ForPeopleLeadersPage'

export const metadata = {
  title: 'For Candidates — The Wilson Co.',
  description: 'Advisory for leaders building a People function. Career coaching for HR, TA, and People Ops professionals navigating their next move.',
}

export default function Page() {
  return <WilsonShell><ForPeopleLeadersPage /></WilsonShell>
}
