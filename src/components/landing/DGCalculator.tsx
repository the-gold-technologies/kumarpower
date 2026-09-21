import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Standard available Kirloskar DG kVA ratings in India (CPCB IV+)
const AVAILABLE_GENSET_RATINGS = [
  7.5, 10, 12.5, 15, 20, 25, 30, 35, 40, 45, 50, 62.5, 75, 82.5, 100, 125,
  160, 200, 250, 320, 380, 400, 500, 600, 625, 750, 1010, 1250, 1500, 2000,
];

const PRESETS = [10, 25, 50, 100, 150, 250, 500];

export const DGCalculator: React.FC = () => {
  // By default input starts at 0
  const [loadKW, setLoadKW] = useState<number>(0);
  const [inputStr, setInputStr] = useState<string>("");

  // 1. Base kVA = Total Load (kW) / 0.8 (Power Factor)
  const baseKVA = loadKW > 0 ? loadKW / 0.8 : 0;

  // 2. Add 20% safety margin / surge headroom
  const requiredKVA = baseKVA * 1.2;

  // 3. Find closest available rating >= requiredKVA and previous rating for range context
  const recIndex = AVAILABLE_GENSET_RATINGS.findIndex((rating) => rating >= requiredKVA);
  const recommendedGenset =
    recIndex !== -1
      ? AVAILABLE_GENSET_RATINGS[recIndex]
      : AVAILABLE_GENSET_RATINGS[AVAILABLE_GENSET_RATINGS.length - 1];
  const prevRating = recIndex > 0 ? AVAILABLE_GENSET_RATINGS[recIndex - 1] : null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    // Allow empty or digits only to prevent scrolling & invalid typing
    if (raw !== "" && !/^\d*\.?\d*$/.test(raw)) return;
    setInputStr(raw);
    const val = parseFloat(raw);
    if (isNaN(val) || val <= 0) {
      setLoadKW(0);
    } else {
      setLoadKW(Math.min(2500, val));
    }
  };

  const handlePresetClick = (val: number) => {
    setLoadKW(val);
    setInputStr(val.toString());
  };

  const scrollToConsultation = () => {
    const formEl = document.getElementById("consultation-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
      const reqInput = document.querySelector(
        'input[name="requirement"], select[name="requirement"], textarea[name="message"]'
      ) as HTMLInputElement | HTMLTextAreaElement | null;
      if (reqInput) {
        reqInput.value = `Enquiry for ${recommendedGenset} kVA DG Set (Total Load: ${loadKW} kW, Required Sizing: ${requiredKVA.toFixed(0)} kVA)`;
        reqInput.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }
  };

  return (
    <section
      id="dg-calculator"
      className="py-10 md:py-14 bg-slate-50 text-slate-900 border-t border-b border-slate-200 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-2xl relative z-10">
        {/* Compact Section Header */}
        <div className="text-center mx-auto mb-6 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A6AA2]/10 border border-[#1A6AA2]/25 text-[#1A6AA2] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>DG Sizing Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900">
            Calculate Your Ideal DG Capacity
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Enter your facility connected load to instantly calculate the recommended DG capacity.
          </p>
        </div>

        {/* Compact Calculator Box */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg shadow-slate-200/50 p-5 sm:p-7">
          {/* Input Header & Subtitle */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#1A6AA2]" />
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Customer Load Input
              </h3>
            </div>
            <span className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-slate-100 text-slate-600 border border-slate-200">
              Unit: kW
            </span>
          </div>

          {/* Input Field: Text-based with numeric mode to prevent wheel scroll changes */}
          <div className="mt-4">
            <div className="flex items-baseline justify-between mb-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Total Load (kW)
              </label>
              <span className="text-[11px] text-slate-400">
                Including any jerk load, if any
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                inputMode="decimal"
                pattern="[0-9]*"
                value={inputStr}
                onChange={handleInputChange}
                onWheel={(e) => e.currentTarget.blur()}
                placeholder="0"
                className="w-full text-2xl sm:text-3xl font-black bg-slate-50 border-2 border-slate-200 focus:border-[#1A6AA2] focus:bg-white rounded-xl px-4 py-3 pr-16 text-slate-900 placeholder:text-slate-300 focus:outline-none transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-base pointer-events-none">
                kW
              </div>
            </div>
          </div>

          {/* Quick Preset Pills */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-semibold text-slate-400 mr-1">
              Presets:
            </span>
            {PRESETS.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => handlePresetClick(preset)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all border ${
                  loadKW === preset
                    ? "bg-[#1A6AA2] text-white border-[#1A6AA2]"
                    : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {preset} kW
              </button>
            ))}
            {loadKW > 0 && (
              <button
                type="button"
                onClick={() => {
                  setLoadKW(0);
                  setInputStr("");
                }}
                className="px-2.5 py-1 rounded-md text-xs font-medium text-slate-400 hover:text-slate-700 hover:bg-slate-100 ml-auto transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {/* Compact Divider */}
          <div className="my-5 border-t border-slate-200/80" />

          {/* Bottom Side: Results Display */}
          <AnimatePresence mode="wait">
            {loadKW > 0 ? (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200/90 text-center"
              >
                <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full mb-2 border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Suitable Genset According to Available Products</span>
                </div>

                {/* Big Result Number */}
                <div className="flex items-baseline justify-center gap-1.5 my-1">
                  <span className="text-4xl sm:text-5xl font-black text-[#1A6AA2] tracking-tight">
                    {recommendedGenset}
                  </span>
                  <span className="text-xl font-bold text-slate-700">kVA</span>
                </div>
                <p className="text-xs font-semibold text-slate-700">
                  Kirloskar CPCB IV+ Compliant DG Set
                </p>

                {/* Concise explanation */}
                <div className="mt-3 p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed">
                  <span>
                    Your required load is <strong className="text-slate-900 font-bold">{requiredKVA.toFixed(0)} kVA</strong>{" "}
                    (based on {loadKW} kW load + 20% margin).
                  </span>
                  {prevRating && prevRating !== recommendedGenset && (
                    <span className="block mt-1">
                      In the available Kirloskar range ({prevRating} kVA and {recommendedGenset} kVA), the{" "}
                      <strong className="text-[#1A6AA2] font-bold">{recommendedGenset} kVA DG Set</strong> is the most apt choice.
                    </span>
                  )}
                </div>

                {/* Compact CTA Row */}
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
                  <Button
                    onClick={scrollToConsultation}
                    className="w-full sm:w-auto bg-[#1A6AA2] hover:bg-[#155380] text-white font-semibold py-2.5 px-6 rounded-lg shadow-sm flex items-center justify-center gap-1.5 text-xs sm:text-sm group transition-all"
                  >
                    <span>Get Instant Quote for {recommendedGenset} kVA</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <a
                    href="/products/kirloskar-diesel-generator"
                    className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-semibold transition-all text-center"
                  >
                    View Specs
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-5 text-center rounded-xl bg-slate-50 border border-dashed border-slate-200 px-4"
              >
                <p className="text-xs text-slate-500 font-medium">
                  Enter your total load in kW above or click a preset to see the recommended genset capacity.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DGCalculator;
