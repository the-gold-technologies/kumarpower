import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export interface SolarProduct {
  id: string;
  name: string;
  powerRating: string;
  efficiency: string;
  cellType: string;
  technology: string;
  warranty: string;
  rating?: number;
  ratingCount?: number;
  image: string;
  description: string;
  technicalSpecs: string;
  applications?: string;
  brochurePdf?: string;
}

interface SolarCardProps {
  product: SolarProduct;
  onViewDetails: (product: SolarProduct) => void;
  onGetQuote: (product: SolarProduct) => void;
}

export const SolarCard: React.FC<SolarCardProps> = ({
  product,
  onViewDetails,
  onGetQuote,
}) => {
  return (
    <Card className="overflow-hidden border border-gray-700 rounded-md bg-gray-800 hover:bg-gray-750 flex flex-col justify-between">
      <div>
        {/* Image container */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-700 overflow-hidden h-40 sm:h-48">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full bg-white object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-3">
          <h3 className="font-medium text-sm text-white">{product.name}</h3>

          <div className="mt-2 text-xs text-gray-300">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <span>Power: {product.powerRating}</span>
              <span>Efficiency: {product.efficiency}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1">
              <span>Cell: {product.cellType}</span>
              <span>Tech: {product.technology}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1 text-gray-400">
              <span>Warranty: {product.warranty}</span>
              <span>Standard: Tier-1 BIS</span>
            </div>
          </div>

          {/* Rating */}
          <div className="mt-2 flex items-center">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-xs ml-1 text-gray-300">
              {product.rating || 4.9}
            </span>
            <span className="text-xs ml-1 text-gray-500">
              ({product.ratingCount || 150})
            </span>
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-3 pt-0">
        <div className="mt-3 flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
          <Button
            variant="outline"
            size="sm"
            className="h-7 text-xs flex items-center gap-1 py-0 px-2 border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600 flex-1"
            onClick={() => onViewDetails(product)}
          >
            View Details <ChevronRight className="w-3 h-3" />
          </Button>

          <Button
            variant="default"
            size="sm"
            className="h-7 text-xs py-0 px-4 bg-[#2D6FBA] hover:bg-[#225488] text-white flex-1"
            onClick={() => onGetQuote(product)}
          >
            Get Quote
          </Button>
        </div>
      </div>
    </Card>
  );
};
