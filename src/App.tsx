import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import closeIcon from 'uswds-dist/img/usa-icons/close.svg'
import { imageCredits, nav, site, teams } from './content'
import { Gallery, Home, Join, Mission, NotFound, Sponsors, Team, TeamDetail } from './pages'

/** The USWDS basic header. USWDS ships its own JavaScript for the mobile
 *  menu. React state does the same job here, so the USWDS script is not loaded. */
function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => { document.body.classList.toggle('usa-js-mobile-nav--active', open) }, [open])

  return (
    <>
      <div className={open ? 'usa-overlay is-visible' : 'usa-overlay'} onClick={() => setOpen(false)} />
      <header className="usa-header usa-header--basic">
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo">
              <Link to="/" title={site.name}>
                <img src="/logo-light.png" alt={site.name} draggable={false} />
              </Link>
            </div>
            <button type="button" className="usa-menu-btn" aria-controls="primary-nav" aria-expanded={open} onClick={() => setOpen(true)}>
              Menu
            </button>
          </div>
          <nav id="primary-nav" aria-label="Primary navigation" className={open ? 'usa-nav is-visible' : 'usa-nav'}>
            <button type="button" className="usa-nav__close" onClick={() => setOpen(false)}>
              <img src={closeIcon} role="img" alt="Close" />
            </button>
            <ul className="usa-nav__primary usa-accordion">
              {nav.map((n) => (
                <li key={n.to} className="usa-nav__primary-item">
                  <NavLink to={n.to} className={({ isActive }) => (isActive ? 'usa-nav-link usa-current' : 'usa-nav-link')}>
                    <span>{n.label}</span>
                  </NavLink>
                </li>
              ))}
              <li className="usa-nav__primary-item site-cta">
                <Link className="usa-button" to="/join">Join us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

/** The USWDS big footer. The image credits are a licence term (CC BY 4.0),
 *  so every image the site shows keeps its credit line here. */
function Footer() {
  return (
    <footer className="usa-footer usa-footer--big">
      <div className="usa-footer__primary-section">
        <div className="grid-container padding-y-5">
          <div className="grid-row grid-gap-4">
            <div className="tablet:grid-col-4">
              <h2 className="usa-footer__primary-link margin-top-0">Explore</h2>
              <ul className="usa-list usa-list--unstyled">
                {nav.map((n) => <li key={n.to} className="usa-footer__secondary-link"><Link to={n.to}>{n.label}</Link></li>)}
                <li className="usa-footer__secondary-link"><Link to="/join">Join us</Link></li>
              </ul>
            </div>
            <div className="tablet:grid-col-4">
              <h2 className="usa-footer__primary-link margin-top-0">Subteams</h2>
              <ul className="usa-list usa-list--unstyled">
                {teams.map((t) => <li key={t.slug} className="usa-footer__secondary-link"><Link to={`/team/${t.slug}`}>{t.name}</Link></li>)}
              </ul>
            </div>
            <div className="tablet:grid-col-4">
              <h2 className="usa-footer__primary-link margin-top-0">Follow</h2>
              <ul className="usa-list usa-list--unstyled">
                {site.social.map((s) => (
                  <li key={s.label} className="usa-footer__secondary-link">
                    <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
                  </li>
                ))}
                <li className="usa-footer__secondary-link"><a href={`mailto:${site.email}`}>{site.email}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="usa-footer__secondary-section">
        <div className="grid-container">
          <div className="grid-row grid-gap-4">
            <div className="tablet:grid-col-4 display-flex flex-align-center">
              <img className="footer-patch margin-right-2" src="/patch.png" alt="UW Orbital mission patch" width="512" height="504" loading="lazy" />
              <div>
                <img src="/logo-light.png" alt={site.name} style={{ height: '2rem', width: 'auto' }} loading="lazy" />
                <p className="margin-y-1 font-body-2xs">{site.tagline}</p>
              </div>
            </div>
            <div className="tablet:grid-col-8">
              <p className="footer-credits margin-top-0">Imagery: ESA/Webb and ESA/Hubble, NASA and CSA. Released under CC BY 4.0.</p>
              <ul className="usa-list usa-list--unstyled footer-credits">
                {imageCredits.map((c) => (
                  <li key={c.title}><i>{c.title}</i> — {c.credit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

/** The routed page. Arriving at the top of a new page is part of the change,
 *  so the scroll reset lives here with it.
 *
 *  `key` remounts the markup on every path change. Without it two subteam
 *  pages are one component with different params, React keeps the DOM, and
 *  the fade is the one navigation on the site that does not play. */
function Routed() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return (
    <main id="main">
      <Routes key={pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:slug" element={<TeamDetail />} />
        {/* the old Wix Subsystems page is merged into Team */}
        <Route path="/subsystems" element={<Navigate to="/team" replace />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/join" element={<Join />} />
        {/* the old Wix Join Us URL */}
        <Route path="/join-us" element={<Navigate to="/join" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <a className="usa-skipnav" href="#main">Skip to main content</a>
      <Header />
      <Routed />
      <Footer />
    </BrowserRouter>
  )
}
