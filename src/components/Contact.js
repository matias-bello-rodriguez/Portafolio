import React, { useState, useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
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

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_2asd39o',
      'template_2mvtgz3',
      form.current,
      'K-zu5afYStOWIbtIc'
    )
    .then((result) => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({
          user_name: '',
          user_email: '',
          company: '',
          subject: '',
          message: ''
        });

        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
    }, (error) => {
        setIsSubmitting(false);
        alert('Error al enviar el mensaje');
    });
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
      title: "GitHub",
      value: "github.com/matias-bello-rodriguez",
      icon: "🐙",
      link: "https://github.com/matias-bello-rodriguez"
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
      title: "Ciencia de Datos",
      description: "Análisis y visualización de datos para la toma de decisiones informadas",
      icon: "🏗️"
    },
    {
      title: "Desarrollo Mobile",
      description: "Aplicaciones móviles nativas e híbridas para iOS y Android",
      icon: "�"
    },
    {
      title: "Consultoría Técnica",
      description: "Asesoría en proyectos de software, macros y soluciones simples",
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
            ¿Listo para diseñar una
            <span className="highlight"> solución?</span>
          </h2>
          <p className="contact-subtitle">
            Estoy siempre interesado en nuevos proyectos, 
            oportunidades de desarrollo y colaboraciones.
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
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              <h3 className="form-title">Envíame un mensaje</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={formData.user_name}
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
                    name="user_email"
                    value={formData.user_email}
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
                    <option value="data-analytics">Data Analytics</option>
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
            <a href="tel:+56942472330" className="footer-cta">
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
