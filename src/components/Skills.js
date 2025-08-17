import React, { useState, useMemo } from 'react';
import './Skills.css';

const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [skillSearch, setSkillSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null); // categoría activa para el modal
  const technicalSkills = [
    {
      category: "Frontend",
      skills: [
        { name: "Angular", level: 90, icon: "🅰️" },
        { name: "React", level: 75, icon: "⚛️" },
        { name: "JavaScript", level: 75, icon: "🧠" },
        { name: "TypeScript", level: 50, icon: "📘" } // actualizado
      ]
    },
    {
      category: "Ciencia de Datos",
      skills: [
        { name: "Python/Pandas", level: 85, icon: "🐼" },
        { name: "OCR/Tesseract", level: 70, icon: "👁️" },
        { name: "Excel/VBA", level: 70, icon: "🟩" },
        { name: "Locker/Power BI", level: 60, icon: "📈" },
        { name: "PL/SQL", level: 90, icon: "🧮" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Python", level: 75, icon: "🐍" },
        { name: "Django", level: 65, icon: "🎸" },
        { name: "PHP", level: 65, icon: "🐘" },
        { name: "Java", level: 20, icon: "☕" },
        { name: "Spring Boot", level: 22, icon: "🍃" }
      ]
    },
    {
      category: "Bases de Datos",
      skills: [
        { name: "PostgreSQL", level: 90, icon: "🐘" },
        { name: "MySQL", level: 85, icon: "🐬💿" }, // actualizado
        { name: "Firebase", level: 75, icon: "🔥" },
        { name: "MongoDB", level: 60, icon: "🍃" }
      ]
    },
    {
      category: "App Mobile",
      skills: [
        { name: "React Native", level: 55, icon: "📱" },
        { name: "Ionic/Capacitor", level: 70, icon: "⚡" },
        { name: "Android Studio", level: 37, icon: "🤖" },
        { name: "Xcode", level: 15, icon: "🍏" }
      ]
    },
    {
      category: "DevOps & Cloud",
      skills: [
        { name: "Google Cloud (GCP)", level: 50, icon: "☁️" },
        { name: "Render", level: 15, icon: "🚀" },
        { name: "AWS", level: 10, icon: "🟧" },
        { name: "GitHub Actions", level: 35, icon: "🤖" }
      ]
    },
    {
      category: "Ingeniería & Planificación",
      skills: [
        { name: "BPMN 2.0 / LucidChart", level: 90, icon: "🧩" },
        { name: "Microsoft Project", level: 70, icon: "📊" },
        { name: "SCRUM", level: 40, icon: "🌀" },
        { name: "StarUML", level: 30, icon: "🗺️" }
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

  // Construir lista completa de habilidades técnicas (flatten)
  const flatTechnicalSkills = useMemo(() => {
    return technicalSkills.flatMap(cat => 
      cat.skills.map(s => ({ ...s, category: cat.category }))
    );
  }, [technicalSkills]);

  const filteredFlatSkills = flatTechnicalSkills.filter(s => 
    s.name.toLowerCase().includes(skillSearch.toLowerCase()) ||
    s.category.toLowerCase().includes(skillSearch.toLowerCase())
  );

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
                <div
                  key={categoryIndex}
                  className="skill-category clickable"
                  role="button"
                  tabIndex={0}
                  onClick={() => { setSelectedCategory(category.category); setShowAllSkills(true); setSkillSearch(''); }}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedCategory(category.category); setShowAllSkills(true); setSkillSearch(''); } }}
                  aria-label={`Ver todas las habilidades de ${category.category}`}
                >
                  <h4 className="category-title">{category.category}</h4>
                  <div className="category-skills">
                    {category.skills.slice(0,4).map((skill, skillIndex) => (
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
                    {category.skills.length > 4 && (
                      <div className="more-skills-hint" aria-hidden="true">+{category.skills.length - 4} más…</div>
                    )}
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

      {showAllSkills && (
        <div className="skills-modal" role="dialog" aria-modal="true" aria-labelledby="allSkillsTitle">
          <div className="skills-modal-backdrop" onClick={() => setShowAllSkills(false)} />
          <div className="skills-modal-content">
            <div className="skills-modal-header">
              <h3 id="allSkillsTitle">{selectedCategory ? `Habilidades: ${selectedCategory}` : 'Todas las Habilidades Técnicas'}</h3>
              <div className="skills-modal-actions">
                {selectedCategory && (
                  <button
                    type="button"
                    className="show-all-btn"
                    onClick={() => { setSelectedCategory(null); setSkillSearch(''); }}
                  >
                    Ver todas
                  </button>
                )}
                <button className="skills-modal-close" onClick={() => { setShowAllSkills(false); setSelectedCategory(null); }} aria-label="Cerrar">×</button>
              </div>
            </div>
            <div className="skills-modal-toolbar">
              <input
                type="text"
                className="skills-search"
                placeholder="Buscar por nombre o categoría..."
                value={skillSearch}
                onChange={e => setSkillSearch(e.target.value)}
              />
              <span className="skills-count">
                {selectedCategory ? `${filteredFlatSkills.filter(s => s.category === selectedCategory).length}` : filteredFlatSkills.length}
                {' / '}
                {selectedCategory ? flatTechnicalSkills.filter(s => s.category === selectedCategory).length : flatTechnicalSkills.length}
              </span>
            </div>
            <div className="all-skills-list">
              {filteredFlatSkills
                .filter(s => !selectedCategory || s.category === selectedCategory)
                .sort((a,b) => a.name.localeCompare(b.name))
                .map((skill, idx) => (
                <div key={idx} className="all-skill-item">
                  <div className="all-skill-main">
                    <span className="all-skill-icon">{skill.icon}</span>
                    <span className="all-skill-name">{skill.name}</span>
                    <span className="all-skill-cat">{skill.category}</span>
                  </div>
                  <div className="all-skill-bar">
                    <div className="all-skill-progress" style={{width: `${skill.level}%`}} />
                    <span className="all-skill-level">{skill.level}%</span>
                  </div>
                </div>
              ))}
              {filteredFlatSkills.filter(s => !selectedCategory || s.category === selectedCategory).length === 0 && (
                <div className="no-results">Sin resultados para "{skillSearch}"</div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
