import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-grid"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="hero-greeting-text">Hola, soy</span>
            </div>
            
            <h1 className="hero-title">
              <span className="hero-name">MATÍAS Bello</span>
              <span className="hero-role">Ingeniero en Informática</span>
            </h1>
            
            <div className="hero-description">
              <p className="hero-subtitle">
                Programador pragmático próximo a ser ingeniero en informática. 
                Especializado en desarrollo de aplicaciones web y soluciones tecnológicas innovadoras.
              </p>
              
              <div className="hero-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">💻</span>
                  <span>Desarrollo Full-Stack</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">�</span>
                  <span>Arquitectura de Software</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">�</span>
                  <span>Aplicaciones Móviles</span>
                </div>
              </div>
            </div>
            
            <div className="hero-actions">
              <a href="#proyectos" className="btn btn-primary">
                Ver Proyectos
              </a>
              <a href="#contacto" className="btn btn-secondary">
                Contactar
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-code-block">
              <div className="code-header">
                <div className="code-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="code-title">ingeniero_informatico.py</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="line-number">1</span>
                  <span className="code-text">
                    <span className="keyword">class</span> 
                    <span className="class-name"> IngenieroInformatico</span>:
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">2</span>
                  <span className="code-text">
                    <span className="indent">    </span>
                    <span className="keyword">def</span>
                    <span className="function"> __init__</span>
                    <span className="params">(self)</span>:
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">3</span>
                  <span className="code-text">
                    <span className="indent">        </span>
                    <span className="property">self.nombre</span> = 
                    <span className="string">"Matías Bello"</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">4</span>
                  <span className="code-text">
                    <span className="indent">        </span>
                    <span className="property">self.enfoque</span> = 
                    <span className="string">"Soluciones Tecnológicas"</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">5</span>
                  <span className="code-text">
                    <span className="indent">        </span>
                    <span className="property">self.stack</span> = [
                    <span className="string">"Python"</span>, 
                    <span className="string">"React"</span>, 
                    <span className="string">"Node.js"</span>]
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">6</span>
                  <span className="code-text">
                    <span className="indent">        </span>
                    <span className="property">self.objetivo</span> = 
                    <span className="string">"Innovar con código"</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">Explorar</span>
      </div>
    </section>
  );
};

export default Hero;
