'use client'

import { useState } from 'react'
import AccessTab from './AccessTab'

export default function CompanyPage() {
  const [approved, setApproved] = useState(false)

  if (approved) {
    return (
      <div className="w-container w-section" style={{ paddingBottom: 80 }}>
        <div className="w-card" style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center', padding: '48px 40px' }}>
          <div style={{ fontSize: 32, color: 'var(--oak)', marginBottom: 16 }}>✓</div>
          <h2 className="w-display" style={{ fontSize: 24, marginBottom: 12 }}>
            Audit <em>received.</em>
          </h2>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: 20 }}>
            Thank you for completing the company audit. We review every submission personally.
          </p>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.85 }}>
            If your company is approved for access to The Wilson Co. Collective, we&apos;ll be in touch within <strong style={{ color: 'var(--ink-2)' }}>3–5 business days</strong>. Access is selective — we only approve companies that meet our standards for how candidates are treated.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-container w-section">
      <AccessTab onApproved={() => setApproved(true)} />
    </div>
  )
}
