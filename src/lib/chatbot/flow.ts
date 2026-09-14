// Árbol de decisiones del asistente del sitio. No usa IA: cada respuesta es un nodo con
// mensajes y opciones construidos a partir de los datos reales del sitio.
import { BLOG_POSTS } from "@/lib/blog-data";
import { CATALOG, keySpec, type ProductDetails } from "@/lib/catalog-data";
import { SERVICES } from "@/lib/services-data";
import { BRANDS, CONTACT, SITE, TECHNICAL_DOCUMENTS } from "@/lib/site-data";

export type ChatAnswers = Record<string, string>;

export type ChatOption =
  | { label: string; next: string; set?: Record<string, string> }
  | { label: string; href: string; kind: "internal" | "external" | "download" | "phone" | "email" | "whatsapp" };

export type ChatNode = {
  id: string;
  messages: string[] | ((answers: ChatAnswers) => string[]);
  options: ChatOption[] | ((answers: ChatAnswers) => ChatOption[]);
};

export const ROOT_NODE = "inicio";

const nodes = new Map<string, ChatNode>();
const add = (node: ChatNode) => nodes.set(node.id, node);

export const whatsappLink = (message: string) =>
  `https://wa.me/${CONTACT.whatsappInternational}?text=${encodeURIComponent(message)}`;

const allProducts = CATALOG.flatMap((group) =>
  group.categories.flatMap((category) => category.items.map((item) => ({ group, category, item }))),
);
const productBySlug = new Map(allProducts.map((entry) => [entry.item.slug, entry]));

const productOptions = (slugs: string[]): ChatOption[] =>
  slugs
    .map((slug) => productBySlug.get(slug))
    .filter((entry) => entry !== undefined)
    .map(({ item }) => ({ label: item.name, next: `producto-${item.slug}` }));

const talkToEngineering: ChatOption = { label: "Hablar con ingeniería", next: "cotizar-1" };

// ─── Menú principal ────────────────────────────────────────────────────────────
add({
  id: ROOT_NODE,
  messages: [
    `Hola, soy el asistente de ${SITE.name}.`,
    "Elige una opción o escribe una palabra clave abajo (por ejemplo: lodos, Tsurumi, sellos).",
  ],
  options: [
    { label: "Cotizar un equipo o servicio", next: "cotizar-1" },
    { label: "¿Qué bomba necesito?", next: "selector" },
    { label: "Ver catálogo de productos", next: "catalogo" },
    { label: "Servicios", next: "servicios" },
    { label: "Marcas que representamos", next: "marcas" },
    { label: "Descargar catálogos en PDF", next: "documentos" },
    { label: "Contacto y ubicación", next: "contacto" },
    { label: "Conocer a GM", next: "nosotros" },
  ],
});

// ─── Cotización guiada ─────────────────────────────────────────────────────────
const QUOTE_STEPS = [
  {
    key: "necesidad",
    question: "¿Qué necesitas?",
    choices: ["Equipo nuevo", "Rehabilitación o reparación", "Refacciones", "Servicio técnico", "Otro"],
  },
  {
    key: "industria",
    question: "¿En qué industria se usará?",
    choices: ["Agua y tratamiento", "Azúcar", "Minería", "Papel", "Alimentos y bebidas", "Aceites", "Química", "Manufactura", "Otra"],
  },
  {
    key: "fluido",
    question: "¿Qué fluido se va a manejar?",
    choices: ["Agua limpia", "Agua residual", "Lodos o sólidos", "Fluido viscoso", "Químicos", "No aplica / no lo sé"],
  },
  {
    key: "caudal",
    question: "¿Qué caudal aproximado necesitas?",
    choices: ["Menos de 100 gpm", "100 a 1,000 gpm", "1,000 a 10,000 gpm", "Más de 10,000 gpm", "No lo sé"],
  },
  {
    key: "urgencia",
    question: "¿Qué tan urgente es?",
    choices: ["Urgente: planta detenida", "Este mes", "Proyecto en planeación"],
  },
] as const;

const QUOTE_LABELS: Record<string, string> = {
  necesidad: "Necesidad",
  industria: "Industria",
  fluido: "Fluido",
  caudal: "Caudal",
  urgencia: "Urgencia",
};

