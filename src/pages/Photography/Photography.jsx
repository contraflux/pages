import Footer from '../../components/Footer/Footer'
import PageHeader from '../../components/PageHeader/PageHeader'
import styles from './photography.module.css'

const photos = [
  { img: '/photography/assets/imgs/train.jpg', caption: 'Kearny, NJ' },
  { img: '/photography/assets/imgs/power_plant.jpg', caption: 'Kearny, NJ' },
  { img: '/photography/assets/imgs/bridge.jpg', caption: 'Great River, NY' },
  { img: '/photography/assets/imgs/apartments.jpg', caption: 'New York, NY' },
  { img: '/photography/assets/imgs/birds.jpg', caption: 'Bridgehampton, NY' },
  { img: '/photography/assets/imgs/bethlehem.jpg', caption: 'Bethlehem, PA' },
  { img: '/photography/assets/imgs/chicago.jpg', caption: 'Chicago, IL' },
  { img: '/photography/assets/imgs/freedom_tower.jpg', caption: 'New York, NY' },
  { img: '/photography/assets/imgs/frontier.jpg', caption: 'Islip, NY' },
  { img: '/photography/assets/imgs/swan.jpg', caption: 'Bridgehampton, NY' },
]

export default function Photography() {
  return (
    <>
      <main className={styles.page}>
        <PageHeader
          title="Photography"
          subtitle="A sample of my personal photography"
          banner="/photography/assets/banner.png"
        />

        <div className={styles.gallery}>
          {photos.map((p) => (
            <figure key={p.img} className={styles.item}>
              <img src={p.img} alt={p.caption} loading="lazy" />
              <figcaption className={styles.caption}>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
