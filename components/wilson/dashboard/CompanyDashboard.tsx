'use client'

import { useState } from 'react'
import Link from 'next/link'

type Tab = 'home' | 'browse' | 'pipeline' | 'companyprofile'

const COMPANY = {
  name: 'Ridgeline Capital Partners',
  initials: 'RC',
  contact: 'Michael Torres',
  contactTitle: 'Chief of Staff',
  stage: 'PE-backed',
  size: '50–150',
  certified: true,
  role: 'Head of Operations',
  comp: '$215,000 – $245,000',
  location: 'Nashville (hybrid)',
  pitch: 'We back and build founder-led businesses across financial services and professional services. Currently managing 8 portfolio companies across the Southeast. We\'re not a large bureaucracy — every senior hire has direct access to the Managing Partners and real ownership over their function.',
  process: '3 rounds: Intro call with Chief of Staff (30 min) → Working session with CEO and CFO (90 min) → Final conversation with Managing Partners. Timeline: decision or update within 5 business days of each round.',
  success12: 'This person has built or rebuilt the ops infrastructure across at least 3 of our portfolio companies — common systems, reporting cadence, operator playbooks, and a framework for how we evaluate and improve each portco\'s ops maturity.',
  whyOpen: 'Growth — we\'ve added 3 new portfolio companies in 18 months and our current ops capacity is strained. This is a new function, not a backfill.',
}

const COMMITMENTS = [
  { label: 'Comp transparency',        desc: 'Full base, bonus, and equity shared before the first conversation.' },
  { label: 'Defined interview process', desc: 'Written process shared before step one. Changes after sharing trigger re-audit.' },
  { label: '5-day response SLA',        desc: 'Every candidate who advances receives a decision or update within 5 business days.' },
  { label: 'Role accuracy',             desc: 'Role description matches the actual job — scope, reporting, budget authority.' },
  { label: 'Debrief to all finalists',  desc: 'Final-round candidates are offered a debrief if they want one.' },
  { label: 'Annual re-audit',           desc: 'Agreed to in writing. Keeps the network accountable over time.' },
]

const BROWSE_MEMBERS = [
  { id: 1, label: 'Ops/Strategy · PE-backed exp.',       years: '11 yrs', geo: 'Nashville', fit: 92, requested: false },
  { id: 2, label: 'COO track · Founder-led exp.',        years: '8 yrs',  geo: 'Nashville / Remote', fit: 87, requested: true },
  { id: 3, label: 'General Management · Growth-stage',   years: '9 yrs',  geo: 'Remote w/ travel', fit: 81, requested: true },
  { id: 4, label: 'Ops/Finance · Big 4 background',      years: '7 yrs',  geo: 'Nashville', fit: 74, requested: false },
  { id: 5, label: 'Strategy / BizDev · PE portfolio exp.', years: '6 yrs', geo: 'Open to relocation', fit: 68, requested: false },
]

const PIPELINE = [
  {
    col: 'Intro Requested',
    cards: [
      { initials: 'AT', color: '#2E4E61', name: 'A.T.', sub: 'Ops/Strategy · 8 yrs', note: 'Requested May 9 — awaiting member response.' },
      { initials: 'JM', color: '#4a5630', name: 'J.M.', sub: 'COO background · 11 yrs', note: 'Requested May 8 — awaiting member response.' },
    ],
  },
  {
    col: 'Intro Accepted',
    cards: [
      { initials: 'MW', color: '#5D6B3D', name: 'M.W.', sub: 'Head of Ops · 9 yrs', note: 'Intro sent May 7. Waiting for intro call to be scheduled.' },
    ],
  },
  {
    col: 'In Process',
    cards: [
      { initials: 'RK', color: '#7a6020', name: 'R.K.', sub: 'Former COO · 14 yrs', note: 'Round 2 of 3 — working session scheduled May 12.' },
    ],
  },
  {
    col: 'Closed',
    cards: [
      { initials: 'SL', color: '#8a8880', name: 'S.L.', sub: 'Ops/Strategy · 6 yrs', note: 'Passed — timeline mismatch. Member needed 60-day start.', passed: true },
    ],
  },
]

