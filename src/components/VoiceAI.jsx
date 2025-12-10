import { motion } from 'framer-motion'
import { Mic, Zap, Globe, MessageSquare } from 'lucide-react'
import styles from '../styles/VoiceAI.module.css'

const capabilities = [
  {
    icon: Globe,
    title: 'Any Language',
    description: 'Speak naturally in any language. The AI understands context and intent.'
  },
  {
    icon: Zap,
    title: 'Turbo Mode',
    description: 'Audio-to-Audio processing with GPT-4o for ultra-fast responses.'
  },
  {
    icon: MessageSquare,
    title: 'Context Aware',
    description: 'Knows your rooms, devices, and current states for smart responses.'
  }
]

const VoiceAI = () => {
  return (
    <section className={`section ${styles.voiceAI}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Visualization */}
          <motion.div
            className={styles.visualization}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.orbContainer}>
              {/* Animated rings */}
              {[1, 2, 3, 4].map((ring) => (
                <motion.div
                  key={ring}
                  className={styles.ring}
                  style={{ '--ring-index': ring }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    delay: ring * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              ))}
              
              {/* Center orb */}
              <motion.div
                className={styles.orb}
                animate={{
                  boxShadow: [
                    '0 0 60px rgba(0, 242, 255, 0.3)',
                    '0 0 100px rgba(0, 242, 255, 0.5)',
                    '0 0 60px rgba(0, 242, 255, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Mic size={40} />
              </motion.div>
            </div>

            {/* Example command */}
            <motion.div
              className={styles.exampleCommand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className={styles.commandLabel}>Try saying:</span>
              <p className={styles.commandText}>
                "Hey Vesta, set the living room to movie mode"
              </p>
            </motion.div>
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
              <span className={styles.badgeIcon}>✨</span>
              Powered by OpenAI
            </div>

            <h2 className={styles.title}>
              Meet Your <span className="gradient-text">AI Assistant</span>
            </h2>

            <p className={styles.description}>
              Hold the header bar anywhere in the app to activate voice control. 
              Natural language processing understands complex commands and controls 
              multiple devices at once.
            </p>

            <div className={styles.capabilities}>
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  className={styles.capability}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <div className={styles.capIcon}>
                    <cap.icon size={20} />
                  </div>
                  <div>
                    <h4 className={styles.capTitle}>{cap.title}</h4>
                    <p className={styles.capDescription}>{cap.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VoiceAI
