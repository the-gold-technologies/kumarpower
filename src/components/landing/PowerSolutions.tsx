import { Download } from "lucide-react";
import diesel from "@/assets/Products/OPTIPRIMEGEN.png";
import gas from "@/assets/Products/15GAS.jpeg";
import portable from "@/assets/Products/2.1PORTABLE.jpeg";
import ups from "@/assets/ps4.png";
import { Button } from "@/components/ui/button";
// Import brochures from GeneratorRange
import optiprime from "../../assets/Brochure/OPTIPRIME- 117,400,500,640,1000,1500 & 2020 KVA.pdf";
import Cpcb from "@/assets/Brochure/7.5-20 kVA.pdf";
import cpcb58 from "@/assets/Brochure/25-58.5.pdf";
import cpcb160 from "@/assets/Brochure/82.5-160.pdf";
import cpcb250 from "@/assets/Brochure/200-250.pdf";
import cpcb320 from "@/assets/Brochure/320-750.pdf";
import cpcb750 from "@/assets/Brochure/750 kVA-1500 kVA.pdf";
import Gase from "@/assets/Brochure/NEW CATELOG - GAS GENSET.pdf";
import sential from "@/assets/Brochure/4.Kirloskar powergen_Sentinel series Genset.pdf";
import allProductsImg from "@/assets/ALL PRODUCTS.png";
import trust from "@/assets/Seasons (1).png";
import trust1 from "@/assets/SIS (1).png";
import trust2 from "@/assets/Vistara 1 (1).png";
import trust3 from "@/assets/Clients page/GMR Infra.jpg";
import trust4 from "@/assets/Honeywell 1 (1).png";
import trust5 from "@/assets/Kashyapi (2).png";
import trust6 from "@/assets/Caritas (1).png";
import trust7 from "@/assets/CEC (1).png";
import ace from "@/assets/Clients page/AceConstruction.jpg";
import claroin from "@/assets/Clients page/Clarion.png";
import Comed from "@/assets/Clients page/Comed.png";
import Dps from "@/assets/Clients page/DPS.jpg";
import GEPL from "@/assets/Clients page/GEPL.jpg";
import addidas from "@/assets/Clients page/Adidas.jpg";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useSectionData } from "@/store/useCMSStore";
import dg1 from "@/assets/Products/7.5CPCB.jpeg";
import dg2 from "@/assets/Products/82.5CPCB.jpeg";
import dg200 from "@/assets/Products/200CPCB.jpeg";
import dg3 from "@/assets/Products/25CPCB.jpeg";
import dg4 from "@/assets/Products/320CPCB.jpeg";
import dg5 from "@/assets/Products/750CPCB.jpeg";
import Panel1 from "@/assets/Panel/Porcelin_clad_vaccum_circuit_breaker 1.png";
import Panel2 from "@/assets/Products/Vacuum_circuit_breaker.png";
import Panel3 from "@/assets/Panel/SF6_Circuit_breaker 1.png";
import Panel4 from "@/assets/Panel/Unitised_package_substation 1.png";
import Panel5 from "@/assets/Panel/Vacuum_circuit_breaker 2.png";
import Panel6 from "@/assets/Panel/amf-panel-auto-synchronize-panels-24 1.png";
import Panel7 from "@/assets/Panel/distribution_panel 1.png";
import Panel8 from "@/assets/Panel/feeder-pillar2 1.png";
import Servo1 from "@/assets/servo/servo1.png";
import Servo2 from "@/assets/servo/servo2.png";
import Trans1 from "@/assets/transformer/Trans1.png";
import Trans2 from "@/assets/transformer/trans2.png";
import Trans3 from "@/assets/transformer/trans3.png";

