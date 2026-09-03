import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { nav, site } from './content'
import { Gallery, Home, Join, Mission, NotFound, Sponsors, Team, TeamDetail } from './pages'

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="header">
      <div className="wrap header__bar">
        <Link className="header__logo" to="/">
          <img src="/logo-light.png" alt={site.name} />
        </Link>

        <button
          className="header__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav id="primary-nav" className={open ? 'header__nav is-open' : 'header__nav'}>
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
              {n.label}
            </NavLink>
          ))}
          <Link className="btn btn--ghost btn--sm header__cta" to="/join">Join Us</Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <img className="footer__logo" src="/logo-light.png" alt={site.name} />
            <p style={{ maxWidth: '34ch', marginTop: 'var(--space-3)' }}>{site.tagline}</p>
            <a className="btn btn--ghost" style={{ marginTop: 'var(--space-3)' }} href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {nav.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}
              <li><Link to="/join">Join Us</Link></li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul>
              {site.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>University of Waterloo Satellite Design Team</span>
          <span className="footer__credit">
            Background: NASA, ESA, G. Illingworth and D. Magee (University of California, Santa Cruz),
            K. Whitaker (University of Connecticut), R. Bouwens (Leiden University),
            P. Oesch (University of Geneva), and the Hubble Legacy Field team. CC BY 4.0.
          </span>
        </div>
      </div>
    </footer>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a className="skip" href="#main">Skip to main content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:slug" element={<TeamDetail />} />
          {/* the old Wix Subsystems page is merged into Team */}
          <Route path="/subsystems" element={<Navigate to="/team" replace />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/join" element={<Join />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
