export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  sku: string;
  model: string;
  name: string;
  slug: string;
  brand: string;
  categorySlug: string;
  categoryName: string;
  shortDescription: string;
  description: string;
  images: string[];
  specifications: ProductSpecification[];
  applications: string[];
  features: string[];
  featured?: boolean;
  inStock?: boolean;
  price?: number; // Para preparación de e-commerce futuro
  currency?: string;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
  notes?: string;
}

export interface QuoteRequestForm {
  name: string;
  company?: string;
  phone: string;
  whatsapp: string;
  email: string;
  notes: string;
  items: QuoteItem[];
}
