import React from "react";
import { LinkText } from "@/components/ui/LinkText";
import { PanelCard } from "./PanelCard";
import { PanelProduct } from "../types";

interface PanelGridProps {
  title: string;
  description: string;
  panels: PanelProduct[];
  onViewSpecs: (product: PanelProduct) => void;
  onGetQuote: (product: PanelProduct) => void;
}

export const PanelGrid: React.FC<PanelGridProps> = ({
  title,
  description,
  panels,
  onViewSpecs,
  onGetQuote,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8">
      <div className="flex-1">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-gray-400 mt-1 text-sm">
            <LinkText
              text={description}
              linkClassName="text-[#2D6FBA] hover:underline font-bold"
            />
          </p>
        </div>

        {panels.length === 0 ? (
          <div className="py-12 text-center text-gray-500 italic">
            No electrical panels currently listed.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {panels.map((product) => (
              <PanelCard
                key={product.id || product.name}
                product={product}
                onViewSpecs={onViewSpecs}
                onGetQuote={onGetQuote}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
