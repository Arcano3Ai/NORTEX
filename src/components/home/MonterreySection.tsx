import React from 'react';
import { MapPin, Building2, Check, ArrowRight, Truck } from 'lucide-react';

interface MonterreySectionProps {
  onNavigateToQuote: () => void;
}

export const MonterreySection: React.FC<MonterreySectionProps> = ({ onNavigateToQuote }) => {
  const municipios = [
    {
      name: 'Monterrey',
      focus: 'Centro logístico, talleres mecánicos, contratistas de remodelación y obra institucional.'
    },
    {
      name: 'Apodaca',
      focus: 'Parques industriales, plantas de manufactura de exportación y líneas de ensamble continuo.'
    },
    {
      name: 'San Nicolás de los Garza',
      focus: 'Industria pesada, acerías, talleres de maquinado, pailería y mantenimiento metalmecánico.'
    },
    {
      name: 'Santa Catarina',
      focus: 'Corredor industrial poniente, plantas automotrices y constructoras de naves industriales.'
    },
    {
      name: 'Guadalupe',
      focus: 'Talleres especializados, comercio ferretero, cuadrillas eléctricas y de climatización.'
    },
    {
      name: 'Escobedo',
      focus: 'Centros de distribución, naves de almacenaje logístico y cuadrillas de maniobra de carga.'
    },
    {
      name: 'García',
      focus: 'Desarrollos habitacionales en expansión, plantas de cemento, canteras y obra pesada.'
    },
    {
      name: 'San Pedro Garza García',
      focus: 'Desarrollo vertical de alta gama, contratistas de acabados finos y cancelería de precisión.'
    }
  ];

  return (
    <section
      style={{
        padding: '84px 0',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* Columna Izquierda: Mensaje de Marca & SEO Local Natural */}
          <div>
            <div className="subtitle" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent)', fontFamily: 'var(--font-tech)', fontSize: '0.92rem', fontWeight: 700, letterSpacing: '0.1em' }}>
              <MapPin size={16} />
              <span>COBERTURA METROPOLITANA Y REGIONAL</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                marginTop: '10px',
                marginBottom: '20px'
              }}
            >
              HERRAMIENTAS EN MONTERREY
            </h2>

            {/* Texto exacto requerido por el usuario */}
            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: '20px',
                fontWeight: 500
              }}
            >
              NORTEX nace con una visión industrial y norteña para ofrecer herramientas y soluciones profesionales a empresas, contratistas, técnicos, talleres y profesionales de Monterrey y su área metropolitana.
            </p>

            <p
              style={{
                fontSize: '0.96rem',
                lineHeight: 1.6,
                color: 'var(--text-muted)',
                marginBottom: '28px'
              }}
            >
              Conocemos de primera mano la exigencia del trabajo en el norte. Desde las plantas de manufactura avanzada hasta las faenas de construcción bajo temperaturas extremas, nuestro catálogo reúne herramientas manuales de cromo-vanadio, herramientas eléctricas de alto rendimiento y maquinaria pesada capaces de responder sin fallas.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                <Check size={16} color="var(--color-accent)" />
                <span>Atención a compras corporativas y órdenes por volumen</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                <Check size={16} color="var(--color-accent)" />
                <span>Suministro directo para parques industriales de Nuevo León</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                <Check size={16} color="var(--color-accent)" />
                <span>Envíos coordinados a proyectos en toda la República Mexicana</span>
              </div>
            </div>

            <button
              onClick={onNavigateToQuote}
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
            >
              <Truck size={18} />
              <span>Solicitar cotización para tu zona</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Columna Derecha: Tarjetas de Cobertura por Municipio / Parques */}
          <div>
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-md)',
                padding: '28px',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '14px'
                }}
              >
                <Building2 size={24} color="var(--color-accent)" />
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                    ZONAS DE ABASTECIMIENTO CONTINUO
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-tech)' }}>
                    NUEVO LEÓN & VALLE METROPOLITANO
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '12px',
                  maxHeight: '440px',
                  overflowY: 'auto',
                  paddingRight: '6px'
                }}
              >
                {municipios.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '12px 14px'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: 'var(--color-accent)',
                        fontFamily: 'var(--font-tech)',
                        letterSpacing: '0.04em',
                        marginBottom: '4px'
                      }}
                    >
                      {m.name}
                    </div>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.35 }}>
                      {m.focus}
                    </p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: '20px',
                  padding: '12px 16px',
                  backgroundColor: 'rgba(255, 85, 0, 0.08)',
                  border: '1px solid var(--border-accent)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)'
                }}
              >
                ¿Tu obra o planta está fuera del área metropolitana? Suministramos pedidos foráneos para Coahuila, Tamaulipas y cualquier punto del país.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
