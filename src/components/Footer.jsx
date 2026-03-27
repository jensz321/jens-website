import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Jens van Duinkerken</h3>
          <p>Software Developer uit Apeldoorn, Nederland</p>
        </div>

        <div className="footer-section">
          <h4>navigatie</h4>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">over mij</Link></li>
            <li><Link to="/projects">projecten</Link></li>
            <li><Link to="/contact">contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>verbind met me</h4>
          <ul>
            <li><a href="mailto:jens@vanduinkerken.net">E-mail</a></li>
            <li><a href="https://github.com/jensz321" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/jens-van-duinkerken-1a1b97292" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="tel:0618210392">Telefoon</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Jens van Duinkerken. Alle rechten voorbehouden.</p>
        <p>Gebouwd met React & Vite | Apeldoorn, Nederland</p>
      </div>
    </footer>
  )
}
