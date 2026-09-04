import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export type Record = { label: string; value: string }

/** The one call to action. `signal` fills it red; there is 1 per page. */
export function Btn({ to, href, signal, children }: {
  to?: string
  href?: string
  signal?: boolean
  children: ReactNode
}) {
  const cls = signal ? 'btn btn--signal' : 'btn'
  if (to) return <Link className={cls} to={to}>{children}</Link>
  return <a className={cls} href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{children}</a>
}

/** The site's one icon: drawn, square-terminalled, and sized off the type it
 *  sits beside. A Unicode arrow is a glyph from whatever font loaded, not a mark
 *  that belongs to this drawing. */
export function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 18 10" fill="none" aria-hidden="true" focusable="false">
      <path d="M0 5h16M12.2 1.2 16 5l-3.8 3.8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function ArrowLink({ to, href, children }: { to?: string; href?: string; children: ReactNode }) {
  const inner = <>{children}<Arrow /></>
  if (to) return <Link className="alink" to={to}>{inner}</Link>
  return <a className="alink" href={href} target="_blank" rel="noreferrer">{inner}</a>
}

/** The page headline. 1 per page, always the first thing on it.
 *  Display type, then a heavy rule, then the supporting matter set in the
 *  grid below it. The only photograph behind type is the landing field. */
export function PageHead({ title, lede, record, actions, stage }: {
  title: string
  lede?: string
  /** Measured facts. Under the headline, never above it. */
  record?: Record[]
  actions?: ReactNode
  /** Holds the headline in the whole first viewport, so nothing else is in
   *  view on arrival. The landing page only. */
  stage?: boolean
}) {
  return (
    <header className={stage ? 'ph ph--stage' : 'ph'}>
      <div className="page ph__title">
        <h1 className="ph__t">{title}</h1>
      </div>
      <hr className="rule rule--heavy" />
      {(lede || record || actions) && (
        <div className="page ph__foot">
          <div className="ph__body">
            {lede && <p className="lede">{lede}</p>}
            {actions && <div className="actions">{actions}</div>}
          </div>
          {record && (
            <dl className="rec">
              {record.map((r) => (
                <div key={r.label}>
                  <dt>{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      )}
    </header>
  )
}

/** A full-bleed objective image. The photograph is evidence, not a background:
 *  no type sits over it and no scrim sits on it. */
export function Plate({ src, alt, caption, bed, ratio }: {
  src: string
  alt: string
  caption?: string
  /** Puts the image on the alternate field. Use it for a cut-out render. */
  bed?: boolean
  /** Crops a photograph to a fixed band. Omit to keep the whole image. */
  ratio?: string
}) {
  return (
    <figure className={bed ? 'plate plate--bed' : 'plate'}>
      <img src={src} alt={alt} style={ratio ? { aspectRatio: ratio, objectFit: 'cover' } : undefined} />
      {caption && <figcaption className="page label">{caption}</figcaption>}
    </figure>
  )
}

/** A numbered section. The number sits in the left column, the heading in the
 *  next, the action at the right edge. The rule above it is the boundary. */
export function Section({ title, action, alt, children }: {
  title?: string
  action?: ReactNode
  /** Sets the section on the alternate field. */
  alt?: boolean
  children: ReactNode
}) {
  return (
    <section className={alt ? 'sec sec--alt' : 'sec'}>
      {/* Heading left, action right, body across both. */}
      <div className="page">
        {title ? <h2 className="sec__t">{title}</h2> : <span />}
        <div className="sec__a">{action}</div>
        <div className="sec__body">{children}</div>
      </div>
    </section>
  )
}

/** The list primitive. Every list on this site is this component: subteams,
 *  the timeline, projects, results, the steps to join, and contact.
 *  One row is a hairline, a lead column, and the text. */
export function Rows({ numbered, children }: { numbered?: boolean; children: ReactNode }) {
  return <div className={numbered ? 'rows rows--num' : 'rows'}>{children}</div>
}

export function Row({ lead, title, body, end, to, href, children }: {
  lead?: ReactNode
  title: string
  body?: string
  end?: ReactNode
  to?: string
  href?: string
  children?: ReactNode
}) {
  const inner = (
    <>
      <span className="row__lead">
        <span className="row__n" aria-hidden="true" />
        {lead}
      </span>
      <div className="row__main">
        <h3 className="row__t">{title}</h3>
        {body && <p className="row__b">{body}</p>}
        {children}
      </div>
      <span className="row__end">{end}</span>
    </>
  )
  if (to) return <Link className="row row--link" to={to}>{inner}</Link>
  if (href) return <a className="row row--link" href={href} target="_blank" rel="noreferrer">{inner}</a>
  return <div className="row">{inner}</div>
}

/** An asymmetric pair: text in the narrow column, image in the wide one.
 *  `flip` moves the image to the left. It is never a 50/50 split. */
export function Split({ heading, image, alt, flip, children }: {
  heading?: string
  image?: string
  alt?: string
  flip?: boolean
  children: ReactNode
}) {
  const cls = ['split']
  if (flip && image) cls.push('split--flip')
  if (!image) cls.push('split--solo')
  return (
    <div className={cls.join(' ')}>
      <div className="split__text">
        {heading && <h3 className="split__h">{heading}</h3>}
        {children}
      </div>
      {image && (
        <figure className="split__fig">
          <img src={image} alt={alt ?? ''} loading="lazy" />
        </figure>
      )}
    </div>
  )
}

/** A competition result, set as type. The laurel artwork is gone: at this
 *  scale the year and the word carry more than an ornament does. */
export function Award({ competition, result, year }: {
  competition: string
  result: string
  year: string
}) {
  return (
    <div className="award">
      <div className="award__year">{year}</div>
      <div className="award__comp">{competition}</div>
      <div className="award__result">{result}</div>
    </div>
  )
}

/** An image tile. The caption sits under the photograph, never over it. */
export function Tile({ to, href, image, title }: {
  to?: string
  href?: string
  image: string
  title: string
}) {
  const inner = (
    <>
      <span className="tile__img"><img src={image} alt="" loading="lazy" /></span>
      <span className="tile__t">{title}<Arrow /></span>
    </>
  )
  if (to) return <Link className="tile" to={to}>{inner}</Link>
  return <a className="tile" href={href} target="_blank" rel="noreferrer">{inner}</a>
}
