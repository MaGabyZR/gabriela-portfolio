import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>
        <span className={styles.logoMono}>{'<'}</span>
        MGR
        <span className={styles.logoMono}>{'/>'}</span>
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map((l, i) => (
          <li key={l.href} style={{ animationDelay: `${i * 0.05}s` }}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>
              <span className={styles.num}>0{i + 1}.</span> {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="https://www.linkedin.com/in/gabriela-rubio-06111911/"
            target="_blank"
            rel="noreferrer"
            className={styles.cta}
          >
            LinkedIn ↗
          </a>
        </li>
      </ul>

      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
