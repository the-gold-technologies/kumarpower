import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface GeneratorCardProps {
  product: any;
  onViewDetails: (product: any) => void;
  onGetQuote: (product: any) => void;
}

export const GeneratorCard: React.FC<GeneratorCardProps> = ({
  product,
  onViewDetails,
  onGetQuote,
}) => {
  return (
    <Card className="overflow-hidden border border-gray-700 rounded-md bg-gray-800 hover:bg-gray-750 flex flex-col justify-between">
      <div>
        <div className="aspect-w-16 aspect-h-9 bg-gray-700 h-48">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full bg-white object-contain"
          />
        </div>

        <div className="p-3">
          <h3 className="font-medium text-sm text-white">{product.name}</h3>

          <div className="mt-2 text-xs text-gray-300">
            <div className="flex justify-between">
              <span>Fuel: {product.fuelType}</span>
              <span>CPCB: {product.cpcbNorm}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>Cooling: {product.cooling}</span>
              <span>Phase: {product.phase}</span>
            </div>
          </div>

          {(product.rating || product.ratingCount) && (
            <div className="mt-2 flex items-center">
              <span className="text-yellow-400 text-xs">★</span>
              <span className="text-xs ml-1 text-gray-300">
                {product.rating}
              </span>
              {product.ratingCount && (
                <span className="text-xs ml-1 text-gray-500">
                  ({product.ratingCount})
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="p-3 pt-0">
        <div className="mt-3 flex justify-between gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-7 text-xs border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600 flex-1"
            onClick={() => onViewDetails(product)}
          >
            View Details
          </Button>

          <Button
            size="sm"
            className="h-7 text-xs bg-[#2D6FBA] hover:bg-[#225488] text-white flex-1"
            onClick={() => onGetQuote(product)}
          >
            Get Quote
          </Button>
        </div>
      </div>
    </Card>
  );
};
