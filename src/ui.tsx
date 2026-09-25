import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/** JPL's BaseButton, set in NASA's bold sentence case (site.scss).
 *  `primary` is the red fill, `dark` the white outline. */
export function Btn({ to, href, variant = 'primary', outline, compact, className = '', children }: {
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'dark'
  /** Shorthand for the `dark` variant: the second action. */
  outline?: boolean
  compact?: boolean
  className?: string
  children: ReactNode
}) {
  const v = outline || variant === 'secondary' ? 'dark' : variant
  const cls = `BaseButton -${v}${compact ? ' -compact' : ''} inline-block text-base ${className}`
  const inner = <span className="label block">{children}</span>
  if (to) return <Link className={cls} to={to}>{inner}</Link>
  return <a className={cls} href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{inner}</a>
}

/** The page grid's wrapper. The header, every section, and the footer use
 *  it, so all of them share one left edge and one right edge. */
export const WRAP = 'container mx-auto px-4 lg:px-10 2xl:px-0'

/** NASA's link mark: a red disc with a white arrow. It moves on hover of the
 *  nearest `group`. */
export function Go({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-flex flex-none items-center justify-center rounded-full bg-primary text-white align-middle transition-transform duration-200 can-hover:group-hover:translate-x-1 ${className}`}>
      <svg className="w-[60%] h-[60%]" viewBox="0 0 16 16" fill="none">
        <path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    </span>
  )
}

/** A title with the link mark. The last word and the mark never split across
 *  lines, so the mark is never alone on a line. */
export function Titled({ title, mark }: { title: string; mark?: string }) {
  const i = title.lastIndexOf(' ')
  return (
    <>
      {title.slice(0, i + 1)}
      <span className="whitespace-nowrap">
        {title.slice(i + 1)}
        <span className="inline-block ml-3 -translate-y-[0.1em]"><Go className={mark} /></span>
      </span>
    </>
  )
}

/** NASA's text link: bold, sentence case, then the link mark. */
export function ArrowLink({ to, href, children }: { to?: string; href?: string; children: ReactNode }) {
  const cls = 'group inline-flex items-center gap-3 font-display font-bold text-lg text-white'
  const inner = <>{children}<Go /></>
  if (to) return <Link to={to} className={cls}>{inner}</Link>
  return <a href={href} target="_blank" rel="noreferrer" className={cls}>{inner}</a>
}

/** NASA's label: DM Mono, capitals, wide tracking. Grey, so red stays the
 *  colour of actions. */
export function Kicker({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`label-mono text-gray-mid ${className}`}>{children}</p>
}

/** One fact in a hero's bottom row. With `to` or `href` it is a link. */
export type Fact = { label: string; value: string; to?: string; href?: string }

/** The hero's bottom row, as on nasa.gov: a rule over each column, the label
 *  in mono, then the value. */
function Facts({ items }: { items: Fact[] }) {
  return (
    <dl className={`grid grid-cols-2 ${items.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-x-6 gap-y-8 mt-14 lg:mt-20`}>
      {items.map((f) => {
        const value = f.to || f.href
          ? f.to
            ? <Link className="group" to={f.to}><Titled title={f.value} /></Link>
            : <a className="group" href={f.href} target="_blank" rel="noreferrer"><Titled title={f.value} /></a>
          : f.value
        return (
          // A linked fact is a phrase, not a figure, so on a phone it takes the full row.
          <div key={f.label} className={`flex flex-col-reverse justify-end border-t border-white border-opacity-30 pt-5 ${f.to || f.href ? 'col-span-2 lg:col-span-1' : ''}`}>
            <dt className="label-mono text-gray-light-mid">{f.label}</dt>
            <dd className="font-display font-bold text-2xl lg:text-3xl mb-2">{value}</dd>
          </div>
        )
      })}
    </dl>
  )
}

/** The hero on every page, sized like Home's: a photograph under a gradient,
 *  the mono label, the one h1 at 72px, the summary, the actions, and a row of
 *  facts along the bottom. The header sits over it, and the bottom edge fades
 *  into the black ground so the page has no seam under the photograph. */
export function PageHero({ title, kicker, lede, image, crumb, home, facts, children }: {
  title: string
  kicker?: string
  lede?: string
  image?: string
  /** The parent page, shown as the label with a link. */
  crumb?: { to: string; label: string }
  /** Home's hero is taller. Everything else is the same. */
  home?: boolean
  facts?: Fact[]
  children?: ReactNode
}) {
  return (
    <section className="relative bg-black">
      <div className="absolute inset-0">
        {image && <img className="object-cover w-full h-full" src={image} alt="" />}
        <div className="bg-gradient-to-t lg:bg-gradient-to-r from-transparent-black-75 to-transparent absolute inset-0"></div>
        <div className="bg-gradient-to-t from-black to-transparent absolute inset-x-0 bottom-0 h-40"></div>
      </div>
      <div className={`relative flex items-end ${home ? 'min-h-[44rem] lg:min-h-[52rem]' : 'min-h-[36rem] lg:min-h-[44rem]'}`}>
        <div className={`${WRAP} w-full pt-40 pb-10 lg:pb-14`}>
          {crumb && (
            <Link to={crumb.to} className="label-mono text-gray-light-mid inline-block mb-5 lg:mb-6 can-hover:hover:text-white">← {crumb.label}</Link>
          )}
          {!crumb && kicker && <p className="label-mono text-gray-light-mid mb-5 lg:mb-6">{kicker}</p>}
          <h1 className="font-display font-bold mb-6 lg:w-3/4 xl:w-2/3 text-7xl md:text-8xl lg:text-9xl xl:text-10xl leading-tighter">
            {title}
          </h1>
          {lede && <p className="font-display text-gray-light lg:w-1/2 text-lg md:text-xl lg:text-2xl">{lede}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
          {facts && <Facts items={facts} />}
        </div>
      </div>
    </section>
  )
}

/** A page section. Every section sits on the same black ground: sections
 *  change by space and by heading, not by a band of colour. `stars` sets it
 *  on JPL's star field. */
export function Section({ kicker, title, action, stars, children }: {
  kicker?: string
  title?: string
  action?: ReactNode
  stars?: boolean
  children: ReactNode
}) {
  return (
    <section className="relative py-16 lg:py-24">
      {/* The star field fades out at both edges, so it has no band edge. */}
      {stars && <div className="bg-stars absolute inset-0 [mask-image:linear-gradient(transparent,black_30%,black_70%,transparent)]"></div>}
      <div className={`${WRAP} relative`}>
        {(title || kicker) && (
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 lg:mb-14">
            <div>
              {kicker && <Kicker className="mb-4">{kicker}</Kicker>}
              {title && <h2 className="text-h2 font-display font-bold">{title}</h2>}
            </div>
            {action}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

/** Home's closing section, on every page: the star field, a large line, the
 *  reason, and the one action. */
export function Closing({ kicker, title, body, children }: { kicker: string; title: string; body: string; children: ReactNode }) {
  return (
    <Section stars>
      <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-end py-8 lg:py-16">
        <div className="lg:col-span-8">
          <Kicker className="mb-5">{kicker}</Kicker>
          <h2 className="font-display font-bold text-6xl md:text-7xl lg:text-8xl leading-tighter mb-6">{title}</h2>
          <p className="text-body-lg text-gray-light-mid mb-8 lg:mb-0">{body}</p>
        </div>
        <div className="lg:col-span-4 lg:text-right">{children}</div>
      </div>
    </Section>
  )
}

/** A CAD figure. The renders were drawn for a white ground, and the black
 *  solar panels vanish on black, so each one keeps a light plate. */
export function Plate({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`bg-gray-200 p-6 lg:p-10 ${className}`}>
      <img className="w-full h-auto" src={src} alt={alt} loading="lazy" />
    </div>
  )
}

/** A competition result: the laurel wreath is one image, and the text inside
 *  it is type. A new result needs a row in `awards`, not new artwork. */
export function Award({ competition, result, year, className = '' }: {
  competition: string
  result: string
  year: string
  className?: string
}) {
  return (
    // The text is sized in container units, so it scales with the wreath.
    <figure className={`relative aspect-square flex-none [container-type:inline-size] ${className}`}>
      <img className="absolute inset-0 w-full h-full" src="/laurel.png" alt="" />
      <figcaption className="absolute inset-[22%] flex flex-col items-center justify-center text-center leading-tight">
        <span className="font-display font-bold text-[13cqw] whitespace-nowrap">{competition}</span>
        <span className="label-mono text-gray-light-mid !text-[5.5cqw] mt-[3cqw]">{result}</span>
        <span className="text-gray-mid text-[7cqw] mt-[1cqw]">{year}</span>
      </figcaption>
    </figure>
  )
}

/** The 2 results side by side. */
export function Awards({ items, size = 'w-40 lg:w-48' }: { items: { competition: string; result: string; year: string }[]; size?: string }) {
  return (
    <div className="flex flex-wrap gap-4 lg:gap-6">
      {items.map((a) => <Award key={a.competition} {...a} className={size} />)}
    </div>
  )
}

/** NASA's topic tile: a portrait photograph, and the title set inside it at
 *  the bottom with the link mark. The photograph scales down on hover. */
export function Tile({ to, image, title, body }: {
  to: string
  image: string
  title: string
  body?: string
}) {
  return (
    <Link to={to} className="group relative block overflow-hidden aspect-[4/5] bg-gray-dark">
      <img
        src={image}
        alt=""
        loading="lazy"
        className="can-hover:group-hover:scale-100 absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out transform scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent-black-50 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
        <p className="font-display font-bold text-3xl lg:text-4xl leading-tight"><Titled title={title} mark="w-6 h-6" /></p>
        {body && <p className="text-body-sm text-gray-light-mid mt-3">{body}</p>}
      </div>
    </Link>
  )
}
