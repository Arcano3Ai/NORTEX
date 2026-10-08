import React, { useState } from 'react';
import { useQuote } from '../../context/QuoteContext';
import { MessageSquare, Send, CheckCircle2, FileSpreadsheet } from 'lucide-react';

export const QuoteSection: React.FC = () => {
  const { items } = useQuote();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    whatsapp: '',
    email: '',
    neededProducts: '',
    quantity: '1',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Enlace dinámico de WhatsApp que incluye los campos del formulario
  const getWhatsAppSubmissionLink = () => {
    const phonePlaceholder = '528100000000';
    let text = `*SOLICITUD DE COTIZACIÓN NORTEX*\n`;
    text += `*Nombre:* ${formData.name || 'Cliente'}\n`;
    if (formData.company) text += `*Empresa:* ${formData.company}\n`;
    if (formData.phone) text += `*Teléfono:* ${formData.phone}\n`;
    if (formData.email) text += `*Correo:* ${formData.email}\n`;
    if (formData.neededProducts) text += `*Herramientas requeridas:* ${formData.neededProducts}\n`;
    if (formData.quantity) text += `*Cantidad estimada:* ${formData.quantity}\n`;
    if (formData.message) text += `*Detalles:* ${formData.message}\n`;

    if (items.length > 0) {
      text += `\n*Ítems agregados desde el catálogo:*\n`;
      items.forEach((it, i) => {
        text += `${i + 1}. [${it.product.sku}] ${it.product.name} (Cant: ${it.quantity})\n`;
      });
    }

    return `https://wa.me/${phonePlaceholder}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="cotizacion" style={{ padding: '84px 0', backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        
        <div
          style={{
            maxWidth: '1040px',
            margin: '0 auto',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          {/* Header Banner */}
          <div
            style={{
              padding: '36px 36px 28px',
              borderBottom: '1px solid var(--border-subtle)',
              background: 'linear-gradient(135deg, #161B20 0%, #1F2833 100%)',
              textAlign: 'center'
            }}
          >
            <div className="subtitle" style={{ justifyContent: 'center', color: 'var(--color-accent)', fontFamily: 'var(--font-tech)', fontSize: '0.92rem', fontWeight: 700, letterSpacing: '0.12em', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <FileSpreadsheet size={16} />
              <span>ATENCIÓN ESPECIALIZADA PARA EMPRESAS Y TALLERES</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)', marginBottom: '8px' }}>
              ¿NECESITAS VARIAS HERRAMIENTAS?
            </h2>

            <p style={{ fontSize: '1.2rem', color: 'var(--color-accent)', fontWeight: 600, fontFamily: 'var(--font-tech)' }}>
              SOLICITA UNA COTIZACIÓN PERSONALIZADA.
            </p>
          </div>

          <div style={{ padding: '36px' }}>
            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '48px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <CheckCircle2 size={64} color="var(--color-whatsapp)" />
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>
                  SOLICITUD REGISTRADA EXITOSAMENTE
                </h3>
                <p style={{ maxWidth: '520px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Un asesor técnico comercial de NORTEX revisará los requerimientos de tu empresa y se pondrá en contacto a la brevedad.
                </p>
                <div style={{ display: 'flex', gap: '14px', marginTop: '16px' }}>
                  <a
                    href={getWhatsAppSubmissionLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <MessageSquare size={18} />
                    Agilizar por WhatsApp
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-secondary"
                  >
                    Nueva cotización
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                
                {/* Alerta de productos precargados si hay en el carrito */}
                {items.length > 0 && (
                  <div
                    style={{
                      marginBottom: '28px',
                      padding: '14px 18px',
                      backgroundColor: 'rgba(255, 85, 0, 0.1)',
                      border: '1px solid var(--border-accent)',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '10px'
                    }}
                  >
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                      Tienes <strong>{items.length} herramientas</strong> seleccionadas del catálogo listas para ser cotizadas.
                    </div>
                    <span className="badge-tech">Se anexarán a tu solicitud</span>
                  </div>
                )}

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px',
                    marginBottom: '20px'
                  }}
                >
                  {/* Nombre */}
                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-tech)' }}>
                      NOMBRE COMPLETO *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Ej. Ing. Roberto Garza"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-industrial"
                    />
                  </div>

                  {/* Empresa */}
                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-tech)' }}>
                      EMPRESA / CONSTRUCTORA / TALLER
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Ej. Estructuras del Norte S.A."
                      value={formData.company}
                      onChange={handleChange}
                      className="input-industrial"
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-tech)' }}>
                      TELÉFONO DE CONTACTO *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="81 1234 5678"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-industrial"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-tech)' }}>
                      NÚMERO DE WHATSAPP
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="81 1234 5678"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="input-industrial"
                    />
                  </div>

                  {/* Correo */}
                  <div style={{ gridColumn: 'span 1' }}>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-tech)' }}>
                      CORREO ELECTRÓNICO *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="compras@tuempresa.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-industrial"
                    />
                  </div>

                  {/* Cantidad */}
                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-tech)' }}>
                      CANTIDAD ESTIMADA DE PIEZAS
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      placeholder="Ej. 5 rotomartillos, 20 discos..."
                      value={formData.quantity}
                      onChange={handleChange}
                      className="input-industrial"
                    />
                  </div>
                </div>

                {/* Productos que necesita */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-tech)' }}>
                    PRODUCTOS O MODELOS QUE NECESITA *
                  </label>
                  <input
                    type="text"
                    name="neededProducts"
                    required
                    placeholder="Describe los modelos, marcas o requerimientos técnicos de la herramienta..."
                    value={formData.neededProducts}
                    onChange={handleChange}
                    className="input-industrial"
                  />
                </div>

                {/* Mensaje */}
                <div style={{ marginBottom: '28px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-tech)' }}>
                    MENSAJE O ESPECIFICACIONES ADICIONALES
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Incluye detalles del proyecto, fecha estimada de suministro o si requieres entrega en algún parque industrial específico de Monterrey o resto de la República..."
                    value={formData.message}
                    onChange={handleChange}
                    className="input-industrial"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                {/* Botones de Envío */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '16px'
                  }}
                >
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ flex: 1, minWidth: '220px' }}
                  >
                    <Send size={18} />
                    <span>Solicitar cotización</span>
                  </button>

                  <a
                    href={getWhatsAppSubmissionLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-lg"
                    style={{ flex: 1, minWidth: '220px' }}
                  >
                    <MessageSquare size={20} />
                    <span>Enviar por WhatsApp</span>
                  </a>
                </div>

                <div style={{ marginTop: '16px', fontSize: '0.78rem', color: 'var(--text-dim)', textAlign: 'center' }}>
                  Tus datos están protegidos conforme a las normativas de privacidad industrial. No compartimos información con terceros.
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
