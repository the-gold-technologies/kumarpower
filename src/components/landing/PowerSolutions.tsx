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
  const logoRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>(
    "CPCB4+ Diesel Generator",
  );

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

  // Category-specific product data
  const categoryProducts = {
    "Optiprime Generators": [
      {
        title: "Kirloskar Optiprime Generator",
        desc: "Advanced diesel generators with CPCB4+ compliance, offering superior fuel efficiency and eco-friendly operations.",
        specs: [
          "125 kva - 6600 kva",
          "CPCB4+ Compliant",
          "3 Phase Output",
          "Fuel: Diesel",
          "Application: Industrial, Commercial",
          "Certification: ISO 9001, CPCB-4+, Kirloskar Authorized",
        ],
        img: diesel,
        brochureUrl: optiprime,
      },
    ],
    "Gas Generators": [
      {
        title: "Gas Generators",
        desc: "Eco-friendly natural gas and LPG generators with lower emissions and operational costs for sustainable power generation.",
        specs: [
          "15 kVA - 250 kVA",
          "Low Emissions",
          "Quiet Operation",
          "Fuel: Natural Gas, LPG",
          "Application: Industrial, Commercial, Residential",
          "Certification: ISO 9001, CPCB-4+, Kirloskar Authorized",
        ],
        img: gas,
        brochureUrl: Gase,
      },
    ],
    "Portable Generators": [
      {
        title: "Portable Generators",
        desc: "Compact and mobile power solutions for construction sites, events, and emergency backup with easy transport features.",
        specs: [
          "2.1 kVA to 5 kVA",
          "Lightweight Design",
          "Fuel: Portable, Diesel",
          "Application: Construction, Events, Residential",
          "Certification: ISO 9001, CPCB-4+, Kirloskar Authorized",
        ],
        img: portable,
        brochureUrl: sential,
      },
    ],
    "CPCB4+ Diesel Generator": [
      {
        title: "CPCB4+ Diesel Generators( 7.5 kVA - 20 kVA)",
        desc: "Compact CPCB4+ compliant diesel generators designed for small businesses and commercial setups.",
        specs: [
          "Range: 7.5 kVA - 20 kVA",
          "CPCB Norm: CPCB4+ Emission Compliance",
          "Fuel: Diesel",
          "Cooling: Liquid",
          "Phase: Three Phase",
          "Application: Residential, Small Commercial",
          "Certification: ISO 9001, CPCB-4+, Kirloskar Authorized",
        ],
        img: dg1,
        brochureUrl: Cpcb,
      },
      {
        title: "CPCB4+ Diesel Generators(25 kVA - 58.5 kVA)",
        desc: "Reliable CPCB4+ emission compliant diesel generators with advanced liquid cooling for efficient performance.",
        specs: [
          "Range: 25 kVA - 58.5 kVA",
          "CPCB Norm: CPCB4+ Emission Compliance",
          "Fuel: Diesel",
          "Cooling: Liquid",
          "Phase: Three Phase",
          "Application: Industrial, Commercial",
          "Certification: ISO 9001, CPCB-4+, Kirloskar Authorized",
        ],
        img: dg3,
        brochureUrl: cpcb58,
      },
      {
        title: "CPCB4+ Diesel Generators(82.5 kVA - 160 kVA)",
        desc: "Versatile CPCB4+ compliant diesel generators designed for medium-scale industries and businesses.",
        specs: [
          "Range: 82.5 kVA - 160 kVA",
          "CPCB Norm: CPCB4+ Emission Compliance",
          "Fuel: Diesel",
          "Cooling: Liquid",
          "Phase: Three Phase",
          "Application: Industrial, Commercial",
          "Certification: ISO 9001, CPCB-4+, Kirloskar Authorized",
        ],
        img: dg2,
        brochureUrl: cpcb160,
      },
      {
        title: "CPCB4+ Diesel Generators(200 kVA - 250 kVA)",
        desc: "High-performance CPCB4+ compliant diesel generators with liquid cooling, ideal for industrial and commercial usage.",
        specs: [
          "Range: 200 kVA - 250 kVA",
          "CPCB Norm: CPCB4+ Emission Compliance",
          "Fuel: Diesel",
          "Cooling: Liquid",
          "Phase: Three Phase",
          "Application: Industrial, Commercial",
          "Certification: ISO 9001, CPCB-4+, Kirloskar Authorized",
        ],
        img: dg200,
        brochureUrl: cpcb250,
      },
      {
        title: "CPCB4+ Diesel Generators(320 kVA - 750 kVA)",
        desc: "Heavy-duty CPCB4+ compliant diesel generators offering superior efficiency and power reliability.",
        specs: [
          "Range: 320 kVA - 750 kVA",
          "CPCB Norm: CPCB4+ Emission Compliance",
          "Fuel: Diesel",
          "Cooling: Liquid",
          "Phase: Three Phase",
          "Application: Large Industrial, Commercial",
          "Certification: ISO 9001, CPCB-4+, Kirloskar Authorized",
        ],
        img: dg4,
        brochureUrl: cpcb320,
      },
      {
        title: "CPCB4+ Diesel Generators(750 kVA - 1500 kVA)",
        desc: "High-capacity CPCB4+ diesel generators for continuous heavy industrial and commercial applications.",
        specs: [
          "Range: 750 kVA - 1500 kVA",
          "CPCB Norm: CPCB4+ Emission Compliance",
          "Fuel: Diesel",
          "Cooling: Liquid",
          "Phase: Three Phase",
          "Application: Heavy Industrial, Commercial Complexes",
          "Certification: ISO 9001, CPCB-4+, Kirloskar Authorized",
        ],
        img: dg5,
        brochureUrl: cpcb750,
      },
    ],
    Inverters: [
      {
        title: "Home Inverters",
        desc: "Reliable power backup solutions for residential use with quick switchover and battery management.",
        specs: [
          "600VA - 3500VA",
          "Pure Sine Wave",
          "LCD Display",
          "Application: Home",
          "Type: Pure Sine Wave",
          "Features: Battery Management, LCD Display",
        ],
        img: ups,
        brochureUrl: sential, // Default brochure for inverters
      },
      {
        title: "Solar Inverters",
        desc: "Harness solar energy with efficient conversion and battery charging capabilities for sustainable power.",
        specs: [
          "1kW - 100kW",
          "MPPT Technology",
          "Grid-tie Option",
          "Application: Solar, Commercial",
          "Type: Solar Hybrid",
          "Features: MPPT, Mobile App",
        ],
        img: portable,
        brochureUrl: sential, // Default brochure for inverters
      },
    ],
    "Variable Frequency Drives (VFDs)": [
      {
        title: "AC Drives",
        desc: "Precise motor control solutions for industrial applications, offering energy savings and process optimization.",
        specs: [
          "0.25kW - 800kW",
          "Vector Control",
          "IP54 Protection",
          "Application: Manufacturing, Conveyors",
          "Control Type: Vector Control",
          "Protection: IP54",
        ],
        img: gas,
        brochureUrl: sential, // Default brochure for VFDs
      },
      {
        title: "HVAC Drives",
        desc: "Specialized VFDs for HVAC applications with building automation integration capabilities.",
        specs: [
          "Fan & Pump Control",
          "BMS Compatible",
          "Energy Monitoring",
          "Application: HVAC, Pumps",
          "Control Type: Closed Loop",
          "Protection: IP20",
        ],
        img: diesel,
        brochureUrl: sential, // Default brochure for VFDs
      },
    ],
    "Electrical Panels": [
      {
        title: "AMF Panels",
        desc: "Automatic Mains Failure panels for seamless switching between mains and backup power supply, ensuring uninterrupted operation.",
        specs: [
          "Auto/Manual Operation",
          "Engine Protection",
          "Programmable Logic Control",
          "Current Rating: 100-630A",
          "Application: Synchronization & Backup Power",
          "Certification: ISO 9001, CPCB-4+, Kirloskar Authorized",
        ],
        img: Panel6,
        brochureUrl: sential, // Default brochure for panels
      },
      {
        title: "Vacuum Circuit Breaker",
        desc: "High-performance vacuum circuit breakers designed for medium voltage applications, ensuring safe and reliable power distribution.",
        specs: [
          "Voltage Rating: Up to 36kV",
          "Interrupting Medium: Vacuum",
          "Low Maintenance Design",
          "Application: Industrial & Utility Systems",
          "High Dielectric Strength",
          "Certification: ISO 9001, CPCB-4+, Kirloskar Authorized",
        ],
        img: Panel2,
        brochureUrl: sential, // Default brochure for panels
      },

      {
        title: "Distribution Boxes",
        desc: "Sturdy and safe distribution boxes to manage and distribute electrical power efficiently for various installations.",
        specs: [
          "Voltage Rating: Up to 415V",
          "Circuit Protection with MCB/ELCB",
          "Compact & Robust Design",
          "Application: Residential, Commercial & Industrial",
          "Wall or Floor Mounted",
          "Certification: ISO 9001, CPCB-4+, Kirloskar Authorized",
        ],
        img: Panel7,
        brochureUrl: sential, // Default brochure for panels
      },
      {
        title: "Feeder Pillars",
        desc: "Robust outdoor electrical distribution pillars designed for safe and efficient power distribution in various environments.",
        specs: [
          "Voltage Rating: Up to 11kV",
          "Weather Resistant Design",
          "Anti-Corrosion Treatment",
          "Application: Street Lighting, Industrial Estates, Housing Projects",
          "IP54 Protection Rating",
          "Certification: ISO 9001, CPCB-4+, Kirloskar Authorized",
        ],
        img: Panel8,
        brochureUrl: sential, // Default brochure for panels
      },
    ],
    "Servo Stabilizers": [
      {
        title: "Oil Cooled Servo Stabilizers",
        desc: "Heavy-duty oil-cooled stabilizers designed for high-load applications, ensuring superior voltage regulation and thermal efficiency.",
        specs: [
          "Power Range: 5kVA - 5000kVA",
          "Cooling: Oil Immersion",
          "Voltage Accuracy: ±1%",
          "Phase: Single/Three Phase",
          "Application: Industrial Plants, HVAC Systems, Medical Equipment",
          "Features: Digital Metering, Overload & Short Circuit Protection",
        ],
        img: Servo1,
        brochureUrl: sential, // Default brochure for servo stabilizers
      },
      {
        title: "Air Cooled Servo Stabilizers",
        desc: "Compact and efficient air-cooled stabilizers for commercial and IT infrastructure, offering reliable power protection.",
        specs: [
          "Power Range: 5kVA - 500kVA",
          "Cooling: Natural/Forced Air",
          "Voltage Accuracy: ±1%",
          "Phase: Single/Three Phase",
          "Application: Data Centers, Offices, Laboratories",
          "Features: Digital Display, Fast Response, Overload Protection",
        ],
        img: Servo2,
        brochureUrl: sential, // Default brochure for servo stabilizers
      },
    ],
    Transformers: [
      {
        title: "Distribution Transformers",
        desc: "Reliable and efficient transformers designed for safe power distribution in commercial and industrial sectors.",
        specs: [
          "Capacity: 10kVA - 5000kVA",
          "Type: Oil-Filled/Dry Type",
          "Cooling: ONAN/ONAF",
          "Phase: Three Phase",
          "Application: Power Distribution, Utilities, Industries",
          "Standards: IS 1180, IEC 60076",
        ],
        img: Trans1,
        brochureUrl: sential, // Default brochure for transformers
      },
      {
        title: "Power Transformers",
        desc: "Heavy-duty power transformers designed for high voltage transmission with superior energy efficiency and performance.",
        specs: [
          "Capacity: 5MVA - 500MVA",
          "Type: Oil-Immersed",
          "Cooling: ONAF/OFWF",
          "Phase: Three Phase",
          "Application: Transmission, Generation Plants, Substations",
          "Standards: IEC 60076, ANSI",
        ],
        img: Trans2,
        brochureUrl: sential, // Default brochure for transformers
      },
      {
        title: "Cast Resin Transformers",
        desc: "Eco-friendly, low-maintenance dry-type transformers ideal for commercial and indoor installations.",
        specs: [
          "Capacity: 100kVA - 2500kVA",
          "Type: Epoxy Resin Encapsulated",
          "Cooling: Air Natural (AN)",
          "Phase: Three Phase",
          "Application: Indoor, Renewable, Commercial Buildings",
          "Standards: IEC 60076-11",
        ],
        img: Trans3,
        brochureUrl: sential, // Default brochure for transformers
      },
      {
        title: "Unitized Package Substation",
        desc: "Compact and factory-built substations designed for fast installation, providing safe and efficient power distribution.",
        specs: [
          "Voltage Rating: Up to 36kV",
          "Integrated Transformer, Switchgear & Protection",
          "Compact Outdoor Design",
          "Plug-and-Play Setup",
          "Application: Industrial, Commercial & Utility",
          "Certification: ISO 9001, CPCB-4+, Kirloskar Authorized",
        ],
        img: Panel4,
        brochureUrl: sential, // Default brochure for transformers
      },
    ],
  };

  // Reset filters when category changes
  useEffect(() => {
    // Component cleanup if needed
  }, [activeCategory]);

  // Remove the old GSAP animation logic - replaced with pure CSS

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
          src={allProductsImg}
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
            <Link to="/" className="text-gray-500 hover:text-[#2D6FBA]">
              Home
            </Link>
            <span className="mx-2 text-gray-400">›</span>
            <Link to="/products" className="text-gray-500 hover:text-[#2D6FBA]">
              Products
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
          Power Solutions
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
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {categoryProducts[
                activeCategory as keyof typeof categoryProducts
              ].map((product, idx) => (
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
          {categoryProducts[activeCategory as keyof typeof categoryProducts]
            .length === 0 && (
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
            Members of Associations
          </h3>
          <p className="text-gray-600 mt-4 text-lg">
            Certified and recognized by leading industry organizations for
            quality and excellence
          </p>
        </motion.div>

        {/* Association logos sliding gallery */}
        <motion.div
          className="relative overflow-hidden bg-transparent p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <div className="relative overflow-hidden">
            <div className="logo-scroll flex items-center gap-12">
              {/* Original set of association member images */}
              <motion.div
                className="flex-shrink-0 h-24 w-40 flex items-center justify-center p-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762843802/Screenshot_2025-11-11_121853_okz8x7.png"
                  alt="Association Member"
                  className="h-full w-full object-contain"
                />
              </motion.div>

              <motion.div
                className="flex-shrink-0 h-24 w-40 flex items-center justify-center p-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762843802/Screenshot_2025-11-11_121836_ayhhxd.png"
                  alt="Association Member"
                  className="h-full w-full object-contain"
                />
              </motion.div>

              <motion.div
                className="flex-shrink-0 h-24 w-40 flex items-center justify-center p-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762843802/Screenshot_2025-11-11_121914_yztxrf.png"
                  alt="Association Member"
                  className="h-full w-full object-contain"
                />
              </motion.div>

              <motion.div
                className="flex-shrink-0 h-24 w-40 flex items-center justify-center p-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762843802/Screenshot_2025-11-11_121748_ihrukv.png"
                  alt="Association Member"
                  className="h-full w-full object-contain"
                />
              </motion.div>

              <motion.div
                className="flex-shrink-0 h-24 w-40 flex items-center justify-center p-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://res.cloudinary.com/dmhabztbf/image/upload/c_crop,w_500/v1762843803/Screenshot_2025-11-11_121726_jic3vb.png"
                  alt="Association Member"
                  className="h-full w-full object-contain"
                />
              </motion.div>

              <motion.div
                className="flex-shrink-0 h-24 w-40 flex items-center justify-center p-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762843803/Screenshot_2025-11-11_121808_vm8yuc.png"
                  alt="Association Member"
                  className="h-full w-full object-contain"
                />
              </motion.div>

              {/* Duplicated set for seamless loop */}
              <motion.div
                className="flex-shrink-0 h-24 w-40 flex items-center justify-center p-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762843802/Screenshot_2025-11-11_121853_okz8x7.png"
                  alt="Association Member"
                  className="h-full w-full object-contain"
                />
              </motion.div>

              <motion.div
                className="flex-shrink-0 h-24 w-40 flex items-center justify-center p-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762843802/Screenshot_2025-11-11_121836_ayhhxd.png"
                  alt="Association Member"
                  className="h-full w-full object-contain"
                />
              </motion.div>

              <motion.div
                className="flex-shrink-0 h-24 w-40 flex items-center justify-center p-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762843802/Screenshot_2025-11-11_121914_yztxrf.png"
                  alt="Association Member"
                  className="h-full w-full object-contain"
                />
              </motion.div>

              <motion.div
                className="flex-shrink-0 h-24 w-40 flex items-center justify-center p-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762843802/Screenshot_2025-11-11_121748_ihrukv.png"
                  alt="Association Member"
                  className="h-full w-full object-contain"
                />
              </motion.div>

              <motion.div
                className="flex-shrink-0 h-24 w-40 flex items-center justify-center p-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762843803/Screenshot_2025-11-11_121726_jic3vb.png"
                  alt="Association Member"
                  className="h-full w-full object-contain"
                />
              </motion.div>

              <motion.div
                className="flex-shrink-0 h-24 w-40 flex items-center justify-center p-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762843803/Screenshot_2025-11-11_121808_vm8yuc.png"
                  alt="Association Member"
                  className="h-full w-full object-contain"
                />
              </motion.div>
            </div>
          </div>

          {/* Gradient overlays for smooth edge effect */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </motion.div>

        {/* Additional certification info */}
        <motion.div
          className="text-center mt-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.5 }}
        >
          <p className="text-sm">
            Our commitment to quality and excellence is recognized by
            industry-leading organizations
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
          Power in Action
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
