import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { useState, useEffect } from "react";
import { useSectionData } from "@/store/useCMSStore";
import test1 from "@/assets/test1.png";
import test2 from "@/assets/test2.png";
import test3 from "@/assets/test3.png";
import test4 from "@/assets/test4.png";

import testimonial from "@/assets/Testimonial/testii.jpeg";
import trust from "@/assets/Clients page/GMR Infra.jpg";
import trust1 from "@/assets/SIS (1).png";
import trust2 from "@/assets/Vistara 1 (1).png";
import trust3 from "@/assets/Clients page/GMR Infra.jpg";
import trust4 from "@/assets/Honeywell 1 (1).png";
import trust5 from "@/assets/Kashyapi (2).png";
import trust6 from "@/assets/Caritas (1).png";
import trust7 from "@/assets/CEC (1).png";
import ace from "@/assets/Clients page/AceConstruction.jpg";
import claroin from "@/assets/Clients page/Clarion.png";
import Comed from "@/assets/Clients page/Comed.png";
import Dps from "@/assets/Clients page/DPS.jpg";
import GEPL from "@/assets/Clients page/GEPL.jpg";
import addidas from "@/assets/Clients page/Adidas.jpg";
import Portfolio from "@/assets/Brochure/Portfolio.pdf";
import SEO from "@/components/SEO";

