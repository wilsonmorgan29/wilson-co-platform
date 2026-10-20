import WilsonShell from '@/components/wilson/WilsonShell'
import ForPeopleLeadersPage from './ForPeopleLeadersPage'

export const metadata = {
  title: 'For Candidates — The Wilson Co.',
  description: 'A 1:1 search process for senior leaders across People, Talent, Operations, Marketing, HR, and Legal. No fee to candidates.',
}

export default function Page() {
  return <WilsonShell><ForPeopleLeadersPage /></WilsonShell>
}
