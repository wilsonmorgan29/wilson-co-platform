'use client'

import { useState } from 'react'
import Link from 'next/link'

type Tab = 'home' | 'profile' | 'matches' | 'visibility' | 'messages'
type MatchFilter = 'all' | 'pending' | 'accepted' | 'passed'
type VisMode = 'Dark' | 'Selective' | 'Active'

interface Match {
  id: number
  role: string
  fit: number
  company?: string
  anonymized?: string
  stage?: string
  size?: string
  location?: string
  comp?: string
  vertical?: string
  whyOpen?: string
  process?: string
}

const SARAH = {
  name: 'Sarah Chen',
  initials: 'SC',
  title: 'General Counsel',
  company: 'Meridian Capital Group',
  years: '11–15 years',
  situation: 'Actively exploring — open to the right conversation',
  verticals: ['Financial services', 'PE / IB', 'Corporate law'],
  roles: ['GC / Head of Legal', 'Head of Compliance', 'Chief of Staff'],
  compFloor: '$250,000 – $275,000',
  geos: ['Nashville', 'Remote w/ travel', 'Open to relocation'],
  idealRole: 'A principal-level legal leadership role at a PE-backed or growth-stage company where I can build the function from a strong foundation — not inherit a bureaucracy. I want to be at the table for strategic decisions, not downstream of them.',
  walkAway: 'Autonomy and genuine influence over company direction. I\'ve had the title without the seat. I won\'t do that again.',
  doneWith: 'Managing outside counsel full-time on transactions I\'m not involved in shaping. Compliance-only roles. Legal departments that report through finance.',
  badCulture: 'Consensus-by-committee cultures where legal is a last stop rather than a first call. Founders who hired a GC to have someone to blame.',
  hesitation: 'Honestly, leaving a network I\'ve spent 14 years building at Meridian. And the equity I\'m walking away from. But I know what I want the next chapter to look like.',
  profileComplete: 92,
}

const MATCHES: Match[] = [
  {
    id: 1,
    company: 'Ridgeline Capital Partners',
    role: 'VP of Legal & Compliance',
    stage: 'PE-backed',
    size: '50–150',
    location: 'Nashville (hybrid)',
    comp: '$255,000 – $285,000',
    fit: 94,
    whyOpen: 'First dedicated legal hire as portfolio grows to 8 companies — building the function from scratch.',
    process: '3 rounds: Intro call (30 min) → Working session with CEO & CFO → Final with Managing Partners.',
  },
  {
    id: 2,
    anonymized: 'PE-backed portfolio co. · Nashville / Remote',
    role: 'General Counsel',
    vertical: 'Financial services / Fintech',
    location: 'Nashville or Remote',
    comp: '$240,000 – $270,000',
    fit: 91,
    whyOpen: 'Scaling from Series B to exit — needs legal leadership through a transaction.',
  },
  {
    id: 3,
    anonymized: 'Founder-led growth co. · Remote-first',
    role: 'Head of Legal & Risk',
    vertical: 'Professional services',
    location: 'Remote w/ quarterly travel',
    comp: '$230,000 – $260,000',
    fit: 84,
    whyOpen: 'Replacing departing CLO. Board-reported role.',
  },
  {
    id: 4,
    anonymized: 'Series B SaaS · NYC',
    role: 'VP of Legal',
    fit: 72,
  },
]

const ACTIVITY = [
  { date: 'Today',  text: 'Ridgeline Capital Partners accepted your intro request.' },
  { date: 'May 8',  text: '2 new opportunities matched to your profile.' },
  { date: 'May 6',  text: 'Profile visibility updated to Selective.' },
  { date: 'May 5',  text: 'Application reviewed and approved. Welcome to the collective.' },
]

