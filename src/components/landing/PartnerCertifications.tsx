import React from "react";
import kirloskarPowergen from "@/assets/associations/kirloskar_powergen.png";
import kirloskarOilEngines from "@/assets/associations/assoc6.png";
import iiaLogo from "@/assets/associations/iia_logo.svg";
import baiLogo from "@/assets/associations/assoc1.png";
import ipaLogo from "@/assets/associations/assoc2.png";
import mbaLogo from "@/assets/associations/assoc3.png";
import bniLogo from "@/assets/associations/assoc4.png";
import wsccLogo from "@/assets/associations/assoc5.png";
import isoLogo from "@/assets/iso profile.png";
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
import certi1 from "@/assets/certi1.png";
import certi2 from "@/assets/certi2.png";
import certi3 from "@/assets/certi3.png";
import certi4 from "@/assets/certi4.png";
import certi5 from "@/assets/certi5.png";
import certi6 from "@/assets/certi6.png";
import certi7 from "@/assets/certi7.png";
import certi8 from "@/assets/certi8.png";
import { useSectionData } from "@/store/useCMSStore";

const fallbackLogos = [
  { src: kirloskarPowergen, alt: "Kirloskar Powergen" },
  { src: kirloskarOilEngines, alt: "Kirloskar Oil Engines" },
  { src: iiaLogo, alt: "Indian Industries Association (IIA)" },
  { src: baiLogo, alt: "Builders' Association of India (BAI)" },
  { src: ipaLogo, alt: "Indian Plumbing Association (IPA)" },
  { src: mbaLogo, alt: "MES Builders Association of India (MBA)" },
  { src: bniLogo, alt: "BNI" },
  { src: wsccLogo, alt: "World Sikh Chamber of Commerce (WSCC)" },
  { src: isoLogo, alt: "ISO 9001:2015 Quality Management" },
  { src: certi1, alt: "MBA Member Association" },
  { src: certi2, alt: "BNI Member Association" },
  { src: certi3, alt: "Kirloskar Oil Engines Partner" },
  { src: certi4, alt: "WSCC World Sikh Chamber of Commerce" },
  { src: certi5, alt: "BAI Builders Association of India" },
  { src: certi6, alt: "Member Association" },
  { src: certi7, alt: "Industry Quality Alliance" },
  { src: certi8, alt: "Statutory Standards Certification" },
  { src: trust, alt: "Seasons" },
  { src: trust1, alt: "SIS Security" },
  { src: trust2, alt: "Vistara" },
  { src: trust3, alt: "GMR Infra" },
  { src: trust4, alt: "Honeywell" },
  { src: trust5, alt: "Kashyapi" },
  { src: trust6, alt: "Caritas" },
  { src: trust7, alt: "CEC" },
  { src: ace, alt: "ACE Construction" },
  { src: claroin, alt: "Clarion" },
  { src: Comed, alt: "Comed" },
  { src: Dps, alt: "DPS" },
  { src: GEPL, alt: "GEPL" },
  { src: addidas, alt: "Adidas" },
];

export const PartnerCertifications: React.FC = () => {
  const { data: homeCMS } = useSectionData<any>("home");
  const psCMS = homeCMS?.["power-solutions"] || {};

  // Display all fallbackLogos directly
  const logoList = fallbackLogos;

  // Production Infinite Marquee Engine: Dynamically calculate optimal repeat count
  // to ensure 100% full screen coverage on any resolution (including 4K) without DOM bloat.
  const repeatFactor = Math.max(3, Math.ceil(32 / (logoList.length || 1)));
  const extendedLogos = Array.from({ length: repeatFactor }).flatMap(
    () => logoList,
  );

  return (
    <section className="py-16 sm:py-20 bg-slate-950 text-white relative border-b border-slate-800/80 overflow-hidden">
      {/* Soft Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#1A6AA2]/15 blur-[140px] pointer-events-none rounded-full" />

      {/* Centered Dark Mode Header */}
      <div className="container mx-auto px-4 max-w-5xl text-center relative z-10 mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Trusted Association
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-3xl mx-auto font-normal">
          Certified and recognized by leading industry organizations for quality
          and excellence
        </p>
      </div>

      {/* Edge-to-Edge Dark Marquee Logo Slider Track */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Edge Gradient Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-44 z-20 pointer-events-none bg-gradient-to-r from-slate-950 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-44 z-20 pointer-events-none bg-gradient-to-l from-slate-950 to-transparent" />

        {/* GPU-Accelerated Infinite Marquee Track */}
        <div className="logo-scroll flex items-center gap-8 sm:gap-10">
          {extendedLogos.map((logo: any, idx: number) => (
            <div
              key={idx}
              className="flex-shrink-0 h-20 sm:h-24 w-44 sm:w-52 bg-white rounded-xl shadow-md p-3 sm:p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo.src || logo}
                alt={logo.alt || `Partner Logo ${idx + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCertifications;
