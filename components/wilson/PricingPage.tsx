'use client'

import Link from 'next/link'

export default function PricingPage() {
  return (
    <>
      <div className="w-hero">
        <p className="w-eyebrow" style={{ marginBottom: 0 }}>Transparent pricing</p>
        <h1 className="w-display" style={{ fontSize: 36, marginTop: 14, marginBottom: 10 }}>Simple, <em>honest</em> pricing.</h1>
        <p className="w-hero-sub">
          Members pay a one-time intake fee. Companies pay for network access by role volume. Placement fee on every hire — with your access fee credited back at close.
        </p>
      </div>

      <div className="w-container">

        {/* Member pricing */}
        <p className="w-eyebrow" style={{ marginBottom: 16 }}>For members</p>
        <div className="w-grid-2" style={{ marginBottom: 32 }}>
          <div className="w-card" style={{ border: '2px solid var(--oak)' }}>
            <span className="w-badge w-badge-denim" style={{ marginBottom: 10, display: 'inline-block' }}>Founding member</span>
            <div className="w-tier-price">$247</div>
            <div className="w-tier-per">one-time intake fee</div>
            {['60-min clarity call with Morgan', 'Full goals profile + visibility controls', 'Human-reviewed matches only', 'Permanent membership — no renewal'].map(line => (
              <div key={line} className="w-tier-line"><div className="w-tier-dot" /><div>{line}</div></div>
            ))}
            <div className="w-btn-row">
              <Link href="/member" className="w-btn w-btn-oak">Apply now →</Link>
            </div>
          </div>
          <div className="w-tier-card">
            <span className="w-badge w-badge-oak" style={{ marginBottom: 10, display: 'inline-block' }}>Active search</span>
            <div className="w-tier-price">$497</div>
            <div className="w-tier-per">one-time upgrade</div>
            {['Everything in founding member', 'Resume + LinkedIn audit', '2 additional coaching sessions', 'Offer negotiation support'].map(line => (
              <div key={line} className="w-tier-line"><div className="w-tier-dot" /><div>{line}</div></div>
            ))}
            <div className="w-btn-row">
              <Link href="/member" className="w-btn w-btn-outline">Learn more</Link>
            </div>
          </div>
        </div>

        <div className="w-divider" />

        {/* Company pricing */}
        <p className="w-eyebrow" style={{ marginBottom: 16, marginTop: 24 }}>For companies</p>
        <div className="w-grid-2" style={{ marginBottom: 12 }}>
          <div className="w-tier-card">
            <span className="w-badge w-badge-oak" style={{ marginBottom: 10, display: 'inline-block' }}>Essentials</span>
            <div style={{ fontSize: 10, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 8 }}>5 roles · 12 months</div>
            <div className="w-tier-price">$5,000</div>
            <div className="w-tier-per">$1,000 per role</div>
            {['5 role postings over 12 months', 'Up to 8 intro requests per role', 'Full company audit included', 'Goals-matched surfacing only'].map(line => (
              <div key={line} className="w-tier-line"><div className="w-tier-dot" /><div>{line}</div></div>
            ))}
            <div className="w-credit-box"><div className="w-credit-label">Placement credit</div><div className="w-credit-val">$500/role credited toward placement</div></div>
          </div>

          <div className="w-tier-card featured">
            <span className="w-badge w-badge-denim" style={{ marginBottom: 10, display: 'inline-block' }}>Most popular</span>
            <div style={{ fontSize: 10, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 8 }}>10 roles · 12 months</div>
            <div className="w-tier-price">$8,500</div>
            <div className="w-tier-per">$850 per role</div>
            {['10 role postings over 12 months', 'Up to 12 intro requests per role', 'Audit + annual re-audit included', 'Priority member surfacing', 'Quarterly strategy call with Morgan'].map(line => (
              <div key={line} className="w-tier-line"><div className="w-tier-dot" /><div>{line}</div></div>
            ))}
            <div className="w-credit-box"><div className="w-credit-label">Placement credit</div><div className="w-credit-val">$850/role credited toward placement</div></div>
          </div>
        </div>

        <div className="w-grid-2" style={{ marginBottom: 16 }}>
          <div className="w-tier-card">
            <span className="w-badge w-badge-beige" style={{ marginBottom: 10, display: 'inline-block' }}>Collective</span>
            <div style={{ fontSize: 10, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 8 }}>20 roles · 12 months</div>
            <div className="w-tier-price">$14,000</div>
            <div className="w-tier-per">$700 per role</div>
            {['20 role postings over 12 months', 'Unlimited intro requests per role', 'Audit + re-audit + team access', 'Monthly strategy call with Morgan', 'First access to new members'].map(line => (
              <div key={line} className="w-tier-line"><div className="w-tier-dot" /><div>{line}</div></div>
            ))}
            <div className="w-credit-box"><div className="w-credit-label">Placement credit</div><div className="w-credit-val">$1,000/role credited toward placement</div></div>
          </div>

          <div className="w-tier-card enterprise">
            <span className="w-badge w-badge-gold" style={{ marginBottom: 10, display: 'inline-block' }}>Enterprise</span>
            <div style={{ fontSize: 10, fontWeight: 300, color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>Custom · 12 months</div>
            <div className="w-tier-price gold">Custom</div>
            <div className="w-tier-per light">Priced per engagement</div>
            {['Unlimited roles, no annual cap', 'Dedicated relationship manager', 'White-glove intake per role', 'Custom reporting + retention tracking', 'Reduced placement fee (negotiated)'].map(line => (
              <div key={line} className="w-tier-line light"><div className="w-tier-dot gold" /><div>{line}</div></div>
            ))}
            <div className="w-credit-box dark"><div className="w-credit-label gold">Placement fee</div><div className="w-credit-val light">Typically 12% — negotiated</div></div>
          </div>
        </div>

        <div className="w-card w-card-beige" style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--w-black)', marginBottom: 6 }}>Placement fee — 15% of first-year base salary, consistent across all tiers</div>
          <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.7 }}>
            Access fee credit applied at close · 90-day replacement guarantee · No hidden fees · Market rate is 20–25% — you save $10K–$120K+ per year depending on hire volume.
          </div>
          <div className="w-btn-row">
            <Link href="/company" className="w-btn w-btn-oak">Start your audit →</Link>
          </div>
        </div>

      </div>
    </>
  )
}
