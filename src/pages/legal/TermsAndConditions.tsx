import React from "react";
import { Link } from "react-router-dom";
import { useSectionData, usePageHeadingTag } from "@/store/useCMSStore";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import Loader from "@/components/ui/Loader";
import { Calendar, Clock, Mail, Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
  const HeadingTag = usePageHeadingTag("terms-and-conditions");
  const { data: cmsData, loading } = useSectionData<any>(
    "terms-and-conditions",
  );

  if (loading) {
    return <Loader />;
  }

  const {
    title,
    badge,
    subtitle,
    lastUpdated,
    effectiveDate,
    contactEmail,
    contactPhone,
    content,
    heroBg,
  } = cmsData || {};

  return (
    <>
      <SEO
        pageSlug="terms-and-conditions"
        title={title ? `${title} | Kumar Power Solutions` : undefined}
        description={subtitle}
        canonical="https://www.kumarpower.com/terms-and-conditions"
      />
      <Header />

      <main className="bg-gray-50 min-h-screen pb-24">
        {/* Kumar Power Standard Hero Banner */}
        <div className="relative bg-black text-white min-h-[240px] md:h-[320px] flex items-center justify-center overflow-hidden">
          {heroBg && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${heroBg})`,
                filter: "brightness(0.45)",
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

          <div className="relative max-w-7xl mx-auto px-4 py-12 flex flex-col items-center justify-center text-center z-10">
            {badge && (
              <span className="text-[#F5B544] font-bold text-xs sm:text-sm tracking-wider uppercase mb-3">
                {badge}
              </span>
            )}

            <HeadingTag className="text-2xl md:text-5xl font-bold leading-tight text-white">
              {title}
            </HeadingTag>

            {subtitle && (
              <p className="text-sm sm:text-base md:text-lg mt-3 max-w-3xl text-gray-300 mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Content & Sidebar Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-24">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content Area */}
            <div className="flex-1 lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-6 sm:p-12 shadow-sm border border-gray-100"
              >
                {/* Document Metadata Bar */}
                <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-gray-100 gap-4">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                    <span className="font-bold uppercase tracking-wider text-gray-400">
                      Commercial & Service Agreement
                    </span>
                    {lastUpdated && (
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#2D6FBA]" />
                        Last Updated:{" "}
                        <strong className="text-gray-800 font-semibold">
                          {lastUpdated}
                        </strong>
                      </span>
                    )}
                    {effectiveDate && (
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        Effective:{" "}
                        <strong className="text-gray-800 font-semibold">
                          {effectiveDate}
                        </strong>
                      </span>
                    )}
                  </div>
                </div>

                {/* Rich Content Renderer */}
                {content ? (
                  <div
                    className="prose prose-lg prose-blue max-w-none text-gray-800
                      prose-headings:font-bold prose-headings:text-gray-900
                      prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-100
                      prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
                      prose-p:text-base prose-p:leading-relaxed prose-p:text-gray-700
                      prose-li:text-base prose-li:text-gray-700
                      prose-a:text-[#2D6FBA] hover:prose-a:underline
                      prose-blockquote:border-l-4 prose-blockquote:border-[#2D6FBA] prose-blockquote:bg-blue-50/50 prose-blockquote:p-4 prose-blockquote:rounded-r-2xl prose-blockquote:text-sm prose-blockquote:not-italic"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                ) : null}
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
              {/* Quick Navigation Card */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Policies & Compliance
                </h3>
                <div className="flex flex-col gap-3">
                  <Link
                    to="/terms-and-conditions"
                    className="flex items-center justify-between p-3 rounded-2xl bg-blue-50 text-[#2D6FBA] text-sm font-semibold transition-colors"
                  >
                    <span>Terms & Conditions</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/privacy-policy"
                    className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-semibold transition-colors"
                  >
                    <span>Privacy Policy</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                  <Link
                    to="/about/Certifications"
                    className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-semibold transition-colors"
                  >
                    <span>Certifications & Awards</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                </div>
              </div>

              {/* Blue Contact Helpdesk Card */}
              <div className="bg-[#2D6FBA] rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-3 leading-tight">
                  Commercial Inquiries
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  Need assistance with equipment purchase orders, project
                  tenders, or Annual Maintenance Contract SLAs?
                </p>

                <div className="space-y-3 mb-6 text-sm">
                  {contactEmail && (
                    <a
                      href={`mailto:${contactEmail}`}
                      className="flex items-center gap-2.5 text-white/90 hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4 shrink-0" />
                      <span className="truncate">{contactEmail}</span>
                    </a>
                  )}
                  {contactPhone && (
                    <a
                      href={`tel:${contactPhone.replace(/[^+\d]/g, "")}`}
                      className="flex items-center gap-2.5 text-white/90 hover:text-white transition-colors"
                    >
                      <Phone className="w-4 h-4 shrink-0" />
                      <span>{contactPhone}</span>
                    </a>
                  )}
                </div>

                <Link to="/contact">
                  <button className="w-full bg-white text-gray-900 font-bold py-3.5 px-6 rounded-xl hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
                    Contact Commercial Team
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
