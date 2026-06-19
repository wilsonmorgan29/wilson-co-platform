'use client'

import Link from 'next/link'
import Image from 'next/image'

const FEATURES = [
  {
    publication: 'AP News',
    headline: 'Bringing The Human Edge Back to Career Strategy',
    href: 'https://apnews.com/press-release/pr-newswire/morgan-wilson-launches-the-wilson-co-to-bring-a-human-edge-back-to-career-strategy-and-talent-development-af48352eaed8363a650eadbfec60974e',
    img: '/press-ap.png',
  },
  {
    publication: 'CEO Weekly',
    headline: 'The Professional Lie We Rarely Question',
    href: 'https://ceoweekly.com/morgan-wilsons-take-on-the-professional-lie-we-rarely-question/',
    img: '/press-ceo.png',
  },
  {
    publication: 'US Insider',
    headline: 'Why High Performers Get Stuck',
    href: 'https://usinsider.com/why-high-performers-get-stuck-mid-career-and-what-most-career-advice-gets-wrong/',
    img: '/press-usinsider.png',
  },
]

const SUBSTACKS = [
  {
    title: 'How I Stopped Waiting for Inspiration and Started Chasing It',
    excerpt: 'There are weeks where I feel like I could take over the world.',
    href: 'https://thewilsonco.substack.com/p/how-i-stopped-waiting-for-inspiration',
    img: '/sub-inspiration.jpeg',
  },
  {
    title: 'When You Love the Work But Can\'t Stand the Person Running It',
    excerpt: 'I\'ve been there. Sitting in my car before a Monday morning 1:1 knowing I had to sit through an entire hour with just my boss.',
    href: 'https://thewilsonco.substack.com/p/when-you-love-the-work-but-cant-stand',
    img: '/sub-boss.jpeg',
  },
  {
    title: 'The Double Standard Of Being A Woman In A Man\'s (Corporate) World',
    excerpt: 'What it actually costs to navigate corporate environments that weren\'t built for you.',
    href: 'https://thewilsonco.substack.com/p/the-double-standard-of-being-a-woman',
    img: '/sub-doublestandard.jpeg',
  },
  {
    title: 'My Rockbottom Was My Turning Point',
    excerpt: 'Losing the career I built my life around forced me into the hardest but most necessary reset of my life.',
    href: 'https://thewilsonco.substack.com/p/my-rockbottom-was-my-turning-point',
    img: '/sub-rockbottom.jpeg',
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {FEATURES.map(f => (
            <a
              key={f.headline}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-card"
              style={{ textDecoration: 'none', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.borderColor = 'var(--oak)')}
              onMouseOut={e  => (e.currentTarget.style.borderColor = 'var(--w-border)')}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '9/16', maxHeight: 340, overflow: 'hidden', flexShrink: 0 }}>
                <Image src={f.img} alt={f.headline} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
              </div>
              <div style={{ padding: '14px 16px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 4 }}>{f.publication}</div>
                  <div style={{ fontSize: 12, fontWeight: 400, color: 'var(--ink-1)', lineHeight: 1.5 }}>&ldquo;{f.headline}&rdquo;</div>
                </div>
                <span style={{ fontSize: 10, color: 'var(--oak)', letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0 }}>Read →</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Substack */}
      <div className="w-section w-container">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <p className="w-eyebrow" style={{ marginBottom: 8 }}>From the newsletter</p>
            <h2 className="w-display" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', margin: 0 }}>
              Honest takes on <em>career & hiring.</em>
            </h2>
          </div>
          <a
            href="https://thewilsonco.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-btn w-btn-outline"
            style={{ fontSize: 10, flexShrink: 0 }}
          >
            View all on Substack →
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {SUBSTACKS.map(post => (
            <a
              key={post.href}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-card"
              style={{ textDecoration: 'none', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.borderColor = 'var(--oak)')}
              onMouseOut={e  => (e.currentTarget.style.borderColor = 'var(--w-border)')}
            >
              <div style={{ position: 'relative', width: '100%', height: 200, background: 'var(--w-bg-2)', flexShrink: 0 }}>
                <Image src={post.img} alt={post.title} fill style={{ objectFit: 'cover', objectPosition: 'top' }} unoptimized />
              </div>
              <div style={{ padding: '16px 18px 18px' }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-1)', lineHeight: 1.5, marginBottom: 8 }}>{post.title}</div>
                <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.65, marginBottom: 12 }}>{post.excerpt}</div>
                <div style={{ fontSize: 9, fontWeight: 500, color: 'var(--oak)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Read on Substack →</div>
              </div>
            </a>
          ))}
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
