import React from "react";
import { Button } from "@/components/ui/button";
import { LinkText } from "@/components/ui/LinkText";
import { Sun } from "lucide-react";

interface NeedHelpSectionProps {
  title?: string;
  subtitle?: string;
  btnText?: string;
}

export const NeedHelpSection: React.FC<NeedHelpSectionProps> = ({
  title = "Need Help Sizing Your Rooftop Solar Capacity?",
  subtitle = "Our solar engineers evaluate your available shadow-free rooftop area, electricity bill consumption pattern, and DG backup setup to recommend the optimal solar capacity.",
  btnText = "Speak with Solar Specialist",
}) => {
  if (!title && !subtitle && !btnText) return null;

  return (
    <section className="py-8 sm:py-12 bg-[#AAAAAA]">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 text-center">
        {title && (
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-xs sm:text-sm text-black mb-6">
            <LinkText
              text={subtitle}
              linkClassName="text-[#2D6FBA] hover:underline font-bold"
            />
          </p>
        )}
        <div className="flex w-full items-center justify-center">
          <Button
            onClick={() => {
              window.location.href = "/contact";
            }}
            variant="default"
            size="sm"
            className="bg-white p-4 hover:bg-gray-100 text-gray-800 border border-gray-300 flex items-center justify-center gap-1 font-medium"
          >
            <Sun className="h-4 w-4 text-[#2D6FBA]" />
            {btnText}
          </Button>
        </div>
      </div>
    </section>
  );
};
