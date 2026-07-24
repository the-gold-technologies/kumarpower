import { LinkText } from "@/components/ui/LinkText";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { useState, useEffect } from "react";
import { useSectionData } from "@/store/useCMSStore";
import SEO from "@/components/SEO";

const Testimonials = () => {
  const { data: rawCMSData } = useSectionData<any>("testimonials");
  const cmsData = rawCMSData || {};

  const heroHeadingLine1 = cmsData.heroHeadingLine1 || "";
  const heroHeadingLine2 = cmsData.heroHeadingLine2 || "";
  const heroSubtitle = cmsData.heroSubtitle || "";
  const heroBgImage = cmsData.heroBgImage || "";

  const testimonialsList =
    Array.isArray(cmsData.testimonials) && cmsData.testimonials.length > 0
      ? cmsData.testimonials
      : [];

  const clientLogos =
    Array.isArray(cmsData.clientLogos) && cmsData.clientLogos.length > 0
      ? cmsData.clientLogos
      : [];

  const storiesTitle = cmsData.storiesTitle || cmsData.sectionTitle || "";
  const filterText = cmsData.filterText || "";
  const trustedTitle = cmsData.trustedTitle || "";

  const stat1Num = cmsData.stat1Num || "";
  const stat1Text = cmsData.stat1Text || "";
  const stat2Num = cmsData.stat2Num || "";
  const stat2Text = cmsData.stat2Text || "";
  const stat3Num = cmsData.stat3Num || "";
  const stat3Text = cmsData.stat3Text || "";

  const ctaTitle = cmsData.ctaTitle || "";
  const ctaDesc = cmsData.ctaDesc || "";
  const ctaBtnText = cmsData.ctaBtnText || cmsData.ctaBtnLabel || "";
  const brochureBtnText = cmsData.brochureBtnText || "";
  const whatsappText = cmsData.whatsappText || "";
  const helplineLabel = cmsData.helplineLabel || "";
  const whatsappPhone = cmsData.whatsappPhone || "+919773877796";
  const helplinePhone = cmsData.helplinePhone || "01140191273";
  const brochurePdf = cmsData.brochurePdf || "";
  return (
    <div className="min-h-screen bg-background">
      <style>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        .logos-container {
          overflow: hidden;
          padding: 20px 0;
          white-space: nowrap;
          position: relative;
        }
        
        .logos-slide {
          display: inline-block;
          animation: slide 20s linear infinite;
        }
        
        .logo-item {
          display: inline-flex;
          margin: 0 30px;
        }
      `}</style>

      {/* <SEOJsonLD /> */}
      <SEO
        title="Why Kumar Power? | Customer Feedback & Testimonials"
        description="Discover what customers say about Kumar Power. Real reviews and experience highlighting our service quality, product reliability, and trusted power solutions."
        canonical="https://kumarpower.com/about/Testimonials"
      />
      <Header />

      {/* Success Stories Section - Banner image background header */}
      <section
        className="relative py-16 h-80 bg-cover bg-no-repeat text-white"
        style={{
          backgroundImage: `url(${heroBgImage})`,
          backgroundPosition: "40% 30%",
        }}
      >
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-8">
          <div className="mb-6">
            <div className="border-l-4 border-[#2D6FBA] pl-4">
              <h2 className="text-4xl font-bold leading-tight">
                {heroHeadingLine1}
                <br />
                {heroHeadingLine2}
              </h2>
              <p className="mt-2 text-gray-200"><LinkText text={heroSubtitle} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Stories Section - White background */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-3xl font-semibold">{storiesTitle}</h3>
            <button className="text-sm text-gray-500 flex items-center">
              {filterText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Testimonial Grid - Dynamic CMS Testimonials */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonialsList.map((item: any, idx: number) => (
              <div
                key={item.id || idx}
                className="border rounded-lg overflow-hidden"
              >
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    {item.logo && (
                      <img
                        src={item.logo}
                        alt={item.authorName || "Client Logo"}
                        className="w-16 h-16 object-contain mr-3 rounded"
                      />
                    )}
                    <div>
                      <h4 className="font-semibold text-2xl">
                        {item.authorName}
                      </h4>
                      <p className="text-xs text-gray-600"><LinkText text={item.roleCompany || item.role} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                    </div>
                  </div>
                  <p className="text-base mb-4 leading-relaxed whitespace-pre-line"><LinkText text={item.quote || item.content || item.text} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                  {item.dateText && (
                    <div className="text-xs text-gray-500 mt-2">
                      {item.dateText}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics and Trusted Organizations Section - Dark blue background at bottom */}
      <section className="bg-[#0f1423] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-1">{stat1Num}</h2>
              <p className="text-sm"><LinkText text={stat1Text} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-1">{stat2Num}</h2>
              <p className="text-sm"><LinkText text={stat2Text} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-1">{stat3Num}</h2>
              <p className="text-sm"><LinkText text={stat3Text} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="text-center mb-8">
            <p className="text-2xl mb-6"><LinkText text={trustedTitle} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
            <div className="logos-container">
              <div className="logos-slide">
                {clientLogos
                  .concat(clientLogos)
                  .map((logoItem: any, idx: number) => (
                    <div key={idx} className="logo-item">
                      <img
                        src={logoItem.url || logoItem}
                        alt={logoItem.alt || "Trusted Client"}
                        className="max-h-16 w-auto"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-2">{ctaTitle}</h3>
            <p className="text-sm max-w-2xl mx-auto mb-6"><LinkText text={ctaDesc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className="bg-[#2D6FBA] text-black py-2 px-6 rounded flex items-center"
              >
                {ctaBtnText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <a href={brochurePdf} download>
                <button className="border border-white text-white py-2 px-6 rounded">
                  {brochureBtnText}
                </button>
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex justify-center gap-6 mt-8">
              <a
                href={`https://wa.me/${whatsappPhone.replace(/[^0-9]/g, "")}`}
                className="flex items-center text-sm"
              >
                <div className="bg-[#00FF00] h-8 w-8 rounded-full flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="white"
                    viewBox="0 0 448 512"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </div>
                <span>{whatsappText}</span>
              </a>
              <a
                href={`tel:${helplinePhone}`}
                className="flex items-center text-sm"
              >
                <div className="bg-[#2D6FBA] h-8 w-8 rounded-full flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span>
                  {helplineLabel}: {helplinePhone}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
