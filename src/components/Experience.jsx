import { useState } from 'react'
import styles from './Experience.module.css'

const experiences = [
  {
    role: 'Freelance FullStack Developer & AI Consultant',
    company: 'Independent',
    period: '2018 – Present',
    highlights: [
      'Architect and deploy production-grade RAG pipelines on AWS using Bedrock and FAISS for enterprise use cases.',
      'Integrate multimodal intelligence using AWS Transcribe and Rekognition to automate workflows and extract insights.',
      'Develop and optimize GenAI endpoints with LangChain, PyTorch, and modern LLMs on AWS Lambda and ECS.',
      'Lead AI architecture selection with focus on hallucination mitigation, agent orchestration, and evaluation frameworks.',
      'Orchestrate backend automation pipelines using n8n for RAG data ingestion and processing.',
      'Build modern reactive UIs with React and TypeScript; manage relational and non-relational databases.',
      'Strategic consultancy on AWS infrastructure: S3, SQS, EC2, Lambda, Elastic Beanstalk, CloudFormation.',
    ],
  },
  {
    role: 'Property Manager',
    company: 'Remote / Part-time',
    period: '2017 – 2025',
    highlights: [
      'Coordinated multidisciplinary teams: security, maintenance, and external technicians.',
      'Designed and developed a digital financial control system for fee collection from scratch.',
      'Managed annual budget preparation, transparent resource management, and conflict resolution.',
    ],
  },
  {
    role: 'Founder',
    company: 'Creaciones André',
    period: '2010 – 2017',
    highlights: [
      'Established a company for baby accessories managing imports, exports, and production.',
      'Developed an inventory system, fabric import control, and a retail/export website.',
    ],
  },
  {
    role: 'Foreign Trade Promotion',
    company: 'Guatemala Chamber of Commerce',
    period: '2006 – 2009',
    highlights: [
      'Managed trade activities in national and international events with market intelligence support.',
      'Led UI design (with KOICA) for the first Guatemalan e-commerce site.',
      'Managed International Cooperation funds for export promotion.',
    ],
  },
  {
    role: 'Financial Management Assistant',
    company: 'DaimlerChrysler / Mercedes-Benz',
    period: '1998 – 2002',
    highlights: [
      'Annual operational planning and process mapping for ISO 9000 certification.',
      'Part of the team designing digital systems for finance, sales, and customer service during the Daimler-Chrysler merger.',
    ],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const exp = experiences[active]

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span>04.</span> Experience
        </div>

        <h2 className={styles.heading}>
          Career journey &amp;<br />
          <em>impact delivered.</em>
        </h2>

        <div className={styles.layout}>
          <div className={styles.tabs}>
            {experiences.map((e, i) => (
              <button
                key={e.role}
                className={`${styles.tab} ${i === active ? styles.tabActive : ''}`}
                onClick={() => setActive(i)}
              >
                <span className={styles.tabCompany}>{e.company}</span>
                <span className={styles.tabPeriod}>{e.period}</span>
              </button>
            ))}
          </div>

          <div className={styles.detail}>
            <div className={styles.detailHead}>
              <h3 className={styles.role}>{exp.role}</h3>
              <div className={styles.meta}>
                <span className={styles.company}>{exp.company}</span>
                <span className={styles.period}>{exp.period}</span>
              </div>
            </div>

            <ul className={styles.list}>
              {exp.highlights.map((h, i) => (
                <li key={i} className={styles.item}>
                  <span className={styles.arrow}>▹</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
