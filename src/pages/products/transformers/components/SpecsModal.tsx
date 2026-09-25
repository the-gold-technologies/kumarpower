import React from "react";
import { Link } from "react-router-dom";
import { LinkText } from "@/components/ui/LinkText";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { TransformerProduct } from "../types";

interface SpecsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: TransformerProduct | null;
}

export const SpecsModal: React.FC<SpecsModalProps> = ({
  open,
  onOpenChange,
  product,
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

        {product.technicalSpecs && (
          <div className="mt-4">
            <h3 className="font-semibold text-base mb-2">
              Technical Specifications:
            </h3>
            <div className="bg-gray-50 rounded-md p-4 text-sm">
              <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                <LinkText
                  text={product.technicalSpecs}
                  linkClassName="text-[#2D6FBA] hover:underline font-bold"
                />
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 pt-4 border-t">
          <Button
            size="sm"
            variant="default"
            className="bg-[#2D6FBA] hover:bg-[#225488] w-full sm:w-auto"
            asChild
          >
            <Link to="/contact">Request Quote</Link>
          </Button>

          {product.brochurePdf && (
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-1 w-full sm:w-auto"
              asChild
            >
              <a
                href={product.brochurePdf}
                target="_blank"
                rel="noreferrer"
                download
              >
                <Download className="w-4 h-4 mr-1" />
                Brochure
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
