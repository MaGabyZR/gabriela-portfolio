import styles from './Skills.module.css'

const skillGroups = [
  {
    title: 'AI & GenAI Engineering',
    icon: '🤖',
    color: '#c8f06a',
    skills: ['AWS Bedrock', 'LangChain', 'PyTorch', 'FAISS', 'OpenSearch', 'Hugging Face', 'Ollama', 'RAG Pipelines', 'Prompt Engineering', 'Hallucination Control', 'Chatbots', 'n8n Automation'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁',
    color: '#6af0c8',
    skills: ['AWS EC2', 'Lambda', 'S3', 'ECS', 'SQS', 'IAM', 'CloudFormation', 'GCP', 'Vercel', 'CI/CD', 'AWS Transcribe', 'AWS Rekognition'],
  },
  {
    title: 'Backend',
    icon: '⚙',
    color: '#f0c86a',
    skills: ['Python', 'Java 8–17+', 'Spring Boot', 'Node.js', 'Go', 'Bun', 'Prisma ORM', 'REST APIs', 'AWS Lambda'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    color: '#c86af0',
    skills: ['React', 'TypeScript', 'Redux', 'Vite', 'JavaScript ES5+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Axios'],
  },
  {
    title: 'Databases',
    icon: '🗄',
    color: '#f06a6a',
    skills: ['MySQL', 'MongoDB', 'Flyway', 'DataGrip', 'MySQL Workbench', 'Prisma'],
  },
  {
    title: 'Tools & Testing',
    icon: '🔧',
    color: '#6ab0f0',
    skills: ['Jest', 'Postman', 'Swagger', 'Git', 'GitHub', 'Maven', 'Zapier', 'n8n'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span>02.</span> Technical Skills
        </div>

        <h2 className={styles.heading}>
          A full-spectrum<br />
          <em>technology toolkit.</em>
        </h2>

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.title} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.icon}>{group.icon}</span>
                <h3 className={styles.cardTitle} style={{ color: group.color }}>
                  {group.title}
                </h3>
              </div>
              <div className={styles.pills}>
                {group.skills.map(s => (
                  <span key={s} className={styles.pill}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
