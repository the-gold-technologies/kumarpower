import diesel from "@/assets/Products/OPTIPRIMEGEN.png";
import gas from "@/assets/Products/15GAS.jpeg";
import portable from "@/assets/Products/200CPCB.jpeg";
import portable1 from "@/assets/Products/2.1PORTABLE.jpeg";
import portable2 from "@/assets/Range5.png";
import portable3 from "@/assets/Range6.png";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import dG1 from "@/assets/Products/7.5CPCB.jpeg";
import dG2 from "@/assets/Products/82.5CPCB.jpeg";
import DG320 from "@/assets/Products/320CPCB.jpeg";
import dG3 from "@/assets/Products/25CPCB.jpeg";
import dG4 from "@/assets/Kumar Assets/62.5KVA DG.png";
import dG5 from "@/assets/Products/750CPCB.jpeg";
import optiprime from "../../assets/Brochure/OPTIPRIME- 117,400,500,640,1000,1500 & 2020 KVA.pdf";
import Cpcb from "@/assets/Brochure/7.5-20 kVA.pdf";
import cpcb58 from "@/assets/Brochure/25-58.5.pdf";
import cpcb160 from "@/assets/Brochure/82.5-160.pdf";
import cpcb250 from "@/assets/Brochure/200-250.pdf";
import cpcb320 from "@/assets/Brochure/320-750.pdf";
import cpcb750 from "@/assets/Brochure/750 kVA-1500 kVA.pdf";
import Gase from "@/assets/Brochure/NEW CATELOG - GAS GENSET.pdf";
import sential from "@/assets/Brochure/4.Kirloskar powergen_Sentinel series Genset.pdf"

// Animated Card component
const Card = ({
  title,
  img,
  caption,
  brochureUrl,
}: {
  title: string;
  img: string;
  caption: string;
  brochureUrl: string;
}) => {
  // Create a sanitized filename from the generator title
  const downloadFileName = title
    .replace('Kirloskar ', '')
    .replace(/[^\w\s()-]/g, '')
    .trim() + ' Brochure.pdf';
  
  return (
    <motion.article
      className="overflow-hidden flex flex-col shadow bg-gray-900 rounded-lg border border-gray-800 h-[420px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        scale: 1.03,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        borderColor: "#2D6FBA",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="w-full h-[200px] flex items-center justify-center overflow-hidden bg-white">
        <motion.img
          src={img}
          alt={title}
          className="object-contain w-full h-[180px]"
          loading="lazy"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.12, rotate: 0.5 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        />
      </div>
      <motion.div
        className="p-4 flex-1 flex flex-col"
        initial={{
          background:
            "linear-gradient(180deg, rgba(17, 24, 39, 0) 0%, rgba(17, 24, 39, 1) 100%)",
        }}
        whileHover={{
          background:
            "linear-gradient(180deg, rgba(45, 111, 186, 0) 0%, rgba(45, 111, 186, 0.2) 100%)",
        }}
      >
        <motion.h3
          className="font-semibold mb-1 text-lg h-[52px] line-clamp-2"
          whileHover={{ color: "#2D6FBA" }}
        >
          {title}
        </motion.h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3 h-[60px]">{caption}</p>
        <div className="flex items-center gap-2 mt-auto">
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
              <Button
                size="sm"
                className="overflow-hidden group relative bg-[#2D6FBA] hover:bg-[#22548e] w-full"
                variant="default"
              >
                <motion.span initial={{ opacity: 1 }} whileHover={{ opacity: 0.9 }}>
                  Download Brochure
                </motion.span>
                <motion.div
                  className="ml-1 inline-flex"
                  initial={{ y: 0 }}
                  whileHover={{ y: -3 }}
                  transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 0.2,
                  }}
                >
                  <Download className="h-4 w-4 group-hover:text-white" />
                </motion.div>
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-white"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.article>
  );
};

