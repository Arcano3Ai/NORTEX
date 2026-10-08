import React from 'react';
import { ArrowRight, FileText, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        padding: '70px 0 90px',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-medium)',
        background: 'linear-gradient(180deg, #0C0F12 0%, #12171D 100%)'
      }}
    >
      {/* Fondo con imagen y gradientes oscuros industriales */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: 'url(/images/hero-industrial.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.28,
          zIndex: 1,
          filter: 'contrast(1.15) saturate(0.9)'
        }}
      />

      {/* Gradientes para contraste perfecto de texto */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, #0C0F12 0%, rgba(12, 15, 18, 0.94) 45%, rgba(12, 15, 18, 0.6) 100%)',
          zIndex: 2
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div style={{ maxWidth: '820px' }}>
          
          {/* Badge de Identidad Regional e Industrial */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '22px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                background: 'rgba(255, 85, 0, 0.15)',
                border: '1px solid var(--border-accent)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-tech)',
                fontSize: '0.88rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              <MapPin size={15} />
              IDENTIDAD NORTEÑA • MONTERREY, N.L.
            </span>

            <span
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-muted)',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-tech)'
              }}
              className="hero-badge-sub"
            >
              <ShieldCheck size={14} color="var(--color-whatsapp)" />
              SUMINISTRO INDUSTRIAL Y CONSTRUCCIÓN
            </span>
          </div>

          {/* TÍTULO PRINCIPAL EXACTO */}
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 6.2vw, 5.2rem)',
              lineHeight: 1.02,
              letterSpacing: '0.02em',
              marginBottom: '20px',
              textTransform: 'uppercase'
            }}
          >
            <span style={{ color: '#FFFFFF', display: 'block' }}>NORTEX</span>
            <span
              style={{
                color: 'var(--color-accent)',
                display: 'block',
                background: 'linear-gradient(90deg, #FF5500 0%, #FFA066 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Herramientas en Monterrey
            </span>
          </h1>

          {/* TEXTO SECUNDARIO EXACTO */}
          <p
            style={{
              fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
              lineHeight: 1.45,
              color: 'var(--text-secondary)',
              marginBottom: '36px',
              maxWidth: '680px',
              fontWeight: 400
            }}
          >
            Herramientas profesionales y soluciones para construcción, industria y mantenimiento.
          </p>

          {/* CTAs PRINCIPAL Y SECUNDARIO */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '44px' }}>
            <button
              onClick={() => onNavigate('/herramientas')}
              className="btn btn-primary btn-lg"
              id="hero-ver-herramientas-btn"
            >
              <span>Ver herramientas</span>
              <ArrowRight size={20} />
            </button>

            <button
              onClick={() => onNavigate('/cotizacion')}
              className="btn btn-secondary btn-lg"
              id="hero-solicitar-cotizacion-btn"
            >
              <FileText size={20} color="var(--color-accent)" />
              <span>Solicitar cotización</span>
            </button>
          </div>

          {/* Pilares rápidos de confianza */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '28px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={18} color="var(--color-accent)" />
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Uso rudo para profesionales
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={18} color="var(--color-accent)" />
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Cotizaciones para empresas
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={18} color="var(--color-accent)" />
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Cobertura en todo México
              </span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hero-badge-sub { display: inline-flex !important; }
        }
      `}</style>
    </section>
  );
};
