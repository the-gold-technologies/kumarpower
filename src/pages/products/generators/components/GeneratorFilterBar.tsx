import React, { useEffect, useState } from "react";

export interface FilterCategory {
  id: string;
  label: string;
  count: number;
}

interface GeneratorFilterBarProps {
  categories: FilterCategory[];
}

export const GeneratorFilterBar: React.FC<GeneratorFilterBarProps> = ({
  categories,
}) => {
  const [activeId, setActiveId] = useState<string>("all");

  const visibleCategories = categories.filter((cat) => cat.count > 0);

  const scrollToSection = (id: string) => {
    setActiveId(id);
    if (id === "all") {
      const firstSection = document.getElementById(visibleCategories[0]?.id);
      if (firstSection) {
        const yOffset = -110;
        const y =
          firstSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const yOffset = -110;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = visibleCategories.length - 1; i >= 0; i--) {
        const cat = visibleCategories[i];
        const el = document.getElementById(cat.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(cat.id);
          return;
        }
      }
      if (window.scrollY < 260) {
        setActiveId("all");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCategories]);

  return (
    <div className="sticky top-16 md:top-20 z-20 bg-black/95 backdrop-blur-md py-2.5 -mx-4 px-4 sm:mx-0 sm:px-0 border-b border-gray-800/60 mb-6 transition-all duration-200">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        <button
          onClick={() => scrollToSection("all")}
          className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
            activeId === "all"
              ? "bg-[#2D6FBA] text-white shadow-sm shadow-[#2D6FBA]/30"
              : "bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700/50"
          }`}
        >
          All Generators
        </button>

        {visibleCategories.map((cat) => {
          const isActive = activeId === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => scrollToSection(cat.id)}
              className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-[#2D6FBA] text-white shadow-sm shadow-[#2D6FBA]/30"
                  : "bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700/50"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                  isActive
                    ? "bg-white/25 text-white"
                    : "bg-gray-700/80 text-gray-400"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
