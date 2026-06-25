'use client'

import { useState } from 'react'

type FormState = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactPage() {
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus]   = useState<FormState>('idle')

  const canSubmit = name.trim() && email.trim() && message.trim()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact-general', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      })
      if (res.ok) {
        setStatus('sent')
        if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
          ;(window as any).gtag('event', 'ads_conversion_SUBMIT_LEAD_FORM_1')
        }
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <div className="w-hero" style={{ paddingBottom: 40 }}>
        <p className="w-eyebrow" style={{ marginBottom: 16 }}>Get in touch</p>
        <h1 className="w-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 16, maxWidth: 480 }}>
          Let&apos;s have a real <em>conversation.</em>
        </h1>
        <p className="w-hero-sub">
          Whether you&apos;re an individual thinking about your next move, a company looking for help
          with hiring, or just curious about how we work — reach out. We read everything.
        </p>
      </div>

      <div className="w-container">
        <div className="w-divider" />
      </div>

      <div className="w-section w-container" style={{ paddingBottom: 64 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 40, alignItems: 'start' }}>

          {/* Left — info */}
          <div>
            <div className="w-card w-card-beige" style={{ marginBottom: 12 }}>
              <p className="w-eyebrow" style={{ marginBottom: 10 }}>New York City</p>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.75 }}>
                Based in New York City, working with clients across the country. We&apos;re available
                for in-person meetings in NYC and virtual conversations everywhere else.
              </p>
            </div>

            <div className="w-card w-card-beige" style={{ marginBottom: 12 }}>
              <p className="w-eyebrow" style={{ marginBottom: 10 }}>Response time</p>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.75 }}>
                We respond to every message personally, typically within one business day.
                No automated replies, no intake forms with no follow-through.
              </p>
            </div>

            <div className="w-card w-card-beige">
              <p className="w-eyebrow" style={{ marginBottom: 10 }}>Follow along</p>
              <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
                <a href="https://www.instagram.com/thewilson.co" target="_blank" rel="noopener noreferrer" className="w-btn w-btn-outline" style={{ fontSize: 10, padding: '6px 14px' }}>
                  Instagram
                </a>
                <a href="https://www.linkedin.com/company/thewilsonco" target="_blank" rel="noopener noreferrer" className="w-btn w-btn-outline" style={{ fontSize: 10, padding: '6px 14px' }}>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="w-card">
            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ fontSize: 28, marginBottom: 12, color: 'var(--oak)' }}>✓</div>
                <div className="w-display" style={{ fontSize: 18, marginBottom: 10 }}>Message <em>received.</em></div>
                <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.75 }}>
                  Thank you, {name}. We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="w-grid-2" style={{ marginBottom: 0 }}>
                  <div className="w-field">
                    <label className="w-field-label">Full name *</label>
                    <input className="w-field-input" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
                  </div>
                  <div className="w-field">
                    <label className="w-field-label">Email address *</label>
                    <input className="w-field-input" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                  </div>
                </div>

                <div className="w-field">
                  <label className="w-field-label">What brings you here?</label>
                  <div className="w-pill-group" style={{ marginTop: 6, marginBottom: 8 }}>
                    {['Career coaching', 'Recruiting', 'Corporate consulting', 'Something else'].map(s => (
                      <button
                        key={s}
                        type="button"
                        className={`w-pill${subject === s ? ' on' : ''}`}
                        onClick={() => setSubject(subject === s ? '' : s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="w-field">
                  <label className="w-field-label">Message *</label>
                  <textarea
                    className="w-field-input"
                    rows={5}
                    placeholder="Tell us where you are and what you're looking for. The more context the better."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                </div>

                {status === 'error' && (
                  <div style={{ fontSize: 12, color: '#c0392b', marginBottom: 12 }}>
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-btn w-btn-oak"
                  disabled={!canSubmit || status === 'sending'}
                  style={{ width: '100%', justifyContent: 'center', opacity: canSubmit ? 1 : 0.4 }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
