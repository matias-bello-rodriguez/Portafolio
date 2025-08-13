import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      title: "Email",
      value: "ma.bellor@duocuc.cl",
      icon: "📧",
      link: "mailto:ma.bellor@duocuc.cl"
    },
    {
      title: "Teléfono",
      value: "+569 42472330",
      icon: "📱",
      link: "tel:+56942472330"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/matías-bello-rodríguez",
      icon: "💼",
      link: "https://www.linkedin.com/in/mat%C3%ADas-bello-rodr%C3%ADguez-5b798323a/"
    },
    {
      title: "Ubicación",
      value: "Concepción, Chile",
      icon: "📍",
      link: "#"
    }
  ];

  const services = [
    {
      title: "Desarrollo Web Full-Stack",
      description: "Aplicaciones web completas con React, Node.js y bases de datos modernas",
      icon: "💻"
    },
    {
      title: "Arquitectura de Software",
      description: "Diseño de sistemas escalables y microservicios para aplicaciones empresariales",
      icon: "🏗️"
    },
    {
      title: "Desarrollo Mobile",
      description: "Aplicaciones móviles nativas e híbridas para iOS y Android",
      icon: "�"
    },
    {
      title: "Consultoría Técnica",
      description: "Asesoría en proyectos de software y arquitectura de sistemas",
      icon: "🎯"
    }
  ];

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact-header">
          <div className="section-tag">
            <span className="section-number">04</span>
            <span className="section-title">Contacto</span>
          </div>
          <h2 className="contact-title">
            ¿Listo para crear algo 
            <span className="highlight"> extraordinario juntos?</span>
          </h2>
          <p className="contact-subtitle">
            Estoy siempre interesado en nuevos proyectos tecnológicos, 
            oportunidades de desarrollo y colaboraciones innovadoras.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3 className="info-title">Información de Contacto</h3>
              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index} 
                    href={info.link} 
                    className="contact-method"
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <div className="method-icon">{info.icon}</div>
                    <div className="method-content">
                      <span className="method-title">{info.title}</span>
                      <span className="method-value">{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="services-card">
              <h3 className="services-title">Servicios Ofrecidos</h3>
              <div className="services-list">
                {services.map((service, index) => (
                  <div key={index} className="service-item">
                    <div className="service-icon">{service.icon}</div>
                    <div className="service-content">
                      <h4 className="service-title">{service.title}</h4>
                      <p className="service-description">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Envíame un mensaje</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="tu.email@ejemplo.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company" className="form-label">Empresa (opcional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Asunto</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="desarrollo-web">Desarrollo Web Full-Stack</option>
                    <option value="arquitectura">Arquitectura de Software</option>
                    <option value="mobile">Desarrollo Mobile</option>
                    <option value="consultoria">Consultoría Técnica</option>
                    <option value="colaboracion">Oportunidad de Trabajo</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="6"
                  required
                  placeholder="Cuéntame sobre tu proyecto o consulta..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="submit-spinner"></span>
                    Enviando...
                  </>
                ) : (
                  <>
                    <span className="submit-icon">🚀</span>
                    Enviar mensaje
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-success">
                  <span className="success-icon">✅</span>
                  ¡Mensaje enviado correctamente! Te responderé pronto.
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="contact-footer">
          <div className="footer-content">
            <div className="footer-text">
              <h4 className="footer-title">¿Prefieres una llamada?</h4>
              <p className="footer-description">
                También puedes contactarme directamente para una conversación 
                más inmediata sobre tu proyecto.
              </p>
            </div>
            <a href="tel:+56912345678" className="footer-cta">
              <span className="cta-icon">📞</span>
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
