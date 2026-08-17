import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import styles from './projectLayout.module.css'

// Shared template for individual project write-ups (hardware, software,
// etc). Pages using this just supply a title/subtitle and compose their
// body out of the Heading / Paragraph / Figure / FigureGrid primitives
// below — see ExampleProject.jsx for the pattern to copy.
export default function ProjectLayout({ category, categoryHref, title, subtitle, children }) {
  return (
    <>
      <main className={styles.page}>
        <header className={styles.header}>
          {category && categoryHref && (
            <Link className={styles.back} to={categoryHref}>
              ← {category}
            </Link>
          )}
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>

        <div className={styles.body}>{children}</div>
      </main>
      <Footer />
    </>
  )
}

export function Heading({ children }) {
  return <h2 className={styles.heading}>{children}</h2>
}

export function Paragraph({ children }) {
  return <p className={styles.paragraph}>{children}</p>
}

export function Figure({ src, alt = '', caption }) {
  return (
    <figure className={styles.figure}>
      <img src={src} alt={alt} />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}

// Two or more Figures side by side, e.g. <FigureGrid><Figure .../><Figure .../></FigureGrid>.
export function FigureGrid({ columns = 2, children }) {
  return (
    <div className={styles.figureGrid} style={{ '--figure-grid-columns': columns }}>
      {children}
    </div>
  )
}

// Data table, e.g. <Table headers={['A', 'B']} rows={[['1', '2']]} caption="..." />.
// When the table is wider than its column it scrolls horizontally; a small
// arrow hints at that and fades out once the table itself is scrolled.
export function Table({ headers, rows, caption }) {
  const scrollRef = useRef(null)
  const theadRef = useRef(null)
  const [overflowing, setOverflowing] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const checkOverflow = () => {
      setOverflowing(el.scrollWidth > el.clientWidth + 1)
      setHeaderHeight(theadRef.current?.offsetHeight ?? 0)
    }
    const onScroll = () => setScrolled(el.scrollLeft > 8)

    checkOverflow()
    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', checkOverflow)
    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', checkOverflow)
    }
  }, [])

  return (
    <div className={styles.tableWrap}>
      <div className={styles.tableScrollOuter}>
        <div className={styles.tableScroll} ref={scrollRef}>
          <table className={styles.table}>
            <thead ref={theadRef}>
              <tr>
                {headers.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {overflowing && (
          <button
            type="button"
            className={styles.tableScrollHint}
            data-hidden={scrolled || undefined}
            onClick={() => scrollRef.current?.scrollBy({ left: scrollRef.current.clientWidth * 0.5, behavior: 'smooth' })}
            aria-label="Scroll table right"
          >
            {/* Two stacked fades instead of one: the header row sits on
                --surface, the body rows sit on --background, so a single
                gradient color would be wrong for one or the other. */}
            <div className={styles.tableScrollHintHeader} style={{ height: headerHeight }} />
            <div className={styles.tableScrollHintBody} />
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  )
}
