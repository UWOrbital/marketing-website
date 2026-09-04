import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  site, heroImages, awards, mission, timeline, projects, teams, teamLead, galleryImages,
  join, sponsors, sponsorIntro, sponsorPackage, tiers,
} from './content'
import { Arrow, ArrowLink, Award, Btn, PageHead, Plate, Row, Rows, Section, Split, Tile } from './ui'

// The 3 subteams the landing page shows. Software replaced GNC here.
// The order follows `teams`, which already lists these 3 in this order.
const FEATURED_TEAMS = ['mechanical', 'electrical', 'software']

export function Home() {
  return (
    <>
      <PageHead
        title={site.headline}
        lede="We are building a 3U CubeSat and launching it, to make it the University of Waterloo's first satellite launched by students."
        record={[
          { label: 'Mar 2026', value: 'Vibration and thermal vacuum, passed' },
          { label: 'Jun 2026', value: `${awards[0].competition}, first place` },
        ]}
        actions={<>
          <Btn signal to="/join">Join the team</Btn>
          <ArrowLink to="/mission">Our mission</ArrowLink>
        </>}
      />

      <Plate
        bed
        src="/cad-exploded-cut.png"
        alt="Exploded view of the UW Orbital 3U CubeSat assembly"
        caption="V6 flight assembly, exploded — structure, avionics stack, deployable solar panels"
      />

      <Section title="Subteams" action={<ArrowLink to="/team">Meet the team</ArrowLink>}>
        <div className="tiles">
          {teams.filter((t) => FEATURED_TEAMS.includes(t.slug)).map((t) => (
            <Tile key={t.slug} to={`/team/${t.slug}`} image={t.image} title={t.name} />
          ))}
        </div>
      </Section>

      <Section title="Winners of CSDC-6 and CSDC-7. Now we fly it." action={<ArrowLink to="/mission">Read our mission</ArrowLink>}>
        <div className="duo">
          <div className="measure">
            <p className="lede">
              UW Orbital won CSDC-6 in 2023 and CSDC-7 in 2026. The team now competes for CUBICS,
              the Canadian Space Agency program that funds development and buys the launch.
            </p>
          </div>
          <div className="awards">
            {awards.map((a) => <Award key={a.competition} {...a} />)}
          </div>
        </div>
      </Section>
    </>
  )
}

export function Mission() {
  return (
    <>
      <PageHead title={mission.title} lede={mission.statement} />
      <Plate src={heroImages.mission} alt="" ratio="21 / 8" />

      {mission.sections.map((s, i) => (
        <Section key={s.heading} title={s.heading}>
          <Split image={s.images[0]?.src} alt={s.images[0]?.alt} flip={i % 2 === 1}>
            {s.body && <p>{s.body}</p>}
            {s.body2 && <p>{s.body2}</p>}
          </Split>
        </Section>
      ))}

      <Section title="Competition results">
        <div className="awards">
          {awards.map((a) => <Award key={a.competition} {...a} />)}
        </div>
      </Section>

      <Section title="Projects" action={<ArrowLink to="/team">Meet the subteams</ArrowLink>}>
        <Rows>
          {projects.map((p) => <Row key={p.name} lead={p.status} title={p.name} body={p.body} />)}
        </Rows>
      </Section>

      <Section title="Project timeline" alt>
        <Rows>
          {timeline.map((t) => <Row key={t.title} lead={t.date} title={t.title} body={t.body} />)}
        </Rows>
      </Section>
    </>
  )
}

export function Team() {
  return (
    <>
      <PageHead
        title="Six subteams. One satellite."
        lede="Every part of the CubeSat is designed, built and tested by students. Each subteam owns its hardware from the first sketch to the vibration table."
        record={[{ label: teamLead.role, value: teamLead.name }]}
        actions={<Btn signal to="/join">Join the team</Btn>}
      />
      <Plate src={heroImages.team} alt="" ratio="21 / 8" />

      <Section title="Subteams">
        <Rows>
          {teams.map((t) => (
            <Row
              key={t.slug}
              to={`/team/${t.slug}`}
              lead={
                <span className="mark">
                  <img className="mark__base" src={`/icons/${t.slug}.png`} alt="" loading="lazy" />
                  <img className="mark__hover" src={`/icons/${t.slug}-accent.png`} alt="" loading="lazy" />
                </span>
              }
              title={t.name}
              body={t.summary}
              end={<Arrow />}
            />
          ))}
        </Rows>
      </Section>
    </>
  )
}

