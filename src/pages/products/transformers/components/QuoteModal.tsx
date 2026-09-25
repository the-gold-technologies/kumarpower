import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { TransformerProduct } from "../types";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: TransformerProduct | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  open,
  onOpenChange,
  product,
}) => {
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [quoteResult, setQuoteResult] = useState("");
  const [quoteSending, setQuoteSending] = useState(false);

  useEffect(() => {
    if (product) {
      setQuoteForm({
        name: "",
        email: "",
        phone: "",
        message: `I'm interested in ${product?.name || "Transformers"}`,
      });
      setQuoteResult("");
    }
  }, [product]);

  const handleQuoteChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setQuoteForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuoteSending(true);
    setQuoteResult("Sending...");
    setTimeout(() => {
      setQuoteSending(false);
      setQuoteResult("Form Submitted Successfully");
      setTimeout(() => {
        onOpenChange(false);
        setQuoteResult("");
      }, 1500);
    }, 1200);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
          <DialogDescription>
            Provide your contact details and product information. We'll contact
            you shortly.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleQuoteSubmit}
          className="flex text-black flex-col gap-3 mt-4"
        >
          <div>
            <label className="block text-sm mb-1 text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              value={quoteForm.name}
              onChange={handleQuoteChange}
              required
              className="w-full text-black px-3 py-2 rounded bg-white border border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              value={quoteForm.email}
              onChange={handleQuoteChange}
              required
              className="w-full text-black px-3 py-2 rounded bg-white border border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-700">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              type="tel"
              value={quoteForm.phone}
              onChange={handleQuoteChange}
              required
              className="w-full text-black px-3 py-2 rounded bg-white border border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-700">Message</label>
            <textarea
              name="message"
              value={quoteForm.message}
              onChange={handleQuoteChange}
              rows={4}
              className="w-full text-black px-3 py-2 rounded bg-white border border-gray-300"
            />
          </div>

          <div className="flex gap-2 mt-2">
            <Button
              type="submit"
              className="bg-[#2D6FBA] hover:bg-[#225488] text-white"
              disabled={quoteSending}
            >
              {quoteSending ? "Sending..." : "Send Quote"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
          </div>
          {quoteResult && (
            <div className="mt-2">
              <span className="text-sm text-gray-600">{quoteResult}</span>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};
