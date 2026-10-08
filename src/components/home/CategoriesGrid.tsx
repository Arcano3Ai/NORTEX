import React from 'react';
import { CATEGORIES } from '../../data/categories';
import { ArrowRight, Wrench, Zap, HardHat, Factory, Layers, ShieldCheck, Ruler, Package } from 'lucide-react';

interface CategoriesGridProps {
  onSelectCategory: (categorySlug: string) => void;
}

export const CategoriesGrid: React.FC<CategoriesGridProps> = ({ onSelectCategory }) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench size={22} color="var(--color-accent)" />;
      case 'Zap': return <Zap size={22} color="var(--color-accent)" />;
      case 'HardHat': return <HardHat size={22} color="var(--color-accent)" />;
      case 'Factory': return <Factory size={22} color="var(--color-accent)" />;
      case 'Layers': return <Layers size={22} color="var(--color-accent)" />;
      case 'ShieldCheck': return <ShieldCheck size={22} color="var(--color-accent)" />;
      case 'Ruler': return <Ruler size={22} color="var(--color-accent)" />;
      default: return <Package size={22} color="var(--color-accent)" />;
    }
  };

  return (
    <section id="categorias" style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Título de Sección Requerido */}
        <div className="section-header">
          <div className="subtitle">
            <span>CATÁLOGO INDUSTRIAL COMPLETO</span>
          </div>
          <h2>ENCUENTRA LA HERRAMIENTA QUE NECESITAS</h2>
          <p className="lead">
            Líneas de suministro clasificadas por aplicación técnica, desde herramienta de torsión pesada hasta maquinaria de obra y equipo de protección normado.
          </p>
        </div>

        {/* Grid de 8 Categorías */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="card-industrial"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0',
                overflow: 'hidden',
                height: '100%'
              }}
            >
              {/* Imagen de Categoría */}
              <div
                style={{
                  position: 'relative',
                  height: '180px',
                  width: '100%',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-secondary)'
                }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                
                {/* Overlay de gradiente */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(12,15,18,0.2) 0%, rgba(12,15,18,0.85) 100%)'
                  }}
                />

                {/* Badge con Icono */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-medium)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
                    }}
                  >
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <span className="badge-tag">
                    {category.itemCount}+ productos
                  </span>
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div
                style={{
                  padding: '20px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <h3
                  style={{
                    fontSize: '1.35rem',
                    marginBottom: '8px',
                    color: 'var(--text-primary)'
                  }}
                >
                  {category.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                    marginBottom: '18px',
                    flex: 1
                  }}
                >
                  {category.shortDescription}
                </p>

                {/* Subcategorías / Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {category.subcategories.slice(0, 3).map((sub, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.74rem',
                        color: 'var(--text-dim)',
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '2px 8px',
                        borderRadius: '2px',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      {sub}
                    </span>
                  ))}
                </div>

                {/* Botón Ver Productos */}
                <button
                  onClick={() => onSelectCategory(category.slug)}
                  className="btn btn-outline btn-sm"
                  style={{
                    width: '100%',
                    justifyContent: 'space-between',
                    marginTop: 'auto'
                  }}
                >
                  <span>Ver productos</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
