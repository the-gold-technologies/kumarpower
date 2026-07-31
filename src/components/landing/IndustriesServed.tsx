import React from "react";
import {
  Factory,
  Hotel,
  HeartPulse,
  Server,
  Building,
  Truck,
  Plane,
  Landmark,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  {
    name: "Manufacturing",
    icon: Factory,
    problem:
      "Stable heavy power distribution, zero harmonic trips, and lower peak demand charges.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Aviation",
    icon: Plane,
    problem:
      "Dependable standby power & switchgear for ground control & runways (Air India projects).",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    problem:
      "Zero-tolerance power failure for ICU life support, isolation transformers & instant failover.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Data Centres",
    icon: Server,
    problem:
      "24/7 continuous high-density server power, sub-cycle BESS buffer, & HT/LT switchgear.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hospitality",
    icon: Hotel,
    problem:
      "Silent low-noise DG backup, uninterrupted guest HVAC comfort, and power factor savings.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Infrastructure",
    icon: Landmark,
    problem:
      "Rugged distribution transformers, outdoor feeder pillars, & heavy-duty EPC cabling.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cold Storage & Warehousing",
    icon: Truck,
    problem:
      "Continuous thermal refrigeration load protection, solar PV integration, & EnerCube BESS.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Commercial Towers",
    icon: Building,
    problem:
      "Elevator & chiller backup, central AMF switchgear, & rooftop solar power offset.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
];

export const IndustriesServed: React.FC = () => {
  const scrollToConsultation = () => {
    const el = document.getElementById("consultation-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="industries-served" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A6AA2]/20 border border-[#1A6AA2]/30 text-xs font-semibold uppercase tracking-widest text-[#1A6AA2]">
            Sector-Specific Solutions
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Solutions Designed for Your Industry
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We tailor electrical architecture to meet the specific operational,
            duty cycle, and statutory compliance demands of your sector.
          </p>
        </motion.div>

        {/* 8 Sector Cards Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                onClick={scrollToConsultation}
                className="relative h-[320px] rounded-3xl overflow-hidden cursor-pointer group border border-slate-800 hover:border-[#1A6AA2] transition-all duration-500 shadow-xl flex flex-col justify-between p-6"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-45 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#1A6AA2]/20 border border-[#1A6AA2]/40 backdrop-blur-md text-[#1A6AA2] group-hover:bg-[#1A6AA2] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="p-2 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md text-slate-300 group-hover:text-white group-hover:bg-[#1A6AA2] transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#1A6AA2] transition-colors drop-shadow">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-light drop-shadow-sm">
                    {item.problem}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
