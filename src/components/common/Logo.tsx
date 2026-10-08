import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showSubtitle = true, className = '' }) => {
  const getScale = () => {
    switch (size) {
      case 'sm': return { font: '1.45rem', sub: '0.62rem', icon: 20 };
      case 'lg': return { font: '2.5rem', sub: '0.85rem', icon: 34 };
      default: return { font: '1.9rem', sub: '0.72rem', icon: 26 };
    }
  };

  const scale = getScale();

  return (
    <div className={`nortex-brand ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', userSelect: 'none' }}>
      {/* Isotipo Industrial Vectorial */}
      <svg
        width={scale.icon}
        height={scale.icon}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <rect width="32" height="32" rx="4" fill="#1A2027" stroke="#333F4C" strokeWidth="1.5" />
        <path d="M7 25V7H12L20 19V7H25V25H20L12 13V25H7Z" fill="#FF5500" />
        <circle cx="25" cy="7" r="2.5" fill="#F59E0B" />
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: scale.font,
              fontWeight: 900,
              letterSpacing: '0.08em',
              color: '#FFFFFF',
              textTransform: 'uppercase'
            }}
          >
            NORTEX
          </span>
          <span
            style={{
              width: '6px',
              height: '6px',
              backgroundColor: '#FF5500',
              borderRadius: '1px',
              display: 'inline-block'
            }}
          />
        </div>

        {showSubtitle && (
          <span
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: scale.sub,
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: '#94A3B8',
              textTransform: 'uppercase',
              marginTop: '2px'
            }}
          >
            HERRAMIENTAS EN MONTERREY
          </span>
        )}
      </div>
    </div>
  );
};
