'use client'

import { useState } from 'react'

interface Match {
  id: string
  initials: string
  avatarBg: string
  company: string
  role: string
  location: string
  comp: string
  matchPct: number
  badgeClass: string
  badgeLabel: string
  passed?: boolean
  accepted?: boolean
}

const initialMatches: Match[] = [
  {
    id: 'mc1', initials: 'SF', avatarBg: '#4a5a7a',
    company: 'Summit Financial Group', role: 'Head of Operations', location: 'Nashville',
    comp: '$210–240K · Series B · Founder-led',
    matchPct: 91, badgeClass: 'w-badge-denim', badgeLabel: 'Strong match',
  },
  {
    id: 'mc2', initials: 'NV', avatarBg: '#3a5a3d',
    company: 'Northview Capital', role: 'Chief of Staff to CEO', location: 'NYC',
    comp: '$190–220K + equity · PE-backed',
    matchPct: 74, badgeClass: 'w-badge-oak', badgeLabel: 'Partial match — review carefully',
  },
]

export default function MatchesTab() {
  const [matches, setMatches] = useState(initialMatches)

  const acceptMatch = (id: string) => {
    setMatches(prev => prev.map(m => m.id === id ? { ...m, accepted: true } : m))
  }

  const passMatch = (id: string) => {
    setMatches(prev => prev.map(m => m.id === id ? { ...m, passed: true } : m))
  }

  const visible = matches.filter(m => !m.passed)

  return (
    <div className="w-fade-in">
      <p className="w-eyebrow" style={{ marginBottom: 10 }}>Curated for you</p>
      <h2 className="w-display" style={{ fontSize: 26, marginBottom: 8 }}>
        {visible.length} {visible.length === 1 ? 'opportunity' : 'opportunities'} <em>worth your time.</em>
      </h2>
      <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 22 }}>
        Each was reviewed against your goals profile before reaching you. Companies never know you passed.
      </p>

      {visible.map(m => (
        <div
          key={m.id}
          className="w-match-card"
          style={m.accepted ? { borderColor: 'var(--oak)', background: 'var(--oak-bg)' } : {}}
        >
          <div className="w-flex-start" style={{ marginBottom: 10 }}>
            <div className="w-match-avatar" style={{ background: m.avatarBg, fontSize: 11 }}>{m.initials}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{m.company}</div>
              <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)', marginTop: 2 }}>{m.role} · {m.location}</div>
              <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-2)', marginTop: 4 }}>{m.comp}</div>
            </div>
          </div>
          <div className="w-score-row">
            <span style={{ fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Goals match</span>
            <div className="w-score-track"><div className="w-score-fill" style={{ width: `${m.matchPct}%` }} /></div>
            <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--oak)' }}>{m.matchPct}%</span>
          </div>
          <div style={{ marginBottom: 10 }}><span className={`w-badge ${m.badgeClass}`}>{m.badgeLabel}</span></div>
          <div style={{ display: 'flex', gap: 7 }}>
            <button
              onClick={() => acceptMatch(m.id)}
              disabled={m.accepted}
              style={{ flex: 1, padding: 8, borderRadius: 5, fontSize: 10, fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', background: m.accepted ? 'var(--denim)' : 'var(--oak)', color: 'white', border: 'none', cursor: m.accepted ? 'default' : 'pointer', transition: 'all 0.15s' }}
            >
              {m.accepted ? 'Requested ✓' : 'Learn more'}
            </button>
            <button
              onClick={() => passMatch(m.id)}
              style={{ flex: 1, padding: 8, borderRadius: 5, fontSize: 10, fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', background: 'var(--beige-mid)', color: 'var(--ink-3)', border: 'none', cursor: 'pointer' }}
            >
              Not for me
            </button>
          </div>
        </div>
      ))}

      {visible.length === 0 && (
        <div className="w-card w-card-beige" style={{ textAlign: 'center', padding: 32 }}>
          <div style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.7 }}>You&apos;ve reviewed all current matches. New opportunities will appear as they&apos;re curated for you.</div>
        </div>
      )}

      <div className="w-card w-card-beige" style={{ marginTop: 6 }}>
        <div className="w-eyebrow" style={{ marginBottom: 6 }}>How matching works</div>
        <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.7 }}>Every opportunity is reviewed by a human against your goals profile before it reaches you. Companies never know you saw — or passed on — their opportunity.</div>
      </div>
    </div>
  )
}
