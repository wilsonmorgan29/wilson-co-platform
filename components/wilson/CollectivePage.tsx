import Link from 'next/link'

const HOW_IT_WORKS = [
  { num: '01', title: 'Apply by intake',         body: 'Members join through a structured intake — not a résumé drop. We review every application personally before anyone is added to the collective.' },
  { num: '02', title: 'Control your visibility', body: 'Dark, selective, or active — you decide who can see you, what they see, and when. Nothing moves without your explicit approval.' },
  { num: '03', title: 'Goals-matched, not keyword-matched', body: 'Your profile captures what you want next, what cultures fit, what you\'re done with, and what you\'d actually move for. Companies see that — not just a title.' },
  { num: '04', title: 'Human-reviewed matches',  body: 'Every opportunity is reviewed by a person before it reaches your queue. No algorithm alone decides what you see. Companies never know you passed.' },
]

const COMPANY_STEPS = [
  { num: '01', title: 'Complete the audit',    body: 'Before accessing the network, every company commits on record: comp transparency, a defined interview process, a 5-day response SLA, and role accuracy.' },
  { num: '02', title: 'Submit your role',      body: 'Tell us what you\'re actually hiring for — real scope, real comp, real reasons the role is open. Vague specs don\'t surface well.' },
  { num: '03', title: 'Review matched members', body: 'We surface anonymized member profiles matched to your role. You can request an intro — but the member decides whether to accept.' },
  { num: '04', title: 'Introduction by consent', body: 'Nothing moves until both sides say yes. Members who pass don\'t show up in your pipeline. You only see people who are genuinely interested.' },
]

export default function CollectivePage() {
  return (
    <>
      {/* Hero */}
      <div className="w-hero" style={{ paddingBottom: 56 }}>
        <p className="w-eyebrow" style={{ marginBottom: 16 }}>The Wilson Co. Talent Collective</p>
        <h1 className="w-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 20, maxWidth: 640 }}>
          A private network built on <em>mutual respect.</em>
        </h1>
        <p className="w-hero-sub">
          The Collective is a curated network of senior operators who are selectively open to the right next role.
          Members control their visibility. Companies earn access through an audit. Nothing moves without consent on both sides.
        </p>
        <div className="w-hero-actions">
          <Link href="/member"  className="w-btn w-btn-oak">Join as a member →</Link>
          <Link href="/company" className="w-btn w-btn-outline">Access as a company</Link>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Why it exists */}
      <div className="w-section w-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 40 }}>
          <div>
            <p className="w-eyebrow" style={{ marginBottom: 14 }}>Why it exists</p>
            <h2 className="w-display" style={{ fontSize: 'clamp(18px, 2.5vw, 26px)' }}>
              Both sides were <em>asking for this.</em>
            </h2>
          </div>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85, paddingTop: 4 }}>
            Senior professionals don&apos;t want to be on job boards. They don&apos;t want to cold-apply.
            They want to hear about the right thing, from someone they trust, when the timing is right —
            without their current employer finding out they looked. Companies want the same thing in reverse:
            access to people who aren&apos;t actively looking, who are genuinely matched to what they&apos;re building,
            and who agreed to hear about it. The Collective is how both sides get that.
          </p>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Two paths */}
      <div className="w-section w-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>

          {/* Member path */}
          <div>
            <p className="w-eyebrow" style={{ marginBottom: 14, color: 'var(--denim)' }}>For members</p>
            <div className="w-card" style={{ marginBottom: 10 }}>
              <h3 className="w-display" style={{ fontSize: 18, marginBottom: 12 }}>
                Your next role, <em>on your terms.</em>
              </h3>
              <p style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.75, marginBottom: 16 }}>
                Membership is by application. We review every intake personally. Members are senior operators
                across legal, operations, finance, people, and strategy.
              </p>
              <div className="w-stack" style={{ gap: 8, marginBottom: 20 }}>
                {HOW_IT_WORKS.map(s => (
                  <div key={s.num} className="w-card w-card-beige" style={{ padding: '12px 14px' }}>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--beige-dark)', flexShrink: 0, lineHeight: 1.2 }}>{s.num}</div>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--w-black)', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.title}</div>
                        <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.55 }}>{s.body}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/member" className="w-btn w-btn-denim" style={{ width: '100%', justifyContent: 'center' }}>
                Apply for membership →
              </Link>
            </div>
          </div>

          {/* Company path */}
          <div>
            <p className="w-eyebrow" style={{ marginBottom: 14, color: 'var(--oak)' }}>For companies</p>
            <div className="w-card" style={{ marginBottom: 10 }}>
              <h3 className="w-display" style={{ fontSize: 18, marginBottom: 12 }}>
                Access is earned, <em>not purchased.</em>
              </h3>
              <p style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.75, marginBottom: 16 }}>
                Members agreed to be here on their terms. Before you can see anyone, your company
                goes through an audit and commits to standards they set.
              </p>
              <div className="w-stack" style={{ gap: 8, marginBottom: 20 }}>
                {COMPANY_STEPS.map(s => (
                  <div key={s.num} className="w-card w-card-beige" style={{ padding: '12px 14px' }}>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--beige-dark)', flexShrink: 0, lineHeight: 1.2 }}>{s.num}</div>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--w-black)', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.title}</div>
                        <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.55 }}>{s.body}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/company" className="w-btn w-btn-oak" style={{ width: '100%', justifyContent: 'center' }}>
                Begin company audit →
              </Link>
            </div>
          </div>

        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Pricing nudge */}
      <div className="w-section w-container" style={{ paddingBottom: 64 }}>
        <div className="w-card w-card-beige" style={{ textAlign: 'center', padding: '28px 32px' }}>
          <p className="w-eyebrow" style={{ marginBottom: 10 }}>Pricing</p>
          <h2 className="w-display" style={{ fontSize: 20, marginBottom: 10 }}>Transparent. <em>No surprises.</em></h2>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', maxWidth: 380, margin: '0 auto 20px', lineHeight: 1.75 }}>
            Membership is free for individuals. Companies pay based on the depth of access and the number of introduction credits.
          </p>
          <Link href="/pricing" className="w-btn w-btn-outline">View pricing →</Link>
        </div>
      </div>
    </>
  )
}
