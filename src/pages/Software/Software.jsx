import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageHeader from '../../components/PageHeader/PageHeader'
import styles from './software.module.css'

const projects = [
  { id: 'vector-fields', title: 'Vector Fields', desc: 'Plot vector fields and operators like divergence and curl', img: '/software/assets/imgs/vectors.png', href: '/software/projects/vector-fields', tags: ['Math', 'Physics'] },
  { id: 'circuits', title: 'Circuits', desc: 'Explore circuits with batteries, resistors, and more', img: '/software/assets/imgs/circuits.png', href: '/software/projects/circuits', tags: ['Physics'] },
  { id: 'tensorflux', title: 'TensorFlux.jl', desc: 'Differential geometry with mathematical notation in Julia', img: '/software/assets/imgs/tensorflux.png', href: 'https://contraflux.github.io/TensorFlux.jl/home', external: true, tags: ['Math', 'Physics'] },
  { id: 'electromagnetism', title: 'Electromagnetism', desc: 'Generate electric and magnetic fields from parametrized charges', img: '/software/assets/imgs/electromagnetism.png', href: '/software/projects/electromagnetism', tags: ['Physics'] },
  { id: 'matrices', title: 'Matrices', desc: 'Visualize matrix transformations, eigenvectors, and eigenvalues', img: '/software/assets/imgs/matrices.png', href: '/software/projects/matrices', tags: ['Math'] },
  { id: 'charges', title: 'Charges', desc: 'Place charges and simulate motion over time', img: '/software/assets/imgs/charges.png', href: '/software/projects/charges', tags: ['Physics'] },
  { id: 'relativity', title: 'Relativity', desc: 'See how Lorentz transformations act on vectors in spacetime', img: '/software/assets/imgs/minkowski.png', href: '/software/projects/relativity', tags: ['Physics'] },
  { id: 'fluids', title: 'Fluids', desc: 'Simulate fluid flow around objects', img: '/software/assets/imgs/fluid.png', href: '/software/projects/fluids', tags: ['Physics'] },
]

const filters = [
  { key: 'all', label: '∀ All' },
  { key: 'Math', label: 'ℝ Math' },
  { key: 'Physics', label: '⚛ Physics' },
]

export default function Software() {
  const [active, setActive] = useState('all')
  const shown = projects.filter((p) => active === 'all' || p.tags.includes(active))

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <PageHeader
          title="Software Projects"
          subtitle="Interactive physics and math simulations"
          banner="/software/assets/banner.png"
        >
          <div className={styles.filters}>
            {filters.map((f) => (
              <button
                key={f.key}
                className={styles.filter}
                data-active={active === f.key || undefined}
                onClick={() => setActive(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </PageHeader>

        <div className={styles.grid}>
          {shown.map((p) => (
            <a
              key={p.id}
              className={styles.card}
              href={p.href}
              target={p.external ? '_blank' : undefined}
              rel={p.external ? 'noreferrer' : undefined}
            >
              <img className={styles.cardImg} src={p.img} alt="" />
              <div className={styles.cardText}>
                <p className={styles.cardTitle}>{p.title}</p>
                <p className={styles.cardDesc}>{p.desc}</p>
              </div>
              <div className={styles.cardTags}>
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
