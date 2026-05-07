'use client'

import { useState } from 'react'

interface AccessTabProps {
  onApproved: () => void
}

type Stage = 'wall' | 'audit' | 'approved'
type AuditStep = 1 | 2 | 3

const STAGE_OPTIONS   = ['Early-stage', 'Growth stage', 'PE-backed', 'Founder-led']
const SIZE_OPTIONS    = ['Under 25', '25–100', '100–500', '500+']
const LOCATION_OPTIONS = ['Nashville on-site', 'Hybrid', 'Remote-first', 'NYC']

// ── Commitments from the evaluation framework document ───────────────────

const REQUIRED_COMMITMENTS = [
  {
    id: 1,
    label: 'Comp transparency',
    desc: 'Full base, bonus, and equity shared before the first conversation. Not at offer stage. Not a range so wide it is meaningless. A real number.',
    violation: '1st: warning and mandatory disclosure. 2nd: suspended from new intro requests. 3rd: removed from the collective.',
  },
  {
    id: 2,
    label: 'Defined interview process',
    desc: 'Written process shared before step one: how many rounds, who is in each round, what format, what the timeline is. Changes after sharing trigger re-audit.',
    violation: 'Undisclosed process changes = immediate re-audit at company expense. 2 violations = removal.',
  },
  {
    id: 3,
    label: '5-day response SLA',
    desc: 'Every candidate who advances past the first conversation receives a decision or meaningful update within 5 business days. No exceptions for holidays or travel.',
    violation: 'Violations tracked and visible on company profile to members. 3 violations = removal from the collective.',
  },
  {
    id: 4,
    label: 'Role accuracy',
    desc: 'The role description matches the actual job — scope, reporting, budget authority. Members can flag discrepancies. 2 verified flags = re-audit.',
    violation: 'Verified misrepresentation = immediate suspension pending investigation.',
  },
]

const OPTIONAL_COMMITMENTS = [
  {
    id: 5,
    label: 'Debrief offered to all final-round candidates',
    desc: 'Candidates who are not selected are offered a brief debrief if they want one. Not required, but tracked. Companies that do this build better reputations with members.',
  },
  {
    id: 6,
    label: 'Annual re-audit agreed to in writing',
    desc: 'Keeps the network accountable over time, not just at the point of entry.',
  },
]

function PillSelector({ options, selected, onChange }: {
  options: string[]
  selected: string[]
  onChange: (v: string[]) => void
}) {
  const toggle = (opt: string) =>
    onChange(selected.includes(opt) ? selected.filter(s => s !== opt) : [...selected, opt])
  return (
    <div className="w-pill-group" style={{ marginTop: 8 }}>
      {options.map(opt => (
        <button key={opt} type="button" className={`w-pill${selected.includes(opt) ? ' on' : ''}`} onClick={() => toggle(opt)}>
          {opt}
        </button>
      ))}
    </div>
  )
}

