import React from "react";
import * as LucideIcons from "lucide-react";
import { Compass, PackageCheck, Wrench, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import { useSectionData } from "@/store/useCMSStore";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  PackageCheck,
  Wrench,
  ShieldAlert,
};

const getIcon = (iconName: string | any) => {
  if (typeof iconName === "function" || typeof iconName === "object") return iconName;
  if (typeof iconName === "string") {
    if (iconMap[iconName]) return iconMap[iconName];
    if ((LucideIcons as any)[iconName]) return (LucideIcons as any)[iconName];
  }
  return Compass;
};

export const PositioningStatement: React.FC = () => {
  const { data: homeData } = useSectionData<any>("home");
  const data = homeData?.positioningStatement || {};

  const badge = data.badge || "";
  const heading = data.heading || "";
  const description = data.description || "";
  const capabilities = Array.isArray(data.capabilities) ? data.capabilities : [];

  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Block with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-5 mb-16"
        >
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A6AA2]/10 border border-[#1A6AA2]/20 text-xs font-bold uppercase tracking-widest text-[#1A6AA2]">
              {badge}
            </div>
          )}

          {heading && (
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              {heading}
            </h2>
          )}

          {description && (
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        {/* 4 Clean Capability Cards with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap: any, idx: number) => {
            const Icon = getIcon(cap.icon);
            return (
              <motion.div
                key={cap.id || idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-[#1A6AA2] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1A6AA2]/10 border border-[#1A6AA2]/20 flex items-center justify-center text-[#1A6AA2] mb-5 group-hover:bg-[#1A6AA2] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#1A6AA2] transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cap.description}
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

export default PositioningStatement;
