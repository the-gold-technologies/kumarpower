import React from "react";
import { LinkText } from "@/components/ui/LinkText";

interface BESSHeroProps {
  HeadingTag: keyof JSX.IntrinsicElements;
  heroHeadingPart1: string;
  heroHeadingPart2: string;
  heroSub?: string;
  heroBg: string;
}

export const BESSHero: React.FC<BESSHeroProps> = ({
  HeadingTag,
  heroHeadingPart1,
  heroHeadingPart2,
  heroSub,
  heroBg,
}) => {
  return (
    <div className="relative bg-black text-white h-[320px] md:h-[450px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          filter: "brightness(0.45)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent opacity-90" />

      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <HeadingTag className="text-2xl md:text-5xl font-bold">
          {heroHeadingPart1}{" "}
          <span className="text-[#2D6FBA]">{heroHeadingPart2}</span>
        </HeadingTag>
        {heroSub && (
          <p className="text-sm sm:text-base md:text-lg mt-3 max-w-2xl text-gray-200">
            <LinkText
              text={heroSub}
              linkClassName="text-[#2D6FBA] hover:underline font-bold"
            />
          </p>
        )}
      </div>
    </div>
  );
};
