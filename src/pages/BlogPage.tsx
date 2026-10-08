import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blogPosts';
import type { BlogPost } from '../data/blogPosts';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SEOHead } from '../components/common/SEOHead';
import { Clock, Calendar, ArrowRight, ArrowLeft, FileText } from 'lucide-react';

interface BlogPageProps {
  initialPost?: BlogPost | null;
  onNavigate: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ initialPost = null, onNavigate }) => {
  const [activePost, setActivePost] = useState<BlogPost | null>(initialPost);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '80px' }}>
      <SEOHead
        title={
          activePost
            ? `${activePost.title} | Centro de Herramientas NORTEX`
            : 'Centro de Herramientas Monterrey | Blog Técnico NORTEX'
        }
        description={
          activePost
            ? activePost.excerpt
            : 'Artículos técnicos, criterios de selección de maquinaria, ergonomía y normas de seguridad industrial para contratistas y empresas en Monterrey.'
        }
        canonicalPath={activePost ? `/blog/${activePost.slug}` : '/blog'}
      />

      {/* Breadcrumb Header */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <Breadcrumb
            items={
              activePost
                ? [
                    { label: 'Centro de Herramientas', path: '/blog' },
                    { label: activePost.title }
                  ]
                : [{ label: 'Centro de Herramientas' }]
            }
            onNavigate={(p) => {
              if (p === '/blog') setActivePost(null);
              else onNavigate(p);
            }}
          />
        </div>
      </div>

      <div className="container" style={{ paddingTop: '50px' }}>
        
        {activePost ? (
          /* Vista de Artículo Individual */
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <button
              onClick={() => setActivePost(null)}
              className="btn btn-outline btn-sm"
              style={{ marginBottom: '28px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <ArrowLeft size={16} />
              <span>Volver a todas las guías técnicas</span>
            </button>

            <span className="badge-tech" style={{ marginBottom: '14px' }}>
              {activePost.category}
            </span>

            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15, color: 'var(--text-primary)', marginBottom: '18px' }}>
              {activePost.title}
            </h1>

            <div style={{ display: 'flex', gap: '20px', color: 'var(--text-dim)', fontSize: '0.85rem', marginBottom: '32px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '18px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={14} />
                {activePost.date}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} />
                {activePost.readTime}
              </span>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderLeft: '4px solid var(--color-accent)',
                padding: '20px 24px',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                marginBottom: '32px',
                fontSize: '1.08rem',
                color: 'var(--text-secondary)',
                fontStyle: 'italic',
                lineHeight: 1.6
              }}
            >
              "{activePost.excerpt}"
            </div>

            <div style={{ fontSize: '1.08rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '48px' }}>
              <p style={{ marginBottom: '24px' }}>{activePost.content}</p>
              <p style={{ color: 'var(--text-muted)' }}>
                En NORTEX brindamos asesoramiento técnico directo a cuadrillas, empresas y talleres mecánicos de Monterrey y su área metropolitana para elegir el modelo exacto que garantice rendimiento sin sobrecostos de mantenimiento.
              </p>
            </div>

            {/* Banner comercial al final del artículo */}
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-md)',
                padding: '32px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
                  ¿Necesitas herramientas para este tipo de aplicación?
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  Consulta nuestro catálogo o solicita una cotización técnica personalizada.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => onNavigate('/herramientas')}
                  className="btn btn-secondary btn-sm"
                >
                  Ver Catálogo
                </button>
                <button
                  onClick={() => onNavigate('/cotizacion')}
                  className="btn btn-primary btn-sm"
                >
                  <FileText size={16} />
                  Cotizar Ahora
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* Listado de Artículos */
          <div>
            <div className="section-header">
              <span className="subtitle">BIBLIOTECA TÉCNICA</span>
              <h1>CENTRO DE HERRAMIENTAS</h1>
              <p className="lead">
                Criterios de ingeniería, comparativas de potencia, guías de selección de torquímetros y normativas para contratistas y empresas en Monterrey.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '28px'
              }}
            >
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setActivePost(post)}
                  className="card-industrial"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span className="badge-tag" style={{ color: 'var(--color-accent)' }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontSize: '1.4rem',
                        lineHeight: 1.25,
                        color: 'var(--text-primary)',
                        marginBottom: '12px'
                      }}
                    >
                      {post.title}
                    </h2>

                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.5,
                        marginBottom: '24px'
                      }}
                    >
                      {post.excerpt}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--color-accent)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-tech)'
                    }}
                  >
                    <span>Leer artículo completo</span>
                    <ArrowRight size={16} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
