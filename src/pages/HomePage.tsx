import React from 'react';
import { Hero } from '../components/home/Hero';
import { SearchSection } from '../components/home/SearchSection';
import { CategoriesGrid } from '../components/home/CategoriesGrid';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { BrandsSection } from '../components/home/BrandsSection';
import { ValueProposition } from '../components/home/ValueProposition';
import { MonterreySection } from '../components/home/MonterreySection';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { QuoteSection } from '../components/home/QuoteSection';
import { ToolsCenterBlog } from '../components/home/ToolsCenterBlog';
import { FAQSection } from '../components/home/FAQSection';
import type { Product } from '../types/product';
import type { BlogPost } from '../data/blogPosts';
import { SEOHead } from '../components/common/SEOHead';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onSelectProduct: (product: Product) => void;
  onSelectCategory: (categorySlug: string) => void;
  onSelectPost: (post: BlogPost) => void;
  onSearch: (query: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onSelectCategory,
  onSelectPost,
  onSearch
}) => {
  return (
    <div>
      <SEOHead
        title="NORTEX — Herramientas en Monterrey | Soluciones Industriales y Construcción"
        description="NORTEX: Distribución de herramientas profesionales en Monterrey y todo México. Herramientas manuales, eléctricas, industriales y para construcción. Cotizaciones inmediatas y asesoría técnica especializada."
        canonicalPath="/"
      />

      {/* 1. Hero Principal */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Buscador Principal */}
      <SearchSection onSearch={onSearch} />

      {/* 3. Grid de Categorías */}
      <CategoriesGrid onSelectCategory={onSelectCategory} />

      {/* 4. Productos Destacados */}
      <FeaturedProducts
        onSelectProduct={onSelectProduct}
        onNavigateToCatalog={() => onNavigate('/herramientas')}
      />

      {/* 5. Propuesta de Valor (4 Beneficios) */}
      <ValueProposition />

      {/* 6. Sección Monterrey (SEO Local) */}
      <MonterreySection onNavigateToQuote={() => onNavigate('/cotizacion')} />

      {/* 7. Marcas con las que trabajamos */}
      <BrandsSection onNavigateToBrands={() => onNavigate('/marcas')} />

      {/* 8. Soluciones por Industria (10 Sectores) */}
      <IndustriesSection
        onSelectIndustry={(slug) => {
          onNavigate(`/herramientas?industria=${slug}`);
        }}
      />

      {/* 9. Sección Cotización Personalizada */}
      <QuoteSection />

      {/* 10. Centro de Herramientas (Blog) */}
      <ToolsCenterBlog
        onSelectPost={onSelectPost}
        onNavigateToBlog={() => onNavigate('/blog')}
      />

      {/* 11. FAQ */}
      <FAQSection />
    </div>
  );
};
