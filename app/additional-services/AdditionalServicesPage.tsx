'use client'

import Link from 'next/link'

const SERVICES = [
  {
    id: 'coaching',
    badge: 'w-badge-oak',
    label: 'Career Coaching',
    headline: 'Get clear. Move with intention.',
    body: [
      'Most people who come to us for coaching don\'t lack ambition — they lack clarity. They know what they\'ve outgrown. They have a general sense of what they want. But they haven\'t had a real conversation with someone who can help them articulate it, pressure-test it, and build a real plan around it.',
      'Career coaching at The Wilson Co. is personal and practical. We start with where you actually are — not where your LinkedIn says you are — and build from there. No frameworks for the sake of frameworks. No generic advice. Just honest conversation and real accountability.',
    ],
    details: [
      '1:1 engagement — not group sessions',
      'Career transition, pivot, and advancement support',
      'Attorneys and legal professionals at any stage',
      '3-session, 6-session, or ongoing engagements',
      'Based in NYC · available virtually, nationwide',
    ],
    cta: { label: 'Discuss coaching →', href: '/contact?subject=Career+coaching' },
  },
  {
    id: 'consulting',
    badge: 'w-badge-hyd',
    label: 'Talent Consulting',
    headline: 'Build a team people actually want to join.',
    body: [
      'Companies spend enormous energy on hiring and almost none on understanding why their process frustrates candidates, drives away good people, and produces hires that don\'t stick. The answer is rarely a new tool or template — it\'s a clearer picture of what they\'re actually looking for and a process that respects the gravity of the decision.',
      'We work with leadership teams and HR to diagnose what\'s broken, build processes that work, and create candidate and employee experiences that reflect well on the organization. Because how you treat people — whether they get the job or not — defines your culture.',
    ],
    details: [
      'Hiring process audit and redesign',
      'Candidate and employee experience strategy',
      'Retention and culture assessment',
      'Leadership alignment on talent and values',
      'Hourly or monthly retainer',
    ],
    cta: { label: 'Discuss consulting →', href: '/contact?subject=Talent+consulting' },
  },
  {
    id: 'workshops',
    badge: 'w-badge-denim',
    label: 'Workshops',
    headline: 'Group sessions for teams and events.',
    body: [
      'Group workshops on interview skills, networking, executive presence, and career development — tailored for conferences, corporate teams, ERGs, summits, and companies. Available as half-day, full-day, or keynote formats, in person or virtual.',
      'Every workshop is built for the specific room it\'s delivered to. The goal is always the same: people walk out with something they can actually use the next day, not a deck they never open again.',
    ],
    details: [
      'Interview skills, networking, executive presence, career strategy',
      'Half-day, full-day, or keynote formats',
      'Conferences, corporate teams, ERGs, universities',
      'Pricing tailored to event and scope',
      'NYC-based · available nationwide',
    ],
    cta: { label: 'Get a quote →', href: '/contact?subject=Workshop+inquiry' },
  },
]

export default function AdditionalServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="w-hero" style={{ paddingBottom: 48 }}>
        <p className="w-eyebrow" style={{ marginBottom: 16 }}>Additional Services</p>
        <h1 className="w-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 20, maxWidth: 600 }}>
          Beyond the placement, <em>a few other ways we help.</em>
        </h1>
        <p className="w-hero-sub" style={{ maxWidth: 580 }}>
          Recruiting is the core of what we do. But a decade inside Big Law built expertise
          that doesn&apos;t only apply to search — so we take on a select number of coaching, consulting, and
          workshop engagements alongside it.
        </p>
      </div>

      {/* Pointer back to the main offer */}
      <div className="w-container">
        <div
          className="w-card w-card-beige"
          style={{ display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', padding: '20px 24px' }}
        >
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-1)', marginBottom: 3 }}>
              Looking to hire, or looking for your next role?
            </div>
            <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.6 }}>
              Legal recruiting for law firms, in-house teams, and attorneys is our primary practice.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link href="/for-companies" className="w-btn w-btn-oak" style={{ fontSize: 11 }}>For companies →</Link>
            <Link href="/for-candidates" className="w-btn w-btn-outline" style={{ fontSize: 11 }}>For candidates</Link>
          </div>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Services */}
      {SERVICES.map((s, i) => (
        <div key={s.id} id={s.id}>
          <div className="w-section w-container">
            <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 40, alignItems: 'start' }}>
              {/* Left label */}
              <div style={{ position: 'sticky', top: 80 }}>
                <span className={`w-badge ${s.badge}`} style={{ marginBottom: 12, display: 'inline-block' }}>{s.label}</span>
                <h2 className="w-display" style={{ fontSize: 'clamp(18px, 2vw, 24px)', marginBottom: 20 }}>
                  {s.headline.split('. ')[0] + '.'}<br />
                  <em>{s.headline.split('. ').slice(1).join('. ')}</em>
                </h2>
                <div className="w-stack" style={{ gap: 6, marginBottom: 20 }}>
                  {s.details.map(d => (
                    <div key={d} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--oak)', fontSize: 10, marginTop: 3, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.5 }}>{d}</span>
                    </div>
                  ))}
                </div>
                <Link href={s.cta.href} className="w-btn w-btn-outline" style={{ fontSize: 11 }}>{s.cta.label}</Link>
              </div>

              {/* Right body */}
              <div className="w-card" style={{ padding: '28px 30px' }}>
                {s.body.map((p, pi) => (
                  <p key={pi} style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: pi < s.body.length - 1 ? 16 : 0 }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {i < SERVICES.length - 1 && <div className="w-container"><div className="w-divider" /></div>}
        </div>
      ))}

      <div className="w-container"><div className="w-divider" /></div>

      {/* CTA */}
      <div className="w-section w-container" style={{ paddingBottom: 64 }}>
        <div className="w-card w-card-beige" style={{ textAlign: 'center', padding: '36px 32px' }}>
          <p className="w-eyebrow" style={{ marginBottom: 12 }}>Not sure which fits?</p>
          <h2 className="w-display" style={{ fontSize: 22, marginBottom: 12 }}>
            Start with a <em>conversation.</em>
          </h2>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.75, maxWidth: 420, margin: '0 auto 24px' }}>
            We&apos;ll figure out together what you need. No pressure, no pitch — just a real conversation.
          </p>
          <div className="w-hero-actions" style={{ justifyContent: 'center' }}>
            <Link href="/contact" className="w-btn w-btn-oak">Get in touch →</Link>
            <Link href="/pricing" className="w-btn w-btn-outline">See pricing</Link>
          </div>
        </div>
      </div>
    </>
  )
}
