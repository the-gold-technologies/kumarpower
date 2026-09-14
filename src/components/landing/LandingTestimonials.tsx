import React from "react";
import { Quote } from "lucide-react";
import { useSectionData } from "@/store/useCMSStore";

export interface TestimonialItem {
  id?: string;
  headerText?: string;
  authorName: string;
  companyName: string;
  logo?: string;
  quote: string;
}

export const LandingTestimonials: React.FC = () => {
  const { data: homeCMS } = useSectionData<any>("home");
  const data = homeCMS?.testimonials || {};

  const title = data.title || "";
  const subtitle = data.subtitle || "";

  const testimonialsList: TestimonialItem[] =
    Array.isArray(data.testimonials) && data.testimonials.length > 0
      ? data.testimonials
      : [];

  if (testimonialsList.length === 0 && !title) {
    return null;
  }

  return (
    <section className="py-20 md:py-24 bg-white text-slate-900 border-t border-slate-100 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {testimonialsList.map((item: TestimonialItem, idx: number) => {
            const headerLabel =
              item.headerText ||
              `TESTIMONIAL BY ${item.authorName.toUpperCase()} - ${item.companyName.toUpperCase()}`;

            return (
              <div
                key={item.id || idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Dark Header Banner */}
                <div className="bg-black text-white px-4 py-3 sm:py-3.5 flex items-center gap-3 shrink-0">
                  {/* Logo thumbnail badge */}
                  <div className="shrink-0 flex items-center justify-center">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.companyName || item.authorName}
                        className="h-12 w-auto max-w-[82px] object-contain rounded-md"
                      />
                    ) : (
                      <div className="w-14 h-12 rounded-md bg-white text-slate-900 flex items-center justify-center text-xs font-bold">
                        {item.authorName.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>

                  {/* Header Title / Tag */}
                  <h3
                    className="text-xs sm:text-[13px] font-bold tracking-wide uppercase text-white truncate"
                    title={headerLabel}
                  >
                    {headerLabel}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    {/* Blue Double Quote Icon */}
                    <div className="mb-4">
                      <Quote
                        className="w-7 h-7 text-[#2D6FBA] stroke-[2.5]"
                        style={{ transform: "scaleX(-1)" }}
                      />
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-slate-700 text-[13.5px] sm:text-[14px] leading-relaxed font-normal text-justify">
                      {item.quote}
                    </p>
                  </div>

                  {/* Author / Company Sign-off at bottom right */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col items-end text-right">
                    <h4 className="text-slate-900 font-bold text-sm sm:text-base">
                      {item.authorName}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                      {item.companyName}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LandingTestimonials;
