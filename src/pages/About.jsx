import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/About.css'
import '../styles/scrollAnimations.css'

export default function About() {
  useScrollAnimation()

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="section-wrapper">
          <h1>over mij</h1>
          <p className="hero-subtitle">Software developer & levenslang lerende</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <div className="section-wrapper">
          <h2>mijn verhaal</h2>
          <div className="story-content">
            <p>
              Ik ben altijd goed geweest met technologie en logisch denken. Na het zoeken naar de juiste opleiding heb ik ICT gevonden en ben ik aan mijn softwareontwikkelingtraject begonnen. Ik genoot van het puzzelaspect van het leren van code, en vandaag werk ik naar mijn passie voor het bouwen van digitale oplossingen.
            </p>
            <p>
              Tijdens mijn eerste stage nam ik deel aan een officiële hackathon georganiseerd door de Universiteit Twente. Deze ervaring leerde me veel over het presenteren van mijn vaardigheden, aanpassing aan situaties en het vinden van oplossingen onder druk. Het toonde me de waarde van snel denken en samenwerking.
            </p>
            <p>
              Ik hou van leren en mezelf onderwijzen in nieuwe gebieden. Wat me het meest aandrijft is het zien van ideeën tot leven komen door technologie, en weten dat wat ik bouw voor anderen kan uitwissen. Die motivatie drijft me aan om voortdurend te verbeteren en nieuwe uitdagingen aan te gaan.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-detailed">
        <div className="section-wrapper">
          <h2>vaardigheden & expertise</h2>

          <div className="skills-matrix">
            <div className="skill-category">
              <h3>frontend ontwikkeling</h3>
              <ul className="skill-list">
                <li>React & React Hooks</li>
                <li>JavaScript ES6+</li>
                <li>CSS3 & Animaties</li>
                <li>Responsive Design</li>
                <li>Web Performance</li>
                <li>Toegankelijkheid (A11y)</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>backend ontwikkeling</h3>
              <ul className="skill-list">
                <li>Node.js & Express</li>
                <li>RESTful APIs</li>
                <li>MongoDB & Databases</li>
                <li>Server Architectuur</li>
                <li>Authenticatie</li>
                <li>Implementatie & DevOps</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>ontwerp & UX</h3>
              <ul className="skill-list">
                <li>UI/UX Ontwerp</li>
                <li>Figma</li>
                <li>Design Systems</li>
                <li>Prototyping</li>
                <li>Gebruikersonderzoek</li>
                <li>Informatiestructuur</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>tools & praktijken</h3>
              <ul className="skill-list">
                <li>Git & GitHub</li>
                <li>Testen & QA</li>
                <li>Agile Methodologie</li>
                <li>Probleemoplossing</li>
                <li>Code Review</li>
                <li>Documentatie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach">
        <div className="section-wrapper">
          <h2>mijn aanpak</h2>
          <div className="approach-grid">
            <div className="approach-card">
              <h3>probleemoplossing focus</h3>
              <p>Ik geniet ervan uitdagingen te analyseren en deze op te splitsen in beheersbare stappen. Mijn aanpak is om het probleem volledig te begrijpen voordat ik een efficiënte en betrouwbare oplossing bouw.</p>
            </div>
            <div className="approach-card">
              <h3>continu leren</h3>
              <p>Ik ben altijd graag bezig met het leren van nieuwe technologieën en technieken. Ik zie elk project als een kans om mijn vaardigheden uit te breiden en up-to-date te blijven in het snel veranderende veld van softwareontwikkeling.</p>
            </div>
            <div className="approach-card">
              <h3>gebruiker-gericht ontwikkeling</h3>
              <p>Ik streef ernaar software te creëren die intuïtief en gebruikersvriendelijk is. Het begrijpen van de behoeften van gebruikers helpt me oplossingen te ontwerpen die niet alleen functioneel zijn, maar ook aangenaam om mee om te gaan.</p>
            </div>
            <div className="approach-card">
              <h3>praktisch experimenteren</h3>
              <p>Ik geloof dat de beste manier om te leren door bouwen en experimenteren is. Ik geniet ervan nieuwe ideeën uit te proberen, verschillende benaderingen te testen en te itereren totdat de oplossing goed werkt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="section-wrapper">
          <h2>laten we samenwerken</h2>
          <p>Heb je een project in gedachten? Laten we praten over hoe ik je visie tot leven kan brengen.</p>
          <a href="/contact" className="btn btn-primary btn-large">
            contact opnemen
          </a>
        </div>
      </section>
    </div>
  )
}
