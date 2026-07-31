import React, { useState } from "react";
import {
  BatteryCharging,
  ShieldAlert,
  TrendingDown,
  ArrowRight,
  Zap,
  Check,
} from "lucide-react";

const featuredScenarios = [
  {
    id: "reduce-dg-dependence",
    title: "Reduce DG Dependence",
    badge: "Fuel & O&M Savings",
    icon: BatteryCharging,
    headline: "Minimize Generator Hours & Diesel Expenses",
    description:
      "Combine battery energy storage (EnerCube BESS), solar PV, and intelligent EMS controls to drastically lower generator runtime, carbon emissions, noise, and maintenance frequency.",
    outcomes: [
      "Up to 60% reduction in diesel consumption",
      "Eliminating low-load generator running inefficiently",
      "Instant zero-downtime microsecond battery takeover",
      "Extended genset overhaul and maintenance intervals",
    ],
    components: [
      "EnerCube BESS",
      "Solar PV Array",
      "Smart EMS Controller",
      "Kirloskar DG Set",
    ],
  },
  {
    id: "protect-critical-operations",
    title: "Protect Critical Operations",
    badge: "Zero Downtime",
    icon: ShieldAlert,
    headline: "Uninterrupted Power for Mission-Critical Loads",
    description:
      "Create a ultra-reliable power architecture using Kirloskar DG sets, sub-second AMF switchgear, BESS battery buffering, step-down transformers, and surge protection.",
    outcomes: [
      "100% power availability during main grid collapse",
      "Seamless automatic transfer switch (ATS) sync",
      "Isolation from grid harmonic spikes & voltage drops",
      "Built-in redundant backup paths",
    ],
    components: [
      "Kirloskar DG Sets",
      "AMF & ATS Switchgear",
      "Isolation Transformer",
      "EnerCube BESS Buffer",
    ],
  },
  {
    id: "lower-energy-costs",
    title: "Lower Energy Costs",
    badge: "OPEX Optimization",
    icon: TrendingDown,
    headline: "Target & Eliminate Avoidable Energy Charges",
    description:
      "Use APFC power-factor correction, rooftop solar generation, BESS peak-shaving, and energy monitoring to reduce maximum demand penalties and utility bills.",
    outcomes: [
      "Elimination of low power factor utility penalties",
      "Peak demand charge shaving during high-rate hours",
      "Substantial daytime solar self-consumption",
      "Real-time facility load telemetry & alerts",
    ],
    components: [
      "APFC Capacitor Panel",
      "Rooftop Solar PV",
      "Peak Shaving BESS",
      "Energy Management System",
    ],
  },
];

export const FeaturedSolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const scenario = featuredScenarios[activeTab];
  const Icon = scenario.icon;

  const scrollToConsultation = () => {
    const el = document.getElementById("consultation-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A6AA2]/10 border border-[#1A6AA2]/20 text-xs font-bold uppercase tracking-widest text-[#1A6AA2]">
            Featured Operating Scenarios
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Solutions Built Around Real Operating Challenges
          </h2>
          <p className="text-slate-600 text-lg font-normal">
            Switch between real-world operational challenges to see how Kumar
            Power integrates multiple technologies into a cohesive solution.
          </p>
        </div>

        {/* Challenge Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {featuredScenarios.map((item, idx) => {
            const TabIcon = item.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#1A6AA2] border-[#1A6AA2] text-white shadow-md shadow-[#1A6AA2]/25"
                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Card Detail */}
        <div className="p-8 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1A6AA2]/10 border border-[#1A6AA2]/20 text-xs font-bold text-[#1A6AA2]">
                <Zap className="w-3.5 h-3.5 text-[#1A6AA2]" />
                <span>{scenario.badge}</span>
              </div>

              <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                {scenario.headline}
              </h3>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                {scenario.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Target Outcomes:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {scenario.outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-700 font-medium"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={scrollToConsultation}
                  className="px-6 py-3.5 rounded-full bg-[#1A6AA2] hover:bg-[#145380] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md shadow-[#1A6AA2]/25 cursor-pointer"
                >
                  <span>Request Custom Sizing For This Scenario</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right System Composition Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#1A6AA2]/10 text-[#1A6AA2] border border-[#1A6AA2]/20">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Integrated Solution Stack
                  </h4>
                  <p className="text-xs text-slate-500">
                    Coordinated Equipment & Control
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {scenario.components.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 flex items-center justify-between shadow-sm"
                  >
                    <span>{comp}</span>
                    <span className="text-[10px] font-mono text-[#1A6AA2] font-bold uppercase">
                      Integrated
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolutions;
