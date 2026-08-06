'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function ProposalPage() {
  const params = useSearchParams()
  const client = params.get('client') || 'Your Name'
  const date = params.get('date') || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  const discountPct = parseFloat(params.get('discount') || '0')
  const hasDiscount = discountPct > 0

  const applyDiscount = (price: number) => Math.round(price * (1 - discountPct / 100))
  const price3 = 900
  const price6 = 1650
  const disc3 = applyDiscount(price3)
  const disc6 = applyDiscount(price6)

  return (
    <>
      <style>{`
        .p-doc { max-width: 760px; margin: 0 auto; padding-bottom: 80px; font-family: 'Gill Sans MT', 'Gill Sans', Optima, Candara, sans-serif; }
        .p-header { background: #2E4E61; padding: 44px 56px 40px; display: flex; justify-content: space-between; align-items: flex-end; }
        .p-wordmark { font-size: 11px; letter-spacing: 0.4em; text-transform: uppercase; color: #A8BCCE; margin-bottom: 20px; }
        .p-h1 { font-family: Georgia, serif; font-style: italic; font-weight: normal; font-size: 34px; color: #fff; line-height: 1.2; }
        .p-header-right { text-align: right; flex-shrink: 0; padding-left: 40px; }
        .p-label { font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase; color: #A8BCCE; margin-bottom: 4px; }
        .p-value { font-size: 13px; color: rgba(255,255,255,0.75); line-height: 1.6; }
        .p-intro { padding: 40px 56px 32px; border-bottom: 1px solid #D7DEE2; }
        .p-intro p { font-size: 14.5px; color: #3d4f59; line-height: 1.8; max-width: 580px; }
        .p-intro p + p { margin-top: 14px; }
        .p-section { padding: 40px 56px; border-bottom: 1px solid #D7DEE2; }
        .p-section.no-border { border-bottom: none; }
        .p-eyebrow { font-size: 9.5px; letter-spacing: 0.28em; text-transform: uppercase; color: #5D6B3D; margin-bottom: 6px; }
        .p-section-title { font-family: Georgia, serif; font-size: 22px; font-weight: normal; color: #2E4E61; margin-bottom: 24px; }
        .p-options { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .p-card { background: #fff; border: 1px solid #D7DEE2; border-radius: 4px; overflow: hidden; }
        .p-card.featured { border-color: #5D6B3D; border-width: 2px; }
        .p-card-top { background: #2E4E61; padding: 22px 24px 18px; }
        .p-card.featured .p-card-top { background: #5D6B3D; }
        .p-card-tag { font-size: 9px; letter-spacing: 0.26em; text-transform: uppercase; color: #A8BCCE; margin-bottom: 10px; }
        .p-card.featured .p-card-tag { color: rgba(255,255,255,0.65); }
        .p-card-name { font-family: Georgia, serif; font-size: 24px; font-style: italic; font-weight: normal; color: #fff; line-height: 1.2; margin-bottom: 6px; }
        .p-card-sub { font-size: 11px; color: rgba(255,255,255,0.55); }
        .p-price-row { display: flex; align-items: baseline; gap: 8px; margin: 18px 0 6px; flex-wrap: wrap; }
        .p-price { font-family: Georgia, serif; font-size: 36px; font-style: italic; color: #fff; line-height: 1; }
        .p-price-note { font-size: 11px; color: rgba(255,255,255,0.5); }
        .p-price-orig { font-family: Georgia, serif; font-size: 18px; font-style: italic; color: rgba(255,255,255,0.35); text-decoration: line-through; line-height: 1; }
        .p-discount-badge { display: inline-block; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); border-radius: 3px; font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: #fff; padding: 3px 8px; margin-bottom: 8px; }
        .p-card-body { padding: 22px 24px 26px; }
        .p-line { display: flex; gap: 10px; align-items: flex-start; padding: 7px 0; border-bottom: 1px solid #D7DEE2; font-size: 13px; color: #3d4f59; line-height: 1.5; }
        .p-line:last-child { border-bottom: none; }
        .p-dot { width: 5px; height: 5px; border-radius: 50%; background: #5D6B3D; flex-shrink: 0; margin-top: 6px; }
        .p-includes { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .p-include { background: #EDF2F5; border-radius: 4px; padding: 16px 18px; display: flex; gap: 12px; align-items: flex-start; }
        .p-check { color: #5D6B3D; font-size: 13px; flex-shrink: 0; margin-top: 1px; }
        .p-include-text { font-size: 13px; color: #3d4f59; line-height: 1.55; }
        .p-include-text strong { display: block; font-size: 12px; letter-spacing: 0.04em; color: #26333B; margin-bottom: 2px; font-weight: 600; }
        .p-steps { display: flex; flex-direction: column; }
        .p-step { display: grid; grid-template-columns: 48px 1fr; gap: 20px; padding: 20px 0; border-bottom: 1px solid #D7DEE2; align-items: start; }
        .p-step:last-child { border-bottom: none; }
        .p-step-num { font-family: Georgia, serif; font-style: italic; font-size: 28px; color: #A8BCCE; line-height: 1; padding-top: 2px; }
        .p-step-title { font-family: Georgia, serif; font-size: 16px; font-weight: normal; color: #2E4E61; margin-bottom: 6px; }
        .p-step-desc { font-size: 13px; color: #3d4f59; line-height: 1.7; }
        .p-cta { padding: 40px 56px; display: flex; gap: 32px; align-items: center; justify-content: space-between; background: #2E4E61; }
        .p-cta-label { font-size: 9.5px; letter-spacing: 0.26em; text-transform: uppercase; color: #A8BCCE; margin-bottom: 8px; }
        .p-cta h2 { font-family: Georgia, serif; font-weight: normal; font-style: italic; font-size: 22px; color: #fff; line-height: 1.3; }
        .p-cta-btns { display: flex; flex-direction: column; gap: 10px; flex-shrink: 0; }
        .p-btn { display: inline-block; font-family: 'Gill Sans MT', 'Gill Sans', Optima, sans-serif; font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase; text-decoration: none; padding: 11px 22px; border-radius: 3px; cursor: pointer; text-align: center; }
        .p-btn-oak { background: #5D6B3D; color: #fff; border: none; }
        .p-btn-outline { background: transparent; color: rgba(255,255,255,0.7); border: 1px solid rgba(255,255,255,0.3); }
        .p-footer { padding: 24px 56px; border-top: 1px solid #D7DEE2; }
        .p-footer-brand { font-size: 9.5px; letter-spacing: 0.28em; text-transform: uppercase; color: #416278; }
        @media (max-width: 600px) {
          .p-header, .p-intro, .p-section, .p-cta, .p-footer { padding-left: 28px; padding-right: 28px; }
          .p-header { flex-direction: column; align-items: flex-start; gap: 28px; }
          .p-header-right { text-align: left; padding-left: 0; }
          .p-options, .p-includes { grid-template-columns: 1fr; }
          .p-cta { flex-direction: column; align-items: flex-start; gap: 24px; }
        }
      `}</style>

      <div className="p-doc">

        <div className="p-header">
          <div>
            <p className="p-wordmark">The Wilson Co.</p>
            <h1 className="p-h1">Coaching<br />Proposal</h1>
          </div>
          <div className="p-header-right">
            <p className="p-label">Prepared for</p>
            <p className="p-value">{client}<br />{date}</p>
          </div>
        </div>

        <div className="p-intro">
          <p>
            Thank you for taking the time to connect. This proposal outlines two engagement options for 1:1 coaching — a focused 3-session sprint and a deeper 6-session engagement — both designed around your specific goals and current moment.
          </p>
          <p>
            Every session is 60 minutes, held by video or in person if you&apos;re based in New York City.
          </p>
          <p style="margin-top: 18px; font-size: 14px; color: #3d4f59; font-style: italic; line-height: 1.8;">
            I&apos;m really looking forward to working together — I know how much this next chapter means to you and I&apos;m here for all of it. Let&apos;s do this.
          </p>
          <p style="margin-top: 10px; font-size: 13px; color: #2E4E61; letter-spacing: 0.03em;">— Morgan</p>
        </div>

        <div className="p-section">
          <p className="p-eyebrow">Your options</p>
          <p className="p-section-title">Choose the engagement that fits where you are.</p>
          <div className="p-options">
            <div className="p-card">
              <div className="p-card-top">
                <p className="p-card-tag">Focused sprint</p>
                <p className="p-card-name">3 Sessions</p>
                <p className="p-card-sub">Ideal for a defined challenge or decision</p>
                {hasDiscount && <p className="p-discount-badge">{discountPct}% friends &amp; family rate</p>}
                <div className="p-price-row">
                  {hasDiscount && <span className="p-price-orig">${price3}</span>}
                  <span className="p-price">${disc3}</span>
                  <span className="p-price-note">${Math.round(disc3 / 3)} / session</span>
                </div>
              </div>
              <div className="p-card-body">
                {['Three 60-minute 1:1 sessions with Morgan', 'Focused on a single goal, transition, or decision', 'Flexible scheduling, no expiration', 'Email support between sessions', 'Session notes + action items after each call'].map(l => (
                  <div key={l} className="p-line"><div className="p-dot" /><div>{l}</div></div>
                ))}
              </div>
            </div>

            <div className="p-card featured">
              <div className="p-card-top">
                <p className="p-card-tag">Most popular</p>
                <p className="p-card-name">6 Sessions</p>
                <p className="p-card-sub">Best for real, lasting momentum</p>
                {hasDiscount && <p className="p-discount-badge">{discountPct}% friends &amp; family rate</p>}
                <div className="p-price-row">
                  {hasDiscount && <span className="p-price-orig">${price6.toLocaleString()}</span>}
                  <span className="p-price">${disc6.toLocaleString()}</span>
                  <span className="p-price-note">${Math.round(disc6 / 6)} / session</span>
                </div>
              </div>
              <div className="p-card-body">
                {['Six 60-minute 1:1 sessions with Morgan', 'Room to go deeper — strategy, execution, and accountability', 'Flexible scheduling, no expiration', 'Priority email support between sessions', 'Session notes + action items after each call', 'Best per-session rate'].map(l => (
                  <div key={l} className="p-line"><div className="p-dot" /><div>{l}</div></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-section">
          <p className="p-eyebrow">Every engagement includes</p>
          <p className="p-section-title">What you can count on, regardless of package.</p>
          <div className="p-includes">
            {[
              { title: 'Real preparation', desc: 'Morgan reviews your background and goals before session one. You don\'t start from scratch.' },
              { title: 'Honest feedback', desc: 'Not validation — actual perspective on what\'s working, what isn\'t, and what to do about it.' },
              { title: 'Written session recap', desc: 'A short summary of what we covered and the exact next steps you committed to.' },
              { title: 'Flexible scheduling', desc: 'Sessions don\'t expire. Life happens — we work around it.' },
              { title: 'Confidentiality', desc: 'Everything shared stays between us, always.' },
              { title: 'Your format', desc: 'Video (Zoom / FaceTime) or in person for NYC-based clients.' },
            ].map(i => (
              <div key={i.title} className="p-include">
                <span className="p-check">✓</span>
                <div className="p-include-text"><strong>{i.title}</strong>{i.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-section no-border">
          <p className="p-eyebrow">How it works</p>
          <p className="p-section-title">From yes to your first session.</p>
          <div className="p-steps">
            {[
              { title: 'You choose your package', desc: 'Select 3 or 6 sessions and complete the intake form. Takes about 10–15 minutes — it\'s how Morgan gets up to speed before you even meet.' },
              { title: 'We schedule session one', desc: 'Morgan will reach out directly to find a time that works for you.' },
              { title: 'Payment confirmed', desc: 'You\'ll receive an invoice for the full package or a payment plan as discussed. Payment is due before session one.' },
              { title: 'We get to work', desc: 'Each session picks up where the last one left off. You set the agenda; Morgan brings the structure, the questions, and the honest perspective.' },
            ].map((s, i) => (
              <div key={s.title} className="p-step">
                <span className="p-step-num">{i + 1}</span>
                <div>
                  <p className="p-step-title">{s.title}</p>
                  <p className="p-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-cta">
          <div>
            <p className="p-cta-label">Ready to start?</p>
            <h2>Complete the intake form<br />and we&apos;ll take it from there.</h2>
          </div>
          <div className="p-cta-btns">
            <Link href="/coaching-agreement" className="p-btn p-btn-oak">Complete intake form →</Link>
            <Link href="/contact" className="p-btn p-btn-outline">Ask a question first</Link>
          </div>
        </div>

        <div className="p-footer">
          <span className="p-footer-brand">thewilson.co</span>
        </div>

      </div>
    </>
  )
}
