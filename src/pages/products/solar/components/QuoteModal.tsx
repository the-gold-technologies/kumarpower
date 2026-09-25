import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { SolarProduct } from "./SolarCard";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: SolarProduct | null;
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
    capacity: "",
    message: "",
  });
  const [quoteResult, setQuoteResult] = useState("");
  const [quoteSending, setQuoteSending] = useState(false);

  const handleQuoteChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          interestedIn: `Quote Request: ${product?.name || "Solar Solution"} (${quoteForm.capacity || "Capacity Not Specified"})`,
          message: quoteForm.message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setQuoteResult("Request Submitted Successfully! We will contact you soon.");
        setQuoteForm({ name: "", email: "", phone: "", capacity: "", message: "" });
        setTimeout(() => {
          onOpenChange(false);
          setQuoteResult("");
        }, 1800);
      } else {
        setQuoteResult(data.message || "Submission failed");
      }
    } catch (err) {
      console.error(err);
      setQuoteResult("Submission error, please try again.");
    } finally {
      setQuoteSending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">
            Request Quote: {product?.name || "Solar Solution"}
          </DialogTitle>
          <DialogDescription className="text-xs text-gray-500">
            Submit your power and rooftop specifications. Our commercial solar team will prepare a techno-commercial proposal.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleQuoteSubmit} className="space-y-3 mt-3">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              required
              name="name"
              value={quoteForm.name}
              onChange={handleQuoteChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs focus:ring-1 focus:ring-[#2D6FBA] outline-none"
              placeholder="e.g. Rajesh Sharma"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                required
                type="tel"
                name="phone"
                value={quoteForm.phone}
                onChange={handleQuoteChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs focus:ring-1 focus:ring-[#2D6FBA] outline-none"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                required
                type="email"
                name="email"
                value={quoteForm.email}
                onChange={handleQuoteChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs focus:ring-1 focus:ring-[#2D6FBA] outline-none"
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Rooftop Area / Required Solar Capacity
            </label>
            <input
              name="capacity"
              value={quoteForm.capacity}
              onChange={handleQuoteChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs focus:ring-1 focus:ring-[#2D6FBA] outline-none"
              placeholder="e.g. 50 kW or 5,000 sq ft shadow-free roof"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Project Location / Notes
            </label>
            <textarea
              name="message"
              rows={2}
              value={quoteForm.message}
              onChange={handleQuoteChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs focus:ring-1 focus:ring-[#2D6FBA] outline-none resize-none"
              placeholder="Facility type, city, current monthly electricity bill, or DG sync requirements..."
            />
          </div>

          {quoteResult && (
            <p
              className={`text-xs text-center font-medium ${
                quoteResult.includes("Successfully")
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {quoteResult}
            </p>
          )}

          <div className="pt-2">
            <Button
              type="submit"
              disabled={quoteSending}
              className="w-full h-9 text-xs bg-[#2D6FBA] hover:bg-[#225488] text-white font-medium"
            >
              {quoteSending ? "Submitting..." : "Submit Quote Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
