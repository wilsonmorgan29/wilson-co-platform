import Link from 'next/link'

const WORKSHOPS = [
  {
    id: 'interview',
    badge: 'w-badge-oak',
    label: 'Interview Skills',
    headline: 'Walk in prepared. Walk out remembered.',
    body: [
      'Most people underprepare for interviews — not because they don\'t care, but because they\'ve never been taught how to actually prepare. This workshop goes beyond rehearsing answers. We cover how to read the room, how to talk about your experience without sounding scripted, and how to handle the questions that trip people up every time.',
      'Participants leave with a framework they can apply immediately, real practice under pressure, and honest feedback on how they come across — not just what they say.',
    ],
    details: ['Behavioral and situational interview prep', 'Storytelling and answer structure', 'Live mock interview exercises', 'Feedback on presence, tone, and delivery'],
  },
  {
    id: 'networking',
    badge: 'w-badge-denim',
    label: 'Networking That Works',
    headline: 'Build real relationships. Not just connections.',
    body: [
      'Networking has a reputation problem — because most of the advice about it is bad. This workshop reframes networking entirely: not as a transactional exercise, but as a long-term practice of building genuine relationships with people whose work you respect.',
      'We cover how to reach out without feeling awkward, how to follow up without being annoying, how to show up at events as yourself instead of a business card, and how to maintain relationships over time without manufactured touchpoints.',
    ],
    details: ['Outreach strategy and messaging', 'In-person and virtual networking', 'Building a referral-worthy reputation', 'Long-term relationship maintenance'],
  },
  {
    id: 'professionalism',
    badge: 'w-badge-hyd',
    label: 'Professionalism & Executive Presence',
    headline: 'How you show up matters.',
    body: [
      'Executive presence isn\'t about being polished — it\'s about being clear, credible, and confident in rooms that matter. This workshop covers the often-unspoken dynamics of professional environments: how decisions actually get made, how to communicate across levels, and how to build a reputation that opens doors.',
      'Whether your team is early-career or mid-senior, this workshop surfaces blind spots and gives people concrete tools for showing up more effectively — in meetings, on email, in difficult conversations, and when stakes are high.',
    ],
    details: ['Communication across levels and formats', 'Meeting dynamics and speaking up', 'Written communication and email tone', 'Managing up and building credibility'],
  },
  {
    id: 'career',
    badge: 'w-badge-oak',
    label: 'Career Strategy & Growth',
    headline: 'Know where you\'re going. Plan how to get there.',
    body: [
      'Most people manage their careers reactively — taking the next opportunity that appears instead of building toward something intentional. This workshop gives participants a framework for thinking about their career as a deliberate project: where they are, where they want to be, and what the gap actually looks like.',
      'Ideal for companies investing in their people, employee resource groups, or conferences looking to give attendees something they\'ll actually use.',
    ],
    details: ['Self-assessment and strengths mapping', 'Goal-setting with real accountability', 'Navigating internal advancement', 'Making a move — lateral, vertical, or pivot'],
  },
]

const FORMATS = [
  { label: 'Corporate Teams', desc: 'A half-day or full-day session built around your team\'s specific needs and goals.' },
  { label: 'Conferences & Summits', desc: 'Keynote-style or breakout workshops that give attendees something concrete to take home.' },
  { label: 'Employee Resource Groups', desc: 'Tailored sessions for ERGs focused on career development, advancement, and belonging.' },
  { label: 'Universities & Programs', desc: 'Workshops for graduate students, MBA programs, and professional development cohorts.' },
]

export default function WorkshopsPage() {
  return (
    <>
      {/* Hero */}
      <div className="w-hero" style={{ paddingBottom: 56 }}>
        <p className="w-eyebrow" style={{ marginBottom: 16 }}>Group workshops</p>
        <h1 className="w-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 20, maxWidth: 580 }}>
          The conversation your team has been <em>missing.</em>
        </h1>
        <p className="w-hero-sub" style={{ maxWidth: 540 }}>
          Practical, high-energy workshops on the skills that actually move careers forward — interview
          readiness, networking, executive presence, and career strategy. Built for conferences, corporate
          teams, summits, and companies serious about developing their people.
          Based in New York City · available nationwide.
        </p>
        <div className="w-hero-actions" style={{ marginTop: 28 }}>
          <Link href="/contact" className="w-btn w-btn-oak">Book a workshop →</Link>
          <Link href="#formats" className="w-btn w-btn-outline">See formats</Link>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Workshops */}
      {WORKSHOPS.map((w, i) => (
        <div key={w.id} id={w.id}>
          <div className="w-section w-container">
            <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 40, alignItems: 'start' }}>
              <div style={{ position: 'sticky', top: 80 }}>
                <span className={`w-badge ${w.badge}`} style={{ marginBottom: 12, display: 'inline-block' }}>{w.label}</span>
                <h2 className="w-display" style={{ fontSize: 'clamp(18px, 2vw, 24px)', marginBottom: 20 }}>
                  {w.headline.split('. ')[0] + '.'}<br />
                  <em>{w.headline.split('. ').slice(1).join('. ')}</em>
                </h2>
                <div className="w-stack" style={{ gap: 6 }}>
                  {w.details.map(d => (
                    <div key={d} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--oak)', fontSize: 10, marginTop: 3, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.5 }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-card" style={{ padding: '28px 30px' }}>
                {w.body.map((p, pi) => (
                  <p key={pi} style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: pi < w.body.length - 1 ? 16 : 0 }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {i < WORKSHOPS.length - 1 && <div className="w-container"><div className="w-divider" /></div>}
        </div>
      ))}

      <div className="w-container"><div className="w-divider" /></div>

      {/* Formats */}
      <div id="formats" className="w-section w-container">
        <p className="w-eyebrow" style={{ marginBottom: 8 }}>Who we work with</p>
        <h2 className="w-display" style={{ fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 32, maxWidth: 480 }}>
          Built for any format. <em>Tailored to yours.</em>
        </h2>
        <div className="w-grid-2">
          {FORMATS.map(f => (
            <div key={f.label} className="w-card w-card-beige">
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--oak)', marginBottom: 8 }}>{f.label}</p>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.75 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* CTA */}
      <div className="w-section w-container" style={{ paddingBottom: 64 }}>
        <div className="w-card w-card-oak" style={{ textAlign: 'center', padding: '36px 32px' }}>
          <p className="w-eyebrow" style={{ marginBottom: 12 }}>Let&apos;s build something</p>
          <h2 className="w-display" style={{ fontSize: 22, marginBottom: 14 }}>
            Every workshop is <em>custom.</em>
          </h2>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', maxWidth: 440, margin: '0 auto 22px', lineHeight: 1.75 }}>
            Tell us your audience, your goals, and your format — we&apos;ll build the session around what your
            people actually need. Reach out to start the conversation.
          </p>
          <Link href="/contact" className="w-btn w-btn-oak">Get in touch →</Link>
        </div>
      </div>
    </>
  )
}
