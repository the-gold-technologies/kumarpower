import React, { useState } from "react";
import {
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  PhoneCall,
} from "lucide-react";
import { toast } from "sonner";
import { useSectionData } from "@/store/useCMSStore";

export const ConsultationForm: React.FC = () => {
  const { data: homeData } = useSectionData<any>("home");
  const data = homeData?.consultation || {};

  const badge = data.badge || "";
  const heading = data.heading || "";
  const description = data.description || "";
  const phone = data.phone || "";
  const salesEmail = data.salesEmail || "";
  const supportEmail = data.supportEmail || "";
  const accountsEmail = data.accountsEmail || "";
  const expertBtnText = data.expertBtnText || "";
  const assessmentBtnText = data.assessmentBtnText || "";
  const formCardTitle = data.formCardTitle || "";
  const submitBtnText = data.submitBtnText || "";
  const successTitle = data.successTitle || "";
  const successMessage = data.successMessage || "";
  const industries: string[] = Array.isArray(data.industries) ? data.industries : [];

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    industry: "",
    monthlyBill: "",
    existingDG: "",
    existingSolar: "",
    requirement: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const API_BASE_URL = import.meta.env.VITE_CMS_API_URL || "";

    const detailedMessage = [
      formData.requirement ? `Requirement: ${formData.requirement}` : "",
      formData.company ? `Company: ${formData.company}` : "",
      formData.location ? `Location: ${formData.location}` : "",
      formData.industry ? `Industry: ${formData.industry}` : "",
      formData.monthlyBill ? `Monthly Bill: ${formData.monthlyBill}` : "",
      formData.existingDG ? `Existing DG: ${formData.existingDG}` : "",
      formData.existingSolar ? `Existing Solar: ${formData.existingSolar}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const payload = {
      name: formData.name,
      department: formData.company
        ? `${formData.company}${formData.industry ? ` (${formData.industry})` : ""}`
        : (formData.industry || "Sales & Site Assessment"),
      email: formData.email,
      phone: formData.phone,
      productOrService: formData.industry
        ? `${formData.industry} - Site Assessment`
        : (formData.requirement || "Site Assessment & Consultation"),
      callback: true,
      status: "New",
      message: detailedMessage || formData.requirement || "Site Assessment Requested",
    };

    try {
      // 1. Submit directly to CMS Enquiries endpoint
      await fetch(`${API_BASE_URL}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // 2. Also forward to webhook if available
      fetch("https://kumarpower.com/wep-api.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});
    } catch (err) {
      console.warn("CMS enquiries submission error:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success(
        successMessage ||
          "Requirement submitted! Our engineering team will review and contact you shortly.",
      );
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById("homepage-form-inputs");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="consultation-form"
      className="py-20 md:py-28 bg-[#f8fafc] text-slate-900 relative"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Text, Copy & Action Buttons */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              {badge && (
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400 block">
                  {badge}
                </span>
              )}

              {heading && (
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                  {heading}
                </h2>
              )}

              {description && (
                <blockquote className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed border-l-2 border-[#1A6AA2] pl-4 italic py-1">
                  {description}
                </blockquote>
              )}
            </div>

            {/* Action Buttons: Request Site Assessment & Speak With Power Expert */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToForm}
                type="button"
                className="inline-flex items-center bg-[#1A6AA2] hover:bg-[#145380] text-white rounded-full px-6 py-3.5 text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#1A6AA2]/25 group cursor-pointer"
              >
                <span>{assessmentBtnText || "Request a Site Assessment"}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              {phone && (
                <a
                  href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                  className="inline-flex items-center bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 rounded-full px-6 py-3.5 text-xs sm:text-sm font-bold transition-all shadow-sm group"
                >
                  <PhoneCall className="w-4 h-4 mr-2 text-[#1A6AA2]" />
                  <span>{expertBtnText || "Speak With a Power Expert"}</span>
                </a>
              )}
            </div>

            {/* Direct Contact Info */}
            {(phone || salesEmail || accountsEmail || supportEmail) && (
              <div className="space-y-2.5 pt-4 border-t border-slate-200/80 text-sm">
                {phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#1A6AA2] shrink-0" />
                    <span className="text-slate-500 font-medium min-w-[75px]">
                      Phone:
                    </span>
                    <a
                      href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                      className="font-bold text-slate-900 hover:text-[#1A6AA2] transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                )}
                {salesEmail && (
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#1A6AA2] shrink-0" />
                    <span className="text-slate-500 font-medium min-w-[75px]">
                      Sales:
                    </span>
                    <a
                      href={`mailto:${salesEmail}`}
                      className="font-semibold text-slate-900 hover:text-[#1A6AA2] transition-colors"
                    >
                      {salesEmail}
                    </a>
                  </div>
                )}
                {accountsEmail && (
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#1A6AA2] shrink-0 opacity-0" />
                    <span className="text-slate-500 font-medium min-w-[75px]">
                      Accounts:
                    </span>
                    <a
                      href={`mailto:${accountsEmail}`}
                      className="font-semibold text-slate-900 hover:text-[#1A6AA2] transition-colors"
                    >
                      {accountsEmail}
                    </a>
                  </div>
                )}
                {supportEmail && (
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#1A6AA2] shrink-0 opacity-0" />
                    <span className="text-slate-500 font-medium min-w-[75px]">
                      Support:
                    </span>
                    <a
                      href={`mailto:${supportEmail}`}
                      className="font-semibold text-slate-900 hover:text-[#1A6AA2] transition-colors"
                    >
                      {supportEmail}
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Compact Form Card */}
          <div className="lg:col-span-7">
            <div
              id="homepage-form-inputs"
              className="bg-white rounded-[32px] p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100"
            >
              {formCardTitle && (
                <div className="mb-6 pb-4 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900">
                    {formCardTitle}
                  </h3>
                </div>
              )}
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#1A6AA2]/10 text-[#1A6AA2] flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {successTitle || "Site Assessment Requested!"}
                  </h3>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto">
                    {successMessage ||
                      `Thank you, ${formData.name || "Customer"}. Our technical engineering team will review your application and get back to you shortly.`}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#1A6AA2] text-white text-xs font-semibold hover:bg-[#145380] transition-colors cursor-pointer"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-[#f4f5f7] border-0 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#1A6AA2]/30 focus:outline-none transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Enterprise"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full bg-[#f4f5f7] border-0 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#1A6AA2]/30 focus:outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-[#f4f5f7] border-0 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#1A6AA2]/30 focus:outline-none transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-[#f4f5f7] border-0 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#1A6AA2]/30 focus:outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Location & Industry */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                        Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Delhi NCR"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="w-full bg-[#f4f5f7] border-0 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#1A6AA2]/30 focus:outline-none transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                        Industry
                      </label>
                      <div className="relative">
                        <select
                          value={formData.industry}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              industry: e.target.value,
                            })
                          }
                          className="w-full bg-[#f4f5f7] border-0 rounded-2xl px-4 py-3 text-sm text-slate-900 appearance-none focus:bg-white focus:ring-2 focus:ring-[#1A6AA2]/30 focus:outline-none transition-all font-medium cursor-pointer"
                        >
                          <option value="" disabled hidden>
                            Select Industry...
                          </option>
                          {industries.length > 0 ? (
                            industries.map((ind, idx) => (
                              <option key={idx} value={ind}>
                                {ind}
                              </option>
                            ))
                          ) : (
                            <>
                              <option value="Manufacturing">Manufacturing</option>
                              <option value="Hospitality">
                                Hospitality & Hotels
                              </option>
                              <option value="Healthcare">
                                Healthcare & Hospitals
                              </option>
                              <option value="Data Centre">Data Centre</option>
                              <option value="Commercial">
                                Commercial Real Estate
                              </option>
                              <option value="Infrastructure">
                                Infrastructure & Govt
                              </option>
                            </>
                          )}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-4 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Monthly Bill, Existing DG, Existing Solar */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                        Monthly Electricity Bill
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ₹5 Lakhs"
                        value={formData.monthlyBill}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            monthlyBill: e.target.value,
                          })
                        }
                        className="w-full bg-[#f4f5f7] border-0 rounded-2xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#1A6AA2]/30 focus:outline-none transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                        Existing DG Capacity
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 500 kVA"
                        value={formData.existingDG}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            existingDG: e.target.value,
                          })
                        }
                        className="w-full bg-[#f4f5f7] border-0 rounded-2xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#1A6AA2]/30 focus:outline-none transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                        Existing Solar Capacity
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 100 kWp / None"
                        value={formData.existingSolar}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            existingSolar: e.target.value,
                          })
                        }
                        className="w-full bg-[#f4f5f7] border-0 rounded-2xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#1A6AA2]/30 focus:outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Requirement */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                      Requirement
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Briefly state your power goal or outage challenge..."
                      value={formData.requirement}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          requirement: e.target.value,
                        })
                      }
                      className="w-full bg-[#f4f5f7] border-0 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#1A6AA2]/30 focus:outline-none transition-all font-medium resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center bg-[#1A6AA2] hover:bg-[#145380] text-white rounded-full p-1.5 pr-7 font-semibold text-sm transition-all shadow-lg shadow-[#1A6AA2]/25 disabled:opacity-50 group cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-full bg-white text-[#1A6AA2] flex items-center justify-center font-bold mr-3 shadow-sm group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <span>
                        {isSubmitting
                          ? "Sending..."
                          : (submitBtnText || "Request a Site Assessment")}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
