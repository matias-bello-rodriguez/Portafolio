import React from 'react';
import './About.css';

const About = () => {
  const experiences = [
    {
      title: "Desarrollo de Aplicaciones Web",
      description: "Creación de aplicaciones web escalables con tecnologías modernas y arquitecturas robustas.",
      icon: "💻"
    },
    {
      title: "Desarrollo Mobile",
      description: "Aplicaciones móviles nativas e híbridas para iOS y Android con React Native.",
      icon: "📱"
    },
        {
      title: "Ciencia de datos",
      description: "Análisis y visualización de datos para la toma de decisiones informadas orientadas a la integración en plataformas",
      icon: "📊"
    },
  ];

  const principles = [
    {
      title: "Pragmatismo",
      description: "Soluciones efectivas y prácticas que resuelven problemas reales."
    },
    {
      title: "Escalabilidad",
      description: "Diseñar en miras a la actualización y mejora continua."
    },
    {
      title: "Eficiencia",
      description: "Trabajo óptimo y uso efectivo de recursos, priorizando actividades clave."
    },
    {
      title: "Comunicación",
      description: "Entender que el lenguaje técnico debe ser accesible para todos."
    }
  ];

  return (
    <section id="sobre-mi" className="about">
      <div className="container">
        <div className="about-header">
          <div className="section-tag">
            <span className="section-number">01</span>
            <span className="section-title">Sobre Mí</span>
          </div>
          <h2 className="about-title">
            Ingeniero en Informática con enfoque en 
            <span className="highlight"> desarrollo de software</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <p>
                Soy un <strong>programador pragmático</strong>, 
                especializado en crear soluciones tecnológicas innovadoras y escalables, aplicando <strong>prácticas de desarrollo ágil</strong>.
              </p>
              
              <p>
                Mi experiencia abarca desde el desarrollo de aplicaciones web full-stack hasta el manejo de grandes volúmenes de datos para lograr automatización.
              </p>
              
              <p>
                Actualmente me enfoco en tecnologías como <strong>React/Angular</strong>, <strong>Node.js</strong> y
                <strong>Python</strong>, aplicándolas a desafíos tecnológicos modernos.
              </p>
            </div>

            <div className="about-principles">
              <h3 className="principles-title">Principios de Trabajo</h3>
              <div className="principles-grid">
                {principles.map((principle, index) => (
                  <div key={index} className="principle-item">
                    <h4 className="principle-title">{principle.title}</h4>
                    <p className="principle-desc">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-image-container">
              <div className="about-image-placeholder">
                <div className="image-overlay">
                  <div className="code-snippet">
                    <div className="snippet-line">
                      <span className="keyword">const</span> 
                      <span className="variable"> ingeniero</span> = {"{"}
                    </div>
                    <div className="snippet-line">
                      <span className="property">  enfoque</span>: 
                      <span className="string">'pragmático'</span>,
                    </div>
                    <div className="snippet-line">
                      <span className="property">  especialidad</span>: 
                      <span className="string">'informática'</span>,
                    </div>
                    <div className="snippet-line">
                      <span className="property">  objetivo</span>: 
                      <span className="string">'eficiencia'</span>
                    </div>
                    <div className="snippet-line">{"}"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-cards">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-card">
                  <div className="card-icon">{exp.icon}</div>
                  <div className="card-content">
                    <h4 className="card-title">{exp.title}</h4>
                    <p className="card-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">2+</div>
            <div className="stat-label">Años de Experiencia</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Proyectos Completados</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Tecnologías Dominadas</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Transformación digital</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
