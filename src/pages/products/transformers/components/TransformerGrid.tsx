import React from "react";
import { LinkText } from "@/components/ui/LinkText";
import { TransformerCard } from "./TransformerCard";
import { TransformerProduct } from "../types";

interface TransformerGridProps {
  title: string;
  description: string;
  transformers: TransformerProduct[];
  onViewSpecs: (product: TransformerProduct) => void;
  onGetQuote: (product: TransformerProduct) => void;
}

export const TransformerGrid: React.FC<TransformerGridProps> = ({
  title,
  description,
  transformers,
  onViewSpecs,
  onGetQuote,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8">
      <div className="flex-1">
        {(title || description) && (
          <div className="mb-6">
            {title && <h2 className="text-xl font-bold text-white">{title}</h2>}
            {description && (
              <p className="text-gray-400 mt-1 text-sm">
                <LinkText
                  text={description}
                  linkClassName="text-[#2D6FBA] hover:underline font-bold"
                />
              </p>
            )}
          </div>
        )}

        {transformers.length === 0 ? (
          <div className="py-12 text-center text-gray-500 italic">
            No transformers currently listed.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {transformers.map((product) => (
              <TransformerCard
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
