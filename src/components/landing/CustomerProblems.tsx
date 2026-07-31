import React from "react";
import {
  ShieldAlert,
  Network,
  CircleDollarSign,
  SunMedium,
  SlidersHorizontal,
  HardHat,
  ArrowUpRight,
} from "lucide-react";

import ps1 from "@/assets/ps1.png";
import ps2 from "@/assets/ps2.png";
import ps3 from "@/assets/ps3.png";
import ps4 from "@/assets/ps4.png";
import optiprimeGen from "@/assets/Products/OPTIPRIMEGEN.png";
import range1 from "@/assets/Range1.png";

const problems = [
  {
    id: "uninterrupted-power",
    icon: ShieldAlert,
    title: "Uninterrupted Power",
    subtitle: "For facilities where downtime causes massive financial loss.",
    image: ps1,
    tags: ["CPCB IV+ Gensets", "AMF Panels", "BESS Buffer", "Sync Controls"],
  },
  {
    id: "electrical-distribution",
    icon: Network,
    title: "Electrical Distribution",
    subtitle: "Safe, controlled power routing from incoming high-voltage grid.",
    image: ps2,
    tags: ["Transformers", "HT/LT Switchgear", "PCC/MCC", "Bus Ducts"],
  },
  {
    id: "energy-cost-reduction",
    icon: CircleDollarSign,
    title: "Energy Cost Reduction",
    subtitle: "Tackling high peak electricity demand tariffs & diesel bills.",
    image: optiprimeGen,
    tags: ["Peak Shaving BESS", "Solar PV", "APFC Panels", "Smart EMS"],
  },
  {
    id: "renewable-integration",
    icon: SunMedium,
    title: "Renewable Energy Integration",
    subtitle: "Integrating rooftop solar with battery storage and standby DG.",
    image: range1,
    tags: ["Commercial Solar", "EnerCube BESS", "Hybrid Controllers", "EMS"],
  },
  {
    id: "power-quality",
    icon: SlidersHorizontal,
    title: "Power Quality & Protection",
    subtitle: "Eliminating voltage sag, harmonics, & power factor penalties.",
    image: ps4,
    tags: [
      "Servo Stabilisers",
      "Harmonic Filters",
      "APFC Banks",
      "Surge Panels",
    ],
  },
  {
    id: "turnkey-projects",
    icon: HardHat,
    title: "Turnkey Electrical Projects",
    subtitle: "Single-point EPC accountability from concept to commissioning.",
    image: ps3,
    tags: ["Design & EPC", "Heavy Cabling", "Substations", "Testing & AMC"],
  },
];

export const CustomerProblems: React.FC = () => {
  const scrollToConsultation = () => {
    const el = document.getElementById("consultation-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-slate-950 text-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A6AA2]/20 border border-[#1A6AA2]/30 text-xs font-semibold uppercase tracking-widest text-[#1A6AA2]">
            Target Outcome Engineering
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            What Power Challenge Are You Solving?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We structure complete electrical power systems around your specific
            operational challenge rather than displaying generic equipment
            inventory.
          </p>
        </div>

        {/* Visual Media Cards Grid - Exact Original Design & Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={scrollToConsultation}
                className="relative h-[380px] rounded-3xl overflow-hidden cursor-pointer group border border-slate-800 hover:border-[#1A6AA2] transition-all duration-500 shadow-2xl flex flex-col justify-between p-8"
              >
                {/* Visual Image Background - Exact Original Layout */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-50 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />

                {/* Card Header Icon & Arrow */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#1A6AA2]/30 border border-[#1A6AA2]/40 backdrop-blur-md flex items-center justify-center text-[#1A6AA2] group-hover:bg-[#1A6AA2] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="p-2.5 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md text-slate-300 group-hover:text-white group-hover:bg-[#1A6AA2] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Card Bottom Overlay Details */}
                <div className="relative z-10 space-y-3">
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-[#1A6AA2] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {item.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700/60 text-[10px] font-semibold text-slate-200 backdrop-blur-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomerProblems;
