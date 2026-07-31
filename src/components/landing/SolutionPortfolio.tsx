import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import ps1 from "@/assets/ps1.png";
import ps2 from "@/assets/ps2.png";
import ps3 from "@/assets/ps3.png";
import ps4 from "@/assets/ps4.png";
import optiprimeGen from "@/assets/Products/OPTIPRIMEGEN.png";
import range1 from "@/assets/Range1.png";
import range4 from "@/assets/Range4.png";

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
    id: "power-generation",
    title: "Power Generation",
    subtitle: "Dependable standby & prime diesel power systems.",
    image: ps1,
    features: [
      "Kirloskar CPCB IV+ DG sets",
      "Silent diesel generators",
      "Prime & standby power architecture",
      "Multi-genset synchronisation solutions",
      "RECD retrofit emission solutions",
    ],
    link: "/products/kirloskar-diesel-generator",
  },
  {
    id: "transformers",
    title: "Transformers",
    subtitle: "High-efficiency step-up, step-down & isolation transformers.",
    image: ps2,
    features: [
      "Distribution transformers",
      "Isolation transformers",
      "Dry-type cast resin transformers",
      "Application-specific customized solutions",
    ],
    link: "/products/transformers",
  },
  {
    id: "electrical-panels",
    title: "Electrical Panels",
    subtitle: "Custom switchgear, power control & distribution panels.",
    image: ps3,
    features: [
      "AMF & automatic changeover (ATS) panels",
      "HT and LT switchgear panels",
      "APFC power factor correction panels",
      "PCC (Power Control) & MCC (Motor Control) panels",
      "Sub-metering & floor distribution boards",
    ],
    link: "/products/panels",
  },
  {
    id: "battery-storage",
    title: "Battery Energy Storage (EnerCube)",
    subtitle: "kWh to containerised MWh-scale smart BESS systems.",
    image: optiprimeGen,
    features: [
      "Commercial & Industrial (C&I) BESS",
      "Peak shaving & demand charge reduction",
      "DG mitigation & solar energy storage",
      "Seamless sub-cycle backup power",
    ],
    link: "/products/optiprime",
  },
  {
    id: "solar-renewable",
    title: "Solar & Renewable Energy",
    subtitle: "Turnkey PV installations & hybrid power architectures.",
    image: range1,
    features: [
      "Rooftop & ground-mounted commercial solar",
      "Solar-plus-storage hybrid power systems",
      "DG-Solar-Battery smart integration",
      "Energy management systems (EMS)",
    ],
    link: "/products",
  },
  {
    id: "power-quality",
    title: "Power Quality & Conditioning",
    subtitle: "Harmonic filtering & precise voltage regulation.",
    image: ps4,
    features: [
      "Servo voltage stabilisers",
      "APFC reactive power management",
      "Active & passive harmonic filters",
      "Equipment protection & transient surge panels",
    ],
    link: "/products/servo-stabilizer",
  },
  {
    id: "turnkey-projects",
    title: "Turnkey Projects & Services",
    subtitle: "Complete EPC, cabling, installation & lifecycle support.",
    image: range4,
    features: [
      "Comprehensive site load assessment & engineering",
      "Supply, cabling & earthing grid execution",
      "Testing, commissioning & statutory approvals",
      "Annual Maintenance Contracts (AMC) & 24/7 support",
    ],
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
            Our Electrical Solution Portfolio
          </h2>
          <p className="text-slate-600 text-lg font-normal">
            Engineered systems designed to work seamlessly together across
            generation, transformation, distribution, and storage.
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
