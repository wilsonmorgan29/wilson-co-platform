import WilsonShell from '@/components/wilson/WilsonShell'
import ForCompaniesPage from './ForCompaniesPage'

export const metadata = {
  title: 'For Companies — The Wilson Co.',
  description: 'Retained and contingency search for People, Talent Acquisition, HR, and Operations roles. 20% fee. 90-day guarantee.',
}

export default function Page() {
  return <WilsonShell><ForCompaniesPage /></WilsonShell>
}
