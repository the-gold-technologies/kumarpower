import React from "react";
import { LinkText } from "@/components/ui/LinkText";
import { BESSCard, BESSProduct } from "./BESSCard";

interface BESSSectionProps {
  id?: string;
  title: string;
  description?: string;
  products: BESSProduct[];
  onViewDetails: (product: BESSProduct) => void;
  onGetQuote: (product: BESSProduct) => void;
}

export const BESSSection: React.FC<BESSSectionProps> = ({
  id,
  title,
  description,
  products,
  onViewDetails,
  onGetQuote,
}) => {
  if (!products || products.length === 0) return null;

  return (
    <div id={id} className="scroll-mt-32">
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
        {products.map((product) => (
          <BESSCard
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
