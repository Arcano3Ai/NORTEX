import type { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-santul-rotomartillo',
    sku: 'STL-7524',
    model: 'Rotomartillo SDS-Plus 850W Santul',
    name: 'Rotomartillo Electroneumático SDS-Plus 850W Santul®',
    slug: 'rotomartillo-electroneumatico-sds-plus-850w-santul',
    brand: 'Santul®',
    categorySlug: 'herramientas-electricas',
    categoryName: 'Herramientas Eléctricas',
    shortDescription: 'Rotomartillo de 3 funciones (taladro, percusión y cincelado) con energía de impacto de 3.2 Joules y embrague de seguridad mecánica.',
    description: 'Equipo de grado profesional del catálogo oficial Santul® para contratistas y cuadrillas de construcción en Monterrey. Motor con blindaje de inducido contra polvo abrasivo, sistema antivibración en empuñadura trasera y selector de velocidad para perforar losas y concreto armado.',
    images: [
      './images/products/rotomartillo.jpg',
      './images/hero-industrial.jpg'
    ],
    specifications: [
      { label: 'Código de Catálogo', value: '7524' },
      { label: 'Potencia Nominal', value: '850 Watts' },
      { label: 'Energía de Impacto', value: '3.2 Joules' },
      { label: 'Velocidad en Vacío', value: '0 - 1,150 RPM' },
      { label: 'Impactos por Minuto', value: '0 - 4,300 GPM' },
      { label: 'Capacidad en Concreto', value: '28 mm (1-1/8")' },
      { label: 'Tipo de Encastre', value: 'SDS-Plus' },
      { label: 'Alimentación', value: '127V ~ 60Hz' }
    ],
    features: [
      'Embrague de seguridad que protege al operador en caso de atasco de broca',
      'Carcasa de engranes en aleación de magnesio para máxima disipación térmica',
      'Cable de alimentación de uso rudo reforzado con recubrimiento de neopreno',
      'Incluye maletín de transporte de alto impacto y varilla de profundidad'
    ],
    applications: [
      'Perforación para anclajes químicos y mecánicos en concreto',
      'Ranurado y demolición ligera de pisos y muros',
      'Montaje de canalizaciones eléctricas y tubería hidrosanitaria',
      'Instalación de estructuras metálicas en naves industriales'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'prod-santul-esmeriladora',
    sku: 'STL-7515',
    model: 'Esmeriladora 9" 2400W Santul',
    name: 'Esmeriladora Angular Industrial 9" 2,400W Santul®',
    slug: 'esmeriladora-angular-industrial-9-2400w-santul',
    brand: 'Santul®',
    categorySlug: 'herramientas-electricas',
    categoryName: 'Herramientas Eléctricas',
    shortDescription: 'Motor sobredimensionado de 2,400 Watts con bobinados epóxicos, guarda sin llave y sistema de arranque suave.',
    description: 'Máquina de trabajo pesado del catálogo oficial Santul® para paileros, soldadores y herreros de Monterrey. Su diseño ergonómico reduce la fatiga en jornadas extensas de corte de perfiles IPR, placas estructurales y biselado de tubos de conducción.',
    images: [
      './images/products/esmeriladora.jpg',
      './images/cat-construccion.jpg'
    ],
    specifications: [
      { label: 'Código de Catálogo', value: '7515' },
      { label: 'Diámetro de Disco', value: '9" (230 mm)' },
      { label: 'Potencia', value: '2,400 Watts' },
      { label: 'Velocidad', value: '6,500 RPM' },
      { label: 'Eje de Rosca', value: '5/8" - 11 UNC' },
      { label: 'Seguridad', value: 'Guarda sin llave y gatillo con seguro' }
    ],
    features: [
      'Sistema de expulsión de viruta que desvía partículas abrasivas del motor',
      'Carbones de desconexión automática para salvaguardar el conmutador',
      'Mango lateral antivibración orientable en 3 posiciones'
    ],
    applications: [
      'Corte de vigas, canaletas y soleras de acero al carbón',
      'Desbaste de cordones de soldadura pesada',
      'Corte de losas y concreto con discos diamantados Santul'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'prod-santul-llaves-crv',
    sku: 'STL-6630',
    model: 'Juego Llaves Combinadas 16 Pzas Cr-V Santul',
    name: 'Juego de Llaves Combinadas Cromo-Vanadio 16 Piezas Santul®',
    slug: 'juego-llaves-combinadas-cromo-vanadio-16-piezas-santul',
    brand: 'Santul®',
    categorySlug: 'herramientas-manuales',
    categoryName: 'Herramientas Manuales',
    shortDescription: 'Fabricadas en acero Cromo-Vanadio templado con acabado satinado anticorrosión y perfil Maxi-Drive.',
    description: 'Juego de llaves combinadas del catálogo Santul® para mecánicos industriales, técnicos de mantenimiento y montadores. Su boca española curva y corona de 12 puntas permite acceder a tornillería confinada sin redondear las aristas de pernos.',
    images: [
      './images/products/llaves.jpg',
      './images/cat-manuales.jpg'
    ],
    specifications: [
      { label: 'Código de Catálogo', value: '6630' },
      { label: 'Cantidad de Piezas', value: '16 piezas' },
      { label: 'Material', value: 'Acero Cromo-Vanadio forjado' },
      { label: 'Rango de Medidas', value: '1/4" a 1-1/4" o métrico 8-24 mm' },
      { label: 'Norma', value: 'Excede estándares ASME B107.100' }
    ],
    features: [
      'Geometría que transfiere torque en las caras planas del perno',
      'Marcas estampadas en alto relieve para identificación rápida',
      'Incluye estuche enrollable reforzado en lona con ojales'
    ],
    applications: [
      'Mantenimiento preventivo y correctivo de maquinaria de planta',
      'Instalaciones mecánicas generales e hidráulicas',
      'Cuadrillas móviles de servicio en campo'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'prod-plastiforze-carretilla',
    sku: 'PFZ-3410',
    model: 'Carretilla Obra Pesada 5.5 ft³ Plastiforze',
    name: 'Carretilla de Obra Pesada 5.5 ft³ Plastiforze®',
    slug: 'carretilla-obra-pesada-5-5-ft3-plastiforze',
    brand: 'Plastiforze®',
    categorySlug: 'herramientas-construccion',
    categoryName: 'Herramientas para Construcción',
    shortDescription: 'Concha plástica reforzada de alto impacto con bastidor tubular y llanta neumática reforzada para faenas de construcción.',
    description: 'Equipo insignia del catálogo Santul/Plastiforze® para transporte de agregados, revoltura de concreto y mampostería. Resiste impacto severo de grava sin oxidarse ni abollarse como las conchas metálicas tradicionales.',
    images: [
      './images/products/carretilla.jpg',
      './images/cat-construccion.jpg'
    ],
    specifications: [
      { label: 'Código de Catálogo', value: '3410' },
      { label: 'Capacidad de Carga', value: '5.5 ft³ (550 kg)' },
      { label: 'Material de la Concha', value: 'Polietileno de alta densidad reforzado' },
      { label: 'Bastidor', value: 'Tubular de acero cédula con pintura electrostática' },
      { label: 'Tipo de Llanta', value: 'Neumática 16" uso rudo con rin de acero' }
    ],
    features: [
      'Soportes delanteros reforzados para vaciado frontal seguro',
      'Concha inoxidable libre de corrosión por humedad o cemento',
      'Baleros sellados en eje para desplazamiento suave'
    ],
    applications: [
      'Transporte de mortero, concreto y tabiques en obra civil',
      'Manejo de materiales en bodegas y parques industriales',
      'Jardinería profesional y nivelación de terrenos'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'prod-plastiforze-lona-uso-rudo',
    sku: 'PFZ-3120',
    model: 'Lona Uso Rudo 6x9m Reforzada Plastiforze',
    name: 'Lona Uso Rudo con Ojillos Metálicos 6x9 Metros Plastiforze®',
    slug: 'lona-uso-rudo-reforzada-6x9m-plastiforze',
    brand: 'Plastiforze®',
    categorySlug: 'herramientas-construccion',
    categoryName: 'Herramientas para Construcción',
    shortDescription: 'Tejido de polietileno de alta densidad 14x14 hilos por pulgada con laminado doble impermeable y esquinas reforzadas.',
    description: 'Solución de protección de intemperie del catálogo Santul/Plastiforze® para protección de materiales, agregados de construcción, maquinaria en obra civil y remolques de carga pesada.',
    images: [
      './images/products/lona.jpg',
      './images/cat-construccion.jpg'
    ],
    specifications: [
      { label: 'Código de Catálogo', value: '3120' },
      { label: 'Dimensiones', value: '6 x 9 Metros (aprox. 54 m²)' },
      { label: 'Gramaje', value: '180 g/m² (Uso extra rudo)' },
      { label: 'Ojillos', value: 'Aluminio inoxidable cada 1 metro' },
      { label: 'Protección', value: 'Tratamiento UV contra degradación solar' }
    ],
    features: [
      'Costuras y bastillas termo-selladas con cuerda perimetral reforzada',
      '100% impermeable a lluvia, rocío y polvo abrasivo',
      'Esquinas moldeadas con inserto de plástico para tensado firme'
    ],
    applications: [
      'Protección de cemento, varilla y maquinaria en obra abierta',
      'Cubierta para transporte de carga en plataformas y cajas secas',
      'Campamentos de obra y techados provisionales industriales'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'prod-keer-juego-dados-aut',
    sku: 'KEE-6840',
    model: 'Juego Dados y Matraca 1/2" 24 Pzas Keer',
    name: 'Juego de Dados y Matraca 1/2" 24 Piezas Keer® / Santul',
    slug: 'juego-dados-matraca-media-24-piezas-keer',
    brand: 'Keer®',
    categorySlug: 'herramientas-manuales',
    categoryName: 'Herramientas Manuales',
    shortDescription: 'Acero Cromo-Vanadio forjado con matraca reversible de 72 dientes y botón de desacople rápido. Estuche de uso pesado.',
    description: 'Set mecánico profesional del catálogo Santul/Keer® para talleres de mantenimiento automotriz, flotillas diésel e instalaciones de maquinaria pesada.',
    images: [
      './images/products/dados.jpg',
      './images/cat-manuales.jpg'
    ],
    specifications: [
      { label: 'Código de Catálogo', value: '6840' },
      { label: 'Mando', value: '1/2" (12.7 mm)' },
      { label: 'Mecanismo Matraca', value: '72 Dientes (Ángulo de recuperación de 5°)' },
      { label: 'Piezas', value: '24 piezas (dados 10mm a 32mm + extensiones + nudo)' },
      { label: 'Acabado', value: 'Cromo espejo pulido anticorrosión' }
    ],
    features: [
      'Marcaje láser y troquelado de alta visibilidad',
      'Extensión de 5" y 10" con mango articulado tipo barra corrediza',
      'Maletín de polietileno con bisagras metálicas reforzadas'
    ],
    applications: [
      'Reparación y mantenimiento de transporte de carga y flotillas',
      'Apriete estructural de pernos de alta resistencia',
      'Servicio electromecánico en planta y líneas de producción'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'prod-sanelec-reflector-led',
    sku: 'SNL-1450',
    model: 'Reflector LED Industrial 100W Sanelec',
    name: 'Reflector LED Industrial 100W 6,500K Uso Rudo Sanelec®',
    slug: 'reflector-led-industrial-100w-sanelec',
    brand: 'Sanelec®',
    categorySlug: 'herramientas-industriales',
    categoryName: 'Herramientas Industriales',
    shortDescription: 'Cuerpo de aluminio inyectado para alta disipación térmica, protección IP65 para intemperie y 10,000 lúmenes de flujo.',
    description: 'Luminaria de grado industrial del catálogo Santul/Sanelec® para patios de maniobras, naves de almacenaje, accesos de planta y obras de construcción nocturnas.',
    images: [
      './images/products/reflector.jpg',
      './images/cat-seguridad.jpg'
    ],
    specifications: [
      { label: 'Código de Catálogo', value: '1450' },
      { label: 'Potencia', value: '100 Watts (Equivale a 1,000W halógeno)' },
      { label: 'Flujo Luminoso', value: '10,000 Lúmenes' },
      { label: 'Temperatura de Color', value: '6,500K (Luz Blanca Fría)' },
      { label: 'Grado de Protección', value: 'IP65 (Resistente a chorros de agua y polvo)' },
      { label: 'Voltaje de Operación', value: '100 - 240 V~ Multivoltaje' }
    ],
    features: [
      'Driver integrado de alta eficiencia con protección contra picos de voltaje',
      'Vidrio templado anti-impacto de 4mm',
      'Soporte metálico orientable a 180° para montaje en poste o muro'
    ],
    applications: [
      'Iluminación perimetral de bodegas y naves en parques industriales',
      'Patios de carga y descarga de trailers',
      'Iluminación de frentes de obra en turnos vespertinos y nocturnos'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'prod-sanplom-bomba-periferica',
    sku: 'SPL-7110',
    model: 'Bomba Periférica 1/2 HP Sanplom',
    name: 'Bomba Periférica de Agua 1/2 HP Alta Presión Sanplom®',
    slug: 'bomba-periferica-agua-media-hp-sanplom',
    brand: 'Sanplom®',
    categorySlug: 'herramientas-industriales',
    categoryName: 'Herramientas Industriales',
    shortDescription: 'Impulsor de latón antibloqueo, bobinado de cobre de alta conductividad y altura máxima de bombeo de hasta 40 metros.',
    description: 'Equipo de bombeo del catálogo Santul/Sanplom® para presurización y suministro de agua limpia en instalaciones hidrosanitarias, tinacos, cisternas y talleres de trabajo.',
    images: [
      './images/products/bomba.jpg',
      './images/hero-industrial.jpg'
    ],
    specifications: [
      { label: 'Código de Catálogo', value: '7110' },
      { label: 'Potencia', value: '1/2 HP (370 Watts)' },
      { label: 'Altura Máxima', value: '40 metros' },
      { label: 'Caudal Máximo', value: '40 Litros/minuto' },
      { label: 'Diámetro Succión/Descarga', value: '1" NPT hembra' },
      { label: 'Impulsor', value: 'Latón de alta resistencia' }
    ],
    features: [
      'Protector térmico integrado en motor contra sobrecalentamiento',
      'Tratamiento cataforético antioxidante en cámara de bombeo',
      'Bajo consumo eléctrico y operación silenciosa'
    ],
    applications: [
      'Elevación de agua hacia tinacos y tanques elevados en naves',
      'Alimentación de sistemas hidroneumáticos de presión constante',
      'Riego de áreas verdes y abastecimiento general'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'prod-santul-pinzas-chofer',
    sku: 'STL-8410',
    model: 'Juego de Pinzas Profesionales 3 Pzas Santul',
    name: 'Juego de Pinzas Profesionales de Aislamiento 3 Piezas Santul®',
    slug: 'juego-pinzas-profesionales-3-piezas-santul',
    brand: 'Santul®',
    categorySlug: 'herramientas-manuales',
    categoryName: 'Herramientas Manuales',
    shortDescription: 'Fabricadas en acero carbono forjado con mordazas templadas por inducción y mangos ergonómicos con topes antideslizantes.',
    description: 'Trío indispensable del catálogo Santul®: Pinza de electricista 8", Pinza de punta y corte 6", y Pinza de chofer 8". Ideal para cuadrillas de mantenimiento industrial y montaje.',
    images: [
      './images/products/pinzas.jpg',
      './images/cat-manuales.jpg'
    ],
    specifications: [
      { label: 'Código de Catálogo', value: '8410' },
      { label: 'Contenido', value: '3 piezas (Electricista 8", Punta 6", Chofer 8")' },
      { label: 'Material', value: 'Acero al carbono forjado' },
      { label: 'Filo', value: 'Templado por inducción de alta frecuencia' },
      { label: 'Mangos', value: 'Vinil antiderrapante doble inyección' }
    ],
    features: [
      'Filos rectificados para corte preciso de cables de cobre y aluminio',
      'Mordazas con maquinado diamantado para agarre firme',
      'Acabado pulido brillante con barniz protector contra óxido'
    ],
    applications: [
      'Instalaciones eléctricas y corte de conductores',
      'Sujeción de tornillería y cables en tableros',
      'Mantenimiento general en cuadrillas de obra'
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'prod-sanelec-centro-carga',
    sku: 'SNL-1280',
    model: 'Centro de Carga 4 Circuitos Sanelec',
    name: 'Centro de Carga Bifásico 4 Circuitos Sobreponer Sanelec®',
    slug: 'centro-de-carga-bifasico-4-circuitos-sanelec',
    brand: 'Sanelec®',
    categorySlug: 'herramientas-industriales',
    categoryName: 'Herramientas Industriales',
    shortDescription: 'Gabinete metálico con pintura horneada, barras de cobre electrolítico y compatibilidad con pastillas termomagnéticas estándar.',
    description: 'Componente eléctrico certificado del catálogo Sanelec® para distribución y protección de circuitos en talleres, locales comerciales e instalaciones industriales ligeras.',
    images: [
      './images/products/centro_carga.jpg',
      './images/cat-seguridad.jpg'
    ],
    specifications: [
      { label: 'Código de Catálogo', value: '1280' },
      { label: 'Circuitos', value: '4 Espacios (Bifásico)' },
      { label: 'Tensión Máxima', value: '120/240 V~' },
      { label: 'Corriente Nominal', value: '60 A' },
      { label: 'Gabinete', value: 'Lámina de acero rolada en frío' }
    ],
    features: [
      'Entradas pre-cortadas (knockouts) para canalización en 1/2" y 3/4"',
      'Fácil montaje en muro con terminales de neutro y tierra independientes',
      'Certificación NOM vigente'
    ],
    applications: [
      'Protección de circuitos de maquinaria en talleres mecánicos',
      'Alimentación de compresores y herramientas estacionarias',
      'Tableros secundarios en bodegas y naves'
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'prod-sanplom-stillson',
    sku: 'SPL-6710',
    model: 'Llave Stillson 18" Uso Pesado Sanplom',
    name: 'Llave para Tubo Stillson 18" Hierro Nodular Sanplom®',
    slug: 'llave-para-tubo-stillson-18-pulgadas-sanplom',
    brand: 'Sanplom®',
    categorySlug: 'herramientas-manuales',
    categoryName: 'Herramientas Manuales',
    shortDescription: 'Cuerpo de hierro nodular forjado con mordazas de acero templado por inducción para sujeción firme de tubería de gas y agua.',
    description: 'Herramienta de apriete indispensable del catálogo Sanplom® para plomeros e instaladores industriales. Permite trabajar tuberías galvanizadas, de cobre y cédula 40 sin resbalar.',
    images: [
      './images/products/stillson.jpg',
      './images/cat-manuales.jpg'
    ],
    specifications: [
      { label: 'Código de Catálogo', value: '6710' },
      { label: 'Longitud', value: '18" (450 mm)' },
      { label: 'Apertura Máxima', value: '2-1/2" (63 mm)' },
      { label: 'Material del Cuerpo', value: 'Hierro nodular de alta resistencia' },
      { label: 'Mordazas', value: 'Acero aleado forjado y estriado profundo' }
    ],
    features: [
      'Tuerca moleteada de avance rápido con resorte de recuperación',
      'Perfil con viga en I para máximo brazo de palanca sin flexión',
      'Acabado con pintura horneada anticorrosión'
    ],
    applications: [
      'Instalaciones de gas LP y natural en plantas y comercios',
      'Mantenimiento de tuberías hidroneumáticas de vapor y agua',
      'Apriete y desmonte de uniones roscadas NPT'
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'prod-santul-casco',
    sku: 'STL-9110',
    model: 'Casco de Protección Dieléctrico Tipo I Clase E Santul',
    name: 'Casco de Seguridad Industrial Tipo I Clase E Santul®',
    slug: 'casco-seguridad-industrial-clase-e-santul',
    brand: 'Santul®',
    categorySlug: 'equipo-seguridad',
    categoryName: 'Seguridad y EPP',
    shortDescription: 'Fabricado en polietileno de alto impacto con suspensión de 4 puntos y ajuste de matraca. Protección dieléctrica hasta 20,000V.',
    description: 'Equipo de protección normado del catálogo Santul® conforme a NOM-115-STPS y ANSI Z89.1. Protege la cabeza contra impacto de objetos en caída libre y descargas eléctricas.',
    images: [
      './images/products/casco.jpg',
      './images/hero-industrial.jpg'
    ],
    specifications: [
      { label: 'Código de Catálogo', value: '9110' },
      { label: 'Normativa', value: 'NOM-115-STPS-2009 / ANSI Z89.1' },
      { label: 'Clasificación', value: 'Tipo I, Clase E (Dieléctrico 20,000V)' },
      { label: 'Suspensión', value: '4 puntos de apoyo con almohadilla frontal' },
      { label: 'Ajuste', value: 'Perilla de matraca ergonómica' }
    ],
    features: [
      'Ranuras laterales universales para orejeras y caretas de soldador',
      'Banda absorbente de sudor frontal lavable y reemplazable',
      'Diseño aerodinámico con visera frontal corta para amplio campo visual'
    ],
    applications: [
      'Obras de construcción civil y montaje de estructuras',
      'Líneas de subestación eléctrica y cableado en plantas',
      'Supervisión y auditorías en parques industriales'
    ],
    featured: true,
    inStock: true
  }
];
