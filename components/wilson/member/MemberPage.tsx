'use client'

import { useState } from 'react'
import IntakeTab from './IntakeTab'

export default function MemberPage() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="w-container w-section" style={{ paddingBottom: 80 }}>
        <div className="w-card" style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center', padding: '48px 40px' }}>
          <div style={{ fontSize: 32, color: 'var(--oak)', marginBottom: 16 }}>✓</div>
          <h2 className="w-display" style={{ fontSize: 24, marginBottom: 12 }}>
            Application <em>received.</em>
          </h2>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: 20 }}>
            Thank you for applying to The Wilson Co. Collective. We review every application personally — there is no algorithm here.
          </p>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.85 }}>
            If your application is a strong fit, we&apos;ll be in touch within <strong style={{ color: 'var(--ink-2)' }}>3–5 business days</strong> to schedule a clarity conversation. If it&apos;s not the right time or fit, we&apos;ll let you know that too — no one gets ghosted here.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-container w-section">
      <IntakeTab onComplete={() => setSubmitted(true)} />
    </div>
  )
}
