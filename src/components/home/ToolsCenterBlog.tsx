import React from 'react';
import { BLOG_POSTS } from '../../data/blogPosts';
import type { BlogPost } from '../../data/blogPosts';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

interface ToolsCenterBlogProps {
  onSelectPost: (post: BlogPost) => void;
  onNavigateToBlog: () => void;
}

export const ToolsCenterBlog: React.FC<ToolsCenterBlogProps> = ({
  onSelectPost,
  onNavigateToBlog
}) => {
  return (
    <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Header Requerido */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20px', marginBottom: '36px' }}>
          <div>
            <div className="subtitle" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-accent)', fontFamily: 'var(--font-tech)', fontSize: '0.92rem', fontWeight: 700, letterSpacing: '0.1em' }}>
              <BookOpen size={16} />
              <span>GUÍAS TÉCNICAS Y CRITERIOS DE INGENIERÍA</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginTop: '6px' }}>
              CENTRO DE HERRAMIENTAS
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '640px' }}>
              Artículos y comparativas de especialistas para optimizar la compra, rendimiento y seguridad de tus equipos en taller y obra.
            </p>
          </div>

          <button
            onClick={onNavigateToBlog}
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>Ver todos los artículos</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Grid de Artículos */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="card-industrial"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px',
                cursor: 'pointer',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="badge-tag" style={{ color: 'var(--color-accent)', borderColor: 'rgba(255, 85, 0, 0.3)' }}>
                    {post.category}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    lineHeight: 1.25,
                    color: 'var(--text-primary)',
                    marginBottom: '10px'
                  }}
                >
                  {post.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.86rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                    marginBottom: '20px'
                  }}
                >
                  {post.excerpt}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                  fontFamily: 'var(--font-tech)',
                  marginTop: 'auto'
                }}
              >
                <span>Leer guía técnica</span>
                <ArrowRight size={14} />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
