import React, { useState } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import { useSectionData, usePageHeadingTag } from "@/store/useCMSStore";
import heroDefaultBg from "@/assets/Products/HeropBG.png";

import { GeneratorHero } from "./components/GeneratorHero";
import { GeneratorFilterBar, FilterCategory } from "./components/GeneratorFilterBar";
import { GeneratorSection } from "./components/GeneratorSection";
import { WhyChooseSection, WhyChooseCardData } from "./components/WhyChooseSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { NeedHelpSection } from "./components/NeedHelpSection";
import { SpecsModal } from "./components/SpecsModal";
import { QuoteModal } from "./components/QuoteModal";

const Generators = () => {
  const HeadingTag = usePageHeadingTag("generators");
  const { data: rawCMSData } = useSectionData<any>("generators");
  const cmsData = rawCMSData || {};

  // Modals state
  const [showSpecsModal, setShowSpecsModal] = useState(false);
  const [selectedProductForSpecs, setSelectedProductForSpecs] = useState<any>(null);

  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<any>(null);

  const openSpecsModal = (product: any) => {
    setSelectedProductForSpecs({
      ...product,
      category: product.category || "diesel",
    });
    setShowSpecsModal(true);
  };

  const openQuoteModal = (product: any) => {
    setQuoteProduct(product);
    setShowQuoteModal(true);
  };

  // Products Data
  const displayedDieselGenerators: any[] = Array.isArray(cmsData.gensets)
    ? cmsData.gensets
    : [];
  const displayedGasGenerators: any[] = Array.isArray(cmsData.gasGensets)
    ? cmsData.gasGensets
    : [];
  const displayedPortableGenerators: any[] = Array.isArray(cmsData.portableGensets)
    ? cmsData.portableGensets
    : [];
  const displayedOptiprimeGenerators: any[] = Array.isArray(cmsData.optiprimeGensets)
    ? cmsData.optiprimeGensets
    : [];

  // Filter Categories for quick navigation
  const filterCategories: FilterCategory[] = [
    {
      id: "diesel-generators",
      label: "Diesel Generators",
      count: displayedDieselGenerators.length,
    },
    {
      id: "gas-generators",
      label: "Gas Generators",
      count: displayedGasGenerators.length,
    },
    {
      id: "portable-generators",
      label: "Portable Generators",
      count: displayedPortableGenerators.length,
    },
    {
      id: "optiprime-generators",
      label: "OptiPrime",
      count: displayedOptiprimeGenerators.length,
    },
  ];

  // Why Choose Cards configuration
  const whyChooseCards: WhyChooseCardData[] = [
    {
      title: cmsData.whyChooseCard1Title || "",
      desc: cmsData.whyChooseCard1Desc || "",
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
      title: cmsData.whyChooseCard2Title || "",
      desc: cmsData.whyChooseCard2Desc || "",
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
      title: cmsData.whyChooseCard3Title || "",
      desc: cmsData.whyChooseCard3Desc || "",
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
      title: cmsData.whyChooseCard4Title || "",
      desc: cmsData.whyChooseCard4Desc || "",
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
          <path d="M10.002 4.646a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.707-.708L11.293 7 10.002 5.707a.5.5 0 0 1 0-.708zm-6.293 0a.5.5 0 0 0-.707 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .707-.708L1.707 7l2.001-1.293a.5.5 0 0 0 0-.708z" />
        </svg>
      ),
    },
    {
      title: cmsData.whyChooseCard5Title || "",
      desc: cmsData.whyChooseCard5Desc || "",
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
      title: cmsData.whyChooseCard6Title || "",
      desc: cmsData.whyChooseCard6Desc || "",
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

  const certifications: string[] = [
    cmsData.cert1Title || "",
    cmsData.cert2Title || "",
    cmsData.cert3Title || "",
  ];

  return (
    <>
      <Header />
      <SEO
        pageSlug="generators"
        title="Kirloskar Generators Distributor | Kumar Power"
        description="Explore Kirloskar-certified generators from Kumar Power, engineered for superior performance, reliability, and full compliance with CPCB norms."
        canonical="https://www.kumarpower.com/products/generators"
      />

      <main className="bg-black min-h-screen">
        {/* Hero Section */}
        <GeneratorHero
          HeadingTag={HeadingTag}
          heroHeadingPart1={cmsData.heroHeadingPart1 || ""}
          heroHeadingPart2={cmsData.heroHeadingPart2 || ""}
          heroSub={cmsData.heroSub}
          heroBg={cmsData.heroBg || heroDefaultBg}
        />

        {/* Generator Product Sections */}
        <div className="max-w-7xl mx-auto px-4 pb-20 space-y-16 mt-8">
          {/* 1. Diesel Generators with integrated compact filter bar */}
          <GeneratorSection
            id="diesel-generators"
            filterSlot={<GeneratorFilterBar categories={filterCategories} />}
            title={cmsData.sectionTitle || "CPCB IV+ Diesel Generators"}
            description={cmsData.sectionDesc}
            products={displayedDieselGenerators}
            onViewDetails={openSpecsModal}
            onGetQuote={openQuoteModal}
          />

          {/* 2. Gas Generators */}
          <GeneratorSection
            id="gas-generators"
            title={cmsData.gasSectionTitle || "Gas Generators"}
            description={cmsData.gasSectionDesc}
            products={displayedGasGenerators}
            onViewDetails={openSpecsModal}
            onGetQuote={openQuoteModal}
          />

          {/* 3. Portable Generators */}
          <GeneratorSection
            id="portable-generators"
            title={cmsData.portableSectionTitle || "Portable Generators"}
            description={cmsData.portableSectionDesc}
            products={displayedPortableGenerators}
            onViewDetails={openSpecsModal}
            onGetQuote={openQuoteModal}
          />

          {/* 4. OptiPrime Generators */}
          <GeneratorSection
            id="optiprime-generators"
            title={cmsData.optiprimeSectionTitle || "OptiPrime Heavy Duty Generators"}
            description={cmsData.optiprimeSectionDesc}
            products={displayedOptiprimeGenerators}
            onViewDetails={openSpecsModal}
            onGetQuote={openQuoteModal}
          />
        </div>

        {/* Why Choose Section */}
        <WhyChooseSection
          title={cmsData.whyChooseTitle || ""}
          cards={whyChooseCards}
        />

        {/* Certifications Section */}
        <CertificationsSection
          title={cmsData.certTitle || ""}
          certifications={certifications}
        />

        {/* Need Help Section */}
        <NeedHelpSection
          title={cmsData.helpTitle || ""}
          subtitle={cmsData.helpSub}
          buttonText={cmsData.helpBtnText}
        />
      </main>

      {/* Modals */}
      <SpecsModal
        open={showSpecsModal}
        onOpenChange={setShowSpecsModal}
        product={selectedProductForSpecs}
      />

      <QuoteModal
        open={showQuoteModal}
        onOpenChange={setShowQuoteModal}
        product={quoteProduct}
      />

      <Footer />
    </>
  );
};

export default Generators;
