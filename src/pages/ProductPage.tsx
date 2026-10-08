import React, { useState } from 'react';
import type { Product } from '../types/product';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { useQuote } from '../context/QuoteContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { SEOHead } from '../components/common/SEOHead';
import { 
  FileText, 
  MessageSquare, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Layers, 
  HelpCircle,
  Share2,
  Check
} from 'lucide-react';

interface ProductPageProps {
  product: Product;
  onNavigate: (path: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  product,
  onNavigate,
  onSelectProduct
}) => {
  const { addItem, generateWhatsAppLink } = useQuote();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Productos relacionados de la misma categoría o marca
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.categorySlug === product.categorySlug
  ).slice(0, 3);

  // Schema.org Product estructurado
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images.map((img) => `https://nortexherramientas.com${img}`),
    description: product.shortDescription,
    sku: product.sku,
    mpn: product.model,
    brand: {
      '@type': 'Brand',
      name: product.brand
    },
    category: product.categoryName,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'MXN',
      price: product.price || '0.00',
      availability: 'https://schema.org/InStock',
      url: `https://nortexherramientas.com/producto/${product.slug}`,
      priceValidUntil: '2027-12-31',
      itemCondition: 'https://schema.org/NewCondition'
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '80px' }}>
      <SEOHead
        title={`${product.name} | NORTEX Herramientas en Monterrey`}
        description={product.shortDescription}
        canonicalPath={`/producto/${product.slug}`}
        schema={productSchema}
      />

      {/* Top Breadcrumb */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Herramientas', path: '/herramientas' },
              { label: product.categoryName, path: `/categoria/${product.categorySlug}` },
              { label: product.name }
            ]}
            onNavigate={onNavigate}
          />
        </div>
      </div>

      <div className="container" style={{ paddingTop: '36px' }}>
        {/* Main Product Layout (Gallery + Tech Details) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            marginBottom: '64px'
          }}
        >
          {/* Columna Izquierda: Galería */}
          <div>
            {/* Imagen Principal */}
            <div
              style={{
                width: '100%',
                height: '420px',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--border-medium)',
                marginBottom: '16px',
                position: 'relative'
              }}
            >
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span
                className="badge-tag"
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: 'rgba(12, 15, 18, 0.9)',
                  borderColor: 'var(--color-accent)',
                  color: 'var(--color-accent)'
                }}
              >
                SKU: {product.sku}
              </span>
            </div>

            {/* Miniaturas de galería */}
            {product.images.length > 1 && (
              <div style={{ display: 'flex', gap: '12px' }}>
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    style={{
                      width: '76px',
                      height: '76px',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      border: selectedImageIndex === idx ? '2px solid var(--color-accent)' : '1px solid var(--border-subtle)',
                      opacity: selectedImageIndex === idx ? 1 : 0.6,
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <img src={img} alt={`Vista ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}

            {/* Badges de Garantía y Abastecimiento */}
            <div
              style={{
                marginTop: '28px',
                padding: '16px',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={22} color="var(--color-accent)" />
                <div style={{ fontSize: '0.82rem' }}>
                  <strong style={{ display: 'block', color: 'var(--text-primary)' }}>Respaldo Técnico</strong>
                  <span style={{ color: 'var(--text-muted)' }}>Herramientas de grado profesional</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Truck size={22} color="var(--color-whatsapp)" />
                <div style={{ fontSize: '0.82rem' }}>
                  <strong style={{ display: 'block', color: 'var(--text-primary)' }}>Monterrey y Nacional</strong>
                  <span style={{ color: 'var(--text-muted)' }}>Suministro a empresas y talleres</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Información Técnica y Acción Comercial */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span className="badge-tech">{product.brand}</span>
              <button
                onClick={handleShare}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)'
                }}
              >
                {copiedLink ? <Check size={14} color="var(--color-whatsapp)" /> : <Share2 size={14} />}
                <span>{copiedLink ? 'Enlace copiado' : 'Compartir ficha'}</span>
              </button>
            </div>

            <h1 style={{ fontSize: '2.4rem', lineHeight: 1.15, marginBottom: '12px' }}>
              {product.name}
            </h1>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', fontSize: '0.86rem', color: 'var(--text-muted)', fontFamily: 'var(--font-tech)' }}>
              <span>MODELO: <strong style={{ color: 'var(--text-primary)' }}>{product.model}</strong></span>
              <span>•</span>
              <span>CATEGORÍA: <strong style={{ color: 'var(--color-accent)' }}>{product.categoryName}</strong></span>
            </div>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '28px' }}>
              {product.description}
            </p>

            {/* CTAs Comerciales Principales */}
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                marginBottom: '32px'
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-tech)' }}>
                  MODALIDAD COMERCIAL
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Cotización directa por volumen o partida técnica
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                <button
                  onClick={() => addItem(product, 1)}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <FileText size={18} />
                  Agregar a Cotización
                </button>

                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%' }}
                >
                  <MessageSquare size={18} />
                  Cotizar por WhatsApp
                </a>
              </div>
            </div>

            {/* Características Destacadas */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '14px', borderLeft: '3px solid var(--color-accent)', paddingLeft: '10px' }}>
                CARACTERÍSTICAS TÉCNICAS
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {product.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tabla de Especificaciones & Aplicaciones */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            marginBottom: '64px',
            padding: '36px',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)'
          }}
        >
          {/* Especificaciones */}
          <div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={20} color="var(--color-accent)" />
              TABLA DE ESPECIFICACIONES
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <tbody>
                {product.specifications.map((spec, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '10px 8px', color: 'var(--text-muted)', width: '45%' }}>{spec.label}</td>
                    <td style={{ padding: '10px 8px', color: 'var(--text-primary)', fontWeight: 600 }}>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Aplicaciones Recomendadas */}
          <div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HelpCircle size={20} color="var(--color-accent)" />
              APLICACIONES RECOMENDADAS
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {product.applications.map((app, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {app}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Productos Relacionados */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="section-header">
              <span className="subtitle">LÍNEAS COMPLEMENTARIAS</span>
              <h2>HERRAMIENTAS RELACIONADAS</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {relatedProducts.map((p) => (
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
    </div>
  );
};
