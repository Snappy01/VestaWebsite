import { motion } from 'framer-motion'
import styles from '../styles/TechStack.module.css'

const technologies = [
  { name: 'SwiftUI', description: 'Native iOS UI', color: '#f05138' },
  { name: 'Combine', description: 'Reactive Framework', color: '#5856d6' },
  { name: 'WebSocket', description: 'Real-time Comm', color: '#00c7b7' },
  { name: 'OpenAI', description: 'GPT-4o Voice AI', color: '#10a37f' },
  { name: 'Tauri', description: 'Desktop App', color: '#ffc131' },
  { name: 'React', description: 'Web Interface', color: '#61dafb' },
  { name: 'Crestron', description: 'Home Automation', color: '#e31837' },
  { name: 'JSON', description: 'Configuration', color: '#cbcb41' }
]

const TechStack = () => {
  return (
    <section id="tech-stack" className={`section ${styles.techStack}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Built with <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="section-subtitle">
            A carefully chosen stack for performance, reliability, and developer experience.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              style={{ '--tech-color': tech.color }}
            >
              <div className={styles.cardGlow} />
              <h3 className={styles.techName}>{tech.name}</h3>
              <p className={styles.techDescription}>{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
