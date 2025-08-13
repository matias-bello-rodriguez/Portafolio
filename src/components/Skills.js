import React from 'react';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    {
      category: "Frontend",
      skills: [
        { name: "Angular", level: 90, icon: "🅰️" },
        { name: "React", level: 75, icon: "⚛️" },
        { name: "JavaScript", level: 75, icon: "�" },
        { name: "React Native", level: 35, icon: "📱" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Python", level: 75, icon: "🐍" },
        { name: "Django", level: 65, icon: "🎸" },
        { name: "PHP", level: 65, icon: "🐘" }
      ]
    },
    {
      category: "Bases de Datos",
      skills: [
        { name: "PostgreSQL", level: 90, icon: "🐘" },
        { name: "MySQL", level: 85, icon: "🗄️" },
        { name: "Firebase", level: 75, icon: "🔥" },
        { name: "MongoDB", level: 60, icon: "🍃" }
      ]
    },
    {
      category: "Ciencia de Datos",
      skills: [
        { name: "Python/Pandas", level: 85, icon: "🐼" },
        { name: "OCR/Tesseract", level: 70, icon: "🔤" },
        { name: "Excel/VBA", level: 70, icon: "🟩" },
        { name: "Locker/Power BI", level: 60, icon: "📈" }
      ]
    }
  ];

  const computerScienceSkills = [
    {
      name: "Conocimiento del negocio",
      description: "Actualización constante en los avances de la industría en el país",
      level: 85
    },
    {
      name: "Algoritmos y Estructuras de Datos",
      description: "Optimización de algoritmos y manejo eficiente de estructuras complejas",
      level: 76
    },
    {
      name: "Desarrollo Mobile",
      description: "Aplicaciones móviles nativas e híbridas para iOS y Android",
      level: 65
    },
    {
      name: "Machine Learning",
      description: "Implementación de modelos de ML y análisis predictivo",
      level: 75
    },
    {
      name: "Seguridad Informática",
      description: "Implementación de medidas de seguridad y protección de datos",
      level: 50
    },
    {
      name: "Microservicios",
      description: "Arquitectura distribuida y comunicación entre servicios (estoy trabajando para dominar SpringBoot)",
      level: 50
    }
  ];

  const certifications = [
    {
      name: "Ingeniería en Informática",
      issuer: "Universidad",
      year: "2025",
      status: "Completado"
    },
    {
      name: "TOEIC C1",
      issuer: "English Group",
      year: "2023",
      status: "Completado"
    },
  ];

  return (
    <section id="habilidades" className="skills">
      <div className="container">
        <div className="skills-header">
          <div className="section-tag">
            <span className="section-number">02</span>
            <span className="section-title">Habilidades</span>
          </div>
          <h2 className="skills-title">
            Competencias técnicas y 
            <span className="highlight"> ciencias de la computación</span>
          </h2>
          <p className="skills-subtitle">
            Combinando conocimientos de ingeniería en informática con tecnologías de vanguardia 
            para crear soluciones innovadoras y escalables.
          </p>
        </div>

        <div className="skills-content">
          <div className="technical-skills">
            <h3 className="section-subtitle">
              <span className="subtitle-icon">💻</span>
              Habilidades Técnicas
            </h3>
            
            <div className="skills-grid">
              {technicalSkills.map((category, categoryIndex) => (
                <div key={categoryIndex} className="skill-category">
                  <h4 className="category-title">{category.category}</h4>
                  <div className="category-skills">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="skill-header">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            style={{
                              width: `${skill.level}%`,
                              '--target-width': `${skill.level}%`,
                              animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="industrial-skills">
            <h3 className="section-subtitle">
              <span className="subtitle-icon">🎓</span>
              Competencias en Informática
            </h3>
            
            <div className="industrial-grid">
              {computerScienceSkills.map((skill, index) => (
                <div key={index} className="industrial-item">
                  <div className="industrial-header">
                    <h4 className="industrial-name">{skill.name}</h4>
                    <div className="industrial-level">
                      <div 
                        className="level-indicator"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="industrial-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="certifications">
            <h3 className="section-subtitle">
              <span className="subtitle-icon">🏆</span>
              Certificaciones y Formación
            </h3>
            
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <div className="cert-content">
                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <div className="cert-meta">
                      <span className="cert-year">{cert.year}</span>
                      <span className={`cert-status ${cert.status === 'Completado' ? 'completed' : 'in-progress'}`}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <div className="summary-icon">🎯</div>
            <div className="summary-content">
              <h4>Enfoque Integral</h4>
              <p>
                Combino habilidades técnicas en desarrollo de software con conocimientos 
                de la industria (aprendo con webinars y cursos en línea) para crear soluciones completas y escalables.
              </p>
            </div>
          </div>
          
          <div className="summary-card">
            <div className="summary-icon">📈</div>
            <div className="summary-content">
              <h4>Mejora Continua</h4>
              <p>
                Constantemente actualizo mis conocimientos en nuevas tecnologías y 
                metodologías para mantenerme a la vanguardia del desarrollo tecnológico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
