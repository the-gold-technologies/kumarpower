import React from "react";
import { LinkText } from "@/components/ui/LinkText";

export interface WhyChooseCardData {
  title: string;
  desc: string;
  iconSvg: React.ReactNode;
}

interface WhyChooseSectionProps {
  title: string;
  para1: string;
  para2: string;
  cards: WhyChooseCardData[];
}

// Renders **bold** segments and keeps LinkText behavior for the rest
const RichText: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-bold text-gray-900">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <LinkText
            key={i}
            text={part}
            linkClassName="text-[#2D6FBA] hover:underline font-bold"
          />
        ),
      )}
    </>
  );
};

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  title,
  cards,
  para1,
  para2,
}) => {
  const visibleCards = cards.filter((c) => Boolean(c.title));
  const hasParas = Boolean(para1 || para2);
  if (!title && !hasParas && visibleCards.length === 0) return null;

  return (
    <section className="bg-[#E5E7EB] text-gray-800 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {title && (
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-10">
            {title}
          </h2>
        )}

        {hasParas && (
          <div className="mb-6 sm:mb-10 space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
            {para1 && (
              <p>
                <RichText text={para1} />
              </p>
            )}
            {para2 && (
              <p>
                <RichText text={para2} />
              </p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {visibleCards.map((card, idx) => (
            <div key={idx} className="bg-white p-6 rounded-md shadow-sm">
              <div className="mb-4" style={{ color: "#2D6FBA" }}>
                {card.iconSvg}
              </div>
              <h3 className="text-base font-semibold mb-1">{card.title}</h3>
              <p className="text-sm text-gray-600">
                <LinkText
                  text={card.desc}
                  linkClassName="text-[#2D6FBA] hover:underline font-bold"
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
