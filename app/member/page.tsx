import WilsonShell from '@/components/wilson/WilsonShell'
import MemberPage from '@/components/wilson/member/MemberPage'

export const metadata = {
  title: 'Join as a Member — The Wilson Co.',
}

export default function Member() {
  return (
    <WilsonShell>
      <MemberPage />
    </WilsonShell>
  )
}
