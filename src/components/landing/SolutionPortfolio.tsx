import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import ps1 from "@/assets/ps1.png";
import ps2 from "@/assets/ps2.png";
import ps3 from "@/assets/ps3.png";
import ps4 from "@/assets/ps4.png";
import range1 from "@/assets/Range1.png";

interface CategoryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  features: string[];
  link: string;
}

const portfolioCategories: CategoryItem[] = [
  {
    id: "uninterrupted-power",
    title: "Uninterrupted Power",
    subtitle: "For facilities where downtime causes massive financial loss.",
    image: ps1,
    features: ["CPCB IV+ Gensets", "BESS", "UPS Inverter", "Solar"],
    link: "/products/kirloskar-diesel-generator",
  },
  {
    id: "electrical-distribution",
    title: "Electrical Distribution",
    subtitle: "Safe, controlled power routing from incoming high-voltage grid.",
    image: ps2,
    features: ["Transformers", "HT/LT Panels"],
    link: "/products/transformers",
  },
  {
    id: "renewable-integration",
    title: "Renewable Energy Integration",
    subtitle: "Integrating rooftop solar with battery storage and standby DG.",
    image: range1,
    features: ["Solar Energy", "BESS", "EV Charging Station"],
    link: "/products",
  },
  {
    id: "power-quality",
    title: "Power Quality & Protection",
    subtitle: "Eliminating voltage sag, harmonics, & power factor penalties.",
    image: ps4,
    features: ["Servo Stabilisers", "APFC Banks", "Surge Panels"],
    link: "/products/servo-stabilizer",
  },
  {
    id: "turnkey-projects",
    title: "Turnkey Electrical Projects",
    subtitle: "Single-point EPC accountability from concept to commissioning.",
    image: ps3,
    features: ["Design & EPC", "Heavy Cabling", "Substations", "Testing & AMC"],
    link: "/services/installation",
  },
];

export const SolutionPortfolio: React.FC = () => {
  return (
    <section
      id="solutions-portfolio"
      className="py-24 bg-white text-slate-900 relative border-b border-slate-200"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A6AA2]/10 border border-[#1A6AA2]/20 text-xs font-bold uppercase tracking-widest text-[#1A6AA2]">
            Comprehensive Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            What Power Challenge Are You Solving?
          </h2>
          <p className="text-slate-600 text-lg font-normal">
            We structure complete electrical power systems around your specific
            operational challenge rather than displaying generic equipment
            inventory.
          </p>
        </div>

        {/* Portfolio Cards Grid - Exact Original Design & Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioCategories.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white border border-slate-200 hover:border-[#1A6AA2] transition-all duration-300 overflow-hidden flex flex-col group hover:shadow-xl shadow-sm"
            >
              {/* Image Banner - Exact Original Design */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-bold text-white drop-shadow">
                  {item.title}
                </h3>
              </div>

              {/* Body - Exact Original Design */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-sm font-semibold text-[#1A6AA2] mb-4">
                    {item.subtitle}
                  </p>

                  <ul className="space-y-2.5">
                    {item.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-slate-700 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#1A6AA2] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={item.link}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A6AA2] hover:text-[#145380] transition-colors pt-4 border-t border-slate-100"
                >
                  <span>Explore Category Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionPortfolio;
