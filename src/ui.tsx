import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/** JPL's BaseButton. `primary` is the red fill, `dark` the white outline.
 *  Every page is on the dark ground, so `secondary` renders as `dark`. */
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

/** A title with a trailing arrow. The last word and the arrow never split
 *  across lines, so the arrow is never alone on a line. */
export function Titled({ title, className = '' }: { title: string; className?: string }) {
  const i = title.lastIndexOf(' ')
  return (
    <>
      {title.slice(0, i + 1)}
      <span className="whitespace-nowrap">
        {title.slice(i + 1)}
        <Arrow className={`text-primary ml-2 transition-transform can-hover:group-hover:translate-x-1 ${className}`} />
      </span>
    </>
  )
}

/** JPL's IconArrow. */
export function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg className={`inline-block w-[1em] h-[1em] ${className}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

/** A text link with JPL's trailing arrow, which moves on hover. */
export function ArrowLink({ to, href, children }: { to?: string; href?: string; children: ReactNode }) {
  const cls = 'group text-subtitle inline-flex items-center gap-2 text-white'
  const inner = <>{children}<Arrow className="text-primary transition-transform duration-200 can-hover:group-hover:translate-x-1" /></>
  if (to) return <Link to={to} className={cls}>{inner}</Link>
  return <a href={href} target="_blank" rel="noreferrer" className={cls}>{inner}</a>
}

/** The label above a heading. Grey, so red stays the colour of actions. */
export function Kicker({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-subtitle text-gray-mid ${className}`}>{children}</p>
}

/** JPL's HeroLarge on Home (`home`), HeroMedium elsewhere: a photograph under
 *  a gradient, the subtitle label, the one h1, and the summary. The header
 *  sits over it on every page, and the bottom edge fades into the black ground
 *  so the page has no seam under the photograph. */
export function PageHero({ title, kicker, lede, image, crumb, home, children }: {
  title: string
  kicker?: string
  lede?: string
  image?: string
  /** The parent page, shown as the label with a link. */
  crumb?: { to: string; label: string }
  home?: boolean
  children?: ReactNode
}) {
  return (
    <section className={`${home ? 'HeroLarge' : 'HeroMedium'} relative bg-black`}>
      <div className="absolute inset-0">
        {image && <img className="object-cover w-full h-full" src={image} alt="" />}
        <div className="bg-gradient-to-t lg:bg-gradient-to-r from-transparent-black-75 to-transparent absolute inset-0"></div>
        <div className="bg-gradient-to-t from-black to-transparent absolute inset-x-0 bottom-0 h-40"></div>
      </div>
      <div className={`relative flex items-end ${home ? 'min-h-[40rem] lg:min-h-[48rem]' : 'min-h-[30rem] lg:min-h-[36rem]'}`}>
        <div className={`${WRAP} w-full ${home ? 'pt-40 pb-16 lg:pb-24' : 'pt-36 pb-12 lg:pb-16'}`}>
          {crumb && (
            <Link to={crumb.to} className="text-subtitle text-gray-light-mid inline-block mb-4 can-hover:hover:text-white">← {crumb.label}</Link>
          )}
          {!crumb && kicker && <p className="text-subtitle text-gray-light-mid mb-4 lg:mb-6">{kicker}</p>}
          <h1 className={`font-display font-bold leading-tight mb-5 ${home ? 'lg:w-3/4 xl:w-3/5 text-7xl md:text-8xl lg:text-9xl xl:text-10xl lg:leading-tighter' : 'lg:w-3/4 text-6xl md:text-7xl lg:text-8xl'}`}>
            {title}
          </h1>
          {lede && <p className={`font-display text-gray-light lg:w-1/2 ${home ? 'text-lg md:text-2xl lg:text-3xl' : 'text-lg md:text-xl lg:text-2xl'}`}>{lede}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
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
              {kicker && <Kicker className="mb-3">{kicker}</Kicker>}
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
    <figure className={`relative aspect-square flex-none ${className}`}>
      <img className="absolute inset-0 w-full h-full" src="/laurel.png" alt="" />
      <figcaption className="absolute inset-[22%] flex flex-col items-center justify-center text-center leading-tight">
        <span className="font-display font-bold text-xl lg:text-2xl whitespace-nowrap">{competition}</span>
        <span className="text-subtitle text-gray-light-mid mt-1">{result}</span>
        <span className="text-sm text-gray-mid mt-1">{year}</span>
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

/** JPL's BlockLinkCard: a 16:9 image that scales on hover, then the title.
 *  The content lifts as the image grows. */
export function ImageCard({ to, image, title, body }: {
  to: string
  image: string
  title: string
  body?: string
}) {
  return (
    <Link to={to} className="group block">
      <div className="bg-gray-dark relative overflow-hidden mb-5 aspect-video">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="can-hover:group-hover:scale-100 absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out transform scale-[1.05]"
        />
      </div>
      <div className="transition-transform can-hover:group-hover:-translate-y-1 duration-200 ease-in">
        <p className="text-h5 font-display font-bold mb-2"><Titled title={title} /></p>
        {body && <p className="text-body-md text-gray-mid">{body}</p>}
      </div>
    </Link>
  )
}
