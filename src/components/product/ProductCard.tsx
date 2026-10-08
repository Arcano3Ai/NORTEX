import React from 'react';
import type { Product } from '../../types/product';
import { useQuote } from '../../context/QuoteContext';
import { Eye, Plus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewProduct: (product: Product) => void;
  showPrice?: boolean; // Preparado para e-commerce futuro
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewProduct,
  showPrice = false
}) => {
  const { items, addItem } = useQuote();
  const isAlreadyInQuote = items.some((item) => item.product.id === product.id);

  return (
    <div
      className="card-industrial"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '18px',
        overflow: 'hidden'
      }}
    >
      {/* Top Badges (SKU & Categoría) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <span className="badge-tag" style={{ color: 'var(--color-accent)', borderColor: 'rgba(255, 85, 0, 0.3)' }}>
          SKU: {product.sku}
        </span>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-tech)' }}>
          {product.categoryName}
        </span>
      </div>

      {/* Imagen del Producto con Overlay sutil en hover */}
      <div
        onClick={() => onViewProduct(product)}
        style={{
          position: 'relative',
          width: '100%',
          height: '210px',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-sm)',
          overflow: 'hidden',
          cursor: 'pointer',
          marginBottom: '16px'
        }}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          decoding="async"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '8px',
            left: '8px',
            backgroundColor: 'rgba(12, 15, 18, 0.85)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '2px',
            padding: '2px 8px',
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-tech)'
          }}
        >
          {product.brand}
        </div>
      </div>

      {/* Título y Modelo */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3
          onClick={() => onViewProduct(product)}
          style={{
            fontSize: '1.18rem',
            lineHeight: 1.25,
            marginBottom: '8px',
            cursor: 'pointer',
            color: 'var(--text-primary)',
            transition: 'color var(--transition-fast)'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
        >
          {product.name}
        </h3>

        <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginBottom: '8px', fontFamily: 'var(--font-tech)' }}>
          Modelo: {product.model}
        </div>

        <p
          style={{
            fontSize: '0.86rem',
            color: 'var(--text-muted)',
            lineHeight: 1.45,
            marginBottom: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {product.shortDescription}
        </p>

        {/* Especificación clave destacada */}
        {product.specifications.length > 0 && (
          <div
            style={{
              marginTop: 'auto',
              marginBottom: '16px',
              padding: '6px 10px',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.78rem',
              display: 'flex',
              justifyContent: 'space-between',
              color: 'var(--text-secondary)'
            }}
          >
            <span>{product.specifications[0].label}:</span>
            <strong style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-tech)' }}>
              {product.specifications[0].value}
            </strong>
          </div>
        )}

        {/* Placeholder de E-Commerce Futuro (preparado sin mostrar precio si el modelo es cotización) */}
        {showPrice && product.price && (
          <div style={{ marginBottom: '14px', display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-tech)' }}>
              ${product.price.toLocaleString('es-MX')} {product.currency || 'MXN'}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>+ IVA</span>
          </div>
        )}
      </div>

      {/* Botones de Acción: Ver Producto y Cotizar */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '10px' }}>
        <button
          onClick={() => onViewProduct(product)}
          className="btn btn-secondary btn-sm"
          style={{ padding: '9px 12px', fontSize: '0.85rem' }}
          title="Ver ficha técnica completa"
        >
          <Eye size={15} />
          <span>Ver Ficha</span>
        </button>

        <button
          onClick={() => addItem(product, 1)}
          className={`btn ${isAlreadyInQuote ? 'btn-outline' : 'btn-primary'} btn-sm`}
          style={{ padding: '9px 12px', fontSize: '0.85rem' }}
          title="Agregar a solicitud de cotización"
        >
          {isAlreadyInQuote ? (
            <>
              <Check size={15} color="var(--color-accent)" />
              <span>Cotizando</span>
            </>
          ) : (
            <>
              <Plus size={15} />
              <span>Cotizar</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