const PSCard = ({
  title,
  desc,
  specs,
  img,
  brochureUrl,
  hideDownload = false,
}: {
  title: string;
  desc: string;
  specs: string[];
  img: string;
  brochureUrl: string;
  hideDownload?: boolean;
}) => {
  // Create a sanitized filename from the product title
  const downloadFileName =
    title
      .replace("Kirloskar ", "")
      .replace(/[^\w\s()-]/g, "")
      .trim() + " Brochure.pdf";

  return (
    <motion.article
      className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      {/* Increased image container height and image height */}
      <div className="w-full h-64 p-2 flex items-center justify-center overflow-hidden">
        <motion.img
          src={img}
          alt={title}
          className="object-contain w-full h-60 translate-y-1"
          style={{ background: "white" }}
          whileHover={{ scale: 1.07, rotate: 0.5 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <motion.h3
          className="text-xl font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-muted-foreground text-sm mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {desc}
        </motion.p>
        <div className="space-y-2 mb-6">
          {specs.map((spec, index) => (
            <motion.div
              key={spec}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <motion.span
                className="inline-flex items-center justify-center rounded-full bg-[#D6E8FA] h-5 w-5"
                whileHover={{ scale: 1.2, backgroundColor: "#bfdbfe" }}
              >
                <motion.span
                  className="h-2 w-2 rounded-full bg-[#2D6FBA]"
                  whileHover={{ scale: 1.3 }}
                />
              </motion.span>
              <span className="text-sm">{spec}</span>
            </motion.div>
          ))}
        </div>
        {!hideDownload && (
          <div className="mt-auto">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-full"
            >
              <a
                href={brochureUrl}
                download={downloadFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button className="bg-[#2D6FBA] hover:bg-[#22548e] text-white rounded-md overflow-hidden w-full group">
                  <div className="flex items-center justify-center gap-2">
                    <span>Download Brochure</span>
                    <motion.div
                      initial={{ y: 0 }}
                      whileHover={{ y: -3 }}
                      transition={{
                        duration: 0.2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 0.2,
                      }}
                    >
                      <Download className="h-4 w-4" />
                    </motion.div>
                  </div>
                </Button>
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </motion.article>
  );
};

const PowerSolutions = () => {
  const { data: homeCMS } = useSectionData<any>("home");
  const psCMS = homeCMS?.["power-solutions"] || {};

  const logoRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>(
    "CPCB4+ Diesel Generator",
  );

  const assocLogosList = Array.isArray(psCMS.assocLogos)
    ? psCMS.assocLogos.map((item: any) =>
        typeof item === "string"
          ? { url: item, alt: "" }
          : {
              url: item.url || item.image || "",
              alt: item.name || item.alt || "",
            },
      )
    : [];

  // Categories for the navigation tabs - CPCB4+ Diesel Generator first
  const categories = [
    "CPCB4+ Diesel Generator",
    "Optiprime Generators",
    "Gas Generators",
    "Portable Generators",
    "Electrical Panels",
    "Servo Stabilizers",
    "Transformers",
  ];

  // Reset filters when category changes
  useEffect(() => {
    // Component cleanup if needed
  }, [activeCategory]);

  const getCategoryProducts = (category: string) => {
    if (Array.isArray(psCMS.products)) {
      const filtered = psCMS.products.filter(
        (p: any) =>
          p.category === category ||
          (p.category &&
            p.category.toLowerCase().trim() ===
              category.toLowerCase().trim()) ||
          (p.category &&
            p.category.toLowerCase().replace(/s$/, "").trim() ===
              category.toLowerCase().replace(/s$/, "").trim()),
      );
      return filtered.map((p: any) => ({
        title: p.title || p.name || "",
        desc: p.desc || p.description || "",
        specs: Array.isArray(p.specs)
          ? p.specs
          : typeof p.specs === "string"
            ? p.specs
                .split(/[\n,]+/)
                .map((s: string) => s.trim())
                .filter(Boolean)
            : [],
        img: p.img || p.image || "",
        brochureUrl: p.brochureUrl || "",
      }));
    }
    return [];
  };

  const currentProducts = getCategoryProducts(activeCategory);

  return (
    <section id="solutions" className="py-0">
      {/* Hero Image Section moved to the top */}
      <motion.div
        className="w-full flex justify-center items-center py-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={psCMS.topBannerImg || ""}
          alt="All Products"
          className="w-full h-[180px] sm:h-[250px] md:h-[250px] object-cover rounded-none"
          style={{ maxWidth: "100vw" }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>

      {/* Breadcrumb Navigation */}
      <motion.div
        className="bg-gray-50 border-b"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <div className="container mx-auto px-4 md:px-0 py-3">
          <div className="flex items-center text-sm">
            <Link
              to={psCMS.breadcrumbHomeUrl || ""}
              className="text-gray-500 hover:text-[#2D6FBA]"
            >
              {psCMS.breadcrumbHomeLabel || ""}
            </Link>
            <span className="mx-2 text-gray-400">›</span>
            <Link
              to={psCMS.breadcrumbProductsUrl || ""}
              className="text-gray-500 hover:text-[#2D6FBA]"
            >
              {psCMS.breadcrumbProductsLabel || ""}
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Section Title */}
      <motion.div
        className="container mx-auto px-4 md:px-0 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-1"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {psCMS.sectionTitle || ""}
        </motion.h2>
        <motion.div
          className="w-16 h-1 rounded mb-6"
          style={{ background: "#2D6FBA" }}
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        ></motion.div>
      </motion.div>

      {/* Category Navigation */}
      <div className="bg-gray-50 border-b mb-6">
        <div className="container mx-auto px-4 md:px-0 overflow-x-auto">
          <div className="flex space-x-6 py-3 min-w-max">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap py-2 px-1 border-b-2 transition-colors ${
                  activeCategory === category
                    ? "border-[#2D6FBA] text-[#2D6FBA] font-medium"
                    : "border-transparent text-gray-600 hover:text-[#2D6FBA]"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content - remove grid and use full width */}
      <div className="container mx-auto px-4 md:px-0">
        {/* Content takes full width */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <AnimatePresence>
            <motion.div
              key={activeCategory}
              className="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {currentProducts.map((product, idx) => (
                <PSCard
                  key={`${activeCategory}-${idx}`}
                  title={product.title}
                  desc={product.desc}
                  specs={product.specs}
                  img={product.img}
                  brochureUrl={product.brochureUrl}
                  hideDownload={[
                    "Electrical Panels",
                    "Servo Stabilizers",
                    "Transformers",
                  ].includes(activeCategory)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Simplified empty state */}
          {currentProducts.length === 0 && (
            <motion.div
              className="flex flex-col items-center justify-center py-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-gray-300 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </motion.svg>
              <motion.h3
                className="text-xl font-medium text-gray-900 mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                No products available
              </motion.h3>
              <motion.p
                className="text-gray-500"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                We're currently updating our {activeCategory} catalog.
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Members of Associations Section */}
      {/* Members of Associations Section */}
      <motion.div
        className="container mx-auto mt-10 md:mt-20 mb-10 px-4 md:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <h3 className="text-4xl md:text-5xl font-semibold">
            {psCMS.assocTitle || ""}
          </h3>
          <p className="text-gray-600 mt-4 text-lg">
            {psCMS.assocSubtitle || ""}
          </p>
        </motion.div>

        {/* Association logos sliding gallery */}
        {assocLogosList.length > 0 && (
          <motion.div
            className="relative overflow-hidden bg-transparent p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            <div className="relative overflow-hidden">
              <div className="logo-scroll flex items-center gap-12">
                {[...assocLogosList, ...assocLogosList].map(
                  (logo: any, idx: number) => (
                    <motion.div
                      key={`${logo.url || idx}-${idx}`}
                      className="flex-shrink-0 h-24 w-40 flex items-center justify-center p-3"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={logo.url || logo}
                        alt={logo.alt || ""}
                        className="h-full w-full object-contain"
                      />
                    </motion.div>
                  ),
                )}
              </div>
            </div>
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </motion.div>
        )}

        <motion.div
          className="text-center mt-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.5 }}
        >
          <p className="text-sm">
            {psCMS.assocFooterText || psCMS.assocFooterNote || ""}
          </p>
        </motion.div>
      </motion.div>

      {/* Power in Action Section */}
      <motion.div
        className="container mx-auto mt-16 mb-12 px-4 md:px-0 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.5 }}
        >
          {psCMS.actionTitle || ""}
        </motion.h2>
        <motion.div
          className="mx-auto w-24 h-1 bg-black mt-2"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 2.0, duration: 0.5 }}
        ></motion.div>
      </motion.div>

      {/* Updated CSS for scrolling animation */}
      <style>{`
        .logo-scroll {
          animation: scroll-logos 30s linear infinite;
        }

        .logo-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default PowerSolutions;
