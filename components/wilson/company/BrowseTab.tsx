'use client'

import { useState } from 'react'

interface Member {
  id: string
  initial: string
  avatarBg: string
  memberNo: string
  level: string
  exp: string
  markets: string
  visibility: string
  visClass: string
  quote: string
  pills: string[]
  alignPct: number
  dark?: boolean
  requested?: boolean
  saved?: boolean
}

const initialMembers: Member[] = [
  {
    id: 'cm1', initial: 'M', avatarBg: 'var(--denim)',
    memberNo: '#C-047', level: 'Director-level', exp: '12 yrs exp', markets: 'Nashville / NYC',
    visibility: 'Selective', visClass: 'w-badge-oak',
    quote: '"I don\'t need the biggest title — I need to build something that matters."',
    pills: ['COO', 'Head of Ops', 'FinServ', '$200K+'],
    alignPct: 91,
  },
  {
    id: 'cm2', initial: 'J', avatarBg: 'var(--oak)',
    memberNo: '#C-031', level: 'VP-level', exp: '18 yrs exp', markets: 'Nashville',
    visibility: 'Active', visClass: 'w-badge-denim',
    quote: '"I\'ve built teams from 3 to 80. I want to do that again somewhere with actual mission."',
    pills: ['COO', 'Chief People Officer', 'FinServ', '$220K+'],
    alignPct: 78,
  },
  {
    id: 'cm3', initial: '?', avatarBg: 'var(--ink-3)',
    memberNo: '#C-019', level: 'Senior leader', exp: '20+ yrs', markets: 'NYC',
    visibility: 'Dark', visClass: 'w-badge-black',
    quote: '',
    pills: [],
    alignPct: 0,
    dark: true,
  },
]

export default function BrowseTab() {
  const [members, setMembers] = useState(initialMembers)

  const requestIntro = (id: string) => {
    setMembers(prev => prev.map(m => m.id === id ? { ...m, requested: true } : m))
  }

  const saveM = (id: string) => {
    setMembers(prev => prev.map(m => m.id === id ? { ...m, saved: true } : m))
  }

  return (
    <div className="w-fade-in">
      <p className="w-eyebrow" style={{ marginBottom: 10 }}>Collective members</p>
      <h2 className="w-display" style={{ fontSize: 26, marginBottom: 8 }}>8 members match <em>your role.</em></h2>
      <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 22 }}>
        Goals profiles — not resumes. Names and employers are hidden until a member accepts your introduction request.
      </p>

      {members.map(m => (
        <div
          key={m.id}
          className="w-match-card"
          style={m.requested ? { borderColor: 'var(--hydrangea)', background: 'var(--hydrangea-bg)' } : m.dark ? { opacity: 0.55 } : {}}
        >
          <div className="w-flex-start" style={{ marginBottom: 10 }}>
            <div className="w-match-avatar" style={{ background: m.avatarBg }}>{m.initial}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500 }}>Member {m.memberNo}</div>
              <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)', marginTop: 2 }}>
                {m.level} · {m.exp} · {m.markets}
              </div>
            </div>
            <span className={`w-badge ${m.visClass}`}>{m.visibility}</span>
          </div>

          {m.dark ? (
            <div style={{ border: '1px dashed var(--w-border)', borderRadius: 8, padding: 14, textAlign: 'center' }}>
              <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-3)', lineHeight: 1.65 }}>
                This member is currently dark — building clarity, not actively looking. You cannot request an introduction at this time.
              </div>
            </div>
          ) : (
            <>
              {m.quote && (
                <div className="w-quote-block" style={{ marginBottom: 10 }}>
                  <div className="w-quote-text">{m.quote}</div>
                </div>
              )}
              <div className="w-pill-group" style={{ marginBottom: 10 }}>
                {m.pills.map(p => <div key={p} className="w-pill on" style={{ cursor: 'default' }}>{p}</div>)}
              </div>
              <div className="w-score-row">
                <span style={{ fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Alignment</span>
                <div className="w-score-track"><div className="w-score-fill" style={{ width: `${m.alignPct}%` }} /></div>
                <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--oak)' }}>{m.alignPct}%</span>
              </div>
              <div style={{ display: 'flex', gap: 7 }}>
                <button
                  onClick={() => requestIntro(m.id)}
                  disabled={m.requested}
                  style={{ flex: 1, padding: 8, borderRadius: 5, fontSize: 10, fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', background: m.requested ? 'var(--denim)' : 'var(--oak)', color: 'white', border: 'none', cursor: m.requested ? 'default' : 'pointer' }}
                >
                  {m.requested ? 'Request sent ✓' : 'Request introduction'}
                </button>
                <button
                  onClick={() => saveM(m.id)}
                  disabled={m.saved}
                  style={{ padding: '8px 14px', borderRadius: 5, fontSize: 10, fontWeight: 500, background: 'var(--beige-mid)', color: m.saved ? 'var(--oak)' : 'var(--ink-3)', border: 'none', cursor: m.saved ? 'default' : 'pointer' }}
                >
                  {m.saved ? 'Saved ✓' : 'Save'}
                </button>
              </div>
            </>
          )}
        </div>
      ))}

      <div className="w-card w-card-beige" style={{ marginTop: 6 }}>
        <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--ink-2)', lineHeight: 1.7 }}>
          Members never know which companies viewed their profile — only who requested an introduction. Browsing is private for both sides.
        </div>
      </div>
    </div>
  )
}
