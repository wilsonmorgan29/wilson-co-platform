import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="w-hero" style={{ paddingBottom: 56 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-start', gap: 0 }}>
          <div>
            <p className="w-eyebrow" style={{ marginBottom: 16 }}>About Morgan Wilson</p>
            <h1 className="w-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 20, maxWidth: 620 }}>
              I spent a decade building people functions from the inside. Now I help companies build <em>theirs.</em>
            </h1>
            <p className="w-hero-sub">
              From assistant to Director across three of the world&apos;s most prestigious law firms —
              and now running my own recruiting practice focused on the one function I know best.
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

      {/* The career */}
      <div className="w-section w-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 40, alignItems: 'start' }}>
          <div>
            <p className="w-eyebrow" style={{ marginBottom: 14 }}>The background</p>
            <h2 className="w-display" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
              Assistant to Director — at three of <em>the best firms in the world.</em>
            </h2>
          </div>
          <div className="w-stack" style={{ gap: 16 }}>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              I started my career as a recruiting assistant and worked my way up to Director — building that
              progression across three of the largest and most prestigious law firms in the world: Locke Lord,
              Weil Gotshal &amp; Manges, and Kirkland &amp; Ellis. Then I spent a year and a half at a boutique
              wealth management firm, deliberately stepping into a different industry to see how talent and people
              strategy worked outside of Big Law.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              I built recruiting programs, sourcing strategies, onboarding infrastructure, development frameworks
              and much more — not as someone brought in from the outside, but as a member of the function,
              doing the work. I sat in the rooms where decisions got made about who to hire, how to build a team,
              and what it actually took to retain the people worth keeping.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              What I kept seeing, across every organization, was the same gap: the teams responsible for hiring
              and developing people were often the least invested in themselves. Strong recruiting and people
              strategy had an enormous ripple effect on everything else — culture, retention, growth, morale —
              but the function itself was treated as an afterthought. I knew I could do something about that.
            </p>
          </div>
        </div>
      </div>

      {/* Pull quote */}
      <div className="w-container">
        <div style={{ background: 'var(--oak)', borderRadius: 'var(--w-radius)', padding: '32px 36px', margin: '8px 0' }}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(17px, 2.5vw, 22px)', fontStyle: 'italic', color: 'var(--w-white)', lineHeight: 1.6, maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
            &ldquo;If you have the right people in these roles, it influences every other team and every dimension
            of company growth. I&apos;ve lived it. I&apos;ve seen exactly how much it matters.&rdquo;
          </div>
        </div>
      </div>

      {/* Why this niche */}
      <div className="w-section w-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 40, alignItems: 'start' }}>
          <div>
            <p className="w-eyebrow" style={{ marginBottom: 14 }}>Why this niche</p>
            <h2 className="w-display" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
              The most important function — and the most <em>overlooked one.</em>
            </h2>
          </div>
          <div className="w-stack" style={{ gap: 16 }}>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              People and HR is often the forgotten function — treated as overhead, filled last, supported least.
              But I would argue it&apos;s the most important seat at the table. The right Head of People, the right
              TA leader, the right HR business partner — these hires shape who gets into the company, how people
              are developed, and whether the culture actually holds when things get hard.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              I started The Wilson Co. because I&apos;d seen what happens when these roles are filled well, and
              (more importantly) what happens when they aren&apos;t. Most search firms placing People and HR professionals have never
              worked inside the function. They know the job description. They don&apos;t know the job. I do. And
              that difference changes everything about how a search gets run and what the right match actually
              looks like.
            </p>
          </div>
        </div>
      </div>

      <div className="w-container"><div className="w-divider" /></div>

      {/* The person */}
      <div className="w-section w-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 40, alignItems: 'start' }}>
          <div>
            <p className="w-eyebrow" style={{ marginBottom: 14 }}>Outside the work</p>
            <h2 className="w-display" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
              Nashville. Texas. <em>New York.</em>
            </h2>
          </div>
          <div className="w-stack" style={{ gap: 16 }}>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              I grew up in Nashville and went to college in Texas, where I spent a decade building my career.
              Then I made the big jump to New York City. I think that says something about an appetite for
              big energy and bigger ambition. My greatest professional asset has always been
              my ability to connect with people. Building relationships comes naturally to me, and it&apos;s
              the foundation of every search I run.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85 }}>
              Outside of work, I travel as much as possible — new places, new cultures, new perspectives.
              I spend time with the people I love, including my goldendoodle, who has strong opinions about
              office hours. I believe the best professionals are whole people, and I try to bring that
              philosophy into every engagement.
            </p>
          </div>
        </div>
      </div>

      {/* Press */}
      <div className="w-container"><div className="w-divider" /></div>
      <div className="w-section w-container">
        <p className="w-eyebrow" style={{ marginBottom: 16 }}>As seen in</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {[
            { label: 'AP News', href: 'https://apnews.com/press-release/pr-newswire/morgan-wilson-launches-the-wilson-co-to-bring-a-human-edge-back-to-career-strategy-and-talent-development-af48352eaed8363a650eadbfec60974e' },
            { label: 'CEO Weekly', href: 'https://ceoweekly.com/morgan-wilsons-take-on-the-professional-lie-we-rarely-question/' },
            { label: 'US Insider', href: 'https://usinsider.com/why-high-performers-get-stuck-mid-career-and-what-most-career-advice-gets-wrong/' },
          ].map(p => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-card w-card-beige"
              style={{ textDecoration: 'none', padding: '16px 22px', display: 'flex', alignItems: 'center', gap: 10 }}
            >
              <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-1)' }}>{p.label}</span>
              <span style={{ fontSize: 10, color: 'var(--oak)' }}>↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="w-section w-container" style={{ paddingBottom: 64 }}>
        <div className="w-card" style={{ background: 'var(--w-black)', border: 'none', textAlign: 'center', padding: '32px' }}>
          <p className="w-eyebrow" style={{ marginBottom: 12, color: 'var(--oak-light)' }}>Let&apos;s connect</p>
          <h2 className="w-display" style={{ fontSize: 22, color: 'var(--w-white)', marginBottom: 20 }}>
            Ready to work <em style={{ color: 'var(--oak-light)' }}>together?</em>
          </h2>
          <div className="w-hero-actions" style={{ justifyContent: 'center' }}>
            <Link href="/contact" className="w-btn w-btn-oak">Get in touch →</Link>
            <Link href="/for-companies" className="w-btn w-btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}>For companies</Link>
          </div>
        </div>
      </div>
    </>
  )
}
