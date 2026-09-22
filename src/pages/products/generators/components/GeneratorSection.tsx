import React from "react";
import { LinkText } from "@/components/ui/LinkText";
import { GeneratorCard } from "./GeneratorCard";

interface GeneratorSectionProps {
  id: string;
  title: string;
  description?: string;
  products: any[];
  onViewDetails: (product: any) => void;
  onGetQuote: (product: any) => void;
  filterSlot?: React.ReactNode;
}

export const GeneratorSection: React.FC<GeneratorSectionProps> = ({
  id,
  title,
  description,
  products,
  onViewDetails,
  onGetQuote,
  filterSlot,
}) => {
  if (!products || products.length === 0) return null;

  return (
    <div id={id} className="scroll-mt-32">
      {filterSlot && (
        <div className="mb-4">
          {filterSlot}
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
        {description && (
          <p className="text-gray-400 mt-1 text-sm">
            <LinkText
              text={description}
              linkClassName="text-[#2D6FBA] hover:underline font-bold"
            />
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product: any) => (
          <GeneratorCard
            key={product.id || product.name}
            product={product}
            onViewDetails={onViewDetails}
            onGetQuote={onGetQuote}
          />
        ))}
      </div>
    </div>
  );
};
