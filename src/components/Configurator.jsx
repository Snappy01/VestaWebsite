import { motion } from 'framer-motion'
import { Download, Monitor, FolderOpen, Save } from 'lucide-react'
import styles from '../styles/Configurator.module.css'

const features = [
  {
    icon: FolderOpen,
    title: 'Open Any Project',
    description: 'Load existing configuration folders or create new ones from scratch.'
  },
  {
    icon: Monitor,
    title: 'Visual Editor',
    description: 'Edit devices, commands, and zones with an intuitive interface. No JSON editing required.'
  },
  {
    icon: Save,
    title: 'Real-time Validation',
    description: 'Instant error detection for missing Join IDs and configuration issues.'
  }
]

const Configurator = () => {
  return (
    <section className={`section ${styles.configurator}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Screenshots */}
          <motion.div
            className={styles.screenshots}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.screenshotStack}>
              <motion.img
                src={`${import.meta.env.BASE_URL}assets/screenshots/configurator-project.png`}
                alt="VestaConfigurator Project View"
                className={styles.screenshotBack}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <motion.img
                src={`${import.meta.env.BASE_URL}assets/screenshots/configurator-home.png`}
                alt="VestaConfigurator Home"
                className={styles.screenshotFront}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.badge}>
              <Monitor size={14} />
              Desktop App
            </div>

            <h2 className={styles.title}>
              <span className="gradient-text">VestaConfigurator</span>
            </h2>

            <p className={styles.description}>
              A companion desktop app built with Tauri for creating and managing 
              your Vesta configuration files. Available for macOS, Windows, and Linux.
            </p>

            <div className={styles.features}>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className={styles.feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <div className={styles.featureIcon}>
                    <feature.icon size={18} />
                  </div>
                  <div>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#"
              className={`btn btn-primary ${styles.downloadBtn}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={18} />
              Download for macOS
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Configurator
