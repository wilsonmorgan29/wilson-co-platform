import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="w-hero" style={{ paddingBottom: 56 }}>
        <p className="w-eyebrow" style={{ marginBottom: 16 }}>About The Wilson Co.</p>
        <h1 className="w-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 20, maxWidth: 620 }}>
          Built by someone who&apos;s been <em>in the room.</em>
        </h1>
        <p className="w-hero-sub">
          Over ten years in the recruiting industry. Hundreds of placements. Both sides of the table, hundreds of times.
          The Wilson Co. was built from everything that experience taught — including what was consistently, frustratingly broken.
        </p>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* The problem */}
      <div className="w-section w-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 40, alignItems: 'start' }}>
          <div>
            <p className="w-eyebrow" style={{ marginBottom: 14 }}>The problem</p>
            <h2 className="w-display" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
              The industry got <em>worse.</em>
            </h2>
          </div>
          <div className="w-stack" style={{ gap: 16 }}>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              A job gets posted on LinkedIn. Within 48 hours, there are four hundred applications.
              An algorithm screens them. A recruiter glances at what&apos;s left. A hiring manager
              gets a shortlist of people who looked good on paper. Half the time, the actual best
              candidate never applied — because they weren&apos;t looking, or they didn&apos;t see it, or
              they&apos;ve learned that applying to job boards is rarely worth their time.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              AI has made this worse, not better. Now robots are screening people before a human reads
              their name. Candidates spend hours tailoring applications to systems that reject them
              in seconds. Companies pay for tools that optimize for efficiency at the expense of
              accuracy. And somewhere in the middle, real relationships — the kind that actually
              produce great hires — get cut out entirely.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              Both sides came to me saying the same thing: <em style={{ color: 'var(--oak)' }}>there has to be a better way.</em>
            </p>
          </div>
        </div>
      </div>

      {/* Pull quote */}
      <div className="w-container">
        <div style={{ background: 'var(--oak)', borderRadius: 'var(--w-radius)', padding: '32px 36px', margin: '8px 0' }}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(17px, 2.5vw, 22px)', fontStyle: 'italic', color: 'var(--w-white)', lineHeight: 1.6, maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
            &ldquo;Success follows when the right people are in the right roles.
            Everything we do is built around getting that match right — not just fast.&rdquo;
          </div>
        </div>
      </div>

      {/* The response */}
      <div className="w-section w-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 40, alignItems: 'start' }}>
          <div>
            <p className="w-eyebrow" style={{ marginBottom: 14 }}>The response</p>
            <h2 className="w-display" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
              Personal, practical, <em>real.</em>
            </h2>
          </div>
          <div className="w-stack" style={{ gap: 16 }}>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              The Wilson Co. is based in New York City and works with clients across the country.
              Our approach is personal, practical, and rooted in real-world experience. We don&apos;t
              believe in one-size-fits-all recruiting or cookie-cutter career advice. Every engagement
              starts with a real conversation about what you actually need.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              For individuals, that means coaching that helps you get honest about what you want next
              and builds a real plan to get there — not just polish your LinkedIn profile. For companies,
              it means recruiting that actually works: proactive, relationship-driven, and accountable.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              The Talent Collective is what happens when those two sides come together in a structure
              that respects both of them — where members control their visibility and companies earn
              access through a real commitment to how they treat candidates.
            </p>
          </div>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Values */}
      <div className="w-section w-container">
        <p className="w-eyebrow" style={{ marginBottom: 20 }}>What we believe</p>
        <div className="w-grid-3" style={{ gap: 10 }}>
          {[
            { word: 'Clarity',    body: 'Most people don\'t know exactly what they want next — they just know what they\'ve outgrown. Clarity is where everything starts.' },
            { word: 'Confidence', body: 'The right opportunity should feel like a step forward, not a gamble. We do the work to make sure both sides go in informed and prepared.' },
            { word: 'Purpose',    body: 'A career is too important to optimize for salary alone. We look for the full picture: culture, scope, leadership, trajectory.' },
          ].map(v => (
            <div key={v.word} className="w-card w-card-beige">
              <div className="w-display" style={{ fontSize: 22, color: 'var(--oak)', marginBottom: 8 }}>{v.word}</div>
              <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.75 }}>{v.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="w-section w-container" style={{ paddingBottom: 64 }}>
        <div className="w-card" style={{ background: 'var(--w-black)', border: 'none', textAlign: 'center', padding: '32px' }}>
          <p className="w-eyebrow" style={{ marginBottom: 12, color: 'var(--oak-light)' }}>Ready to start?</p>
          <h2 style={{ fontFamily: 'var(--font-display), "Gill Sans MT", sans-serif', fontSize: 22, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--w-white)', marginBottom: 20 }}>
            Let&apos;s find the right fit — for you.
          </h2>
          <div className="w-hero-actions" style={{ justifyContent: 'center' }}>
            <Link href="/contact"    className="w-btn w-btn-oak">Get in touch →</Link>
            <Link href="/collective" className="w-btn w-btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}>Explore the Collective</Link>
          </div>
        </div>
      </div>
    </>
  )
}
