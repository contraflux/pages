import { useRef, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useGridFlip, useRenderedIds } from '../../hooks/useFilterGridAnimation'
import styles from './software.module.css'

const projects = [
  { id: 'vector-fields', title: 'Vector Fields', desc: 'Plot vector fields and operators like divergence and curl', img: '/software/assets/imgs/vectors.png', href: '/software/projects/vector-fields/', tags: ['Math', 'Physics'] },
  { id: 'circuits', title: 'Circuits', desc: 'Explore circuits with batteries, resistors, and more', img: '/software/assets/imgs/circuits.png', href: '/software/projects/circuits/', tags: ['Physics'] },
  { id: 'tensorflux', title: 'TensorFlux.jl', desc: 'Differential geometry with mathematical notation in Julia', img: '/software/assets/imgs/tensorflux.png', href: 'https://echotops.github.io/TensorFlux.jl/home', external: true, tags: ['Math', 'Physics'] },
  { id: 'electromagnetism', title: 'Electromagnetism', desc: 'Generate electric and magnetic fields from parametrized charges', img: '/software/assets/imgs/electromagnetism.png', href: '/software/projects/electromagnetism/', tags: ['Physics'] },
  { id: 'matrices', title: 'Matrices', desc: 'Visualize matrix transformations, eigenvectors, and eigenvalues', img: '/software/assets/imgs/matrices.png', href: '/software/projects/matrices/', tags: ['Math'] },
  { id: 'charges', title: 'Charges', desc: 'Place charges and simulate motion over time', img: '/software/assets/imgs/charges.png', href: '/software/projects/charges/', tags: ['Physics'] },
  { id: 'relativity', title: 'Relativity', desc: 'See how Lorentz transformations act on vectors in spacetime', img: '/software/assets/imgs/minkowski.png', href: '/software/projects/relativity/', tags: ['Physics'] },
  { id: 'fluids', title: 'Fluids', desc: 'Simulate fluid flow around objects', img: '/software/assets/imgs/fluid.png', href: '/software/projects/fluids/', tags: ['Physics'] },
]

const filters = [
  { key: 'all', label: '∀ All' },
  { key: 'Math', label: 'ℝ Math' },
  { key: 'Physics', label: '⚛ Physics' },
]

export default function Software() {
  const [active, setActive] = useState('all')
  const gridRef = useRef(null)
  const shown = projects.filter((p) => active === 'all' || p.tags.includes(active))
  const { renderedIds, leavingIds, leavingRects } = useRenderedIds(shown.map((p) => p.id), gridRef)
  const rendered = projects.filter((p) => renderedIds.has(p.id))

  // Only cards actually participating in grid flow (i.e. not currently
  // leaving) can possibly need a FLIP animation — see useFilterGridAnimation.js.
  const inFlowIds = rendered.filter((p) => !leavingIds.has(p.id)).map((p) => p.id).join('|')
  useGridFlip(gridRef, inFlowIds)

  return (
    <>
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

        <div className={styles.grid} ref={gridRef}>
          {rendered.map((p) => (
            <a
              key={p.id}
              data-card-id={p.id}
              className={styles.card}
              data-leaving={leavingIds.has(p.id) || undefined}
              style={leavingIds.has(p.id) && leavingRects[p.id] ? {
                top: leavingRects[p.id].top,
                left: leavingRects[p.id].left,
                width: leavingRects[p.id].width,
                height: leavingRects[p.id].height,
              } : undefined}
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
