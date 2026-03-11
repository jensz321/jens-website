import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/Home.css'
import '../styles/scrollAnimations.css'

export default function Home() {
  useScrollAnimation()

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Ik ben Jens,<br />Software Developer</h1>
          <p className="hero-subtitle">Digitale Oplossingen Bouwen Die Ertoe Doen</p>
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">
              Mijn Werk Bekijken
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Opnemen
            </Link>
          </div>
        </div>
      </section>

      {/* Who I Am Section */}
      <section className="who-am-i">
        <div className="section-wrapper">
          <h2>Wie Ben Ik</h2>
          <div className="who-content">
            <p>Ik ben een 19-jarige student softwareontwikkeling uit Nederland. Ik ben altijd geïnteresseerd geweest in technologie en hoe dingen werken. Ik hou vooral van het bouwen van dingen zelf en het omzetten van ideeën in werkende digitale oplossingen.</p>
            <p>Tot nu toe heb ik me vooral gericht op webontwikkeling met HTML, CSS, JavaScript en API's, maar ik ben nieuwsgierig naar veel verschillende gebieden binnen softwareontwikkeling. Ik geniet ervan om nieuwe vaardigheden te leren en mezelf uit te dagen met nieuwe projecten.</p>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="what-i-do">
        <div className="section-wrapper">
          <h2>Wat Ik Doe</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Webontwikkeling</h3>
              <p>Ik bouw responsieve en gebruikersvriendelijke websites met HTML, CSS en JavaScript, met nadruk op schoon ontwerp en soepele functionaliteit.</p>
            </div>
            <div className="service-item">
              <h3>Frontend Engineering</h3>
              <p>Ik creëer intuïtieve interfaces en dynamische gebruikerservaringen, waardoor webapplicaties tot leven komen met moderne frontend-technologieën en best practices.</p>
            </div>
            <div className="service-item">
              <h3>Softwareprojecten</h3>
              <p>Ik ontwikkel op maat gemaakte softwareoplossingen, experimenteer met verschillende programmeertalen en tools om problemen uit de praktijk efficiënt op te lossen.</p>
            </div>
            <div className="service-item">
              <h3>Leren & Experimenteren</h3>
              <p>Ik ben gepassioneerd over het verkennen van nieuwe gebieden in softwareontwikkeling, continu leren van nieuwe technologieën en verbeteren van mijn vaardigheden door praktische projecten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="featured-works">
        <div className="section-wrapper">
          <h2>Uitgelichte Werken</h2>
          <div className="works-grid">
            <Link to="/projects/examenproject" className="work-card">
              <div className="work-image">
                <div className="placeholder">Examenproject</div>
              </div>
              <div className="work-info">
                <h3>Examenproject</h3>
                <p className="work-desc">Een uitgebreid portfolioproject gebouwd met React en Node.js</p>
                <p className="work-meta">React • Node.js • MongoDB</p>
              </div>
            </Link>
          </div>
          <div className="view-all-wrapper">
            <Link to="/projects" className="view-all">
              Alle Werken Bekijken
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="section-wrapper">
          <h2>Vaardigheden & Technologieën</h2>
          <div className="skills-columns">
            <div className="skill-column">
              <h4>Frontend</h4>
              <ul className="tech-list">
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>React (basis)</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="skill-column">
              <h4>Backend & Databases</h4>
              <ul className="tech-list">
                <li>Node.js (basis)</li>
                <li>Express (basis)</li>
                <li>APIs</li>
                <li>MySQL (basis)</li>
                <li>MongoDB (basis)</li>
              </ul>
            </div>
            <div className="skill-column">
              <h4>Tools & Zachte Vaardigheden</h4>
              <ul className="tech-list">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>Postman</li>
                <li>Probleemoplossing & Creativiteit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <div className="section-wrapper cta-content">
          <h2>Klaar om Iets<br />Geweldigs Te Bouwen?</h2>
          <p>Laten we digitale ervaringen creëren die ertoe doen</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Contact Opnemen
          </Link>
        </div>
      </section>
    </div>
  )
}
