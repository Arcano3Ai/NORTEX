import React from 'react';
import { Logo } from '../common/Logo';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { generateWhatsAppLink } = useQuote();

  return (
    <footer
      style={{
        backgroundColor: '#090B0D',
        borderTop: '2px solid var(--border-subtle)',
        color: 'var(--text-secondary)',
        paddingTop: '64px',
        paddingBottom: '32px',
        position: 'relative'
      }}
    >
      {/* Detalle decorativo de acento forja */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '240px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)'
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Columna 1: Marca & Misión */}
          <div>
            <div style={{ marginBottom: '18px' }}>
              <Logo size="md" />
            </div>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Comercialización y suministro de herramientas profesionales para la industria, construcción y mantenimiento en Monterrey, área metropolitana y proyectos en toda la República Mexicana.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-tech)'
              }}
            >
              <ShieldCheck size={16} color="var(--color-accent)" />
              <span style={{ color: 'var(--text-primary)' }}>SOLUCIONES DE GRADO INDUSTRIAL</span>
            </div>
          </div>

          {/* Columna 2: Empresa */}
          <div>
            <h4
              style={{
                fontSize: '1.15rem',
                marginBottom: '18px',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-tech)',
                letterSpacing: '0.08em',
                borderLeft: '3px solid var(--color-accent)',
                paddingLeft: '10px'
              }}
            >
              EMPRESA
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem' }}>
              <li>
                <button
                  onClick={() => onNavigate('/nosotros')}
                  style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contacto')}
                  style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  Contacto
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/cotizacion')}
                  style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  Cotización para Empresas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/marcas')}
                  style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  Marcas que Trabajamos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/blog')}
                  style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  Centro de Herramientas (Blog)
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Productos */}
          <div>
            <h4
              style={{
                fontSize: '1.15rem',
                marginBottom: '18px',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-tech)',
                letterSpacing: '0.08em',
                borderLeft: '3px solid var(--color-accent)',
                paddingLeft: '10px'
              }}
            >
              PRODUCTOS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem' }}>
              <li>
                <button
                  onClick={() => onNavigate('/categoria/herramientas-manuales')}
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  Herramientas manuales
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/categoria/herramientas-electricas')}
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  Herramientas eléctricas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/categoria/herramientas-industriales')}
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  Herramientas industriales
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/categoria/herramientas-construccion')}
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  Herramientas para construcción
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/categoria/equipo-seguridad')}
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  Seguridad y EPP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/herramientas')}
                  style={{ color: 'var(--color-accent)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  Ver Catálogo Completo <ArrowUpRight size={14} />
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 4: Atención & Contacto */}
          <div>
            <h4
              style={{
                fontSize: '1.15rem',
                marginBottom: '18px',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-tech)',
                letterSpacing: '0.08em',
                borderLeft: '3px solid var(--color-accent)',
                paddingLeft: '10px'
              }}
            >
              ATENCIÓN Y CONTACTO
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Phone size={18} color="var(--color-whatsapp)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.78rem', textTransform: 'uppercase', fontFamily: 'var(--font-tech)' }}>WhatsApp Comercial</div>
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-primary)', fontWeight: 600 }}
                  >
                    [WHATSAPP]
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Mail size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.78rem', textTransform: 'uppercase', fontFamily: 'var(--font-tech)' }}>Correo Electrónico</div>
                  <span style={{ color: 'var(--text-primary)' }}>[CORREO]</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.78rem', textTransform: 'uppercase', fontFamily: 'var(--font-tech)' }}>Ubicación</div>
                  <span style={{ color: 'var(--text-secondary)' }}>Monterrey y Área Metropolitana, N.L., México</span>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.78rem' }}>[DIRECCIÓN]</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Clock size={18} color="var(--color-amber)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.78rem', textTransform: 'uppercase', fontFamily: 'var(--font-tech)' }}>Horario de Atención</div>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.84rem' }}>[HORARIOS: Lun a Vie 8:30 - 18:00 | Sáb 9:00 - 14:00]</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separador inferior y avisos legales */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.84rem',
            color: 'var(--text-dim)'
          }}
        >
          <div>
            © 2026 <strong>NORTEX</strong>. Todos los derechos reservados. — Herramientas en Monterrey.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}>
              Aviso de privacidad
            </span>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}>
              Términos y condiciones
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
