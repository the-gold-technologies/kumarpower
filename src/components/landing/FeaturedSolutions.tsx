import React, { useState, useEffect } from "react";
import * as LucideIcons from "lucide-react";
import {
  BatteryCharging,
  ShieldAlert,
  TrendingDown,
  ArrowRight,
  Zap,
  Check,
} from "lucide-react";
import { useSectionData } from "@/store/useCMSStore";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BatteryCharging,
  ShieldAlert,
  TrendingDown,
  Zap,
};

const getIcon = (iconName: string | any) => {
  if (typeof iconName === "function" || (typeof iconName === "object" && iconName !== null)) return iconName;
  if (typeof iconName === "string") {
    if (iconMap[iconName]) return iconMap[iconName];
    if ((LucideIcons as any)[iconName]) return (LucideIcons as any)[iconName];
  }
  return BatteryCharging;
};

export const FeaturedSolutions: React.FC = () => {
  const { data: homeData } = useSectionData<any>("home");
  const data = homeData?.featuredSolutions || {};

  const badge = data.badge || "";
  const title = data.title || "";
  const description = data.description || "";
  const ctaButtonLabel = data.ctaButtonLabel || "";
  const scenarios: any[] = Array.isArray(data.scenarios) ? data.scenarios : [];

  const [activeTab, setActiveTab] = useState(0);

  // Keep activeTab in bounds
  useEffect(() => {
    if (activeTab >= scenarios.length && scenarios.length > 0) {
      setActiveTab(0);
    }
  }, [scenarios.length, activeTab]);

  if (scenarios.length === 0 && !title && !description) {
    return null;
  }

  const scenario = scenarios[activeTab] || scenarios[0];
  const Icon = getIcon(scenario?.icon);
  const outcomes: string[] = Array.isArray(scenario?.outcomes) ? scenario.outcomes : [];
  const components: string[] = Array.isArray(scenario?.components) ? scenario.components : [];

  const scrollToConsultation = () => {
    const el = document.getElementById("consultation-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        {(badge || title || description) && (
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            {badge && (
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A6AA2]/10 border border-[#1A6AA2]/20 text-xs font-bold uppercase tracking-widest text-[#1A6AA2]">
                {badge}
              </div>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-slate-600 text-lg font-normal">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Challenge Tabs Navigation */}
        {scenarios.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {scenarios.map((item: any, idx: number) => {
              const TabIcon = getIcon(item.icon);
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.id || idx}
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
        )}

        {/* Featured Card Detail */}
        {scenario && (
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                {scenario.badge && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1A6AA2]/10 border border-[#1A6AA2]/20 text-xs font-bold text-[#1A6AA2]">
                    <Zap className="w-3.5 h-3.5 text-[#1A6AA2]" />
                    <span>{scenario.badge}</span>
                  </div>
                )}

                {scenario.headline && (
                  <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                    {scenario.headline}
                  </h3>
                )}

                {scenario.description && (
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    {scenario.description}
                  </p>
                )}

                {outcomes.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Target Outcomes:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {outcomes.map((outcome, idx) => (
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
                )}

                {(ctaButtonLabel || scenario) && (
                  <div className="pt-6">
                    <button
                      onClick={scrollToConsultation}
                      className="px-6 py-3.5 rounded-full bg-[#1A6AA2] hover:bg-[#145380] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md shadow-[#1A6AA2]/25 cursor-pointer"
                    >
                      <span>{ctaButtonLabel || "Request Custom Sizing For This Scenario"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
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

                {components.length > 0 && (
                  <div className="space-y-2">
                    {components.map((comp, idx) => (
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
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedSolutions;
