export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'cotizacion' | 'cobertura' | 'productos';
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: '¿Dónde comprar herramientas en Monterrey?',
    answer: 'En NORTEX atendemos solicitudes de herramienta profesional para empresas, talleres y contratistas en toda el área metropolitana de Monterrey y municipios aledaños (San Nicolás, Apodaca, Guadalupe, Escobedo, Santa Catarina, San Pedro y García). Puedes consultar nuestro catálogo digital y solicitar tu cotización directa por WhatsApp o formulario web.',
    category: 'cobertura'
  },
  {
    id: 'faq-2',
    question: '¿Qué tipos de herramientas manejan?',
    answer: 'Distribuimos herramientas manuales de cromo-vanadio, herramientas eléctricas de alta potencia (rotomartillos, esmeriladoras, sierras), equipos especializados para obra civil y construcción, herramientas neumáticas e industriales de torque, consumibles de corte y desbaste, equipo de protección personal (EPP normado) e instrumentos de medición de precisión.',
    category: 'productos'
  },
  {
    id: 'faq-3',
    question: '¿Realizan cotizaciones para empresas?',
    answer: 'Sí. Contamos con atención especializada para empresas, constructoras, plantas industriales y áreas de compras (MRO). Emitimos cotizaciones formales desglosadas por partidas con fichas técnicas, tiempo estimado de suministro y condiciones comerciales acordes al volumen solicitado.',
    category: 'cotizacion'
  },
  {
    id: 'faq-4',
    question: '¿Venden herramientas industriales de uso continuo?',
    answer: 'Totalmente. Nuestras líneas industriales están pensadas para soportar ciclos de trabajo pesado y turnos continuos en talleres de maquinado, plantas metalmecánicas y faenas de construcción, superando los requerimientos de la herramienta doméstica comercial.',
    category: 'productos'
  },
  {
    id: 'faq-5',
    question: '¿Puedo solicitar una cotización por WhatsApp?',
    answer: 'Sí, es uno de nuestros canales más ágiles. Puedes dar clic en el botón de WhatsApp en cualquier momento, o armar tu lista de herramientas desde este sitio y transferir la cotización con el desglose exacto de modelos y cantidades directamente al chat de atención comercial.',
    category: 'cotizacion'
  },
  {
    id: 'faq-6',
    question: '¿Realizan envíos a otras ciudades de México?',
    answer: '[INFORMACIÓN DE POLÍTICA DE ENVÍOS: Confirmar cobertura logística nacional y paqueterías autorizadas]. Contamos con capacidad de atención para proyectos en todo México; el costo y tiempo de entrega se especifican en cada cotización según el destino y volumen de la carga.',
    category: 'cobertura'
  },
  {
    id: 'faq-7',
    question: '¿Trabajan con empresas y profesionales independientes?',
    answer: 'Atendemos tanto a corporativos y constructoras que requieren abastecimiento programado, como a técnicos, paileros, contratistas y profesionales independientes que buscan herramientas durables con soporte y asesoría especializada.',
    category: 'general'
  }
];
