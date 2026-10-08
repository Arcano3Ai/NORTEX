import React from 'react';
import { Home, Wrench, FileText, ShoppingBag, MessageSquare } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';

interface MobileBottomNavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ currentPath, onNavigate }) => {
  const { totalItemsCount, toggleDrawer, generateWhatsAppLink } = useQuote();

  const navItems = [
    { label: 'Inicio', path: '/', icon: Home },
    { label: 'Catálogo', path: '/herramientas', icon: Wrench },
    { 
      label: 'Santul PDF', 
      path: 'pdf', 
      icon: FileText, 
      isExternal: true, 
      url: './catalogo/CATALOGO_SANTUL_OCT_26.pdf' 
    },
    { 
      label: 'Cotización', 
      action: toggleDrawer, 
      icon: ShoppingBag, 
      badge: totalItemsCount 
    },
    { 
      label: 'WhatsApp', 
      isExternal: true, 
      url: generateWhatsAppLink(), 
      icon: MessageSquare, 
      isWhatsApp: true 
    }
  ];

  return (
    <nav
      className="mobile-bottom-nav"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '62px',
        backgroundColor: 'rgba(12, 15, 18, 0.96)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--border-medium)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        zIndex: 9998,
        paddingBottom: 'env(safe-area-inset-bottom, 0px)'
      }}
      aria-label="Navegación móvil inferior"
    >
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        const isActive = currentPath === item.path;

        if (item.isExternal && item.url) {
          return (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                height: '100%',
                textDecoration: 'none',
                color: item.isWhatsApp ? 'var(--color-whatsapp)' : 'var(--text-muted)',
                gap: '3px'
              }}
            >
              <Icon size={20} color={item.isWhatsApp ? '#25D366' : 'var(--text-muted)'} />
              <span
                style={{
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-tech)',
                  fontWeight: 600,
                  letterSpacing: '0.04em'
                }}
              >
                {item.label}
              </span>
            </a>
          );
        }

        if (item.action) {
          return (
            <button
              key={idx}
              onClick={item.action}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                height: '100%',
                background: 'none',
                border: 'none',
                position: 'relative',
                color: totalItemsCount > 0 ? 'var(--color-accent)' : 'var(--text-muted)',
                gap: '3px',
                cursor: 'pointer'
              }}
            >
              <div style={{ position: 'relative' }}>
                <Icon size={20} />
                {item.badge !== undefined && item.badge > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-6px',
                      right: '-8px',
                      backgroundColor: 'var(--color-accent)',
                      color: '#FFFFFF',
                      fontSize: '0.65rem',
                      fontWeight: 900,
                      minWidth: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.5)',
                      fontFamily: 'var(--font-tech)'
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-tech)',
                  fontWeight: 600,
                  letterSpacing: '0.04em'
                }}
              >
                {item.label}
              </span>
            </button>
          );
        }

        return (
          <button
            key={idx}
            onClick={() => item.path && onNavigate(item.path)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              height: '100%',
              background: 'none',
              border: 'none',
              color: isActive ? 'var(--color-accent)' : 'var(--text-muted)',
              gap: '3px',
              cursor: 'pointer'
            }}
          >
            <Icon size={20} color={isActive ? 'var(--color-accent)' : 'var(--text-muted)'} />
            <span
              style={{
                fontSize: '0.68rem',
                fontFamily: 'var(--font-tech)',
                fontWeight: 600,
                letterSpacing: '0.04em'
              }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
