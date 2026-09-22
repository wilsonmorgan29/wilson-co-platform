'use client'

import Link from 'next/link'

const BANDS = [
  {
    level: 'Law firm talent & operations',
    roles: 'Legal Recruiting Manager, Director of Attorney Recruiting, Professional Development, HR Business Partner, Chief Talent Officer, Director of Operations',
    desc: 'The business-side teams that decide which lawyers a firm hires, how they develop, and whether they stay. This is the seat I held for a decade, at Kirkland & Ellis, Weil Gotshal & Manges, and Locke Lord.',
  },
  {
    level: 'In-house & companies',
    roles: 'In-house counsel, legal operations, contract management, compliance, and the talent and HR professionals who support legal teams',
    desc: 'Companies building or growing a legal function need people who understand how legal teams actually operate. I know that world from the inside, and I know the people who do too.',
  },
  {
    level: 'Attorneys',
    roles: 'Associates (lateral moves) and in-house counsel',
    desc: 'Associate and in-house placements, built on years of attorney recruiting inside Big Law. I know how firms evaluate lateral candidates, how the process runs, and what makes an offer close.',
  },
]

export default function ForCompaniesPage() {
  return (
    <>
      {/* Hero */}
      <div className="w-hero" style={{ paddingBottom: 56 }}>
        <p className="w-eyebrow" style={{ marginBottom: 16 }}>For Companies</p>
        <h1 className="w-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 20, maxWidth: 600 }}>
          Legal recruiting, from someone who spent a decade <em>doing it inside Big Law.</em>
        </h1>
        <p className="w-hero-sub" style={{ maxWidth: 580 }}>
          Retained and contingency search for law firms and companies hiring for legal roles: talent, HR, and operations
          leaders, plus associate and in-house attorney placements. Run by someone who&apos;s held the seat, not just filled it.
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 28, flexWrap: 'wrap' }}>
          <div style={{ background: 'var(--oak)', borderRadius: 'var(--w-radius)', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 18, color: '#fff' }}>✓</span>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: '0.02em' }}>25–30% fee</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.75)', fontWeight: 300 }}>of first-year compensation</div>
            </div>
          </div>
          <div style={{ background: 'var(--w-bg-alt)', border: '1px solid var(--w-border)', borderRadius: 'var(--w-radius)', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 18, color: 'var(--oak)' }}>✓</span>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-1)', letterSpacing: '0.02em' }}>90-day guarantee</div>
              <div style={{ fontSize: 10, color: 'var(--ink-3)', fontWeight: 300 }}>replacement search at no additional fee</div>
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
            <p className="w-eyebrow" style={{ marginBottom: 14 }}>Why legal</p>
            <h2 className="w-display" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
              A world you have to <em>know from the inside.</em>
            </h2>
          </div>
          <div className="w-stack" style={{ gap: 16 }}>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              Law firms run on people. Their product is their lawyers, and the teams that recruit, develop, and
              keep those lawyers shape everything else: the associate class, the lateral pipeline, the culture,
              and whether the best people stay long enough to make partner.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              Legal is also its own world, with its own calendar, hierarchy, and unwritten rules. Summer programs,
              lateral integration, partnership tracks, billable-hour culture. Most recruiters learn it from the
              outside. Companies hiring for legal roles face the same problem: they need people who understand how legal actually works.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              I&apos;ve been that hire. Ten years inside attorney recruiting and professional development at
              Kirkland & Ellis, Weil Gotshal & Manges, and Locke Lord, from recruiting assistant to Director.
              I know the job, the firms, and the people. That&apos;s not something a keyword filter can replicate.
            </p>
          </div>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Seniority bands */}
      <div className="w-section w-container">
        <p className="w-eyebrow" style={{ marginBottom: 8 }}>Who we place</p>
        <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 28, lineHeight: 1.6, maxWidth: 520 }}>
          Three practice areas, all within the legal industry.
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
            { n: '03', title: 'Screen and qualify', desc: 'Every candidate we present has been screened by someone who understands the function — not just checked against a keyword list.' },
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
