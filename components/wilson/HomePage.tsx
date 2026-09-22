'use client'

import Link from 'next/link'
import Image from 'next/image'

const OFFERINGS = [
  {
    label: 'For Companies',
    badge: 'w-badge-gold',
    body: 'Retained and contingency search for law firms and companies hiring for legal roles: talent, HR, and operations leaders, plus associate and in-house attorney placements. 90-day replacement guarantee.',
    href: '/for-companies',
  },
  {
    label: 'For Candidates',
    badge: 'w-badge-oak',
    body: 'Legal talent, HR, and operations professionals, and attorneys, looking for their next role. A 1:1 search process built around where you actually want to go — with someone who knows legal from the inside.',
    href: '/for-candidates',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="w-hero" style={{ paddingBottom: 72 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}>
          <div>
            <h1 className="w-display" style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', marginBottom: 20, maxWidth: 560 }}>
              For the people who hire legal talent — and the legal talent ready for <em>what&apos;s next.</em>
            </h1>
            <p className="w-hero-sub">
              The Wilson Co. is focused on placing legal professionals and attorneys at growing
              organizations that are intentional about their hiring. Founded by a former Big Law
              recruiter. Based in NYC but serving clients nationwide.
            </p>
            <div className="w-hero-actions">
              <Link href="/for-companies" className="w-btn w-btn-oak">For companies →</Link>
              <Link href="/for-candidates" className="w-btn w-btn-outline">For candidates</Link>
            </div>
          </div>
          <div style={{ flexShrink: 0 }}>
            <div style={{ width: 320, height: 400, borderRadius: 'var(--w-radius)', overflow: 'hidden', position: 'relative' }}>
              <Image
                src="/morgan-home.jpg"
                alt="Morgan Wilson"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* As seen in */}
      <div className="w-container" style={{ padding: '24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-3)', marginRight: 8 }}>As seen in</span>
          {[
            { label: 'AP News', href: 'https://apnews.com/press-release/pr-newswire/morgan-wilson-launches-the-wilson-co-to-bring-a-human-edge-back-to-career-strategy-and-talent-development-af48352eaed8363a650eadbfec60974e' },
            { label: 'CEO Weekly', href: 'https://ceoweekly.com/morgan-wilsons-take-on-the-professional-lie-we-rarely-question/' },
            { label: 'US Insider', href: 'https://usinsider.com/why-high-performers-get-stuck-mid-career-and-what-most-career-advice-gets-wrong/' },
          ].map(pub => (
            <a key={pub.label} href={pub.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, fontWeight: 500, color: 'var(--ink-2)', letterSpacing: '0.04em', opacity: 0.6, textDecoration: 'none' }}
              onMouseOver={e => (e.currentTarget.style.opacity = '1')}
              onMouseOut={e => (e.currentTarget.style.opacity = '0.6')}
            >{pub.label} ↗</a>
          ))}
          <a href="https://thewilsonco.substack.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, fontWeight: 500, color: 'var(--oak)', letterSpacing: '0.04em', textDecoration: 'none', opacity: 0.8 }}>Substack ↗</a>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Services */}
      <div className="w-section w-container">
        <p className="w-eyebrow" style={{ marginBottom: 20 }}>How we work</p>
        <div className="w-grid-2">
          {OFFERINGS.map(s => (
            <Link key={s.label} href={s.href} className="w-card" style={{ textDecoration: 'none', display: 'block', transition: 'border-color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.borderColor = 'var(--oak)')}
              onMouseOut={e  => (e.currentTarget.style.borderColor = 'var(--w-border)')}>
              <span className={`w-badge ${s.badge}`} style={{ marginBottom: 12, display: 'inline-block' }}>{s.label}</span>
              <div style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: 14 }}>{s.body}</div>
              <div style={{ fontSize: 10, fontWeight: 500, color: 'var(--oak)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Learn more →</div>
            </Link>
          ))}
        </div>
        <p style={{ fontSize: 12.5, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.7, marginTop: 18 }}>
          We also take on a select number of career coaching, talent consulting, and workshop engagements.{' '}
          <Link href="/additional-services" style={{ color: 'var(--oak)', textDecoration: 'none', fontWeight: 500 }}>
            See additional services →
          </Link>
        </p>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Our Why */}
      <div className="w-section w-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 40, alignItems: 'start' }}>
          <div>
            <p className="w-eyebrow" style={{ marginBottom: 16 }}>Our why</p>
            <h2 className="w-display" style={{ fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 0 }}>
              Two things I saw <em>inside those firms.</em>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: 16 }}>
              The first: law firms run on their lawyers — they are the product. And yet the teams responsible for
              recruiting, developing, and keeping those lawyers are consistently the most overlooked ones. Filled
              last. Resourced least. The right hire in those seats shapes a firm&apos;s culture and retention more
              than almost any other decision it makes.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: 20 }}>
              The second, and the one I think about more: I had countless conversations with lawyers who didn&apos;t
              want to be in Big Law forever. Brilliant people at the highest level, quietly telling me they had no
              balance and no real sense of what else was out there. Most weren&apos;t unhappy with the law. They were
              unhappy with the shape of the job. The Wilson Co. exists for both of them.
            </p>
            <Link href="/about" className="w-btn w-btn-outline" style={{ fontSize: 11 }}>About Morgan →</Link>
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
            Whether you&apos;re a law firm or company making a legal hire, or a legal professional ready for your next move —
            reach out. We&apos;d love to hear where you are.
          </p>
          <div className="w-hero-actions" style={{ justifyContent: 'center' }}>
            <Link href="/contact" className="w-btn w-btn-oak">Get in touch →</Link>
            <Link href="/for-companies" className="w-btn w-btn-outline">For companies</Link>
          </div>
        </div>
      </div>
    </>
  )
}
