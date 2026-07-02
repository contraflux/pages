import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import styles from './home.module.css'

const highlights = [
  { stat: '4.0 GPA', detail: 'MechE + Physics + Aerospace cert · Duke ’29' },
  { stat: 'DukeAERO', detail: 'Propulsion engineer — liquid & solid motors' },
  { stat: 'MIT Lincoln Lab', detail: 'Detected buried landmines with SAR' },
  { stat: 'TensorFlux.jl', detail: 'Published Julia package for geometry' },
]

const work = [
  {
    title: 'DukeAERO',
    tag: 'Propulsion Engineer',
    blurb: 'Building Duke’s first liquid rocket motor and designing the solid-motor nozzle.',
    img: '/hardware/assets/imgs/aero.png',
    href: '/hardware/2025/aero/',
  },
  {
    title: 'Synthetic Aperture Radar',
    tag: 'MIT Lincoln Laboratory',
    blurb: 'A backprojection SAR imager that detected landmines buried in sand.',
    img: '/hardware/assets/imgs/sar.png',
    href: '/hardware/2024/sar/',
  },
  {
    title: 'Interactive Simulations',
    tag: 'Physics & Math',
    blurb: 'Runnable browser sims for fields, circuits, relativity, and matrices.',
    img: '/software/assets/imgs/vectors.png',
    href: '/software',
  },
  {
    title: 'TensorFlux.jl',
    tag: 'Julia Package',
    blurb: 'Differential geometry in Julia with real mathematical notation.',
    img: '/software/assets/imgs/tensorflux.png',
    href: 'https://contraflux.github.io/TensorFlux.jl/home',
    external: true,
  },
]

const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'JavaScript', 'Julia'] },
  { group: 'Software', items: ['MATLAB', 'Ansys Fluent', 'CAD', 'Git', 'Photoshop'] },
  { group: 'Hardware', items: ['Raspberry Pi', 'Arduino'] },
  { group: 'Certificates', items: ['Private Pilot', 'Instrument Rating'] },
]

export default function Home() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>Mechanical Engineering + Physics · Duke University</p>
            <h1 className={styles.name}>Ethan Rosenfeld</h1>
            <p className={styles.tagline}>
              I build rocket propulsion, radar, and interactive physics simulations —
              and I’m interested in where the models break down.
            </p>
            <div className={styles.ctaRow}>
              <a className={styles.ctaPrimary} href="/assets/global/resume.pdf" target="_blank" rel="noreferrer">
                Résumé ↗
              </a>
              <a className={styles.ctaSecondary} href="#work">View Work</a>
              <a className={styles.ctaSecondary} href="mailto:ethan.rosenfeld@duke.edu">Email</a>
            </div>
            <p className={styles.credential}>
              Instrument-rated private pilot · 4.0 GPA · Class of 2029
            </p>
          </div>
          <div className={styles.heroImageWrap}>
            <img className={styles.heroImage} src="/assets/global/profile.jpeg" alt="Ethan Rosenfeld" />
          </div>
        </section>

        <section className={styles.highlights}>
          {highlights.map((h) => (
            <div key={h.stat} className={styles.highlight}>
              <p className={styles.highlightStat}>{h.stat}</p>
              <p className={styles.highlightDetail}>{h.detail}</p>
            </div>
          ))}
        </section>

        <section id="work" className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Selected Work</h2>
            <a className={styles.sectionLink} href="/hardware">All projects ↗</a>
          </div>
          <div className={styles.workGrid}>
            {work.map((w) => (
              <a
                key={w.title}
                className={styles.card}
                href={w.href}
                target={w.external ? '_blank' : undefined}
                rel={w.external ? 'noreferrer' : undefined}
              >
                <div className={styles.cardMedia}>
                  <img src={w.img} alt="" />
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardTag}>{w.tag}</p>
                  <p className={styles.cardTitle}>{w.title}</p>
                  <p className={styles.cardBlurb}>{w.blurb}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Skills &amp; Tools</h2>
          </div>
          <div className={styles.skills}>
            {skills.map((s) => (
              <div key={s.group} className={styles.skillRow}>
                <p className={styles.skillGroup}>{s.group}</p>
                <div className={styles.skillTags}>
                  {s.items.map((item) => (
                    <span key={item} className={styles.skillTag}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
