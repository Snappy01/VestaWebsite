import { ExternalLink } from 'lucide-react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
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
