import WilsonShell from '@/components/wilson/WilsonShell'
import CollectivePage from '@/components/wilson/CollectivePage'

export const metadata = { title: 'The Collective — The Wilson Co.' }

export default function Page() {
  return <WilsonShell><CollectivePage /></WilsonShell>
}
