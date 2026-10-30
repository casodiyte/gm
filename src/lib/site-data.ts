export const SITE = {
  name: "GM Corporativo Industrial",
  legalName: "GM Corporativo Industrial",
  url: "https://gmcorporativoindustrial.com",
  yearsOfExperience: 45,
  tagline: "Precisión que transforma",
  description:
    "Especialistas en soluciones para sistemas de bombeo: ingeniería, fabricación, rehabilitación y soporte técnico para la industria en México.",
} as const;

export const CONTACT = {
  whatsappDisplay: "55 4602 0434",
  whatsappInternational: "525546020434",
  phones: [
    { display: "55 5305 1026", href: "+525553051026" },
  ],
  email: "info@gmcorporativo.mx",
  address:
    "Carretera Lago de Guadalupe, San Mateo Tecoloapan, Atizapán de Zaragoza, Estado de México, C.P. 52920",
} as const;

export type Brand = {
  slug: string;
  name: string;
  country: string;
  area: string;
  capabilities: string;
  logo: string;
};

/** Marcas representadas, en el orden en que se presentan (NOV primero). */
export const BRANDS: Brand[] = [
  {
    slug: "nov",
    name: "NOV · MONO · Moyno · Chemineer",
    country: "EUA",
    area: "Bombeo y mezcla",
    capabilities:
      "Bombas de cavidades progresivas, trituradores, tamices, refacciones, agitadores y mezcladores.",
    logo: "/images/brands/nov.webp",
  },
  {
    slug: "vogelsang",
    name: "Vogelsang",
    country: "Alemania",
    area: "Bombeo y agua",
    capabilities:
      "Bombas de lóbulos y preparación para el bombeo en aguas residuales, biogás, agricultura y transporte.",
    logo: "/images/brands/vogelsang.webp",
  },
  {
    slug: "forbes-marshall",
    name: "Forbes Marshall",
    country: "India",
    area: "Eficiencia de vapor",
    capabilities:
      "Calderas, trampas de vapor, estaciones reguladoras, válvulas, medición e instrumentación.",
    logo: "/images/brands/forbes-marshall.webp",
  },
  {
    slug: "sje-rhombus",
    name: "SJE Rhombus",
    country: "EUA",
    area: "Control para agua",
    capabilities:
      "Paneles de control, sistemas de alarma y monitoreo de nivel para aplicaciones municipales, agrícolas e industriales.",
    logo: "/images/brands/sje-rhombus.webp",
  },
  {
    slug: "eletrosert",
    name: "Eletrosert",
    country: "Brasil",
    area: "Electrónica industrial",
    capabilities:
      "Interfaces HMI, tarjetas PLC, aisladores de señal, sensores, transmisores y convertidores.",
    logo: "/images/brands/eletrosert.webp",
  },
  {
    slug: "temisa",
    name: "TEMISA",
    country: "México",
    area: "Servicios electromecánicos",
    capabilities:
      "Mantenimiento, reparación y diagnóstico de motores eléctricos, generadores y transformadores.",
    logo: "/images/brands/temisa.webp",
  },
  {
    slug: "tsurumi",
    name: "Tsurumi Pump",
    country: "Japón",
    area: "Bombeo y agua",
    capabilities:
      "Bombas sumergibles tipo inatascable y equipos para tratamiento de agua.",
    logo: "/images/brands/tsurumi.webp",
  },
  {
    slug: "fertron",
    name: "Fertron",
    country: "Brasil",
    area: "Automatización",
    capabilities:
      "Automatización, paneles de control, distribución eléctrica, media tensión e instrumentación.",
    logo: "/images/brands/fertron.webp",
  },
  {
    slug: "bio-condensados",
    name: "Bio Condensados",
    country: "Colombia",
    area: "Tratamiento de fluidos",
    capabilities:
      "Tratamiento y recuperación de efluentes y condensados industriales.",
    logo: "/images/brands/bio-condensados.webp",
  },
  {
    slug: "exatta",
    name: "Exatta",
    country: "Brasil",
    area: "Dosificación",
    capabilities:
      "Bombas dosificadoras electromagnéticas y control automático para corrección de pH y ORP.",
    logo: "/images/brands/exatta.webp",
  },
  {
    slug: "latty",
    name: "Latty",
    country: "Francia",
    area: "Sellado industrial",
    capabilities:
      "Empaquetaduras, sellos mecánicos, juntas estáticas, herramientas y accesorios de sellado.",
    logo: "/images/brands/latty.webp",
  },
  {
    slug: "refrastrabe",
    name: "Refrastrabe",
    country: "Colombia",
    area: "Refractarios",
    capabilities:
      "Soluciones refractarias y de aislamiento térmico y acústico: diseño, instalación y mantenimiento.",
    logo: "/images/brands/refrastrabe.webp",
  },
  {
    slug: "sertmax",
    name: "Sertmax",
    country: "Brasil",
    area: "Industria azucarera",
    capabilities:
      "Tamices rotativos de jugo y cenizas y soluciones de centrifugación para ingenios.",
    logo: "/images/brands/sertmax.webp",
  },
  {
    slug: "metalplast",
    name: "Metalplast",
    country: "Colombia",
    area: "Manejo de materiales",
    capabilities:
      "Rodillos y componentes para bandas transportadoras y manejo de materiales a granel.",
    logo: "/images/brands/metalplast.webp",
  },
];

