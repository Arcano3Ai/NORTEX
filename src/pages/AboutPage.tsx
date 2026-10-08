import React from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SEOHead } from '../components/common/SEOHead';
import { ShieldCheck, Target, Compass, MapPin, ArrowRight, FileText } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '80px' }}>
      <SEOHead
        title="Nosotros | NORTEX Herramientas en Monterrey"
        description="Conoce la visión de NORTEX: un referente en comercialización y distribución de herramientas profesionales y soluciones industriales desde Monterrey para todo México."
        canonicalPath="/nosotros"
      />

      {/* Breadcrumb Header */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <Breadcrumb
            items={[{ label: 'Nosotros' }]}
            onNavigate={onNavigate}
          />
        </div>
      </div>

      <div className="container" style={{ paddingTop: '50px' }}>
        
        {/* Header Principal */}
        <div style={{ maxWidth: '840px', marginBottom: '56px' }}>
          <div className="subtitle" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-accent)', fontFamily: 'var(--font-tech)', fontSize: '0.92rem', fontWeight: 700, letterSpacing: '0.12em', marginBottom: '8px' }}>
            <MapPin size={16} />
            <span>IDENTIDAD INDUSTRIAL REGIOMONTANA</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '22px' }}>
            NORTEX — HERRAMIENTAS EN MONTERREY
          </h1>

          <p style={{ fontSize: '1.25rem', lineHeight: 1.5, color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '24px' }}>
            NORTEX busca convertirse en un referente en herramientas y soluciones profesionales desde Monterrey.
          </p>

          <p style={{ fontSize: '1.02rem', lineHeight: 1.65, color: 'var(--text-muted)' }}>
            Nacemos con una vocación industrial arraigada en la cultura del esfuerzo, la precisión y la calidad que caracteriza al norte de México. Entendemos que para constructoras, cuadrillas de mantenimiento, paileros, técnicos y plantas de manufactura, una herramienta no es solo un objeto: es el instrumento indispensable para cumplir plazos, garantizar la seguridad del personal y entregar trabajos de alto nivel técnico.
          </p>
        </div>

        {/* Pilares Institucionales */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
            marginBottom: '64px'
          }}
        >
          <div
            className="card-industrial"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              padding: '32px 24px'
            }}
          >
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-tertiary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
                border: '1px solid var(--border-medium)'
              }}
            >
              <Target size={26} color="var(--color-accent)" />
            </div>

            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
              NUESTRA VISIÓN
            </h3>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Consolidarnos como el canal de abastecimiento técnico más confiable en Monterrey y un socio estratégico para industrias y profesionales de todo el país que buscan herramientas resistentes, asesoría oportuna y cotizaciones claras.
            </p>
          </div>

          <div
            className="card-industrial"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              padding: '32px 24px'
            }}
          >
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-tertiary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
                border: '1px solid var(--border-medium)'
              }}
            >
              <ShieldCheck size={26} color="var(--color-accent)" />
            </div>

            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
              CRITERIO DE SELECCIÓN
            </h3>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Priorizamos herramientas diseñadas para trabajo continuo: aceros cromo-vanadio tratados térmicamente, motores con protección contra polvo abrasivo, ergonomía comprobada y consumibles de máxima durabilidad mecánica.
            </p>
          </div>

          <div
            className="card-industrial"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              padding: '32px 24px'
            }}
          >
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-tertiary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
                border: '1px solid var(--border-medium)'
              }}
            >
              <Compass size={26} color="var(--color-accent)" />
            </div>

            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
              COMPROMISO COMERCIAL
            </h3>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Respuestas rápidas para departamentos de compras y cuadrillas en campo. Brindamos fichas técnicas, confirmación de partidas y canales de comunicación ágiles para evitar retrasos en obra y planta.
            </p>
          </div>
        </div>

        {/* Bloque de Información Corporativa editable con Placeholders */}
        <div
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '36px',
            maxWidth: '840px',
            marginBottom: '60px'
          }}
        >
          <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '16px', borderLeft: '3px solid var(--color-accent)', paddingLeft: '10px' }}>
            DATOS DE OPERACIÓN Y CONTACTO
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', marginBottom: '20px' }}>
            Los siguientes datos de operación están preparados para su actualización oficial:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', fontSize: '0.9rem' }}>
            <div>
              <div style={{ color: 'var(--text-dim)', fontSize: '0.78rem', fontFamily: 'var(--font-tech)' }}>SEDE PRINCIPAL</div>
              <strong style={{ color: 'var(--text-primary)' }}>Monterrey, Nuevo León, México</strong>
              <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>[DIRECCIÓN]</div>
            </div>

            <div>
              <div style={{ color: 'var(--text-dim)', fontSize: '0.78rem', fontFamily: 'var(--font-tech)' }}>CANAL DE COTIZACIONES</div>
              <strong style={{ color: 'var(--text-primary)' }}>[WHATSAPP]</strong>
              <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>Atención directa en línea</div>
            </div>

            <div>
              <div style={{ color: 'var(--text-dim)', fontSize: '0.78rem', fontFamily: 'var(--font-tech)' }}>CORREO CORPORATIVO</div>
              <strong style={{ color: 'var(--text-primary)' }}>[CORREO]</strong>
              <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>Ventas y licitaciones</div>
            </div>

            <div>
              <div style={{ color: 'var(--text-dim)', fontSize: '0.78rem', fontFamily: 'var(--font-tech)' }}>HORARIOS DE ATENCIÓN</div>
              <strong style={{ color: 'var(--text-primary)' }}>[HORARIOS]</strong>
              <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>Lunes a Sábado</div>
            </div>
          </div>
        </div>

        {/* CTA a Cotizar */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => onNavigate('/cotizacion')}
            className="btn btn-primary btn-lg"
          >
            <FileText size={20} />
            <span>Solicitar cotización para tu empresa</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
};
