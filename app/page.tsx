import WilsonShell from '@/components/wilson/WilsonShell'
import HomePage from '@/components/wilson/HomePage'

export const metadata = {
  title: 'The Wilson Co. — Legal Recruiting for Law Firms & In-House Teams',
  description: 'The Wilson Co. is a NYC-based legal recruiting firm placing legal professionals and attorneys at law firms and companies hiring for legal roles. Founded by a former Big Law recruiting Director.',
}

export default function RootPage() {
  return (
    <WilsonShell>
      <HomePage />
    </WilsonShell>
  )
}
