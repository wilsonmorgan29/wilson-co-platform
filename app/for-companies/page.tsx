import WilsonShell from '@/components/wilson/WilsonShell'
import ForCompaniesPage from './ForCompaniesPage'

export const metadata = {
  title: 'For Companies — The Wilson Co.',
  description: 'Legal recruiting for law firms and companies hiring for legal roles — legal professionals and attorneys, from support teams to in-house counsel.',
}

export default function Page() {
  return <WilsonShell><ForCompaniesPage /></WilsonShell>
}
