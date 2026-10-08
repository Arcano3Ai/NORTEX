import React, { useState } from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SEOHead } from '../components/common/SEOHead';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { generateWhatsAppLink } = useQuote();
  const [submitted, setSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'Cotización / Información general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '80px' }}>
      <SEOHead
        title="Contacto y Atención a Clientes | NORTEX Herramientas en Monterrey"
        description="Ponte en contacto con NORTEX en Monterrey, N.L. Atención por WhatsApp, correo y cotizaciones para empresas, contratistas e industria."
        canonicalPath="/contacto"
      />

      {/* Breadcrumb Header */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <Breadcrumb
            items={[{ label: 'Contacto' }]}
            onNavigate={onNavigate}
          />
        </div>
      </div>

      <div className="container" style={{ paddingTop: '50px' }}>
        
        <div className="section-header">
          <span className="subtitle">CANALES DE ATENCIÓN DIRECTA</span>
          <h1>CONTACTO NORTEX MONTERREY</h1>
          <p className="lead">
            Estamos a tu disposición para atender requerimientos de suministro, dudas técnicas sobre herramientas o cotizaciones para proyectos en Nuevo León y toda la República.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}
        >
          {/* Columna Izquierda: Información de Contacto con Placeholders */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div
              className="card-industrial"
              style={{ backgroundColor: 'var(--bg-secondary)', padding: '28px' }}
            >
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '20px', borderLeft: '3px solid var(--color-accent)', paddingLeft: '10px' }}>
                DATOS DE ATENCIÓN
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <Phone size={22} color="var(--color-whatsapp)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-tech)' }}>
                      WHATSAPP COMERCIAL DIRECTO
                    </div>
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}
                    >
                      [WHATSAPP]
                    </a>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Atención rápida y envío de catálogos</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <Mail size={22} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-tech)' }}>
                      CORREO ELECTRÓNICO
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      [CORREO]
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Cotizaciones formales y órdenes de compra</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <MapPin size={22} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-tech)' }}>
                      UBICACIÓN EN MONTERREY
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      Monterrey y Área Metropolitana, N.L.
                    </div>
                    <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>[DIRECCIÓN]</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <Clock size={22} color="var(--color-amber)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-tech)' }}>
                      HORARIOS DE SERVICIO
                    </div>
                    <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      [HORARIOS: Lunes a Viernes 8:30 a 18:00 hrs | Sábados 9:00 a 14:00 hrs]
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <MessageSquare size={18} />
                  <span>Iniciar Chat en WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Formulario de Mensaje */}
          <div>
            <div
              className="card-industrial"
              style={{ backgroundColor: 'var(--bg-secondary)', padding: '32px' }}
            >
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '20px' }}>
                ENVÍANOS UN MENSAJE
              </h3>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                  <CheckCircle2 size={48} color="var(--color-whatsapp)" style={{ marginBottom: '16px' }} />
                  <h4 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                    MENSAJE ENVIADO
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '20px' }}>
                    Hemos recibido tus datos correctamente. Nuestro equipo se comunicará contigo vía telefónica o correo electrónico.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-secondary btn-sm"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '6px', fontFamily: 'var(--font-tech)' }}>
                      NOMBRE O CONTACTO *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      className="input-industrial"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '6px', fontFamily: 'var(--font-tech)' }}>
                        TELÉFONO *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="81 1234 5678"
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        className="input-industrial"
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '6px', fontFamily: 'var(--font-tech)' }}>
                        EMPRESA (OPCIONAL)
                      </label>
                      <input
                        type="text"
                        placeholder="Nombre de empresa"
                        value={contactData.company}
                        onChange={(e) => setContactData({ ...contactData, company: e.target.value })}
                        className="input-industrial"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '6px', fontFamily: 'var(--font-tech)' }}>
                      CORREO ELECTRÓNICO *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="correo@ejemplo.com"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      className="input-industrial"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '6px', fontFamily: 'var(--font-tech)' }}>
                      MENSAJE O CONSULTA *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="¿En qué podemos ayudarte?"
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      className="input-industrial"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ marginTop: '8px' }}
                  >
                    <Send size={18} />
                    <span>Enviar consulta</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
