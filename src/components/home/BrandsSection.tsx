import React from 'react';
import { BRANDS } from '../../data/brands';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface BrandsSectionProps {
  onNavigateToBrands: () => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ onNavigateToBrands }) => {
  return (
    <section style={{ padding: '74px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Header Requerido */}
        <div className="section-header text-center">
          <div className="subtitle">
            <span>CALIDAD Y RESPALDO MECÁNICO</span>
          </div>
          <h2>MARCAS CON LAS QUE TRABAJAMOS</h2>
          <p className="lead">
            Contamos con proveeduría y alianzas estratégicas con fabricantes de utillaje, herramienta eléctrica pesada y fijación estructural para asegurar stock constante.
          </p>
        </div>

        {/* Grid de Marcas con placeholders elegantes industriales */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}
        >
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="card-industrial"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px',
                textAlign: 'center',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                position: 'relative'
              }}
            >
              {/* Logo Placeholder Industrial Elegante */}
              <div
                style={{
                  height: '70px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px dashed var(--border-medium)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '12px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    letterSpacing: '0.12em',
                    fontWeight: 900,
                    color: '#FFFFFF',
                    textTransform: 'uppercase'
                  }}
                >
                  {brand.logoText}
                </span>
              </div>

              <div>
                <span className="badge-tech" style={{ marginBottom: '10px' }}>
                  {brand.origin}
                </span>

                <div
                  style={{
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '8px'
                  }}
                >
                  {brand.categorySpecialty}
                </div>

                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.45
                  }}
                >
                  {brand.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: '18px',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  color: 'var(--color-accent)',
                  fontFamily: 'var(--font-tech)'
                }}
              >
                <ShieldCheck size={14} />
                <span>Línea Certificada para Industria</span>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para explorar directorio de marcas */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={onNavigateToBrands}
            className="btn btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>Ver detalle de marcas y líneas de suministro</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};
