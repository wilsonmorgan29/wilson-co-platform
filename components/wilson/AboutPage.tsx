import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="w-hero" style={{ paddingBottom: 56 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-start', gap: 0 }}>
          <div>
            <p className="w-eyebrow" style={{ marginBottom: 16 }}>About The Wilson Co.</p>
            <h1 className="w-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 20, maxWidth: 620 }}>
              Built by someone who&apos;s been <em>in the room.</em>
            </h1>
            <p className="w-hero-sub">
              Over ten years working in recruiting and talent development at some of the most elite global firms.
              That experience — seeing what works, what doesn&apos;t, and what people actually need to grow —
              is the foundation everything at The Wilson Co. is built on.
            </p>
          </div>
          <div style={{ flexShrink: 0, marginRight: -24, marginTop: -40 }}>
            <Image
              src="/morgan-cutout.png"
              alt="Morgan Wilson"
              width={420}
              height={570}
              style={{ objectFit: 'contain', objectPosition: 'top', display: 'block' }}
              priority
            />
          </div>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* The backstory */}
      <div className="w-section w-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 40, alignItems: 'start' }}>
          <div>
            <p className="w-eyebrow" style={{ marginBottom: 14 }}>The backstory</p>
            <h2 className="w-display" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
              What a decade in the room <em>teaches you.</em>
            </h2>
          </div>
          <div className="w-stack" style={{ gap: 16 }}>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              Spending ten years inside some of the world&apos;s most demanding professional environments teaches
              you things no textbook covers. You learn how decisions actually get made, what separates the people
              who advance from those who plateau, and how much of a career comes down to clarity, relationships,
              and knowing how to show up when it counts.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              It also teaches you what&apos;s broken. Professionals who are genuinely talented but stuck —
              not because they lack ability, but because no one has ever helped them think strategically about
              where they&apos;re going. Organizations that invest in hiring but almost nothing in developing the
              people they already have. A gap between potential and direction that most coaching, consulting,
              and training programs never actually close.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              The Wilson Co. exists to close that gap. <em style={{ color: 'var(--oak)' }}>For individuals and organizations alike.</em>
            </p>
          </div>
        </div>
      </div>

      {/* Pull quote */}
      <div className="w-container">
        <div style={{ background: 'var(--oak)', borderRadius: 'var(--w-radius)', padding: '32px 36px', margin: '8px 0' }}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(17px, 2.5vw, 22px)', fontStyle: 'italic', color: 'var(--w-white)', lineHeight: 1.6, maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
            &ldquo;The people who grow fastest aren&apos;t always the most talented ones —
            they&apos;re the ones who got honest about where they were and intentional about where they were going.&rdquo;
          </div>
        </div>
      </div>

      {/* The approach */}
      <div className="w-section w-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 40, alignItems: 'start' }}>
          <div>
            <p className="w-eyebrow" style={{ marginBottom: 14 }}>The approach</p>
            <h2 className="w-display" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
              Personal, practical, <em>real.</em>
            </h2>
          </div>
          <div className="w-stack" style={{ gap: 16 }}>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              The Wilson Co. is based in New York City and works with clients and organizations across the country.
              Every engagement — whether it&apos;s 1:1 career coaching, corporate consulting, or a group workshop —
              starts with a real conversation. No intake forms. No canned frameworks. Just an honest look at
              where you are and what would actually move things forward.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              For individuals, that means getting specific: not just &ldquo;what do you want to do next&rdquo; but
              why, and what&apos;s actually in the way, and what a real plan looks like. For organizations, it means
              looking honestly at culture, process, and the development gaps that cost them more than they realize.
              And for groups — at conferences, companies, and summits — it means delivering workshops that give
              people something they can actually use the next day.
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
            { word: 'Clarity',    body: 'Most people don\'t know exactly what they want next — they just know what they\'ve outgrown. Getting clear is the first step toward anything real.' },
            { word: 'Confidence', body: 'Confidence isn\'t about feeling ready — it\'s about knowing you\'ve done the work. We help you walk into rooms prepared, not just hopeful.' },
            { word: 'Purpose',    body: 'A career is too important to optimize for the next title alone. We look for the full picture: growth, culture, leadership, and what actually matters to you.' },
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
            Let&apos;s have a real conversation.
          </h2>
          <div className="w-hero-actions" style={{ justifyContent: 'center' }}>
            <Link href="/contact"  className="w-btn w-btn-oak">Get in touch →</Link>
            <Link href="/services" className="w-btn w-btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}>Our services</Link>
          </div>
        </div>
      </div>
    </>
  )
}
