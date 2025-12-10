import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from '../styles/Gallery.module.css'

const screenshots = [
  {
    id: 'iphone-home',
    title: 'Home Dashboard',
    device: 'iPhone',
    src: '/assets/screenshots/iphone-home.png'
  },
  {
    id: 'ipad-lights',
    title: 'Lighting Control',
    device: 'iPad',
    src: '/assets/screenshots/ipad-lights.png'
  },
  {
    id: 'iphone-hvac',
    title: 'Climate Control',
    device: 'iPhone',
    src: '/assets/screenshots/iphone-hvac.png'
  },
  {
    id: 'iphone-video',
    title: 'Media Control',
    device: 'iPhone',
    src: '/assets/screenshots/iphone-video.png'
  },
  {
    id: 'iphone-lights',
    title: 'Light Presets',
    device: 'iPhone',
    src: '/assets/screenshots/iphone-lights.png'
  },
  {
    id: 'iphone-blinds',
    title: 'Blinds Control',
    device: 'iPhone',
    src: '/assets/screenshots/iphone-blinds.png'
  },
  {
    id: 'iphone-backgrounds',
    title: 'Custom Themes',
    device: 'iPhone',
    src: '/assets/screenshots/iphone-backgrounds.png'
  },
  {
    id: 'iphone-settings',
    title: 'Settings',
    device: 'iPhone',
    src: '/assets/screenshots/iphone-settings.png'
  }
]

const Gallery = () => {
  const carouselRef = useRef(null)

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 320
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="gallery" className={`section ${styles.gallery}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Beautiful on <span className="gradient-text">Every Device</span>
          </h2>
          <p className="section-subtitle">
            A native iOS experience optimized for iPhone and iPad.
          </p>
        </motion.div>
      </div>

      {/* Full-width Carousel */}
      <motion.div
        className={styles.carouselContainer}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Navigation Buttons */}
        <button 
          className={`${styles.navBtn} ${styles.navBtnLeft}`} 
          onClick={() => scroll('left')}
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          className={`${styles.navBtn} ${styles.navBtnRight}`} 
          onClick={() => scroll('right')}
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Track */}
        <div className={styles.carousel} ref={carouselRef}>
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.id + index}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className={styles.imageContainer}>
                <img
                  src={screenshot.src}
                  alt={screenshot.title}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.deviceBadge}>{screenshot.device}</span>
                <span className={styles.cardTitle}>{screenshot.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <span>Scroll to explore</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}

export default Gallery
