import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: any;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  open,
  onOpenChange,
  product,
}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (product) {
      setForm({
        name: "",
        email: "",
        phone: "",
        message: `I'm interested in ${product?.name || "Generators"}`,
      });
      setResult("");
    }
  }, [product]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setResult("Sending...");
    try {
      const API_BASE_URL = import.meta.env.VITE_CMS_API_URL || "";
      const res = await fetch(`${API_BASE_URL}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          interestedIn: `Quote Request: ${product?.name || "Generators"}`,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setResult("Form Submitted Successfully! We will contact you soon.");
        setForm({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => {
          onOpenChange(false);
          setResult("");
        }, 1800);
      } else {
        setResult(data.message || "Submission failed");
      }
    } catch (err) {
      console.error(err);
      setResult("Submission error. Please try again.");
    } finally {
      setSending(false);
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

        <form onSubmit={handleSubmit} className="flex text-black flex-col gap-3 mt-4">
          <div>
            <label className="block text-sm mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
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
              value={form.email}
              onChange={handleChange}
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
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full text-black px-3 py-2 rounded bg-white border border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full text-black px-3 py-2 rounded bg-white border border-gray-300"
            />
          </div>

          <div className="flex gap-2 mt-2">
            <Button
              type="submit"
              className="bg-[#2D6FBA] hover:bg-[#225488]"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Quote"}
            </Button>
            <Button variant="outline" type="button" onClick={handleClose}>
              Cancel
            </Button>
          </div>
          {result && (
            <div className="mt-2">
              <span className="text-sm text-gray-500">{result}</span>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};
