import React from "react";
import { LinkText } from "@/components/ui/LinkText";

interface ServoHeroProps {
  HeadingTag: React.ElementType;
  headingPart1: string;
  headingPart2: string;
  sub: string;
  bgImage: string;
}

export const ServoHero: React.FC<ServoHeroProps> = ({
  HeadingTag,
  headingPart1,
  headingPart2,
  sub,
  bgImage,
}) => {
  return (
    <div className="relative bg-black text-white h-[220px] md:h-[350px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: "brightness(0.5)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <HeadingTag className="text-2xl md:text-5xl font-bold">
          {headingPart1}{" "}
          {headingPart2 && (
            <span className="text-[#2D6FBA]">{headingPart2}</span>
          )}
        </HeadingTag>
        {sub && (
          <p className="text-sm sm:text-base md:text-lg mt-2 max-w-2xl">
            <LinkText
              text={sub}
              linkClassName="text-[#2D6FBA] hover:underline font-bold"
            />
          </p>
        )}
      </div>
    </div>
  );
};
