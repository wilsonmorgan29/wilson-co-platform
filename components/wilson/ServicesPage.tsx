import Link from 'next/link'

const SERVICES = [
  {
    id: 'recruiting',
    badge: 'w-badge-denim',
    label: 'Recruiting',
    headline: 'Find the right person. Not just the available one.',
    body: [
      'Most recruiting looks the same: post a job, collect résumés, screen, repeat. It\'s built for volume, not quality. The people who are actually right for a role are often the ones who never saw the posting — because they\'re not actively looking, or they\'ve learned that applying through job boards rarely goes anywhere.',
      'We work differently. Every search starts with a deep conversation about what you actually need — the role, yes, but also the culture, the leadership, the trajectory. Then we go find the person, not wait for them to find you. Proactive outreach, real relationship-building, and honest assessments before we ever make an introduction.',
    ],
    details: ['Mid-level to senior leadership placements', 'Direct hire and retained search', 'Legal, legal services, financial services, private equity, and startups', 'Based in NYC · working nationwide'],
  },
  {
    id: 'coaching',
    badge: 'w-badge-oak',
    label: 'Career Coaching',
    headline: 'Get clear. Move with intention.',
    body: [
      'Most people who come to us for coaching don\'t lack ambition — they lack clarity. They know what they\'ve outgrown. They have a general sense of what they want. But they haven\'t had a real conversation with someone who can help them articulate it, pressure-test it, and build a real plan around it.',
      'Career coaching at The Wilson Co. is personal and practical. We start with where you actually are — not where your LinkedIn says you are — and build from there. No frameworks for the sake of frameworks. No generic advice. Just honest conversation and real accountability.',
    ],
    details: ['1:1 engagement — not group sessions', 'Career transition and pivot support', 'Mid-level to senior professionals in legal, finance, PE, and startups', 'Available virtually, nationwide'],
  },
  {
    id: 'consulting',
    badge: 'w-badge-hyd',
    label: 'Corporate Consulting',
    headline: 'Build a hiring culture worth working for.',
    body: [
      'Companies spend millions on recruiting and almost nothing on understanding why their process frustrates candidates, drives away good people, and produces hires that don\'t stick. The answer is usually not a new ATS or a better job description template — it\'s a clearer picture of what they\'re actually looking for and a process that respects the gravity of the decision.',
      'We work with leadership teams and HR to diagnose what\'s broken, build processes that work, and create candidate experiences that reflect well on the organization — regardless of outcome. Because how you treat someone who doesn\'t get the job matters.',
    ],
    details: ['Hiring process audit and redesign', 'Candidate experience strategy', 'Retention and culture assessment', 'Leadership team alignment on hiring criteria'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="w-hero" style={{ paddingBottom: 56 }}>
        <p className="w-eyebrow" style={{ marginBottom: 16 }}>What we do</p>
        <h1 className="w-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 20, maxWidth: 560 }}>
          Three ways to work <em>with us.</em>
        </h1>
        <p className="w-hero-sub">
          Recruiting, career coaching, and corporate consulting — each one built around the same belief:
          that the right match, made the right way, changes everything.
        </p>
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
                <div className="w-stack" style={{ gap: 6 }}>
                  {s.details.map(d => (
                    <div key={d} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--oak)', fontSize: 10, marginTop: 3, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.5 }}>{d}</span>
                    </div>
                  ))}
                </div>
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
        <div className="w-card w-card-oak" style={{ textAlign: 'center', padding: '32px' }}>
          <p className="w-eyebrow" style={{ marginBottom: 12 }}>Not sure which fits?</p>
          <h2 className="w-display" style={{ fontSize: 22, marginBottom: 14 }}>
            Start with a <em>conversation.</em>
          </h2>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', maxWidth: 400, margin: '0 auto 22px', lineHeight: 1.75 }}>
            We&apos;ll figure out together what you need. No pressure, no pitch — just a real conversation.
          </p>
          <Link href="/contact" className="w-btn w-btn-oak">Contact us →</Link>
        </div>
      </div>
    </>
  )
}
