export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  date: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'diferencia-entre-taladro-y-rotomartillo',
    title: 'Diferencia entre taladro convencional y rotomartillo: ¿Cuál necesita tu obra?',
    category: 'Guías de Selección',
    readTime: '4 min de lectura',
    date: 'Octubre 2026',
    excerpt: 'Comprende el mecanismo de impacto mecánico vs. electroneumático y evita quemar motores en perforaciones de concreto y mampostería pesada.',
    content: 'En trabajos de obra y mantenimiento en Monterrey, una duda recurrente entre cuadrillas es cuándo utilizar un taladro percutor versus un rotomartillo SDS. Mientras el taladro percutor utiliza dos discos estriados que chocan para generar vibración de alta frecuencia y baja energía (adecuada para ladrillo hueco o yeso), el rotomartillo electroneumático comprime aire mediante un pistón interno para lanzar un percutor con fuerza de impacto real en Joules. Para perforaciones en concreto armado o piedra mayores a 1/2 pulgada, el rotomartillo SDS reduce el esfuerzo del operador hasta un 70% y prolonga la vida útil de los insertos de carburo.'
  },
  {
    id: 'post-2',
    slug: 'herramientas-indispensables-para-construccion',
    title: 'Herramientas indispensables para contratistas de construcción en Monterrey',
    category: 'Construcción Civil',
    readTime: '5 min de lectura',
    date: 'Octubre 2026',
    excerpt: 'El equipamiento base para asegurar avance en tiempo y resistir las jornadas de calor y esfuerzo en el norte de México.',
    content: 'La construcción en el área metropolitana de Monterrey impone condiciones de trabajo rigurosas: altas temperaturas diurnas, agregados pesados y especificaciones estructurales de alta sismicidad o viento. Una cuadrilla profesional debe contar como mínimo con: rotomartillos electroneumáticos SDS con embrague mecánico, esmeriladoras de 9 pulgadas con sistema de protección térmica para corte de varilla y perfiles IPR, niveles láser autonivelantes de haz verde con visibilidad diurna y herramientas de trazado y anclaje con certificación de torque.'
  },
  {
    id: 'post-3',
    slug: 'como-elegir-una-herramienta-electrica',
    title: 'Cómo elegir una herramienta eléctrica: Criterios para uso profesional vs. doméstico',
    category: 'Asesoría Técnica',
    readTime: '6 min de lectura',
    date: 'Octubre 2026',
    excerpt: 'Potencia nominal, ciclo de trabajo, tipo de motor (con carbones vs. brushless) y garantías para empresas.',
    content: 'Adquirir una herramienta basándose exclusivamente en el precio o en el amperaje nominal suele resultar en paros imprevistos. En entornos industriales y talleres de maquinado, los factores determinantes son el ciclo de trabajo (minutos de operación continua permitida por ciclo), la presencia de motores sin escobillas (brushless) que entregan mayor par motriz con menor calentamiento, y la disponibilidad local de consumibles y refacciones críticas.'
  },
  {
    id: 'post-4',
    slug: 'herramientas-basicas-para-mantenimiento-industrial',
    title: 'Herramientas básicas para cuadrillas de mantenimiento industrial (MRO)',
    category: 'Mantenimiento Industrial',
    readTime: '5 min de lectura',
    date: 'Octubre 2026',
    excerpt: 'Optimiza los tiempos de respuesta en paros de línea y asegura aprietes confiables en bridas, motores y reductores.',
    content: 'En las plantas industriales de Apodaca y San Nicolás, cada minuto de paro no programado representa mermas económicas cuantiosas. El kit indispensable de un técnico de mantenimiento MRO debe incluir torquímetros calibrados para evitar la deformación de carcasas de aluminio, extractores mecánicos de 2 y 3 quijadas templados para baleros, llaves de combinación en cromo-vanadio de perfil reforzado e instrumentos de medición digital con protección dieléctrica.'
  }
];
