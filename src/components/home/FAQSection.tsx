import React, { useState } from 'react';
import { FAQS } from '../../data/faqs';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);
  const { generateWhatsAppLink } = useQuote();

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Schema.org FAQPage para SEO técnico
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
      {/* Schema FAQPage estructurado */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container">
        
        <div className="section-header text-center">
          <div className="subtitle">
            <HelpCircle size={16} />
            <span>RESOLUCIÓN DE DUDAS COMERCIALES</span>
          </div>
          <h2>PREGUNTAS FRECUENTES</h2>
          <p className="lead">
            Respuestas a las consultas habituales sobre compras, cotizaciones para empresas y cobertura de suministro en Monterrey y el país.
          </p>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: `1px solid ${isOpen ? 'var(--color-accent)' : 'var(--border-subtle)'}`,
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  transition: 'border-color var(--transition-fast)'
                }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  style={{
                    width: '100%',
                    padding: '18px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '14px',
                    textAlign: 'left',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-tech)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    letterSpacing: '0.03em'
                  }}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    color={isOpen ? 'var(--color-accent)' : 'var(--text-muted)'}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform var(--transition-normal)',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 22px 20px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.94rem',
                      lineHeight: 1.6,
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '14px'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Banner de contacto si persiste alguna duda */}
        <div
          style={{
            maxWidth: '840px',
            margin: '40px auto 0',
            padding: '20px 24px',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div>
            <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
              ¿Tienes una necesidad técnica específica para tu planta o cuadrilla?
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.84rem' }}>
              Nuestros asesores responden de inmediato vía WhatsApp.
            </div>
          </div>

          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <MessageSquare size={16} />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
