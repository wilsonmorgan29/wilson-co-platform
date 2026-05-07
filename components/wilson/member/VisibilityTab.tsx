'use client'

import { useState } from 'react'

const visData = [
  { label: 'Dark',      cls: 'w-badge-black', desc: 'Your profile is completely invisible. Building clarity, not looking.' },
  { label: 'Selective', cls: 'w-badge-oak',   desc: 'Visible only to companies matching your goals profile. You approve every introduction.' },
  { label: 'Active',    cls: 'w-badge-denim', desc: 'Broader visibility to vetted, audited companies. Still opt-in for every conversation.' },
]

interface ToggleItem { label: string; on: boolean }

export default function VisibilityTab() {
  const [visIdx, setVisIdx] = useState(1) // default: Selective

  const [toggles, setToggles] = useState<ToggleItem[]>([
    { label: 'Goals profile (roles + industries)', on: true },
    { label: 'Current title + company', on: true },
    { label: 'Years of experience', on: true },
    { label: 'Compensation requirements', on: false },
    { label: 'Full name (vs. anonymous)', on: false },
    { label: 'Geographic preferences', on: true },
  ])

  const cycleVis = () => setVisIdx(i => (i + 1) % 3)

  const toggleItem = (idx: number) => {
    setToggles(prev => prev.map((t, i) => i === idx ? { ...t, on: !t.on } : t))
  }

  const vis = visData[visIdx]

  return (
    <div className="w-fade-in">
      <p className="w-eyebrow" style={{ marginBottom: 10 }}>Visibility controls</p>
      <h2 className="w-display" style={{ fontSize: 26, marginBottom: 8 }}>You&apos;re in <em>control.</em></h2>
      <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 22 }}>
        Adjust who sees you and what they see. Every setting applies immediately — no one is notified of changes.
      </p>

      {/* Status card */}
      <div className="w-vis-card">
        <div className="w-vis-head">
          <div>
            <div style={{ fontSize: 13, fontWeight: 500 }}>Current status</div>
            <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)', marginTop: 2 }}>Tap to cycle</div>
          </div>
          <button
            className={`w-badge ${vis.cls}`}
            style={{ cursor: 'pointer', border: 'none' }}
            onClick={cycleVis}
          >
            {vis.label}
          </button>
        </div>
        <div className="w-vis-body">
          <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.7 }}>{vis.desc}</div>
        </div>
      </div>

      {/* What companies can see */}
      <div className="w-vis-card" style={{ marginTop: 12 }}>
        <div className="w-vis-head" style={{ paddingBottom: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 500 }}>What companies can see</div>
        </div>
        <div className="w-vis-body" style={{ paddingTop: 0 }}>
          {toggles.map((t, i) => (
            <div key={t.label} className="w-toggle-row">
              <span className="w-toggle-label">{t.label}</span>
              <button
                className={`w-toggle${t.on ? ' on' : ''}`}
                onClick={() => toggleItem(i)}
                aria-label={`Toggle ${t.label}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Company audit standing */}
      <div className="w-vis-card" style={{ marginTop: 12 }}>
        <div className="w-vis-head" style={{ paddingBottom: 8 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 500 }}>Company audit standing</div>
            <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)', marginTop: 2 }}>Only audited companies can access the collective</div>
          </div>
          <span className="w-badge w-badge-denim">7 active</span>
        </div>
        <div className="w-vis-body" style={{ paddingTop: 0 }}>
          {[
            { text: '✓ Comp disclosed before outreach', ok: true },
            { text: '✓ Interview process defined upfront', ok: true },
            { text: '✓ 5-day response SLA enforced', ok: true },
            { text: '! 2 companies pending annual re-audit', ok: false },
          ].map(item => (
            <div key={item.text} className="w-toggle-row">
              <span className="w-toggle-label" style={{ color: item.ok ? 'var(--oak)' : 'var(--ink-3)' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
