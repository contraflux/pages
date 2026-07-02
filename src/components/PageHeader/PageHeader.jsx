import styles from './pageheader.module.css'

export default function PageHeader({ title, subtitle, banner, children }) {
  return (
    <header className={styles.header}>
      {banner && <img className={styles.banner} src={banner} alt="" />}
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      {children}
    </header>
  )
}
