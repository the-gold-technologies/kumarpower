import React, { useState } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import { useSectionData, usePageHeadingTag } from "@/store/useCMSStore";

import { SolarHero } from "./components/SolarHero";
import { SolarSection } from "./components/SolarSection";
import { SolarProduct } from "./components/SolarCard";
import {
  WhyChooseSection,
  WhyChooseCardData,
} from "./components/WhyChooseSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { NeedHelpSection } from "./components/NeedHelpSection";
import { SpecsModal } from "./components/SpecsModal";
import { QuoteModal } from "./components/QuoteModal";

const Solar: React.FC = () => {
  const HeadingTag = usePageHeadingTag("solar");
  const { data: rawCMSData } = useSectionData<any>("solar");
  const cmsData = rawCMSData || {};
  const { data: productsRawCMSData } = useSectionData<any>("products");
  const productsCMSData = productsRawCMSData || {};

  // Hero Section from CMS
  const heroHeadingPart1 = cmsData.heroHeadingPart1 || "";
  const heroHeadingPart2 = cmsData.heroHeadingPart2 || "";
  const heroSub = cmsData.heroSub || "";
  const heroBg = cmsData.heroBg || "";

  // Section Heading from CMS
  const sectionTitle = cmsData.sectionTitle || "";
  const sectionDesc = cmsData.sectionDesc || "";

  // Products Data strictly from CMS
  const solarProducts: SolarProduct[] = Array.isArray(cmsData.products)
    ? cmsData.products
    : [];

  // Modals state
  const [showSpecsModal, setShowSpecsModal] = useState(false);
  const [selectedProductForSpecs, setSelectedProductForSpecs] =
    useState<SolarProduct | null>(null);

  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<SolarProduct | null>(null);

  const openSpecsModal = (product: SolarProduct) => {
    setSelectedProductForSpecs(product);
    setShowSpecsModal(true);
  };

  const openQuoteModal = (product: SolarProduct) => {
    setQuoteProduct(product);
    setShowQuoteModal(true);
  };

  // Why Choose Cards configuration from CMS
  const whyChooseTitle =
    cmsData.whyChooseTitle ||
    productsCMSData.whyChooseTitle ||
    "";

  const whyChooseCards: WhyChooseCardData[] = [
    {
      title:
        cmsData.whyChooseCard1Title ||
        productsCMSData.whyChooseCard1Title ||
        "",
      desc:
        cmsData.whyChooseCard1Desc ||
        productsCMSData.whyChooseCard1Desc ||
        "",
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8z" />
        </svg>
      ),
    },
    {
      title:
        cmsData.whyChooseCard2Title ||
        productsCMSData.whyChooseCard2Title ||
        "",
      desc:
        cmsData.whyChooseCard2Desc ||
        productsCMSData.whyChooseCard2Desc ||
        "",
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.089z" />
        </svg>
      ),
    },
    {
      title:
        cmsData.whyChooseCard3Title ||
        productsCMSData.whyChooseCard3Title ||
        "",
      desc:
        cmsData.whyChooseCard3Desc ||
        productsCMSData.whyChooseCard3Desc ||
        "",
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M2 6h5v4H2V6zm6 0h6v4H8V6zm7 1V5a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" />
        </svg>
      ),
    },
    {
      title:
        cmsData.whyChooseCard4Title ||
        productsCMSData.whyChooseCard4Title ||
        "",
      desc:
        cmsData.whyChooseCard4Desc ||
        productsCMSData.whyChooseCard4Desc ||
        "",
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.464 9.99a11.761 11.761 0 0 0 4.015 3.197.5.5 0 0 0 .76 0c1.4-1.002 2.766-2.19 4.015-3.197 1.677-2.195 3.06-5.513 2.464-9.99a1.54 1.54 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z" />
        </svg>
      ),
    },
    {
      title:
        cmsData.whyChooseCard5Title ||
        productsCMSData.whyChooseCard5Title ||
        "",
      desc:
        cmsData.whyChooseCard5Desc ||
        productsCMSData.whyChooseCard5Desc ||
        "",
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.707l-4.146 4.147a.5.5 0 0 1-.708 0L7 6.707l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0L9.5 7.793 13.293 4H10.5a.5.5 0 0 1-.5-.5z" />
        </svg>
      ),
    },
    {
      title:
        cmsData.whyChooseCard6Title ||
        productsCMSData.whyChooseCard6Title ||
        "",
      desc:
        cmsData.whyChooseCard6Desc ||
        productsCMSData.whyChooseCard6Desc ||
        "",
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Kumar Power - Solar Panels & Rooftop Solar Solutions"
        description="High-efficiency Tier-1 Mono PERC & TOPCon Bifacial solar panels from Kumar Power. Complete turnkey commercial & industrial rooftop solar systems in Delhi NCR & North India."
        keywords="Solar Panels, Mono PERC Solar Panel, TOPCon Bifacial Solar, Rooftop Solar, Commercial Solar, Solar DG Synchronization, Kumar Power"
        canonical="https://www.kumarpower.com/products/solar"
      />

      <Header />

      <main className="bg-black min-h-screen">
        {/* 1. Hero Banner */}
        <SolarHero
          HeadingTag={HeadingTag}
          heroHeadingPart1={heroHeadingPart1}
          heroHeadingPart2={heroHeadingPart2}
          heroSub={heroSub}
          heroBg={heroBg}
        />

        {/* 2. Product Selection Area */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8">
          <SolarSection
            id="solar-range"
            title={sectionTitle}
            description={sectionDesc}
            products={solarProducts}
            onViewDetails={openSpecsModal}
            onGetQuote={openQuoteModal}
          />
        </div>

        {/* 3. Why Choose Solar Section */}
        <WhyChooseSection title={whyChooseTitle} cards={whyChooseCards} />

        {/* 4. Certifications Section */}
        <CertificationsSection
          title="Quality Certifications & Safety Standards"
          cert1Title="IEC 61215 & IEC 61730 Certified"
          cert2Title="BIS Approved & ALMM Compliant"
          cert3Title="ISO 9001:2015 Quality Assured"
        />

        {/* 5. Need Help Section */}
        <NeedHelpSection />
      </main>

      {/* 6. Technical Specifications Modal */}
      <SpecsModal
        open={showSpecsModal}
        onOpenChange={setShowSpecsModal}
        product={selectedProductForSpecs}
        onRequestQuote={openQuoteModal}
      />

      {/* 7. Quote Modal */}
      <QuoteModal
        open={showQuoteModal}
        onOpenChange={setShowQuoteModal}
        product={quoteProduct}
      />

      <Footer />
    </>
  );
};

export default Solar;
