import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span>01.</span> About Me
        </div>

        <div className={styles.grid}>
          <div className={styles.text}>
            <h2 className={styles.heading}>
              Engineering intelligent
              <br />
              <em>systems that scale.</em>
            </h2>

            <p>
              I'm a Guatemala City-based Fullstack Software Engineer and AI
              Augmented Developer with a passion for building applications where
              modern AI meets robust cloud infrastructure.
            </p>
            <p>
              While many see AI as a 'black box,' I see it as a high-performance
              engine that requires precise instrumentation. I am an AI-Augmented
              Developer who specializes in bridging the gap between human intent
              and machine execution through advanced prompt engineering and
              agentic design. I don’t just 'ask' AI for answers; I architect the
              logic, constraints, and context that allow LLMs to perform as
              reliable, production-grade assets.
            </p>
            <p>
              My work spans the full spectrum — from architecting
              production-grade RAG pipelines on AWS to crafting reactive
              frontends with React and TypeScript. I bring a rare combination of
              technical depth and strategic leadership, having guided
              multidisciplinary teams through complex AI integration projects.
            </p>
            <p>
              With dual bachelor's degrees — one in Information Systems from the
              University of Stuttgart and another in International Relations
              from Universidad Francisco Marroquín — I approach every problem
              with both technical precision and global perspective.
            </p>

            <div className={styles.certs}>
              {[
                { label: "AWS Cloud Practitioner", icon: "☁" },
                { label: "AWS Generative AI", icon: "🤖" },
                { label: "GCP GenAI", icon: "⚡" },
              ].map((c) => (
                <div key={c.label} className={styles.cert}>
                  <span className={styles.certIcon}>{c.icon}</span>
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.aside}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Quick Facts</h3>
              <ul className={styles.infoList}>
                <li>
                  <span className={styles.key}>Location</span>
                  <span>Guatemala City 🇬🇹</span>
                </li>
                <li>
                  <span className={styles.key}>Role</span>
                  <span>Freelance Consultant</span>
                </li>
                <li>
                  <span className={styles.key}>Focus</span>
                  <span>AI + Cloud + Fullstack</span>
                </li>
                <li>
                  <span className={styles.key}>Education</span>
                  <span>B.A. Stuttgart + UFM</span>
                </li>
                <li>
                  <span className={styles.key}>Languages</span>
                  <span>ES · EN · DE</span>
                </li>
              </ul>
            </div>

            <div className={styles.emailCard}>
              <span className={styles.emailLabel}>Email</span>
              <a href="mailto:gabyrubioa@gmail.com" className={styles.email}>
                gabyrubioa@gmail.com ↗
              </a>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Education</h3>
              <div className={styles.eduItem}>
                <span className={styles.eduDeg}>B.A. Information Systems</span>
                <span className={styles.eduSchool}>
                  University of Stuttgart, Germany
                </span>
              </div>
              <div className={styles.eduItem}>
                <span className={styles.eduDeg}>
                  B.A. International Relations
                </span>
                <span className={styles.eduSchool}>
                  Universidad Francisco Marroquín <em>(Cum Laude)</em>
                </span>
              </div>
              <div className={styles.eduItem}>
                <span className={styles.eduDeg}>
                  Leadership Diploma — Get Things Done
                </span>
                <span className={styles.eduSchool}>INCAE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
