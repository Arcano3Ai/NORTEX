import React from 'react';
import { BRANDS } from '../data/brands';
import { PRODUCTS } from '../data/products';
import type { Product } from '../types/product';
import { ProductCard } from '../components/product/ProductCard';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SEOHead } from '../components/common/SEOHead';
import { ArrowRight } from 'lucide-react';

interface BrandsPageProps {
  onNavigate: (path: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({ onNavigate, onSelectProduct }) => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '80px' }}>
      <SEOHead
        title="Marcas de Herramientas y Equipamiento Industrial | NORTEX Monterrey"
        description="Conoce las líneas de fabricantes y marcas industriales que comercializamos en Monterrey: herramientas eléctricas, forja mecánica, precisión y seguridad normada."
        canonicalPath="/marcas"
      />

      {/* Breadcrumb Header */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <Breadcrumb
            items={[{ label: 'Marcas con las que trabajamos' }]}
            onNavigate={onNavigate}
          />
        </div>
      </div>

      <div className="container" style={{ paddingTop: '50px' }}>
        
        {/* Header Principal */}
        <div className="section-header">
          <span className="subtitle">LÍNEAS Y FABRICANTES</span>
          <h1>MARCAS CON LAS QUE TRABAJAMOS</h1>
          <p className="lead">
            Colaboramos con marcas de probada reputación técnica y resistencia en obra e industria. Cada línea cuenta con especificaciones rigurosas y respaldo de materiales.
          </p>
        </div>

        {/* Directorio de Marcas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {BRANDS.map((brand) => {
            const brandProducts = PRODUCTS.filter((p) => p.brand === brand.name);

            return (
              <div
                key={brand.id}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-md)',
                  padding: '36px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '20px',
                    marginBottom: '28px',
                    borderBottom: '1px solid var(--border-subtle)',
                    paddingBottom: '20px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    {/* Logo Box Placeholder */}
                    <div
                      style={{
                        padding: '14px 24px',
                        backgroundColor: 'var(--bg-card)',
                        border: '1px dashed var(--border-medium)',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.4rem',
                          fontWeight: 900,
                          color: '#FFFFFF',
                          letterSpacing: '0.1em'
                        }}
                      >
                        {brand.logoText}
                      </span>
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                        <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>
                          {brand.name}
                        </h2>
                        <span className="badge-tech">{brand.origin}</span>
                      </div>
                      <div style={{ color: 'var(--color-accent)', fontSize: '0.92rem', fontWeight: 600, fontFamily: 'var(--font-tech)' }}>
                        {brand.categorySpecialty}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate(`/herramientas?marca=${brand.slug}`)}
                    className="btn btn-outline btn-sm"
                  >
                    <span>Ver todos los productos de esta línea</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px', maxWidth: '820px' }}>
                  {brand.description}
                </p>

                {/* Muestra de productos de la marca */}
                {brandProducts.length > 0 && (
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '16px', fontFamily: 'var(--font-tech)' }}>
                      HERRAMIENTAS DESTACADAS DE ESTA MARCA:
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
                      {brandProducts.map((p) => (
                        <ProductCard
                          key={p.id}
                          product={p}
                          onViewProduct={(selected) => onSelectProduct(selected)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
