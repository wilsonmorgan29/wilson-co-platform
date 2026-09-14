'use client'

import Link from 'next/link'

export default function ForPeopleLeadersPage() {
  return (
    <>
      {/* Hero */}
      <div className="w-hero" style={{ paddingBottom: 56 }}>
        <p className="w-eyebrow" style={{ marginBottom: 16 }}>For Candidates</p>
        <h1 className="w-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 20, maxWidth: 600 }}>
          Your next role, found by someone who <em>actually knows the function.</em>
        </h1>
        <p className="w-hero-sub" style={{ maxWidth: 560 }}>
          Most recruiters will send your résumé somewhere and hope for the best. We work differently —
          a 1:1 search process built around where you actually want to go, not just what you've done.
          For HR, Talent Acquisition, People Ops, and Operations professionals ready for their next move.
        </p>
        <div className="w-hero-actions" style={{ marginTop: 28 }}>
          <Link href="/contact?subject=Recruiting" className="w-btn w-btn-oak">Let's talk →</Link>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Why it's different */}
      <div className="w-section w-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 40, alignItems: 'start' }}>
          <div>
            <p className="w-eyebrow" style={{ marginBottom: 14 }}>Why it's different</p>
            <h2 className="w-display" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
              Placed by someone who&apos;s <em>been in your seat.</em>
            </h2>
          </div>
          <div className="w-stack" style={{ gap: 16 }}>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              The recruiters filling most People and HR roles have never worked in a People function.
              They know how to read a job description. They don&apos;t know what it actually takes to be an
              HRBP at a scaling company, or what separates a VP of TA who builds something from one who
              just fills requisitions. That gap shows — in the roles they pitch, in the questions they
              ask, and in the matches they make.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              Ten years inside recruiting and talent development at elite global firms means I understand
              what you actually do, what you&apos;re actually worth, and what the right next role actually looks
              like for you. That&apos;s not a pitch — it&apos;s the reason this works.
            </p>
          </div>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Who we work with */}
      <div className="w-section w-container">
        <p className="w-eyebrow" style={{ marginBottom: 8 }}>Who we work with</p>
        <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 24, lineHeight: 1.6, maxWidth: 520 }}>
          People, TA, HR, and Operations professionals at every level — from individual contributors ready to step up, to CHROs making a strategic move.
        </p>
        <div className="w-grid-3" style={{ gap: 12 }}>
          {[
            { level: 'IC / Manager', examples: 'Recruiter, HR Coordinator, TA Specialist, HRBP, People Ops Coordinator, Recruiting Manager' },
            { level: 'Director / VP', examples: 'Director of People, VP of HR, Director of Talent Acquisition, VP of People Operations, Director of Total Rewards' },
            { level: 'Head of People / CHRO', examples: 'Head of People, Chief People Officer, CHRO, Chief HR Officer' },
          ].map(b => (
            <div key={b.level} className="w-card w-card-beige" style={{ padding: '20px 20px' }}>
              <span className="w-badge w-badge-gold" style={{ marginBottom: 10, display: 'inline-block' }}>{b.level}</span>
              <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.6 }}>{b.examples}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* How it works */}
      <div className="w-section w-container">
        <p className="w-eyebrow" style={{ marginBottom: 8 }}>How it works</p>
        <h2 className="w-display" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: 28 }}>
          A search built around <em>you.</em>
        </h2>
        <div className="w-stack" style={{ gap: 0 }}>
          {[
            {
              n: '01',
              title: 'We start with a real conversation',
              desc: 'Not a form, not a résumé review. A conversation about where you are, what you\'ve built, what you\'re looking for next, and what matters to you in a role — culture, scope, team, trajectory. The more specific, the better.',
            },
            {
              n: '02',
              title: 'We get clear on the right fit',
              desc: 'Not every open role is the right one for you. We work together to define what the right next move actually looks like — title, seniority, industry, company stage — before we start introducing you anywhere.',
            },
            {
              n: '03',
              title: 'We make targeted introductions',
              desc: 'We don\'t blast your résumé. We make deliberate, relationship-based introductions to companies where we genuinely believe there\'s a fit — and we give you context on every one before anything moves forward.',
            },
            {
              n: '04',
              title: 'We manage the process with you',
              desc: 'Interview prep, offer evaluation, negotiation — we stay in it with you all the way through. Our job isn\'t done when you get an offer. It\'s done when you\'re in the right role.',
            },
          ].map((s, i, arr) => (
            <div key={s.n} className="w-card" style={{ borderRadius: i === 0 ? 'var(--w-radius) var(--w-radius) 0 0' : i === arr.length - 1 ? '0 0 var(--w-radius) var(--w-radius)' : '0', borderTop: i > 0 ? 'none' : undefined, display: 'grid', gridTemplateColumns: '56px 1fr', gap: 20, padding: '24px 26px', alignItems: 'start' }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 28, fontStyle: 'italic', color: 'var(--oak)', opacity: 0.45, lineHeight: 1, paddingTop: 2 }}>{s.n}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink-1)', marginBottom: 6 }}>{s.title}</div>
                <div style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.8 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="w-section w-container" style={{ paddingBottom: 64 }}>
        <div className="w-card" style={{ background: 'var(--w-black)', border: 'none', textAlign: 'center', padding: '36px 32px' }}>
          <p className="w-eyebrow" style={{ marginBottom: 12, color: 'var(--oak-light)' }}>Ready to explore?</p>
          <h2 className="w-display" style={{ fontSize: 22, color: 'var(--w-white)', marginBottom: 14 }}>
            Let&apos;s find the role that&apos;s <em style={{ color: 'var(--oak-light)' }}>actually right for you.</em>
          </h2>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.5)', maxWidth: 400, margin: '0 auto 24px', lineHeight: 1.75 }}>
            Reach out and tell us where you are and what you&apos;re looking for.
            No pressure — just a real conversation to see if it makes sense.
          </p>
          <Link href="/contact?subject=Recruiting" className="w-btn w-btn-oak">Get in touch →</Link>
        </div>
      </div>
    </>
  )
}