export default function AccessTab({ onApproved }: AccessTabProps) {
  const [stage, setStage]         = useState<Stage>('wall')
  const [auditStep, setAuditStep] = useState<AuditStep>(1)

  // Step 1 — Company profile
  const [companyName, setCompanyName] = useState('')
  const [stages, setStages]           = useState<string[]>([])
  const [sizes, setSizes]             = useState<string[]>([])
  const [pitch, setPitch]             = useState('')

  // Step 2 — Commitments
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  const toggleCheck = (id: number) =>
    setChecked(prev => ({ ...prev, [id]: !prev[id] }))

  const requiredChecked  = REQUIRED_COMMITMENTS.filter(c => checked[c.id]).length
  const optionalChecked  = OPTIONAL_COMMITMENTS.filter(c => checked[c.id]).length
  const totalChecked     = requiredChecked + optionalChecked
  const canContinue      = requiredChecked >= 4
  const earnsCertified   = requiredChecked >= 4 && optionalChecked >= 2

  // Step 3 — The role
  const [roleTitle, setRoleTitle] = useState('')
  const [comp, setComp]           = useState('')
  const [locations, setLocations] = useState<string[]>([])
  const [success12, setSuccess12] = useState('')
  const [whyOpen, setWhyOpen]     = useState('')

  const goAuditStep = (n: AuditStep) => {
    setAuditStep(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // ── Wall ─────────────────────────────────────────────────────────────

  if (stage === 'wall') {
    return (
      <div className="w-fade-in">
        <div className="w-wall">
          <div className="w-wall-ornament">◈</div>
          <div className="w-wall-title">Access is earned,<br />not purchased.</div>
          <div className="w-wall-body">
            The Wilson Co. collective&apos;s members have agreed to be here on their terms — not yours. Before you can see anyone, we need to verify your company meets the standards they&apos;ve set.
          </div>
          <button className="w-btn w-btn-oak" onClick={() => setStage('audit')}>Begin company audit →</button>
        </div>
        <div className="w-card w-card-beige">
          <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.75 }}>
            <strong style={{ fontWeight: 500, color: 'var(--w-black)' }}>Why an audit?</strong> Every member was asked what burned them in past job searches — ghosting, hidden comp, surprise process changes, bait-and-switch job descriptions. The audit is a commitment, on record, that your company won&apos;t do those things.
          </div>
        </div>
      </div>
    )
  }

  // ── Approved ─────────────────────────────────────────────────────────

  if (stage === 'approved') {
    return (
      <div className="w-fade-in">
        <div className="w-wall" style={{ borderColor: 'var(--oak)', background: 'var(--oak-bg)' }}>
          <div style={{ fontSize: 22, color: 'var(--oak)', marginBottom: 10 }}>✓</div>
          <div className="w-wall-title" style={{ color: 'var(--oak)' }}>
            {earnsCertified ? 'Access approved — Wilson Co. Certified.' : 'Access approved.'}
          </div>
          <div className="w-wall-body" style={{ color: '#4a5a30' }}>
            {earnsCertified
              ? 'Your company completed all 6 commitments and has earned the Wilson Co. Certified badge. Members can see this and prioritize certified companies when deciding whether to accept an introduction.'
              : 'Your company is now audited. Members whose goals align with your role can opt in to an introduction. Nothing moves without their consent.'}
          </div>
          <button className="w-btn w-btn-oak" onClick={onApproved}>Browse the collective →</button>
        </div>
        <div className="w-card">
          <div className="w-flex-between" style={{ marginBottom: 10 }}>
            <div className="w-eyebrow">Your commitments on record</div>
            {earnsCertified && <span className="w-badge w-badge-gold">Wilson Co. Certified</span>}
          </div>
          <div className="w-stack">
            {REQUIRED_COMMITMENTS.filter(c => checked[c.id]).map(c => (
              <div key={c.id} style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-2)' }}>
                <span style={{ color: 'var(--oak)' }}>✓</span>&nbsp; {c.label}
              </div>
            ))}
            {OPTIONAL_COMMITMENTS.filter(c => checked[c.id]).map(c => (
              <div key={c.id} style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-2)' }}>
                <span style={{ color: 'var(--oak)' }}>✓</span>&nbsp; {c.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ── Audit flow ────────────────────────────────────────────────────────

  return (
    <div className="w-fade-in">
      <div className="w-step-bar">
        {[1, 2, 3].map(n => (
          <div key={n} className={`w-step-pip${n < auditStep ? ' done' : n === auditStep ? ' active' : ''}`} />
        ))}
      </div>

      {/* Step 1 — Company profile */}
      {auditStep === 1 && (
        <div>
          <p className="w-eyebrow" style={{ marginBottom: 10 }}>Step 1 of 3 — Company profile</p>
          <h2 className="w-display" style={{ fontSize: 24, marginBottom: 8 }}>Tell us about <em>your company.</em></h2>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 22 }}>
            This is what members see when your opportunity is surfaced to them. Be honest.
          </p>
          <div className="w-grid-2">
            <div className="w-field">
              <label className="w-field-label">Company name</label>
              <input className="w-field-input" placeholder="Legal or trading name" value={companyName} onChange={e => setCompanyName(e.target.value)} />
            </div>
            <div className="w-field">
              <label className="w-field-label">Stage</label>
              <PillSelector options={STAGE_OPTIONS} selected={stages} onChange={setStages} />
            </div>
            <div className="w-field">
              <label className="w-field-label">Team size</label>
              <PillSelector options={SIZE_OPTIONS} selected={sizes} onChange={setSizes} />
            </div>
          </div>
          <div className="w-field">
            <label className="w-field-label">Why should someone bet their career here?</label>
            <textarea
              className="w-field-input"
              rows={3}
              placeholder="Be specific. What are you building? What makes this worth someone's best years?"
              value={pitch}
              onChange={e => setPitch(e.target.value)}
            />
          </div>
          <div className="w-btn-row">
            <button
              className="w-btn w-btn-oak"
              onClick={() => goAuditStep(2)}
              disabled={!companyName || stages.length === 0 || !pitch}
              style={{ opacity: (!companyName || stages.length === 0 || !pitch) ? 0.4 : 1 }}
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Step 2 — Commitments */}
      {auditStep === 2 && (
        <div>
          <p className="w-eyebrow" style={{ marginBottom: 10 }}>Step 2 of 3 — Commitments</p>
          <h2 className="w-display" style={{ fontSize: 24, marginBottom: 8 }}>Make the <em>commitments.</em></h2>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 18 }}>
            These aren&apos;t suggestions. Members chose these standards. Your company goes on record.
          </p>

          <div className="w-progress-wrap">
            <div className="w-progress-track">
              <div className="w-progress-fill" style={{ width: `${Math.round(totalChecked / 6 * 100)}%` }} />
            </div>
            <div className="w-progress-label">{totalChecked} of 6 confirmed</div>
          </div>

          {/* Required */}
          <p className="w-eyebrow" style={{ marginBottom: 0, marginTop: 4 }}>Required — all 4 must pass</p>
          <div className="w-card" style={{ padding: '0 20px', marginBottom: 14 }}>
            {REQUIRED_COMMITMENTS.map(c => (
              <div key={c.id} className="w-audit-item">
                <div
                  className={`w-audit-check${checked[c.id] ? ' checked' : ' warn'}`}
                  onClick={() => toggleCheck(c.id)}
                >
                  {checked[c.id] ? '✓' : '!'}
                </div>
                <div style={{ flex: 1 }}>
                  <div className="w-audit-label">
                    {c.label}
                    <span className="w-audit-tag w-tag-req">required</span>
                  </div>
                  <div className="w-audit-desc">{c.desc}</div>
                  <div style={{ fontSize: 10, color: 'var(--denim)', marginTop: 4, fontWeight: 300 }}>
                    Violation: {c.violation}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional — earn Certified badge */}
          <div className="w-flex-between" style={{ marginBottom: 6, marginTop: 18 }}>
            <p className="w-eyebrow" style={{ marginBottom: 0 }}>Optional — earn the Wilson Co. Certified badge</p>
            {earnsCertified && <span className="w-badge w-badge-gold">Certified ✓</span>}
          </div>
          <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 10, lineHeight: 1.6 }}>
            Companies that complete all 6 earn a Certified badge on their profile. Members can see this and prioritize certified companies when choosing whether to accept an introduction.
          </div>
          <div className="w-card" style={{ padding: '0 20px', marginBottom: 14 }}>
            {OPTIONAL_COMMITMENTS.map(c => (
              <div key={c.id} className="w-audit-item">
                <div
                  className={`w-audit-check${checked[c.id] ? ' checked' : ''}`}
                  onClick={() => toggleCheck(c.id)}
                >
                  {checked[c.id] ? '✓' : ''}
                </div>
                <div style={{ flex: 1 }}>
                  <div className="w-audit-label">
                    {c.label}
                    <span className="w-audit-tag w-tag-opt">encouraged</span>
                  </div>
                  <div className="w-audit-desc">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-btn-row">
            <button className="w-btn w-btn-outline" onClick={() => goAuditStep(1)}>← Back</button>
            <button
              className="w-btn w-btn-oak"
              onClick={() => goAuditStep(3)}
              disabled={!canContinue}
              style={{ opacity: canContinue ? 1 : 0.4 }}
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Step 3 — The role */}
      {auditStep === 3 && (
        <div>
          <p className="w-eyebrow" style={{ marginBottom: 10 }}>Step 3 of 3 — The role</p>
          <h2 className="w-display" style={{ fontSize: 24, marginBottom: 8 }}>What are you <em>actually</em> hiring for?</h2>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 22 }}>
            Be specific. Our members can tell the difference between a real role and a spec. Vague opportunities don&apos;t surface well.
          </p>
          <div className="w-grid-2">
            <div className="w-field">
              <label className="w-field-label">Role title</label>
              <input className="w-field-input" placeholder="e.g. Head of Operations" value={roleTitle} onChange={e => setRoleTitle(e.target.value)} />
            </div>
            <div className="w-field">
              <label className="w-field-label">Comp range (base) — per your commitment above</label>
              <input className="w-field-input" placeholder="e.g. $210,000 – $240,000" value={comp} onChange={e => setComp(e.target.value)} />
            </div>
          </div>
          <div className="w-field">
            <label className="w-field-label">Location / remote policy</label>
            <PillSelector options={LOCATION_OPTIONS} selected={locations} onChange={setLocations} />
          </div>
          <div className="w-field" style={{ marginTop: 14 }}>
            <label className="w-field-label">What does success look like in 12 months?</label>
            <textarea
              className="w-field-input"
              rows={2}
              placeholder="What would this person have built, changed, or owned?"
              value={success12}
              onChange={e => setSuccess12(e.target.value)}
            />
          </div>
          <div className="w-field">
            <label className="w-field-label">Why is this role open?</label>
            <textarea
              className="w-field-input"
              rows={2}
              placeholder="Growth, new function, backfill? Be direct — members will ask."
              value={whyOpen}
              onChange={e => setWhyOpen(e.target.value)}
            />
          </div>
          <div className="w-btn-row">
            <button className="w-btn w-btn-outline" onClick={() => goAuditStep(2)}>← Back</button>
            <button
              className="w-btn w-btn-denim"
              onClick={() => setStage('approved')}
              disabled={!roleTitle || !comp || !success12 || !whyOpen}
              style={{ opacity: (!roleTitle || !comp || !success12 || !whyOpen) ? 0.4 : 1 }}
            >
              Submit for review →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
