import React from 'react';
import { INDUSTRIES } from '../../data/industries';
import { 
  Building, 
  Factory, 
  Wrench, 
  Cpu, 
  Zap, 
  Droplet, 
  Truck, 
  Hammer, 
  Layers, 
  UserCheck, 
  ArrowRight 
} from 'lucide-react';

interface IndustriesSectionProps {
  onSelectIndustry: (industrySlug: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onSelectIndustry }) => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building': return <Building size={22} color="var(--color-accent)" />;
      case 'Factory': return <Factory size={22} color="var(--color-accent)" />;
      case 'Wrench': return <Wrench size={22} color="var(--color-accent)" />;
      case 'Cpu': return <Cpu size={22} color="var(--color-accent)" />;
      case 'Zap': return <Zap size={22} color="var(--color-accent)" />;
      case 'Droplet': return <Droplet size={22} color="var(--color-accent)" />;
      case 'Truck': return <Truck size={22} color="var(--color-accent)" />;
      case 'Hammer': return <Hammer size={22} color="var(--color-accent)" />;
      case 'Layers': return <Layers size={22} color="var(--color-accent)" />;
      default: return <UserCheck size={22} color="var(--color-accent)" />;
    }
  };

  return (
    <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Header Requerido */}
        <div className="section-header">
          <div className="subtitle">
            <span>ESPECIALIZACIÓN TÉCNICA</span>
          </div>
          <h2>SOLUCIONES PARA CADA TIPO DE TRABAJO</h2>
          <p className="lead">
            Paquetes y líneas de herramienta configuradas para satisfacer los retos normativos y mecánicos de cada sector productivo.
          </p>
        </div>

        {/* Grid de 10 Industrias */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '20px'
          }}
        >
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              onClick={() => onSelectIndustry(ind.slug)}
              className="card-industrial"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '22px',
                cursor: 'pointer',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              <div>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}
                >
                  {getIndustryIcon(ind.iconName)}
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                    lineHeight: 1.2
                  }}
                >
                  {ind.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.45,
                    marginBottom: '14px'
                  }}
                >
                  {ind.description}
                </p>

                {/* Key tools tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '16px' }}>
                  {ind.keyTools.slice(0, 2).map((tool, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--text-dim)',
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '2px 6px',
                        borderRadius: '2px'
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                  fontFamily: 'var(--font-tech)',
                  marginTop: 'auto'
                }}
              >
                <span>Ver herramientas del sector</span>
                <ArrowRight size={14} />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
