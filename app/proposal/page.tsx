import { Suspense } from 'react'
import ProposalPage from './ProposalPage'

export const metadata = {
  title: 'Coaching Proposal — The Wilson Co.',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return (
    <Suspense>
      <ProposalPage />
    </Suspense>
  )
}
