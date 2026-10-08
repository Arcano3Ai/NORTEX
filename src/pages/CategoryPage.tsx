import React from 'react';
import type { Category } from '../types/category';
import type { Product } from '../types/product';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SEOHead } from '../components/common/SEOHead';
import { FileText, MessageSquare } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

interface CategoryPageProps {
  category: Category;
  onNavigate: (path: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  onNavigate,
  onSelectProduct
}) => {
  const { generateWhatsAppLink } = useQuote();

  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === category.slug);

  // FAQ representativo de la categoría para SEO
  const categoryFaqs = [
    {
      q: `¿Qué marcas y especificaciones manejan en ${category.name.toLowerCase()}?`,
      a: `Distribuimos líneas seleccionadas de grado industrial diseñadas para resistir jornadas continuas y especificaciones de torque, potencia o resistencia de materiales que superan la herramienta doméstica comercial.`
    },
    {
      q: `¿Puedo cotizar lotes por volumen de ${category.name.toLowerCase()} para mi empresa en Monterrey?`,
      a: `Sí. Preparamos cotizaciones desglosadas con ficha técnica y disponibilidad inmediata o programada para empresas, constructoras y talleres en Monterrey y parques industriales aledaños.`
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '80px' }}>
      <SEOHead
        title={`${category.name} en Monterrey | NORTEX Herramientas Profesionales`}
        description={`${category.longDescription} Suministro y cotizaciones en Monterrey y todo México.`}
        canonicalPath={`/categoria/${category.slug}`}
      />

      {/* Breadcrumb Header */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Herramientas', path: '/herramientas' },
              { label: category.name }
            ]}
            onNavigate={onNavigate}
          />
        </div>
      </div>

      {/* Banner de Categoría con H1 */}
      <section
        style={{
          position: 'relative',
          padding: '60px 0',
          backgroundColor: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-medium)',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="badge-tech" style={{ marginBottom: '14px' }}>
              CATEGORÍA ESPECIALIZADA
            </span>

            {/* H1 OBLIGATORIO */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                marginBottom: '16px'
              }}
            >
              {category.name.toUpperCase()} EN MONTERREY
            </h1>

            {/* INTRODUCCIÓN OBLIGATORIA */}
            <p
              style={{
                fontSize: '1.12rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: '24px'
              }}
            >
              {category.longDescription}
            </p>

            {/* SUBCATEGORÍAS OBLIGATORIAS */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-tech)' }}>
                SUBCATEGORÍAS DISPONIBLES:
              </span>
              {category.subcategories.map((sub, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-subtle)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.84rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS DE LA CATEGORÍA */}
      <div className="container" style={{ paddingTop: '50px' }}>
        <div className="section-header">
          <span className="subtitle">LÍNEA SELECCIONADA</span>
          <h2>MODELOS DISPONIBLES EN ESTA CATEGORÍA</h2>
          <p className="lead">
            Selecciona el equipo requerido para ver su ficha técnica o agregarlo a tu solicitud de cotización.
          </p>
        </div>

        {categoryProducts.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '60px'
            }}
          >
            {categoryProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onViewProduct={(selected) => onSelectProduct(selected)}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              padding: '40px',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-sm)',
              textAlign: 'center',
              marginBottom: '60px',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <p style={{ color: 'var(--text-muted)' }}>
              Actualmente integrando nuevos modelos a esta sección. Puedes solicitar cotización directa de cualquier pieza técnica por WhatsApp.
            </p>
          </div>
        )}

        {/* CTA DE COTIZACIÓN OBLIGATORIO */}
        <div
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-accent)',
            borderRadius: 'var(--radius-md)',
            padding: '36px',
            marginBottom: '60px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
              ¿Requieres un paquete de {category.name.toLowerCase()} para tu obra o taller?
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Te preparamos una propuesta económica detallada con entrega en Monterrey o flete nacional.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('/cotizacion')}
              className="btn btn-primary"
            >
              <FileText size={18} />
              <span>Solicitar Cotización</span>
            </button>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageSquare size={18} />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>

        {/* FAQ DE LA CATEGORÍA OBLIGATORIO */}
        <div>
          <div className="section-header">
            <span className="subtitle">DUDAS FRECUENTES</span>
            <h2>PREGUNTAS SOBRE {category.name.toUpperCase()}</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '820px' }}>
            {categoryFaqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  padding: '20px 24px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ fontFamily: 'var(--font-tech)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                  {faq.q}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.55 }}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
