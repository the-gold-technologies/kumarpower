import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PanelProduct } from "../types";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: PanelProduct | null;
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
        message: `I'm interested in ${product?.name || "Electrical Panels"}`,
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
    setQuoteResult("Sending...");
    setQuoteSending(true);

    try {
      const API_BASE_URL = import.meta.env.VITE_CMS_API_URL || "";
      const res = await fetch(`${API_BASE_URL}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: quoteForm.name,
          email: quoteForm.email,
          phone: quoteForm.phone,
          interestedIn: `Quote Request: ${product?.name || "Electrical Panels"}`,
          message: quoteForm.message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setQuoteResult("Quote Request Submitted Successfully! We will contact you soon.");
        setQuoteForm({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => {
          onOpenChange(false);
          setQuoteResult("");
        }, 1800);
      } else {
        setQuoteResult(data.message || "Submission failed");
      }
    } catch (err) {
      console.error("Quote submit error:", err);
      setQuoteResult("Submission error. Please try again.");
    } finally {
      setQuoteSending(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
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
            <label className="block text-sm mb-1">
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
            <label className="block text-sm mb-1">
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
            <label className="block text-sm mb-1">
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
            <label className="block text-sm mb-1">Message</label>
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
            <Button variant="outline" type="button" onClick={handleClose}>
              Cancel
            </Button>
          </div>
          {quoteResult && (
            <div className="mt-2">
              <span className="text-sm text-gray-500">{quoteResult}</span>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};
