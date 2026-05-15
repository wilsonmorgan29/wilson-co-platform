'use client'

import Link from 'next/link'

const SERVICES = [
  {
    label: 'Recruiting',
    badge: 'w-badge-denim',
    body: 'Proactive, relationship-driven recruiting for companies that are serious about who they hire. We don\'t post and pray — we find the right person, build the relationship, and make the introduction.',
    href: '/services#recruiting',
  },
  {
    label: 'Career Coaching',
    badge: 'w-badge-oak',
    body: '1:1 coaching for senior professionals navigating transitions. We help you get clear on what you actually want, move strategically, and land somewhere you\'re proud of.',
    href: '/services#coaching',
  },
  {
    label: 'Corporate Consulting',
    badge: 'w-badge-hyd',
    body: 'Working with leadership teams to build better hiring practices, improve how they treat candidates, and retain the people they already have.',
    href: '/services#consulting',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="w-hero" style={{ paddingBottom: 72 }}>
        <div className="w-eyebrow" style={{ marginBottom: 18 }}>
          Career Coaching · Recruiting · Talent Collective · New York City · Nationwide
        </div>
        <h1 className="w-display" style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', marginBottom: 20, maxWidth: 700 }}>
          Empowering people and organizations to grow with <em>clarity, confidence, and purpose.</em>
        </h1>
        <p className="w-hero-sub">
          The Wilson Co. works with mid-level to senior professionals — primarily in legal, financial services,
          private equity, and startups — and the companies looking to hire them. Built on real relationships
          and ten years of knowing what both sides actually need.
        </p>
        <div className="w-hero-actions">
          <Link href="/collective" className="w-btn w-btn-oak">The Collective →</Link>
          <Link href="/services"   className="w-btn w-btn-outline">Our services</Link>
          <Link href="/contact"    className="w-btn w-btn-ghost">Get in touch</Link>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* As seen in */}
      <div className="w-container" style={{ padding: '24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-3)', marginRight: 8 }}>As seen in</span>
          {['AP News', 'CEO Weekly', 'US Insider'].map(pub => (
            <span key={pub} style={{ fontSize: 12, fontWeight: 500, color: 'var(--ink-2)', letterSpacing: '0.04em', opacity: 0.6 }}>{pub}</span>
          ))}
          <a href="https://substack.com/@thewilsonco" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, fontWeight: 500, color: 'var(--oak)', letterSpacing: '0.04em', textDecoration: 'none', opacity: 0.8 }}>Substack ↗</a>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Services */}
      <div className="w-section w-container">
        <p className="w-eyebrow" style={{ marginBottom: 20 }}>What we do</p>
        <div className="w-grid-3">
          {SERVICES.map(s => (
            <Link key={s.label} href={s.href} className="w-card" style={{ textDecoration: 'none', display: 'block', transition: 'border-color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.borderColor = 'var(--oak)')}
              onMouseOut={e  => (e.currentTarget.style.borderColor = 'var(--w-border)')}>
              <span className={`w-badge ${s.badge}`} style={{ marginBottom: 12, display: 'inline-block' }}>{s.label}</span>
              <div style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: 14 }}>{s.body}</div>
              <div style={{ fontSize: 10, fontWeight: 500, color: 'var(--oak)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Learn more →</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Our Why */}
      <div className="w-section w-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 40, alignItems: 'start' }}>
          <div>
            <p className="w-eyebrow" style={{ marginBottom: 16 }}>Our why</p>
            <h2 className="w-display" style={{ fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 0 }}>
              Built after watching the industry <em>fail everyone.</em>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: 16 }}>
              After more than ten years in the recruiting industry, I&apos;ve watched it get worse in almost every direction.
              Jobs posted on LinkedIn generate thousands of résumés before lunch. Algorithms screen people before a
              human reads their name. Candidates are ghosted. Hiring managers are overwhelmed. Both sides walk away
              frustrated — and somehow the process keeps getting repeated.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: 20 }}>
              The Wilson Co. was built after years of hearing the same thing from both sides: there has to be a better way.
              A more authentic, more thoughtful approach to hiring — one that respects the gravity of a career decision
              and treats both the person and the company as partners in getting it right.
            </p>
            <Link href="/about" className="w-btn w-btn-outline" style={{ fontSize: 11 }}>Read the full story →</Link>
          </div>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* The Collective */}
      <div className="w-section w-container">
        <p className="w-eyebrow" style={{ marginBottom: 20 }}>The Wilson Co. Talent Collective</p>
        <div className="w-card" style={{ background: 'var(--w-black)', border: 'none', padding: '36px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display), "Gill Sans MT", sans-serif', fontSize: 'clamp(20px, 2.5vw, 28px)', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--w-white)', marginBottom: 14 }}>
                A private network built on <span style={{ color: 'var(--oak-light)', fontStyle: 'italic', fontFamily: 'Georgia, serif', textTransform: 'none' }}>mutual respect.</span>
              </h2>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 20 }}>
                The Collective is a curated network of senior operators who are selectively open to the right next role.
                Members control their visibility. Companies earn access through an audit. Nothing moves without consent on both sides.
              </p>
              <Link href="/collective" className="w-btn w-btn-oak">Learn how it works →</Link>
            </div>
            <div className="w-stack" style={{ gap: 10 }}>
              {[
                { icon: '◎', label: 'For members', desc: 'Apply by intake. Control your visibility. Only hear about roles that actually match what you want next.' },
                { icon: '◈', label: 'For companies', desc: 'Complete an audit. Commit to standards. Access senior leaders who aren\'t on job boards.' },
              ].map(item => (
                <div key={item.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--w-radius)', padding: '16px 18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span style={{ color: 'var(--oak-light)', fontSize: 14 }}>{item.icon}</span>
                    <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>{item.label}</span>
                  </div>
                  <p style={{ fontSize: 12, fontWeight: 300, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="w-section w-container" style={{ paddingBottom: 64 }}>
        <div className="w-card w-card-beige" style={{ textAlign: 'center', padding: '36px 32px' }}>
          <p className="w-eyebrow" style={{ marginBottom: 12 }}>Let&apos;s talk</p>
          <h2 className="w-display" style={{ fontSize: 'clamp(20px, 3vw, 28px)', marginBottom: 12 }}>
            Not sure where to start? <em>Start here.</em>
          </h2>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.75, maxWidth: 420, margin: '0 auto 24px' }}>
            Whether you&apos;re an individual looking for clarity on your next move or a company tired of the same broken process —
            reach out. We&apos;d love to hear where you are.
          </p>
          <div className="w-hero-actions" style={{ justifyContent: 'center' }}>
            <Link href="/contact" className="w-btn w-btn-oak">Contact us →</Link>
            <Link href="/services" className="w-btn w-btn-outline">View services</Link>
          </div>
        </div>
      </div>
    </>
  )
}
