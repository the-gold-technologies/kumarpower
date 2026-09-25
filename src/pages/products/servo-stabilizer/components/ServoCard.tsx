import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { ServoProduct } from "../types";

interface ServoCardProps {
  product: ServoProduct;
  onViewSpecs: (product: ServoProduct) => void;
  onGetQuote: (product: ServoProduct) => void;
}

export const ServoCard: React.FC<ServoCardProps> = ({
  product,
  onViewSpecs,
  onGetQuote,
}) => {
  return (
    <Card className="overflow-hidden border border-gray-700 rounded-md bg-gray-800 hover:bg-gray-750 transition-colors">
      <div>
        <div className="aspect-w-16 aspect-h-9 bg-gray-700 overflow-hidden h-40 sm:h-48">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full bg-white object-contain"
            loading="lazy"
          />
        </div>
        <div className="p-3">
          <h3 className="font-medium text-sm text-white">{product.name}</h3>

          <div className="mt-2 text-xs text-gray-300">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <span>Fuel: {product.fuelType || "N/A"}</span>
              <span>CPCB: {product.cpcbNorm || "N/A"}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1">
              <span>Cooling: {product.cooling || "Air/Oil"}</span>
              <span>Phase: {product.phase || "Three Phase"}</span>
            </div>
          </div>

          <div className="mt-2 flex items-center">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-xs ml-1 text-gray-300">
              {product.rating || "4.7"}
            </span>
            <span className="text-xs ml-1 text-gray-500">
              ({product.ratingCount || "100+"})
            </span>
          </div>

          <div className="mt-3 flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
            <Button
              variant="outline"
              size="sm"
              className="h-7 text-xs flex items-center gap-1 py-0 px-2 border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600 cursor-pointer"
              onClick={() => onViewSpecs(product)}
            >
              View Details <ChevronRight className="w-3 h-3" />
            </Button>

            <Button
              variant="default"
              size="sm"
              className="h-7 text-xs py-0 px-4 bg-[#2D6FBA] hover:bg-[#225488] text-white cursor-pointer"
              onClick={() => onGetQuote(product)}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
