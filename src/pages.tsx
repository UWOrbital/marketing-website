import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import {
  site, heroImages, awards, mission, missionStations, timeline, teams, teamLead, galleryImages,
  join, sponsors, sponsorIntro, sponsorPackage, tiers,
} from './content'
import { Btn, ImageCard, PageHero, Section } from './ui'

// The 3 subteams the landing page shows. The order follows `teams`.
const FEATURED_TEAMS = ['mechanical', 'electrical', 'software']

/** Measured facts, set as large type in a row. */
function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="grid-row stats">
      {items.map((s) => (
        <div key={s.label} className="tablet:grid-col stat">
          <span className="stat__value">{s.value}</span>
          <span className="stat__label">{s.label}</span>
        </div>
      ))}
    </div>
  )
}

export function Home() {
  return (
    <>
      <PageHero
        home
        image="/space/field.jpg"
        kicker={site.tagline}
        title={site.headline}
        lede="We are building a 3U CubeSat and launching it, to make it the University of Waterloo's first satellite launched by students."
      >
        <Btn to="/join">Join the team</Btn>
        <Btn to="/mission" outline>Our mission</Btn>
      </PageHero>

      <Section dark>
        <Stats items={[
          { value: '3U', label: 'CubeSat, designed and built by students' },
          { value: awards[1].year, label: `${awards[1].competition}, first place` },
          { value: awards[0].year, label: `${awards[0].competition}, first place` },
          { value: 'Mar 2026', label: 'Vibration and thermal vacuum, passed' },
        ]} />
      </Section>

      <Section kicker="The satellite" title="Winners of CSDC-6 and CSDC-7. Now we fly it.">
        <div className="grid-row grid-gap-6 flex-align-center">
          <div className="desktop:grid-col-5">
            <p className="usa-intro">
              UW Orbital won CSDC-6 in 2023 and CSDC-7 in 2026. The team now competes for CUBICS,
              the Canadian Space Agency program that funds development and buys the launch.
            </p>
            <Link className="usa-button margin-top-2" to="/mission">Read our mission</Link>
          </div>
          <div className="desktop:grid-col-7 margin-top-4 desktop:margin-top-0">
            <img className="render" src="/cad-exploded.png" alt="The UW Orbital V6 CubeSat, shown exploded" />
          </div>
        </div>
      </Section>

      <Section alt kicker="Who builds it" title="Subteams" action={<Link className="usa-link text-bold" to="/team">Meet the team →</Link>}>
        <ul className="usa-card-group">
          {teams.filter((t) => FEATURED_TEAMS.includes(t.slug)).map((t) => (
            <ImageCard key={t.slug} to={`/team/${t.slug}`} image={t.image} title={t.name} body={t.summary} icon={`/icons/${t.slug}-accent.png`} />
          ))}
        </ul>
      </Section>

      <Section dark kicker="Join us" title="Build hardware that leaves the planet.">
        <div className="grid-row grid-gap-6">
          <p className="desktop:grid-col-8 font-body-md">{join.why}</p>
          <div className="desktop:grid-col-4 desktop:text-right">
            <Btn href={site.discord}>Join our Discord</Btn>
          </div>
        </div>
      </Section>
    </>
  )
}

