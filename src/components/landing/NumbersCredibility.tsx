import React from "react";
import * as LucideIcons from "lucide-react";
import { ShieldCheck, Award, Zap, Globe2 } from "lucide-react";
import { useSectionData } from "@/store/useCMSStore";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  ShieldCheck,
  Zap,
  Globe2,
};

const getIcon = (iconName: string | any) => {
  if (typeof iconName === "function" || (typeof iconName === "object" && iconName !== null)) return iconName;
  if (typeof iconName === "string") {
    if (iconMap[iconName]) return iconMap[iconName];
    if ((LucideIcons as any)[iconName]) return (LucideIcons as any)[iconName];
  }
  return Award;
};

export const NumbersCredibility: React.FC = () => {
  const { data: homeData } = useSectionData<any>("home");
  const data = homeData?.numbersCredibility || {};
  const stats: any[] = Array.isArray(data.stats) ? data.stats : [];

  if (stats.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-slate-950 text-white border-b border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat: any, idx: number) => {
            const Icon = getIcon(stat.icon);
            return (
              <div
                key={stat.id || idx}
                className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 transition-all duration-300 text-center relative overflow-hidden group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                {stat.value && (
                  <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                )}

                {stat.label && (
                  <div className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                    {stat.label}
                  </div>
                )}

                {stat.subtext && (
                  <p className="text-xs text-slate-400 font-light">
                    {stat.subtext}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NumbersCredibility;
