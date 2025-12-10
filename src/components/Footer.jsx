import { motion } from 'framer-motion'
import { Github, Mail, ExternalLink } from 'lucide-react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className={styles.footer}>
      {/* CTA Section */}
      <div className={styles.cta}>
        <div className="container">
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.ctaTitle}>
              Ready to Transform Your <span className="gradient-text">Smart Home</span>?
            </h2>
            <p className={styles.ctaDescription}>
              Get in touch with CSP-Partners to discuss your Crestron integration project.
            </p>
            <div className={styles.ctaButtons}>
              <a href="mailto:contact@csp-partners.com" className="btn btn-primary">
                <Mail size={18} />
                Contact Us
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={18} />
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomContainer}`}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>V</div>
            <span className={styles.logoText}>Vesta</span>
          </div>

          <p className={styles.copyright}>
            © {currentYear} CSP-Partners. Vesta is a custom Crestron interface solution.
          </p>

          <div className={styles.links}>
            <a 
              href="https://csp-partners.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              CSP-Partners
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
