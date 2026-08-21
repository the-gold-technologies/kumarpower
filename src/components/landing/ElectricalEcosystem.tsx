import React, { useState, useEffect } from "react";
import * as LucideIcons from "lucide-react";
import {
  Zap,
  Cpu,
  ShieldCheck,
  Gauge,
  BatteryCharging,
  Factory,
  Check,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionData } from "@/store/useCMSStore";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Cpu,
  ShieldCheck,
  Gauge,
  BatteryCharging,
  Factory,
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
  return Zap;
};

export const ElectricalEcosystem: React.FC = () => {
  const { data: homeData } = useSectionData<any>("home");
  const data = homeData?.electricalEcosystem || {};

  const badge = data.badge || "";
  const title = data.title || "";
  const description = data.description || "";
  const stages: any[] = Array.isArray(data.stages) ? data.stages : [];

  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Keep activeStep in bounds
  useEffect(() => {
    if (activeStep >= stages.length && stages.length > 0) {
      setActiveStep(0);
    }
  }, [stages.length, activeStep]);

  // Auto-advancing stage loop every 3.5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused || stages.length === 0) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, stages.length]);

  if (stages.length === 0) {
    return null;
  }

  const current = stages[activeStep] || stages[0];
  const Icon = getIcon(current?.icon);
  const equipment: string[] = Array.isArray(current?.equipment)
    ? current.equipment
    : [];

  return (
    <section
      id="ecosystem-graphic"
      className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-b border-slate-200"
    >
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          {badge && (
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A6AA2]/10 border border-[#1A6AA2]/20 text-xs font-bold uppercase tracking-widest text-[#1A6AA2]">
              <Zap className="w-3.5 h-3.5 text-[#1A6AA2] inline mr-1" />
              {badge}
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
        </div>

        {/* Connected Pipeline Navigation */}
        <div
          className="mb-10 w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Desktop Row View */}
          <div className="hidden lg:flex items-center justify-between gap-1.5 w-full">
            {stages.map((node, idx) => {
              const NodeIcon = getIcon(node.icon);
              const isSelected = activeStep === idx;
              const isPassed = idx < activeStep;

              return (
                <React.Fragment key={node.id || idx}>
                  <button
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => {
                      setActiveStep(idx);
                      setIsPaused(true);
                    }}
                    onMouseLeave={() => setIsPaused(false)}
                    className={`flex-1 min-w-0 p-3 rounded-xl sm:rounded-2xl text-left transition-all duration-300 ease-out relative group ${
                      isSelected
                        ? "bg-[#1A6AA2] border-2 border-[#1A6AA2] text-white shadow-lg shadow-[#1A6AA2]/25 scale-[1.02] z-20"
                        : isPassed
                          ? "bg-[#1A6AA2]/10 border border-[#1A6AA2]/30 text-[#1A6AA2] hover:border-[#1A6AA2]"
                          : "bg-white border border-slate-200 text-slate-800 hover:border-[#1A6AA2] hover:bg-slate-50"
                    }`}
                  >
                    {/* Top Row: Stage Badge & Icon */}
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[9px] sm:text-[10px] font-mono font-black px-1.5 py-0.5 rounded transition-all duration-300 ${
                          isSelected
                            ? "bg-slate-950 text-white border border-[#1A6AA2]/40"
                            : isPassed
                              ? "bg-[#1A6AA2]/20 text-[#1A6AA2] font-bold"
                              : "bg-slate-100 text-slate-700 font-bold"
                        }`}
                      >
                        STAGE {node.step}
                      </span>
                      <NodeIcon
                        className={`w-3.5 h-3.5 transition-all duration-300 ${
                          isSelected
                            ? "text-white scale-110"
                            : isPassed
                              ? "text-[#1A6AA2] font-bold"
                              : "text-slate-500"
                        }`}
                      />
                    </div>

                    {/* Stage Name */}
                    <div
                      className={`text-xs font-extrabold truncate leading-snug ${isSelected ? "text-white drop-shadow-sm" : "text-slate-900"}`}
                    >
                      {node.name}
                    </div>
                  </button>

                  {/* Flow Connector Arrow */}
                  {idx < stages.length - 1 && (
                    <div className="shrink-0 px-0.5 flex items-center text-slate-300">
                      <ChevronRight
                        className={`w-4 h-4 transition-all duration-500 ${
                          idx === activeStep
                            ? "text-[#1A6AA2] scale-125 font-bold animate-pulse"
                            : idx < activeStep
                              ? "text-[#1A6AA2]/60"
                              : "text-slate-300"
                        }`}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Mobile/Tablet Grid View */}
          <div className="grid lg:hidden grid-cols-2 sm:grid-cols-3 gap-2.5 w-full">
            {stages.map((node, idx) => {
              const NodeIcon = getIcon(node.icon);
              const isSelected = activeStep === idx;
              const isPassed = idx < activeStep;

              return (
                <button
                  key={node.id || idx}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => {
                    setActiveStep(idx);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => setIsPaused(false)}
                  className={`w-full p-3 rounded-xl text-left transition-all duration-300 ease-out relative group ${
                    isSelected
                      ? "bg-[#1A6AA2] border-2 border-[#1A6AA2] text-white shadow-lg shadow-[#1A6AA2]/25 scale-[1.02] z-20"
                      : isPassed
                        ? "bg-[#1A6AA2]/10 border border-[#1A6AA2]/30 text-[#1A6AA2] hover:border-[#1A6AA2]"
                        : "bg-white border border-slate-200 text-slate-800 hover:border-[#1A6AA2] hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[9px] font-mono font-black px-1.5 py-0.5 rounded transition-all duration-300 ${
                        isSelected
                          ? "bg-slate-950 text-white border border-[#1A6AA2]/40"
                          : isPassed
                            ? "bg-[#1A6AA2]/20 text-[#1A6AA2] font-bold"
                            : "bg-slate-100 text-slate-700 font-bold"
                      }`}
                    >
                      STAGE {node.step}
                    </span>
                    <div className="flex items-center gap-1">
                      <NodeIcon
                        className={`w-3.5 h-3.5 transition-all duration-300 ${
                          isSelected
                            ? "text-white"
                            : isPassed
                              ? "text-[#1A6AA2]"
                              : "text-slate-500"
                        }`}
                      />
                      {idx < stages.length - 1 && (
                        <ChevronRight className="w-3 h-3 text-slate-300" />
                      )}
                    </div>
                  </div>

                  <div
                    className={`text-xs font-extrabold truncate leading-snug ${isSelected ? "text-white" : "text-slate-900"}`}
                  >
                    {node.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Inspection Display Card */}
        <div
          className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-2xl min-h-[420px] relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id || activeStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 w-full h-full"
            >
              {/* Left Visual Photo Frame */}
              <div className="lg:col-span-6 relative h-[360px] lg:h-auto overflow-hidden">
                {current.image && (
                  <img
                    src={current.image}
                    alt={current.name || "Stage Equipment"}
                    className="w-full h-full object-cover filter brightness-95 contrast-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200 text-xs font-mono font-bold text-[#1A6AA2] backdrop-blur-md shadow">
                  <Icon className="w-3.5 h-3.5 text-[#1A6AA2]" /> Stage{" "}
                  {current.step} Equipment Visual
                </div>
              </div>

              {/* Right Detailed Equipment Callouts */}
              <div className="lg:col-span-6 p-8 lg:p-12 space-y-6 flex flex-col justify-between text-slate-900">
                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1A6AA2]">
                    Stage {current.step} — {current.name}
                  </span>

                  {current.headline && (
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                      {current.headline}
                    </h3>
                  )}

                  {current.description && (
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                      {current.description}
                    </p>
                  )}
                </div>

                {equipment.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Integrated Stage Technologies:
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {equipment.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2"
                        >
                          <Check className="w-4 h-4 text-[#1A6AA2] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ElectricalEcosystem;
