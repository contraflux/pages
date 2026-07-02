import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './navbar.module.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Hardware', to: '/hardware' },
  { label: 'Software', to: '/software' },
  { label: 'Digital Assets', to: '/digital' },
  { label: 'Photography', to: '/photography' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const isActive = (to) => (to === '/' ? pathname === '/' : pathname.startsWith(to))

  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo}>
          <img src="/assets/global/name.png" height="45" alt="Ethan Rosenfeld" />
        </Link>
        <div className={styles.links}>
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={styles.item}
              data-active={isActive(link.to) || undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className={styles.toggle}
          aria-label="Toggle menu"
          aria-expanded={open}
          data-open={open || undefined}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <nav className={styles.dropdown} data-open={open || undefined}>
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className={styles.dropdownItem}
            data-active={isActive(link.to) || undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  )
}
