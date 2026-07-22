"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductModal, ProductDetails } from "@/components/ui/ProductModal";

const CATEGORIES = [
  "Centrífugas Horizontales",
  "Verticales · Flujo Axial / Mixto",
  "Desplazamiento Positivo",
  "Especiales",
  "Laboratorio",
] as const;

type Category = typeof CATEGORIES[number];

const PRODUCTS: Record<Category, ProductDetails[]> = {
  "Centrífugas Horizontales": [
    {
      code: "GM-ANSI-01",
      name: "Bomba Centrífuga Horizontal de Proceso ANSI",
      enName: "ANSI horizontal process centrifugal pump",
      img: "/images/products/BombaCentriANSI.png",
      norms: "ANSI B73.1 y API 610",
      sizes: "1½\" a 8\"",
      capacity: "50 a 4,000 GPM",
      head: "40 a 300 ft",
      impeller: "Semi abierto",
      metallurgy: "Acero inoxidable · CD4MCU al 25% cromo · Hierro al alto níquel · Bronce · Aceros aleados · Hierro gris",
      applications: "Todo tipo de industrias"
    },
    {
      code: "GM-INAT-01",
      name: "Bomba Centrífuga Horizontal Inatascable",
      enName: "Non-clogging horizontal centrifugal pump",
      img: "/images/products/BombaCentriInatas.png",
      impeller: "Dos aspas tipo caracol, 100% inatascable",
      capacity: "10 a 3,000 GPM",
      head: "25 a 575 ft",
      metallurgy: "Hierro gris · Aceros aleados · Acero al bajo carbono · Aceros inoxidables"
    },
    {
      code: "GM-VTX-01",
      name: "Bomba Centrífuga Horizontal Tipo Vortex",
      enName: "Vortex type horizontal centrifugal pump",
      img: "/images/products/BombaCentriHoriVortex.png",
      sizes: "3\", 4\" y 6\" (horizontal y verticalizada)",
      impeller: "100% inatascable",
      solids: "3\" a 6\" de diámetro",
      applications: "Mezclas · Lodos · Fibras · Pulpas",
      metallurgy: "Aceros aleados de alta dureza · Aceros inoxidables · CD4MCU al 25% cromo"
    },
    {
      code: "GM-CENT-01",
      name: "Bomba Centrífuga (uso general)",
      enName: "Centrifugal pump",
      img: "/images/products/BombaCentri.png",
      config: "Succión frontal, impulsor semi abierto y cerrado",
      capacity: "30 a 3,000 GPM",
      head: "15 a 400 ft",
      metallurgy: "Hierro gris · Aceros aleados · Acero al bajo carbono · Aceros inoxidables · CD4MCU al 25% cromo"
    },
    {
      code: "GM-SH-01",
      name: "Bomba Centrífuga Horizontal de Sellado Hidráulico",
      enName: "Hydraulic sealing horizontal centrifugal pump",
      img: "/images/products/BombaCentrHorSelladoHidra.png",
      sizes: "1½\" a 8\"",
      impeller: "Semi abierto y cerrado",
      capacity: "100 a 3,000 GPM",
      head: "30 a 250 ft",
      temp: "120°C",
      metallurgy: "Hierro gris · Aceros aleados S400-S300 a 317 · Bronces especiales · CD4MCU al 25% cromo · Ni resist · Aceros aleados"
    },
    {
      code: "GM-MP-01",
      name: "Bomba Centrífuga Horizontal para Manejo de Papel",
      enName: "Horizontal centrifugal pump for paper handling",
      img: "/images/products/BombaCentrHoriManejoPapel.png",
      discharge: "4\" y 6\"",
      impeller: "Abierto de 2 y 4 aspas, tipo inatascable",
      capacity: "500 a 2,500 GPM",
      head: "50 a 300 ft",
      metallurgy: "Hierro gris · Bronce · Aceros aleados · Acero inoxidable · CD4MCU al 25% cromo",
      applications: "Industria papelera"
    },
    {
      code: "GM-AD-01",
      name: "Bomba Centrífuga Horizontal de Acoplamiento Directo",
      enName: "Direct coupled horizontal centrifugal pump",
      img: "/images/products/BombaCentrHoriAcoplDirec.png",
      config: "Acoplamiento directo a motor",
      capacity: "Un impulsor: 40 a 900 GPM | Dos impulsores: 60 a 350 GPM",
      head: "Un impulsor: 20 a 250 ft | Dos impulsores: 250 a 550 ft",
      metallurgy: "Hierro gris · Aceros aleados · Bronce · Aceros inoxidables"
    },
    {
      code: "GM-CAX-01",
      name: "Bomba Centrífuga de Caja Partida Axialmente",
      enName: "Axially split case centrifugal pump",
      img: "/images/products/BombaCentrifCajaAxial.png",
      sizes: "2\" a 20\"",
      impeller: "Succión sencilla y doble succión",
      capacity: "75 a 18,000 GPM",
      head: "40 a 1,500 ft",
      metallurgy: "Hierro gris · Bronce · Aceros aleados · Aceros inoxidables · CD4MCU al 25% cromo"
    }
  ],
  "Verticales · Flujo Axial / Mixto": [
    {
      code: "GM-TVERT-01",
      name: "Bomba Turbina Vertical",
      enName: "Vertical turbine pump",
      img: "/images/products/BombaTurbinaVerti.png",
      sizes: "6\" a 36\"",
      config: "Pasos múltiples, impulsor semiabierto y cerrado, columna de transmisión, cabezal de descarga sobre o bajo superficie",
      capacity: "50 a 18,000 GPM",
      head: "20 a 1,875 ft",
      metallurgy: "Hierro gris · Bronce · Aceros aleados · Aceros inoxidables · Dúplex · Materiales exóticos"
    },
    {
      code: "GM-MIX-01",
      name: "Bomba de Flujo Mixto",
      enName: "Mixed flow pump",
      img: "/images/products/BombaFlujoMix.png",
      sizes: "8\" a 36\"",
      capacity: "1,000 a 37,000 GPM",
      impeller: "Número máximo de impulsores: 4",
      head: "20 a 100 ft",
      metallurgy: "Hierro gris · Bronce · Aceros aleados · Aceros inoxidables · CD4MCU al 25% cromo"
    },
    {
      code: "GM-AXI-01",
      name: "Bomba de Flujo Axial",
      enName: "Axial flow pump",
      img: "/images/products/BombaFlujoAxi.png",
      sizes: "8\" a 36\"",
      capacity: "1,000 a 42,000 GPM",
      impeller: "Número máximo de impulsores: 4",
      head: "20 a 100 ft",
      metallurgy: "Hierro gris · Bronce · Aceros aleados · Aceros inoxidables · CD4MCU al 25% cromo"
    }
  ],
  "Desplazamiento Positivo": [
    {
      code: "GM-DP-CHA-01",
      name: "Bomba de Desplazamiento Positivo de Charnela",
      enName: "Positive displacement swing pump",
      img: "/images/products/BombaDezpPosChanelaa.png",
      config: "Maquinada 100% con tolerancia de 0.002\" entre machos y hembras. Sello mecánico. Chumaceras encajonadas.",
      sizes: "6\"x8\" y 10\"x10\"",
      capacity: "Hasta 90 m³/hr"
    },
    {
      code: "GM-DP-AD-01",
      name: "Bomba de Desplazamiento Positivo de Aspas Deslizantes",
      enName: "Sliding vane positive displacement pump",
      img: "/images/products/BombaDezlPosAspasDez.png",
      applications: "Fluidos altamente viscosos",
      config: "Flujos constantes, altas cargas, operación segura. Elemento rotativo alineado por chumaceras y baleros.",
      differentiator: "Componentes hidráulicos (aspas y camisa) de vida extendida por proceso de fabricación especializado"
    }
  ],
  "Especiales": [
    {
      code: "GM-VAC-01",
      name: "Bomba de Vacío de Anillo Líquido",
      enName: "Liquid ring vacuum pump",
      img: "/images/products/BombaVac.png",
      config: "Doble impulsor",
      capacity: "Vacío: 20\" a 29\" Hg | Aire enrarecido: 600 a 1,000 CFM",
      metallurgy: "Hierro gris · Aceros aleados · Acero al bajo carbono · Aceros aleados S300, S400"
    },
    {
      code: "GM-HF-01",
      name: "Bomba Centrífuga Horizontal Heavy Flow",
      enName: "Heavy flow horizontal centrifugal pump",
      img: "/images/products/BombaHeavyFlow.png",
      applications: "Aguas pesadas · Lodos de baja densidad · Procesos de trabajo severo y continuo",
      sizes: "1\" a 18\"",
      capacity: "10 a 30,000 GPM",
      head: "45 a 295 ft",
      metallurgy: "Aleaciones de alta dureza con alto contenido de níquel y/o cromo",
      differentiator: "Diseñada para trabajo severo que demanda diversidad de aplicaciones y procesos"
    }
  ],
  "Laboratorio": [
    {
      code: "GM-LAB",
      name: "Laboratorio de Pruebas Hidráulicas GM",
      enName: "GM performance test laboratory",
      img: "/images/products/LabPru.png",
      accreditation: "NMX-EC-17025-IMNC-2018 / ISO/IEC 17025:2017\nNo. MM-214-038/09 (Vigente desde 09-01-2009)",
      differentiator: "Primer laboratorio de pruebas hidráulicas para equipos de bombeo en México con acreditación bajo NMX-EC-17025 con alcance NOM-001-ENER-2014.",
      methods: "• NOM-001-ENER-2014: Eficiencia energética de bombas verticales tipo turbina con motor externo eléctrico vertical.\n• NOM-010-ENER-2004: Eficiencia energética del conjunto motor-bomba sumergible tipo pozo profundo.\n• Método interno: Condiciones de operación de bombas verticales flujo mixto y/o axial.\n• Método interno: Condiciones de operación de bombas centrífugas horizontales (uso general, Vortex, Inatascable, ANSI y API).",
      scope: "Pruebas a equipos de bombeo horizontales, verticales flujo mixto y axial. Servicio disponible para clientes externos nacionales e internacionales."
    }
  ]
};

export default function CatalogoPage() {
  const [activeTab, setActiveTab] = useState<Category>(CATEGORIES[0]);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetails | null>(null);

  return (
    <div className="pt-28 pb-24 bg-[var(--color-paper)] min-h-screen relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          eyebrow="CATÁLOGO OFICIAL" 
          title="Soluciones de Bombeo de Alto Rendimiento" 
          align="left"
          as="h1"
        />

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-16 pb-4">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`relative px-6 py-2.5 rounded-full font-sans text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === category 
                  ? "text-[var(--color-paper)] bg-[var(--color-ink)] shadow-lg shadow-[var(--color-ink)]/20 scale-105" 
                  : "text-[var(--color-steel)] bg-white border border-[var(--color-steel)]/20 hover:text-[var(--color-ink)] hover:border-[var(--color-ink)]/30 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {PRODUCTS[activeTab].map((product, idx) => (
                <motion.div
                  key={product.code}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="h-full"
                >
                  <ProductCard
                    code={product.code}
                    name={product.name}
                    imageSrc={product.img}
                    onClick={() => setSelectedProduct(product)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}

