import { useParams, Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { getProjectById } from '../data/projects'
import '../styles/ProjectDetail.css'
import '../styles/scrollAnimations.css'

export default function ProjectDetail() {
  useScrollAnimation()
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return (
      <section className="project-detail">
        <h1>Project niet gevonden</h1>
        <Link to="/projects" className="btn btn-primary">
          Terug naar projecten
        </Link>
      </section>
    )
  }

  return (
    <div className="project-detail">
      <section className="detail-hero">
        <div className="section-wrapper">
          <Link to="/projects" className="back-link">← terug naar werken</Link>
          <h1>{project.title}</h1>
          <p className="project-description">{project.description}</p>
        </div>
      </section>

      {project.image && (
        <section className="detail-image">
          <img src={project.image} alt={project.title} className="project-hero-image" />
        </section>
      )}

      <section className="detail-content">
        <div className="section-wrapper">
          <div className="content-grid">
            <div className="project-main">
              <h2>over dit project</h2>
              <p>Dit is een plek om je project in detail te beschrijven. Praat over het probleem dat je hebt opgelost, de aanpak die je hebt genomen en de resultaten die je hebt bereikt.</p>

              <h2>de uitdaging</h2>
              <p>Welk probleem probeerde je op te lossen? Wat waren de beperkingen en vereisten?</p>

              <h2>de oplossing</h2>
              <p>Hoe benader je de oplossing? Welke beslissingen heb je genomen en waarom?</p>

              <h2>lessen</h2>
              <p>Wat heb je van dit project geleerd? Wat zou je volgende keer anders doen?</p>

              <h2>het resultaat</h2>
              <p>Wat was de uitkomst? Wat voor impact had het?</p>
            </div>

            <div className="project-sidebar">
              <div className="sidebar-section">
                <h3>Tech Stack</h3>
                <ul className="tech-list">
                  {project.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-section">
                <h3>Links</h3>
                <ul className="links-list">
                  <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-cta">
        <div className="section-wrapper">
          <h2>meer projecten</h2>
          <Link to="/projects" className="btn btn-primary btn-large">
            alle werken bekijken
          </Link>
        </div>
      </section>
    </div>
  )
}