QUOTE_STEPS.forEach((step, index) => {
  const next = index === QUOTE_STEPS.length - 1 ? "cotizar-resumen" : `cotizar-${index + 2}`;
  add({
    id: `cotizar-${index + 1}`,
    messages: index === 0
      ? ["Te hago 5 preguntas rápidas para preparar tu solicitud.", step.question]
      : [`${index + 1} de ${QUOTE_STEPS.length}. ${step.question}`],
    options: step.choices.map((choice) => ({ label: choice, next, set: { [step.key]: choice } })),
  });
});

const quoteSummary = (answers: ChatAnswers) =>
  Object.keys(QUOTE_LABELS)
    .filter((key) => answers[key])
    .map((key) => `${QUOTE_LABELS[key]}: ${answers[key]}`);

add({
  id: "cotizar-resumen",
  messages: (answers) => [
    "Listo. Este es el resumen de tu solicitud:",
    quoteSummary(answers).join("\n"),
    answers.urgencia?.startsWith("Urgente")
      ? "Como tu planta está detenida, te recomendamos escribir o llamar ahora."
      : "Envíalo por WhatsApp o completa el formulario para agregar tus datos.",
  ],
  options: (answers) => [
    {
      label: "Enviar resumen por WhatsApp",
      kind: "whatsapp",
      href: whatsappLink(["Hola, vengo del sitio web y quiero cotizar.", ...quoteSummary(answers)].join("\n")),
    },
    {
      label: "Completar formulario de contacto",
      kind: "internal",
      href: SERVICES.some((service) => service.title === answers.necesidad)
        ? `/contacto?servicio=${encodeURIComponent(answers.necesidad)}`
        : "/contacto",
    },
    { label: `Llamar al ${CONTACT.phones[0].display}`, kind: "phone", href: `tel:${CONTACT.phones[0].href}` },
    { label: "Empezar otra cotización", next: "cotizar-1" },
  ],
});

// ─── Selector por aplicación (matriz del Catálogo Técnico) ───────────────────
const APPLICATIONS: { id: string; label: string; intro: string; products: string[]; brands?: string[]; keywords: string }[] = [
  {
    id: "agua-limpia",
    label: "Agua limpia y suministro",
    intro: "Para agua limpia se usan bombas centrífugas, de turbina vertical, flujo mixto y flujo axial.",
    products: ["succion-frontal", "caja-partida-axialmente", "turbina-vertical", "flujo-mixto", "flujo-axial"],
    keywords: "agua potable suministro pozo riego rebombeo cisterna",
  },
  {
    id: "aguas-residuales",
    label: "Aguas residuales",
    intro: "Para aguas residuales conviene un equipo que no se tape: inatascables, Vortex, sumergibles, lóbulos o trituradores.",
    products: ["centrifuga-horizontal-inatascable", "centrifuga-horizontal-vortex", "tsurumi-sumergibles", "vogelsang-lobulos", "moyno-muncher-ct203-205"],
    keywords: "drenaje residual negras carcamo planta tratamiento efluente",
  },
  {
    id: "lodos",
    label: "Lodos y sólidos",
    intro: "Con lodos y sólidos funcionan bien Heavy Flow, Vortex, cavidades progresivas y trituradores.",
    products: ["heavy-flow", "centrifuga-horizontal-vortex", "moyno-serie-2000", "moyno-discam"],
    keywords: "lodo lodos solidos pulpa abrasivo arena",
  },
  {
    id: "viscosos",
    label: "Fluidos viscosos",
    intro: "Para fluidos viscosos se recomiendan bombas de desplazamiento positivo, cavidades progresivas o lóbulos.",
    products: ["desplazamiento-positivo-aspas-deslizantes", "desplazamiento-positivo-charnela", "moyno-compact-c", "vogelsang-lobulos"],
    keywords: "viscoso melaza miel aceite grasa espeso",
  },
  {
    id: "dosificacion",
    label: "Dosificación y químicos",
    intro: "Para dosificar con precisión hay bombas de cavidades progresivas Epsilon y dosificadoras electromagnéticas Exatta.",
    products: ["moyno-epsilon", "moyno-dosificacion-medicion"],
    brands: ["exatta"],
    keywords: "dosificar dosificacion quimico cloro ph orp reactivo medicion",
  },
  {
    id: "mineria",
    label: "Minería",
    intro: "En minería se usan sistemas de desagüe, sistemas paquete y bombas Heavy Flow para servicio severo.",
    products: ["desague-minero", "heavy-flow", "manejo-anfo", "unidades-moviles-explosivos"],
    keywords: "mina minero desague explosivos anfo",
  },
  {
    id: "papel",
    label: "Pulpa y papel",
    intro: "Para pulpa y papel hay bombas para manejo de papel y equipos inatascables.",
    products: ["manejo-de-papel", "centrifuga-horizontal-inatascable"],
    keywords: "papel papelera celulosa fibra",
  },
  {
    id: "biogas",
    label: "Agrícola y biogás",
    intro: "En agricultura y biogás se usan bombas de lóbulos y preparación para bombeo Vogelsang.",
    products: ["vogelsang-lobulos", "bio-condensados-efluentes"],
    keywords: "biogas agricola estiercol granja digestor",
  },
  {
    id: "mezcla",
    label: "Mezcla y agitación",
    intro: "Para mezclar o agitar hay agitadores, mezcladores de alto corte y mezcladores estáticos.",
    products: ["chemineer-agitadores", "prochem-entrada-lateral", "greerco-alto-corte", "kenics-estaticos"],
    keywords: "mezclar mezcla agitar agitador tanque",
  },
  {
    id: "vacio",
    label: "Vacío industrial",
    intro: "Para vacío industrial está la bomba de vacío de anillo líquido.",
    products: ["vacio-anillo-liquido"],
    keywords: "vacio succion aire",
  },
  {
    id: "proceso",
    label: "Proceso químico o alta temperatura",
    intro: "Para proceso se usan bombas ANSI y de sellado hidráulico; el sellado adecuado es clave.",
    products: ["centrifuga-horizontal-ansi", "sellado-hidraulico"],
    brands: ["latty"],
    keywords: "proceso quimico ansi api temperatura caliente",
  },
  {
    id: "azucar",
    label: "Ingenio azucarero",
    intro: "Para ingenios hay tamices rotativos, bandas transportadoras, vapor y bombas de proceso.",
    products: ["sertmax-tamices", "metalplast-bandas", "forbes-marshall-vapor", "centrifuga-horizontal-ansi"],
    keywords: "azucar ingenio caña jugo bagazo zafra",
  },
];

