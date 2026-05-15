import Link from 'next/link'

const FEATURES = [
  {
    publication: 'AP News',
    headline: 'Bringing The Human Edge Back to Career Strategy',
    href: 'https://apnews.com/press-release/pr-newswire/morgan-wilson-launches-the-wilson-co-to-bring-a-human-edge-back-to-career-strategy-and-talent-development-af48352eaed8363a650eadbfec60974e',
    badge: 'w-badge-denim',
  },
  {
    publication: 'CEO Weekly',
    headline: 'The Professional Lie We Rarely Question',
    href: 'https://ceoweekly.com/morgan-wilsons-take-on-the-professional-lie-we-rarely-question/',
    badge: 'w-badge-oak',
  },
  {
    publication: 'US Insider',
    headline: 'Why High Performers Get Stuck',
    href: 'https://usinsider.com/why-high-performers-get-stuck-mid-career-and-what-most-career-advice-gets-wrong/',
    badge: 'w-badge-hyd',
  },
]

export default function PressPage() {
  return (
    <>
      {/* Hero */}
      <div className="w-hero" style={{ paddingBottom: 56 }}>
        <p className="w-eyebrow" style={{ marginBottom: 16 }}>Press & Media</p>
        <h1 className="w-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 20, maxWidth: 580 }}>
          The Wilson Co. <em>in the press.</em>
        </h1>
        <p className="w-hero-sub">
          Featured in national publications on career strategy, hiring, and what it actually takes
          to make the right match. For media inquiries, reach out directly.
        </p>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Features */}
      <div className="w-section w-container">
        <p className="w-eyebrow" style={{ marginBottom: 20 }}>Featured in</p>
        <div className="w-stack" style={{ gap: 12 }}>
          {FEATURES.map(f => (
            <a
              key={f.headline}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-card"
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, transition: 'border-color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.borderColor = 'var(--oak)')}
              onMouseOut={e  => (e.currentTarget.style.borderColor = 'var(--w-border)')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span className={`w-badge ${f.badge}`} style={{ flexShrink: 0 }}>{f.publication}</span>
                <span style={{ fontSize: 14, fontWeight: 400, color: 'var(--ink-1)' }}>&ldquo;{f.headline}&rdquo;</span>
              </div>
              <span style={{ fontSize: 10, color: 'var(--oak)', letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0 }}>Read →</span>
            </a>
          ))}
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Substack */}
      <div className="w-section w-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 40, alignItems: 'start' }}>
          <div>
            <p className="w-eyebrow" style={{ marginBottom: 14 }}>Thought leadership</p>
            <h2 className="w-display" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
              Read the <em>newsletter.</em>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: 20 }}>
              Honest takes on hiring, careers, and what actually matters when you&apos;re figuring out what comes next.
              Published on Substack — no fluff, no recycled LinkedIn advice.
            </p>
            <a
              href="https://substack.com/@thewilsonco"
              target="_blank"
              rel="noopener noreferrer"
              className="w-btn w-btn-oak"
            >
              Read on Substack →
            </a>
          </div>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Media contact */}
      <div className="w-section w-container" style={{ paddingBottom: 64 }}>
        <div className="w-card w-card-beige" style={{ textAlign: 'center', padding: '36px 32px' }}>
          <p className="w-eyebrow" style={{ marginBottom: 12 }}>Media inquiries</p>
          <h2 className="w-display" style={{ fontSize: 22, marginBottom: 14 }}>
            Want to <em>feature us?</em>
          </h2>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', maxWidth: 420, margin: '0 auto 22px', lineHeight: 1.75 }}>
            Available for interviews, expert commentary, and contributed articles on hiring, career strategy,
            and the future of work. Reach out and we&apos;ll get back to you within one business day.
          </p>
          <Link href="/contact" className="w-btn w-btn-oak">Get in touch →</Link>
        </div>
      </div>
    </>
  )
}
