import React from "react";
import { LinkText } from "@/components/ui/LinkText";
import { SolarCard, SolarProduct } from "./SolarCard";

interface SolarSectionProps {
  id?: string;
  title: string;
  description: string;
  products: SolarProduct[];
  onViewDetails: (product: SolarProduct) => void;
  onGetQuote: (product: SolarProduct) => void;
}

export const SolarSection: React.FC<SolarSectionProps> = ({
  id,
  title,
  description,
  products,
  onViewDetails,
  onGetQuote,
}) => {
  return (
    <div id={id} className="space-y-4">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white">{title}</h2>
        {description && (
          <p className="text-gray-400 mt-1 text-xs sm:text-sm">
            <LinkText
              text={description}
              linkClassName="text-[#2D6FBA] hover:underline font-bold"
            />
          </p>
        )}
      </div>

      {/* 3-Column Responsive Grid matching other pages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {products.map((product) => (
          <SolarCard
            key={product.id}
            product={product}
            onViewDetails={onViewDetails}
            onGetQuote={onGetQuote}
          />
        ))}
      </div>
    </div>
  );
};
