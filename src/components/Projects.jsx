import styles from './Projects.module.css'

const projects = [
  {
    name: 'Launch Intelligence',
    repo: 'https://github.com/MaGabyZR/launch-intelligence',
    desc: 'AI-powered intelligence platform for product launch strategies. Integrates LLM reasoning with market data pipelines to generate actionable insights.',
    tags: ['AI', 'LangChain', 'Python', 'RAG'],
    accent: '#c8f06a',
  },
  {
    name: 'E-Commerce MG',
    repo: 'https://github.com/MaGabyZR/ecommercemg',
    desc: 'Full-featured e-commerce application with product management, cart, and checkout. Built with modern React patterns and robust backend integration.',
    tags: ['React', 'Node.js', 'REST API', 'Fullstack'],
    accent: '#6af0c8',
  },
  {
    name: 'Panzi ChatBot',
    repo: 'https://github.com/MaGabyZR/Panzi_ChatBot',
    desc: 'Conversational AI chatbot implementing NLP techniques for natural dialogue. Features context management and multi-turn conversation handling.',
    tags: ['Chatbot', 'NLP', 'Python', 'LLM'],
    accent: '#f0c86a',
  },
  {
    name: 'Meter Dashboard',
    repo: 'https://github.com/MaGabyZR/meter-dashboard',
    desc: 'Real-time utility meter monitoring dashboard with data visualization, alerts, and analytics. Designed for operational efficiency at scale.',
    tags: ['Dashboard', 'React', 'Data Viz', 'IoT'],
    accent: '#c86af0',
  },
  {
    name: 'Vidly MG',
    repo: 'https://github.com/MaGabyZR/vidly_mg',
    desc: 'Video rental management system with full CRUD operations, authentication, and genre-based filtering. Clean RESTful API architecture.',
    tags: ['React', 'Node.js', 'MongoDB', 'Auth'],
    accent: '#f06a6a',
  },
  {
    name: 'Zetafy',
    repo: 'https://github.com/MaGabyZR/zetafy',
    desc: 'Modern web application showcasing advanced React patterns, state management, and seamless API integration for a smooth user experience.',
    tags: ['React', 'TypeScript', 'API', 'UX'],
    accent: '#6ab0f0',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span>03.</span> Projects
        </div>

        <h2 className={styles.heading}>
          Selected work<br />
          <em>& open source.</em>
        </h2>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className={styles.card}
              style={{ '--card-accent': p.accent, animationDelay: `${i * 0.08}s` }}
            >
              <div className={styles.cardHead}>
                <div className={styles.folderIcon}>
                  <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
                    <path d="M0 3a3 3 0 0 1 3-3h6l3 3h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3z" fill="var(--card-accent)" fillOpacity="0.15" stroke="var(--card-accent)" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div className={styles.externalIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </div>
              </div>

              <h3 className={styles.name} style={{ color: 'var(--card-accent)' }}>
                {p.name}
              </h3>
              <p className={styles.desc}>{p.desc}</p>

              <div className={styles.tags}>
                {p.tags.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>

              <div className={styles.ghRow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>View on GitHub</span>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.ghCta}>
          <a href="https://github.com/MaGabyZR" target="_blank" rel="noreferrer" className={styles.ghBtn}>
            View all repositories on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
