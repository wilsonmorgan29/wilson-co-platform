'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function WilsonShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '/',           label: 'Home'           },
    { href: '/about',      label: 'About'          },
    { href: '/services',   label: 'Services'       },
    { href: '/collective', label: 'The Collective' },
    { href: '/pricing',    label: 'Pricing'        },
    { href: '/contact',    label: 'Contact'        },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <div className="wilson-root">
      {/* Top bar */}
      <div className="w-topbar">
        <span className="w-topbar-text">
          Clarity <span>·</span> Confidence <span>·</span> Purpose
          <span>·</span> New York City · Nationwide
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
              key={link.href}
              href={link.href}
              className={`w-nav-link${isActive(link.href) ? ' active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link href="/login" className="w-btn w-btn-oak" style={{ padding: '7px 16px', fontSize: 10 }}>
            Login →
          </Link>
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
            <div style={{ display: 'flex', gap: 14, marginTop: 12 }}>
              <a href="https://www.instagram.com/thewilson.co" target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: 'var(--oak-light)', letterSpacing: '0.08em', textDecoration: 'none' }}>Instagram</a>
              <a href="https://www.linkedin.com/company/thewilsonco" target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: 'var(--oak-light)', letterSpacing: '0.08em', textDecoration: 'none' }}>LinkedIn</a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
            <div className="w-footer-text">Clarity · Confidence · Purpose</div>
            <div style={{ display: 'flex', gap: 16 }}>
              {navLinks.map(l => (
                <Link key={l.href} href={l.href} style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-footer-text" style={{ textAlign: 'right' }}>
            <a href="https://www.thewilson.co" style={{ color: 'var(--oak-light)', textDecoration: 'none' }}>thewilson.co</a>
            <br />
            <span style={{ fontSize: 9, marginTop: 3, display: 'block', color: 'rgba(255,255,255,0.25)' }}>© 2026 The Wilson Co.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
