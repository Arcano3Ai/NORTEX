import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate?: (path: string) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, onNavigate }) => {
  const fullItems: BreadcrumbItem[] = [{ label: 'Inicio', path: '/' }, ...items];

  // Schema.org BreadcrumbList
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.path ? `https://nortexherramientas.com${item.path}` : undefined
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="Breadcrumb" style={{ padding: '12px 0', fontSize: '0.86rem' }}>
        <ol
          style={{
            listStyle: 'none',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            color: 'var(--text-muted)'
          }}
        >
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;

            return (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: isLast ? 'var(--text-primary)' : 'inherit',
                  fontWeight: isLast ? 600 : 400
                }}
              >
                {index > 0 && <ChevronRight size={14} color="var(--text-dim)" />}
                {isLast ? (
                  <span aria-current="page">{item.label}</span>
                ) : (
                  <button
                    onClick={() => onNavigate && item.path && onNavigate(item.path)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: 'var(--text-muted)',
                      transition: 'color var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {index === 0 && <Home size={14} />}
                    {item.label}
                  </button>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
