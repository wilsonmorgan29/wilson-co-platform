'use client'

import Link from 'next/link'

const BANDS = [
  {
    level: 'People & HR',
    roles: 'Chief People Officer, CHRO, VP of People, Director of HR, HR Business Partner, Total Rewards, People Operations',
    desc: 'The function every other function depends on. Who gets hired, who stays, and whether the culture holds while you scale all run through this seat — and it is the one most companies hire for worst.',
  },
  {
    level: 'Talent Acquisition',
    roles: 'Head of Talent, VP of Talent Acquisition, Director of Recruiting, Recruiting Manager, Talent Operations',
    desc: 'The people who build your hiring engine. We have done this job inside demanding organizations, so we know the difference between someone who fills requisitions and someone who builds something durable.',
  },
  {
    level: 'Operations',
    roles: 'Chief Operating Officer, VP of Operations, Director of Business Operations, BizOps, RevOps',
    desc: 'Operators who turn strategy into systems. These hires matter most right as a company outgrows the stage where the founders can hold everything in their heads.',
  },
  {
    level: 'Marketing',
    roles: 'Chief Marketing Officer, VP of Marketing, Head of Growth, Director of Brand, Director of Demand Generation',
    desc: 'Marketing leaders who can both set the strategy and run it. At growth stage the right hire is rarely the one with the biggest brand on their resume — it is the one who has built at your stage before.',
  },
  {
    level: 'Legal',
    roles: 'General Counsel, in-house counsel, legal operations, compliance, plus law firm talent, professional development, and operations teams',
    desc: 'Legal is where we started. Years inside Kirkland & Ellis, Weil Gotshal & Manges, and Locke Lord mean we know both sides: the companies building a legal function, and the attorneys ready to leave Big Law for something that fits better.',
  },
]

export default function ForCompaniesPage() {
  return (
    <>
      {/* Hero */}
      <div className="w-hero" style={{ paddingBottom: 56 }}>
        <p className="w-eyebrow" style={{ marginBottom: 16 }}>For Companies</p>
        <h1 className="w-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 20, maxWidth: 600 }}>
          Executive search for the roles that decide <em>whether you scale well.</em>
        </h1>
        <p className="w-hero-sub" style={{ maxWidth: 580 }}>
          Retained search for executive and senior roles across People, Talent, Operations, Marketing,
          HR, and Legal — for venture-backed and growing companies from seed to Series C. Run by people who have held these seats, not just filled them.
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 28, flexWrap: 'wrap' }}>
          <div style={{ background: 'var(--oak)', borderRadius: 'var(--w-radius)', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 18, color: '#fff' }}>✓</span>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: '0.02em' }}>90-day guarantee</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.75)', fontWeight: 300 }}>replacement search at no additional fee</div>
            </div>
          </div>
          <div style={{ background: 'var(--w-bg-alt)', border: '1px solid var(--w-border)', borderRadius: 'var(--w-radius)', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 18, color: 'var(--oak)' }}>✓</span>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-1)', letterSpacing: '0.02em' }}>Scoped per engagement</div>
              <div style={{ fontSize: 10, color: 'var(--ink-3)', fontWeight: 300 }}>agreed before the search begins</div>
            </div>
          </div>
        </div>
        <div className="w-hero-actions" style={{ marginTop: 28 }}>
          <Link href="/contact?subject=Recruiting" className="w-btn w-btn-oak">Start a search →</Link>
          <Link href="/pricing#recruiting" className="w-btn w-btn-outline">See pricing</Link>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* The case */}
      <div className="w-section w-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 40, alignItems: 'start' }}>
          <div>
            <p className="w-eyebrow" style={{ marginBottom: 14 }}>Why these roles</p>
            <h2 className="w-display" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
              The hires that <em>compound.</em>
            </h2>
          </div>
          <div className="w-stack" style={{ gap: 16 }}>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              Every growing company hits the same wall. What worked when the founders made every decision stops
              working, and the hires that carry you through are the ones who build systems: the people leader,
              the operator, the marketer, the first real GC. Get those right and everything downstream gets easier.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              These are also the hardest roles to assess from the outside. A resume tells you where someone worked,
              not whether they have built the function or only inherited it. That distinction is the whole
              difference between a hire who scales with you and one who stalls at the next stage.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              We have been those hires. Our experience comes from inside these functions — across Big Law and
              financial services, building teams and infrastructure rather than filling roles into them. We know
              what the work actually requires, which is not something a keyword filter can replicate.
            </p>
          </div>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Seniority bands */}
      <div className="w-section w-container">
        <p className="w-eyebrow" style={{ marginBottom: 8 }}>Who we place</p>
        <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 28, lineHeight: 1.6, maxWidth: 520 }}>
          Executive and senior search across five functions, for companies from seed to Series C.
        </p>
        <div className="w-stack" style={{ gap: 12 }}>
          {BANDS.map((b, i) => (
            <div key={b.level} className="w-card" style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 24, alignItems: 'start' }}>
              <div>
                <span className="w-badge w-badge-gold" style={{ marginBottom: 8, display: 'inline-block' }}>{b.level}</span>
                <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.55 }}>{b.roles}</div>
              </div>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.8 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* How a search works */}
      <div className="w-section w-container">
        <p className="w-eyebrow" style={{ marginBottom: 8 }}>How it works</p>
        <h2 className="w-display" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: 28 }}>
          Search management, <em>start to finish.</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {[
            { n: '01', title: 'Define the role', desc: 'We start with a real intake — not just the job description, but what the function needs, what the team looks like, and what good actually means for this hire.' },
            { n: '02', title: 'Build the pipeline', desc: 'Active sourcing, direct outreach, and network-based referrals. We don\'t post and wait. We go find the people who aren\'t looking yet.' },
            { n: '03', title: 'Screen and qualify', desc: 'Every candidate we present has been screened by someone who has worked in the function — not just checked against a keyword list.' },
            { n: '04', title: 'Manage the process', desc: 'Interview coordination, offer strategy, and close. We stay in the deal all the way through and don\'t disappear when it gets complicated.' },
          ].map(s => (
            <div key={s.n} className="w-card w-card-beige" style={{ padding: '22px 20px' }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 24, fontStyle: 'italic', color: 'var(--oak)', marginBottom: 8, opacity: 0.5 }}>{s.n}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-1)', marginBottom: 6 }}>{s.title}</div>
              <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.75 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="w-section w-container" style={{ paddingBottom: 64 }}>
        <div className="w-card" style={{ background: 'var(--w-black)', border: 'none', textAlign: 'center', padding: '36px 32px' }}>
          <p className="w-eyebrow" style={{ marginBottom: 12, color: 'var(--oak-light)' }}>Ready to start a search?</p>
          <h2 className="w-display" style={{ fontSize: 22, color: 'var(--w-white)', marginBottom: 14 }}>
            Let&apos;s find the person <em style={{ color: 'var(--oak-light)' }}>worth finding.</em>
          </h2>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.5)', maxWidth: 400, margin: '0 auto 24px', lineHeight: 1.75 }}>
            Tell us about the role, the team, and what you&apos;re really looking for.
            We&apos;ll take it from there.
          </p>
          <div className="w-hero-actions" style={{ justifyContent: 'center' }}>
            <Link href="/contact?subject=Recruiting" className="w-btn w-btn-oak">Get in touch →</Link>
            <Link href="/pricing" className="w-btn w-btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}>See pricing</Link>
          </div>
        </div>
      </div>
    </>
  )
}
