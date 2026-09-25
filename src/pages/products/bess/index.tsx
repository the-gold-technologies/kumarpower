import React, { useState } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import { useSectionData, usePageHeadingTag } from "@/store/useCMSStore";

import { BESSHero } from "./components/BESSHero";
import { BESSSection } from "./components/BESSSection";
import { BESSProduct } from "./components/BESSCard";
import {
  WhyChooseSection,
  WhyChooseCardData,
} from "./components/WhyChooseSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { NeedHelpSection } from "./components/NeedHelpSection";
import { SpecsModal } from "./components/SpecsModal";
import { QuoteModal } from "./components/QuoteModal";

const BESS: React.FC = () => {
  const HeadingTag = usePageHeadingTag("bess");
  const { data: rawCMSData } = useSectionData<any>("bess");
  const cmsData = rawCMSData || {};

  // Hero Section from CMS
  const heroHeadingPart1 = cmsData.heroHeadingPart1 || "";
  const heroHeadingPart2 = cmsData.heroHeadingPart2 || "";
  const heroSub = cmsData.heroSub || "";
  const heroBg = cmsData.heroBg || "";

  // Section Heading from CMS
  const sectionTitle = cmsData.sectionTitle || "";
  const sectionDesc = cmsData.sectionDesc || "";

  // Products Data strictly from CMS
  const bessProducts: BESSProduct[] = Array.isArray(cmsData.products)
    ? cmsData.products
    : [];

  // Modals state
  const [showSpecsModal, setShowSpecsModal] = useState(false);
  const [selectedProductForSpecs, setSelectedProductForSpecs] =
    useState<BESSProduct | null>(null);

  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<BESSProduct | null>(null);

  const openSpecsModal = (product: BESSProduct) => {
    setSelectedProductForSpecs(product);
    setShowSpecsModal(true);
  };

  const openQuoteModal = (product: BESSProduct) => {
    setQuoteProduct(product);
    setShowQuoteModal(true);
  };

  // Why Choose Cards configuration from CMS
  const whyChooseTitle = cmsData.whyChooseTitle || cmsData.whyChooseTitle || "";

  const whyChooseCards: WhyChooseCardData[] = [
    {
      title: cmsData.whyChooseCard1Title || cmsData.whyChooseCard1Title || "",
      desc: cmsData.whyChooseCard1Desc || cmsData.whyChooseCard1Desc || "",
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
        </svg>
      ),
    },
    {
      title: cmsData.whyChooseCard2Title || cmsData.whyChooseCard2Title || "",
      desc: cmsData.whyChooseCard2Desc || cmsData.whyChooseCard2Desc || "",
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13z" />
        </svg>
      ),
    },
    {
      title: cmsData.whyChooseCard3Title || cmsData.whyChooseCard3Title || "",
      desc: cmsData.whyChooseCard3Desc || cmsData.whyChooseCard3Desc || "",
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
        </svg>
      ),
    },
    {
      title: cmsData.whyChooseCard4Title || cmsData.whyChooseCard4Title || "",
      desc: cmsData.whyChooseCard4Desc || cmsData.whyChooseCard4Desc || "",
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
        </svg>
      ),
    },
    {
      title: cmsData.whyChooseCard5Title || cmsData.whyChooseCard5Title || "",
      desc: cmsData.whyChooseCard5Desc || cmsData.whyChooseCard5Desc || "",
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
        </svg>
      ),
    },
    {
      title: cmsData.whyChooseCard6Title || cmsData.whyChooseCard6Title || "",
      desc: cmsData.whyChooseCard6Desc || cmsData.whyChooseCard6Desc || "",
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <SEO
        pageSlug="bess"
        title="Kumar Power - Battery Energy Storage Systems (BESS)"
        description="Explore Kumar Power Battery Energy Storage Systems (BESS) from 5 kW to 1 MW+ containerized solutions. Tier-1 LFP chemistry for commercial and industrial clean energy backup."
        keywords="BESS, Battery Energy Storage System, Lithium Iron Phosphate, LFP, Kumar Power, Solar BESS, Commercial Energy Storage"
        canonical="https://www.kumarpower.com/products/bess"
      />

      <Header />

      <main className="bg-black min-h-screen">
        {/* 1. Hero Banner */}
        <BESSHero
          HeadingTag={HeadingTag}
          heroHeadingPart1={heroHeadingPart1}
          heroHeadingPart2={heroHeadingPart2}
          heroSub={heroSub}
          heroBg={heroBg}
        />

        {/* 2. Product Selection Area */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8">
          <BESSSection
            id="bess-range"
            title={sectionTitle}
            description={sectionDesc}
            products={bessProducts}
            onViewDetails={openSpecsModal}
            onGetQuote={openQuoteModal}
          />
        </div>

        {/* 3. Why Choose BESS Section */}
        <WhyChooseSection title={whyChooseTitle} cards={whyChooseCards} />

        {/* 4. Certifications Section */}
        <CertificationsSection
          title={cmsData.certTitle}
          cert1Title={cmsData.cert1Title}
          cert2Title={cmsData.cert2Title}
          cert3Title={cmsData.cert3Title}
        />

        {/* 5. Need Help Section */}
        <NeedHelpSection
          title={cmsData.helpTitle}
          subtitle={cmsData.helpSub}
          btnText={cmsData.helpBtnText}
        />
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

export default BESS;
