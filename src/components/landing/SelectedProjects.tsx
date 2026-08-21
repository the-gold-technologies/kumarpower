import React from "react";
import * as LucideIcons from "lucide-react";
import {
  Plane,
  Factory,
  Sun,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Sparkles,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSectionData } from "@/store/useCMSStore";

import aviationBackupImg from "@/assets/portfolio/uninterrupted_power.jpg";
import manufacturingDistImg from "@/assets/portfolio/electrical_distribution.jpg";
import solarBessImg from "@/assets/portfolio/renewable_integration.jpg";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Plane,
  Factory,
  Sun,
};

const getIcon = (iconName: string | any) => {
  if (
    typeof iconName === "function" ||
    (typeof iconName === "object" && iconName !== null)
  )
    return iconName;
  if (typeof iconName === "string") {
    if (iconMap[iconName]) return iconMap[iconName];
    if ((LucideIcons as any)[iconName]) return (LucideIcons as any)[iconName];
  }
  return Sparkles;
};

export const SelectedProjects: React.FC = () => {
  const { data: homeData } = useSectionData<any>("home");
  const data = homeData?.selectedProjects || {};

  const badge = data.badge || "";
  const title = data.title || "";
  const description = data.description || "";
  const caseStudies: any[] = Array.isArray(data.caseStudies)
    ? data.caseStudies
    : [];
  const ctaButtonLabel = data.ctaButtonLabel || "";
  const ctaButtonUrl = data.ctaButtonUrl || "";

  if (caseStudies.length === 0 && !title && !description) {
    return null;
  }

  return (
    <section
      id="solutions-in-action"
      className="py-20 md:py-24 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl space-y-12">
        {/* Animated Section Header */}
        {(badge || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            {badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A6AA2]/10 border border-[#1A6AA2]/20 text-xs font-bold uppercase tracking-widest text-[#1A6AA2]">
                <Sparkles className="w-3.5 h-3.5" /> {badge}
              </div>
            )}
            {title && (
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-slate-600 text-base sm:text-lg font-normal">
                {description}
              </p>
            )}
          </motion.div>
        )}

        {/* Alternating Light Case Study Cards with Scroll Animation */}
        {caseStudies.length > 0 && (
          <div className="space-y-8">
            {caseStudies.map((project: any, idx: number) => {
              const Icon = getIcon(project.icon);
              const isReversed = idx % 2 === 1;

              return (
                <motion.div
                  key={project.id || idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.55, delay: idx * 0.12 }}
                  className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-[#1A6AA2] transition-all duration-300 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Story & Narrative Block */}
                    <div
                      className={`lg:col-span-8 space-y-5 ${isReversed ? "lg:order-last" : "lg:order-first"}`}
                    >
                      {/* Top Pill Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="p-2 rounded-xl bg-[#1A6AA2]/10 text-[#1A6AA2]">
                            <Icon className="w-4 h-4" />
                          </span>
                          {project.sector && (
                            <span className="text-xs font-mono font-bold text-[#1A6AA2] uppercase tracking-wider">
                              {project.sector}
                            </span>
                          )}
                          {project.sector && project.location && (
                            <span className="text-slate-300">•</span>
                          )}
                          {project.location && (
                            <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-[#1A6AA2]" />{" "}
                              {project.location}
                            </span>
                          )}
                        </div>

                        {project.metric && (
                          <span className="px-3 py-1 rounded-full bg-[#1A6AA2] text-white text-xs font-bold font-mono shadow-sm">
                            {project.metric}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      {project.title && (
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#1A6AA2] transition-colors leading-snug">
                          {project.title}
                        </h3>
                      )}

                      {/* Challenge & Solution Side-by-Side */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.challenge && (
                          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1.5">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider">
                              <AlertCircle className="w-3.5 h-3.5 text-amber-600" />{" "}
                              Challenge
                            </div>
                            <p className="text-xs text-amber-950 leading-relaxed font-normal">
                              {project.challenge}
                            </p>
                          </div>
                        )}

                        {project.solution && (
                          <div className="p-4 rounded-2xl bg-[#1A6AA2]/5 border border-[#1A6AA2]/20 space-y-1.5">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-[#1A6AA2] uppercase tracking-wider">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#1A6AA2]" />{" "}
                              Solution
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed font-normal">
                              {project.solution}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Outcome Box */}
                      {project.outcome && (
                        <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-xs text-emerald-950 flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-emerald-900">
                              Outcome:{" "}
                            </span>
                            <span className="font-normal">
                              {project.outcome}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Product Image Frame */}
                    <div
                      className={`lg:col-span-4 ${isReversed ? "lg:order-first" : "lg:order-last"}`}
                    >
                      <div className="bg-slate-100 border border-slate-200 rounded-2xl h-56 sm:h-72 w-full flex items-center justify-center relative overflow-hidden shadow-inner">
                        {project.image && (
                          <img
                            src={project.image}
                            alt={project.title || "Project"}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-sm border border-white/20 text-[10px] font-mono font-bold text-white uppercase tracking-wider shadow-sm">
                          Kumar Power Execution
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* View All Projects CTA */}
        {(ctaButtonLabel || ctaButtonUrl) && (
          <div className="text-center pt-4">
            <Link
              to={ctaButtonUrl || "/about/OurClients"}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-[#1A6AA2] text-white text-xs uppercase tracking-wider font-bold transition-all shadow-md group cursor-pointer"
            >
              <span>
                {ctaButtonLabel ||
                  "View All Client References & Project Portfolio"}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default SelectedProjects;
