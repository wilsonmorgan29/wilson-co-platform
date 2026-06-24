import WilsonShell from '@/components/wilson/WilsonShell'
import PressPage from '@/components/wilson/PressPage'

export const metadata = {
  title: 'Press & Media — The Wilson Co.',
  description: 'See where The Wilson Co. has been featured, including AP News, CEO Weekly, and US Insider, plus our Substack newsletter on career strategy and hiring.',
}

export default function Page() {
  return <WilsonShell><PressPage /></WilsonShell>
}
