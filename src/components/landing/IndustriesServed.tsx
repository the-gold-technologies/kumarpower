import React from "react";
import * as LucideIcons from "lucide-react";
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
  GraduationCap,
  FileCheck,
  Calendar,
  HardHat,
} from "lucide-react";
import { motion } from "framer-motion";
import { useSectionData } from "@/store/useCMSStore";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory,
  Plane,
  HeartPulse,
  Server,
  Hotel,
  Landmark,
  Truck,
  Building,
  GraduationCap,
  FileCheck,
  Calendar,
  HardHat,
};

const getIcon = (iconName: string | any) => {
  if (typeof iconName === "function" || (typeof iconName === "object" && iconName !== null)) return iconName;
  if (typeof iconName === "string") {
    if (iconMap[iconName]) return iconMap[iconName];
    if ((LucideIcons as any)[iconName]) return (LucideIcons as any)[iconName];
  }
  return Factory;
};

export const IndustriesServed: React.FC = () => {
  const { data: homeData } = useSectionData<any>("home");
  const data = homeData?.industriesServed || {};

  const badge = data.badge || "";
  const title = data.title || "";
  const description = data.description || "";
  const industries: any[] = Array.isArray(data.industries) ? data.industries : [];

  const scrollToConsultation = () => {
    const el = document.getElementById("consultation-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (industries.length === 0 && !title && !description) {
    return null;
  }

  return (
    <section id="industries-served" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Animated Header */}
        {(badge || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            {badge && (
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A6AA2]/20 border border-[#1A6AA2]/30 text-xs font-semibold uppercase tracking-widest text-[#1A6AA2]">
                {badge}
              </div>
            )}
            {title && (
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-slate-400 text-base sm:text-lg">
                {description}
              </p>
            )}
          </motion.div>
        )}

        {/* Sector Cards Grid with Staggered Scroll Animation */}
        {industries.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((item: any, idx: number) => {
              const Icon = getIcon(item.icon);
              return (
                <motion.div
                  key={item.id || idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  onClick={scrollToConsultation}
                  className="relative h-[320px] rounded-2xl overflow-hidden cursor-pointer group border border-slate-800 hover:border-[#1A6AA2] transition-all duration-500 shadow-xl flex flex-col justify-between p-4 sm:p-5"
                >
                  {/* Background Image */}
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name || "Industry"}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-45 contrast-125"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                  )}
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
                    {item.name && (
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#1A6AA2] transition-colors drop-shadow">
                        {item.name}
                      </h3>
                    )}

                    {item.problem && (
                      <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-light drop-shadow-sm">
                        {item.problem}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustriesServed;
