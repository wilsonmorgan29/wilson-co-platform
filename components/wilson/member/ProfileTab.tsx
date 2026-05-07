'use client'

interface ProfileTabProps {
  onGoVisibility: () => void
  onGoMatches: () => void
}

export default function ProfileTab({ onGoVisibility, onGoMatches }: ProfileTabProps) {
  return (
    <div className="w-fade-in">
      <div className="w-flex-start" style={{ marginBottom: 20 }}>
        <div className="w-profile-avatar">M</div>
        <div>
          <div className="w-profile-name">Morgan Wilson</div>
          <div className="w-profile-title">Director of Recruiting · Strategic Financial Group</div>
          <div style={{ marginTop: 7 }}>
            <button
              className="w-badge w-badge-oak"
              style={{ cursor: 'pointer', border: 'none' }}
              onClick={onGoVisibility}
            >
              Selective · change
            </button>
          </div>
        </div>
      </div>

      <div className="w-quote-block">
        <div className="w-quote-text">&ldquo;I don&apos;t need the biggest title — I need to build something that matters.&rdquo;</div>
      </div>

      <p className="w-eyebrow" style={{ marginBottom: 12 }}>Goals profile</p>
      <div className="w-grid-2" style={{ marginBottom: 16 }}>
        <div className="w-goal-chip"><div className="w-goal-chip-label">Target roles</div><div className="w-goal-chip-value">COO · Head of Ops</div></div>
        <div className="w-goal-chip"><div className="w-goal-chip-label">Industries</div><div className="w-goal-chip-value">FinServ · Startups</div></div>
        <div className="w-goal-chip"><div className="w-goal-chip-label">Comp floor</div><div className="w-goal-chip-value">$200K base</div></div>
        <div className="w-goal-chip"><div className="w-goal-chip-label">Markets</div><div className="w-goal-chip-value">Nashville · NYC</div></div>
      </div>

      <div className="w-divider" />

      <p className="w-eyebrow" style={{ marginBottom: 10 }}>What I&apos;ve outgrown</p>
      <div className="w-pill-group" style={{ marginBottom: 18 }}>
        {['Transactional recruiting', 'No seat at the table', 'Siloed role', 'Highly political', 'Top-down only'].map(p => (
          <div key={p} className="w-pill on" style={{ cursor: 'default' }}>{p}</div>
        ))}
      </div>

      <div className="w-divider" />

      <div className="w-card">
        <div className="w-flex-between" style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 500 }}>Profile strength</div>
          <div style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: 20, color: 'var(--oak)', letterSpacing: '0.04em' }}>92%</div>
        </div>
        <div style={{ height: 3, background: 'var(--beige-mid)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: '92%', background: 'var(--oak)', borderRadius: 2 }} />
        </div>
        <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)', marginTop: 7 }}>Add a reference contact to reach 100%</div>
      </div>

      <div className="w-btn-row">
        <button className="w-btn w-btn-outline">Edit profile</button>
        <button className="w-btn w-btn-oak" onClick={onGoMatches}>View matches →</button>
      </div>
    </div>
  )
}