export type TechnicalDocument = {
  title: string;
  description: string;
  href: string;
  meta: string;
  /** Agrupa la biblioteca técnica por origen del documento. */
  group: "GM" | "NOV Mono · Moyno" | "Latty · Sellado industrial" | "Dosificación y control";
};

export const TECHNICAL_DOCUMENTS: TechnicalDocument[] = [
  {
    title: "Catálogo general GM",
    description: "Familias de bombas GM, capacidades y laboratorio de pruebas hidráulicas.",
    href: "/downloads/catalogo-general-gm.pdf",
    meta: "PDF · 2.01 MB · 9 páginas",
    group: "GM",
  },
  {
    title: "Bombas verticales GM",
    description: "Bombas de turbina vertical, flujo mixto y flujo axial.",
    href: "/downloads/bombas-verticales-gm.pdf",
    meta: "PDF · 3.00 MB · 8 páginas",
    group: "GM",
  },
  {
    title: "Catálogo de productos NOV",
    description: "Soluciones NOV, MONO/Moyno y equipos para bombeo y mezcla.",
    href: "/downloads/catalogo-productos-nov.pdf",
    meta: "PDF · 1.91 MB · 9 páginas",
    group: "NOV Mono · Moyno",
  },
  {
    title: "Bomba Compact C",
    description: "Cavidad progresiva compacta: hasta 440 m³/h, 24 bar y 100 °C.",
    href: "/downloads/nov-mono-compact-c.pdf",
    meta: "PDF · 0.80 MB · 2 páginas",
    group: "NOV Mono · Moyno",
  },
  {
    title: "Bomba de transiego EZstrip",
    description: "Mantenimiento in situ con biela partida: hasta 225 m³/h y 12 bar.",
    href: "/downloads/nov-mono-ezstrip-transferencia.pdf",
    meta: "PDF · 0.89 MB · 2 páginas",
    group: "NOV Mono · Moyno",
  },
  {
    title: "EZstrip con tecnología Scion",
    description: "Nueva generación EZstrip, más ligera y corta. Documento en inglés.",
    href: "/downloads/moyno-ezstrip.pdf",
    meta: "PDF · 0.26 MB · 1 página",
    group: "NOV Mono · Moyno",
  },
  {
    title: "Serie 2000 con tecnología Scion",
    description: "Bomba de cavidad progresiva Serie 2000. Documento en inglés.",
    href: "/downloads/moyno-serie-2000.pdf",
    meta: "PDF · 0.24 MB · 1 página",
    group: "NOV Mono · Moyno",
  },
  {
    title: "Carta de distribuidor NOV México 2026",
    description: "Documento de autorización para MONO/Moyno y Chemineer en México.",
    href: "/downloads/carta-distribuidor-nov-mexico-2026.pdf",
    meta: "PDF · 0.16 MB · 1 página",
    group: "NOV Mono · Moyno",
  },
  {
    title: "Sellado industrial Latty",
    description: "Empaquetaduras, sellos mecánicos, juntas y herramientas.",
    href: "/downloads/sellado-industrial-latty.pdf",
    meta: "PDF · 8.86 MB · 11 páginas",
    group: "Latty · Sellado industrial",
  },
  {
    title: "LATTYflon 2790",
    description: "Empaquetadura alimentaria CE 1935/2004: 100 bar, 260 °C, pH 1-13.",
    href: "/downloads/latty-lattyflon-2790.pdf",
    meta: "PDF · 0.19 MB · 1 página",
    group: "Latty · Sellado industrial",
  },
  {
    title: "LATTYflon 3207",
    description: "Empaquetadura de PTFE grafitado para fluidos químicamente agresivos.",
    href: "/downloads/latty-lattyflon-3207.pdf",
    meta: "PDF · 0.25 MB · 2 páginas",
    group: "Latty · Sellado industrial",
  },
  {
    title: "LATTYflon 4757",
    description: "Empaquetadura de aramida y PTFE: hasta 1,800 bar y 300 °C.",
    href: "/downloads/latty-lattyflon-4757.pdf",
    meta: "PDF · 0.32 MB · 1 página",
    group: "Latty · Sellado industrial",
  },
  {
    title: "LATTYflon 4789",
    description: "Empaquetadura de aramida para fluidos cargados y abrasivos.",
    href: "/downloads/latty-lattyflon-4789.pdf",
    meta: "PDF · 0.31 MB · 1 página",
    group: "Latty · Sellado industrial",
  },
  {
    title: "LATTYflon 5790",
    description: "Empaquetadura alimentaria con alta resistencia al desgaste.",
    href: "/downloads/latty-lattyflon-5790.pdf",
    meta: "PDF · 0.23 MB · 1 página",
    group: "Latty · Sellado industrial",
  },
  {
    title: "LATTYgold 32",
    description: "Lámina de fibras sintéticas NBR-SBR para junta estática.",
    href: "/downloads/latty-lattygold-32.pdf",
    meta: "PDF · 0.11 MB · 1 página",
    group: "Latty · Sellado industrial",
  },
  {
    title: "CARTseal B24",
    description: "Cierre mecánico de cartucho con FDA, CE 1935/2004, ACS y ATEX.",
    href: "/downloads/latty-cartseal-b24.pdf",
    meta: "PDF · 1.71 MB · 6 páginas",
    group: "Latty · Sellado industrial",
  },
  {
    title: "Aparato de corte de empaquetaduras",
    description: "Corta anillos a la medida para ejes de hasta 300 mm.",
    href: "/downloads/latty-aparato-corte-empaquetaduras.pdf",
    meta: "PDF · 0.16 MB · 1 página",
    group: "Latty · Sellado industrial",
  },
  {
    title: "Máquina manual de corte de juntas",
    description: "Juntas circulares de 80 a 1,250 mm y hasta 8 mm de espesor.",
    href: "/downloads/latty-maquina-manual-corte.pdf",
    meta: "PDF · 0.14 MB · 1 página",
    group: "Latty · Sellado industrial",
  },
  {
    title: "Extractores de empaquetaduras",
    description: "Extractores flexibles y rígidos para secciones de 4 a 25 mm.",
    href: "/downloads/latty-extractores-empaquetaduras.pdf",
    meta: "PDF · 0.16 MB · 1 página",
    group: "Latty · Sellado industrial",
  },
  {
    title: "Bombas dosificadoras Exatta",
    description: "Dosificación electromagnética y control de pH/ORP.",
    href: "/downloads/bombas-dosificadoras-exatta.pdf",
    meta: "PDF · 0.92 MB · 7 páginas",
    group: "Dosificación y control",
  },
];

export const DOCUMENT_GROUPS = [
  "GM",
  "NOV Mono · Moyno",
  "Latty · Sellado industrial",
  "Dosificación y control",
] as const;
