import { LinkText } from "@/components/ui/LinkText";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import SEO from "@/components/SEO";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSectionData, usePageHeadingTag } from "@/store/useCMSStore";

const Certifications = () => {
  const HeadingTag = usePageHeadingTag("certifications");
  const { data: rawCMSData } = useSectionData<any>("certifications");
  const cmsData = rawCMSData || {};

  const heroTitlePart1 = cmsData.heroTitlePart1 || "";
  const heroTitlePart2 = cmsData.heroTitlePart2 || "";
  const sectionSub = cmsData.heroSub || cmsData.sectionSub || "";

  const whyTitlePart1 = cmsData.whyTitlePart1 || "";
  const whyTitlePart2 = cmsData.whyTitlePart2 || "";

  const whyCard1Title = cmsData.whyCard1Title || "";
  const whyCard1Desc = cmsData.whyCard1Desc || "";
  const whyCard2Title = cmsData.whyCard2Title || "";
  const whyCard2Desc = cmsData.whyCard2Desc || "";
  const whyCard3Title = cmsData.whyCard3Title || "";
  const whyCard3Desc = cmsData.whyCard3Desc || "";

  const commitTitlePart1 = cmsData.commitTitlePart1 || "";
  const commitTitlePart2 = cmsData.commitTitlePart2 || "";
  const commitText = cmsData.commitText || "";
  const commitBtn1Text = cmsData.btn1Label || "";
  const commitBtn1Link = cmsData.btn1Url || "";
  const commitBtn2Text = cmsData.btn2Label || "";
  const commitBtn2Link = cmsData.btn2Url || "";
  const certificatesList =
    Array.isArray(cmsData.certifications) && cmsData.certifications.length > 0
      ? cmsData.certifications
      : Array.isArray(cmsData.certificates) && cmsData.certificates.length > 0
        ? cmsData.certificates
        : [];

  // For certificate carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const certificateSliderRef = useRef(null);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Group certificates into slides of 3 certificates each
  const certificatesPerSlide = 3;
  const certificateSlides = [];
  for (let i = 0; i < certificatesList.length; i += certificatesPerSlide) {
    certificateSlides.push(certificatesList.slice(i, i + certificatesPerSlide));
  }

  // Handle certificate carousel autoplay
  useEffect(() => {
    let interval: any;
    if (isAutoplay && certificateSlides.length > 0) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % certificateSlides.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, certificateSlides.length]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />

        <SEO
          pageSlug="certifications"
          title="Kumar Power – Our Certifications & Quality Standards"
          description="Explore certifications that make Kumar Power a trusted name in power solutions industry. Our compliance ensures safety, reliability, and professional service."
          canonical="https://www.kumarpower.com/about/certifications"
        />

        {/* Certificate Slider Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-6">
            <HeadingTag className="text-3xl font-bold mb-4 text-center">
              {heroTitlePart1}{" "}
              <span className="text-[#2D6FBA]">{heroTitlePart2}</span>
            </HeadingTag>
            <p className="text-lg text-gray-300 text-center mb-12"><LinkText text={sectionSub} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>

            {certificateSlides.length > 0 && (
              <div className="relative" ref={certificateSliderRef}>
                {/* Main slide display */}
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={activeIndex}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
                      {certificateSlides[activeIndex]?.map(
                        (certificate: any, idx: number) => {
                          const globalIndex =
                            activeIndex * certificatesPerSlide + idx;
                          const imageSrc =
                            (certificate.image && certificate.image.trim()) ||
                            (certificate.imageUrl &&
                              certificate.imageUrl.trim()) ||
                            "";

                          return (
                            <div
                              key={certificate.id || idx}
                              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col"
                            >
                              <div className="h-64 flex items-center justify-center overflow-hidden">
                                <img
                                  src={imageSrc}
                                  alt={certificate.name || certificate.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold mb-2 text-center">
                                  {certificate.name || certificate.title}
                                </h3>
                                {certificate.year && (
                                  <span className="bg-[#22548e] text-[#2D6FBA] text-xs px-3 py-1 rounded-full mx-auto mb-3">
                                    Since {certificate.year}
                                  </span>
                                )}
                                <p className="text-gray-300 text-sm mb-3 line-clamp-3"><LinkText text={certificate.description || certificate.desc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                                {certificate.issuer && (
                                  <p className="text-gray-400 text-xs mt-auto">
                                    Issued by:{" "}
                                    <strong className="text-white">
                                      {certificate.issuer}
                                    </strong>
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        },
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Navigation dots */}
                <div className="flex justify-center mt-10 gap-2">
                  {certificateSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveIndex(index);
                        setIsAutoplay(false);
                        setTimeout(() => setIsAutoplay(true), 10000);
                      }}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeIndex ? "bg-[#2D6FBA]" : "bg-gray-600"
                      }`}
                      aria-label={`View certificates group ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Prev/Next buttons */}
                <button
                  onClick={() => {
                    setActiveIndex(
                      (prev) =>
                        (prev - 1 + certificateSlides.length) %
                        certificateSlides.length,
                    );
                    setIsAutoplay(false);
                    setTimeout(() => setIsAutoplay(true), 10000);
                  }}
                  className="absolute top-1/3 left-0 -translate-y-1/2 -translate-x-4 md:translate-x-0 bg-gray-800 p-2 rounded-full shadow-lg z-10 hover:bg-gray-700 text-white"
                  aria-label="Previous certificate group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    setActiveIndex(
                      (prev) => (prev + 1) % certificateSlides.length,
                    );
                    setIsAutoplay(false);
                    setTimeout(() => setIsAutoplay(true), 10000);
                  }}
                  className="absolute top-1/3 right-0 -translate-y-1/2 translate-x-4 md:translate-x-0 bg-gray-800 p-2 rounded-full shadow-lg z-10 hover:bg-gray-700 text-white"
                  aria-label="Next certificate group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Why Certifications Matter Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-16"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold mb-12 text-center"
            >
              {whyTitlePart1}{" "}
              <span className="text-[#2D6FBA]">{whyTitlePart2}</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  ),
                  title: whyCard1Title,
                  description: whyCard1Desc,
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                      <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>
                  ),
                  title: whyCard2Title,
                  description: whyCard2Desc,
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 8v4"></path>
                      <path d="M12 16h.01"></path>
                    </svg>
                  ),
                  title: whyCard3Title,
                  description: whyCard3Desc,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center"
                >
                  <div
                    className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6"
                    style={{ color: "#2D6FBA" }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600"><LinkText text={item.description} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Our Commitment Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-16 bg-blue-50"
        >
          <div className="max-w-5xl mx-auto px-6">
            <motion.div variants={fadeIn} className="text-center">
              <h2 className="text-3xl font-bold mb-6">
                {commitTitlePart1}{" "}
                <span className="text-[#2D6FBA]">{commitTitlePart2}</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8"><LinkText text={commitText} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              <div className="flex flex-wrap justify-center gap-4">
                {commitBtn1Text && (
                  <button
                    onClick={() => {
                      if (commitBtn1Link) window.location.href = commitBtn1Link;
                    }}
                    className="bg-[#2D6FBA] text-white px-8 py-3 rounded-lg hover:bg-[#22548e] transition-colors font-semibold shadow-lg"
                  >
                    {commitBtn1Text}
                  </button>
                )}
                {commitBtn2Text && (
                  <button
                    onClick={() => {
                      if (commitBtn2Link) window.location.href = commitBtn2Link;
                    }}
                    className="border-2 border-[#2D6FBA] text-[#2D6FBA] px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                  >
                    {commitBtn2Text}
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </motion.section>

        <Footer />
      </div>
    </>
  );
};

export default Certifications;
