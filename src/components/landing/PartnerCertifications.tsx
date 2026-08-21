import React from "react";
import { useSectionData } from "@/store/useCMSStore";

export const PartnerCertifications: React.FC = () => {
  const { data: homeCMS } = useSectionData<any>("home");
  const data = homeCMS?.partnerCertifications || {};

  const title = data.title || "";
  const description = data.description || "";
  const logoList: any[] = Array.isArray(data.logos) ? data.logos : [];

  if (logoList.length === 0 && !title && !description) {
    return null;
  }

  // Production Infinite Marquee Engine: Dynamically calculate optimal repeat count
  // to ensure 100% full screen coverage on any resolution (including 4K) without DOM bloat.
  const repeatFactor = Math.max(3, Math.ceil(32 / (logoList.length || 1)));
  const extendedLogos = Array.from({ length: repeatFactor }).flatMap(
    () => logoList,
  );

  return (
    <section className="py-16 sm:py-20 bg-slate-950 text-white relative border-b border-slate-800/80 overflow-hidden">
      {/* Soft Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#1A6AA2]/15 blur-[140px] pointer-events-none rounded-full" />

      {/* Centered Dark Mode Header */}
      {(title || description) && (
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10 mb-10 sm:mb-14">
          {title && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-3xl mx-auto font-normal">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Edge-to-Edge Dark Marquee Logo Slider Track */}
      {logoList.length > 0 && (
        <div className="relative w-full overflow-hidden py-4">
          {/* Left & Right Edge Gradient Fades */}
          <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-44 z-20 pointer-events-none bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-44 z-20 pointer-events-none bg-gradient-to-l from-slate-950 to-transparent" />

          {/* GPU-Accelerated Infinite Marquee Track */}
          <div className="logo-scroll flex items-center gap-8 sm:gap-10">
            {extendedLogos.map((logo: any, idx: number) => {
              const src =
                logo.url || logo.src || (typeof logo === "string" ? logo : "");
              const alt = logo.alt || `Partner Logo ${idx + 1}`;

              return (
                <div
                  key={logo.id ? `${logo.id}-${idx}` : idx}
                  className="flex-shrink-0 h-20 sm:h-24 w-44 sm:w-52 bg-white rounded-xl shadow-md p-3 sm:p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  {src && (
                    <img
                      src={src}
                      alt={alt}
                      className="max-h-full max-w-full object-contain"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default PartnerCertifications;
