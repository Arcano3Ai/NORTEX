import React, { useState, useEffect } from 'react';
import { QuoteProvider } from './context/QuoteContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { QuoteDrawer } from './components/layout/QuoteDrawer';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductPage } from './pages/ProductPage';
import { AboutPage } from './pages/AboutPage';
import { BrandsPage } from './pages/BrandsPage';
import { QuotePage } from './pages/QuotePage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { PRODUCTS } from './data/products';
import { CATEGORIES } from './data/categories';
import type { Product } from './types/product';
import type { BlogPost } from './data/blogPosts';

// Helper para normalizar rutas soportando subdirectorios de GitHub Pages (ej: /NORTEX) o Hash
const getNormalizedPath = (rawPath?: string): string => {
  let path = rawPath !== undefined ? rawPath : (window.location.pathname || '/');
  if (window.location.hash && window.location.hash.startsWith('#/')) {
    path = window.location.hash.replace(/^#/, '');
  } else {
    // Eliminar prefijo del repositorio en GitHub Pages (/NORTEX o /NORTEX/)
    path = path.replace(/^\/NORTEX\/?/i, '/');
  }
  if (!path.startsWith('/')) path = '/' + path;
  return path;
};

export const AppContent: React.FC = () => {
  // Estado de ruta sincronizado
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return getNormalizedPath();
  });

  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [activeCategorySlug, setActiveCategorySlug] = useState<string | null>(null);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Sincronizar con eventos popstate y hashchange
  useEffect(() => {
    const handleLocationChange = () => {
      const normalized = getNormalizedPath();
      setCurrentPath(normalized);
      parsePath(normalized);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    parsePath(getNormalizedPath());

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Función para parsear la URL limpia
  const parsePath = (path: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 1. Producto individual: /producto/[slug]
    if (path.startsWith('/producto/')) {
      const slug = path.replace('/producto/', '').replace(/\/$/, '');
      const foundProduct = PRODUCTS.find((p) => p.slug === slug);
      if (foundProduct) {
        setActiveProduct(foundProduct);
        return;
      }
    }

    // 2. Categorías con URL directa (ej: /herramientas-electricas o /categoria/[slug])
    if (path.startsWith('/categoria/')) {
      const slug = path.replace('/categoria/', '').replace(/\/$/, '');
      setActiveCategorySlug(slug);
      return;
    }

    // Mapeo directo de URLs canónicas de categorías requeridas
    const directCategorySlugs = [
      'herramientas-manuales',
      'herramientas-electricas',
      'herramientas-industriales',
      'herramientas-construccion',
      'accesorios',
      'equipo-seguridad',
      'instrumentos-medicion',
      'ferreteria'
    ];

    const cleanPathSlug = path.replace(/^\//, '').replace(/\/$/, '');
    if (directCategorySlugs.includes(cleanPathSlug)) {
      setActiveCategorySlug(cleanPathSlug);
      return;
    }

    setActiveProduct(null);
    setActiveCategorySlug(null);
  };

  // Navegación limpia compatible con GitHub Pages
  const navigateTo = (path: string) => {
    if (path.startsWith('/#') || (path.startsWith('#') && !path.startsWith('#/'))) {
      const elementId = path.replace(/^\/?#/, '');
      if (getNormalizedPath() !== '/') {
        navigateTo('/');
        setTimeout(() => {
          const el = document.getElementById(elementId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(elementId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Preservar prefijo /NORTEX en la barra de direcciones si se corre en GitHub Pages
    const isGhPages = window.location.pathname.toLowerCase().startsWith('/nortex');
    const targetUrl = isGhPages ? `/NORTEX${path === '/' ? '/' : path}` : path;

    try {
      window.history.pushState({}, '', targetUrl);
    } catch {
      window.location.hash = path;
    }

    const normalized = getNormalizedPath(path);
    setCurrentPath(normalized);
    parsePath(normalized);
  };

  const handleSelectProduct = (product: Product) => {
    setActiveProduct(product);
    navigateTo(`/producto/${product.slug}`);
  };

  const handleSelectCategory = (categorySlug: string) => {
    setActiveCategorySlug(categorySlug);
    navigateTo(`/categoria/${categorySlug}`);
  };

  const handleSelectPost = (post: BlogPost) => {
    setActivePost(post);
    navigateTo(`/blog/${post.slug}`);
  };

  const handleGlobalSearch = (query: string) => {
    setSearchQuery(query);
    navigateTo('/herramientas');
  };

  // Renderizado condicional de vistas
  const renderCurrentView = () => {
    // Vista de Producto
    if (activeProduct || currentPath.startsWith('/producto/')) {
      const productToShow =
        activeProduct ||
        PRODUCTS.find((p) => p.slug === currentPath.replace('/producto/', '').replace(/\/$/, '')) ||
        PRODUCTS[0];

      return (
        <ProductPage
          product={productToShow}
          onNavigate={navigateTo}
          onSelectProduct={handleSelectProduct}
        />
      );
    }

    // Vista de Categoría
    if (activeCategorySlug || currentPath.startsWith('/categoria/')) {
      const categorySlug =
        activeCategorySlug ||
        currentPath.replace('/categoria/', '').replace(/^\//, '').replace(/\/$/, '');

      const categoryToShow =
        CATEGORIES.find((c) => c.slug === categorySlug) || CATEGORIES[0];

      return (
        <CategoryPage
          category={categoryToShow}
          onNavigate={navigateTo}
          onSelectProduct={handleSelectProduct}
        />
      );
    }

    // Rutas canónicas
    if (currentPath === '/herramientas') {
      return (
        <CatalogPage
          initialSearchQuery={searchQuery}
          onNavigate={navigateTo}
          onSelectProduct={handleSelectProduct}
        />
      );
    }

    if (currentPath === '/nosotros') {
      return <AboutPage onNavigate={navigateTo} />;
    }

    if (currentPath === '/marcas') {
      return (
        <BrandsPage
          onNavigate={navigateTo}
          onSelectProduct={handleSelectProduct}
        />
      );
    }

    if (currentPath === '/cotizacion') {
      return <QuotePage onNavigate={navigateTo} />;
    }

    if (currentPath === '/contacto') {
      return <ContactPage onNavigate={navigateTo} />;
    }

    if (currentPath.startsWith('/blog')) {
      return (
        <BlogPage
          initialPost={activePost}
          onNavigate={navigateTo}
        />
      );
    }

    // Por defecto: Página de Inicio
    return (
      <HomePage
        onNavigate={navigateTo}
        onSelectProduct={handleSelectProduct}
        onSelectCategory={handleSelectCategory}
        onSelectPost={handleSelectPost}
        onSearch={handleGlobalSearch}
      />
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenProduct={handleSelectProduct}
      />

      <main style={{ flex: 1 }}>{renderCurrentView()}</main>

      <Footer onNavigate={navigateTo} />

      <FloatingWhatsApp />

      <MobileBottomNav currentPath={currentPath} onNavigate={navigateTo} />

      <QuoteDrawer onNavigateToQuote={() => navigateTo('/cotizacion')} />
    </div>
  );
};

export default function App() {
  return (
    <QuoteProvider>
      <AppContent />
    </QuoteProvider>
  );
}
