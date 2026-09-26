import { useEffect, useRef, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {
  site, heroImages, awards, mission, missionStations, timeline, teams, teamLead, galleryImages,
  join, sponsors, sponsorIntro, sponsorPackage, tiers,
} from './content'
import { ArrowLink, Awards, Btn, Closing, Go, Kicker, PageHero, Plate, Section, Tile, Titled, WRAP } from './ui'

// The 3 subteams the landing page shows. The order follows `teams`.
const FEATURED_TEAMS = ['mechanical', 'electrical', 'software']

// Subteam lead seats. One person can hold seats on 2 subteams, and each seat
// counts, so this matches the team's own count of 17.
const LEAD_SEATS = teams.reduce((n, t) => n + t.leads.length, 0)

/** The closing section most pages end on: the way in for a new member. */
function JoinClosing() {
  return (
    <Closing kicker="Join us" title="Build hardware that leaves the planet." body={join.why}>
      <Btn href={site.discord}>Join our Discord</Btn>
    </Closing>
  )
}

export function Home() {
  return (
    <>
      <PageHero
        home
        image="/space/field.jpg"
        screen
        kicker={site.tagline}
        title={site.headline}
        lede="We are building a 3U CubeSat and launching it, to make it the University of Waterloo's first satellite launched by students."
        facts={[
          { label: 'CubeSat', value: '3U' },
          { label: `${awards[1].competition}, first place`, value: awards[1].year },
          { label: `${awards[0].competition}, first place`, value: awards[0].year },
          { label: 'Vibration and thermal vacuum', value: 'Passed' },
        ]}
      >
        <Btn to="/join">Join the team</Btn>
        <Btn to="/mission" outline>Our mission</Btn>
      </PageHero>

      {/* JPL's BlockTeaser: the image on the wide side, the text beside it. */}
      <section className="py-16 lg:py-28">
        <div className={`${WRAP} lg:grid lg:grid-cols-12 lg:gap-12 items-center`}>
          <div className="lg:col-span-7 mb-10 lg:mb-0">
            <img className="w-full h-auto" src="/cad-exploded-cut.png" alt="The UW Orbital V6 CubeSat, shown exploded" />
          </div>
          <div className="lg:col-span-5">
            <Awards items={awards} size="w-32 lg:w-40" />
            <h2 className="text-h2 font-display font-bold mt-8 mb-6">Winners of <span className="whitespace-nowrap">CSDC-6</span> and <span className="whitespace-nowrap">CSDC-7</span>. Now we fly it.</h2>
            <p className="text-body-lg text-gray-light-mid mb-8">
              UW Orbital won CSDC-6 in 2023 and CSDC-7 in 2026. The team now competes for CUBICS,
              the Canadian Space Agency program that funds development and buys the launch.
            </p>
            <ArrowLink to="/mission">Read our mission</ArrowLink>
          </div>
        </div>
      </section>

      <Section title="Subteams" action={<ArrowLink to="/team">Meet the team</ArrowLink>}>
        <div className="grid md:grid-cols-3 gap-5">
          {teams.filter((t) => FEATURED_TEAMS.includes(t.slug)).map((t) => (
            <Tile key={t.slug} to={`/team/${t.slug}`} image={t.image} title={t.name} body={t.summary} />
          ))}
        </div>
      </Section>

      <JoinClosing />
    </>
  )
}

export function Mission() {
  const [satellite, competition, payload] = missionStations
  const next = timeline[timeline.length - 2]
  return (
    <>
      <PageHero
        image={heroImages.mission}
        kicker="3U CubeSat"
        title={mission.title}
        lede={mission.statement}
        facts={[
          { label: 'Satellite', value: satellite.title },
          { label: 'Competition', value: 'CSDC-6 and CSDC-7' },
          { label: 'Payload', value: payload.title },
          { label: next.date, value: next.title },
        ]}
      />

      {/* The overview, first: the facts a sponsor came for, in one screen. */}
      <Section title="The mission at a glance">
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
          {[
            { lead: 'Satellite', s: satellite },
            { lead: 'Competition', s: competition },
            { lead: 'Payload', s: payload },
          ].map(({ lead, s }) => (
            <div key={s.slug}>
              <div className="aspect-[4/3] bg-gray-dark overflow-hidden mb-6">
                <img
                  className={`w-full h-full ${s.float ? 'object-contain bg-ground p-4' : 'object-cover'}`}
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                />
              </div>
              <Kicker className="mb-3">{lead}</Kicker>
              <h3 className="text-h5 font-display font-bold mb-3">{s.title}</h3>
              <p className="text-body-md text-gray-light-mid">{s.lead}</p>
            </div>
          ))}
        </div>
      </Section>

      {mission.sections.map((s, i) => (
        <Section key={s.heading}>
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className={`lg:col-span-6 mb-10 lg:mb-0 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <Kicker className="mb-4">{`0${i + 1}`}</Kicker>
              <h2 className="text-h2 font-display font-bold mb-6">{s.heading}</h2>
              <div className="text-body-lg text-gray-light-mid space-y-5 lg:pr-6">
                <p>{s.body}</p>
                {s.body2 && <p>{s.body2}</p>}
              </div>
            </div>
            <div className="lg:col-span-6">
              {/* Competition shows the 2 results. The exploded render is
                  already in the overview above. */}
              {s.heading === 'Competition'
                ? <div className="flex justify-center"><Awards items={awards} size="w-44 sm:w-56 lg:w-64" /></div>
                : s.images[0] && <Plate src={s.images[0].src} alt={s.images[0].alt} />}
            </div>
          </div>
        </Section>
      ))}

      <Section kicker="Timeline" title="From kickoff to orbit" action={<ArrowLink to="/team">Meet the subteams</ArrowLink>}>
        <ol>
          {timeline.map((t, i) => {
            const last = i === timeline.length - 1
            return (
              <li key={t.title} className="lg:grid lg:grid-cols-12 lg:gap-12 border-t border-white border-opacity-15 py-6 lg:py-8">
                <p className={`lg:col-span-3 label-mono mb-2 lg:mb-0 lg:pt-1.5 ${last ? 'text-primary' : 'text-gray-mid'}`}>{t.date}</p>
                <div className="lg:col-span-9 lg:grid lg:grid-cols-9 lg:gap-12">
                  <h3 className="lg:col-span-4 text-h6 font-display font-bold mb-2 lg:mb-0">{t.title}</h3>
                  <p className="lg:col-span-5 text-body-md text-gray-light-mid">{t.body}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </Section>

      <JoinClosing />
    </>
  )
}

export function Team() {
  return (
    <>
      <PageHero
        image={heroImages.team}
        kicker="The team"
        title="Team"
        lede="Six subteams design, build and test the CubeSat."
        facts={[
          { label: teamLead.role, value: teamLead.name },
          { label: 'Subteams', value: String(teams.length) },
          { label: 'Subteam leads', value: String(LEAD_SEATS) },
        ]}
      >
        <Btn to="/join">Join the team</Btn>
      </PageHero>

      <Section title="Six subteams">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {teams.map((t) => (
            <Tile key={t.slug} to={`/team/${t.slug}`} image={t.image} title={t.name} body={t.summary} />
          ))}
        </div>
      </Section>

      <JoinClosing />
    </>
  )
}

export function TeamDetail() {
  const { slug } = useParams()
  const t = teams.find((x) => x.slug === slug)
  if (!t) return <NotFound />
  return (
    <>
      <PageHero
        image={t.image}
        crumb={{ to: '/team', label: 'Team' }}
        title={t.name}
        lede={t.summary}
        facts={[
          { label: 'Leads', value: String(t.leads.length) },
          { label: 'All subteams', value: 'Meet the team', to: '/team' },
        ]}
      />

      <Section>
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 mb-14 lg:mb-0">
            <Kicker className="mb-5">About</Kicker>
            <div className="text-body-lg text-gray-light space-y-5">
              <p>{t.body}</p>
              {t.body2 && <p>{t.body2}</p>}
            </div>
            {t.stack && (
              <>
                <Kicker className="mt-12 mb-5">Tech stack</Kicker>
                <ul className="text-body-md text-gray-light-mid">
                  {t.stack.map((s) => <li key={s} className="border-t border-white border-opacity-15 py-3">{s}</li>)}
                </ul>
              </>
            )}
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <Kicker className="mb-5">Leads</Kicker>
            <ul className="mb-8">
              {t.leads.map((l) => (
                <li key={l.name} className="text-h6 font-display font-bold border-t border-white border-opacity-15 py-3">
                  {l.linkedin ? <a className="can-hover:hover:text-primary" href={l.linkedin} target="_blank" rel="noreferrer">{l.name}</a> : l.name}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      {/* Every subteam, with this one marked: the way on to the next page. */}
      <Section title="The other subteams">
        <nav aria-label="Subteams" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {teams.map((o) => (
            <NavLink
              key={o.slug}
              to={`/team/${o.slug}`}
              className={({ isActive }) => `group flex items-center justify-between gap-4 border-t border-white border-opacity-15 py-5 ${isActive ? 'text-gray-mid pointer-events-none' : ''}`}
            >
              {({ isActive }) => (
                <>
                  <span className="text-h6 font-display font-bold">{o.name}</span>
                  {isActive ? <span className="label-mono">You are here</span> : <Go />}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </Section>

      <JoinClosing />
    </>
  )
}

/** One sponsor. The logo keeps a light plate: every logo was drawn for a
 *  white ground, and most use dark ink that vanishes on black. `large` is the
 *  top tier: the plate and the text side by side. */
function Sponsor({ s, large }: { s: (typeof sponsors)[number]; large?: boolean }) {
  return (
    <a className={`group block ${large ? 'md:grid md:grid-cols-12 md:gap-12 items-center' : ''}`} href={s.website} target="_blank" rel="noreferrer">
      <div className={`bg-gray-200 flex items-center justify-center mb-5 aspect-[3/2] ${large ? 'md:col-span-6 md:mb-0' : ''}`}>
        <img className="max-w-[70%] max-h-[55%] object-contain transition-transform duration-300 can-hover:group-hover:scale-105" src={s.logo} alt={s.alt} loading="lazy" />
      </div>
      <div className={large ? 'md:col-span-6' : ''}>
        <p className={`${large ? 'text-h3' : 'text-h6'} font-display font-bold mb-3`}><Titled title={s.fullName} mark={large ? 'w-6 h-6' : 'w-4 h-4'} /></p>
        {s.since && <p className="label-mono text-gray-mid mb-3">Since {s.since}</p>}
        <p className={large ? 'text-body-lg text-gray-light-mid' : 'text-body-sm text-gray-mid'}>{s.blurb}</p>
      </div>
    </a>
  )
}

// The intro's first sentence is the hero's summary. The rest closes the page,
// beside the actions it argues for.
const [introLead, ...introRest] = sponsorIntro.split(/(?<=\.) /)

export function Sponsors() {
  const becomeSponsor = `mailto:${site.email}?subject=${encodeURIComponent('[Our Company] - Sponsoring UW Orbital')}`
  return (
    <>
      <PageHero
        image={heroImages.sponsors}
        kicker="Partners"
        title="Sponsors"
        lede={introLead}
        facts={[
          { label: 'Sponsors', value: String(sponsors.length) },
          { label: 'Tiers', value: String(tiers.length) },
          { label: 'Contact', value: site.email, href: becomeSponsor },
        ]}
      >
        <Btn href={sponsorPackage}>Sponsorship package</Btn>
        <Btn outline href={becomeSponsor}>Become a sponsor</Btn>
      </PageHero>

      {tiers.map((tier) => {
        const list = sponsors.filter((s) => s.tier === tier)
        if (!list.length) return null
        const top = tier === 'Eternium'
        return (
          <Section key={tier} kicker={`${list.length} ${list.length === 1 ? 'sponsor' : 'sponsors'}`} title={tier}>
            <div className={`grid gap-x-8 gap-y-12 ${top ? '' : tier === 'Gold' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
              {list.map((s) => <Sponsor key={s.name} s={s} large={top} />)}
            </div>
          </Section>
        )
      })}

      <Closing kicker="Partners" title="Become a sponsor" body={introRest.join(' ')}>
        <div className="flex flex-wrap lg:justify-end gap-4">
          <Btn href={sponsorPackage}>Sponsorship package</Btn>
          <Btn outline href={becomeSponsor}>Become a sponsor</Btn>
        </div>
      </Closing>
    </>
  )
}

export function Join() {
  const contacts = [{ label: 'Email', handle: site.email, href: `mailto:${site.email}` }, ...site.social]
  return (
    <>
      {/* The 2 steps are the hero's facts: the way in is the first thing a
          new member sees. */}
      <PageHero
        image={heroImages.join}
        kicker="Join us"
        title="Build hardware that leaves the planet."
        facts={join.steps.map((s) => ({ label: `Step 0${s.n}`, value: s.title, href: s.href }))}
      />

      <Section>
        <Kicker className="mb-5">Why join</Kicker>
        <p className="font-display text-lg lg:text-2xl text-gray-light lg:w-2/3 mb-8">{join.why}</p>
        <ArrowLink to="/team">Learn about our subteams</ArrowLink>
      </Section>

      <Section title="Contact us">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
          {contacts.map((c) => (
            <li key={c.label}>
              <a className="group block border-t border-white border-opacity-20 pt-5 pb-8" href={c.href} target="_blank" rel="noreferrer">
                <Kicker className="mb-3">{c.label}</Kicker>
                <span className="text-h6 font-display font-bold can-hover:group-hover:text-primary">{c.handle}</span>
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
    <dialog
      className="bg-transparent p-0 max-w-[92vw] max-h-[92vh] backdrop:bg-[rgba(0,0,0,0.94)] cursor-zoom-out"
      ref={ref}
      onClose={onClose}
      onClick={onClose}
    >
      {src && <img className="block max-w-[92vw] max-h-[92vh] object-contain" src={src} alt="" />}
    </dialog>
  )
}

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <>
      {/* The first photograph is the hero, so the grid starts at the second. */}
      <PageHero
        image={galleryImages[0]}
        kicker="The team at work"
        title="Gallery"
        facts={[
          { label: 'Photographs', value: String(galleryImages.length) },
          { label: 'The people', value: 'Meet the team', to: '/team' },
          { label: 'Instagram', value: '@uworbital', href: site.social[0].href },
        ]}
      />
      <Section>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {galleryImages.slice(1).map((src, i) => (
            <button key={src} type="button" className="group block w-full mb-4 overflow-hidden bg-gray-dark cursor-zoom-in" aria-label={`Open photograph ${i + 1} of ${galleryImages.length - 1}`} onClick={() => setOpen(src)}>
              <img
                className="w-full h-auto transition-transform duration-300 ease-out can-hover:group-hover:scale-[1.03]"
                src={src}
                alt=""
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </Section>
      <Lightbox src={open} onClose={() => setOpen(null)} />
      <JoinClosing />
    </>
  )
}

export function NotFound() {
  return (
    <PageHero home image="/space/field.jpg" screen kicker="404" title="Page not found" lede="That page is not part of this site.">
      <Btn to="/mission">Mission</Btn>
      <Btn to="/team" outline>Team</Btn>
      <Btn to="/join" outline>Join us</Btn>
    </PageHero>
  )
}
