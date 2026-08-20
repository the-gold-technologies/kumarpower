import React, { useState } from "react";
import {
  ShieldCheck,
  Award,
  Cpu,
  Wrench,
  Headset,
  Sun,
  UserCheck,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Single-Point Responsibility",
    desc: "One engineering team coordinating generation, transformation, distribution, storage & turnkey execution.",
  },
  {
    icon: Award,
    title: "Established 35+ Year Track Record",
    desc: "Decades of proven power sector experience executing 5,000+ complex industrial and commercial projects.",
  },
  {
    icon: Cpu,
    title: "Authorised Kirloskar Partnership",
    desc: "Direct factory OEM warranty, certified engineers, and genuine spare parts supply pipeline.",
  },
  {
    icon: Wrench,
    title: "Solution-Based Sizing",
    desc: "Equipment customized to your real load profile & duty cycle—not pushed off-the-shelf inventory.",
  },
  {
    icon: Headset,
    title: "Lifecycle Support & 24/7 AMC",
    desc: "Dedicated emergency response team, routine maintenance, testing & statutory commissioning.",
  },
  {
    icon: Sun,
    title: "Conventional & Hybrid Renewable",
    desc: "Seamless integration of traditional DG power with rooftop solar PV and battery storage (BESS).",
  },
];

export const WhyKumarPower: React.FC = () => {
  const [showLeadershipModal, setShowLeadershipModal] = useState(false);

  return (
    <section className="py-20 md:py-24 bg-white text-slate-900 relative border-b border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl space-y-16">
        
        {/* Animated Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A6AA2]/10 border border-[#1A6AA2]/20 text-xs font-bold uppercase tracking-widest text-[#1A6AA2]">
              Engineered Trust
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Why Businesses Choose Kumar Power
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl">
              We structure complete electrical power systems around your specific
              operational challenge rather than displaying generic equipment
              inventory.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={() => setShowLeadershipModal(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-[#1A6AA2] transition-colors cursor-pointer shadow"
            >
              <UserCheck className="w-4 h-4 text-[#1A6AA2]" />
              <span>Meet Leadership & Heritage</span>
            </button>
          </div>
        </motion.div>

        {/* 6 Clean Feature Cards Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#1A6AA2] hover:bg-white transition-all duration-300 space-y-3 group shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[#1A6AA2] group-hover:bg-[#1A6AA2] group-hover:text-white transition-colors shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-[#1A6AA2] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Leadership Modal */}
      {showLeadershipModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl space-y-6 text-slate-900">
            <button
              onClick={() => setShowLeadershipModal(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A6AA2]/10 text-[#1A6AA2] text-xs font-bold uppercase tracking-wider">
              Leadership & Heritage
            </div>

            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Behind Kumar Power
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Founded over three decades ago, Kumar Power has evolved from a pioneering generator dealership into an integrated electrical power systems engineering enterprise. Under veteran leadership, our team combines senior electrical engineers, certified technicians, and project managers committed to zero-downtime client infrastructure.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
              <p className="font-bold text-slate-900">Head Office & Regional Reach</p>
              <p>Delhi NCR • Pan-India Project Execution & Service Support</p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowLeadershipModal(false)}
                className="px-6 py-2.5 rounded-full bg-[#1A6AA2] hover:bg-[#145380] text-white text-xs font-bold uppercase transition-colors"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyKumarPower;