const MESSAGES = [
  {
    id: 1,
    from: 'Wilson Co. Team',
    initials: 'WC',
    preview: 'Ridgeline accepted your intro — here\'s what to expect next.',
    date: 'Today',
    unread: true,
    body: 'Sarah — Ridgeline Capital Partners has accepted your intro request. They\'ve confirmed they\'re ready for an initial 30-minute call. We\'ll send a calendar link within 24 hours. A few things to know going in: the CEO leads the first conversation, it\'s conversational rather than formal, and they\'ve committed to a decision or update within 5 business days of each round.',
  },
  {
    id: 2,
    from: 'Wilson Co. Team',
    initials: 'WC',
    preview: 'Two new matches added to your queue this week.',
    date: 'May 8',
    unread: true,
    body: 'We surfaced two new companies whose roles align closely with what you described in your intake. Both have completed the full audit. You can review the anonymized details and accept or pass at your own pace — nothing moves without your say.',
  },
  {
    id: 3,
    from: 'Wilson Co. Team',
    initials: 'WC',
    preview: 'Welcome to the Wilson Co. collective.',
    date: 'May 5',
    unread: false,
    body: 'Sarah — your application has been reviewed and you\'re officially in the collective. Here\'s how it works: we surface opportunities to you quietly. You control your visibility. Nothing goes to a company without your explicit consent. We review every match personally before it reaches your queue.',
  },
]

const VIS_TOGGLES = [
  { id: 'pe',         label: 'PE-backed companies',                        default: true  },
  { id: 'founder',    label: 'Founder-led companies',                      default: true  },
  { id: 'early',      label: 'Early-stage (pre-Series A)',                  default: false },
  { id: 'comp_gate',  label: 'Hide from roles below my comp floor',        default: true  },
  { id: 'vetted',     label: 'Wilson Co. vetted companies only',           default: true  },
  { id: 'full_profile', label: 'Show full profile (vs. role + vertical only)', default: false },
]

const PROFILE_SECTIONS = [
  {
    title: 'Who You Are',
    items: [
      { label: 'Current title',           value: SARAH.title },
      { label: 'Company',                 value: SARAH.company },
      { label: 'Years in leadership',     value: SARAH.years },
      { label: 'Current situation',       value: SARAH.situation },
      { label: 'Background / verticals',  value: SARAH.verticals.join(', ') },
    ],
  },
  {
    title: 'What You Want Next',
    items: [
      { label: 'Open to roles',   value: SARAH.roles.join(', ') },
      { label: 'Comp floor',      value: SARAH.compFloor },
      { label: 'Geography',       value: SARAH.geos.join(', ') },
      { label: 'Ideal next role', value: SARAH.idealRole, block: true },
      { label: 'What you\'d walk away from a bigger title to get', value: SARAH.walkAway, block: true },
    ],
  },
  {
    title: 'What You\'ve Outgrown',
    items: [
      { label: 'Work you\'re done with',    value: SARAH.doneWith,    block: true },
      { label: 'Culture that doesn\'t fit', value: SARAH.badCulture,  block: true },
    ],
  },
  {
    title: 'The Final Question',
    items: [
      { label: 'What would make you hesitate', value: SARAH.hesitation, block: true },
    ],
  },
]