add({
  id: "selector",
  messages: ["Te ayudo a encontrar el equipo adecuado.", "¿Qué necesitas mover o resolver?"],
  options: [
    ...APPLICATIONS.map((app) => ({ label: app.label, next: `aplicacion-${app.id}` })),
    { label: "No estoy seguro", next: "cotizar-1" },
  ],
});

APPLICATIONS.forEach((app) => {
  add({
    id: `aplicacion-${app.id}`,
    messages: [app.intro, "Estas son las opciones del catálogo:"],
    options: [
      ...productOptions(app.products),
      ...(app.brands ?? []).map((slug) => ({ label: `Marca ${BRANDS.find((brand) => brand.slug === slug)?.name ?? slug}`, next: `marca-${slug}` })),
      talkToEngineering,
    ],
  });
});

// ─── Catálogo ──────────────────────────────────────────────────────────────────
add({
  id: "catalogo",
  messages: ["¿Qué línea de productos quieres ver?"],
  options: [
    ...CATALOG.map((group) => ({ label: group.label, next: `grupo-${group.id}` })),
    { label: "Abrir el catálogo completo", kind: "internal", href: "/catalogo" },
  ],
});

CATALOG.forEach((group) => {
  add({
    id: `grupo-${group.id}`,
    messages: [group.description, "Elige una categoría:"],
    options: group.categories.map((category) => ({
      label: `${category.label} (${category.items.length})`,
      next: `categoria-${category.id}`,
    })),
  });

  group.categories.forEach((category) => {
    add({
      id: `categoria-${category.id}`,
      messages: [`${category.label}: ${category.items.length} ${category.items.length === 1 ? "opción" : "opciones"}.`],
      options: [
        ...category.items.map((item) => ({ label: item.name, next: `producto-${item.slug}` })),
        { label: "Ver esta categoría en el catálogo", kind: "internal", href: `/catalogo?categoria=${category.id}` },
      ],
    });
  });
});

