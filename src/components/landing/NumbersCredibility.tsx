import React from "react";
import { ShieldCheck, Award, Zap, Globe2 } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "30+",
    unit: "Years",
    label: "Years of Experience",
    subtext: "Delivering reliable electrical infrastructure since 1985.",
  },
  {
    icon: ShieldCheck,
    value: "5,000+",
    unit: "Projects",
    label: "Projects Executed",
    subtext:
      "Across commercial, industrial, residential & institutional sectors.",
  },
  {
    icon: Zap,
    value: "250+",
    unit: "MW",
    label: "Largest Electrical Solutions Portfolio",
    subtext: "Generators, transformers & solar-BESS systems.",
  },
  {
    icon: Globe2,
    value: "Pan-India",
    unit: "Reach",
    label: "Project Capability",
    subtext: "Turnkey installation & 24/7 service network.",
  },
];

export const NumbersCredibility: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-white border-b border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 transition-all duration-300 text-center relative overflow-hidden group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>

                <div className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  {stat.label}
                </div>

                <p className="text-xs text-slate-400 font-light">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NumbersCredibility;