const GeneratorRange = () => {
  // Define generator types for filtering
  const filterTypes = [
    "All",
    "CPCB4+ Diesel Generators",
    "Gas Generators",
    "Portable Generators",
    "Optiprime",
  ];
  const [activeFilter, setActiveFilter] = useState("All");

  // Define data with categories for filtering
  const generatorData = [
    {
      title: "Kirloskar Optiprime Generator (125 – 6600 kVA)",
      img: diesel,
      caption:
        "High-output Kirloskar Optiprime engineered for mission-critical facilities.",
      categories: ["Optiprime"],
      brochureUrl: optiprime,
    },
    {
      title: "Kirloskar Gas Generator (15 – 250 kVA)",
      img: gas,
      caption:
        "Clean, efficient power for commercial and industrial applications.",
      categories: ["Gas Generators"],
      brochureUrl: Gase,
    },
    {
      title: "Kirloskar CPCB4+ Diesel Generator (7.5 – 20 kVA)",
      img: dG1,
      caption: "Portable power for events, remote sites, and emergency backup.",
      categories: ["CPCB4+ Diesel Generators"],
      brochureUrl: Cpcb,
    },
    {
      title: "Kirloskar CPCB4+ Diesel Generator (25 – 58.5 kVA)",
      img: dG3,
      caption: "Balanced performance for medium-scale industrial needs.",
      categories: ["CPCB4+ Diesel Generators"],
      brochureUrl: cpcb58,
    },
    {
      title: "Kirloskar CPCB4+ Diesel Generator (82.5 – 160 kVA)",
      img: dG2,
      caption: "Scalable solutions with robust service network coverage.",
      categories: ["CPCB4+ Diesel Generators"],
      brochureUrl: cpcb160,
    },
    {
      title: "Kirloskar CPCB4+ Diesel Generator (200 – 250 kVA)",
      img: portable,
      caption: "Versatile DG sets for plants, campuses, and commercial towers.",
      categories: ["CPCB4+ Diesel Generators"],
      brochureUrl: cpcb250,
    },
    {
      title: "Kirloskar CPCB4+ Diesel Generator (320 – 750 kVA)",
      img: DG320,
      caption: "Durable, high-efficiency backup for industries and campuses.",
      categories: ["CPCB4+ Diesel Generators"],
      brochureUrl: cpcb320,
    },
    {
      title: "Kirloskar CPCB4+ Diesel Generator (750 – 1500 kVA)",
      img: dG5,
      caption: "Low-emission, reliable diesel generator for versatile use.",
      categories: ["CPCB4+ Diesel Generators"],
      brochureUrl: cpcb750,
    },
    {
      title: "Kirloskar Portable Generator (2.1 – 5 kVA)",
      img: portable1,
      caption:
        "Compact portable power for small-scale events, sites, and emergency use.",
      categories: ["Portable Generators"],
      brochureUrl: sential,
    },
  ];

  // Filter generators based on the active filter
  const filteredGenerators =
    activeFilter === "All"
      ? generatorData
      : generatorData.filter((generator) =>
          generator.categories.includes(activeFilter)
        );

  return (
    <motion.section
      id="range"
      className="py-16 bg-black text-primary-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-5xl font-extralight tracking-tighter mb-2">
            Explore Our Generator Range
            <motion.div
              className="h-1 w-24"
              style={{ background: "#2D6FBA" }}
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </h2>
          <p className="text-white mt-6 mb-8">
            Kirloskar-certified systems tailored for industrial, commercial, and
            backup applications. Download brochures for detailed specifications.
          </p>
        </motion.div>

        {/* Interactive filter buttons */}
        <motion.div
          className="flex flex-wrap gap-x-6 gap-y-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filterTypes.map((type, index) => (
            <motion.button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors ${
                activeFilter === type
                  ? "bg-[#2D6FBA] text-white"
                  : "hover:bg-gray-800"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{
                scale: 1.08,
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className={`inline-block h-3 w-3 rounded-full ${
                  activeFilter === type ? "bg-white" : "bg-white/70"
                }`}
                animate={{
                  scale: activeFilter === type ? [1, 1.2, 1] : 1,
                }}
                whileHover={{
                  backgroundColor:
                    activeFilter === type
                      ? "#fff"
                      : "rgba(255, 255, 255, 0.9)",
                  scale: 1.2,
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-base font-medium">{type}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Filtered generator grid */}
        {filteredGenerators.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
            transition={{
              layout: { duration: 0.6, type: "spring", bounce: 0.25 },
            }}
          >
            <AnimatePresence mode="wait">
              {filteredGenerators.map((generator, index) => (
                <motion.div
                  key={generator.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                  className="flex"
                >
                  <Card
                    title={generator.title}
                    img={generator.img}
                    caption={generator.caption}
                    brochureUrl={generator.brochureUrl}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl">No generators found in this category.</p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default GeneratorRange;

