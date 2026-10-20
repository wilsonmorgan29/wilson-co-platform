import WilsonShell from '@/components/wilson/WilsonShell'
import ForCompaniesPage from './ForCompaniesPage'

export const metadata = {
  title: 'For Companies — The Wilson Co.',
  description: 'Executive search across People, Talent, Operations, Marketing, HR, and Legal for venture-backed and growing companies from seed to Series C.',
}

export default function Page() {
  return <WilsonShell><ForCompaniesPage /></WilsonShell>
}
