import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './navbar.module.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Hardware', to: '/hardware' },
  { label: 'Software', to: '/software' },
  { label: 'Digital Assets', to: '/digital' },
  { label: 'Photography', to: '/photography' },
]

// The logo appearing/disappearing shifts this element's position instantly
// (margin:auto and similar layout changes can't be transitioned by CSS), so
// on every change we replay that jump as a FLIP transform to make it read
// as a slide instead.
function useSlideOnChange(ref, dep) {
  const prevLeftRef = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const left = el.getBoundingClientRect().left
    const prevLeft = prevLeftRef.current
    if (prevLeft !== null && prevLeft !== left) {
      const dx = prevLeft - left
      el.style.transition = 'none'
      el.style.transform = `translateX(${dx}px)`
      el.getBoundingClientRect()
      // A single rAF can still land before the browser's next paint, which
      // would collapse the invert-then-transition into one frame and skip
      // the animation entirely — waiting two frames guarantees the inverted
      // starting position has actually been painted first.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
          el.style.transform = ''
        })
      })
    }
    prevLeftRef.current = left
  }, [dep])
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const linksRef = useRef(null)
  const toggleRef = useRef(null)

  useSlideOnChange(linksRef, isHome)
  useSlideOnChange(toggleRef, isHome)

  // The toggle button that opens/closes this is hidden past the same
  // breakpoint (navbar.module.css), so if the menu is open when the
  // viewport widens past it, there's no longer any control that could
  // close it — close it here instead of leaving it stuck open.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 881px)')
    const onChange = (e) => {
      if (e.matches) setOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const isActive = (to) => (to === '/' ? pathname === '/' : pathname.startsWith(to))

  return (
    <>
      <nav className={styles.navbar} data-home={isHome || undefined}>
        <Link
          to="/"
          className={styles.logo}
          aria-hidden={isHome || undefined}
          tabIndex={isHome ? -1 : undefined}
        >
          <img src="/assets/global/name.png" height="45" alt="Ethan Rosenfeld" />
        </Link>
        {/* linksSlide carries the FLIP transform; links carries the gap
            transition. Keeping them on separate elements means the JS-driven
            inline transform never overwrites the CSS-driven gap transition
            (setting el.style.transition replaces the whole property, so the
            two can't safely share a node). */}
        <div className={styles.linksSlide} ref={linksRef}>
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
        </div>
        <button
          ref={toggleRef}
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

      <div className={styles.dropdownAnchor}>
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
      </div>
    </>
  )
}
