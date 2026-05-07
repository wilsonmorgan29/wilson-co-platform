import WilsonShell from '@/components/wilson/WilsonShell'
import CompanyPage from '@/components/wilson/company/CompanyPage'

export const metadata = {
  title: 'For Companies — The Wilson Co.',
}

export default function Company() {
  return (
    <WilsonShell>
      <CompanyPage />
    </WilsonShell>
  )
}
