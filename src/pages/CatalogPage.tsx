import React, { useState, useMemo } from 'react';
import type { Product } from '../types/product';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/product/ProductCard';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SEOHead } from '../components/common/SEOHead';
import { Search, Filter, ArrowUpDown, X, Layers } from 'lucide-react';

interface CatalogPageProps {
  initialSearchQuery?: string;
  initialCategory?: string;
  onNavigate: (path: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  initialSearchQuery = '',
  initialCategory = 'all',
  onNavigate,
  onSelectProduct
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<'name' | 'sku'>('name');

  // Filtrado reactivo del catálogo maestro
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.categorySlug === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.sku.toLowerCase().includes(q) ||
        product.brand.toLowerCase().includes(q) ||
        product.model.toLowerCase().includes(q) ||
        product.categoryName.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return a.sku.localeCompare(b.sku);
    });
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '80px' }}>
      <SEOHead
        title="Catálogo de Herramientas Profesionales en Monterrey | NORTEX"
        description="Consulta nuestro catálogo completo de herramientas industriales, manuales, eléctricas, de medición y equipo de seguridad en Monterrey. Cotizaciones inmediatas para empresas y talleres."
        canonicalPath="/herramientas"
      />

      {/* Breadcrumb Header */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <Breadcrumb
            items={[{ label: 'Catálogo de Herramientas' }]}
            onNavigate={onNavigate}
          />
        </div>
      </div>

      <div className="container" style={{ paddingTop: '36px' }}>
        
        {/* Título Principal */}
        <div className="section-header">
          <span className="subtitle">ABASTECIMIENTO Y DISPONIBILIDAD</span>
          <h1>CATÁLOGO GENERAL DE HERRAMIENTAS</h1>
          <p className="lead">
            Explora las herramientas disponibles para suministro en Monterrey y envíos a todo México. Selecciona las partidas necesarias para generar tu solicitud de cotización formal.
          </p>
        </div>

        {/* Barra de Filtros y Búsqueda */}
        <div
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-md)',
            padding: '20px',
            marginBottom: '36px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Campo de Búsqueda */}
          <div style={{ position: 'relative', flex: '1', minWidth: '260px' }}>
            <input
              type="text"
              placeholder="Filtrar por nombre, SKU, marca o modelo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-industrial"
              style={{ paddingLeft: '40px' }}
            />
            <Search
              size={18}
              color="var(--text-muted)"
              style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Filtro por Categoría */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Filter size={16} color="var(--color-accent)" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-industrial"
              style={{ width: 'auto', minWidth: '200px', cursor: 'pointer' }}
            >
              <option value="all">Todas las Categorías</option>
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Ordenamiento */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ArrowUpDown size={16} color="var(--text-dim)" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'sku')}
              className="input-industrial"
              style={{ width: 'auto', cursor: 'pointer' }}
            >
              <option value="name">Ordenar por Nombre</option>
              <option value="sku">Ordenar por SKU</option>
            </select>
          </div>
        </div>

        {/* Resumen de Resultados */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)', fontFamily: 'var(--font-tech)' }}>
            MOSTRANDO <strong style={{ color: 'var(--color-accent)' }}>{filteredProducts.length}</strong> HERRAMIENTAS
          </div>

          {(searchQuery || selectedCategory !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              style={{
                fontSize: '0.82rem',
                color: 'var(--color-accent)',
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Grid de Productos */}
        {filteredProducts.length > 0 ? (
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
                onViewProduct={(p) => onSelectProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <Layers size={48} color="var(--border-strong)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
              NO SE ENCONTRARON HERRAMIENTAS
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', maxWidth: '420px', margin: '0 auto 20px' }}>
              No existen coincidencias para los criterios seleccionados. Puedes consultar con nuestros asesores de compras si requieres un modelo específico bajo pedido.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="btn btn-secondary"
            >
              Restablecer catálogo completo
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