const ACTIVITY = [
  { date: 'Today',  text: 'M.W. accepted your intro request.' },
  { date: 'May 9',  text: 'Intro requested for A.T. — awaiting member response.' },
  { date: 'May 8',  text: 'Intro requested for J.M. — awaiting member response.' },
  { date: 'May 8',  text: 'R.K. advanced to Round 2. Working session scheduled.' },
  { date: 'May 6',  text: 'S.L. passed — timeline mismatch noted in profile.' },
]

export default function CompanyDashboard() {
  const [tab, setTab] = useState<Tab>('home')
  const [introRequested, setIntroRequested] = useState<number[]>([2, 3])

  const requestIntro = (id: number) => setIntroRequested(prev => [...prev, id])

  const navItems: { id: Tab; label: string; icon: string }[] = [
    { id: 'home',           label: 'Overview',        icon: '⌂' },
    { id: 'browse',         label: 'Browse Collective', icon: '◈' },
    { id: 'pipeline',       label: 'Pipeline',         icon: '◉' },
    { id: 'companyprofile', label: 'Company Profile',  icon: '◎' },
  ]

  const tabTitles: Record<Tab, string> = {
    home:           'Overview',
    browse:         'Browse Collective',
    pipeline:       'Hiring Pipeline',
    companyprofile: 'Company Profile',
  }

  // ── Home ──────────────────────────────────────────────────────────────────

  function renderHome() {
    return (
      <div className="w-fade-in">
        {/* Certified banner */}
        {COMPANY.certified && (
          <div className="w-card w-card-oak" style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ fontSize: 20, color: 'var(--oak)' }}>✓</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--oak)', marginBottom: 2 }}>Wilson Co. Certified</div>
              <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)' }}>
                All 6 commitments on record. Members can see this badge when your opportunity is surfaced to them.
              </div>
            </div>
            <span className="w-badge w-badge-gold">Certified ✓</span>
          </div>
        )}

        {/* Stats */}
        <div className="w-stat-grid">
          <div className="w-stat-box">
            <div className="w-stat-value">5</div>
            <div className="w-stat-label">Members surfaced</div>
          </div>
          <div className="w-stat-box">
            <div className="w-stat-value" style={{ color: 'var(--denim)' }}>4</div>
            <div className="w-stat-label">Intros requested</div>
          </div>
          <div className="w-stat-box">
            <div className="w-stat-value" style={{ color: 'var(--oak)' }}>2</div>
            <div className="w-stat-label">Intros accepted</div>
          </div>
          <div className="w-stat-box">
            <div className="w-stat-value">1</div>
            <div className="w-stat-label">In process</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {/* Active role */}
          <div>
            <div className="w-eyebrow" style={{ marginBottom: 10 }}>Active role</div>
            <div className="w-card">
              <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--w-black)', marginBottom: 6 }}>{COMPANY.role}</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const, marginBottom: 10 }}>
                <span className="w-badge w-badge-beige">{COMPANY.comp}</span>
                <span className="w-badge w-badge-beige">{COMPANY.location}</span>
                <span className="w-badge w-badge-beige">{COMPANY.stage}</span>
              </div>
              <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.6, marginBottom: 12 }}>
                {COMPANY.whyOpen}
              </div>
              <button className="w-btn w-btn-oak" style={{ fontSize: 10, padding: '5px 14px' }} onClick={() => setTab('browse')}>
                Browse collective →
              </button>
            </div>
          </div>

          {/* Activity */}
          <div>
            <div className="w-eyebrow" style={{ marginBottom: 10 }}>Activity</div>
            <div className="w-card">
              {ACTIVITY.map((a, i) => (
                <div key={i} className="w-activity-item">
                  <div className="w-activity-dot" />
                  <div className="w-activity-date">{a.date}</div>
                  <div className="w-activity-text">{a.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pipeline preview */}
        <div style={{ marginTop: 14 }}>
          <div className="w-eyebrow" style={{ marginBottom: 10 }}>Pipeline snapshot</div>
          <div className="w-card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            {PIPELINE.map(col => (
              <div key={col.col} style={{ flex: 1 }}>
                <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
                  {col.col}
                  <span style={{ background: 'var(--beige-mid)', padding: '1px 5px', borderRadius: 8, color: 'var(--ink-3)' }}>{col.cards.length}</span>
                </div>
                {col.cards.map((c, i) => (
                  <div key={i} style={{ background: 'var(--beige-mid)', borderRadius: 'var(--w-radius-sm)', padding: '7px 9px', marginBottom: 5 }}>
                    <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--w-black)' }}>{c.name}</div>
                    <div style={{ fontSize: 9, fontWeight: 300, color: 'var(--ink-3)' }}>{c.sub}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ── Browse ────────────────────────────────────────────────────────────────

  function renderBrowse() {
    return (
      <div className="w-fade-in">
        <div className="w-card w-card-beige" style={{ marginBottom: 14, fontSize: 12, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.65 }}>
          Members are shown anonymized until they accept your intro request. Profiles are matched to your active role.
          Nothing is shared with a member without their consent.
        </div>

        {BROWSE_MEMBERS.map(m => {
          const requested = introRequested.includes(m.id)
          return (
            <div key={m.id} className="w-member-browse-card">
              <div className="w-dash-avatar" style={{ width: 40, height: 40, fontSize: 14, background: 'var(--beige-dark)', color: 'var(--ink-3)', flexShrink: 0 }}>?</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--w-black)', marginBottom: 2 }}>{m.label}</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const }}>
                  <span className="w-badge w-badge-beige">{m.years}</span>
                  <span className="w-badge w-badge-beige">{m.geo}</span>
                </div>
              </div>
              <div style={{ textAlign: 'right' as const, flexShrink: 0 }}>
                <div style={{ fontSize: 16, fontWeight: 500, color: 'var(--oak)', lineHeight: 1 }}>{m.fit}%</div>
                <div style={{ fontSize: 8, color: 'var(--ink-3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Fit</div>
              </div>
              <div style={{ flexShrink: 0 }}>
                {requested ? (
                  <span className="w-badge w-badge-beige" style={{ padding: '5px 12px' }}>Requested</span>
                ) : (
                  <button className="w-btn w-btn-denim" style={{ fontSize: 10, padding: '6px 14px' }} onClick={() => requestIntro(m.id)}>
                    Request intro
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  // ── Pipeline ──────────────────────────────────────────────────────────────

  function renderPipeline() {
    return (
      <div className="w-fade-in">
        <div className="w-card w-card-beige" style={{ marginBottom: 14, fontSize: 12, fontWeight: 300, color: 'var(--ink-3)' }}>
          Candidates are added to the pipeline when a member accepts an intro request.
        </div>
        <div className="w-kanban">
          {PIPELINE.map(col => (
            <div key={col.col} className="w-kanban-col">
              <div className="w-kanban-col-header">
                {col.col}
                <span className="w-kanban-count">{col.cards.length}</span>
              </div>
              {col.cards.map((c, i) => (
                <div key={i} className="w-kanban-card" style={{ opacity: ('passed' in c && c.passed) ? 0.55 : 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <div className="w-dash-avatar" style={{ width: 26, height: 26, fontSize: 10, background: c.color }}>
                      {c.initials}
                    </div>
                    <div>
                      <div className="w-kanban-card-name">{c.name}</div>
                      <div className="w-kanban-card-sub">{c.sub}</div>
                    </div>
                  </div>
                  <div className="w-kanban-card-note">{c.note}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  // ── Company Profile ───────────────────────────────────────────────────────

  function renderCompanyProfile() {
    return (
      <div className="w-fade-in">
        {/* Header */}
        <div className="w-card" style={{ marginBottom: 14, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div className="w-dash-avatar" style={{ width: 46, height: 46, fontSize: 15, background: 'var(--oak)', flexShrink: 0 }}>RC</div>
          <div style={{ flex: 1 }}>
            <div className="w-profile-name">{COMPANY.name}</div>
            <div className="w-profile-title">{COMPANY.stage} · {COMPANY.size} employees</div>
          </div>
          {COMPANY.certified && <span className="w-badge w-badge-gold">Wilson Co. Certified ✓</span>}
        </div>

        {/* Company pitch */}
        <div className="w-card" style={{ marginBottom: 12 }}>
          <div className="w-eyebrow" style={{ marginBottom: 10, paddingBottom: 8, borderBottom: '1px solid var(--w-border-light)' }}>About the company</div>
          <div style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.7 }}>{COMPANY.pitch}</div>
        </div>

        {/* Commitments */}
        <div className="w-card" style={{ marginBottom: 12 }}>
          <div className="w-flex-between" style={{ marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid var(--w-border-light)' }}>
            <div className="w-eyebrow">Commitments on record ({COMMITMENTS.length} of 6)</div>
            <span className="w-badge w-badge-gold">Certified ✓</span>
          </div>
          {COMMITMENTS.map((c, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, padding: '9px 0', borderBottom: i < COMMITMENTS.length - 1 ? '1px solid var(--w-border-light)' : 'none' }}>
              <div style={{ color: 'var(--oak)', fontSize: 12, flexShrink: 0, marginTop: 1 }}>✓</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--w-black)', marginBottom: 2 }}>{c.label}</div>
                <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)' }}>{c.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Active role */}
        <div className="w-card" style={{ marginBottom: 12 }}>
          <div className="w-eyebrow" style={{ marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid var(--w-border-light)' }}>Active role</div>
          <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--w-black)', marginBottom: 8 }}>{COMPANY.role}</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const, marginBottom: 14 }}>
            <span className="w-badge w-badge-beige">{COMPANY.comp}</span>
            <span className="w-badge w-badge-beige">{COMPANY.location}</span>
            <span className="w-badge w-badge-beige">{COMPANY.stage}</span>
          </div>

          {[
            { label: 'Why this role is open', value: COMPANY.whyOpen },
            { label: 'What success looks like in 12 months', value: COMPANY.success12 },
            { label: 'Interview process', value: COMPANY.process },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.65 }}>{item.value}</div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)', textAlign: 'center' as const }}>
          To edit your role or company profile, contact the Wilson Co. team.
        </div>
      </div>
    )
  }

  const renderTab = { home: renderHome, browse: renderBrowse, pipeline: renderPipeline, companyprofile: renderCompanyProfile }

  return (
    <div className="w-dash-layout">
      {/* Sidebar */}
      <aside className="w-dash-sidebar">
        <div className="w-dash-sidebar-logo">
          <div className="w-dash-sidebar-logo-main">The Wilson Co.</div>
          <div className="w-dash-sidebar-logo-sub">Company Portal</div>
        </div>
        <nav className="w-dash-nav">
          {navItems.map(item => (
            <button key={item.id} className={`w-dash-nav-item${tab === item.id ? ' active' : ''}`} onClick={() => setTab(item.id)}>
              <span style={{ fontSize: 13, width: 16, textAlign: 'center' as const }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="w-dash-sidebar-user">
          <div className="w-dash-avatar" style={{ background: 'var(--oak)' }}>RC</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.75)', lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>
              {COMPANY.contact}
            </div>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.28)', lineHeight: 1.2 }}>{COMPANY.contactTitle}</div>
          </div>
          <Link href="/login" style={{ fontSize: 10, color: 'rgba(255,255,255,0.22)', textDecoration: 'none' }}>Out</Link>
        </div>
      </aside>

      {/* Main */}
      <div className="w-dash-main">
        <div className="w-dash-topbar">
          <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--w-black)' }}>{tabTitles[tab]}</div>
          <div className="w-flex-start" style={{ gap: 8 }}>
            {COMPANY.certified && <span className="w-badge w-badge-gold">Certified ✓</span>}
            <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)' }}>{COMPANY.name}</div>
          </div>
        </div>
        <div className="w-dash-content">
          {renderTab[tab]()}
        </div>
      </div>
    </div>
  )
}
