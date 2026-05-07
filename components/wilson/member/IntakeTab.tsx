'use client'

import { useState } from 'react'

type VisibilityOption = 'dark' | 'selective' | 'active'

interface IntakeTabProps {
  onComplete: () => void
}

// ── Option sets from the intake document ──────────────────────────────────

const SITUATION_OPTIONS = [
  'Employed, not looking, but open to the right thing',
  'Employed and actively exploring options',
  'Between roles and actively searching',
  'Recently transitioned and still figuring out next steps',
]

const VERTICAL_OPTIONS = [
  'Financial services (RIA, wirehouse, broker-dealer, fintech, wealth management)',
  'Big Law (associate, counsel, or partner at an Am Law firm)',
  'Private equity or investment banking',
  'Corporate law (in-house)',
  'Marketing, communications, or creative leadership',
  'Recruiting, HR, or people operations',
  'Operations, strategy, or general management',
  'Other — please describe',
]

const ROLE_OPTIONS = [
  'Chief of Staff',
  'Head of Operations / COO',
  'General Counsel / Head of Legal',
  'Chief People Officer / VP People',
  'Head of Compliance',
  'Chief Marketing Officer / VP Marketing',
  'Head of Talent / Director of Recruiting',
  'Founder / Operator',
  'Other — I\'ll describe below',
]

const COMP_OPTIONS = [
  '$150,000–175,000',
  '$175,000–200,000',
  '$200,000–225,000',
  '$225,000–250,000',
  '$250,000–300,000',
  '$300,000+',
]

const GEO_OPTIONS = [
  'New York City (on-site or hybrid)',
  'Nashville (on-site or hybrid)',
  'Remote — willing to travel occasionally',
  'Remote — no travel',
  'Open to relocation for the right role',
  'Other — I\'ll describe',
]

const YEARS_OPTIONS = ['3–5 years', '6–10 years', '11–15 years', '16+ years']

const VISIBILITY_OPTIONS = [
  {
    id: 'dark' as VisibilityOption,
    badge: 'w-badge-black',
    label: 'Dark',
    title: 'Building clarity only',
    desc: 'Profile complete but invisible. No companies can see you. Use this time to get clear on what you want.',
  },
  {
    id: 'selective' as VisibilityOption,
    badge: 'w-badge-oak',
    label: 'Selective',
    title: 'Open to the right thing',
    desc: 'Visible only to companies matching your goals profile. You approve every introduction before anything moves.',
  },
  {
    id: 'active' as VisibilityOption,
    badge: 'w-badge-denim',
    label: 'Active',
    title: 'Ready to explore',
    desc: 'Broader visibility to vetted, audited companies. Still opt-in for every conversation — no direct contact ever.',
  },
]

// ── Reusable components ───────────────────────────────────────────────────

