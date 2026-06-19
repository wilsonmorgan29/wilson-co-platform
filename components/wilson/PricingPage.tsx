'use client'

import Link from 'next/link'

export default function PricingPage() {
  return (
    <>
      <div className="w-hero">
        <p className="w-eyebrow" style={{ marginBottom: 0 }}>Transparent pricing</p>
        <h1 className="w-display" style={{ fontSize: 36, marginTop: 14, marginBottom: 10 }}>Simple, <em>honest</em> pricing.</h1>
        <p className="w-hero-sub">
          Career coaching and consulting start at $300. Recruiting pricing is discussed based on your needs.
          No surprises — what you see is what you pay.
        </p>
      </div>

      <div className="w-container">

        {/* Career Coaching */}
        <p className="w-eyebrow" style={{ marginBottom: 6 }}>Career coaching</p>
        <p style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 16, lineHeight: 1.6 }}>
          1:1 coaching for senior professionals navigating transitions. Sessions are 60 minutes.
          The more sessions you commit to, the lower the per-session rate.
        </p>
        <div className="w-grid-3" style={{ marginBottom: 12 }}>
          <div className="w-tier-card">
            <span className="w-badge w-badge-beige" style={{ marginBottom: 10, display: 'inline-block' }}>Single session</span>
            <div className="w-tier-price">$300</div>
            <div className="w-tier-per">per session</div>
            {['60-min 1:1 with Morgan', 'Career clarity + strategy', 'No commitment required', 'Book anytime'].map(line => (
              <div key={line} className="w-tier-line"><div className="w-tier-dot" /><div>{line}</div></div>
            ))}
            <div className="w-btn-row">
              <Link href="/contact" className="w-btn w-btn-outline">Book a session →</Link>
            </div>
          </div>

          <div className="w-tier-card" style={{ border: '2px solid var(--oak)' }}>
            <span className="w-badge w-badge-oak" style={{ marginBottom: 10, display: 'inline-block' }}>Multi-session package</span>
            <div className="w-tier-price" style={{ fontSize: 22, paddingTop: 4 }}>Starting at</div>
            <div className="w-tier-per">below $300 / session</div>
            {['3, 6, or custom session count', 'Discounted per-session rate', 'Flexible scheduling', 'Ideal for a defined transition'].map(line => (
              <div key={line} className="w-tier-line"><div className="w-tier-dot" /><div>{line}</div></div>
            ))}
            <div className="w-btn-row">
              <Link href="/contact" className="w-btn w-btn-oak">Discuss a package →</Link>
            </div>
          </div>

          <div className="w-tier-card enterprise">
            <span className="w-badge w-badge-gold" style={{ marginBottom: 10, display: 'inline-block' }}>12-month engagement</span>
            <div className="w-tier-price gold" style={{ fontSize: 22, paddingTop: 4 }}>Best rate</div>
            <div className="w-tier-per light">1 session / month · 12 months</div>
            {['Monthly 60-min session with Morgan', 'Ongoing accountability + strategy', 'Best per-session rate offered', 'Full-year career partnership'].map(line => (
              <div key={line} className="w-tier-line light"><div className="w-tier-dot gold" /><div>{line}</div></div>
            ))}
            <div className="w-btn-row">
              <Link href="/contact" className="w-btn w-btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}>Let&apos;s talk →</Link>
            </div>
          </div>
        </div>

        <div className="w-divider" style={{ margin: '24px 0' }} />

        {/* Corporate Consulting */}
        <p className="w-eyebrow" style={{ marginBottom: 6 }}>Corporate consulting</p>
        <p style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 16, lineHeight: 1.6 }}>
          Hiring process audits, candidate experience strategy, and retention consulting.
          Available hourly or as a monthly retainer (3-month minimum).
        </p>
        <div className="w-grid-2" style={{ marginBottom: 12 }}>
          <div className="w-tier-card">
            <span className="w-badge w-badge-hyd" style={{ marginBottom: 10, display: 'inline-block' }}>Hourly</span>
            <div className="w-tier-price">$300</div>
            <div className="w-tier-per">per hour</div>
            {['No minimum commitment', 'Project-based or ad hoc', 'Hiring audits, process design, advising', 'Invoice per session'].map(line => (
              <div key={line} className="w-tier-line"><div className="w-tier-dot" /><div>{line}</div></div>
            ))}
            <div className="w-btn-row">
              <Link href="/contact" className="w-btn w-btn-outline">Get started →</Link>
            </div>
          </div>

          <div className="w-tier-card" style={{ border: '2px solid var(--oak)' }}>
            <span className="w-badge w-badge-oak" style={{ marginBottom: 10, display: 'inline-block' }}>Monthly retainer</span>
            <div className="w-tier-price" style={{ fontSize: 22, paddingTop: 4 }}>By scope</div>
            <div className="w-tier-per">3-month minimum</div>
            {['Ongoing access and advisory', 'Scoped to your team\'s needs', 'Monthly engagement, flexible scope', 'Best for sustained hiring work'].map(line => (
              <div key={line} className="w-tier-line"><div className="w-tier-dot" /><div>{line}</div></div>
            ))}
            <div className="w-credit-box">
              <div className="w-credit-label">How it works</div>
              <div className="w-credit-val">We scope the engagement together before committing to a monthly rate.</div>
            </div>
            <div className="w-btn-row">
              <Link href="/contact" className="w-btn w-btn-oak">Discuss scope →</Link>
            </div>
          </div>
        </div>

        <div className="w-divider" style={{ margin: '24px 0' }} />

        {/* Recruiting */}
        <p className="w-eyebrow" style={{ marginBottom: 6 }}>Recruiting</p>
        <p style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 16, lineHeight: 1.6 }}>
          Proactive, relationship-driven recruiting for companies serious about who they hire.
          Pricing is discussed based on your needs — whether you're filling a single role or looking for an ongoing partner.
        </p>
        <div className="w-grid-2" style={{ marginBottom: 32 }}>
          <div className="w-tier-card">
            <span className="w-badge w-badge-denim" style={{ marginBottom: 10, display: 'inline-block' }}>Single placement</span>
            <div className="w-tier-price" style={{ fontSize: 22, paddingTop: 4 }}>Pricing discussed</div>
            <div className="w-tier-per">per role</div>
            {['Proactive candidate sourcing', 'Relationship-driven search', 'Human-reviewed candidates only', 'Offer + negotiation support'].map(line => (
              <div key={line} className="w-tier-line"><div className="w-tier-dot" /><div>{line}</div></div>
            ))}
            <div className="w-btn-row">
              <Link href="/contact" className="w-btn w-btn-outline">Get in touch →</Link>
            </div>
          </div>

          <div className="w-tier-card" style={{ border: '2px solid var(--oak)' }}>
            <span className="w-badge w-badge-oak" style={{ marginBottom: 10, display: 'inline-block' }}>Retainer</span>
            <div className="w-tier-price" style={{ fontSize: 22, paddingTop: 4 }}>Pricing discussed</div>
            <div className="w-tier-per">ongoing partnership</div>
            {['Dedicated search support', 'Multiple roles over time', 'Priority candidate access', 'Ongoing strategy + accountability'].map(line => (
              <div key={line} className="w-tier-line"><div className="w-tier-dot" /><div>{line}</div></div>
            ))}
            <div className="w-btn-row">
              <Link href="/contact" className="w-btn w-btn-oak">Let&apos;s talk →</Link>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
