import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Definir las imágenes para cada proyecto
  const projectImages = {
  1: ['images/sif/image.png', 'images/sif/1.png', 'images/sif/2.png', 'images/sif/3.png', 'images/sif/4.png', 'images/sif/5.png', 'images/sif/6.png', 'images/sif/7.png'],
  2: ['images/chat-tms/image.png', 'images/chat-tms/1.png', 'images/chat-tms/2.png'],
  3: ['images/pdf-python-excel/image.png'],
  4: ['images/tellevo/image.png', 'images/tellevo/1.png', 'images/tellevo/2.png', 'images/tellevo/3.png'],
  5: ['images/big-data/image.png'],
  8: ['images/asiste/image.png', 'images/asiste/1.png'],
  9: ['images/ml-dtamin/Captura de pantalla 2025-08-12 215046.png', 'images/ml-dtamin/Captura de pantalla 2025-08-12 215059.png'],
    // Proyectos sin imágenes (se mostrarán con logo mono)
    6: ['🐒'], // API REST
    7: ['🐒']  // Sistema Control
  };

  const projects = [
    // Proyectos con imágenes (primero)
    {
      id: 1,
      title: "Sistema Integral de Gestión de Flota",
      description: "Proyecto final de carrera de ingeniería en informática. Herramienta avanzada para gestión de flota con seguimiento GPS en tiempo real, reducción de costos operativos en gasolina y mantenciones preventivas. Diseñado en base a necesidades reales de empresas logísticas de Penco.",
      technologies: ["TypeScript", "HTML", "JavaScript", "SCSS", "Flask", "MySQL", "Leaflet"],
      category: "Full-Stack",
  image: "images/sif/image.png",
      features: [
        "Módulo de registro de combustible",
        "Módulo de mantenimiento y creación de OT",
        "Módulo de registro de siniestros",
        "Dashboard con 8 KPIs relevantes",
        "Simulación de rutas con Leaflet",
        "Integración GPS para seguimiento en tiempo real"
      ],
      github: "https://github.com/matias-bello-rodriguez/SISTEMA-INTEGRAL-FLOTA-PROYECTO-FINAL",
      demo: "#",
      status: "Completado"
    },
    {
      id: 2,
      title: "TransporteApp - TMS con Chatbot 🚚🤖",
      description: "MVP de gestor de transporte con panel de control, formularios, reportes y chatbot interactivo escalable con IA para ser parte de un TMS global. Construido con PHP + MySQL + Bootstrap para XAMPP en Windows.",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "Chart.js", "Leaflet", "QRCode.js"],
      category: "Web App",
  image: "images/chat-tms/image.png",
      features: [
        "Dashboard con métricas y gráficos (Chart.js)",
        "Gestión completa de viajes con mapa (Leaflet)",
        "Gestión de vehículos y conductores (CRUD)",
        "Documentos con vencimientos y alertas",
        "Reportes interactivos de eficiencia y costos",
        "Chatbot flotante con acciones rápidas",
        "Generador de códigos QR integrado",
        "Consultas preparadas PDO (seguro y mantenible)"
      ],
      github: "https://github.com/matias-bello-rodriguez/Chat_TMS",
      demo: "#",
      status: "Completado"
    },
    {
      id: 3,
      title: "Extracción de datos con Python e interfaz Angular 📊➡️📄",
      description: "Sistema de conversión Excel a PDF con integración de bases de datos. Plataforma que transforma archivos Excel en documentos PDF profesionales, automatiza procesos de datos y gestiona instancias en bases de datos mediante interfaz web Angular.",
      technologies: ["Angular", "TypeScript", "Python", "Pandas", "OpenPyXL", "ReportLab", "Flask", "SQLAlchemy"],
      category: "Full-Stack",
  image: "images/pdf-python-excel/image.png",
      features: [
        "Conversión avanzada Excel a PDF manteniendo formato",
        "Procesamiento de datos con Pandas y OpenPyXL",
        "Generación profesional de PDFs con ReportLab",
        "Interfaz drag & drop para archivos (ngx-dropzone)",
        "Conexión con múltiples bases de datos (SQLAlchemy)",
        "Reportes automatizados programados",
        "Panel Angular Material con RxJS"
      ],
      github: "https://github.com/matias-bello-rodriguez/Excel-PDF-PythonFunctions-Angular",
      demo: "#",
      status: "Completado"
    },
    {
      id: 4,
      title: "¿Te Llevo? App Universitaria 🚗✨",
      description: "Plataforma móvil que conecta conductores y pasajeros de DUOC UC de forma segura y eficiente. Los usuarios con vehículos pueden prestar servicio mediante compensación, mientras que estudiantes sin movilización pueden adherirse a viajes existentes.",
      technologies: ["Ionic", "TypeScript", "Angular", "Firebase", "Google Maps", "Capacitor", "Express.js"],
      category: "Mobile",
  image: "images/tellevo/image.png",
      features: [
        "Creación e ingreso de viajes por conductores",
        "Adherirse a viajes para pasajeros",
        "Geolocalización en tiempo real",
        "Sistema de compensaciones integrado",
        "Integración con Google Maps SDK",
        "APK compilada para Android disponible",
        "Firebase para autenticación y almacenamiento"
      ],
      github: "https://github.com/matias-bello-rodriguez/TeLlevoAppUC",
      demo: "#",
      status: "Completado"
    },
    {
      id: 5,
      title: "Red Metropolitana - BigData GCP ETL 📊",
      description: "Sistema de análisis de transporte público con arquitecturas Batch y Real-Time. Procesamiento eficiente de datos históricos del transporte público para identificar patrones y optimizar rutas mediante Google Cloud Platform.",
      technologies: ["Google Cloud", "Python", "BigQuery", "Dataprep", "Cloud Functions", "Pub/Sub", "Cloud Scheduler"],
      category: "Data Science",
  image: "images/big-data/image.png",
      features: [
        "Procesamiento ETL de datos GTFS",
        "Arquitectura Batch para análisis histórico",
        "Arquitectura Real-Time para monitoreo",
        "15,682 paradas analizadas",
        "342 rutas procesadas",
        "KPIs en tiempo real (<5min latencia)",
        "Integración con BigQuery y Cloud Functions",
        "Automatización con Cloud Scheduler"
      ],
      github: "https://github.com/matias-bello-rodriguez/RED-METROPOLITANA-BIGDATA-GCP-ETL",
      demo: "#",
      status: "Completado"
    },
    {
      id: 8,
      title: "AsisteApp - Control de Presencia 📝💡",
      description: "Solución integral que transforma el control de presencia en una experiencia intuitiva. Desarrollada con Ionic-Angular para registro inteligente con geolocalización precisa y dashboard ejecutivo con métricas en tiempo real.",
      technologies: ["Ionic", "Angular", "TypeScript", "Node.js", "Express", "Firebase", "Capacitor"],
      category: "Mobile",
  image: "images/asiste/image.png",
      features: [
        "Registro inteligente con geolocalización precisa",
        "Dashboard ejecutivo con métricas en tiempo real",
        "Visualización interactiva de datos",
        "Multiplataforma (web y móvil)",
        "Sincronización en la nube con Firebase",
        "Personalización adaptable a cualquier organización",
        "Seguridad enterprise con encriptación AES-256",
        "Compilación nativa Android e iOS"
      ],
      github: "https://github.com/matias-bello-rodriguez/AsisteApp",
      demo: "#",
      status: "Completado"
    },
    {
      id: 9,
      title: "AuWeather - ML DataMining 🐨🌦️",
      description: "Análisis de datos meteorológicos de Australia para extraer información relevante, visualizar tendencias y construir modelos predictivos. Identifica factores clave que influyen en el clima con aplicación empresarial real para Aerostáticos Aventura.",
      technologies: ["Python", "XGBoost", "Random Forest", "Scikit-learn", "Pandas", "GridSearch", "Data Mining"],
      category: "Data Science",
  image: "images/ml-dtamin/Captura de pantalla 2025-08-12 215046.png",
      features: [
        "Análisis predictivo del clima australiano",
        "4 modelos ML: XGBoost, Random Forest, SVM, Regresión Logística",
        "XGBoost como mejor modelo (87% accuracy, 92% AUC-ROC)",
        "Optimización de hiperparámetros con GridSearch",
        "KPIs: Accuracy, Recall, F1-Score, AUC-ROC",
        "Impacto empresarial: $96M CLP ahorro anual",
        "ROI 225% en primer año",
        "Sistema de alerta temprana automatizado"
      ],
      github: "https://github.com/matias-bello-rodriguez/AuWeather-ML-DataMining",
      demo: "#",
      status: "Completado"
    },
    // Proyectos en proceso (sin imágenes, al final)
    {
      id: 6,
      title: "API REST Logística 🐒",
      description: "API RESTful para gestión logística con autenticación, documentación automática y arquitectura escalable.",
      technologies: ["Node.js", "Express", "JWT", "Swagger", "Docker"],
      category: "Backend",
      image: "🐒",
      features: [
        "Autenticación JWT segura",
        "Documentación OpenAPI/Swagger",
        "Arquitectura de microservicios",
        "Containerización con Docker"
      ],
      github: "https://github.com/matias-bello-rodriguez",
      demo: "#",
      status: "En proceso"
    },
    {
      id: 7,
      title: "Sistema de Control de Procesos 🐒",
      description: "Plataforma para monitoreo y control de procesos logísticos con dashboard interactivo y análisis de KPIs.",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      category: "Data Science",
      image: "🐒",
      features: [
        "Dashboard interactivo con KPIs",
        "Monitoreo en tiempo real",
        "Análisis predictivo",
        "Exportación de reportes"
      ],
      github: "https://github.com/matias-bello-rodriguez",
      demo: "#",
      status: "En proceso"
    }
  ];

  const categories = ["Todos", "Full-Stack", "Backend", "Data Science", "Mobile", "Web App"];
  const [activeCategory, setActiveCategory] = React.useState("Todos");
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  // Funciones para el carrusel
  const openCarousel = (projectId) => {
    // Solo abrir carrusel para proyectos con imágenes reales
    if (projectImages[projectId] && projectImages[projectId][0] !== '🐒') {
      setSelectedProject(projectId);
      setCurrentImageIndex(0);
    }
  };

  const closeCarousel = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const images = projectImages[selectedProject];
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = projectImages[selectedProject];
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  React.useEffect(() => {
    if (activeCategory === "Todos") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section id="proyectos" className="projects">
      <div className="container">
        <div className="projects-header">
          <div className="section-tag">
            <span className="section-number">03</span>
            <span className="section-title">Proyectos</span>
          </div>
          <h2 className="projects-title">
            Soluciones tecnológicas y 
            <span className="highlight"> desarrollo de software</span>
          </h2>
          <p className="projects-subtitle">
            Una selección de proyectos que combinan ingeniería en informática 
            con tecnologías modernas para resolver desafíos tecnológicos complejos.
          </p>
        </div>

        <div className="projects-filter">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="project-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="project-image" onClick={() => project.image !== '🐒' && openCarousel(project.id)} style={{cursor: project.image !== '🐒' ? 'pointer' : 'default'}}>
                {project.image === '🐒' ? (
                  <div className="project-placeholder">
                    <div className="monkey-logo">🐒</div>
                    <span className="placeholder-text">En proceso</span>
                  </div>
                ) : (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      onError={(e) => {
                        e.target.src = "/api/placeholder/400/250";
                      }}
                    />
                    <div className="image-click-hint">
                      <span>🖼️ Ver galería</span>
                    </div>
                  </>
                )}
                <div className="project-image-placeholder">
                  <div className="image-overlay">
                    <span className="project-category">{project.category}</span>
                    <span className={`project-status ${project.status === 'Completado' ? 'completed' : project.status === 'En proceso' ? 'in-process' : 'in-progress'}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4 className="features-title">Características principales:</h4>
                  <ul className="features-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} className="project-link github-link">
                    <span className="link-icon">📱</span>
                    Código
                  </a>
                  <a href={project.demo} className="project-link demo-link">
                    <span className="link-icon">🚀</span>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <div className="cta-content">
            <h3 className="cta-title">¿Tienes un proyecto en mente?</h3>
            <p className="cta-description">
              Estoy siempre interesado en nuevos desafíos tecnológicos y 
              oportunidades de desarrollo. ¡Hablemos!
            </p>
            <a href="#contacto" className="cta-button">
              Iniciar conversación
            </a>
          </div>
        </div>
      </div>

      {/* Modal del Carrusel */}
      {selectedProject && (
        <div className="carousel-modal" onClick={closeCarousel}>
          <div className="carousel-content" onClick={(e) => e.stopPropagation()}>
            <button className="carousel-close" onClick={closeCarousel}>
              ×
            </button>
            
            <div className="carousel-container">
              <button className="carousel-btn carousel-prev" onClick={prevImage}>
                &#8249;
              </button>
              
              <div className="carousel-image-container">
                <img 
                  src={projectImages[selectedProject][currentImageIndex]} 
                  alt={`Imagen ${currentImageIndex + 1}`}
                  onError={(e) => {
                    e.target.src = "/api/placeholder/800/600";
                  }}
                  onLoad={(e) => {
                    const container = e.target.parentElement;
                    const isScrollable = e.target.naturalHeight > container.clientHeight;
                    if (isScrollable) {
                      container.setAttribute('data-scrollable', 'true');
                    } else {
                      container.removeAttribute('data-scrollable');
                    }
                  }}
                />
                <div className="scroll-hint">
                  <span>⬇️ Scroll para ver más</span>
                </div>
              </div>
              
              <button className="carousel-btn carousel-next" onClick={nextImage}>
                &#8250;
              </button>
            </div>
            
            <div className="carousel-indicators">
              {projectImages[selectedProject].map((_, index) => (
                <button 
                  key={index}
                  className={`carousel-indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
            
            <div className="carousel-info">
              <h3>{projects.find(p => p.id === selectedProject)?.title}</h3>
              <p>Imagen {currentImageIndex + 1} de {projectImages[selectedProject].length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
