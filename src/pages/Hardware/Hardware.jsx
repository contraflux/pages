import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import styles from './hardware.module.css'

// Entries with no href yet route to the under-construction placeholder
// instead of a real project page.
const timeline = [
  { year: '2026', entries: [
      { title: 'DukeAERO Liquids 26-27', desc: '', img: '', href: '' },
    ]
  },
  {
    year: '2025',
    entries: [
      { title: 'DukeAERO Liquids 25-26', desc: 'Developing liquid and solid rocket motors on DukeAERO', img: '/hardware/assets/imgs/aero.png', href: '/hardware/2025/dukeaero-liquids' },
      { title: 'DukeAERO Solids 25-26', desc: 'Building a solid rocket motors on DukeAERO', img: '', href: '/hardware/2025/dukeaero-solids' },
      { title: 'Duke Aviators Sim Dev', desc: 'Building a Cessna 172 simulator in the library', img: '/hardware/assets/imgs/sim.png', href: '' },
    ],
  },
  {
    year: '2024',
    entries: [
      { title: 'Synthetic Aperture Radar', desc: 'Coding radars and finding landmines at MIT', img: '/hardware/assets/imgs/sar.png', href: '/hardware/2024/synthetic-aperture-radar' },
      { title: 'FRC Robotics', desc: 'Creating an FRC robot on my high school’s team', img: '/hardware/assets/imgs/frc.png', href: '' },
    ],
  },
]

export default function Hardware() {
  const timelineRef = useRef(null)
  const lineRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useLayoutEffect(() => {
    const timelineEl = timelineRef.current
    const lineEl = lineRef.current
    // Year labels and cards reveal individually (not as one block per row),
    // each tracking its own position through the same scroll window.
    const revealTargets = [
      ...timelineEl.querySelectorAll(`.${styles.yearLabel}`),
      ...timelineEl.querySelectorAll(`.${styles.card}`),
    ]

    // Tie opacity/position directly to scroll position every frame (no CSS
    // transition involved), so elements track the scrollbar 1:1 instead of
    // playing a fixed-duration animation once a threshold is crossed.
    const startLine = () => window.innerHeight * 0.75
    const endLine = () => window.innerHeight * 0.5

    const update = () => {
      const rect = timelineEl.getBoundingClientRect()
      const revealed = window.innerHeight - rect.top - 100
      lineEl.style.height = `${Math.max(0, Math.min(revealed, timelineEl.offsetHeight))}px`

      const start = startLine()
      const end = endLine()
      revealTargets.forEach((el) => {
        const r = el.getBoundingClientRect()
        const center = r.top
        const progress = Math.min(1, Math.max(0, (start - center) / (start - end)))
        el.style.opacity = progress
        el.style.transform = `translateY(${50 * (1 - progress)}px)`
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <>
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.timeline}>
            <div className={styles.track} ref={timelineRef}>
              <div className={styles.line} ref={lineRef} />
              {timeline.map((row) => (
              <div key={row.year} className={styles.year}>
                <span className={styles.yearLabel}>{row.year}</span>
                <div className={styles.grid}>
                  {row.entries.length === 0 ? (
                    <p className={styles.empty}>New projects in progress</p>
                  ) : (
                    row.entries.map((e) => (
                      <Link key={e.title} className={styles.card} data-empty={!e.img || undefined} to={e.href || '/under-construction'}>
                        {e.img && (
                          <div className={styles.cardMedia}>
                            <img src={e.img} alt="" />
                          </div>
                        )}
                        <div className={styles.cardBody}>
                          <p className={styles.cardTitle}>{e.title}</p>
                          <p className={styles.cardDesc}>{e.desc}</p>
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          className={styles.scrollPrompt}
          data-hidden={scrolled || undefined}
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.25, behavior: 'smooth' })}
        >
          <span>Timeline</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </main>
      <Footer />
    </>
  )
}
