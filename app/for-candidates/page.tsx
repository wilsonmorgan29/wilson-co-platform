import WilsonShell from '@/components/wilson/WilsonShell'
import ForPeopleLeadersPage from './ForPeopleLeadersPage'

export const metadata = {
  title: 'For Candidates — The Wilson Co.',
  description: 'A 1:1 search process for legal talent, HR, and operations professionals and attorneys — at law firms and companies hiring for legal roles. No fee to candidates.',
}

export default function Page() {
  return <WilsonShell><ForPeopleLeadersPage /></WilsonShell>
}
