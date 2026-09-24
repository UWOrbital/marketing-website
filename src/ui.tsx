import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/** JPL's BaseButton. `primary` is the red fill, `secondary` the red outline on
 *  a light ground, `dark` the white outline on a dark ground. */
export function Btn({ to, href, variant = 'primary', outline, compact, className = '', children }: {
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'dark'
  /** Shorthand for the `dark` variant: the second action on a dark ground. */
  outline?: boolean
  compact?: boolean
  className?: string
  children: ReactNode
}) {
  const cls = `BaseButton -${outline ? 'dark' : variant}${compact ? ' -compact' : ''} inline-block text-base ${className}`
  const inner = <span className="label block">{children}</span>
  if (to) return <Link className={cls} to={to}>{inner}</Link>
  return <a className={cls} href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{inner}</a>
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
export function ArrowLink({ to, children, dark }: { to: string; children: ReactNode; dark?: boolean }) {
  return (
    <Link to={to} className={`group text-subtitle inline-flex items-center gap-2 ${dark ? 'text-white' : 'text-primary'}`}>
      {children}
      <Arrow className="transition-transform duration-200 can-hover:group-hover:translate-x-1" />
    </Link>
  )
}

/** JPL's HeroLarge on Home (`home`), HeroMedium elsewhere: a photograph under
 *  a gradient, the subtitle label, the one h1, and the summary. */
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
    <section className={`${home ? 'HeroLarge' : 'HeroMedium'} ThemeVariantDark max-w-screen-3xl relative mx-auto`}>
      <div className="absolute inset-0 z-10 bg-black">
        {image && <img className="object-cover w-full h-full" src={image} alt="" />}
      </div>
      <div className={`content-wrapper lg:flex ${home ? 'lg:items-center min-h-[36rem]' : 'lg:items-end min-h-[26rem] lg:min-h-[32rem]'} relative z-20 w-full h-full flex items-end`}>
        <div className="bg-gradient-to-t lg:bg-gradient-to-r from-transparent-black-75 to-transparent absolute inset-0"></div>
        <div className="text-contrast relative w-full text-white">
          <div className={`container mx-auto px-4 lg:px-10 2xl:px-0 ${home ? 'pt-40 pb-16 lg:pb-24' : 'pt-32 pb-10 lg:pb-14'}`}>
            {crumb && (
              <Link to={crumb.to} className="text-subtitle inline-block mb-4 can-hover:hover:underline">{crumb.label}</Link>
            )}
            {!crumb && kicker && <div className="text-subtitle mb-4 lg:mb-6">{kicker}</div>}
            <h1 className={`font-display font-bold leading-tight mb-5 ${home ? 'lg:w-3/4 xl:w-3/5 text-7xl md:text-8xl lg:text-9xl xl:text-10xl lg:leading-tighter' : 'lg:w-3/4 text-6xl md:text-7xl lg:text-8xl'}`}>
              {title}
            </h1>
            {lede && <p className={`font-display lg:w-1/2 ${home ? 'text-lg md:text-2xl lg:text-4xl xl:text-5xl lg:leading-tight' : 'text-lg md:text-2xl lg:text-3xl'}`}>{lede}</p>}
            {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}

/** A page section in the JPL grid. `dark` sets it on JPL's star field. */
export function Section({ kicker, title, action, dark, alt, children }: {
  kicker?: string
  title?: string
  action?: ReactNode
  dark?: boolean
  alt?: boolean
  children: ReactNode
}) {
  const ground = dark ? 'ThemeVariantDark bg-black bg-stars text-white' : alt ? 'bg-gray-light' : 'bg-white'
  return (
    <section className={`${ground} py-16 lg:py-24`}>
      <div className="container mx-auto px-4 lg:px-10 2xl:px-0">
        {(title || kicker) && (
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              {kicker && <p className="text-subtitle text-primary mb-3">{kicker}</p>}
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

/** JPL's BlockLinkCard: a 16:9 image that scales on hover, the label, and the
 *  title. The content lifts as the image grows. */
export function ImageCard({ to, image, title, body, label, icon }: {
  to: string
  image: string
  title: string
  body?: string
  label?: string
  icon?: string
  cols?: string
}) {
  return (
    <Link to={to} className="BlockLinkCard group block pb-5">
      <div className="bg-gray-dark relative overflow-hidden mb-6 aspect-video">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="can-hover:group-hover:scale-100 absolute inset-0 w-full h-full object-cover transition-all duration-200 ease-in transform scale-[1.05]"
        />
      </div>
      <div className="BlockLinkCard__CardContent transition-transform can-hover:group-hover:-translate-y-2 duration-200 ease-in">
        {label && (
          <p className="text-subtitle text-primary mb-3 flex items-center gap-2">
            {icon && <img src={icon} alt="" className="w-6 h-6" loading="lazy" />}
            {label}
          </p>
        )}
        <p className="text-h5 font-display font-bold mb-2">
          {title} <Arrow className="text-primary ml-1 transition-transform can-hover:group-hover:translate-x-1" />
        </p>
        {body && <p className="text-body-md text-gray-mid-dark">{body}</p>}
      </div>
    </Link>
  )
}
