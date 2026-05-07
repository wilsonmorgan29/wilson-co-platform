'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="w-hero">
        <div className="w-eyebrow" style={{ marginBottom: 16 }}>
          Career Coaching · Talent Collective · Nashville &amp; NYC
        </div>
        <h1 className="w-display" style={{ marginTop: 14 }}>
          Your career,<br />
          on <em>your terms.</em>
        </h1>
        <p className="w-hero-sub">
          The Wilson Co. is a career coaching and talent collective built for mid-career professionals
          who are done waiting for the right opportunity to find them. We help you get clear, move
          strategically, and land where you actually want to be.
        </p>
        <div className="w-hero-actions">
          <Link href="/member" className="w-btn w-btn-oak">Join the collective →</Link>
          <Link href="/company" className="w-btn w-btn-outline">For companies</Link>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Two paths */}
      <div className="w-section w-container">
        <p className="w-eyebrow" style={{ marginBottom: 20 }}>Two ways to work with us</p>
        <div className="w-grid-2">

          <Link href="/member" className="w-card" style={{ cursor: 'pointer', transition: 'all 0.2s', textDecoration: 'none' }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--oak)')}
            onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--w-border)')}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span className="w-badge w-badge-denim">For you</span>
            </div>
            <div style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: 16, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--w-black)', marginBottom: 8 }}>
              As a member
            </div>
            <div style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: 14 }}>
              Senior leaders who are selectively open to the right opportunity. You control your visibility, set your terms, and only hear about things that actually match what you want next.
            </div>
            <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--oak)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Start with a clarity call →
            </div>
          </Link>

          <Link href="/company" className="w-card" style={{ cursor: 'pointer', transition: 'all 0.2s', textDecoration: 'none' }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--denim)')}
            onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--w-border)')}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span className="w-badge w-badge-oak">For your team</span>
            </div>
            <div style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: 16, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--w-black)', marginBottom: 8 }}>
              As a company
            </div>
            <div style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: 14 }}>
              Access to senior leaders who aren&apos;t on job boards and won&apos;t respond to cold outreach. Goals-matched introductions to people who are genuinely aligned with what you&apos;re building.
            </div>
            <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--denim)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              View company access →
            </div>
          </Link>

        </div>
      </div>

      {/* How it works */}
      <div className="w-section w-container">
        <p className="w-eyebrow" style={{ marginBottom: 20 }}>How it works</p>
        <div className="w-grid-2" style={{ gap: 8 }}>
          {[
            { num: '01', title: 'Clarity first', body: "Every member starts with a 60-minute clarity call with Morgan. Not a screener — a real conversation about what you want, what you've outgrown, and what you'd actually move for." },
            { num: '02', title: 'Goals profile, not resume', body: "Your goals profile lives in the collective — not a resume. It captures what you want next, what cultures fit you, what you're done with, and what you'd walk away from a bigger title to get." },
            { num: '03', title: 'You control visibility', body: "Dark, selective, or active — you set who can see you, what they see, and nothing moves without your explicit approval. Companies go through an audit before they can access the network at all." },
            { num: '04', title: 'Human-reviewed matches', body: "Every opportunity is reviewed against your goals profile by a person before it reaches you. No algorithm alone decides what you see. And companies never know you passed." },
          ].map(item => (
            <div key={item.num} className="w-card w-card-beige">
              <div style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: 22, color: 'var(--beige-dark)', letterSpacing: '0.04em', marginBottom: 8 }}>{item.num}</div>
              <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--oak)', marginBottom: 5, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{item.title}</div>
              <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.7 }}>{item.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Founding cohort CTA */}
      <div className="w-section w-container">
        <div className="w-card w-card-oak" style={{ padding: '28px', textAlign: 'center' }}>
          <p className="w-eyebrow" style={{ marginBottom: 12 }}>Founding cohort — 50 spots</p>
          <div style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: 20, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--w-black)', marginBottom: 10 }}>
            Hand-selected. Not open enrollment.
          </div>
          <div style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.75, maxWidth: 460, margin: '0 auto 20px' }}>
            The founding cohort is being built through direct invitation. If you&apos;re a senior leader who is done with how recruiting works, this is for you.
          </div>
          <Link href="/member" className="w-btn w-btn-oak">Apply for a founding spot →</Link>
        </div>
      </div>
    </>
  )
}
