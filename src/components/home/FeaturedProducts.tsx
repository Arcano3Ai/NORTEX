import React, { useState } from 'react';
import type { Product } from '../../types/product';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';

interface FeaturedProductsProps {
  onSelectProduct: (product: Product) => void;
  onNavigateToCatalog: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onSelectProduct,
  onNavigateToCatalog
}) => {
  const [filter, setFilter] = useState<string>('all');

  const filterOptions = [
    { label: 'Todas las Destacadas', value: 'all' },
    { label: 'Eléctricas', value: 'herramientas-electricas' },
    { label: 'Manuales Cr-V', value: 'herramientas-manuales' },
    { label: 'Industriales', value: 'herramientas-industriales' },
    { label: 'Medición Láser', value: 'instrumentos-medicion' },
    { label: 'Seguridad EPP', value: 'equipo-seguridad' }
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    if (filter === 'all') return true;
    return product.categorySlug === filter;
  });

  return (
    <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Header con CTA al catálogo */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20px', marginBottom: '36px' }}>
          <div>
            <div className="subtitle" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-accent)', fontFamily: 'var(--font-tech)', fontSize: '0.92rem', fontWeight: 700, letterSpacing: '0.1em' }}>
              <span>EQUIPOS DE ALTO RENDIMIENTO</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginTop: '6px' }}>
              HERRAMIENTAS DESTACADAS
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '600px' }}>
              Selección técnica para faenas pesadas, obra civil y líneas de ensamble. Solicita tu cotización por pieza o volumen.
            </p>
          </div>

          <button
            onClick={onNavigateToCatalog}
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>Ver Catálogo Completo</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Barra de Filtros por Categoría */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '14px',
            marginBottom: '32px',
            scrollbarWidth: 'none'
          }}
        >
          <SlidersHorizontal size={18} color="var(--color-accent)" style={{ marginRight: '6px', flexShrink: 0 }} />
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--font-tech)',
                fontSize: '0.88rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                transition: 'all var(--transition-fast)',
                backgroundColor: filter === opt.value ? 'var(--color-accent)' : 'var(--bg-tertiary)',
                color: filter === opt.value ? '#FFFFFF' : 'var(--text-muted)',
                border: filter === opt.value ? '1px solid var(--color-accent)' : '1px solid var(--border-subtle)'
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Grid de Tarjetas de Producto */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewProduct={(selected) => onSelectProduct(selected)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
