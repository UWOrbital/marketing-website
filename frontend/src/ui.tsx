import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function Hero({ image, eyebrow, title, sub, tall, badge, stats, children }: {
  image: string
  eyebrow?: string
  title: string
  sub?: string
  tall?: boolean
  badge?: string
  /** Metrics strip. It sits inside the hero, so the photo runs behind it. */
  stats?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className={tall ? 'hero hero--tall' : 'hero'}>
      <img className="hero__img" src={image} alt="" />
      <div className="hero__scrim" />
      <div className="hero__body">
        <div className="wrap">
          {badge && (
            <p style={{ marginBottom: 20 }}>
              <span className="badge">{badge}</span>
            </p>
          )}
          {eyebrow && <p className="eyebrow" style={{ marginBottom: 16 }}>{eyebrow}</p>}
          <h1>{title}</h1>
          {sub && <p className="hero__sub">{sub}</p>}
          {children && <div className="hero__actions">{children}</div>}
          {stats && <div className="hero__stats">{stats}</div>}
        </div>
      </div>
    </section>
  )
}

export function Section({ title, action, dark, wash, tight, center, children }: {
  title?: string
  action?: ReactNode
  dark?: boolean
  wash?: boolean
  tight?: boolean
  center?: boolean
  children: ReactNode
}) {
  const cls = ['section']
  if (dark) cls.push('section--dark')
  if (wash) cls.push('section--wash')
  if (tight) cls.push('section--tight')
  if (center) cls.push('section--center')
  return (
    <section className={cls.join(' ')}>
      <div className="wrap">
        {(title || action) && (
          <div className="section-head">
            {title && <h2>{title}</h2>}
            {action}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

/** Card that links off-site. Used for press and newsletter items. */
export function Card({ href, to, image, tag, meta, title, size = 'md' }: {
  href?: string
  to?: string
  image: string
  tag?: string
  meta?: string
  title: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const inner = (
    <>
      <img className="card__img" src={image} alt="" loading="lazy" />
      {tag ? <span className="tag">{tag}</span> : <span />}
      <div className="card__foot">
        {meta && <span className="eyebrow">{meta}</span>}
        <span className="card__title">{title}</span>
      </div>
    </>
  )
  const cls = `card card--${size}`
  if (to) return <Link className={cls} to={to}>{inner}</Link>
  return <a className={cls} href={href} target="_blank" rel="noreferrer">{inner}</a>
}

/** Press item for the landing page. The photo sits above the text on a white
 *  card. <Card> reverses the headline out over the photo, which is the look
 *  nasa.gov uses, so the landing page does not use it any more. */
export function NewsCard({ href, image, outlet, title }: {
  href: string
  image: string
  outlet: string
  title: string
}) {
  return (
    <a className="box newscard" href={href} target="_blank" rel="noreferrer">
      <img src={image} alt="" loading="lazy" />
      <div className="newscard__body">
        <span className="eyebrow">{outlet}</span>
        <span className="newscard__title">{title}</span>
      </div>
    </a>
  )
}

export function ArrowLink({ to, href, children }: { to?: string; href?: string; children: ReactNode }) {
  if (to) return <Link className="arrow-link" to={to}>{children}</Link>
  return <a className="arrow-link" href={href} target="_blank" rel="noreferrer">{children}</a>
}

export function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="stat">
      <div className="stat__n">{n}</div>
      <div className="stat__l">{label}</div>
    </div>
  )
}

export function Split({ heading, image, alt, flip, children }: {
  heading: string
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
      <div>
        <h3>{heading}</h3>
        {children}
      </div>
      {image && (
        <figure className="figure">
          <img src={image} alt={alt ?? ''} loading="lazy" />
        </figure>
      )}
    </div>
  )
}

/** Competition result badge: the laurel frame is one image, the text is CSS.
 *  A new result needs a row in `awards`, not new artwork. */
export function Award({ competition, result, year }: {
  competition: string
  result: string
  year: string
}) {
  return (
    <figure className="award">
      <img className="award__wreath" src="/laurel.png" alt="" />
      <figcaption className="award__text">
        <span className="award__comp">{competition}</span>
        <span className="award__result">{result}</span>
        <span className="award__year">{year}</span>
      </figcaption>
    </figure>
  )
}
