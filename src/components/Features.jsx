import { motion } from 'framer-motion'
import { Lightbulb, Blinds, Thermometer, Speaker, Tv, Mic } from 'lucide-react'
import styles from '../styles/Features.module.css'

const features = [
  {
    icon: Lightbulb,
    title: 'Lighting',
    description: 'Control individual lights, RGB colors, and presets with smooth sliders and intuitive toggles.',
    color: '#fbbf24'
  },
  {
    icon: Blinds,
    title: 'Blinds',
    description: 'Raise, lower, and stop motorized blinds with one-tap controls and status indicators.',
    color: '#60a5fa'
  },
  {
    icon: Thermometer,
    title: 'HVAC',
    description: 'Adjust temperature with elegant circular gauges. See current and target temps at a glance.',
    color: '#f87171'
  },
  {
    icon: Speaker,
    title: 'Audio',
    description: 'Volume control with mute toggle for each audio zone. Seamless multi-room audio management.',
    color: '#a78bfa'
  },
  {
    icon: Tv,
    title: 'Video',
    description: 'Source selection, D-Pad navigation, and transport controls for your media systems.',
    color: '#34d399'
  },
  {
    icon: Mic,
    title: 'Voice AI',
    description: 'Powered by OpenAI GPT-4o. Control your entire home with natural voice commands.',
    color: '#00f2ff'
  }
]

const Features = () => {
  return (
    <section id="features" className={`section ${styles.features}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Complete <span className="gradient-text">Smart Home</span> Control
          </h2>
          <p className="section-subtitle">
            Every aspect of your home automation, beautifully designed and instantly responsive.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div 
                className={styles.iconWrapper}
                style={{ '--icon-color': feature.color }}
              >
                <feature.icon size={28} />
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