export function Mission() {
  const [satellite, competition, payload] = missionStations
  return (
    <>
      <PageHero image={heroImages.mission} kicker="3U CubeSat" title={mission.title} lede={mission.statement} />

      {/* The overview, first: the facts a sponsor came for, in one screen. */}
      <Section dark kicker="Overview" title="The mission at a glance">
        <div className="grid-row grid-gap-4">
          {[
            { lead: 'Satellite', s: satellite },
            { lead: 'Competition', s: competition },
            { lead: 'Payload', s: payload },
          ].map(({ lead, s }) => (
            <div key={s.slug} className="tablet:grid-col-4 margin-bottom-4">
              <img className={s.float ? 'overview__img overview__img--render' : 'overview__img'} src={s.image} alt={s.alt} />
              <p className="kicker margin-top-3">{lead}</p>
              <h3 className="margin-y-1">{s.title}</h3>
              <p className="margin-top-0">{s.lead}</p>
            </div>
          ))}
        </div>
      </Section>

      {mission.sections.map((s, i) => (
        <Section key={s.heading} alt={i % 2 === 1} kicker={`0${i + 1}`} title={s.heading}>
          <div className={`grid-row grid-gap-6 flex-align-center${i % 2 === 1 ? ' flip' : ''}`}>
            <div className="desktop:grid-col-6 usa-prose">
              <p>{s.body}</p>
              {s.body2 && <p>{s.body2}</p>}
            </div>
            <div className="desktop:grid-col-6">
              {s.images[0] && <img className="render" src={s.images[0].src} alt={s.images[0].alt} loading="lazy" />}
            </div>
          </div>
        </Section>
      ))}

      <Section dark kicker="Timeline" title="From kickoff to orbit" action={<Link className="usa-link text-white text-bold" to="/team">Meet the subteams →</Link>}>
        <ol className="usa-process-list">
          {timeline.map((t) => (
            <li key={t.title} className="usa-process-list__item">
              <p className="kicker">{t.date}</p>
              <h4 className="usa-process-list__heading">{t.title}</h4>
              <p className="margin-top-05">{t.body}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}

export function Team() {
  return (
    <>
      <PageHero image={heroImages.team} kicker={`${teamLead.role}: ${teamLead.name}`} title="Team" lede="Six subteams design, build and test the CubeSat.">
        <Btn to="/join">Join the team</Btn>
      </PageHero>

      <Section alt kicker="Six subteams" title="Subteams">
        <ul className="usa-card-group">
          {teams.map((t) => (
            <ImageCard key={t.slug} to={`/team/${t.slug}`} image={t.image} title={t.name} body={t.summary} icon={`/icons/${t.slug}-accent.png`} />
          ))}
        </ul>
      </Section>
    </>
  )
}

export function TeamDetail() {
  const { slug } = useParams()
  const t = teams.find((x) => x.slug === slug)
  if (!t) return <NotFound />
  return (
    <>
      <PageHero image={t.image} crumb={{ to: '/team', label: 'Team' }} title={t.name} lede={t.summary} />

      <Section>
        <div className="grid-row grid-gap-6">
          {/* USWDS side navigation: every subteam, with this one marked. */}
          <nav className="desktop:grid-col-3 margin-bottom-4" aria-label="Subteams">
            <ul className="usa-sidenav">
              {teams.map((o) => (
                <li key={o.slug} className="usa-sidenav__item">
                  <NavLink to={`/team/${o.slug}`} className={({ isActive }) => (isActive ? 'usa-current' : undefined)}>{o.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="desktop:grid-col-6 usa-prose">
            <h2 className="margin-top-0">About</h2>
            <p>{t.body}</p>
            {t.body2 && <p>{t.body2}</p>}
            {t.stack && (
              <>
                <h3>Tech stack</h3>
                <ul>{t.stack.map((s) => <li key={s}>{s}</li>)}</ul>
              </>
            )}
          </div>

          <aside className="desktop:grid-col-3">
            <div className="usa-summary-box" role="region" aria-labelledby="leads-heading">
              <div className="usa-summary-box__body">
                <h3 className="usa-summary-box__heading" id="leads-heading">Leads</h3>
                <ul className="usa-list usa-list--unstyled usa-summary-box__text">
                  {t.leads.map((l) => (
                    <li key={l.name}>
                      {l.linkedin ? <a className="usa-link" href={l.linkedin} target="_blank" rel="noreferrer">{l.name}</a> : l.name}
                    </li>
                  ))}
                </ul>
                <Link className="usa-button margin-top-3" to="/join">Join us</Link>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}

export function Sponsors() {
  return (
    <>
      <PageHero image={heroImages.sponsors} kicker="Partners" title="Sponsors" lede={sponsorIntro}>
        <Btn href={sponsorPackage}>Sponsorship package</Btn>
        <Btn outline href={`mailto:${site.email}?subject=${encodeURIComponent('[Our Company] - Sponsoring UW Orbital')}`}>
          Become a sponsor
        </Btn>
      </PageHero>

      {tiers.map((tier, i) => {
        const list = sponsors.filter((s) => s.tier === tier)
        if (!list.length) return null
        return (
          <Section key={tier} alt={i % 2 === 1} kicker={`${list.length} ${list.length === 1 ? 'sponsor' : 'sponsors'}`} title={tier}>
            <ul className="usa-card-group">
              {list.map((s) => (
                <li key={s.name} className="usa-card tablet:grid-col-6 desktop:grid-col-4">
                  <a className="usa-card__container text-ink text-no-underline" href={s.website} target="_blank" rel="noreferrer">
                    <div className="sponsor-logo"><img src={s.logo} alt={s.alt} loading="lazy" /></div>
                    <div className="usa-card__header">
                      <h3 className="usa-card__heading">{s.fullName}</h3>
                      {s.since && <span className="usa-tag margin-top-1">Since {s.since}</span>}
                    </div>
                    <div className="usa-card__body"><p className="font-body-xs">{s.blurb}</p></div>
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        )
      })}
    </>
  )
}

export function Join() {
  return (
    <>
      <PageHero image={heroImages.join} kicker="Join us" title="Build hardware that leaves the planet." lede={join.why}>
        <Btn href={site.discord}>Join our Discord</Btn>
      </PageHero>

      <Section kicker="Two steps" title="How to join" action={<Link className="usa-link text-bold" to="/team">Learn about our subteams →</Link>}>
        <ol className="usa-process-list">
          {join.steps.map((s) => (
            <li key={s.n} className="usa-process-list__item">
              <h4 className="usa-process-list__heading">
                <a className="usa-link" href={s.href} target="_blank" rel="noreferrer">{s.title}</a>
              </h4>
            </li>
          ))}
        </ol>
      </Section>

      <Section alt kicker="Get in touch" title="Contact us">
        <ul className="usa-card-group">
          {[{ label: 'Email', handle: site.email, href: `mailto:${site.email}` }, ...site.social].map((c) => (
            <li key={c.label} className="usa-card tablet:grid-col-6 desktop:grid-col-3">
              <a className="usa-card__container text-ink text-no-underline" href={c.href} target="_blank" rel="noreferrer">
                <div className="usa-card__header"><p className="kicker">{c.label}</p><h3 className="usa-card__heading">{c.handle}</h3></div>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}

/** Full-size view of one photo.
 *  ponytail: native <dialog>. Esc, the backdrop, the focus trap, and returning
 *  focus to the photo that opened it are all free. A click anywhere closes it. */
function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (src) d.showModal()
    else if (d.open) d.close()
  }, [src])
  return (
    <dialog className="lightbox" ref={ref} onClose={onClose} onClick={onClose}>
      {src && <img src={src} alt="" />}
    </dialog>
  )
}

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <>
      <PageHero image={galleryImages[0]} title="Gallery" />
      <Section dark title="Photographs" action={<Link className="usa-link text-white text-bold" to="/team">Meet the subteams →</Link>}>
        <div className="gallery">
          {galleryImages.map((src, i) => (
            <button key={src} className={i === 0 ? 'gallery__lead' : undefined} onClick={() => setOpen(src)}>
              <img src={src} alt={i === 0 ? 'The UW Orbital team outside the Waterloo sign' : ''} loading={i === 0 ? undefined : 'lazy'} />
            </button>
          ))}
        </div>
      </Section>
      <Lightbox src={open} onClose={() => setOpen(null)} />
    </>
  )
}

export function NotFound() {
  return (
    <>
      <PageHero image="/space/field.jpg" kicker="404" title="Page not found" lede="That page is not part of this site.">
        <Btn to="/mission">Mission</Btn>
        <Btn to="/team" outline>Team</Btn>
        <Btn to="/join" outline>Join us</Btn>
      </PageHero>
    </>
  )
}
