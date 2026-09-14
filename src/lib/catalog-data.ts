export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductDetails = {
  slug: string;
  code: string;
  name: string;
  img: string;
  specs: ProductSpec[];
  note?: string;
};

export type CatalogCategory = {
  id: string;
  label: string;
  items: ProductDetails[];
};

export type CatalogGroup = {
  id: string;
  label: string;
  description: string;
  lineLogos?: { name: string; logo: string }[];
  categories: CatalogCategory[];
};

const GM_RANGE_NOTE =
  "Los rangos corresponden a la familia de equipo y no sustituyen la curva de un modelo seleccionado.";
const ALLY_NOTE =
  "Disponibilidad, modelo y alcance comercial se confirman con nuestro equipo antes de cotizar.";
const NOV_NOTE =
  "Caudal, presión, materiales y conexiones se confirman con el fabricante según el modelo y la aplicación.";

export const CATALOG: CatalogGroup[] = [
  {
    id: "gm",
    label: "Bombas GM",
    description: "Familias de bombas diseñadas y fabricadas por GM, con rangos técnicos generales.",
    categories: [
      {
        id: "horizontales",
        label: "Horizontales de proceso",
        items: [
          {
            slug: "centrifuga-horizontal-ansi",
            code: "GM · ANSI",
            name: "Bomba centrífuga horizontal de proceso ANSI",
            img: "/images/catalogo/gm-ansi.webp",
            specs: [
              { label: "Caudal", value: "50 a 4,000 gpm" },
              { label: "Carga total", value: "40 a 300 ft" },
              { label: "Tamaño", value: "1½ a 8 in" },
              { label: "Normas", value: "ANSI B73.1 y API 610" },
              { label: "Impulsor", value: "Semiabierto" },
              { label: "Metalurgias", value: "Acero inoxidable · CD4MCu al 25 % cromo · Hierro al alto níquel · Bronce · Aceros aleados · Hierro gris" },
              { label: "Aplicaciones", value: "Todo tipo de industrias" },
            ],
            note: GM_RANGE_NOTE,
          },
          {
            slug: "centrifuga-horizontal-inatascable",
            code: "GM · Inatascable",
            name: "Bomba centrífuga horizontal inatascable",
            img: "/images/catalogo/gm-inatascable.webp",
            specs: [
              { label: "Caudal", value: "10 a 3,000 gpm" },
              { label: "Carga total", value: "25 a 575 ft" },
              { label: "Impulsor", value: "Dos aspas tipo caracol; 100 % inatascable" },
              { label: "Metalurgias", value: "Hierro gris · Aceros aleados · Acero al bajo carbono · Aceros inoxidables" },
            ],
            note: GM_RANGE_NOTE,
          },
          {
            slug: "centrifuga-horizontal-vortex",
            code: "GM · Vortex",
            name: "Bomba centrífuga horizontal tipo Vortex",
            img: "/images/catalogo/gm-vortex.webp",
            specs: [
              { label: "Tamaño", value: "3, 4 y 6 in" },
              { label: "Configuración", value: "Horizontal o verticalizada" },
              { label: "Paso de sólidos", value: "3 a 6 in" },
              { label: "Impulsor", value: "100 % inatascable" },
              { label: "Metalurgias", value: "Aceros aleados de alta dureza · Aceros inoxidables · CD4MCu al 25 % cromo" },
              { label: "Aplicaciones", value: "Mezclas · Lodos · Fibras · Pulpas" },
            ],
          },
        ],
      },
      {
        id: "verticales",
        label: "Verticales",
        items: [
          {
            slug: "turbina-vertical",
            code: "GM · Turbina vertical",
            name: "Bomba turbina vertical",
            img: "/images/catalogo/gm-turbina-vertical.webp",
            specs: [
              { label: "Caudal", value: "50 a 18,000 gpm" },
              { label: "Carga total", value: "20 a 1,875 ft" },
              { label: "Tamaño", value: "6 a 36 in" },
              { label: "Configuración", value: "Pasos múltiples; columna de transmisión; cabezal de descarga sobre o bajo superficie" },
              { label: "Impulsor", value: "Semiabierto o cerrado" },
              { label: "Metalurgias", value: "Hierro gris · Bronce · Aceros aleados · Aceros inoxidables · Dúplex · Materiales exóticos" },
            ],
            note: GM_RANGE_NOTE,
          },
          {
            slug: "flujo-mixto",
            code: "GM · Flujo mixto",
            name: "Bomba de flujo mixto",
            img: "/images/catalogo/gm-flujo-mixto.webp",
            specs: [
              { label: "Caudal", value: "1,000 a 37,000 gpm" },
              { label: "Carga total", value: "20 a 100 ft" },
              { label: "Tamaño", value: "8 a 36 in" },
              { label: "Impulsor", value: "Hasta cuatro impulsores" },
              { label: "Metalurgias", value: "Hierro gris · Bronce · Aceros aleados · Aceros inoxidables · CD4MCu al 25 % cromo" },
            ],
            note: GM_RANGE_NOTE,
          },
          {
            slug: "flujo-axial",
            code: "GM · Flujo axial",
            name: "Bomba de flujo axial",
            img: "/images/catalogo/gm-flujo-axial.webp",
            specs: [
              { label: "Caudal", value: "1,000 a 42,000 gpm" },
              { label: "Carga total", value: "20 a 100 ft" },
              { label: "Tamaño", value: "8 a 36 in" },
              { label: "Impulsor", value: "Hasta cuatro impulsores" },
              { label: "Metalurgias", value: "Hierro gris · Bronce · Aceros aleados · Aceros inoxidables · CD4MCu al 25 % cromo" },
            ],
            note: GM_RANGE_NOTE,
          },
        ],
      },
      {
        id: "centrifugas",
        label: "Centrífugas",
        items: [
          {
            slug: "caja-partida-axialmente",
            code: "GM · Caja partida",
            name: "Bomba centrífuga de caja partida axialmente",
            img: "/images/catalogo/gm-caja-partida.webp",
            specs: [
              { label: "Caudal", value: "75 a 18,000 gpm" },
              { label: "Carga total", value: "40 a 1,500 ft" },
              { label: "Tamaño", value: "2 a 20 in" },
              { label: "Configuración", value: "Succión sencilla o doble succión" },
              { label: "Metalurgias", value: "Hierro gris · Bronce · Aceros aleados · Aceros inoxidables · CD4MCu al 25 % cromo" },
            ],
            note: GM_RANGE_NOTE,
          },
          {
            slug: "succion-frontal",
            code: "GM · Succión frontal",
            name: "Bomba centrífuga de succión frontal",
            img: "/images/catalogo/gm-succion-frontal.webp",
            specs: [
              { label: "Caudal", value: "30 a 3,000 gpm" },
              { label: "Carga total", value: "15 a 400 ft" },
              { label: "Impulsor", value: "Semiabierto o cerrado" },
              { label: "Metalurgias", value: "Hierro gris · Aceros aleados · Acero al bajo carbono · Aceros inoxidables · CD4MCu al 25 % cromo" },
            ],
            note: GM_RANGE_NOTE,
          },
          {
            slug: "sellado-hidraulico",
            code: "GM · Sellado hidráulico",
            name: "Bomba centrífuga de sellado hidráulico",
            img: "/images/catalogo/gm-sellado-hidraulico.webp",
            specs: [
              { label: "Caudal", value: "100 a 3,000 gpm" },
              { label: "Carga total", value: "30 a 250 ft" },
              { label: "Tamaño", value: "1½ a 8 in" },
              { label: "Impulsor", value: "Semiabierto o cerrado" },
              { label: "Temperatura", value: "Hasta 120 °C" },
              { label: "Metalurgias", value: "Hierro gris · Aceros aleados S300 y S400 · Bronces especiales · CD4MCu al 25 % cromo · Ni Resist" },
            ],
            note: GM_RANGE_NOTE,
          },
        ],
      },
      {
        id: "desplazamiento-positivo",
        label: "Desplazamiento positivo y vacío",
        items: [
          {
            slug: "desplazamiento-positivo-charnela",
            code: "GM · Charnela",
            name: "Bomba de desplazamiento positivo de charnela",
            img: "/images/catalogo/gm-charnela.webp",
            specs: [
              { label: "Caudal", value: "Hasta 90 m³/h" },
              { label: "Tamaño", value: "6 × 8 y 10 × 10 in" },
              { label: "Construcción", value: "Maquinada con tolerancia de 0.002 in entre machos y hembras; sello mecánico; chumaceras encajonadas" },
            ],
          },
          {
            slug: "desplazamiento-positivo-aspas-deslizantes",
            code: "GM · Aspas deslizantes",
            name: "Bomba de desplazamiento positivo de aspas deslizantes",
            img: "/images/catalogo/gm-aspas-deslizantes.webp",
            specs: [
              { label: "Carga", value: "Alta carga con flujo constante" },
              { label: "Aplicaciones", value: "Fluidos altamente viscosos" },
              { label: "Construcción", value: "Elemento rotativo alineado por chumaceras y baleros; aspas y camisa de vida extendida" },
            ],
          },
          {
            slug: "vacio-anillo-liquido",
            code: "GM · Vacío",
            name: "Bomba de vacío de anillo líquido",
            img: "/images/catalogo/gm-vacio.webp",
            specs: [
              { label: "Capacidad", value: "600 a 1,000 cfm" },
              { label: "Vacío", value: "20 a 29 inHg" },
              { label: "Impulsor", value: "Doble impulsor" },
              { label: "Metalurgias", value: "Hierro gris · Aceros aleados · Acero al bajo carbono · Aceros aleados S300 y S400" },
            ],
            note: "Confirme con ingeniería la unidad de capacidad aplicable al modelo.",
          },
        ],
      },
      {
        id: "especiales",
        label: "Aplicaciones especiales",
        items: [
          {
            slug: "manejo-de-papel",
            code: "GM · Papel",
            name: "Bomba centrífuga para manejo de papel",
            img: "/images/catalogo/gm-papel.webp",
            specs: [
              { label: "Caudal", value: "500 a 2,500 gpm" },
              { label: "Carga total", value: "50 a 300 ft" },
              { label: "Descarga", value: "4 y 6 in" },
              { label: "Impulsor", value: "Abierto de dos o cuatro aspas, tipo inatascable" },
              { label: "Metalurgias", value: "Hierro gris · Bronce · Aceros aleados · Acero inoxidable · CD4MCu al 25 % cromo" },
              { label: "Aplicaciones", value: "Industria papelera" },
            ],
            note: GM_RANGE_NOTE,
          },
          {
            slug: "acoplamiento-directo",
            code: "GM · Acoplamiento directo",
            name: "Bomba centrífuga de acoplamiento directo",
            img: "/images/catalogo/gm-acoplamiento-directo.webp",
            specs: [
              { label: "Caudal", value: "Un impulsor: 40 a 900 gpm · Dos impulsores: 60 a 350 gpm" },
              { label: "Carga total", value: "Un impulsor: 20 a 250 ft · Dos impulsores: 250 a 550 ft" },
              { label: "Metalurgias", value: "Hierro gris · Aceros aleados · Bronce · Aceros inoxidables" },
            ],
            note: GM_RANGE_NOTE,
          },
          {
            slug: "heavy-flow",
            code: "GM · Heavy Flow",
            name: "Bomba centrífuga Heavy Flow",
            img: "/images/catalogo/gm-heavy-flow.webp",
            specs: [
              { label: "Caudal", value: "10 a 30,000 gpm" },
              { label: "Carga total", value: "45 a 295 ft" },
              { label: "Tamaño", value: "1 a 18 in" },
              { label: "Metalurgias", value: "Aleaciones de alta dureza con alto contenido de níquel o cromo" },
              { label: "Aplicaciones", value: "Aguas pesadas · Lodos de baja densidad · Servicio severo y continuo" },
            ],
            note: GM_RANGE_NOTE,
          },
        ],
      },
      {
        id: "laboratorio",
        label: "Laboratorio",
        items: [
          {
            slug: "laboratorio-pruebas-hidraulicas",
            code: "GM · Pruebas",
            name: "Laboratorio de pruebas hidráulicas GM",
            img: "/images/planta/laboratorio-pruebas-v2.webp",
            specs: [
              { label: "Capacidad", value: "Caracterización del comportamiento hidráulico de equipos horizontales y verticales" },
              { label: "Métodos documentados", value: "NOM-001-ENER-2014 (bombas verticales tipo turbina con motor externo)\nNOM-010-ENER-2004 (conjunto motor-bomba sumergible tipo pozo profundo)\nMétodo interno para bombas verticales de flujo mixto y axial\nMétodo interno para bombas centrífugas horizontales" },
              { label: "Alcance", value: "Equipos de bombeo horizontales, verticales, de flujo mixto y axial" },
            ],
            note: "Consulte el alcance aplicable a su proyecto.",
          },
        ],
      },
    ],
  },
  {
    id: "nov",
    label: "NOV Mono · Moyno",
    description: "Líneas NOV Mono y Moyno para cavidades progresivas, manejo de sólidos, mezcla y sistemas paquete.",
    lineLogos: [
      { name: "NOV", logo: "/images/brands/nov.webp" },
      { name: "Moyno", logo: "/images/brands/moyno.webp" },
      { name: "Mono", logo: "/images/brands/mono.webp" },
      { name: "Chemineer", logo: "/images/brands/chemineer.webp" },
      { name: "Tarby", logo: "/images/brands/tarby.webp" },
      { name: "Monoflo", logo: "/images/brands/monoflo.webp" },
    ],
    categories: [
      {
        id: "cavidades-progresivas",
        label: "Cavidades progresivas",
        items: [
          {
            slug: "moyno-compact-c",
            code: "Moyno · Compact C",
            name: "Bomba de cavidades progresivas Compact C",
            img: "/images/catalogo/nov-compact-c.webp",
            specs: [
              { label: "Tipo", value: "Bomba de cavidades progresivas" },
              { label: "Función", value: "Transferencia" },
            ],
            note: NOV_NOTE,
          },
          {
            slug: "moyno-ezstrip",
            code: "Moyno · EZstrip",
            name: "Bomba de cavidades progresivas EZstrip",
            img: "/images/catalogo/nov-ezstrip-transferencia.webp",
            specs: [
              { label: "Tipo", value: "Bomba de cavidades progresivas" },
              { label: "Función", value: "Transferencia con mantenimiento simplificado" },
            ],
            note: NOV_NOTE,
          },
          {
            slug: "moyno-serie-2000",
            code: "Moyno · Serie 2000",
            name: "Bomba de cavidades progresivas Serie 2000",
            img: "/images/catalogo/nov-serie-2000.webp",
            specs: [
              { label: "Tipo", value: "Bomba de cavidades progresivas" },
              { label: "Función", value: "Transferencia industrial" },
            ],
            note: NOV_NOTE,
          },
          {
            slug: "moyno-epsilon",
            code: "Moyno · Epsilon",
            name: "Bomba de cavidades progresivas Epsilon",
            img: "/images/catalogo/nov-epsilon.webp",
            specs: [
              { label: "Tipo", value: "Bomba de cavidades progresivas" },
              { label: "Función", value: "Dosificación y medición" },
            ],
            note: NOV_NOTE,
          },
          {
            slug: "moyno-dosificacion-medicion",
            code: "Moyno · Dosificación",
            name: "Soluciones de dosificación y medición",
            img: "/images/catalogo/nov-dosificacion-y-medicion.webp",
            specs: [
              { label: "Tipo", value: "Bombas de cavidades progresivas para dosificación" },
              { label: "Función", value: "Dosificación y medición de fluidos" },
            ],
            note: NOV_NOTE,
          },
          {
            slug: "moyno-bombas-pequenas",
            code: "Moyno · Bombas pequeñas",
            name: "Bombas de cavidades progresivas pequeñas",
            img: "/images/catalogo/nov-bombas-pequenas.webp",
            specs: [
              { label: "Tipo", value: "Bomba de cavidades progresivas" },
              { label: "Función", value: "Servicios de menor capacidad" },
            ],
            note: NOV_NOTE,
          },
        ],
      },
      {
        id: "trituracion",
        label: "Trituración y tamizado",
        items: [
          {
            slug: "moyno-muncher-ct203-205",
            code: "Moyno · CT203/205",
            name: "Triturador EZstrip TR Muncher CT203/205",
            img: "/images/catalogo/nov-ezstrip-tr-muncher-ct203-205.webp",
            specs: [
              { label: "Función", value: "Trituración y reducción de sólidos" },
              { label: "Aplicaciones", value: "Aguas residuales y protección de equipos aguas abajo" },
            ],
            note: NOV_NOTE,
          },
          {
            slug: "moyno-serie-a",
            code: "Moyno · Serie A",
            name: "Triturador en línea Serie A",
            img: "/images/catalogo/nov-serie-a.webp",
            specs: [
              { label: "Función", value: "Triturador en línea" },
              { label: "Aplicaciones", value: "Procesamiento de sólidos" },
            ],
            note: NOV_NOTE,
          },
          {
            slug: "moyno-muncher-ct201",
            code: "Moyno · CT201",
            name: "Triturador EZstrip TR Muncher CT201",
            img: "/images/catalogo/nov-ezstrip-tr-muncher-ct201.webp",
            specs: [
              { label: "Función", value: "Trituración y reducción de sólidos" },
              { label: "Aplicaciones", value: "Servicio en tubería" },
            ],
            note: NOV_NOTE,
          },
          {
            slug: "moyno-discam",
            code: "Moyno · Discam",
            name: "Tamizador y macerador Discam",
            img: "/images/catalogo/nov-discam.webp",
            specs: [
              { label: "Función", value: "Tamizado y maceración" },
              { label: "Aplicaciones", value: "Reducción y separación de sólidos" },
            ],
            note: NOV_NOTE,
          },
        ],
      },
      {
        id: "mezcla",
        label: "Agitación y mezcla",
        items: [
          {
            slug: "chemineer-agitadores",
            code: "Chemineer",
            name: "Agitadores rotatorios Chemineer",
            img: "/images/catalogo/nov-chemineer-agitador-rotatorio.webp",
            specs: [
              { label: "Tecnología", value: "Agitadores rotatorios" },
              { label: "Descripción", value: "Mezcla y agitación de fluidos" },
            ],
            note: NOV_NOTE,
          },
          {
            slug: "prochem-entrada-lateral",
            code: "Prochem",
            name: "Agitadores de entrada lateral Prochem",
            img: "/images/catalogo/nov-prochem-agitador-entrada-lateral.webp",
            specs: [
              { label: "Tecnología", value: "Agitadores de entrada lateral por banda" },
              { label: "Descripción", value: "Agitación lateral para recipientes" },
            ],
            note: NOV_NOTE,
          },
          {
            slug: "greerco-alto-corte",
            code: "Greerco",
            name: "Mezcladores de alto corte Greerco",
            img: "/images/catalogo/nov-greerco-mezclador-alto-corte.webp",
            specs: [
              { label: "Tecnología", value: "Mezcladores de alto corte" },
              { label: "Descripción", value: "Mezcla y dispersión de alta intensidad" },
            ],
            note: NOV_NOTE,
          },
          {
            slug: "kenics-estaticos",
            code: "Kenics",
            name: "Mezcladores estáticos e intercambiadores Kenics",
            img: "/images/catalogo/nov-kenics-mezclador-estatico.webp",
            specs: [
              { label: "Tecnología", value: "Mezcladores estáticos e intercambiadores" },
              { label: "Descripción", value: "Mezcla en línea y transferencia de calor" },
            ],
            note: NOV_NOTE,
          },
        ],
      },
      {
        id: "sistemas-paquete",
        label: "Sistemas paquete",
        items: [
          {
            slug: "desague-minero",
            code: "Moyno · Minería",
            name: "Sistema de desagüe minero",
            img: "/images/catalogo/nov-desague-minero.webp",
            specs: [
              { label: "Solución", value: "Sistema integrado para extracción o transferencia de agua en minería" },
            ],
            note: NOV_NOTE,
          },
          {
            slug: "bombeo-multifasico",
            code: "Moyno · Multifásico",
            name: "Sistema de bombeo multifásico",
            img: "/images/catalogo/nov-bombeo-multifasico.webp",
            specs: [
              { label: "Solución", value: "Manejo conjunto de fases en una solución integrada" },
            ],
            note: NOV_NOTE,
          },
          {
            slug: "manejo-anfo",
            code: "Moyno · ANFO",
            name: "Sistema para manejo de nitrato de amonio (ANFO)",
            img: "/images/catalogo/nov-manejo-anfo.webp",
            specs: [
              { label: "Solución", value: "Transferencia y manejo del material dentro del proceso" },
            ],
            note: NOV_NOTE,
          },
          {
            slug: "unidades-moviles-explosivos",
            code: "Moyno · Unidad móvil",
            name: "Unidades móviles de fabricación de explosivos",
            img: "/images/catalogo/nov-unidad-movil-fabricacion-explosivos.webp",
            specs: [
              { label: "Solución", value: "Integración del sistema de bombeo en una unidad móvil" },
            ],
            note: NOV_NOTE,
          },
        ],
      },
      {
        id: "partes-universales",
        label: "Partes universales",
        items: [
          {
            slug: "partes-universales",
            code: "Monoflo · Tarby · Mono",
            name: "Partes universales y reemplazos",
            img: "/images/catalogo/nov-partes-universales-monoflo.webp",
            specs: [
              { label: "Descripción", value: "Partes universales y reemplazos para bombas de cavidades progresivas" },
              { label: "Marcas", value: "Monoflo · Tarby · Mono" },
            ],
            note: NOV_NOTE,
          },
        ],
      },
    ],
  },
  {
    id: "aliados",
    label: "Marcas representadas",
    description: "Equipos y soluciones de los fabricantes que representamos, para completar el sistema alrededor de la bomba.",
    categories: [
      {
        id: "bombeo-agua",
        label: "Bombeo y agua",
        items: [
          {
            slug: "tsurumi-sumergibles",
            code: "Tsurumi Pump · Japón",
            name: "Bombas sumergibles inatascables",
            img: "/images/catalogo/aliado-tsurumi.webp",
            specs: [
              { label: "Especialidad", value: "Bombas sumergibles tipo inatascable y equipos para tratamiento de agua" },
              { label: "Aplicaciones", value: "Bombeo de agua con sólidos · Tratamiento de agua" },
            ],
            note: ALLY_NOTE,
          },
          {
            slug: "vogelsang-lobulos",
            code: "Vogelsang · Alemania",
            name: "Bombas de lóbulos y preparación para bombeo",
            img: "/images/catalogo/aliado-vogelsang.webp",
            specs: [
              { label: "Especialidad", value: "Bombas de lóbulos y acondicionamiento previo al bombeo" },
              { label: "Aplicaciones", value: "Aguas residuales · Biogás · Agricultura · Transporte" },
            ],
            note: ALLY_NOTE,
          },
          {
            slug: "sje-rhombus-control",
            code: "SJE Rhombus · EUA",
            name: "Paneles de control y alarmas de nivel",
            img: "/images/catalogo/aliado-sje-rhombus.webp",
            specs: [
              { label: "Especialidad", value: "Paneles de control, sistemas de alarma y monitoreo de nivel" },
              { label: "Aplicaciones", value: "Agua residual municipal, agrícola e industrial" },
            ],
            note: ALLY_NOTE,
          },
          {
            slug: "bio-condensados-efluentes",
            code: "Bio Condensados · Colombia",
            name: "Tratamiento de efluentes y condensados",
            img: "/images/catalogo/aliado-bio-condensados.webp",
            specs: [
              { label: "Especialidad", value: "Tratamiento y recuperación de efluentes y condensados industriales" },
            ],
            note: ALLY_NOTE,
          },
        ],
      },
      {
        id: "vapor-energia",
        label: "Vapor y energía",
        items: [
          {
            slug: "forbes-marshall-vapor",
            code: "Forbes Marshall · India",
            name: "Eficiencia de vapor y medición",
            img: "/images/catalogo/aliado-forbes-marshall.webp",
            specs: [
              { label: "Especialidad", value: "Calderas, trampas de vapor, estaciones reguladoras, válvulas y medición" },
            ],
            note: ALLY_NOTE,
          },
          {
            slug: "temisa-electromecanicos",
            code: "TEMISA · México",
            name: "Servicios electromecánicos",
            img: "/images/catalogo/aliado-temisa.webp",
            specs: [
              { label: "Especialidad", value: "Mantenimiento, reparación y diagnóstico de generadores y motores" },
            ],
            note: ALLY_NOTE,
          },
        ],
      },
      {
        id: "automatizacion",
        label: "Automatización y control",
        items: [
          {
            slug: "fertron-automatizacion",
            code: "Fertron · Brasil",
            name: "Automatización y sistemas eléctricos",
            img: "/images/catalogo/aliado-fertron.webp",
            specs: [
              { label: "Especialidad", value: "Paneles, distribución eléctrica, media tensión, proyectos, asistencia y revisión" },
            ],
            note: ALLY_NOTE,
          },
          {
            slug: "eletrosert-electronica",
            code: "Eletrosert · Brasil",
            name: "Electrónica industrial",
            img: "/images/catalogo/aliado-eletrosert.webp",
            specs: [
              { label: "Especialidad", value: "HMI, tarjetas PLC, aisladores, sensores, transmisores y convertidores" },
            ],
            note: ALLY_NOTE,
          },
        ],
      },
      {
        id: "agroindustria",
        label: "Agroindustria y materiales",
        items: [
          {
            slug: "sertmax-tamices",
            code: "Sertmax · Brasil",
            name: "Tamices rotativos y centrifugación",
            img: "/images/catalogo/aliado-sertmax.webp",
            specs: [
              { label: "Especialidad", value: "Tamiz rotativo de jugo y cenizas y productos de centrifugación" },
              { label: "Aplicaciones", value: "Industria azucarera" },
            ],
            note: ALLY_NOTE,
          },
          {
            slug: "metalplast-bandas",
            code: "Metalplast · Colombia",
            name: "Componentes para bandas transportadoras",
            img: "/images/catalogo/aliado-metalplast.webp",
            specs: [
              { label: "Especialidad", value: "Rodillos y componentes para bandas transportadoras" },
              { label: "Aplicaciones", value: "Manejo de materiales a granel" },
            ],
            note: ALLY_NOTE,
          },
        ],
      },
    ],
  },
];

export const CATALOG_ITEM_COUNT = CATALOG.reduce(
  (total, group) => total + group.categories.reduce((sum, category) => sum + category.items.length, 0),
  0,
);

const KEY_SPEC_LABELS = ["Caudal", "Capacidad", "Función", "Especialidad", "Tecnología", "Solución", "Carga", "Descripción"];

// Dato principal que se muestra en la tarjeta del catálogo.
export function keySpec(product: ProductDetails): ProductSpec | undefined {
  for (const label of KEY_SPEC_LABELS) {
    const spec = product.specs.find((item) => item.label === label);
    if (spec) return spec;
  }
  return product.specs[0];
}

export const GM_FAMILY_COUNT = CATALOG[0].categories
  .filter((category) => category.id !== "laboratorio")
  .reduce((total, category) => total + category.items.length, 0);

export function findCategory(categoryId: string | null) {
  for (const group of CATALOG) {
    const category = group.categories.find((item) => item.id === categoryId);
    if (category) return { group, category };
  }
  return null;
}
