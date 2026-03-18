import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span>05.</span> Contact
        </div>

        <div className={styles.inner}>
          <h2 className={styles.heading}>
            Let's build something
            <br />
            <em>remarkable together.</em>
          </h2>

          <p className={styles.sub}>
            I'm currently available for AI integration projects, technical
            consulting, and fullstack development work. Reach out and let's
            talk.
          </p>

          <div className={styles.links}>
            <a href="mailto:gabyrubioa@gmail.com" className={styles.link}>
              <div className={styles.linkIcon}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="2,4 12,13 22,4" />
                </svg>
              </div>
              <div>
                <span className={styles.linkLabel}>Email</span>
                <span className={styles.linkVal}>gabyrubioa@gmail.com</span>
              </div>
              <span className={styles.arrow}>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/gabriela-rubio-06111911/"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <div className={styles.linkIcon}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <span className={styles.linkLabel}>LinkedIn</span>
                <span className={styles.linkVal}>gabriela-rubio-06111911</span>
              </div>
              <span className={styles.arrow}>↗</span>
            </a>

            <a
              href="https://github.com/MaGabyZR"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <div className={styles.linkIcon}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div>
                <span className={styles.linkLabel}>GitHub</span>
                <span className={styles.linkVal}>MaGabyZR</span>
              </div>
              <span className={styles.arrow}>↗</span>
            </a>

            <a href="tel:+50258431715" className={styles.link}>
              <div className={styles.linkIcon}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <span className={styles.linkLabel}>Phone</span>
                <span className={styles.linkVal}>
                  Not available, only per request
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
