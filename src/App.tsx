import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { imageCredits, nav, site } from './content'
import { Gallery, Home, Join, Mission, NotFound, Sponsors, Team, TeamDetail } from './pages'

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="hdr">
      <div className="page hdr__bar">
        <Link className="hdr__logo" to="/">
          <img src="/logo.png" alt={site.name} />
        </Link>

        <button
          className="hdr__toggle label"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav id="primary-nav" className={open ? 'hdr__nav is-open' : 'hdr__nav'}>
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
              {n.label}
            </NavLink>
          ))}
          <Link className="btn btn--sm hdr__cta" to="/join">Join us</Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="ftr">
      <div className="page ftr__top">
        <div className="ftr__brand">
          <span className="ftr__logo"><img src="/logo-light.png" alt={site.name} /></span>
          <p className="ftr__tag">{site.tagline}</p>
          <a className="ulink ftr__mail" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <div>
          <p className="label">Explore</p>
          <ul className="plain">
            {nav.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}
            <li><Link to="/join">Join us</Link></li>
          </ul>
        </div>
        <div>
          <p className="label">Follow</p>
          <ul className="plain">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="page ftr__bottom">
        <span className="label">University of Waterloo Satellite Design Team</span>
        <div className="ftr__credit">
          <p>Subteam images: ESA/Webb, NASA and CSA. Released under CC BY 4.0.</p>
          <ul className="plain ftr__credits">
            {imageCredits.map((c) => (
              <li key={c.title}><i>{c.title}</i> — {c.credit}</li>
            ))}
          </ul>
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
