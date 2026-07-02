import { useEffect, useRef } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageHeader from '../../components/PageHeader/PageHeader'
import styles from './hardware.module.css'

const timeline = [
  { year: '2026', entries: [] },
  {
    year: '2025',
    entries: [
      { title: 'DukeAERO 2025', desc: 'Developing liquid and solid rocket motors on DukeAERO', img: '/hardware/assets/imgs/aero.png', href: '/hardware/2025/aero/' },
      { title: 'Simulator', desc: 'Building a Cessna 172 simulator in the library', img: '/hardware/assets/imgs/sim.png', href: '/hardware/2025/aviators/' },
    ],
  },
  {
    year: '2024',
    entries: [
      { title: 'Synthetic Aperture Radar', desc: 'Coding radars and finding landmines at MIT', img: '/hardware/assets/imgs/sar.png', href: '/hardware/2024/sar/' },
      { title: 'FRC Robotics', desc: 'Creating an FRC robot on my high school’s team', img: '/hardware/assets/imgs/frc.png', href: '/hardware/2024/frc/' },
    ],
  },
]

export default function Hardware() {
  const timelineRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const timelineEl = timelineRef.current
    const lineEl = lineRef.current
    const years = [...timelineEl.querySelectorAll(`.${styles.year}`)]

    // Reveal years as they scroll into view and grow the rail to match the
    // scroll position, so the timeline "draws itself" on the way down.
    const update = () => {
      const rect = timelineEl.getBoundingClientRect()
      const revealed = window.innerHeight - rect.top - 40
      lineEl.style.height = `${Math.max(0, Math.min(revealed, timelineEl.offsetHeight))}px`

      years.forEach((year) => {
        const r = year.getBoundingClientRect()
        const visible = r.top < window.innerHeight - 250 && r.bottom > 0
        year.classList.toggle(styles.visible, visible)
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
      <Navbar />
      <main className={styles.page}>
        <PageHeader
          title="Hardware Projects"
          subtitle="Projects in propulsion, sensing, and robotics"
          banner="/hardware/assets/banner.png"
        />

        <div className={styles.timeline}>
          <div className={styles.track} ref={timelineRef}>
            <div className={styles.line} ref={lineRef} />
            {timeline.map((row) => (
              <div key={row.year} className={styles.year}>
              <div className={styles.marker}>
                <span className={styles.yearLabel}>{row.year}</span>
                <span className={styles.dot} />
              </div>
              <div className={styles.grid}>
                {row.entries.length === 0 ? (
                  <p className={styles.empty}>New projects in progress</p>
                ) : (
                  row.entries.map((e) => (
                    <a key={e.title} className={styles.card} href={e.href}>
                      <img className={styles.cardImg} src={e.img} alt="" />
                      <div className={styles.cardText}>
                        <p className={styles.cardTitle}>{e.title}</p>
                        <p className={styles.cardDesc}>{e.desc}</p>
                      </div>
                    </a>
                  ))
                )}
              </div>
            </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
