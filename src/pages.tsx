import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  site, heroImages, awards, mission, timeline, projects, teams, teamLead, galleryImages,
  join, sponsors, sponsorIntro, sponsorPackage, tiers,
} from './content'
import { ArrowLink, Award, Card, Hero, Section, Split } from './ui'

// The 3 subteams the landing page shows. Software replaced GNC here.
// The order follows `teams`, which already lists these 3 in this order.
const FEATURED_TEAMS = ['mechanical', 'electrical', 'software']

export function Home() {
  return (
    <>
      <Hero
        image={heroImages.home}
        assembly="/cad-exploded-cut.png"
        title={site.headline}
        sub="We are building a 3U CubeSat and launching it, to make it the University of Waterloo's first satellite launched by students."
        record={[
          { label: 'Mar 2026', value: 'Vibration and thermal vacuum, passed' },
          { label: 'Jun 2026', value: `${awards[0].competition}, first place` },
        ]}
      >
        <Link className="btn btn--primary" to="/join">Join the Team</Link>
        <Link className="btn btn--ghost" to="/mission">Our Mission</Link>
      </Hero>

      <Section wash title="Our Subteams" action={<ArrowLink to="/team">Meet the team</ArrowLink>}>
        <div className="grid grid--3">
          {teams.filter((t) => FEATURED_TEAMS.includes(t.slug)).map((t) => (
            <Card key={t.slug} to={`/team/${t.slug}`} image={t.image} meta="Subteam" title={t.name} />
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="split">
          <div>
            <p className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Next: CUBICS 2026</p>
            <h2 style={{ fontSize: 'var(--fs-6)' }}>Winners of CSDC-7. Now we fly it.</h2>
            <p className="lede" style={{ marginTop: 'var(--space-4)' }}>
              UW Orbital won CSDC-6 in 2023 and CSDC-7 in 2026. The team now competes for CUBICS,
              the Canadian Space Agency program that funds development and buys the launch.
            </p>
            <div style={{ marginTop: 'var(--space-4)' }}><ArrowLink to="/mission">Read our mission</ArrowLink></div>
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
      <Hero image={heroImages.mission} title={mission.title} sub={mission.statement} />
      <Section>
        {mission.sections.map((s, i) => (
          <Split key={s.heading} heading={s.heading} image={s.images[0]?.src} alt={s.images[0]?.alt} flip={i % 2 === 1}>
            {s.body && <p>{s.body}</p>}
            {s.body2 && <p>{s.body2}</p>}
          </Split>
        ))}
      </Section>
      <Section dark center title="Competition results">
        {/* .awards already centres its laurels. The inline flex-start override
            that used to be here is what pushed them left. */}
        <div className="awards">
          {awards.map((a) => <Award key={a.competition} {...a} />)}
        </div>
      </Section>
      <Section title="Projects" action={<ArrowLink to="/team">Meet the subteams</ArrowLink>}>
        <div className="grid grid--2">
          {projects.map((p) => (
            <div className="box" key={p.name}>
              <p className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>{p.status}</p>
              <h3>{p.name}</h3>
              <p style={{ marginTop: 'var(--space-2)' }}>{p.body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section wash center title="Project Timeline">
        <div className="timeline timeline--center">
          {timeline.map((t) => (
            <article className="tl" key={t.title}>
              <div className="tl__date">{t.date}</div>
              <div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}

export function Team() {
  return (
    <>
      <Hero
        image={heroImages.team}
        title="Team"
      />

      <Section tight>
        <div className="stat" style={{ maxWidth: 420 }}>
          <div className="stat__l">{teamLead.role}</div>
          <div style={{ fontSize: 'var(--fs-5)', fontWeight: 'var(--fw-bold)', marginTop: 'var(--space-1)' }}>{teamLead.name}</div>
        </div>
      </Section>

      <Section wash title="Subteams">
        <div className="teamgrid">
          {teams.map((t) => (
            <Link className="teamcard" key={t.slug} to={`/team/${t.slug}`}>
              <span className="teamcard__icon">
                <img className="teamcard__icon-base" src={`/icons/${t.slug}.png`} alt="" loading="lazy" />
                <img className="teamcard__icon-hover" src={`/icons/${t.slug}-accent.png`} alt="" loading="lazy" />
              </span>
              <div className="teamcard__body">
                <h3>{t.name}</h3>
                <p className="teamcard__summary">{t.summary}</p>
                <span className="teamcard__more">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
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
      <Hero image={t.image} title={t.name} sub={t.summary} />

      <Section>
        <div className="split split--top split--rail">
          <div>
            <h3>About</h3>
            <p>{t.body}</p>
            {t.body2 && <p>{t.body2}</p>}
            {t.stack && (
              <>
                <h3 style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-3)' }}>Tech stack</h3>
                <ul className="owns">{t.stack.map((s) => <li key={s}>{s}</li>)}</ul>
              </>
            )}
          </div>
          <div>
            <p className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>Leads</p>
            <ul className="leadlist">
              {t.leads.map((l) => (
                <li key={l.name}>
                  {l.linkedin
                    ? <a href={l.linkedin} target="_blank" rel="noreferrer">{l.name}</a>
                    : l.name}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 'var(--space-4)' }}>
              <Link className="btn btn--primary" to="/join">Join us</Link>
            </div>
          </div>
        </div>
      </Section>

      <Section wash title="Other subteams">
        <div className="grid grid--3">
          {others.map((o) => (
            <Card key={o.slug} to={`/team/${o.slug}`} image={o.image} meta="Subteam" title={o.name} />
          ))}
        </div>
      </Section>
    </>
  )
}

export function Sponsors() {
  return (
    <>
      <Hero image={heroImages.sponsors} title="Sponsors" />
      <Section>
        <div className="split" style={{ marginBottom: 0 }}>
          <div>
            <h3 style={{ fontSize: 'var(--fs-5)', marginBottom: 'var(--space-3)' }}>Why sponsor us?</h3>
            <p>{sponsorIntro}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
            <a className="btn btn--primary" href={sponsorPackage} target="_blank" rel="noreferrer">Sponsorship Package</a>
            <a
              className="btn btn--ghost"
              style={{ borderColor: 'var(--border-strong)', color: 'var(--text-strong)' }}
              href={`mailto:${site.email}?subject=${encodeURIComponent('[Our Company] - Sponsoring UW Orbital')}`}
            >
              Become a Sponsor
            </a>
          </div>
        </div>
      </Section>

      <Section wash>
        {tiers.map((tier) => {
          const list = sponsors.filter((s) => s.tier === tier)
          if (!list.length) return null
          return (
            <div className="tier" key={tier}>
              <div className="tier__head">
                <h3>{tier}</h3>
                <span className="tier__count">{list.length} {list.length === 1 ? 'sponsor' : 'sponsors'}</span>
              </div>
              <div className="sponsorgrid">
                {list.map((s) => (
                  <a className="sponsor" key={s.name} href={s.website} target="_blank" rel="noreferrer">
                    <span className="sponsor__logo"><img src={s.logo} alt={s.alt} loading="lazy" /></span>
                    <h4>{s.fullName}</h4>
                    {s.since && <div className="sponsor__since">Sponsor since {s.since}</div>}
                    <p>{s.blurb}</p>
                  </a>
                ))}
              </div>
            </div>
          )
        })}
      </Section>
    </>
  )
}

export function Join() {
  return (
    <>
      <Hero image={heroImages.join} title="Build hardware that leaves the planet." sub={join.why} />
      <Section title="How to join">
        <div className="steps">
          {join.steps.map((s) => (
            <a className="step" key={s.n} href={s.href} target="_blank" rel="noreferrer">
              <span className="step__n">Step {s.n}</span>
              <h3>{s.title}</h3>
            </a>
          ))}
        </div>
        <div style={{ marginTop: 'var(--space-5)' }}>
          <ArrowLink to="/team">Learn more about our subteams</ArrowLink>
        </div>
      </Section>
      <Section wash title="Contact us">
        <div className="grid grid--4">
          <a className="step" href={`mailto:${site.email}`}>
            <span className="step__n">Email</span>
            <h3 style={{ fontSize: 'var(--fs-4)' }}>{site.email}</h3>
          </a>
          {site.social.map((s) => (
            <a className="step" key={s.label} href={s.href} target="_blank" rel="noreferrer">
              <span className="step__n">{s.label}</span>
              <h3 style={{ fontSize: 'var(--fs-4)' }}>{s.handle}</h3>
            </a>
          ))}
        </div>
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
      <Hero image={heroImages.team} title="Gallery" />
      <Section>
        <button className="gallery__item" style={{ marginBottom: 'var(--space-4)' }} onClick={() => setOpen(lead)}>
          <img src={lead} alt="The UW Orbital team outside the Waterloo sign" className="gallery__lead" />
        </button>
        <div className="gallery">
          {rest.map((src) => (
            <button className="gallery__item" key={src} onClick={() => setOpen(src)}>
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
        <div style={{ marginTop: 'var(--space-5)' }}>
          <ArrowLink to="/team">Meet the subteams</ArrowLink>
        </div>
      </Section>
      <Lightbox src={open} onClose={() => setOpen(null)} />
    </>
  )
}

export function NotFound() {
  return (
    <Section title="Page not found">
      <p className="lede">That page is not part of this site.</p>
      <div style={{ marginTop: 'var(--space-4)' }}><ArrowLink to="/mission">Go to our mission page</ArrowLink></div>
    </Section>
  )
}
