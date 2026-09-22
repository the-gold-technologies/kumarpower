import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { LinkText } from "@/components/ui/LinkText";
import { SolarProduct } from "./SolarCard";
import Portfolio from "@/assets/Brochure/Portfolio.pdf";

interface SpecsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: SolarProduct | null;
  onRequestQuote: (product: SolarProduct) => void;
}

export const SpecsModal: React.FC<SpecsModalProps> = ({
  open,
  onOpenChange,
  product,
  onRequestQuote,
}) => {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">
            {product.name} Specifications
          </DialogTitle>
          {product.description && (
            <DialogDescription className="text-gray-500">
              <LinkText
                text={product.description}
                linkClassName="text-[#2D6FBA] hover:underline font-bold"
              />
            </DialogDescription>
          )}
        </DialogHeader>

        {/* Technical Specifications Section */}
        <div className="mt-4">
          <h3 className="font-semibold text-base mb-2">
            Technical Specifications:
          </h3>
          <div className="bg-gray-50 rounded-md p-4 text-sm">
            <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed font-mono">
              <LinkText
                text={product.technicalSpecs}
                linkClassName="text-[#2D6FBA] hover:underline font-bold"
              />
            </div>
          </div>
        </div>

        {/* Applications */}
        {product.applications && (
          <div className="mt-4">
            <h3 className="font-semibold text-base mb-1">
              Recommended Applications:
            </h3>
            <p className="text-sm text-gray-600">
              <LinkText
                text={product.applications}
                linkClassName="text-[#2D6FBA] hover:underline font-bold"
              />
            </p>
          </div>
        )}

        {/* Modal Actions */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-3 pt-3 border-t">
          <a
            href={Portfolio}
            download="Kumar Power Solar Portfolio.pdf"
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto flex items-center gap-1 text-xs"
            >
              <Download className="w-3.5 h-3.5 mr-1" />
              Download Brochure
            </Button>
          </a>

          <div className="flex gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto text-xs"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
            <Button
              variant="default"
              size="sm"
              className="w-full sm:w-auto text-xs bg-[#2D6FBA] hover:bg-[#225488] text-white"
              onClick={() => {
                onOpenChange(false);
                onRequestQuote(product);
              }}
            >
              Request Quote
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
