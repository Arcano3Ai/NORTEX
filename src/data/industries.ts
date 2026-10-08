export interface IndustrySolution {
  id: string;
  slug: string;
  title: string;
  description: string;
  keyTools: string[];
  iconName: string;
}

export const INDUSTRIES: IndustrySolution[] = [
  {
    id: 'ind-construccion',
    slug: 'construccion',
    title: 'Construcción y Obra Civil',
    description: 'Equipamiento rudo para colados, corte de mampostería, alineación láser y demolición controlada.',
    keyTools: ['Rotomartillos SDS', 'Niveles Láser 360°', 'Cortadoras de Concreto', 'Discos Diamantados'],
    iconName: 'Building'
  },
  {
    id: 'ind-industria',
    slug: 'industria',
    title: 'Industria y Manufactura',
    description: 'Herramientas de línea de montaje, neumática de precisión y utillaje continuo para plantas productivas.',
    keyTools: ['Llaves de Impacto 1/2 y 3/4', 'Pistolas de Torque', 'Extractores Hidráulicos', 'Equipos Neumáticos'],
    iconName: 'Factory'
  },
  {
    id: 'ind-mantenimiento',
    slug: 'mantenimiento',
    title: 'Mantenimiento de Planta (MRO)',
    description: 'Kits de intervención rápida para paro de máquinas, diagnóstico térmico y lubricación industrial.',
    keyTools: ['Juegos de Llaves Cr-V', 'Extractores de Baleros', 'Multímetros Digitales', 'Torquímetros'],
    iconName: 'Wrench'
  },
  {
    id: 'ind-talleres',
    slug: 'talleres',
    title: 'Talleres Metalmecánicos',
    description: 'Desbaste de forja, corte de chapa, prensas de banco y herramientas de torneado y fresado.',
    keyTools: ['Esmeriladoras 9" y 4-1/2"', 'Tronzadoras de Banco', 'Limas Industriales', 'Prensas de Ajuste'],
    iconName: 'Cpu'
  },
  {
    id: 'ind-electricidad',
    slug: 'electricidad',
    title: 'Electricidad y Media Tensión',
    description: 'Herramientas con aislamiento 1,000V certificadas, ponchadoras de terminales y comprobadores de tensión.',
    keyTools: ['Pinzas Dieléctricas 1000V', 'Ponchadoras Hidráulicas', 'Probadores de Fase', 'Guías Pasacables'],
    iconName: 'Zap'
  },
  {
    id: 'ind-plomeria',
    slug: 'plomeria',
    title: 'Plomería e Instalaciones Hidrosanitarias',
    description: 'Llaves Stillson forjadas, terrajas para roscar tubos, termofusoras y bombas de prueba hidrostática.',
    keyTools: ['Llaves para Tubo Stillson', 'Terrajas Manuales y Eléctricas', 'Cortatubos Cobre/PPR', 'Termofusoras'],
    iconName: 'Droplet'
  },
  {
    id: 'ind-automotriz',
    slug: 'automotriz',
    title: 'Automotriz y Flotillas',
    description: 'Herramientas para suspensión, rectificación de frenos, dados de impacto profundos y gatos hidráulicos.',
    keyTools: ['Pistolas Neumáticas', 'Juegos de Dados Impacto', 'Gatos de Patín 3T', 'Compresómetros'],
    iconName: 'Truck'
  },
  {
    id: 'ind-carpinteria',
    slug: 'carpinteria',
    title: 'Carpintería y Fabricación en Madera',
    description: 'Sierras ingletadoras con precisión milimétrica, ruteadoras de alta velocidad y prensas sargento.',
    keyTools: ['Sierras de Inglete', 'Routers 2-1/4 HP', 'Lijadoras Orbitales', 'Prensas Rápidas'],
    iconName: 'Hammer'
  },
  {
    id: 'ind-instalacion',
    slug: 'instalacion',
    title: 'Instalación y Cuadrillas de Montaje',
    description: 'Herramienta portátil a batería de alto rendimiento para técnicos de climatización, racks y cancelería.',
    keyTools: ['Rotomartillos a Batería', 'Atornilladores de Impacto', 'Escaleras Dieléctricas', 'Detectores de Muros'],
    iconName: 'Layers'
  },
  {
    id: 'ind-independientes',
    slug: 'profesionales-independientes',
    title: 'Profesionales y Contratistas Independientes',
    description: 'Equipamiento de alto rendimiento con la durabilidad necesaria para respaldar el trabajo diario.',
    keyTools: ['Cajas de Herramientas de Uso Rudo', 'Taladros Percutores', 'Flexómetros con Freno', 'EPP Básico'],
    iconName: 'UserCheck'
  }
];
