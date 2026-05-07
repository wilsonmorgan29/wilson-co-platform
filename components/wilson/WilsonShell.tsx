'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function WilsonShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home', id: 'home' },
    { href: '/member', label: 'Join as Member', id: 'member' },
    { href: '/company', label: 'For Companies', id: 'company' },
    { href: '/pricing', label: 'Pricing', id: 'pricing' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const isMemberMode = pathname.startsWith('/member') || pathname === '/'
  const isCompanyMode = pathname.startsWith('/company')

  return (
    <div className="wilson-root">
      {/* Top bar */}
      <div className="w-topbar">
        <span className="w-topbar-text">
          Clarity <span>·</span> Confidence <span>·</span> Purpose
          <span>·</span> The Wilson Co. <span>·</span> thewilson.co
        </span>
      </div>

      {/* Nav */}
      <nav className="w-nav">
        <Link href="/" className="w-nav-logo">
          <div className="w-nav-logo-main">The Wilson Co.</div>
          <div className="w-nav-logo-sub">Career Coaching · Talent Collective</div>
        </Link>

        <div className={`w-nav-links${mobileOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.id}
              href={link.href}
              className={`w-nav-link${isActive(link.href) ? ' active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div className="w-mode-toggle">
            <Link
              href="/member"
              className={`w-mode-btn${isMemberMode ? ' active' : ''}`}
            >
              Member
            </Link>
            <Link
              href="/company"
              className={`w-mode-btn${isCompanyMode ? ' active' : ''}`}
            >
              Company
            </Link>
          </div>

          <button
            className="w-hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Page content */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* Footer */}
      <footer className="w-footer">
        <div className="w-footer-inner">
          <div>
            <div className="w-footer-logo">The Wilson Co.</div>
            <div style={{ fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginTop: 4 }}>
              Career Coaching · Talent Collective
            </div>
          </div>
          <div className="w-footer-text" style={{ textAlign: 'center' }}>
            Clarity · Confidence · Purpose<br />
            <span style={{ fontSize: 9 }}>Nashville &amp; New York City</span>
          </div>
          <div className="w-footer-text" style={{ textAlign: 'right' }}>
            <span className="w-footer-link">thewilson.co</span><br />
            <span style={{ fontSize: 9, marginTop: 3, display: 'block' }}>© 2025 The Wilson Co.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
