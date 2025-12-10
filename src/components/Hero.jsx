import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import styles from '../styles/Hero.module.css'

const Hero = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    // Accélérer la vidéo à 1.5x
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5
    }
  }, [])

  return (
    <section className={styles.hero}>
      {/* Background Effects */}
      <div className={styles.bgGradient} />
      <div className={styles.bgGrid} />
      
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          {/* Badge */}
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badgeDot} />
            Crestron Control Made Beautiful
          </motion.div>

          {/* Title */}
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Dynamic iOS Interface
            <br />
            <span className="gradient-text">for Smart Homes</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Control your entire home with voice, touch, and elegance.
            <br />
            A native SwiftUI app that connects seamlessly to Crestron systems.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href="#features" className="btn btn-primary">
              Explore Features
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Device Mockups */}
        <motion.div
          className={styles.devices}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Video Demo */}
          <div className={styles.videoWrapper}>
            <video
              ref={videoRef}
              className={styles.demoVideo}
              autoPlay
              loop
              muted
              playsInline
              poster={`${import.meta.env.BASE_URL}assets/screenshots/ipad-lights.png`}
            >
              <source src={`${import.meta.env.BASE_URL}assets/videos/demo.mov`} type="video/quicktime" />
              <source src={`${import.meta.env.BASE_URL}assets/videos/demo.mp4`} type="video/mp4" />
            </video>
          </div>

          {/* Floating elements */}
          <motion.div
            className={styles.floatingCard}
            style={{ top: '10%', left: '-5%' }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className={styles.floatingIcon}>💡</span>
            <span>Lighting Control</span>
          </motion.div>

          <motion.div
            className={styles.floatingCard}
            style={{ top: '30%', right: '-8%' }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <span className={styles.floatingIcon}>🎙️</span>
            <span>Voice AI</span>
          </motion.div>

          <motion.div
            className={styles.floatingCard}
            style={{ bottom: '20%', left: '-10%' }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
          >
            <span className={styles.floatingIcon}>❄️</span>
            <span>Climate</span>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}

export default Hero
