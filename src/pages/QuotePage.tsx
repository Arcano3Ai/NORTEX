import React from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SEOHead } from '../components/common/SEOHead';
import { QuoteSection } from '../components/home/QuoteSection';
import { ShieldCheck, Truck, Headphones } from 'lucide-react';

interface QuotePageProps {
  onNavigate: (path: string) => void;
}

export const QuotePage: React.FC<QuotePageProps> = ({ onNavigate }) => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '80px' }}>
      <SEOHead
        title="Solicitar Cotización de Herramientas para Empresas | NORTEX Monterrey"
        description="Solicita una cotización personalizada de herramientas en Monterrey. Atención especializada para cuadrillas, talleres, contratistas y compras corporativas."
        canonicalPath="/cotizacion"
      />

      {/* Breadcrumb Header */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <Breadcrumb
            items={[{ label: 'Cotización Personalizada' }]}
            onNavigate={onNavigate}
          />
        </div>
      </div>

      <div className="container" style={{ paddingTop: '50px' }}>
        
        {/* Header descriptivo */}
        <div className="section-header text-center">
          <span className="subtitle">VENTAS CORPORATIVAS Y TÉCNICAS</span>
          <h1>COTIZACIÓN DE HERRAMIENTAS Y SUMINISTRO INDUSTRIAL</h1>
          <p className="lead">
            Genera tu solicitud de cotización por partidas. Ya sea que requieras una sola máquina especializada o un lote completo para obra civil en Monterrey o el resto de México.
          </p>
        </div>

        {/* 3 Garantías del Servicio */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}
        >
          <div
            style={{
              padding: '24px',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <Headphones size={28} color="var(--color-accent)" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ display: 'block', color: 'var(--text-primary)', fontSize: '0.98rem' }}>Respuesta Oportuna</strong>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.84rem' }}>Cotizaciones desglosadas con fichas técnicas para compras</span>
            </div>
          </div>

          <div
            style={{
              padding: '24px',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <Truck size={28} color="var(--color-whatsapp)" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ display: 'block', color: 'var(--text-primary)', fontSize: '0.98rem' }}>Logística y Entrega</strong>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.84rem' }}>Coordinación para Monterrey, su área metropolitana y todo el país</span>
            </div>
          </div>

          <div
            style={{
              padding: '24px',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <ShieldCheck size={28} color="var(--color-amber)" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ display: 'block', color: 'var(--text-primary)', fontSize: '0.98rem' }}>Facturación Fiscal</strong>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.84rem' }}>Comprobantes fiscales digitales (CFDI) conforme a la ley mexicana</span>
            </div>
          </div>
        </div>

        {/* Sección Formulario Principal */}
        <QuoteSection />

      </div>
    </div>
  );
};