export function TeamDetail() {
  const { slug } = useParams()
  const t = teams.find((x) => x.slug === slug)
  if (!t) return <NotFound />
  const others = teams.filter((x) => x.slug !== t.slug)
  return (
    <>
      <PageHead title={t.name} lede={t.summary} />
      <Plate src={t.image} alt="" ratio="21 / 8" />

      <Section title="About">
        <div className="duo duo--rail">
          <div className="measure">
            <p>{t.body}</p>
            {t.body2 && <p>{t.body2}</p>}
            {t.stack && (
              <>
                <h3 className="sub">Tech stack</h3>
                <ul className="plain">{t.stack.map((s) => <li key={s}>{s}</li>)}</ul>
              </>
            )}
          </div>
          <aside className="rail">
            <p className="label">Leads</p>
            <ul className="plain">
              {t.leads.map((l) => (
                <li key={l.name}>
                  {l.linkedin
                    ? <a className="ulink" href={l.linkedin} target="_blank" rel="noreferrer">{l.name}</a>
                    : l.name}
                </li>
              ))}
            </ul>
            <div className="actions"><Btn signal to="/join">Join us</Btn></div>
          </aside>
        </div>
      </Section>

      <Section title="Other subteams" alt>
        <div className="tiles">
          {others.map((o) => (
            <Tile key={o.slug} to={`/team/${o.slug}`} image={o.image} title={o.name} />
          ))}
        </div>
      </Section>
    </>
  )
}

export function Sponsors() {
  return (
    <>
      <PageHead
        title="Back the first Waterloo satellite."
        lede={sponsorIntro}
        actions={<>
          <Btn signal href={sponsorPackage}>Sponsorship package</Btn>
          <ArrowLink href={`mailto:${site.email}?subject=${encodeURIComponent('[Our Company] - Sponsoring UW Orbital')}`}>
            Become a sponsor
          </ArrowLink>
        </>}
      />
      <Plate src={heroImages.sponsors} alt="" ratio="21 / 8" />

      {tiers.map((tier) => {
        const list = sponsors.filter((s) => s.tier === tier)
        if (!list.length) return null
        return (
          <Section
            key={tier}
            title={tier}
            action={<span className="label">{list.length} {list.length === 1 ? 'sponsor' : 'sponsors'}</span>}
          >
            <div className="sponsors">
              {list.map((s) => (
                <a className="sponsor" key={s.name} href={s.website} target="_blank" rel="noreferrer">
                  <span className="sponsor__logo"><img src={s.logo} alt={s.alt} loading="lazy" /></span>
                  <span className="sponsor__name">{s.fullName}</span>
                  {s.since && <span className="label sponsor__since">Sponsor since {s.since}</span>}
                  <span className="sponsor__blurb">{s.blurb}</span>
                </a>
              ))}
            </div>
          </Section>
        )
      })}
    </>
  )
}

export function Join() {
  return (
    <>
      <PageHead
        title="Build hardware that leaves the planet."
        lede={join.why}
        actions={<Btn signal href={site.discord}>Join our Discord</Btn>}
      />
      <Plate src={heroImages.join} alt="" ratio="21 / 8" />

      <Section title="How to join" action={<ArrowLink to="/team">Learn about our subteams</ArrowLink>}>
        <Rows numbered>
          {join.steps.map((s) => <Row key={s.n} href={s.href} title={s.title} end={<Arrow />} />)}
        </Rows>
      </Section>

      <Section title="Contact us" alt>
        <Rows>
          <Row href={`mailto:${site.email}`} lead="Email" title={site.email} end={<Arrow />} />
          {site.social.map((s) => (
            <Row key={s.label} href={s.href} lead={s.label} title={s.handle} end={<Arrow />} />
          ))}
        </Rows>
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
  const [lead, ...rest] = galleryImages
  const [open, setOpen] = useState<string | null>(null)
  return (
    <>
      <PageHead title="The build, as it happened." />
      <button className="plate plate--btn" onClick={() => setOpen(lead)}>
        <img src={lead} alt="The UW Orbital team outside the Waterloo sign" />
      </button>

      <Section title="Photographs" action={<ArrowLink to="/team">Meet the subteams</ArrowLink>}>
        <div className="gal">
          {rest.map((src) => (
            <button className="gal__item" key={src} onClick={() => setOpen(src)}>
              <img src={src} alt="" loading="lazy" />
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
      <PageHead title="Page not found." lede="That page is not part of this site." />
      <Section title="Try these instead">
        <Rows>
          <Row to="/mission" title="Mission" body="What we are building, and who pays for the launch." end={<Arrow />} />
          <Row to="/team" title="Team" body="The 6 subteams and the people who lead them." end={<Arrow />} />
          <Row to="/join" title="Join us" body="Two steps to start building." end={<Arrow />} />
        </Rows>
      </Section>
    </>
  )
}
