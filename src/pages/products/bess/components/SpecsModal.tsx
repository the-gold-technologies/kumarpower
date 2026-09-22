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
import { BESSProduct } from "./BESSCard";
import Portfolio from "@/assets/Brochure/Portfolio.pdf";

interface SpecsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: BESSProduct | null;
  onRequestQuote: (product: BESSProduct) => void;
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

        {product.applications && (
          <div className="mt-3">
            <h4 className="font-semibold text-xs text-gray-500 uppercase tracking-wider mb-1">
              Recommended Applications
            </h4>
            <p className="text-sm text-gray-800">{product.applications}</p>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 pt-4 border-t">
          <Button
            size="sm"
            variant="default"
            className="bg-[#2D6FBA] hover:bg-[#225488] w-full sm:w-auto text-white"
            onClick={() => {
              onOpenChange(false);
              onRequestQuote(product);
            }}
          >
            Request Quote
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex items-center gap-1 w-full sm:w-auto"
            onClick={() => {
              const link = document.createElement("a");
              link.href = product.brochurePdf || Portfolio;
              link.download = `${product.name} Brochure.pdf`;
              link.click();
            }}
          >
            <Download className="w-4 h-4" />
            Download Brochure
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
