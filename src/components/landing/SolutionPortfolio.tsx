import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSectionData } from "@/store/useCMSStore";

export const SolutionPortfolio: React.FC = () => {
  const { data: homeData } = useSectionData<any>("home");
  const data = homeData?.solutionPortfolio || {};

  const badge = data.badge || "";
  const title = data.title || "";
  const description = data.description || "";
  const categories: any[] = Array.isArray(data.categories)
    ? data.categories
    : [];

  if (categories.length === 0 && !title && !description) {
    return null;
  }

  return (
    <section
      id="solutions-portfolio"
      className="py-24 bg-white text-slate-900 relative border-b border-slate-200"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {(badge || title || description) && (
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            {badge && (
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A6AA2]/10 border border-[#1A6AA2]/20 text-xs font-bold uppercase tracking-widest text-[#1A6AA2]">
                {badge}
              </div>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
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

        {/* Portfolio Cards Grid */}
        {categories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((item: any, idx: number) => {
              const features: string[] = Array.isArray(item.features)
                ? item.features
                : [];
              return (
                <div
                  key={item.id || idx}
                  className="rounded-2xl bg-white border border-slate-200 hover:border-[#1A6AA2] transition-all duration-300 overflow-hidden flex flex-col group hover:shadow-xl shadow-sm"
                >
                  {/* Image Banner */}
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title || "Category"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                    {item.title && (
                      <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-bold text-white drop-shadow">
                        {item.title}
                      </h3>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      {item.subtitle && (
                        <p className="text-sm font-semibold text-[#1A6AA2] mb-4">
                          {item.subtitle}
                        </p>
                      )}

                      {features.length > 0 && (
                        <ul className="space-y-2.5">
                          {features.map((feat, fIdx) => (
                            <li
                              key={fIdx}
                              className="flex items-start gap-2.5 text-xs text-slate-700 font-medium"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#1A6AA2] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {item.link && (
                      <Link
                        to={item.link}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A6AA2] hover:text-[#145380] transition-colors pt-4 border-t border-slate-100"
                      >
                        <span>Explore Category Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default SolutionPortfolio;
