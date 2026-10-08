import type { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    sku: 'NTX-RT850',
    model: 'HD-850 SDS-Plus',
    name: 'Rotomartillo Electroneumático SDS-Plus 850W Heavy Duty',
    slug: 'rotomartillo-electroneumatico-sds-plus-850w',
    brand: '[MARCA INDUSTRIAL A]',
    categorySlug: 'herramientas-electricas',
    categoryName: 'Herramientas Eléctricas',
    shortDescription: 'Rotomartillo de 3 funciones (perforación, percusión y cincelado) con embrague de seguridad mecánica para obra pesada.',
    description: 'Diseñado para contratistas y cuadrillas de construcción en Monterrey que requieren rendimiento ininterrumpido en perforación sobre concreto armado, losas y muros de block. Cuenta con motor sobredimensionado con blindaje de inducido contra polvo abrasivo, sistema antivibración en empuñadura trasera y dial selector de velocidad constante bajo carga.',
    images: [
      './images/hero-industrial.jpg',
      './images/cat-construccion.jpg'
    ],
    specifications: [
      { label: 'Potencia Nominal', value: '850 Watts' },
      { label: 'Energía de Impacto', value: '3.2 Joules' },
      { label: 'Velocidad en Vacío', value: '0 - 1,150 RPM' },
      { label: 'Impactos por Minuto', value: '0 - 4,300 GPM' },
      { label: 'Capacidad en Concreto', value: '28 mm (1-1/8")' },
      { label: 'Tipo de Encastre', value: 'SDS-Plus' },
      { label: 'Peso del Equipo', value: '3.4 kg' },
      { label: 'Alimentación', value: '127V / 60Hz' }
    ],
    features: [
      'Embrague de seguridad que protege al operador en caso de atasco de broca',
      'Carcasa de engranes en aleación de magnesio para máxima disipación térmica',
      'Cable de alimentación de uso rudo reforzado de 4 metros con recubrimiento de neopreno',
      'Incluye maletín de transporte metálico de alto impacto y varilla de profundidad'
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
    id: 'prod-002',
    sku: 'NTX-IW750',
    model: 'TW-750 1/2 Air Max',
    name: 'Llave de Impacto Neumática Industrial 1/2" Twin Hammer',
    slug: 'llave-de-impacto-neumatica-industrial-1-2-twin-hammer',
    brand: '[MARCA INDUSTRIAL A]',
    categorySlug: 'herramientas-industriales',
    categoryName: 'Herramientas Industriales',
    shortDescription: 'Mecanismo de doble martillo (Twin Hammer) con torque máximo de 950 ft-lb para líneas de ensamble y talleres mecánicos.',
    description: 'Solución neumática de alto torque con cuerpo de aleación ligera compuesta y gatillo progresivo para desapriete instantáneo de birlos corroídos y tornillería de alta graduación. Diseñada para operar en líneas de producción continua con bajo consumo de aire y escape posterior orientado.',
    images: [
      './images/hero-industrial.jpg',
      '/images/cat-manuales.jpg'
    ],
    specifications: [
      { label: 'Encastre Cuadro', value: '1/2 Pulgada' },
      { label: 'Torque Máximo de Desapriete', value: '950 ft-lb (1,288 Nm)' },
      { label: 'Torque de Trabajo', value: '50 - 650 ft-lb' },
      { label: 'Velocidad Libre', value: '8,000 RPM' },
      { label: 'Presión de Operación', value: '90 PSI (6.2 Bar)' },
      { label: 'Consumo de Aire Promedio', value: '4.8 CFM' },
      { label: 'Mecanismo de Impacto', value: 'Twin Hammer de Acero Templado' }
    ],
    features: [
      'Regulador de potencia con 3 posiciones de apriete y reversa a potencia completa',
      'Rotor montado en rodamientos sellados contra partículas de humedad',
      'Mango ergonómico con recubrimiento de polímero aislante contra vibración y frío'
    ],
    applications: [
      'Talleres de mantenimiento de tractocamiones y equipo pesado',
      'Montaje en plantas ensambladoras automotrices',
      'Mantenimiento de prensas y troqueladoras en parques industriales'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'prod-003',
    sku: 'NTX-SET32',
    model: 'TM-32 PRO Cr-V',
    name: 'Juego de Llaves Combinadas Métricas y Fraccionales 32 Piezas',
    slug: 'juego-llaves-combinadas-metricas-fraccionales-32-piezas',
    brand: '[MARCA MECÁNICA B]',
    categorySlug: 'herramientas-manuales',
    categoryName: 'Herramientas Manuales',
    shortDescription: 'Fabricadas en forja de Cromo-Vanadio templado con acabado satinado anticorrosión y perfil Maxi-Drive.',
    description: 'Juego completo de llaves combinadas para mecánicos industriales, técnicos de mantenimiento y montadores. Su perfil curvo de 15° en la boca española y corona de 12 puntas permite acceder a tornillería confinada sin redondear las aristas de cabezas hexagonales.',
    images: [
      './images/cat-manuales.jpg',
      '/images/hero-industrial.jpg'
    ],
    specifications: [
      { label: 'Cantidad de Piezas', value: '32 piezas' },
      { label: 'Material', value: 'Acero Cromo-Vanadio 6140 forjado' },
      { label: 'Rango Métrico', value: '6 mm a 24 mm' },
      { label: 'Rango Fraccional', value: '1/4" a 1-1/4"' },
      { label: 'Norma de Fabricación', value: 'Excede ASME B107.100 y DIN 3113' },
      { label: 'Acabado Superficial', value: 'Cromo satinado anti-resbalante' }
    ],
    features: [
      'Geometría optimizada para transferir 20% más torque en las caras planas del perno',
      'Marcas estampadas en alto relieve para identificación rápida en el cajón de herramientas',
      'Incluye estuche enrollable reforzado en lona balística con ojales para colgar'
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
    id: 'prod-004',
    sku: 'NTX-LZ360',
    model: 'PL-360 Green Beam',
    name: 'Nivel Láser Autonivelante de 3 Líneas 360° Haz Verde Profesional',
    slug: 'nivel-laser-autonivelante-3-lineas-360-haz-verde',
    brand: '[MARCA PRECISIÓN C]',
    categorySlug: 'instrumentos-medicion',
    categoryName: 'Medición y Precisión',
    shortDescription: 'Proyección 360° en 3 ejes ortogonales con diodo de haz verde de visibilidad extendida hasta 60 metros.',
    description: 'Instrumento indispensable para nivelación de muros tabla-roca, pisos epóxicos, tirantes de plafón y cimentaciones. El haz de luz verde proporciona hasta 4 veces mayor visibilidad que los lásers rojos convencionales bajo luz diurna intensa en naves industriales.',
    images: [
      './images/cat-construccion.jpg',
      './images/cat-seguridad.jpg'
    ],
    specifications: [
      { label: 'Tipo de Diodo', value: 'Haz Verde 515 nm, Clase II' },
      { label: 'Precisión', value: '± 0.2 mm / metro' },
      { label: 'Rango Autonivelante', value: '± 4 Grados' },
      { label: 'Alcance Operativo', value: '35 m (hasta 70 m con receptor pulsado)' },
      { label: 'Protección Ambiental', value: 'IP65 (Resistente a agua y polvo de obra)' },
      { label: 'Alimentación', value: 'Batería Li-Ion recargable 5200 mAh (10h continuo)' }
    ],
    features: [
      'Bloqueo de péndulo interno para transporte seguro sin descalibración',
      'Soporte magnético pivotante con roscas 1/4" y 5/8" para tripié o vigas IPR',
      'Modo manual para trazo de pendientes y escaleras'
    ],
    applications: [
      'Nivelación y aplomado en obra civil y cancelería de aluminio',
      'Montaje de tuberías contra incendio con pendientes reguladas',
      'Trazo de piso y colado de firmes industriales'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'prod-005',
    sku: 'NTX-AG2200',
    model: 'EA-2200 9" Heavy Pro',
    name: 'Esmeriladora Angular Industrial 9" 2,400W con Arranque Suave',
    slug: 'esmeriladora-angular-industrial-9-2400w',
    brand: '[MARCA INDUSTRIAL A]',
    categorySlug: 'herramientas-electricas',
    categoryName: 'Herramientas Eléctricas',
    shortDescription: 'Motor de 2,400 Watts con bobinados epóxicos y arranque suave para corte y desbaste pesado de acero.',
    description: 'Máquina de trabajo pesado diseñada para paileros, soldadores y herreros de Monterrey. Su diseño ergonómico reduce la fatiga en jornadas extensas de corte de perfiles IPR, placas estructurales y biselado de tubos de conducción.',
    images: [
      './images/cat-construccion.jpg',
      '/images/hero-industrial.jpg'
    ],
    specifications: [
      { label: 'Diámetro del Disco', value: '9 Pulgadas (230 mm)' },
      { label: 'Potencia', value: '2,400 Watts' },
      { label: 'Velocidad sin Carga', value: '6,500 RPM' },
      { label: 'Eje de Rosca', value: '5/8" - 11 UNC' },
      { label: 'Sistema de Seguridad', value: 'Guarda sin llave y gatillo con bloqueo' },
      { label: 'Peso', value: '5.2 kg' }
    ],
    features: [
      'Sistema de expulsión de viruta que desvía partículas abrasivas del motor',
      'Carbones de desconexión automática para salvaguardar el conmutador',
      'Mango lateral antivibración orientable en 3 posiciones'
    ],
    applications: [
      'Corte de vigas, canaletas y soleras de acero al carbón',
      'Desbaste de cordones de soldadura pesada',
      'Corte de losas y concreto con discos diamantados'
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'prod-006',
    sku: 'NTX-TQ400',
    model: 'TQ-400 Digitorq',
    name: 'Torquímetro Digital de Precisión 1/2" con Registro de Datos',
    slug: 'torquimetro-digital-de-precision-1-2-registro-datos',
    brand: '[MARCA MECÁNICA B]',
    categorySlug: 'herramientas-industriales',
    categoryName: 'Herramientas Industriales',
    shortDescription: 'Rango de 20 a 200 ft-lb con precisión ±1%, pantalla LED retroiluminada y alarma acústica y vibratoria.',
    description: 'Instrumento de control de apriete indispensable en auditorías de calidad automotriz y montaje de bridas de presión en tuberías de gas y vapor. Incluye certificado de calibración rastreable a patrones nacionales.',
    images: [
      './images/cat-manuales.jpg',
      './images/cat-seguridad.jpg'
    ],
    specifications: [
      { label: 'Capacidad de Medición', value: '27 - 270 Nm (20 - 200 ft-lb)' },
      { label: 'Precisión Horaria / Antihoraria', value: '± 1.5% en sentido horario' },
      { label: 'Unidades de Medida', value: 'Nm, ft-lb, in-lb, kg-cm' },
      { label: 'Memoria Interna', value: 'Hasta 250 lecturas guardadas' },
      { label: 'Mecanismo de Carraca', value: '72 Dientes con ángulo de recuperación de 5°' }
    ],
    features: [
      'Alarma progresiva mediante LEDs de colores (verde, amarillo y rojo al aproximarse al torque objetivo)',
      'Cabezal intercambiable y cuerpo de acero con empuñadura moleteada',
      'Apagado automático de ahorro de batería tras 3 minutos sin uso'
    ],
    applications: [
      'Armado de motores y transmisiones automotrices',
      'Apriete de pernos estructurales A325 y A490',
      'Mantenimiento de intercambiadores de calor e instalaciones de proceso'
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'prod-007',
    sku: 'NTX-EPP500',
    model: 'SF-500 Dielectric Pro',
    name: 'Bota de Seguridad Industrial Borceguí Dieléctrica con Casco Polimérico',
    slug: 'bota-de-seguridad-industrial-dielectrica-casco-polimerico',
    brand: '[MARCA SEGURIDAD E]',
    categorySlug: 'equipo-seguridad',
    categoryName: 'Seguridad y EPP',
    shortDescription: 'Calzado certificado NOM-113-STPS-2009 tipo II y III con suela de doble densidad resistente a hidrocarburos.',
    description: 'Bota de trabajo rudo confeccionada en cuero flor entero curtido al cromo con recubrimiento hidrofugado. Brinda protección contra descargas eléctricas de hasta 14,000 Volts sin incrementar el peso gracias a su casquillo de policarbonato no metálico.',
    images: [
      './images/cat-seguridad.jpg',
      '/images/hero-industrial.jpg'
    ],
    specifications: [
      { label: 'Normativa', value: 'NOM-113-STPS-2009 (Impacto + Dieléctrico)' },
      { label: 'Casquillo', value: 'Policarbonato de alta densidad libre de metal' },
      { label: 'Suela', value: 'Poliuretano / Hule acrilo-nitrilo antideslizante' },
      { label: 'Forro Interior', value: 'Malla transpirable con tecnología antimicótica' },
      { label: 'Tallas Disponibles', value: '24 a 31 MX' }
    ],
    features: [
      'Suela con labrado autolimpiante ideal para lodo, aceite y viruta metálica',
      'Plantilla anatómica de PU con memoria para jornadas de más de 10 horas de pie',
      'Pasa-agujetas dieléctricos libres de ojillos metálicos'
    ],
    applications: [
      'Subestaciones eléctricas y líneas vivas de media tensión',
      'Construcción civil y maniobra de grúas',
      'Almacenes de logística y plantas químicas'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'prod-008',
    sku: 'NTX-CS355',
    model: 'CS-355 Chop Cut',
    name: 'Cortadora de Metales Sensitiva 14" (355 mm) 2,300W',
    slug: 'cortadora-de-metales-sensitiva-14-2300w',
    brand: '[MARCA INDUSTRIAL A]',
    categorySlug: 'herramientas-electricas',
    categoryName: 'Herramientas Eléctricas',
    shortDescription: 'Tronzadora de banco con prensa de ajuste rápido a 45° para corte preciso de tubos, soleras y perfiles.',
    description: 'Equipo de mesa para talleres de pailería y estructuras metálicas en Nuevo León. Diseñada con base estampada reforzada que no se dobla bajo el esfuerzo y deflector de chispas ajustable para mayor seguridad del taller.',
    images: [
      '/images/cat-construccion.jpg',
      '/images/hero-industrial.jpg'
    ],
    specifications: [
      { label: 'Diámetro de Disco', value: '14" (355 mm)' },
      { label: 'Potencia', value: '2,300 Watts' },
      { label: 'Velocidad', value: '3,800 RPM' },
      { label: 'Capacidad de Corte Redondo a 90°', value: '127 mm (5")' },
      { label: 'Capacidad Rectangular a 90°', value: '115 x 130 mm' },
      { label: 'Peso', value: '16.5 kg' }
    ],
    features: [
      'Prensa de liberación rápida con tope de inglete ajustable hasta 45°',
      'Protector retráctil de disco para protección continua contra fragmentos',
      'Bloqueo de eje incorporado para recambio ágil de discos abrasivos'
    ],
    applications: [
      'Corte de perfiles estructurales, tubos cédula 40 y soleras',
      'Fabricación de portones, barandales y racks de carga pesada',
      'Cortes en serie en talleres de herrería y montajes industriales'
    ],
    featured: false,
    inStock: true
  }
];
