import React, { useState, useEffect } from "react";
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

import ps1 from "@/assets/ps1.png";
import ps2 from "@/assets/ps2.png";
import ps3 from "@/assets/ps3.png";
import ps4 from "@/assets/ps4.png";
import optiprimeGen from "@/assets/Products/OPTIPRIMEGEN.png";
import heroInstall from "@/assets/heroinstalll.jpeg";

interface StepNode {
  id: string;
  step: string;
  name: string;
  icon: any;
  image: string;
  headline: string;
  description: string;
  equipment: string[];
}

const pipelineNodes: StepNode[] = [
  {
    id: "generation",
    step: "01",
    name: "Power Sources",
    icon: Zap,
    image: ps1,
    headline: "Grid Entry, Solar PV, Gensets & BESS",
    description:
      "Accepts high-voltage grid supply, integrates rooftop/ground solar PV arrays, Kirloskar CPCB IV+ diesel gensets, and EnerCube battery energy storage.",
    equipment: [
      "CPCB IV+ Gensets",
      "Rooftop Solar Array",
      "EnerCube BESS",
      "High-Voltage Substation",
    ],
  },
  {
    id: "transformer",
    step: "02",
    name: "Transformation",
    icon: Cpu,
    image: ps2,
    headline: "Step-Up / Step-Down Transformers",
    description:
      "Steps high transmission voltages up or down to operational facility voltage levels with custom dry-type and oil-filled transformers.",
    equipment: [
      "Distribution Transformers",
      "Isolation Transformers",
      "Dry-Type Cast Resin",
      "Step-down Substations",
    ],
  },
  {
    id: "switchgear",
    step: "03",
    name: "HT/LT Switchgear",
    icon: ShieldCheck,
    image: ps3,
    headline: "Central Control, AMF & Changeover",
    description:
      "Routes power safely across main LT switchgear, HT breaker panels, PCC/MCC motor controls, and sub-second automatic transfer switches.",
    equipment: [
      "Main LT Switchgear",
      "HT Breaker Panels",
      "AMF & ATS Panels",
      "PCC & MCC Panels",
    ],
  },
  {
    id: "conditioning",
    step: "04",
    name: "Power Conditioning",
    icon: Gauge,
    image: ps4,
    headline: "Voltage Regulation & Harmonics",
    description:
      "Stabilizes fluctuating grid voltages, maintains high power factor via APFC capacitor banks, and filters active harmonic distortion.",
    equipment: [
      "Servo Stabilisers",
      "APFC Capacitor Banks",
      "Active Harmonic Filters",
      "Surge Arrestors",
    ],
  },
  {
    id: "distribution",
    step: "05",
    name: "Sub-Distribution",
    icon: BatteryCharging,
    image: optiprimeGen,
    headline: "Bus Ducts & Feeder Pillars",
    description:
      "Transfers clean, protected electrical power through riser busbars, sub-distribution boards, and smart energy monitoring meters.",
    equipment: [
      "Busbar Trunking Systems",
      "Floor Distribution Boards",
      "Feeder Pillars",
      "Smart Meters",
    ],
  },
  {
    id: "final-load",
    step: "06",
    name: "Final Facility Load",
    icon: Factory,
    image: heroInstall,
    headline: "Industrial Machinery, Data Racks & HVAC",
    description:
      "Delivers continuous, highly stable electrical energy to critical infrastructure, factories, commercial buildings, data centres, and hospitals.",
    equipment: [
      "Industrial Machinery",
      "Data Centre Servers",
      "Central HVAC Chillers",
      "Emergency Systems",
    ],
  },
];

export const ElectricalEcosystem: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-advancing stage loop every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineNodes.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const current = pipelineNodes[activeStep];
  const Icon = current.icon;

  return (
    <section
      id="ecosystem-graphic"
      className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-b border-slate-200"
    >
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A6AA2]/10 border border-[#1A6AA2]/20 text-xs font-bold uppercase tracking-widest text-[#1A6AA2]">
            <Zap className="w-3.5 h-3.5 text-[#1A6AA2] inline mr-1" />
            Interactive System Flow
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            From Incoming Power to Final Load
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Automated power progression across all 6 electrical system stages.
            Click any stage to inspect equipment details.
          </p>
        </div>

        {/* Connected Pipeline Navigation */}
        <div className="mb-10 w-full">
          {/* Desktop Row View */}
          <div className="hidden lg:flex items-center justify-between gap-1.5 w-full">
            {pipelineNodes.map((node, idx) => {
              const NodeIcon = node.icon;
              const isSelected = activeStep === idx;
              const isPassed = idx < activeStep;

              return (
                <React.Fragment key={node.id}>
                  <button
                    onClick={() => setActiveStep(idx)}
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
                  {idx < pipelineNodes.length - 1 && (
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
            {pipelineNodes.map((node, idx) => {
              const NodeIcon = node.icon;
              const isSelected = activeStep === idx;
              const isPassed = idx < activeStep;

              return (
                <button
                  key={node.id}
                  onClick={() => setActiveStep(idx)}
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
                      {idx < pipelineNodes.length - 1 && (
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

        {/* Inspection Display Card - Exact Original Design & Layout */}
        <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-2xl min-h-[420px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 w-full h-full"
            >
              {/* Left Visual Photo Frame - Exact Original Design */}
              <div className="lg:col-span-6 relative h-[360px] lg:h-auto overflow-hidden">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover filter brightness-95 contrast-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200 text-xs font-mono font-bold text-[#1A6AA2] backdrop-blur-md shadow">
                  <Icon className="w-3.5 h-3.5 text-[#1A6AA2]" /> Stage{" "}
                  {current.step} Equipment Visual
                </div>
              </div>

              {/* Right Detailed Equipment Callouts - Exact Original Design */}
              <div className="lg:col-span-6 p-8 lg:p-12 space-y-6 flex flex-col justify-between text-slate-900">
                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1A6AA2]">
                    Stage {current.step} — {current.name}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                    {current.headline}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {current.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Integrated Stage Technologies:
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.equipment.map((item, idx) => (
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
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ElectricalEcosystem;