const Testimonials = () => {
  const { data: rawCMSData } = useSectionData<any>("testimonials");
  const cmsData = rawCMSData || {};

  const heroHeadingLine1 = cmsData.heroHeadingLine1 || "POWERING INDIA'S";
  const heroHeadingLine2 = cmsData.heroHeadingLine2 || "SUCCESS STORIES";
  const heroSubtitle =
    cmsData.heroSubtitle || "Testimonials from industry leaders";
  const heroBgImage = cmsData.heroBgImage || testimonial;

  const defaultTestimonials = [
    {
      id: "test-1",
      authorName: "Khushi Aggarwal",
      roleCompany: "Founder, Platter Me Crazy",
      logo: "https://res.cloudinary.com/dmhabztbf/image/upload/v1761902468/Screenshot_2025-10-31_144115_lybhem.png",
      quote:
        "I, Khushi Aggarwal, Founder of Platter Me Crazy, a brand synonymous with culinary artistry and luxury dining experiences. We curate exquisite charcuterie boards and handcrafted artisanal foods that elevate every occasion into a memorable indulgence. Our signature creations include gourmet flavoured butters, silky-smooth hummus blends, and wholesome baked crisps, each crafted with uncompromising freshness and zero preservatives. Whether for intimate soirées, premium gifting, or grand corporate gatherings, we bring an unmatched blend of flavor, finesse and sophistication to the table.",
    },
    {
      id: "test-2",
      authorName: "Kaustubh Jain",
      roleCompany: "TEAM Construction Chemicals (TEAMCC)",
      logo: "https://res.cloudinary.com/dmhabztbf/image/upload/v1761902466/Screenshot_2025-10-31_144303_wgqqaq.png",
      quote:
        "I am Kaustubh Jain representing the category marble adhesives and coatings. At TEAMCC we specialise in high-performance epoxy adhesives, polyester adhesives, tile adhesives and marble coatings. I have had the pleasure of knowing Mr. Jasjot Singh, and I can confidently say he is a true professional in the generator industry. Representing the trusted Kirloskar brand, Jasjot ensures top-quality products backed by exceptional service. His deep knowledge of power solutions, combined with his commitment to delivering the right generator for every requirement, makes him a go-to expert.",
      dateText: "Kaustubh Jain / BNI Lakshay",
    },
    {
      id: "test-3",
      authorName: "Atul Jewellers",
      roleCompany: "Proprietor, New Delhi",
      logo: "https://res.cloudinary.com/dmhabztbf/image/upload/v1761902462/Screenshot_2025-10-31_144354_iiu1nu.png",
      quote:
        "We at Atul Jewellers are engaged in retail & wholesale of precious gemstones, diamonds & fine jewellery for almost five decades. We are the only jewellery house in Delhi, with in-house state of art gem testing & diamond grading laboratory, and we also provide this facility to almost 500 retailers across Delhi NCR. I wish to record our appreciation and acknowledgement, for R.S. Kumar of Kumar Generator House, who has provided gensets for our new store at Defence Colony. Mr. Kumar and his team is extremely professional in their approach.",
      dateText: "Dated: 28th Dec. 2018",
    },
    {
      id: "test-4",
      authorName: "Brown Gold",
      roleCompany: "Bharat Anand, Director",
      logo: "https://res.cloudinary.com/dmhabztbf/image/upload/v1761902474/Gemini_Generated_Image_1je1r11je1r11je1_ksybnh.png",
      quote:
        "We at Brown Gold are a team of young and dynamic interior designers. We would like to place on record our appreciation for Mr. R. S. Kumar of Kumar Generator House. We had taken their services for our 40 KVA Kirloskar generator & a small genset of 7 KVA. We would like to take this opportunity to thank you for providing excellent advice, excellent products & excellent service.",
      dateText: "Bharat Anand, Director, Brown Gold",
    },
    {
      id: "test-5",
      authorName: "RENT IT BAE",
      roleCompany: "Luxury Fashion Rental Service",
      logo: "https://res.cloudinary.com/dmhabztbf/image/upload/v1761902462/Screenshot_2025-10-31_144806_gklejh.png",
      quote:
        "RENT IT BAE is a luxury fashion rental service offering Ethnic, Western & Accessories from designer labels. We highly appreciate the fast and seamless service provided by your company. The installation of inverters for RENT IT BAE's South Delhi Flagship Store at Greater Kailash seemed a fluid task with your service.",
    },
    {
      id: "test-6",
      authorName: "K.K. Setia",
      roleCompany: "Olympus, Intown Realtors Pvt Ltd",
      logo: "https://res.cloudinary.com/dmhabztbf/image/upload/v1761902462/Screenshot_2025-10-31_145022_ffeb43.png",
      quote:
        "I K.K. Setia, Director of Intown Realtors, have been in commercial Real Estate business for the last 18 years. I recently needed a generator for my Sector 18 office building and reached out to Mr. Manjot Singh Kumar. His team promptly inspected the site, provided a tailored solution, and even assisted with necessary approvals.",
      dateText: "3rd March, 2025",
    },
    {
      id: "test-7",
      authorName: "Shivani Saini",
      roleCompany: "Owner, Anytime Fitness",
      logo: "https://res.cloudinary.com/dmhabztbf/image/upload/v1762064945/Screenshot_2025-11-02_115831_lgqzrn.png",
      quote:
        "During the setting up of Anytime Fitness Sec 29, Gurugram, I got the reference of Mr Jasjot Singh of M/s Kumar Generator House. I write this testimonial to express my deep gratitude to Mr Jasjot Singh for guiding me towards the trusted Kirloskar Brand. The equipment is top notch and customer support has been outstanding.",
      dateText: "26 Sep 25 / SCO Market, Sec 29, Gurugram",
    },
  ];

  const testimonialsList =
    Array.isArray(cmsData.testimonials) && cmsData.testimonials.length > 0
      ? cmsData.testimonials
      : defaultTestimonials;

  const defaultLogos = [
    { url: trust, alt: "Seasons" },
    { url: trust1, alt: "SIS" },
    { url: trust2, alt: "Vistara" },
    { url: trust3, alt: "GMR" },
    { url: trust4, alt: "Honeywell" },
    { url: trust5, alt: "Kashyapi" },
    { url: trust6, alt: "Caritas" },
    { url: trust7, alt: "CEC" },
    { url: addidas, alt: "Adidas" },
    { url: GEPL, alt: "GEPL" },
    { url: Dps, alt: "DPS" },
    { url: Comed, alt: "Comed" },
    { url: ace, alt: "Ace Construction" },
    { url: claroin, alt: "Clarion" },
  ];
  const clientLogos =
    Array.isArray(cmsData.clientLogos) && cmsData.clientLogos.length > 0
      ? cmsData.clientLogos
      : defaultLogos;

  const storiesTitle =
    cmsData.storiesTitle || cmsData.sectionTitle || "Client Success Stories";
  const filterText = cmsData.filterText || "Filter by industry...";
  const trustedTitle =
    cmsData.trustedTitle || "Trusted by India's Leading Organizations";

  const stat1Num = cmsData.stat1Num || "100+";
  const stat1Text = cmsData.stat1Text || "Video Testimonials";
  const stat2Num = cmsData.stat2Num || "25+";
  const stat2Text = cmsData.stat2Text || "Industries Served";
  const stat3Num = cmsData.stat3Num || "10000+";
  const stat3Text = cmsData.stat3Text || "Installations Nationwide";

  const ctaTitle =
    cmsData.ctaTitle || "Ready to join India's most reliable power network?";
  const ctaDesc =
    cmsData.ctaDesc ||
    "From hospitals to data centers, from factories to airports — Kumar power delivers uninterrupted power solutions tailored to your needs.";
  const ctaBtnText =
    cmsData.ctaBtnText || cmsData.ctaBtnLabel || "Request Consultation";
  const brochureBtnText = cmsData.brochureBtnText || "Download Brochure";
  const whatsappText = cmsData.whatsappText || "WhatsApp Support";
  const helplineLabel = cmsData.helplineLabel || "Helpline";
  const whatsappPhone = cmsData.whatsappPhone || "+919773877796";
  const helplinePhone = cmsData.helplinePhone || "01140191273";
  const brochurePdf = cmsData.brochurePdf || Portfolio;
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
              <p className="mt-2 text-gray-200">{heroSubtitle}</p>
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
                      <p className="text-xs text-gray-600">
                        {item.roleCompany || item.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-base mb-4 leading-relaxed whitespace-pre-line">
                    {item.quote || item.content || item.text}
                  </p>
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
              <p className="text-sm">{stat1Text}</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-1">{stat2Num}</h2>
              <p className="text-sm">{stat2Text}</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-1">{stat3Num}</h2>
              <p className="text-sm">{stat3Text}</p>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="text-center mb-8">
            <p className="text-2xl mb-6">{trustedTitle}</p>
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
            <p className="text-sm max-w-2xl mx-auto mb-6">{ctaDesc}</p>

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
