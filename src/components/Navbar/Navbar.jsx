import { useState } from 'react'
import styles from './navbar.module.css'

// Section pages are still served as static HTML from /public during the
// migration, so they use plain anchors (full navigation) rather than router
// links. `active` highlights the current page.
const links = [
  { label: 'Home', href: '/' },
  { label: 'Hardware', href: '/hardware/' },
  { label: 'Software', href: '/software/' },
  { label: 'Digital Assets', href: '/digital/' },
  { label: 'Photography', href: '/photography/' },
]

export default function Navbar({ active = 'Home' }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>
          <img src="/assets/global/name.png" height="45" alt="Ethan Rosenfeld" />
        </a>
        <div className={styles.links}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.item}
              data-active={active === link.label || undefined}
            >
              {link.label}
            </a>
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
          <a
            key={link.label}
            href={link.href}
            className={styles.dropdownItem}
            data-active={active === link.label || undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  )
}
