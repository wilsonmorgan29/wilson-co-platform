'use client'

import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="w-login-page">
      <div style={{ width: '100%', maxWidth: 520 }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{
            fontFamily: 'var(--font-display), "Gill Sans MT", "Century Gothic", sans-serif',
            fontSize: 16,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--oak)',
            marginBottom: 4,
          }}>
            The Wilson Co.
          </div>
          <div style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
            Career Coaching · Talent Collective
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h1 className="w-display" style={{ fontSize: 30, color: 'var(--w-black)', marginBottom: 10 }}>
            Welcome <em>back.</em>
          </h1>
          <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--ink-3)' }}>
            Select your dashboard to continue.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 24 }}>

          {/* Member card */}
          <Link href="/dashboard/member" style={{ textDecoration: 'none' }}>
            <div className="w-login-card">
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'var(--denim)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                fontWeight: 500,
                color: 'white',
                margin: '0 auto 14px',
              }}>
                SC
              </div>
              <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--oak)', marginBottom: 4 }}>
                Member
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--w-black)', marginBottom: 3 }}>
                Sarah Chen
              </div>
              <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 16 }}>
                General Counsel · Meridian Capital
              </div>
              <div className="w-btn w-btn-denim" style={{ width: '100%', justifyContent: 'center', fontSize: 10 }}>
                Enter dashboard →
              </div>
            </div>
          </Link>

          {/* Company card */}
          <Link href="/dashboard/company" style={{ textDecoration: 'none' }}>
            <div className="w-login-card">
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'var(--oak)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                fontWeight: 500,
                color: 'white',
                margin: '0 auto 14px',
              }}>
                RC
              </div>
              <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--oak)', marginBottom: 4 }}>
                Company
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--w-black)', marginBottom: 3 }}>
                Ridgeline Capital
              </div>
              <div style={{ fontSize: 11, fontWeight: 300, color: 'var(--ink-3)', marginBottom: 16 }}>
                PE-backed · Wilson Co. Certified
              </div>
              <div className="w-btn w-btn-oak" style={{ width: '100%', justifyContent: 'center', fontSize: 10 }}>
                Enter dashboard →
              </div>
            </div>
          </Link>

        </div>

        <div style={{ textAlign: 'center', fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.08em' }}>
          Prototype — no authentication required
        </div>

      </div>
    </div>
  )
}
