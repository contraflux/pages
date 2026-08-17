import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import styles from './home.module.css'

const work = [
  {
    title: 'DukeAERO',
    description: 'Redesigning the solid-motor nozzle and helping build Duke’s first liquid rocket engine.',
    img: '/hardware/assets/imgs/aero.png',
    href: '/hardware/2025/dukeaero-liquids',
  },
  {
    title: 'Synthetic Aperture Radar',
    description: 'Built a backprojection SAR imager that detected landmines buried in sand.',
    img: '/hardware/assets/imgs/sar.png',
    href: '/hardware/2024/synthetic-aperture-radar',
  },
  {
    title: 'Interactive Simulations',
    description: 'Runnable, browser-based simulations for fields, circuits, relativity, and matrices.',
    img: '/software/assets/imgs/vectors.png',
    href: '/software',
  },
  {
    title: 'TensorFlux.jl',
    description: 'A Julia package for differential geometry with real mathematical notation.',
    img: '/software/assets/imgs/tensorflux.png',
    href: 'https://echotops.github.io/TensorFlux.jl/home',
    external: true,
  },
]

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <h1 className={styles.name}>Ethan Rosenfeld</h1>
              <p className={styles.tagline}>
                I’m a propulsion engineer on DukeAERO, where I work across liquid and solid rocket
                motors. Outside of rocketry I build interactive physics and math software, and I’m
                an instrument-rated private pilot.
              </p>
              <div className={styles.ctaRow}>
                <a className={styles.ctaPrimary} href="/assets/global/resume.pdf" target="_blank" rel="noreferrer">
                  Resume ↗
                </a>
                <a className={styles.ctaSecondary} href="mailto:ethan.rosenfeld@duke.edu">Contact</a>
              </div>
            </div>
            <div className={styles.heroImageWrap}>
              <img className={styles.heroImage} src="/assets/global/profile.jpeg" alt="Ethan Rosenfeld" />
            </div>
          </div>

          <button
            type="button"
            className={styles.scrollPrompt}
            data-hidden={scrolled || undefined}
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Featured Projects</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </section>

        <section id="work" className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Selected Work</h2>
            <Link className={styles.sectionLink} to="/hardware">All projects ↗</Link>
          </div>
          <div className={styles.workGrid}>
            {work.map((w) => (
              <article key={w.title} className={styles.feature}>
                <div className={styles.featureMedia}>
                  <img src={w.img} alt="" />
                </div>
                <div className={styles.featureBody}>
                  <h3 className={styles.featureTitle}>{w.title}</h3>
                  <p className={styles.featureDescription}>{w.description}</p>
                  {w.external ? (
                    <a className={styles.featureLink} href={w.href} target="_blank" rel="noreferrer">
                      Read more ↗
                    </a>
                  ) : (
                    <Link className={styles.featureLink} to={w.href}>
                      Read more ↗
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
