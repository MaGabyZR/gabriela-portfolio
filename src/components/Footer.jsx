import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.logo}>
            <span className={styles.mono}>{'<'}</span>MGR<span className={styles.mono}>{'/>'}</span>
          </span>
          <span className={styles.copy}>© {new Date().getFullYear()} Mária Gabriela Rubio. Built with React + Vite.</span>
        </div>
        <div className={styles.right}>
          <a href="https://github.com/MaGabyZR" target="_blank" rel="noreferrer" className={styles.link}>GitHub</a>
          <a href="https://www.linkedin.com/in/gabriela-rubio-06111911/" target="_blank" rel="noreferrer" className={styles.link}>LinkedIn</a>
          <a href="mailto:gabyrubioa@gmail.com" className={styles.link}>Email</a>
        </div>
      </div>
    </footer>
  )
}
