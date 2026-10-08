import React from 'react';
import { Award, Layers, Headphones, Truck } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  const pillars = [
    {
      title: 'CALIDAD',
      description: 'Productos seleccionados para profesionales.',
      detail: 'Herramientas fabricadas bajo normas internacionales de resistencia a la torsión, ergonomía y fatiga de materiales para uso rudo.',
      icon: <Award size={32} color="var(--color-accent)" />
    },
    {
      title: 'VARIEDAD',
      description: 'Herramientas y soluciones para diferentes industrias.',
      detail: 'Desde consumibles abrasivos hasta maquinaria de obra civil y sistemas de control de apriete digital para líneas de montaje.',
      icon: <Layers size={32} color="var(--color-accent)" />
    },
    {
      title: 'ATENCIÓN',
      description: 'Asesoría para encontrar el producto adecuado.',
      detail: 'Acompañamiento técnico con ingenieros y especialistas para seleccionar el torque, potencia y consumible exacto para tu proyecto.',
      icon: <Headphones size={32} color="var(--color-accent)" />
    },
    {
      title: 'ABASTECIMIENTO',
      description: 'Soluciones para empresas, talleres y profesionales.',
      detail: 'Capacidad de respuesta ágil en Monterrey, suministro programado por contratos y consolidación de pedidos en una sola factura.',
      icon: <Truck size={32} color="var(--color-accent)" />
    }
  ];

  return (
    <section
      style={{
        padding: '84px 0',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Header Requerido */}
        <div className="section-header text-center">
          <div className="subtitle">
            <span>EL ESTÁNDAR NORTEX</span>
          </div>
          <h2>MÁS QUE HERRAMIENTAS. SOLUCIONES PARA TU TRABAJO.</h2>
          <p className="lead">
            Entendemos el ritmo de la industria norteña: tiempos de entrega críticos, precisión en el ensamble y durabilidad extrema en cada herramienta.
          </p>
        </div>

        {/* 4 Pilares de Beneficio */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="card-industrial"
              style={{
                backgroundColor: 'var(--bg-card)',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Número de fondo grande sutil */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '18px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '4.5rem',
                  fontWeight: 900,
                  color: 'rgba(255, 255, 255, 0.03)',
                  lineHeight: 1,
                  userSelect: 'none'
                }}
              >
                0{index + 1}
              </div>

              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '22px'
                }}
              >
                {pillar.icon}
              </div>

              <h3
                style={{
                  fontSize: '1.45rem',
                  color: 'var(--text-primary)',
                  marginBottom: '8px'
                }}
              >
                {pillar.title}
              </h3>

              <div
                style={{
                  fontSize: '0.98rem',
                  fontWeight: 600,
                  color: 'var(--color-accent)',
                  marginBottom: '10px'
                }}
              >
                {pillar.description}
              </div>

              <p
                style={{
                  fontSize: '0.86rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.55,
                  marginTop: 'auto'
                }}
              >
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
