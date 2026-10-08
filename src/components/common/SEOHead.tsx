import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  schema?: Record<string, unknown> | null;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'NORTEX — Herramientas en Monterrey | Soluciones Industriales',
  description = 'Herramientas profesionales y soluciones para construcción, industria y mantenimiento en Monterrey y todo México.',
  canonicalPath = '/',
  schema = null
}) => {
  useEffect(() => {
    document.title = title;

    // Actualizar meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }

    // Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    const fullCanonicalUrl = `https://nortexherramientas.com${canonicalPath}`;
    if (linkCanonical) {
      linkCanonical.setAttribute('href', fullCanonicalUrl);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', fullCanonicalUrl);
      document.head.appendChild(linkCanonical);
    }

    // Inyectar schema dinámico si existe
    if (schema) {
      const scriptId = 'dynamic-seo-schema';
      let existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.textContent = JSON.stringify(schema);
      } else {
        existingScript = document.createElement('script');
        existingScript.id = scriptId;
        existingScript.setAttribute('type', 'application/ld+json');
        existingScript.textContent = JSON.stringify(schema);
        document.head.appendChild(existingScript);
      }
    }
  }, [title, description, canonicalPath, schema]);

  return null;
};
