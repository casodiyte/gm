import {
  Cable,
  Cog,
  Droplets,
  Fan,
  Leaf,
  ShieldCheck,
  Wind,
  Wrench,
  Zap,
  Factory,
  Replace,
  type LucideIcon,
} from "lucide-react";

export type ServiceDetails = {
  num: string;
  title: string;
  desc: string;
  fullDesc: string;
  icon: LucideIcon;
  imageSrc: string;
  /** Slugs de BRANDS que se integran en este servicio. */
  brands: string[];
};

export const SERVICES: ServiceDetails[] = [
  {
    num: "01",
    title: "Equipos de bombeo",
    desc: "Fabricación y comercialización de bombas para todo proceso industrial.",
    fullDesc:
      "Bombas GM centrífugas, verticales, de desplazamiento positivo y de vacío, además de tecnologías NOV Mono, Moyno, Tsurumi y Vogelsang, seleccionadas según el fluido y el punto de operación.",
    icon: Cog,
    imageSrc: "/images/services/bombeo-real-v2.webp",
    brands: ["nov", "tsurumi", "vogelsang"],
  },
  {
    num: "02",
    title: "Motores eléctricos",
    desc: "Suministro, rebobinado y diagnóstico de motores para servicio pesado.",
    fullDesc:
      "Suministro, mantenimiento, rebobinado y diagnóstico de motores eléctricos industriales, con respaldo de especialistas electromecánicos como TEMISA.",
    icon: Zap,
    imageSrc: "/images/services/motores-real-v2.webp",
    brands: ["temisa"],
  },
  {
    num: "03",
    title: "Soluciones electromecánicas",
    desc: "Integración de sistemas mecánicos y eléctricos a la medida.",
    fullDesc:
      "Paneles de control, automatización, instrumentación y monitoreo de nivel integrados alrededor del equipo, con tecnologías de Fertron, Eletrosert y SJE Rhombus.",
    icon: Cable,
    imageSrc: "/images/services/electromecanica-real-v2.webp",
    brands: ["fertron", "eletrosert", "sje-rhombus"],
  },
  {
    num: "04",
    title: "Sellos mecánicos",
    desc: "Sellado de alto desempeño para condiciones críticas.",
    fullDesc:
      "Sellos mecánicos, empaquetaduras y juntas Latty para bombas, válvulas y equipos rotativos, considerando presión, temperatura, velocidad y compatibilidad química.",
    icon: ShieldCheck,
    imageSrc: "/images/services/sellos-real-v2.webp",
    brands: ["latty"],
  },
  {
    num: "05",
    title: "Turbinas de vapor",
    desc: "Suministro y mantenimiento de turbinas para generación y proceso.",
    fullDesc:
      "Suministro y mantenimiento de turbinas de vapor, junto con equipos para la eficiencia del vapor como trampas, estaciones reguladoras y medición de Forbes Marshall.",
    icon: Factory,
    imageSrc: "/images/services/turbina-vapor-real-v2.webp",
    brands: ["forbes-marshall"],
  },
  {
    num: "06",
    title: "Equipos agroindustriales",
    desc: "Soluciones específicas para el ingenio azucarero y la agroindustria.",
    fullDesc:
      "Equipos para ingenios y agroindustria: tamices rotativos y centrifugación Sertmax, componentes para bandas transportadoras Metalplast y soluciones refractarias Refrastrabe.",
    icon: Leaf,
    imageSrc: "/images/services/agroindustrial-real-v2.webp",
    brands: ["sertmax", "metalplast", "refrastrabe"],
  },
  {
    num: "07",
    title: "Tratamiento de agua",
    desc: "Sistemas de tratamiento y bombeo para agua de proceso y residual.",
    fullDesc:
      "Bombeo, dosificación y control para agua de proceso y residual, con tecnologías Tsurumi, Vogelsang, Exatta, SJE Rhombus y Bio Condensados.",
    icon: Droplets,
    imageSrc: "/images/services/tratamiento-agua-real-v2.webp",
    brands: ["tsurumi", "vogelsang", "exatta", "sje-rhombus", "bio-condensados"],
  },
  {
    num: "08",
    title: "Rehabilitación de equipos",
    desc: "Recuperación integral de bombas existentes con garantía.",
    fullDesc:
      "Diagnóstico, reparación, maquinado y recuperación dimensional de componentes para devolver confiabilidad operativa a bombas existentes.",
    icon: Replace,
    imageSrc: "/images/planta/taller-torno.webp",
    brands: [],
  },
  {
    num: "09",
    title: "Accesorios y servicio técnico",
    desc: "Refacciones OEM, asesoría y soporte de campo.",
    fullDesc:
      "Refacciones, partes universales, asesoría técnica y soporte en campo para la selección, puesta en marcha y mantenimiento de los equipos.",
    icon: Wrench,
    imageSrc: "/images/planta/taller-flecha.webp",
    brands: ["nov"],
  },
  {
    num: "10",
    title: "Ventilación industrial",
    desc: "Sistemas de manejo de aire para procesos críticos.",
    fullDesc:
      "Ventiladores y sistemas de manejo de aire seleccionados según caudal, presión y condiciones del proceso.",
    icon: Fan,
    imageSrc: "/images/services/ventilacion-real-v2.webp",
    brands: [],
  },
  {
    num: "11",
    title: "Extracción e inyección",
    desc: "Sistemas de captación y descarga en ambientes complejos.",
    fullDesc:
      "Sistemas de extracción e inyección de aire para captación y descarga en ambientes industriales exigentes.",
    icon: Wind,
    imageSrc: "/images/services/extraccion-real-v2.webp",
    brands: [],
  },
];
