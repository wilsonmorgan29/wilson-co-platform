export default function PipelineTab() {
  return (
    <div className="w-fade-in">
      <p className="w-eyebrow" style={{ marginBottom: 10 }}>Your pipeline</p>
      <h2 className="w-display" style={{ fontSize: 26, marginBottom: 8 }}>2 conversations <em>in motion.</em></h2>
      <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 22 }}>
        Every stage is candidate-paced. You can nudge — you cannot push.
      </p>

      <div className="w-card" style={{ padding: '0 20px', marginBottom: 16 }}>
        <div className="w-pipe-row">
          <div className="w-pipe-avatar" style={{ background: 'var(--denim)' }}>M</div>
          <div style={{ flex: 1 }}>
            <div className="w-pipe-name">Member #C-047</div>
            <div className="w-pipe-role">Intro accepted · reviewing role details</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 9, color: 'var(--ink-3)', marginBottom: 4 }}>Day 3</div>
            <span className="w-badge w-badge-oak">Reviewing</span>
          </div>
        </div>
        <div className="w-pipe-row">
          <div className="w-pipe-avatar" style={{ background: 'var(--oak)' }}>J</div>
          <div style={{ flex: 1 }}>
            <div className="w-pipe-name">Member #C-031</div>
            <div className="w-pipe-role">Exploratory call scheduled — Thu 2pm CST</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 9, color: 'var(--ink-3)', marginBottom: 4 }}>Day 7</div>
            <span className="w-badge w-badge-denim">Call set</span>
          </div>
        </div>
      </div>

      <p className="w-eyebrow" style={{ marginBottom: 10 }}>Pending requests</p>
      <div className="w-card" style={{ padding: '0 20px', marginBottom: 16 }}>
        <div className="w-pipe-row">
          <div className="w-pipe-avatar" style={{ background: '#5a7060' }}>R</div>
          <div style={{ flex: 1 }}>
            <div className="w-pipe-name">Member #C-058</div>
            <div className="w-pipe-role">Request sent · awaiting member response</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 9, color: 'var(--ink-3)', marginBottom: 4 }}>Day 2</div>
            <span className="w-badge w-badge-hyd">Pending</span>
          </div>
        </div>
      </div>

      <div className="w-card w-card-beige">
        <div className="w-eyebrow" style={{ marginBottom: 8 }}>Accountability standing</div>
        <div className="w-stack">
          <div className="w-flex-between">
            <span style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-2)' }}>Response SLA</span>
            <span className="w-badge w-badge-denim">On track</span>
          </div>
          <div className="w-flex-between">
            <span style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-2)' }}>Audit renewal</span>
            <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>Due in 9 months</span>
          </div>
          <div className="w-flex-between">
            <span style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-2)' }}>Collective standing</span>
            <span className="w-badge w-badge-oak">Good standing</span>
          </div>
        </div>
      </div>
    </div>
  )
}