const describeProduct = (item: ProductDetails) => {
  const main = keySpec(item);
  const specs = item.specs
    .filter((spec) => spec !== main)
    .slice(0, 3)
    .map((spec) => `${spec.label}: ${spec.value.replace(/\n/g, "; ")}`);
  return [main ? `${main.label}: ${main.value}` : null, ...specs].filter(Boolean).join("\n");
};

allProducts.forEach(({ category, item }) => {
  add({
    id: `producto-${item.slug}`,
    messages: [`${item.name} (${item.code})`, describeProduct(item), ...(item.note ? [item.note] : [])],
    options: [
      { label: "Cotizar este equipo", next: "cotizar-2", set: { necesidad: `Equipo: ${item.name}` } },
      { label: "Preguntar por WhatsApp", kind: "whatsapp", href: whatsappLink(`Hola, me interesa: ${item.name} (${item.code}).`) },
      { label: "Ver en el catálogo", kind: "internal", href: `/catalogo?categoria=${category.id}` },
      { label: `Más de ${category.label}`, next: `categoria-${category.id}` },
    ],
  });
});

// ─── Servicios ─────────────────────────────────────────────────────────────────
add({
  id: "servicios",
  messages: [`Tenemos ${SERVICES.length} líneas de servicio. ¿Cuál te interesa?`],
  options: SERVICES.map((service) => ({ label: service.title, next: `servicio-${service.num}` })),
});

SERVICES.forEach((service) => {
  const brands = service.brands
    .map((slug) => BRANDS.find((brand) => brand.slug === slug))
    .filter((brand) => brand !== undefined);
  add({
    id: `servicio-${service.num}`,
    messages: [
      service.title,
      service.fullDesc,
      ...(brands.length ? [`Marcas que integramos: ${brands.map((brand) => brand.name).join(", ")}.`] : []),
    ],
    options: [
      { label: "Cotizar este servicio", next: "cotizar-2", set: { necesidad: service.title } },
      { label: "Preguntar por WhatsApp", kind: "whatsapp", href: whatsappLink(`Hola, me interesa el servicio de ${service.title.toLowerCase()}.`) },
      ...brands.slice(0, 3).map((brand) => ({ label: `Conocer ${brand.name}`, next: `marca-${brand.slug}` })),
      { label: "Ver todos los servicios", kind: "internal", href: "/servicios" },
    ],
  });
});

// ─── Marcas ────────────────────────────────────────────────────────────────────
add({
  id: "marcas",
  messages: [`Representamos ${BRANDS.length} marcas. Elige una para ver qué ofrece:`],
  options: [
    ...BRANDS.map((brand) => ({ label: brand.name, next: `marca-${brand.slug}` })),
    { label: "Ver página de marcas", kind: "internal", href: "/marcas" },
  ],
});

BRANDS.forEach((brand) => {
  const firstWord = brand.name.split(/[\s·]+/)[0].toLowerCase();
  const catalogEntry = brand.slug === "nov"
    ? null
    : allProducts.find(({ item }) => item.code.toLowerCase().startsWith(firstWord));
  const document = TECHNICAL_DOCUMENTS.find((doc) => doc.title.toLowerCase().includes(firstWord));
  add({
    id: `marca-${brand.slug}`,
    messages: [`${brand.name} · ${brand.country}`, `${brand.area}: ${brand.capabilities}`],
    options: [
      ...(brand.slug === "nov" ? [{ label: "Ver líneas NOV Mono y Moyno", next: "grupo-nov" }] : []),
      ...(catalogEntry ? [{ label: `Ver ${catalogEntry.item.name}`, next: `producto-${catalogEntry.item.slug}` }] : []),
      ...(document ? [{ label: `Descargar ${document.title}`, kind: "download" as const, href: document.href }] : []),
      { label: "Preguntar por esta marca", kind: "whatsapp", href: whatsappLink(`Hola, quiero información de ${brand.name}.`) },
      { label: "Ver otras marcas", next: "marcas" },
    ],
  });
});

// ─── Documentos, contacto, empresa y blog ─────────────────────────────────────
add({
  id: "documentos",
  messages: ["Estos son los catálogos y fichas que puedes descargar:"],
  options: TECHNICAL_DOCUMENTS.map((doc) => ({ label: `${doc.title} (${doc.meta.split(" · ")[1]})`, kind: "download", href: doc.href })),
});

