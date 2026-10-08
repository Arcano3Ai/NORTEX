import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);

  // Variable de configuración clara para sustitución de número real
  const WHATSAPP_PHONE = '528100000000'; // Placeholder: Reemplazar con teléfono comercial (ej: 5281XXXXXXXX)
  const PRESET_MESSAGE = 'Hola, NORTEX. Me interesa cotizar herramientas.';
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(PRESET_MESSAGE)}`;

  return (
    <div
      className="floating-whatsapp-container"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '8px'
      }}
    >
      {/* Tooltip comercial */}
      {isTooltipOpen && (
        <div
          className="floating-whatsapp-tooltip"
          style={{
            backgroundColor: '#161B20',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-md)',
            padding: '10px 14px',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            maxWidth: '260px',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.3 }}>
            <strong style={{ color: 'var(--color-whatsapp)', display: 'block', fontFamily: 'var(--font-tech)' }}>
              ¿COTIZACIÓN RÁPIDA?
            </strong>
            Escríbenos en directo por WhatsApp
          </div>
          <button
            onClick={() => setIsTooltipOpen(false)}
            style={{ color: 'var(--text-dim)', padding: '2px' }}
            aria-label="Cerrar sugerencia"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Botón flotante circular con icono */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cotizar por WhatsApp con NORTEX"
        className="animate-pulse-glow"
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.5)',
          transition: 'transform 0.2s ease',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <MessageSquare size={28} />
      </a>
    </div>
  );
};
