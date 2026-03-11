import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/Projects.css'
import '../styles/scrollAnimations.css'

export default function Projects() {
  useScrollAnimation()

  return (
    <div className="projects">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="section-wrapper">
          <h1>Uitgelichte Werken</h1>
          <p className="hero-subtitle">Een verzameling van projecten die ik heb gebouwd. Elk vertelt een verhaal van probleemoplossing en creativiteit.</p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="projects-list">
        <div className="section-wrapper">
          <div className="projects-grid">
            {projects.map((project, index) => {
              const isExternal = project.link && project.link.startsWith('http')
              const Component = isExternal ? 'a' : Link
              const props = isExternal
                ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
                : { to: `/projects/${project.id}` }

              return (
                <Component key={project.id} {...props} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="project-image">
                    {project.image ? (
                      <img src={project.image} alt={project.title} />
                    ) : (
                      <div className="placeholder">{project.title}</div>
                    )}
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                    <div className="project-meta">
                      {project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Component>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
