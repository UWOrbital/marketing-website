import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { imageCredits, nav, site, teams } from './content'
import { Gallery, Home, Join, Mission, NotFound, Sponsors, Team, TeamDetail } from './pages'
import { Btn, WRAP } from './ui'

/** JPL's NavDesktop, without the dropdowns: this site has 4 flat tabs.
 *  Every page opens on a hero, so the header is always transparent over it.
 *  Below lg the tabs move into a full-screen panel, like JPL's NavMobile. */
function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [pathname])

  return (
    <div className="NavDesktop -transparent absolute top-0 z-50 w-full">
      <div className="header-bg max-w-screen-3xl absolute inset-0 mx-auto"></div>
      <div>
        <div className={`${WRAP} h-20 lg:h-28 relative flex items-center justify-between`}>
          <Link to="/" className="z-20 flex flex-shrink-0 my-2">
            <img src="/logo-white.png" alt={site.name} width="900" height="140" className="h-8 lg:h-11 w-auto" draggable={false} />
          </Link>
          <nav aria-label="Main" className="main-navigation hidden lg:flex items-center justify-end w-full">
            <div className="flex flex-wrap items-center justify-end">
              {nav.map((n) => (
                <NavLink key={n.to} to={n.to} className="px-4 font-bold font-text tracking-[-.03rem] border-t-2 border-transparent">
                  {({ isActive }) => (
                    <span className={`inline-block py-2 border-b-2 ${isActive ? 'border-primary' : 'border-transparent hover:border-primary'}`}>{n.label}</span>
                  )}
                </NavLink>
              ))}
              <Btn to="/join" compact className="ml-4">Join us</Btn>
            </div>
          </nav>
          <button
            type="button"
            className="lg:hidden z-20 text-subtitle text-white p-2 -mr-2"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </div>
      </div>
      {/* JPL's NavMobile: a full-screen dark panel with the links stacked. */}
      <nav
        id="primary-nav"
        aria-label="Mobile"
        className={`${open ? 'flex' : 'hidden'} lg:hidden fixed inset-0 z-50 flex-col bg-black text-white px-4 pb-10`}
      >
        <div className="h-20 flex items-center justify-between">
          <img src="/logo-white.png" alt="" width="900" height="140" className="h-8 w-auto" />
          <button type="button" className="text-subtitle p-2 -mr-2" onClick={() => setOpen(false)}>Close</button>
        </div>
        {nav.map((n) => (
          <NavLink key={n.to} to={n.to} className="font-display font-bold text-3xl py-4 border-b border-white border-opacity-15">{n.label}</NavLink>
        ))}
        <Btn to="/join" className="mt-8">Join us</Btn>
      </nav>
    </div>
  )
}

/** JPL's TheFooter on the page's own black ground: subtitle-set column heads,
 *  an aside for the organisation, then the meta. The image credits are a
 *  licence term (CC BY 4.0), so they sit in the meta. */
function Footer() {
  const col = (title: string, links: { to?: string; href?: string; label: string }[]) => (
    <div className="mb-8">
      <div className="label-mono text-gray-mid mb-4">{title}</div>
      {links.map((l) =>
        l.to
          ? <Link key={l.label} to={l.to} className="block text-base text-gray-light-mid can-hover:hover:text-white py-1">{l.label}</Link>
          : <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="block text-base text-gray-light-mid can-hover:hover:text-white py-1">{l.label}</a>,
      )}
    </div>
  )
  return (
    <footer className="TheFooter bg-black text-white relative z-20 border-t border-white border-opacity-10">
      <div className={`${WRAP} pt-10 lg:pt-20 lg:grid lg:grid-cols-12 lg:gap-6`}>
        <div className="lg:col-span-9 sm:grid grid-cols-3 gap-6">
          {col('Explore', [...nav.map((n) => ({ to: n.to, label: n.label })), { to: '/join', label: 'Join us' }])}
          {col('Subteams', teams.map((t) => ({ to: `/team/${t.slug}`, label: t.name })))}
          {col('Follow us', [...site.social.map((s) => ({ href: s.href, label: s.label })), { href: `mailto:${site.email}`, label: site.email }])}
        </div>
        <div className="lg:col-span-3 mb-10">
          <img src="/emblem.png" alt="The UW Orbital emblem" width="400" height="368" className="w-32 h-auto mb-5" loading="lazy" />
          <p className="font-display text-lg text-gray-light-mid">{site.name} is the {site.tagline}.</p>
        </div>
      </div>
      <div className="lg:mt-10 py-8">
        <div className={`${WRAP} text-sm text-gray-mid`}>
          <p className="mb-2">Imagery: ESA/Webb and ESA/Hubble, NASA and CSA. Released under CC BY 4.0.</p>
          <ul className="space-y-1 text-xs">
            {imageCredits.map((c) => <li key={c.title}><i>{c.title}</i> — {c.credit}</li>)}
          </ul>
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
    <main id="main" className="bg-black text-white">
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
      <a className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-4" href="#main">Skip to main content</a>
      <Header />
      <Routed />
      <Footer />
    </BrowserRouter>
  )
}
