import React from "react";
import { Plane, Factory, Sun, CheckCircle2, ArrowRight, MapPin, Sparkles, AlertCircle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ps1 from "@/assets/ps1.png";
import ps2 from "@/assets/ps2.png";
import optiprimeGen from "@/assets/Products/OPTIPRIMEGEN.png";

const caseStudies = [
  {
    id: "aviation-delhi",
    icon: Plane,
    sector: "Aviation Facility",
    location: "Delhi NCR",
    client: "Air India Terminal Operations",
    title: "Critical Ground & Runway Operation Backup",
    metric: "99.999% Power Uptime",
    image: ps1,
    challenge: "Zero-downtime standby power required for critical flight ground control, terminal lighting, and security infrastructure during grid outages.",
    solution: "Turnkey CPCB IV+ silent DG set synchronization, sub-second AMF control panels, heavy-duty underground cabling, and 24/7 OEM support.",
    outcome: "Achieved 99.999% power uptime during utility grid interruptions with sub-second failover transition.",
  },
  {
    id: "manufacturing-haryana",
    icon: Factory,
    sector: "Heavy Manufacturing",
    location: "Haryana Industrial Zone",
    client: "Automotive Precision Plant",
    title: "Plant Electrical Distribution & Power Quality",
    metric: "85% Breakdown Cut",
    image: ps2,
    challenge: "Frequent utility voltage fluctuations, poor power factor penalties, and unorganized floor power distribution causing frequent machine trips.",
    solution: "Turnkey supply and installation of custom distribution transformer, LT main switchgear panel, APFC capacitor bank, and servo stabilizer.",
    outcome: "Eliminated annual power factor penalty, reduced machine breakdown by 85%, and optimized plant voltage stability.",
  },
  {
    id: "solar-bess-commercial",
    icon: Sun,
    sector: "Commercial & Data Facility",
    location: "Gurugram Cyber City",
    client: "Tech Park Infrastructure",
    title: "Hybrid Solar-BESS Cost Reduction & Backup",
    metric: "38% Energy Bill Cut",
    image: optiprimeGen,
    challenge: "High daytime electricity grid tariffs, strict diesel generator emission caps, and low solar self-consumption without storage.",
    solution: "Integrated 250 kWp rooftop solar PV array with 500 kWh EnerCube BESS battery storage and intelligent EMS control platform.",
    outcome: "Cut monthly energy bill by 38% and reduced generator run hours by 65% while keeping critical loads backed up.",
  }
];

export const SelectedProjects: React.FC = () => {
  return (
    <section id="solutions-in-action" className="py-20 md:py-24 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl space-y-12">
        
        {/* Animated Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A6AA2]/10 border border-[#1A6AA2]/20 text-xs font-bold uppercase tracking-widest text-[#1A6AA2]">
            <Sparkles className="w-3.5 h-3.5" /> Proven Field Execution
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Solutions in Action
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Real-world case studies demonstrating our end-to-end power engineering, installation, and operational results.
          </p>
        </motion.div>

        {/* Alternating Light Case Study Cards with Scroll Animation */}
        <div className="space-y-8">
          {caseStudies.map((project, idx) => {
            const Icon = project.icon;
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-[#1A6AA2] transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Story & Narrative Block */}
                  <div className={`lg:col-span-8 space-y-5 ${isReversed ? "lg:order-last" : "lg:order-first"}`}>
                    
                    {/* Top Pill Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="p-2 rounded-xl bg-[#1A6AA2]/10 text-[#1A6AA2]">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="text-xs font-mono font-bold text-[#1A6AA2] uppercase tracking-wider">
                          {project.sector}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#1A6AA2]" /> {project.location}
                        </span>
                      </div>

                      <span className="px-3 py-1 rounded-full bg-[#1A6AA2] text-white text-xs font-bold font-mono shadow-sm">
                        {project.metric}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#1A6AA2] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Challenge & Solution Side-by-Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-600" /> Challenge
                        </div>
                        <p className="text-xs text-amber-950 leading-relaxed font-normal">
                          {project.challenge}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#1A6AA2]/5 border border-[#1A6AA2]/20 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#1A6AA2] uppercase tracking-wider">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#1A6AA2]" /> Solution
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed font-normal">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Outcome Box */}
                    <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-xs text-emerald-950 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-emerald-900">Outcome: </span>
                        <span className="font-normal">{project.outcome}</span>
                      </div>
                    </div>

                  </div>

                  {/* Product Image Frame */}
                  <div className={`lg:col-span-4 ${isReversed ? "lg:order-first" : "lg:order-last"}`}>
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 h-52 sm:h-64 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-100/80 transition-colors">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-3 right-3 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        Kumar Power Execution
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center pt-4">
          <Link
            to="/about/OurClients"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-[#1A6AA2] text-white text-xs uppercase tracking-wider font-bold transition-all shadow-md group cursor-pointer"
          >
            <span>View All Client References & Project Portfolio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SelectedProjects;
