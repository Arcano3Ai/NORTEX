import React, { useState } from 'react';
import { Search, ArrowRight, Tag } from 'lucide-react';

interface SearchSectionProps {
  onSearch: (query: string) => void;
}

export const SearchSection: React.FC<SearchSectionProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const quickSearches = [
    'Rotomartillo SDS',
    'Llave de Impacto',
    'Nivel Láser 360',
    'Juego de Llaves Cr-V',
    'Torquímetro',
    'Esmeriladora 9"',
    'Botas de Seguridad'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  const handleQuickClick = (term: string) => {
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '40px 0',
        marginTop: '-1px'
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          <h2
            style={{
              fontSize: '1.65rem',
              color: 'var(--text-primary)',
              marginBottom: '16px',
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.04em'
            }}
          >
            ¿QUÉ HERRAMIENTA ESTÁS BUSCANDO?
          </h2>

          {/* Formulario de búsqueda principal */}
          <form onSubmit={handleSubmit} style={{ position: 'relative', marginBottom: '20px' }}>
            <div
              style={{
                display: 'flex',
                boxShadow: 'var(--shadow-md)',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                border: '1px solid var(--border-medium)',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '18px',
                  color: 'var(--text-muted)'
                }}
              >
                <Search size={22} color="var(--color-accent)" />
              </div>

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Busca por producto, marca, categoría o modelo..."
                className="input-industrial"
                style={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  padding: '16px 18px',
                  fontSize: '1.05rem',
                  boxShadow: 'none'
                }}
              />

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  borderRadius: 0,
                  padding: '0 28px',
                  fontSize: '0.98rem'
                }}
              >
                <span>Buscar</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </form>

          {/* Búsquedas frecuentes / Tags de acceso rápido */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '0.82rem'
            }}
          >
            <span style={{ color: 'var(--text-dim)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Tag size={13} />
              Búsquedas frecuentes:
            </span>

            {quickSearches.map((term, index) => (
              <button
                key={index}
                onClick={() => handleQuickClick(term)}
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '3px',
                  padding: '4px 10px',
                  color: 'var(--text-muted)',
                  fontSize: '0.8rem',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                }}
              >
                {term}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
