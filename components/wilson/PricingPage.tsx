'use client'

import Link from 'next/link'

export default function PricingPage() {
  return (
    <>
      <div className="w-hero">
        <p className="w-eyebrow" style={{ marginBottom: 0 }}>Transparent pricing</p>
        <h1 className="w-display" style={{ fontSize: 36, marginTop: 14, marginBottom: 10 }}>Simple, <em>honest</em> pricing.</h1>
        <p className="w-hero-sub">
          Recruiting fees are scoped per engagement based on role level, timeline, and complexity.
          No surprises — what you see is what you pay.
        </p>
      </div>

      <div className="w-container">

        {/* Fee differentiators */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
          <div style={{ background: 'var(--oak)', borderRadius: 'var(--w-radius)', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 18, color: '#fff' }}>✓</span>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: '0.02em' }}>20% fee</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.75)', fontWeight: 300 }}>vs. 25–30% market average</div>
            </div>
          </div>
          <div style={{ background: 'var(--w-bg-alt)', border: '1px solid var(--w-border)', borderRadius: 'var(--w-radius)', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 18, color: 'var(--oak)' }}>✓</span>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-1)', letterSpacing: '0.02em' }}>90-day guarantee</div>
              <div style={{ fontSize: 10, color: 'var(--ink-3)', fontWeight: 300 }}>replacement search at no additional fee</div>
            </div>
          </div>
        </div>

        <div className="w-divider" style={{ margin: '8px 0 24px' }} />

        {/* Recruiting */}
        <p className="w-eyebrow" style={{ marginBottom: 6 }}>Recruiting</p>
        <p style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 16, lineHeight: 1.6 }}>
          Retained and contingency search for People, Talent Acquisition, HR, and Operations roles —
          HRBP through CHRO, any industry. Fee is structured as a percentage of first-year compensation,
          scoped per engagement.
        </p>
        <div className="w-grid-2" style={{ marginBottom: 32 }}>
          <div className="w-tier-card">
            <span className="w-badge w-badge-gold" style={{ marginBottom: 10, display: 'inline-block' }}>Single placement</span>
            <div className="w-tier-price" style={{ fontSize: 22, paddingTop: 4 }}>By scope</div>
            <div className="w-tier-per">contingency or retained</div>
            {[
              'People, TA, HR & Operations roles',
              'HRBP through CHRO · any industry',
              'Full search management — sourcing through close',
              'Fee structured as % of first-year comp',
              '90-day replacement guarantee',
            ].map(line => (
              <div key={line} className="w-tier-line"><div className="w-tier-dot" /><div>{line}</div></div>
            ))}
            <div className="w-btn-row">
              <Link href="/contact?subject=Recruiting" className="w-btn w-btn-outline">Get in touch →</Link>
            </div>
          </div>

          <div className="w-tier-card" style={{ border: '2px solid var(--oak)' }}>
            <span className="w-badge w-badge-oak" style={{ marginBottom: 10, display: 'inline-block' }}>Retainer search</span>
            <div className="w-tier-price" style={{ fontSize: 22, paddingTop: 4 }}>By scope</div>
            <div className="w-tier-per">ongoing search partnership</div>
            {[
              'Ongoing partnership beyond a single placement',
              'Strategy, structure, and talent advisory',
              'Priority pipeline and sourcing',
              'Best for companies looking to grow and build',
              '90-day replacement guarantee on each placement',
            ].map(line => (
              <div key={line} className="w-tier-line"><div className="w-tier-dot" /><div>{line}</div></div>
            ))}
            <div className="w-btn-row">
              <Link href="/contact?subject=Recruiting" className="w-btn w-btn-oak">Discuss scope →</Link>
            </div>
          </div>
        </div>

        <div className="w-divider" style={{ margin: '0 0 24px' }} />

        {/* FAQ-style notes */}
        <p className="w-eyebrow" style={{ marginBottom: 16 }}>How fees work</p>
        <div className="w-grid-2" style={{ marginBottom: 40 }}>
          {[
            { q: 'What does "by scope" mean?', a: 'Every search is different. Fee percentage and structure (retained vs. contingency) are agreed upon before the search begins — no surprises mid-process.' },
            { q: 'What triggers the 90-day guarantee?', a: 'If a placed candidate leaves or is let go within 90 days of their start date for any reason other than layoff, we conduct a replacement search at no additional fee.' },
            { q: 'Retained vs. contingency — which is right?', a: 'Retained searches involve an upfront fee and are best for senior, urgent, or confidential roles. Contingency is fee-on-placement and works well for roles where the timeline is more flexible. We\'ll help you figure out which structure makes sense for your situation.' },
            { q: 'Is there a fee for candidates?', a: 'No. If you\'re a People Leader looking for your next role, there\'s no cost to work with us. Our fee is paid by the hiring company.' },
          ].map(item => (
            <div key={item.q} className="w-card w-card-beige" style={{ padding: '20px 22px' }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-1)', marginBottom: 8, lineHeight: 1.4 }}>{item.q}</div>
              <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.75 }}>{item.a}</div>
            </div>
          ))}
        </div>

        <div className="w-divider" style={{ margin: '0 0 28px' }} />

        {/* ---- Additional services (secondary) ---- */}
        <p className="w-eyebrow" style={{ marginBottom: 6 }}>Additional services</p>
        <p style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 20, lineHeight: 1.6, maxWidth: 640 }}>
          Alongside recruiting, we take on a select number of coaching, consulting, and workshop engagements.
          Pricing is scoped to the engagement — reach out and we&apos;ll discuss what makes sense.{' '}
          <Link href="/additional-services" style={{ color: 'var(--oak)', textDecoration: 'none', fontWeight: 500 }}>
            Learn more about these →
          </Link>
        </p>

        <div className="w-grid-3" style={{ marginBottom: 40 }}>
          <div className="w-tier-card">
            <span className="w-badge w-badge-oak" style={{ marginBottom: 10, display: 'inline-block' }}>Career coaching</span>
            <div className="w-tier-price" style={{ fontSize: 22, paddingTop: 4 }}>Let&apos;s talk</div>
            <div className="w-tier-per">scoped to your goals</div>
            {[
              '1:1 60-minute sessions with Morgan',
              'Single sessions or multi-session packages',
              'Lower per-session rate on packages',
              'Video or in person (NYC)',
            ].map(line => (
              <div key={line} className="w-tier-line"><div className="w-tier-dot" /><div>{line}</div></div>
            ))}
            <div className="w-btn-row">
              <Link href="/contact?subject=Career+coaching" className="w-btn w-btn-outline">Book a session →</Link>
            </div>
          </div>

          <div className="w-tier-card">
            <span className="w-badge w-badge-hyd" style={{ marginBottom: 10, display: 'inline-block' }}>Talent consulting</span>
            <div className="w-tier-price" style={{ fontSize: 22, paddingTop: 4 }}>Let&apos;s talk</div>
            <div className="w-tier-per">hourly or monthly retainer</div>
            {[
              'Hiring process audit and redesign',
              'Candidate experience strategy',
              'Retention and culture assessment',
              'Project-based or ongoing engagement',
            ].map(line => (
              <div key={line} className="w-tier-line"><div className="w-tier-dot" /><div>{line}</div></div>
            ))}
            <div className="w-btn-row">
              <Link href="/contact?subject=Talent+consulting" className="w-btn w-btn-outline">Discuss scope →</Link>
            </div>
          </div>

          <div className="w-tier-card">
            <span className="w-badge w-badge-denim" style={{ marginBottom: 10, display: 'inline-block' }}>Workshops</span>
            <div className="w-tier-price" style={{ fontSize: 22, paddingTop: 4 }}>Let&apos;s talk</div>
            <div className="w-tier-per">tailored to event + scope</div>
            {[
              'Interview skills, networking, presence',
              'Half-day, full-day, or keynote',
              'Conferences, teams, ERGs, universities',
              'NYC-based · available nationwide',
            ].map(line => (
              <div key={line} className="w-tier-line"><div className="w-tier-dot" /><div>{line}</div></div>
            ))}
            <div className="w-btn-row">
              <Link href="/contact?subject=Workshop+inquiry" className="w-btn w-btn-outline">Get a quote →</Link>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
