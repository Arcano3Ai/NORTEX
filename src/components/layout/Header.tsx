import React, { useState, useEffect, useRef } from 'react';
import { Logo } from '../common/Logo';
import { useQuote } from '../../context/QuoteContext';
import { PRODUCTS } from '../../data/products';
import type { Product } from '../../types/product';
import { 
  Search, 
  MessageSquare, 
  FileText, 
  Menu, 
  X, 
  ChevronRight,
  PhoneCall
} from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenProduct?: (product: Product) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenProduct }) => {
  const { totalItemsCount, toggleDrawer, generateWhatsAppLink } = useQuote();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar dropdown de búsqueda al hacer clic afuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filtrado de productos para búsqueda predictiva
  const searchResults = searchQuery.trim().length > 1
    ? PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.model.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Herramientas', path: '/herramientas' },
    { label: 'Categorías', path: '/#categorias' },
    { label: 'Marcas', path: '/marcas' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Cotiza', path: '/cotizacion' },
    { label: 'Contacto', path: '/contacto' },
  ];

  const handleLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    setIsSearchActive(false);
    onNavigate(path);
  };

  const handleProductSelect = (product: Product) => {
    setIsSearchActive(false);
    setSearchQuery('');
    if (onOpenProduct) {
      onOpenProduct(product);
    } else {
      onNavigate(`/producto/${product.slug}`);
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(12, 15, 18, 0.96)' : 'var(--bg-primary)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${isScrolled ? 'var(--border-medium)' : 'var(--border-subtle)'}`,
        transition: 'all 0.25s ease',
        boxShadow: isScrolled ? '0 8px 24px rgba(0, 0, 0, 0.6)' : 'none'
      }}
    >
      {/* Top Banner Monterrey / Cobertura */}
      <div
        style={{
          background: 'linear-gradient(90deg, #161B20 0%, #1F2833 50%, #161B20 100%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '6px 0',
          fontSize: '0.78rem',
          color: 'var(--text-muted)'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', background: '#25D366' }} />
            <strong style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-tech)', letterSpacing: '0.05em' }}>
              DISTRIBUCIÓN EN MONTERREY Y TODO MÉXICO
            </strong>
            <span style={{ display: 'none', color: 'var(--text-dim)' }} className="topbar-desktop">|</span>
            <span style={{ display: 'none' }} className="topbar-desktop">Atención a empresas, constructoras y talleres</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <PhoneCall size={12} color="var(--color-accent)" />
              <span style={{ color: 'var(--text-secondary)' }}>Línea Directa: [WHATSAPP]</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '78px', gap: '20px' }}>
        
        {/* LOGO */}
        <div onClick={() => handleLinkClick('/')} style={{ cursor: 'pointer' }}>
          <Logo size="md" />
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', gap: '22px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                style={{
                  fontFamily: 'var(--font-tech)',
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  color: isActive ? 'var(--color-accent)' : 'var(--text-secondary)',
                  borderBottom: isActive ? '2px solid var(--color-accent)' : '2px solid transparent',
                  padding: '6px 0',
                  transition: 'color var(--transition-fast)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Buscador de Productos Desktop */}
        <div ref={searchRef} style={{ position: 'relative', flex: '1', maxWidth: '340px', display: 'none' }} className="desktop-search">
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Buscar SKU, marca, modelo..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchActive(true);
              }}
              onFocus={() => setIsSearchActive(true)}
              style={{
                width: '100%',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-sm)',
                padding: '9px 14px 9px 38px',
                color: 'var(--text-primary)',
                fontSize: '0.88rem',
                outline: 'none',
                transition: 'border-color var(--transition-fast)'
              }}
            />
            <Search
              size={16}
              color="var(--text-muted)"
              style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }}
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Predictivo de búsqueda */}
          {isSearchActive && searchQuery.trim().length > 1 && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 6px)',
                left: 0,
                right: 0,
                backgroundColor: 'var(--bg-tertiary)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 1100,
                overflow: 'hidden'
              }}
            >
              {searchResults.length > 0 ? (
                <div>
                  <div style={{ padding: '8px 12px', fontSize: '0.75rem', color: 'var(--text-dim)', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)', fontFamily: 'var(--font-tech)' }}>
                    RESULTADOS DEL CATÁLOGO
                  </div>
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleProductSelect(product)}
                      style={{
                        padding: '10px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        borderBottom: '1px solid var(--border-subtle)',
                        cursor: 'pointer',
                        transition: 'background var(--transition-fast)'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        style={{ width: '38px', height: '38px', objectFit: 'cover', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {product.name}
                        </div>
                        <div style={{ display: 'flex', gap: '8px', fontSize: '0.74rem', color: 'var(--color-accent)', fontFamily: 'var(--font-tech)' }}>
                          <span>SKU: {product.sku}</span>
                          <span>•</span>
                          <span style={{ color: 'var(--text-muted)' }}>{product.categoryName}</span>
                        </div>
                      </div>
                      <ChevronRight size={14} color="var(--text-dim)" />
                    </div>
                  ))}
                  <div
                    onClick={() => {
                      setIsSearchActive(false);
                      onNavigate('/herramientas');
                    }}
                    style={{
                      padding: '10px',
                      textAlign: 'center',
                      fontSize: '0.8rem',
                      color: 'var(--color-accent)',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-tech)',
                      background: 'rgba(255, 85, 0, 0.08)'
                    }}
                  >
                    Ver todas las herramientas disponibles →
                  </div>
                </div>
              ) : (
                <div style={{ padding: '16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  No se encontraron coincidencias para "{searchQuery}".
                </div>
              )}
            </div>
          )}
        </div>

        {/* CTAs Derecha (WhatsApp + Cotizador + Mobile Toggle) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          
          {/* Botón WhatsApp Desktop */}
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
            style={{ display: 'none', textDecoration: 'none' }}
            title="Contactar vía WhatsApp"
            id="header-whatsapp-btn"
          >
            <MessageSquare size={16} />
            <span style={{ display: 'none' }} className="btn-label-desktop">WhatsApp</span>
          </a>

          {/* Botón Cotizador con Badge */}
          <button
            onClick={toggleDrawer}
            className="btn btn-primary btn-sm"
            style={{ position: 'relative' }}
            title="Ver lista de cotización"
            id="header-quote-btn"
          >
            <FileText size={16} />
            <span style={{ display: 'none' }} className="btn-label-desktop">Cotizar</span>
            {totalItemsCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-7px',
                  right: '-7px',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--color-accent)',
                  fontSize: '0.72rem',
                  fontWeight: 900,
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
                  fontFamily: 'var(--font-tech)'
                }}
              >
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* Botón Buscar en Móvil */}
          <button
            onClick={() => onNavigate('/herramientas')}
            className="btn btn-secondary btn-sm"
            style={{ padding: '9px 10px', display: 'flex' }}
            title="Buscar"
          >
            <Search size={18} />
          </button>

          {/* Botón Menú Hamburguesa en Móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-secondary btn-sm mobile-menu-btn"
            style={{ padding: '9px 10px' }}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-medium)',
            padding: '20px 24px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleLinkClick(link.path)}
              style={{
                textAlign: 'left',
                fontFamily: 'var(--font-tech)',
                fontSize: '1.15rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                color: currentPath === link.path ? 'var(--color-accent)' : 'var(--text-primary)',
                padding: '8px 0',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{link.label}</span>
              <ChevronRight size={16} color="var(--text-dim)" />
            </button>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%' }}
            >
              <MessageSquare size={18} />
              Contactar por WhatsApp
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/cotizacion');
              }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <FileText size={18} />
              Solicitar Cotización Formal
            </button>
          </div>
        </div>
      )}

      {/* Media query inline style complement */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-search { display: block !important; }
          .btn-label-desktop { display: inline !important; }
          .topbar-desktop { display: inline !important; }
          .mobile-menu-btn { display: none !important; }
          #header-whatsapp-btn { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
};
