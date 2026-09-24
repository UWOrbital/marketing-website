import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/** A button. Internal paths use the router, and external links open a new tab. */
export function Btn({ to, href, outline, children }: {
  to?: string
  href?: string
  /** The second action beside a filled one. White outline on a dark ground. */
  outline?: boolean
  children: ReactNode
}) {
  const cls = outline ? 'usa-button usa-button--outline usa-button--inverse' : 'usa-button'
  if (to) return <Link className={cls} to={to}>{children}</Link>
  return <a className={cls} href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{children}</a>
}

/** The dark band each page opens on: a photograph under a gradient, then the
 *  kicker, the one h1, the intro, and the actions. */
export function PageHero({ title, kicker, lede, image, crumb, home, children }: {
  title: string
  kicker?: string
  lede?: string
  image?: string
  /** The parent page, for a breadcrumb above the title. */
  crumb?: { to: string; label: string }
  home?: boolean
  children?: ReactNode
}) {
  return (
    <section
      className={home ? 'page-hero page-hero--home' : 'page-hero'}
      style={image ? { backgroundImage: `url("${image}")` } : undefined}
    >
      <div className="grid-container width-full">
        {crumb && (
          <nav className="usa-breadcrumb" aria-label="Breadcrumbs">
            <ol className="usa-breadcrumb__list">
              <li className="usa-breadcrumb__list-item">
                <Link className="usa-breadcrumb__link" to={crumb.to}><span>{crumb.label}</span></Link>
              </li>
              <li className="usa-breadcrumb__list-item usa-current" aria-current="page"><span>{title}</span></li>
            </ol>
          </nav>
        )}
        {kicker && <p className="kicker">{kicker}</p>}
        <h1>{title}</h1>
        {lede && <p className="usa-intro">{lede}</p>}
        {children && <div className="margin-top-4">{children}</div>}
      </div>
    </section>
  )
}

/** A page section. `dark` sets it on deep space, `alt` on the light grey. */
export function Section({ kicker, title, action, dark, alt, children }: {
  kicker?: string
  title?: string
  action?: ReactNode
  dark?: boolean
  alt?: boolean
  children: ReactNode
}) {
  const cls = ['usa-section', dark && 'usa-section--dark', alt && 'usa-section--alt'].filter(Boolean).join(' ')
  return (
    <section className={cls}>
      <div className="grid-container">
        {(title || kicker) && (
          <div className="section-head">
            <div>
              {kicker && <p className="kicker">{kicker}</p>}
              {title && <h2>{title}</h2>}
            </div>
            {action}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

/** A USWDS card with a photograph. The whole card is the link. */
export function ImageCard({ to, image, title, body, icon, cols = 'tablet:grid-col-4' }: {
  to: string
  image: string
  title: string
  body?: string
  icon?: string
  cols?: string
}) {
  return (
    <li className={`usa-card usa-card--link ${cols}`}>
      <Link to={to} className="usa-card__container text-ink">
        <div className="usa-card__media">
          <div className="usa-card__img"><img src={image} alt="" loading="lazy" /></div>
        </div>
        <div className="usa-card__header">
          {icon && <img className="subteam-icon" src={icon} alt="" loading="lazy" />}
          <h3 className="usa-card__heading">{title}</h3>
        </div>
        {body && <div className="usa-card__body"><p>{body}</p></div>}
        <div className="usa-card__footer"><span className="usa-link text-bold">Learn more →</span></div>
      </Link>
    </li>
  )
}
