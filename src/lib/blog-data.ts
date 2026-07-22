export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
  fallbackImage: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "vida-util-equipo-bombeo-industrial",
    title: "Cómo aumentar la vida útil de tu equipo de bombeo industrial",
    date: "2023-06-26",
    image: "/images/blog/mantenimiento-bombeo.jpg",
    fallbackImage: "https://lirp.cdn-website.com/701a9e2d/dms3rep/multi/opt/000000232412-1920w.jpg",
    content: [
      "Los equipos de bombeo industrial son herramientas esenciales en la mayoría de las industrias, ya que se utilizan para transferir líquidos y gases de un lugar a otro. Estos equipos son costosos y requieren un mantenimiento adecuado para prolongar su vida útil.",
      "**1. Realiza un mantenimiento preventivo regularmente.** Un mantenimiento preventivo regular es esencial para mantener tu equipo de bombeo industrial en buen estado. Realiza inspecciones periódicas y mantenimiento según el programa recomendado por el fabricante.",
      "**2. Utiliza los materiales adecuados.** Los materiales de construcción son críticos para la vida útil. Asegúrate de utilizar materiales resistentes a la corrosión y al desgaste, sellos mecánicos de alta calidad y empaquetaduras adecuadas al fluido bombeado.",
      "**3. Lubrica adecuadamente.** Utiliza el tipo de lubricante recomendado por el fabricante y sigue las pautas de lubricación adecuadas.",
      "**4. Controla las condiciones de operación.** Temperatura, presión y caudal deben cumplir las especificaciones de diseño. Evita operar fuera del rango de diseño.",
      "**5. Capacita al personal de mantenimiento.** Debe estar preparado en inspección, mantenimiento y reparación del equipo.",
      "**6. Almacena adecuadamente.** Protégelo de intemperie, polvo y humedad cuando no esté en uso."
    ]
  },
  {
    slug: "vida-util-equipo-bombeo",
    title: "Mantenimiento predictivo y vida útil del equipo de bombeo",
    date: "2023-04-21",
    image: "/images/blog/inspeccion-bomba.jpg",
    fallbackImage: "https://lirp.cdn-website.com/701a9e2d/dms3rep/multi/opt/95422323-1920w.jpg",
    content: [
      "El equipo de bombeo es esencial en muchas industrias, desde la manufactura hasta la agricultura. Como cualquier dispositivo mecánico, tiene una vida útil que puede prolongarse con mantenimiento regular y uso adecuado.",
      "El mantenimiento regular incluye inspecciones y limpieza. Los especialistas comprueban si hay fugas, ruidos inusuales o vibraciones que puedan indicar un problema, y limpian el equipo para eliminar suciedad, desechos o materiales corrosivos.",
      "El uso y operación adecuados reducen el desgaste. Renovar o reemplazar partes afectadas mejora eficiencia y confiabilidad. Para lograr un mantenimiento eficiente, es necesario consultar a técnicos calificados que determinen si actualizar o reemplazar equipos.",
      "En GM Corporativo Industrial contamos con más de 45 años de experiencia en soluciones de bombeo, control y cuidado de flujo de fluidos. Contáctanos para atención personalizada."
    ]
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.slug === slug);
}