export default function MemberDashboard() {
  const [tab, setTab]               = useState<Tab>('home')
  const [matchFilter, setMatchFilter] = useState<MatchFilter>('all')
  const [statuses, setStatuses]     = useState<Record<number, 'accepted' | 'passed'>>({ 1: 'accepted', 4: 'passed' })
  const [visMode, setVisMode]       = useState<VisMode>('Selective')
  const [visToggles, setVisToggles] = useState<Record<string, boolean>>(
    Object.fromEntries(VIS_TOGGLES.map(t => [t.id, t.default]))
  )
  const [openThread, setOpenThread] = useState<number | null>(null)

  const getStatus = (id: number): 'accepted' | 'passed' | 'pending' => statuses[id] ?? 'pending'
  const accept = (id: number) => setStatuses(prev => ({ ...prev, [id]: 'accepted' }))
  const pass   = (id: number) => setStatuses(prev => ({ ...prev, [id]: 'passed'   }))

  const navItems: { id: Tab; label: string; icon: string; badge?: number }[] = [
    { id: 'home',       label: 'Overview',    icon: '⌂' },
    { id: 'profile',    label: 'My Profile',  icon: '◎' },
    { id: 'matches',    label: 'Matches',     icon: '◈', badge: Object.keys(statuses).length < MATCHES.length ? 2 : 0 },
    { id: 'visibility', label: 'Visibility',  icon: '◉' },
    { id: 'messages',   label: 'Messages',    icon: '◻', badge: MESSAGES.filter(m => m.unread).length },
  ]

  const tabTitles: Record<Tab, string> = {
    home:       'Overview',
    profile:    'My Profile',
    matches:    'Matches',
    visibility: 'Visibility Settings',
    messages:   'Messages',
  }

  // ── Home ─────────────────────────────────────────────────────────────────

  function renderHome() {
    const pendingMatches = MATCHES.filter(m => getStatus(m.id) === 'pending')
    return (
      <div className="w-fade-in">
        <div className="w-card w-card-oak" style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ fontSize: 20, color: 'var(--oak)' }}>◈</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--oak)', marginBottom: 2 }}>2 new matches this week</div>
            <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)' }}>
              Ridgeline Capital Partners accepted your intro. 2 more opportunities are waiting for your review.
            </div>
          </div>
          <button className="w-btn w-btn-oak" style={{ whiteSpace: 'nowrap' }} onClick={() => setTab('matches')}>
            View matches →
          </button>
        </div>

        <div className="w-stat-grid">
          <div className="w-stat-box">
            <div className="w-stat-value">{MATCHES.length}</div>
            <div className="w-stat-label">Total matches</div>
          </div>
          <div className="w-stat-box">
            <div className="w-stat-value" style={{ color: 'var(--oak)' }}>
              {Object.values(statuses).filter(s => s === 'accepted').length}
            </div>
            <div className="w-stat-label">Intros accepted</div>
          </div>
          <div className="w-stat-box">
            <div className="w-stat-value">1</div>
            <div className="w-stat-label">In conversation</div>
          </div>
          <div className="w-stat-box">
            <div className="w-stat-value">{SARAH.profileComplete}%</div>
            <div className="w-stat-label">Profile complete</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <div>
            <div className="w-eyebrow" style={{ marginBottom: 10 }}>Pending decisions</div>
            {pendingMatches.length === 0 ? (
              <div className="w-card" style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-3)' }}>
                All caught up — no pending decisions.
              </div>
            ) : (
              pendingMatches.slice(0, 2).map(m => (
                <div key={m.id} className="w-card" style={{ marginBottom: 8 }}>
                  <div className="w-flex-between" style={{ marginBottom: 8 }}>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--w-black)' }}>{m.role}</div>
                      <div style={{ fontSize: 10, fontWeight: 300, color: 'var(--ink-3)' }}>{m.anonymized}</div>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--oak)' }}>{m.fit}%</div>
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button className="w-btn w-btn-oak" style={{ padding: '5px 12px', fontSize: 10 }} onClick={() => accept(m.id)}>Accept</button>
                    <button className="w-btn w-btn-outline" style={{ padding: '5px 12px', fontSize: 10 }} onClick={() => pass(m.id)}>Pass</button>
                  </div>
                </div>
              ))
            )}
          </div>
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

        <div className="w-card" style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="w-badge w-badge-oak">{visMode}</span>
          <div style={{ flex: 1, fontSize: 11, fontWeight: 300, color: 'var(--ink-3)' }}>
            {visMode === 'Selective' && 'Visible to select vetted companies only. Wilson Co. approves all introductions.'}
            {visMode === 'Dark' && 'Hidden from all companies. No intros will be made.'}
            {visMode === 'Active' && 'Visible to all vetted companies in the network.'}
          </div>
          <button className="w-btn w-btn-outline" style={{ fontSize: 10, padding: '5px 12px' }} onClick={() => setTab('visibility')}>
            Manage →
          </button>
        </div>
      </div>
    )
  }

  // ── Profile ───────────────────────────────────────────────────────────────

  function renderProfile() {
    return (
      <div className="w-fade-in">
        <div className="w-card" style={{ marginBottom: 14, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div className="w-dash-avatar" style={{ width: 46, height: 46, fontSize: 16, background: 'var(--denim)', flexShrink: 0 }}>SC</div>
          <div style={{ flex: 1 }}>
            <div className="w-profile-name">{SARAH.name}</div>
            <div className="w-profile-title">{SARAH.title} · {SARAH.company}</div>
          </div>
          <span className="w-badge w-badge-oak">{visMode}</span>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 18, fontWeight: 400, color: 'var(--oak)', fontFamily: 'var(--font-display), "Gill Sans MT", sans-serif' }}>{SARAH.profileComplete}%</div>
            <div style={{ fontSize: 9, color: 'var(--ink-3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Complete</div>
          </div>
        </div>

        {PROFILE_SECTIONS.map((section, si) => (
          <div key={si} className="w-card" style={{ marginBottom: 12 }}>
            <div className="w-eyebrow" style={{ marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid var(--w-border-light)' }}>
              Section {si + 1} · {section.title}
            </div>
            <div className="w-stack">
              {section.items.map((item, ii) => (
                <div key={ii} style={{ marginBottom: item.block ? 6 : 0 }}>
                  <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 3 }}>
                    {item.label}
                  </div>
                  {item.block ? (
                    <div style={{ background: 'var(--beige-mid)', borderLeft: '2px solid var(--oak)', padding: '9px 12px', borderRadius: '0 4px 4px 0', fontSize: 12, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.65, fontStyle: 'italic' }}>
                      {item.value}
                    </div>
                  ) : (
                    <div style={{ fontSize: 13, color: 'var(--w-black)' }}>{item.value}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  // ── Matches ───────────────────────────────────────────────────────────────

  function renderMatches() {
    const visible = MATCHES.filter(m => matchFilter === 'all' || getStatus(m.id) === matchFilter)
    return (
      <div className="w-fade-in">
        <div style={{ display: 'flex', gap: 6, marginBottom: 18 }}>
          {(['all', 'pending', 'accepted', 'passed'] as MatchFilter[]).map(f => (
            <button
              key={f}
              className={`w-btn ${matchFilter === f ? 'w-btn-oak' : 'w-btn-outline'}`}
              style={{ padding: '5px 14px', fontSize: 10 }}
              onClick={() => setMatchFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {visible.map(m => {
          const status = getStatus(m.id)
          const isRevealed = status === 'accepted'
          return (
            <div key={m.id} className="w-match-card" style={{ opacity: status === 'passed' ? 0.55 : 1, marginBottom: 12 }}>
              <div className="w-flex-between" style={{ marginBottom: 10 }}>
                <div className="w-flex-start" style={{ gap: 10 }}>
                  <div
                    className="w-match-avatar"
                    style={{ background: isRevealed ? 'var(--oak)' : 'var(--beige-dark)', color: isRevealed ? 'white' : 'var(--ink-3)' }}
                  >
                    {isRevealed && m.company ? m.company.charAt(0) : '?'}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--w-black)' }}>
                      {isRevealed ? m.company : m.anonymized}
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)' }}>{m.role}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--oak)' }}>{m.fit}%</div>
                    <div style={{ fontSize: 9, color: 'var(--ink-3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Fit</div>
                  </div>
                  {status === 'accepted' && <span className="w-badge w-badge-oak">Accepted</span>}
                  {status === 'passed'   && <span className="w-badge w-badge-beige">Passed</span>}
                  {status === 'pending'  && <span className="w-badge w-badge-denim">Pending</span>}
                </div>
              </div>

              <div className="w-score-row" style={{ marginBottom: 10 }}>
                <div className="w-score-track" style={{ flex: 1 }}><div className="w-score-fill" style={{ width: `${m.fit}%` }} /></div>
              </div>

              {m.comp && (
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const, marginBottom: 10 }}>
                  {m.location  && <span className="w-badge w-badge-beige">{m.location}</span>}
                  {m.comp      && <span className="w-badge w-badge-beige">{m.comp}</span>}
                  {m.vertical  && <span className="w-badge w-badge-beige">{m.vertical}</span>}
                  {m.stage     && <span className="w-badge w-badge-beige">{m.stage}</span>}
                </div>
              )}

              {isRevealed && m.whyOpen && (
                <div style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 3 }}>Why this role is open</div>
                  <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-2)', fontStyle: 'italic' }}>{m.whyOpen}</div>
                </div>
              )}
              {isRevealed && m.process && (
                <div style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 3 }}>Interview process</div>
                  <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-2)' }}>{m.process}</div>
                </div>
              )}

              {!isRevealed && m.whyOpen && status === 'pending' && (
                <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 10, fontStyle: 'italic' }}>{m.whyOpen}</div>
              )}

              {status === 'pending' && (
                <div className="w-btn-row" style={{ marginTop: 8 }}>
                  <button className="w-btn w-btn-oak"     style={{ padding: '7px 18px', fontSize: 11 }} onClick={() => accept(m.id)}>Accept intro</button>
                  <button className="w-btn w-btn-outline" style={{ padding: '7px 18px', fontSize: 11 }} onClick={() => pass(m.id)}>Pass</button>
                </div>
              )}
              {status === 'accepted' && (
                <div style={{ padding: '8px 12px', background: 'var(--oak-bg)', borderRadius: 'var(--w-radius-sm)', fontSize: 11, fontWeight: 300, color: 'var(--oak)' }}>
                  Intro sent — we&apos;ll reach out within 24 hours with next steps.
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  // ── Visibility ────────────────────────────────────────────────────────────

  function renderVisibility() {
    const modes: { id: VisMode; icon: string; desc: string }[] = [
      { id: 'Dark',      icon: '●', desc: 'Not visible to any companies.' },
      { id: 'Selective', icon: '◐', desc: 'Visible to select vetted companies only.' },
      { id: 'Active',    icon: '○', desc: 'Visible to all vetted companies.' },
    ]
    return (
      <div className="w-fade-in">
        <div className="w-card" style={{ marginBottom: 14 }}>
          <div className="w-eyebrow" style={{ marginBottom: 12 }}>Current mode</div>
          <div className="w-vis-mode">
            {modes.map(m => (
              <div key={m.id} className={`w-vis-mode-btn${visMode === m.id ? ' active' : ''}`} onClick={() => setVisMode(m.id)}>
                <div style={{ fontSize: 20, marginBottom: 5, color: visMode === m.id ? 'var(--oak)' : 'var(--ink-3)' }}>{m.icon}</div>
                <div className="w-vis-mode-label">{m.id}</div>
                <div className="w-vis-mode-desc">{m.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.65 }}>
            {visMode === 'Dark'      && 'Your profile is hidden from all companies. Existing intro threads remain open.'}
            {visMode === 'Selective' && 'Wilson Co. curates which companies can see your anonymized profile. Nothing moves without your explicit consent.'}
            {visMode === 'Active'    && 'All vetted companies in the network can surface your anonymized profile. You still approve every intro.'}
          </div>
        </div>

        {visMode === 'Selective' && (
          <div className="w-card">
            <div className="w-eyebrow" style={{ marginBottom: 12 }}>Granular controls</div>
            {VIS_TOGGLES.map(t => (
              <div key={t.id} className="w-toggle-row">
                <span className="w-toggle-label">{t.label}</span>
                <button
                  className={`w-toggle${visToggles[t.id] ? ' on' : ''}`}
                  onClick={() => setVisToggles(prev => ({ ...prev, [t.id]: !prev[t.id] }))}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  // ── Messages ──────────────────────────────────────────────────────────────

  function renderMessages() {
    const thread = openThread !== null ? MESSAGES.find(m => m.id === openThread) : null
    if (thread) {
      return (
        <div className="w-fade-in">
          <button className="w-btn w-btn-outline" style={{ padding: '5px 14px', fontSize: 10, marginBottom: 16 }} onClick={() => setOpenThread(null)}>← Back</button>
          <div className="w-card">
            <div className="w-flex-start" style={{ marginBottom: 16, gap: 10 }}>
              <div className="w-dash-avatar" style={{ width: 36, height: 36, fontSize: 12, background: 'var(--oak)', flexShrink: 0 }}>{thread.initials}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--w-black)' }}>{thread.from}</div>
                <div style={{ fontSize: 10, color: 'var(--ink-3)' }}>{thread.date}</div>
              </div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.8 }}>{thread.body}</div>
          </div>
        </div>
      )
    }
    return (
      <div className="w-fade-in">
        <div className="w-card">
          {MESSAGES.map(m => (
            <div key={m.id} className="w-thread-item" onClick={() => setOpenThread(m.id)}>
              <div className="w-dash-avatar" style={{ width: 36, height: 36, fontSize: 12, background: 'var(--oak)', flexShrink: 0 }}>{m.initials}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="w-flex-between" style={{ marginBottom: 3 }}>
                  <div style={{ fontSize: 12, fontWeight: m.unread ? 500 : 400, color: 'var(--w-black)' }}>{m.from}</div>
                  <div style={{ fontSize: 9, color: 'var(--ink-3)', whiteSpace: 'nowrap' as const, flexShrink: 0 }}>{m.date}</div>
                </div>
                <div style={{ fontSize: 11, fontWeight: m.unread ? 400 : 300, color: 'var(--ink-3)', whiteSpace: 'nowrap' as const, overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.preview}</div>
              </div>
              {m.unread && <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--oak)', flexShrink: 0, marginTop: 4 }} />}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderTab = { home: renderHome, profile: renderProfile, matches: renderMatches, visibility: renderVisibility, messages: renderMessages }

  return (
    <div className="w-dash-layout">
      {/* Sidebar */}
      <aside className="w-dash-sidebar">
        <div className="w-dash-sidebar-logo">
          <div className="w-dash-sidebar-logo-main">The Wilson Co.</div>
          <div className="w-dash-sidebar-logo-sub">Member Portal</div>
        </div>
        <nav className="w-dash-nav">
          {navItems.map(item => (
            <button key={item.id} className={`w-dash-nav-item${tab === item.id ? ' active' : ''}`} onClick={() => setTab(item.id)}>
              <span style={{ fontSize: 13, width: 16, textAlign: 'center' as const }}>{item.icon}</span>
              {item.label}
              {!!item.badge && <span className="w-dash-badge">{item.badge}</span>}
            </button>
          ))}
        </nav>
        <div className="w-dash-sidebar-user">
          <div className="w-dash-avatar" style={{ background: 'var(--denim)' }}>SC</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.75)', lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>
              {SARAH.name}
            </div>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.28)', lineHeight: 1.2 }}>Member</div>
          </div>
          <Link href="/login" style={{ fontSize: 10, color: 'rgba(255,255,255,0.22)', textDecoration: 'none' }}>Out</Link>
        </div>
      </aside>

      {/* Main */}
      <div className="w-dash-main">
        <div className="w-dash-topbar">
          <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--w-black)' }}>{tabTitles[tab]}</div>
          <div className="w-flex-start" style={{ gap: 8 }}>
            <span className="w-badge w-badge-oak">{visMode}</span>
            <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)' }}>{SARAH.name}</div>
          </div>
        </div>
        <div className="w-dash-content">
          {renderTab[tab]()}
        </div>
      </div>
    </div>
  )
}