function MultiPills({ options, selected, onChange }: {
  options: string[]
  selected: string[]
  onChange: (v: string[]) => void
}) {
  const toggle = (opt: string) =>
    onChange(selected.includes(opt) ? selected.filter(s => s !== opt) : [...selected, opt])
  return (
    <div className="w-pill-group" style={{ marginTop: 8 }}>
      {options.map(opt => (
        <button
          key={opt}
          type="button"
          className={`w-pill${selected.includes(opt) ? ' on' : ''}`}
          onClick={() => toggle(opt)}
          style={{ fontSize: 11, lineHeight: 1.4, height: 'auto', whiteSpace: 'normal', textAlign: 'left' }}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

function SingleSelect({ options, value, onChange }: {
  options: string[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="w-pill-group" style={{ marginTop: 8 }}>
      {options.map(opt => (
        <button
          key={opt}
          type="button"
          className={`w-pill${value === opt ? ' on' : ''}`}
          onClick={() => onChange(opt)}
          style={{ fontSize: 11, lineHeight: 1.4, height: 'auto', whiteSpace: 'normal', textAlign: 'left' }}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────

export default function IntakeTab({ onComplete }: IntakeTabProps) {
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  // Section 1 — Who you are
  const [name, setName]       = useState('')
  const [title, setTitle]     = useState('')
  const [company, setCompany] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [years, setYears]     = useState('')
  const [situation, setSituation] = useState('')
  const [verticals, setVerticals] = useState<string[]>([])

  // Section 2 — What you want next
  const [roles, setRoles]         = useState<string[]>([])
  const [idealRole, setIdealRole] = useState('')
  const [walkAway, setWalkAway]   = useState('')
  const [compFloor, setCompFloor] = useState('')
  const [geos, setGeos]           = useState<string[]>([])

  // Section 3 — What you've outgrown
  const [doneWith, setDoneWith]       = useState('')
  const [badCulture, setBadCulture]   = useState('')
  const [constraints, setConstraints] = useState('')

  // Section 4 — The final question + visibility
  const [hesitation, setHesitation]   = useState('')
  const [visibility, setVisibility]   = useState<VisibilityOption>('dark')

  const goStep = (n: number) => {
    setStep(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, title, company, linkedin, years, situation, verticals,
          roles, idealRole, walkAway, compFloor, geos,
          doneWith, badCulture, constraints,
          hesitation, visibility,
        }),
      })
      if (!res.ok) throw new Error('Failed')
      onComplete()
    } catch {
      setError('Something went wrong — please try again or email us directly.')
      setSubmitting(false)
    }
  }

  const stepLabels = ['Who you are', 'What you want', 'What you\'ve outgrown', 'Final question']

  return (
    <div className="w-fade-in">

      {/* Intro banner — only on step 1 */}
      {step === 1 && (
        <div className="w-quote-block" style={{ marginBottom: 24, borderLeftColor: 'var(--denim)' }}>
          <div className="w-quote-text" style={{ fontStyle: 'normal', fontSize: 12, lineHeight: 1.75 }}>
            The Wilson Co. Collective is a private network for senior leaders who are selectively open to the right opportunity. Membership is by application only. This form helps us understand who you are and what you&apos;re looking for before we offer a clarity conversation. <strong>There are no right answers — just honest ones.</strong>
          </div>
        </div>
      )}

      {/* Step progress */}
      <div className="w-step-bar">
        {[1, 2, 3, 4].map(n => (
          <div key={n} className={`w-step-pip${n < step ? ' done' : n === step ? ' active' : ''}`} />
        ))}
      </div>
      <p className="w-eyebrow" style={{ marginBottom: 10 }}>
        Step {step} of 4 — {stepLabels[step - 1]}
      </p>

      {/* ── STEP 1: WHO YOU ARE ─────────────────────────────────────────── */}
      {step === 1 && (
        <div>
          <h2 className="w-display" style={{ fontSize: 26, marginBottom: 8 }}>Let&apos;s start with <em>you.</em></h2>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 24 }}>
            Not your resume. Not your LinkedIn. Just the fundamentals — in your words.
          </p>

          <div className="w-grid-2">
            <div className="w-field">
              <label className="w-field-label">Full name</label>
              <input className="w-field-input" placeholder="First Last" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="w-field">
              <label className="w-field-label">Current title</label>
              <input className="w-field-input" placeholder="e.g. Director of Recruiting" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="w-field">
              <label className="w-field-label">Current company</label>
              <input className="w-field-input" placeholder="Company name" value={company} onChange={e => setCompany(e.target.value)} />
            </div>
            <div className="w-field">
              <label className="w-field-label">LinkedIn profile URL <span style={{ color: 'var(--oak)' }}>*</span></label>
              <input className="w-field-input" placeholder="linkedin.com/in/yourname" value={linkedin} onChange={e => setLinkedin(e.target.value)} />
              <div style={{ fontSize: 10, color: 'var(--ink-3)', marginTop: 4, fontWeight: 300 }}>
                We cross-reference your form against your LinkedIn before deciding whether to offer a clarity call.
              </div>
            </div>
          </div>

          <div className="w-field" style={{ marginTop: 4 }}>
            <label className="w-field-label">Years in a leadership or senior individual contributor role</label>
            <SingleSelect options={YEARS_OPTIONS} value={years} onChange={setYears} />
            <div style={{ fontSize: 10, color: 'var(--ink-3)', marginTop: 6, fontWeight: 300 }}>
              Minimum threshold is 6 years. Under 5 years is rarely a fit for the collective at this stage.
            </div>
          </div>

          <div className="w-field" style={{ marginTop: 14 }}>
            <label className="w-field-label">Which best describes your current situation?</label>
            <SingleSelect options={SITUATION_OPTIONS} value={situation} onChange={setSituation} />
          </div>

          <div className="w-field" style={{ marginTop: 14 }}>
            <label className="w-field-label">Which vertical best describes your background? <span style={{ color: 'var(--ink-3)', fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>Select all that apply</span></label>
            <MultiPills options={VERTICAL_OPTIONS} selected={verticals} onChange={setVerticals} />
            <div style={{ fontSize: 10, color: 'var(--ink-3)', marginTop: 6, fontWeight: 300 }}>
              We use this to understand where to place you and who to surface you to on the company side.
            </div>
          </div>

          <div className="w-btn-row">
            <button
              className="w-btn w-btn-oak"
              onClick={() => goStep(2)}
              disabled={!name || !linkedin || !years || !situation || verticals.length === 0}
              style={{ opacity: (!name || !linkedin || !years || !situation || verticals.length === 0) ? 0.4 : 1 }}
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 2: WHAT YOU WANT NEXT ──────────────────────────────────── */}
      {step === 2 && (
        <div>
          <h2 className="w-display" style={{ fontSize: 26, marginBottom: 8 }}>What does <em>next</em> look like?</h2>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 24 }}>
            Your goals profile — not a job description. Be honest. No one sees this without your permission.
          </p>

          <div className="w-field">
            <label className="w-field-label">What types of roles are you open to? Select all that genuinely apply.</label>
            <MultiPills options={ROLE_OPTIONS} selected={roles} onChange={setRoles} />
            <div style={{ fontSize: 10, color: 'var(--ink-3)', marginTop: 6, fontWeight: 300 }}>
              We use this directly in matching. Do not check boxes to appear more flexible — it creates bad matches.
            </div>
          </div>

          <div className="w-field" style={{ marginTop: 18 }}>
            <label className="w-field-label">In your own words: what does your ideal next role look like? Not the company — the actual work.</label>
            <textarea
              className="w-field-input"
              rows={4}
              placeholder="Be specific. What would you be doing day-to-day? What decisions would you own? What problems would you solve?"
              value={idealRole}
              onChange={e => setIdealRole(e.target.value)}
            />
            <div style={{ fontSize: 10, color: 'var(--ink-3)', marginTop: 4, fontWeight: 300 }}>
              This is the most important question on the form. We are looking for specificity and self-awareness. Vague answers are a signal.
            </div>
          </div>

          <div className="w-field" style={{ marginTop: 18 }}>
            <label className="w-field-label">What would you walk away from a bigger title or more compensation to get?</label>
            <textarea
              className="w-field-input"
              rows={3}
              placeholder="This question separates people who have done the thinking from people who haven't. Strong answers are specific."
              value={walkAway}
              onChange={e => setWalkAway(e.target.value)}
            />
          </div>

          <div className="w-field" style={{ marginTop: 18 }}>
            <label className="w-field-label">Approximate compensation floor (base salary)</label>
            <SingleSelect options={COMP_OPTIONS} value={compFloor} onChange={setCompFloor} />
            <div style={{ fontSize: 10, color: 'var(--ink-3)', marginTop: 6, fontWeight: 300 }}>
              We use this as a hard filter. If a role does not meet your floor, we will not surface it to you.
            </div>
          </div>

          <div className="w-field" style={{ marginTop: 18 }}>
            <label className="w-field-label">What geography are you open to? Select all that apply.</label>
            <MultiPills options={GEO_OPTIONS} selected={geos} onChange={setGeos} />
            <div style={{ fontSize: 10, color: 'var(--ink-3)', marginTop: 6, fontWeight: 300 }}>
              Another hard filter. We will not surface roles that conflict with your location requirements.
            </div>
          </div>

          <div className="w-btn-row">
            <button className="w-btn w-btn-outline" onClick={() => goStep(1)}>← Back</button>
            <button
              className="w-btn w-btn-oak"
              onClick={() => goStep(3)}
              disabled={roles.length === 0 || !idealRole || !walkAway || !compFloor || geos.length === 0}
              style={{ opacity: (roles.length === 0 || !idealRole || !walkAway || !compFloor || geos.length === 0) ? 0.4 : 1 }}
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 3: WHAT YOU'VE OUTGROWN ────────────────────────────────── */}
      {step === 3 && (
        <div>
          <h2 className="w-display" style={{ fontSize: 26, marginBottom: 8 }}>What are you <em>done with?</em></h2>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 24 }}>
            This is how we protect your time. We won&apos;t surface opportunities that repeat what you&apos;re leaving behind.
          </p>

          <div className="w-field">
            <label className="w-field-label">What type of work are you done with, even if you are still good at it?</label>
            <textarea
              className="w-field-input"
              rows={4}
              placeholder="Be specific. If a role would require you to do this, it will not surface to you."
              value={doneWith}
              onChange={e => setDoneWith(e.target.value)}
            />
          </div>

          <div className="w-field" style={{ marginTop: 18 }}>
            <label className="w-field-label">Describe a culture or work environment that you know is not a fit for you.</label>
            <textarea
              className="w-field-input"
              rows={4}
              placeholder="Helps us screen company profiles against your preferences before we ever surface a role."
              value={badCulture}
              onChange={e => setBadCulture(e.target.value)}
            />
          </div>

          <div className="w-field" style={{ marginTop: 18 }}>
            <label className="w-field-label">
              Is there anything specific about your situation — timing, constraints, circumstances — that you want us to know?
              <span style={{ color: 'var(--ink-3)', fontWeight: 300, textTransform: 'none', letterSpacing: 0, marginLeft: 4 }}>Optional</span>
            </label>
            <textarea
              className="w-field-input"
              rows={3}
              placeholder="This is a safe space. We have heard everything."
              value={constraints}
              onChange={e => setConstraints(e.target.value)}
            />
          </div>

          <div className="w-btn-row">
            <button className="w-btn w-btn-outline" onClick={() => goStep(2)}>← Back</button>
            <button
              className="w-btn w-btn-oak"
              onClick={() => goStep(4)}
              disabled={!doneWith || !badCulture}
              style={{ opacity: (!doneWith || !badCulture) ? 0.4 : 1 }}
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 4: THE FINAL QUESTION + VISIBILITY ─────────────────────── */}
      {step === 4 && (
        <div>
          <h2 className="w-display" style={{ fontSize: 26, marginBottom: 8 }}>One <em>last thing.</em></h2>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 24 }}>
            Then you set how visible you want to be — and you&apos;re done.
          </p>

          <div className="w-field">
            <label className="w-field-label">
              If the perfect role existed in our network right now — one that matched everything you just described — what would make you hesitate to pursue it?
            </label>
            <textarea
              className="w-field-input"
              rows={4}
              placeholder={`People who answer honestly and specifically tend to be the most self-aware and easiest to place well. "Nothing, I would just go for it" is rarely the true answer.`}
              value={hesitation}
              onChange={e => setHesitation(e.target.value)}
            />
            <div style={{ fontSize: 10, color: 'var(--ink-3)', marginTop: 4, fontWeight: 300 }}>
              This is our internal clarity check. There are no wrong answers here — only honest ones.
            </div>
          </div>

          <div style={{ marginTop: 28, marginBottom: 6 }}>
            <p className="w-eyebrow" style={{ marginBottom: 10 }}>Set your visibility</p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 16 }}>
              Start where you&apos;re comfortable. Change this anytime — nothing moves without your consent.
            </p>
            <div className="w-stack">
              {VISIBILITY_OPTIONS.map(opt => (
                <div
                  key={opt.id}
                  className="w-card"
                  style={{ cursor: 'pointer', border: visibility === opt.id ? '2px solid var(--oak)' : '1px solid var(--w-border)' }}
                  onClick={() => setVisibility(opt.id)}
                >
                  <div className="w-flex-between" style={{ marginBottom: 7 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span className={`w-badge ${opt.badge}`}>{opt.label}</span>
                      <span style={{ fontSize: 13, fontWeight: 500 }}>{opt.title}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.7 }}>{opt.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {error && <p style={{ color: 'red', fontSize: 12, marginTop: 12 }}>{error}</p>}

          <div className="w-btn-row">
            <button className="w-btn w-btn-outline" onClick={() => goStep(3)}>← Back</button>
            <button
              className="w-btn w-btn-oak"
              onClick={handleSubmit}
              disabled={submitting || !hesitation}
              style={{ opacity: (!hesitation || submitting) ? 0.4 : 1 }}
            >
              {submitting ? 'Submitting...' : 'Complete my application →'}
            </button>
          </div>

          {/* Outro text */}
          <div className="w-quote-block" style={{ marginTop: 24, borderLeftColor: 'var(--denim)' }}>
            <div className="w-quote-text" style={{ fontStyle: 'normal', fontSize: 12, lineHeight: 1.75 }}>
              Thank you. We review every application personally and typically respond within 3–5 business days. If your application is a strong fit, we will reach out to schedule a clarity conversation. This conversation is not a job interview — it is a real conversation about what you want and whether The Wilson Co. Collective is the right place for you right now.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
