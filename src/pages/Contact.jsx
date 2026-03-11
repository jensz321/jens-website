import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/Contact.css'
import '../styles/scrollAnimations.css'

export default function Contact() {
  useScrollAnimation()

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="section-wrapper">
          <h1>Neem Contact Op</h1>
          <p className="hero-subtitle">Voel je vrij om contact op te nemen via e-mail of LinkedIn. Ik geef de voorkeur aan e-mail- of LinkedIn-verbindingen, en ik ben altijd graag bereid om nieuwe mogelijkheden en projecten te bespreken.</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods-section">
        <div className="section-wrapper">
          <div className="contact-methods">
            <a href="mailto:jens@vanduinkerken.net" className="contact-card">
              <div className="contact-icon">✉</div>
              <h3>E-mail</h3>
              <p>jens@vanduinkerken.net</p>
            </a>

            <a href="https://github.com/jensz321" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">⚙</div>
              <h3>GitHub</h3>
              <p>github.com/jensz321</p>
            </a>

            <a href="https://www.linkedin.com/in/jens-van-duinkerken-1a1b97292" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">🔗</div>
              <h3>LinkedIn</h3>
              <p>Jens van Duinkerken</p>
            </a>

            <a href="tel:0618210392" className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Telefoon</h3>
              <p>+31 6 18210392</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
