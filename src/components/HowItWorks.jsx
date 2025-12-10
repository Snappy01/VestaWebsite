import { motion } from 'framer-motion'
import { FileJson, Settings, Smartphone, Cpu } from 'lucide-react'
import styles from '../styles/HowItWorks.module.css'

const steps = [
  {
    icon: FileJson,
    number: '01',
    title: 'Define Your Devices',
    description: 'Create a simple JSON configuration file listing your lights, blinds, HVAC, and media zones with their Crestron Join IDs.'
  },
  {
    icon: Settings,
    number: '02',
    title: 'Use VestaConfigurator',
    description: 'Optional: Use our desktop app to visually create and edit your configuration without writing JSON manually.'
  },
  {
    icon: Smartphone,
    number: '03',
    title: 'App Builds Itself',
    description: 'Vesta automatically generates the perfect interface based on your configuration. No coding required.'
  },
  {
    icon: Cpu,
    number: '04',
    title: 'Control via WebSocket',
    description: 'Real-time bidirectional communication with your Crestron processor. Instant feedback and control.'
  }
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className={`section ${styles.howItWorks}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            From <span className="gradient-text">JSON to Control</span> in Minutes
          </h2>
          <p className="section-subtitle">
            A streamlined workflow that puts you in control without complexity.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={styles.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <div className={styles.stepIcon}>
                  <step.icon size={24} />
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.connector} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Code Preview */}
        <motion.div
          className={styles.codePreview}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.codeHeader}>
            <div className={styles.codeDots}>
              <span />
              <span />
              <span />
            </div>
            <span className={styles.codeFilename}>zones.config.json</span>
          </div>
          <pre className={styles.code}>
{`{
  "zones": [
    {
      "id": 1,
      "name": "Living Room",
      "filename": "LivingRoom.json",
      "icon": "sofa"
    },
    {
      "id": 2,
      "name": "Bedroom",
      "filename": "Bedroom.json",
      "icon": "bed.double"
    }
  ]
}`}
          </pre>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
