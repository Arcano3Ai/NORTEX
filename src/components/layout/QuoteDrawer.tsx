import React, { useState } from 'react';
import { useQuote } from '../../context/QuoteContext';
import { X, Trash2, Plus, Minus, MessageSquare, ArrowRight, PackageOpen } from 'lucide-react';

interface QuoteDrawerProps {
  onNavigateToQuote: () => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({ onNavigateToQuote }) => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearQuote,
    isDrawerOpen,
    closeDrawer,
    generateWhatsAppLink
  } = useQuote();

  const [customerName, setCustomerName] = useState('');
  const [companyName, setCompanyName] = useState('');

  if (!isDrawerOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(4px)',
        transition: 'opacity 0.25s ease'
      }}
      onClick={closeDrawer}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          backgroundColor: 'var(--bg-secondary)',
          borderLeft: '1px solid var(--border-medium)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-lg)',
          animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del Drawer */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--bg-tertiary)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                color: 'var(--text-primary)',
                letterSpacing: '0.04em'
              }}
            >
              SOLICITUD DE COTIZACIÓN
            </span>
            <span className="badge-tech">
              {items.length} {items.length === 1 ? 'ítem' : 'ítems'}
            </span>
          </div>

          <button
            onClick={closeDrawer}
            style={{ color: 'var(--text-muted)', padding: '6px' }}
            aria-label="Cerrar panel"
          >
            <X size={20} />
          </button>
        </div>

        {/* Lista de Productos Cotizados */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}
        >
          {items.length === 0 ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                textAlign: 'center',
                color: 'var(--text-dim)',
                gap: '12px',
                padding: '40px 0'
              }}
            >
              <PackageOpen size={48} strokeWidth={1.5} color="var(--border-strong)" />
              <div style={{ fontFamily: 'var(--font-tech)', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                TU LISTA DE COTIZACIÓN ESTÁ VACÍA
              </div>
              <p style={{ fontSize: '0.88rem', maxWidth: '280px' }}>
                Explora el catálogo y agrega las herramientas que tu empresa o proyecto necesita para armar una cotización personalizada.
              </p>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.product.id}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '12px 14px',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center'
                  }}
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    style={{
                      width: '54px',
                      height: '54px',
                      objectFit: 'cover',
                      borderRadius: '4px',
                      border: '1px solid var(--border-subtle)',
                      flexShrink: 0
                    }}
                  />

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontFamily: 'var(--font-tech)' }}>
                      SKU: {item.product.sku}
                    </div>
                    <div
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                      title={item.product.name}
                    >
                      {item.product.name}
                    </div>

                    {/* Controles de Cantidad */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Cant:</span>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          border: '1px solid var(--border-medium)',
                          borderRadius: '3px',
                          backgroundColor: 'var(--bg-secondary)'
                        }}
                      >
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          style={{ padding: '2px 6px', color: 'var(--text-secondary)' }}
                        >
                          <Minus size={12} />
                        </button>
                        <span
                          style={{
                            padding: '0 8px',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            fontFamily: 'var(--font-tech)',
                            color: 'var(--text-primary)'
                          }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          style={{ padding: '2px 6px', color: 'var(--text-secondary)' }}
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.product.id)}
                    style={{ color: 'var(--text-dim)', padding: '6px' }}
                    title="Eliminar de cotización"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
                <button
                  onClick={clearQuote}
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-dim)',
                    textDecoration: 'underline',
                    cursor: 'pointer'
                  }}
                >
                  Vaciar toda la lista
                </button>
              </div>
            </>
          )}
        </div>

        {/* Footer del Drawer con formulario express & CTAs */}
        {items.length > 0 && (
          <div
            style={{
              padding: '20px 24px',
              borderTop: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-tertiary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
              <input
                type="text"
                placeholder="Tu Nombre / Puesto"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="input-industrial"
                style={{ padding: '10px 12px' }}
              />
              <input
                type="text"
                placeholder="Empresa / Taller"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="input-industrial"
                style={{ padding: '10px 12px' }}
              />
            </div>

            <a
              href={generateWhatsAppLink(customerName, companyName)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageSquare size={18} />
              Enviar Cotización por WhatsApp
            </a>

            <button
              onClick={() => {
                closeDrawer();
                onNavigateToQuote();
              }}
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center', fontSize: '0.92rem' }}
            >
              Formulario Formal Completo
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
