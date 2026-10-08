import type { Category } from '../types/category';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-manuales',
    slug: 'herramientas-manuales',
    name: 'Herramientas Manuales',
    shortDescription: 'Desarmadores, pinzas de fuerza, llaves de combinación, dados de impacto y martillos de forja.',
    longDescription: 'Herramientas manuales fabricadas con aleaciones de cromo-vanadio y tratamientos térmicos de alta exigencia mecánica. Diseñadas para resistir torsión extrema, uso continuo en talleres y faenas de montaje industrial en Monterrey.',
    iconName: 'Wrench',
    image: '/images/cat-manuales.jpg',
    itemCount: 42,
    subcategories: ['Llaves y Dados', 'Pinzas y Alicates', 'Desarmadores Industriales', 'Martillos y Mazos', 'Arcos y Seguetas'],
    featured: true
  },
  {
    id: 'cat-electricas',
    slug: 'herramientas-electricas',
    name: 'Herramientas Eléctricas',
    shortDescription: 'Taladros, rotomartillos SDS, esmeriladoras angulares, sierras circulares y tronzadoras.',
    longDescription: 'Potencia, ergonomía y motores sin escobillas (brushless) diseñados para rendir en turnos de trabajo pesados. Equipos de alta eficiencia para perforación, demolición, corte y desbaste.',
    iconName: 'Zap',
    image: '/images/hero-industrial.jpg',
    itemCount: 38,
    subcategories: ['Rotomartillos y Taladros', 'Esmeriladoras Angulares', 'Sierras y Tronzadoras', 'Lijadoras y Pulidoras', 'Pistolas de Calor'],
    featured: true
  },
  {
    id: 'cat-construccion',
    slug: 'herramientas-construccion',
    name: 'Herramientas para Construcción',
    shortDescription: 'Equipamiento y herramientas pesadas para obra civil, colado, corte de concreto y nivelación.',
    longDescription: 'Equipos indispensables para contratistas y constructoras del área metropolitana de Monterrey. Robustez garantizada para resistir vibración, polvo de obra y jornadas de colado intensivo.',
    iconName: 'HardHat',
    image: '/images/cat-construccion.jpg',
    itemCount: 29,
    subcategories: ['Niveles y Alineación Láser', 'Corte de Concreto y Mampostería', 'Allanadoras y Vibradores', 'Carretillas y Palas Industriales'],
    featured: true
  },
  {
    id: 'cat-industriales',
    slug: 'herramientas-industriales',
    name: 'Herramientas Industriales',
    shortDescription: 'Soluciones neumáticas, torquímetros de precisión y utillaje para mantenimiento de planta.',
    longDescription: 'Suministro técnico para líneas de producción, manufactura automotriz y metalmecánica en parques industriales de Apodaca, San Nicolás y Santa Catarina.',
    iconName: 'Factory',
    image: '/images/hero-industrial.jpg',
    itemCount: 34,
    subcategories: ['Herramientas Neumáticas', 'Control de Torque y Calibración', 'Extractores y Prensas Hidráulicas', 'Polipastos y Carga'],
    featured: true
  },
  {
    id: 'cat-accesorios',
    slug: 'accesorios',
    name: 'Accesorios y Consumibles',
    shortDescription: 'Discos de corte abrasivo y diamante, brocas de carburo, puntas de impacto y seguetas.',
    longDescription: 'Consumibles de alto rendimiento para maximizar la vida útil y la precisión de sus herramientas eléctricas e industriales.',
    iconName: 'Layers',
    image: '/images/cat-manuales.jpg',
    itemCount: 65,
    subcategories: ['Discos de Corte y Desbaste', 'Brocas y Cinceles SDS', 'Puntas de Impacto', 'Cardas y Lijas'],
    featured: false
  },
  {
    id: 'cat-seguridad',
    slug: 'equipo-seguridad',
    name: 'Seguridad y EPP',
    shortDescription: 'Equipo de protección personal normado, calzado de seguridad, guantes y protección auditiva.',
    longDescription: 'Protección integral conforme a normativas de la STPS y estándares ANSI para resguardar la integridad del personal operativo.',
    iconName: 'ShieldCheck',
    image: '/images/cat-seguridad.jpg',
    itemCount: 24,
    subcategories: ['Protección Ocular y Facial', 'Guantes de Maniobra y Soldador', 'Calzado de Seguridad Dieléctrico', 'Protección Respiratoria y Auditiva'],
    featured: true
  },
  {
    id: 'cat-medicion',
    slug: 'instrumentos-medicion',
    name: 'Medición y Precisión',
    shortDescription: 'Flexómetros de uso rudo, niveles de burbuja y láser, calibradores vernier y multímetros.',
    longDescription: 'Instrumentos certificados para asegurar tolerancia milimétrica en talleres de maquinado, inspección de calidad e instalaciones eléctricas.',
    iconName: 'Ruler',
    image: '/images/cat-seguridad.jpg',
    itemCount: 19,
    subcategories: ['Flexómetros y Cintas Métricas', 'Niveles Láser y Ópticos', 'Calibradores y Micrómetros', 'Multímetros y Probadores'],
    featured: false
  },
  {
    id: 'cat-ferreteria',
    slug: 'ferreteria',
    name: 'Ferretería Especializada',
    shortDescription: 'Fijaciones de alta resistencia, tornillería estructural, selladores químicos y candados de seguridad.',
    longDescription: 'Suministros complementarios de ferretería pesada para montaje estructural y fijación en concreto y acero.',
    iconName: 'Package',
    image: '/images/cat-manuales.jpg',
    itemCount: 52,
    subcategories: ['Anclajes y Taquetes Químicos', 'Tornillería Grado 5 y 8', 'Selladores y Adhesivos Epóxicos', 'Seguridad y Candados LOTO'],
    featured: false
  }
];
