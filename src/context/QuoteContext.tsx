import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, QuoteItem } from '../types/product';

interface QuoteContextType {
  items: QuoteItem[];
  addItem: (product: Product, quantity?: number) => void;
  addCatalogCustomItem: (codeOrDescription: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearQuote: () => void;
  totalItemsCount: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  generateWhatsAppLink: (customerName?: string, company?: string) => string;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

const STORAGE_KEY = 'nortex_quote_items_v1';

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<QuoteItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignorar error de cuota si ocurre
    }
  }, [items]);

  const addItem = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsDrawerOpen(true);
  };

  const addCatalogCustomItem = (codeOrDescription: string, quantity = 1) => {
    const trimmed = codeOrDescription.trim();
    if (!trimmed) return;
    const customProd: Product = {
      id: 'custom-' + Date.now(),
      sku: trimmed.toUpperCase(),
      model: 'Partida Catálogo Santul',
      name: `Partida Catálogo Santul: ${trimmed}`,
      slug: 'catalogo-' + Date.now(),
      brand: 'Santul®',
      categorySlug: 'herramientas-industriales',
      categoryName: 'Catálogo Santul',
      shortDescription: `Partida solicitada del catálogo oficial Santul: ${trimmed}`,
      description: `Partida solicitada directamente del catálogo oficial Santul: ${trimmed}`,
      images: ['./images/hero-industrial.jpg'],
      specifications: [{ label: 'Código / Referencia', value: trimmed }],
      features: ['Partida especial del catálogo Santul'],
      applications: ['Reventa y suministro directo'],
      inStock: true
    };
    addItem(customProd, quantity);
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearQuote = () => {
    setItems([]);
  };

  const totalItemsCount = items.reduce((acc, curr) => acc + curr.quantity, 0);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  const generateWhatsAppLink = (customerName?: string, company?: string) => {
    // Número placeholder listo para ser reemplazado por el real
    const phonePlaceholder = '528100000000'; // Monterrey (81) placeholder
    
    let message = 'Hola, NORTEX. Me interesa cotizar herramientas profesionales.\n';
    
    if (customerName) {
      message += `*Contacto:* ${customerName}\n`;
    }
    if (company) {
      message += `*Empresa:* ${company}\n`;
    }

    if (items.length > 0) {
      message += '\n*Lista de herramientas solicitadas:*\n';
      items.forEach((item, index) => {
        message += `${index + 1}. [${item.product.sku}] ${item.product.name} — Cantidad: ${item.quantity} pza(s)\n`;
      });
      message += '\n¿Me podrían compartir disponibilidad y cotización formal? Gracias.';
    } else {
      message += '\n¿Podrían brindarme información y catálogo para cotizar herramientas?';
    }

    return `https://wa.me/${phonePlaceholder}?text=${encodeURIComponent(message)}`;
  };

  return (
    <QuoteContext.Provider
      value={{
        items,
        addItem,
        addCatalogCustomItem,
        removeItem,
        updateQuantity,
        clearQuote,
        totalItemsCount,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        toggleDrawer,
        generateWhatsAppLink
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote debe usarse dentro de QuoteProvider');
  }
  return context;
};
