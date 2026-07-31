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
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cold Storage",
    icon: Truck,
    problem:
      "Preserving constant refrigeration temperatures with hybrid solar-BESS energy cost reduction.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Commercial Towers",
    icon: Building,
    problem:
      "Sub-metering floor distribution, peak demand shaving, & silent automated backup.",
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
    <section className="py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A6AA2]/10 border border-[#1A6AA2]/20 text-xs font-bold uppercase tracking-widest text-[#1A6AA2]">
            Sector-Specific Engineering
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Solutions Designed for Your Industry
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We adapt our electrical architecture specifically for the power
            stability and operational demands of your sector.
          </p>
        </div>

        {/* Visual Photography Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                onClick={scrollToConsultation}
                className="relative h-[320px] rounded-3xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 p-6 flex flex-col justify-between"
              >
                {/* Background Photo */}
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-105"
                />
                {/* High-Contrast Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 pointer-events-none" />

                {/* Top Badge Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1A6AA2] shadow">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="p-2 rounded-full bg-slate-900/80 text-white group-hover:bg-[#1A6AA2] transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Bottom Card Title & Subtitle with crisp drop shadow */}
                <div className="relative z-10 space-y-1.5 text-white">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors tracking-tight leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    {ind.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed font-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    {ind.problem}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