add({
  id: "contacto",
  messages: [
    "Puedes contactarnos por cualquiera de estos medios:",
    `WhatsApp: ${CONTACT.whatsappDisplay}\nTeléfono: ${CONTACT.phones.map((phone) => phone.display).join(", ")}\nCorreo: ${CONTACT.email}`,
    `Dirección: ${CONTACT.address}`,
  ],
  options: [
    { label: "Escribir por WhatsApp", kind: "whatsapp", href: whatsappLink("Hola, vengo del sitio web de GM Corporativo Industrial.") },
    { label: `Llamar al ${CONTACT.phones[0].display}`, kind: "phone", href: `tel:${CONTACT.phones[0].href}` },
    { label: "Enviar un correo", kind: "email", href: `mailto:${CONTACT.email}` },
    { label: "Cómo llegar (Google Maps)", kind: "external", href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`GM Corporativo Industrial, ${CONTACT.address}`)}` },
    { label: "Ir al formulario de contacto", kind: "internal", href: "/contacto" },
  ],
});

add({
  id: "nosotros",
  messages: [
    `${SITE.name} tiene más de ${SITE.yearsOfExperience} años de experiencia en soluciones para sistemas de bombeo.`,
    "Diseñamos, fabricamos, rehabilitamos y probamos equipos, e integramos tecnologías de aliados estratégicos para la industria.",
  ],
  options: [
    { label: "Conocer nuestra historia", kind: "internal", href: "/nosotros" },
    { label: "Artículos técnicos (blog)", next: "blog" },
    { label: "Ver servicios", next: "servicios" },
  ],
});

add({
  id: "blog",
  messages: ["Artículos técnicos publicados:"],
  options: [
    ...BLOG_POSTS.map((post) => ({ label: post.title, kind: "internal" as const, href: `/blog/${post.slug}` })),
    { label: "Ver el blog", kind: "internal", href: "/blog" },
  ],
});

export function getNode(id: string): ChatNode {
  return nodes.get(id) ?? nodes.get(ROOT_NODE)!;
}

export function resolveNode(id: string, answers: ChatAnswers) {
  const node = getNode(id);
  return {
    id: node.id,
    messages: typeof node.messages === "function" ? node.messages(answers) : node.messages,
    options: typeof node.options === "function" ? node.options(answers) : node.options,
  };
}

// ─── Índice para búsqueda por palabras clave ───────────────────────────────────
export type SearchEntry = { label: string; next: string; terms: string };

export const SEARCH_INDEX: SearchEntry[] = [
  { label: "Cotizar un equipo o servicio", next: "cotizar-1", terms: "cotizar cotizacion precio precios costo cuanto presupuesto comprar compra venta" },
  { label: "Contacto y ubicación", next: "contacto", terms: "contacto telefono llamar whatsapp correo email mail direccion ubicacion donde oficina visitar mapa" },
  { label: "Descargar catálogos en PDF", next: "documentos", terms: "pdf descargar ficha fichas tecnica documento manual folleto brochure" },
  { label: "¿Qué bomba necesito?", next: "selector", terms: "recomendar recomendacion elegir seleccionar seleccion cual necesito ayuda aplicacion" },
  { label: "Ver catálogo de productos", next: "catalogo", terms: "catalogo productos equipos bombas bomba" },
  { label: "Conocer a GM", next: "nosotros", terms: "empresa quienes somos historia mision vision valores experiencia años angelica directora gm" },
  { label: "Artículos técnicos (blog)", next: "blog", terms: "blog articulo articulos consejos mantenimiento vida util" },
  ...APPLICATIONS.map((app) => ({ label: app.label, next: `aplicacion-${app.id}`, terms: `${app.label} ${app.keywords}` })),
  ...SERVICES.map((service) => ({ label: service.title, next: `servicio-${service.num}`, terms: `${service.title} ${service.desc}` })),
  ...BRANDS.map((brand) => ({ label: brand.name, next: `marca-${brand.slug}`, terms: `${brand.name} ${brand.area}` })),
  ...allProducts.map(({ item, category }) => ({ label: item.name, next: `producto-${item.slug}`, terms: `${item.name} ${item.code} ${category.label}` })),
];
