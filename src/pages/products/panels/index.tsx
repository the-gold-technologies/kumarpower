import React, { useState } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";
import { useSectionData, usePageHeadingTag } from "@/store/useCMSStore";
import heroDefaultBg from "@/assets/Products/HeropBG.png";

import { PanelHero } from "./components/PanelHero";
import { PanelGrid } from "./components/PanelGrid";
import {
  WhyChooseSection,
  WhyChooseCardItem,
} from "./components/WhyChooseSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { NeedHelpSection } from "./components/NeedHelpSection";
import { SpecsModal } from "./components/SpecsModal";
import { QuoteModal } from "./components/QuoteModal";
import { PanelProduct, PanelsCMSData } from "./types";

const Panels = () => {
  const HeadingTag = usePageHeadingTag("panels");
  const { data: rawCMSData } = useSectionData<PanelsCMSData>("panels");
  const cmsData = rawCMSData || {};

  // Modals state
  const [showSpecsModal, setShowSpecsModal] = useState(false);
  const [selectedProductForSpecs, setSelectedProductForSpecs] =
    useState<PanelProduct | null>(null);

  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<PanelProduct | null>(null);

  const openSpecsModal = (product: PanelProduct) => {
    setSelectedProductForSpecs({
      ...product,
      category: product.category || "electrical",
    });
    setShowSpecsModal(true);
  };

  const openQuoteModal = (product: PanelProduct) => {
    setQuoteProduct(product);
    setShowQuoteModal(true);
  };

  // Products Data from CMS
  const electricalPanels: PanelProduct[] = Array.isArray(cmsData.panels)
    ? cmsData.panels
    : [];

  // Hero Data
  const heroHeadingPart1 = cmsData.heroHeadingPart1 || "Electrical Control";
  const heroHeadingPart2 = cmsData.heroHeadingPart2 || "Panels";
  const heroSub =
    cmsData.heroSub ||
    "High-performance electrical panels engineered for superior safety, reliability, and smooth power distribution.";
  const heroBg = cmsData.heroBg || heroDefaultBg;

  // Products Section Data
  const sectionTitle =
    cmsData.sectionTitle || "Electrical Control Panels Range";
  const sectionDesc =
    cmsData.sectionDesc ||
    "Explore our complete range of high-grade control panels built for rigorous industrial and commercial environments.";

  // Why Choose Cards
  const whyChooseCards: WhyChooseCardItem[] = [
    {
      title: cmsData.whyChooseCard1Title || "Unmatched Reliability",
      desc:
        cmsData.whyChooseCard1Desc ||
        "Engineered with premium switchgear components to ensure continuous power protection and zero downtime.",
      icon: (
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
      title: cmsData.whyChooseCard2Title || "Energy Efficiency",
      desc:
        cmsData.whyChooseCard2Desc ||
        "Optimized electrical routing and heat dissipation designed to minimize thermal and distribution losses.",
      icon: (
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
      title: cmsData.whyChooseCard3Title || "Rapid Response Protection",
      desc:
        cmsData.whyChooseCard3Desc ||
        "High-speed breakers and relays trigger instantly against short-circuit, overcurrent, and phase imbalances.",
      icon: (
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
      title: cmsData.whyChooseCard4Title || "Robust Construction",
      desc:
        cmsData.whyChooseCard4Desc ||
        "Constructed with corrosion-resistant sheet metal enclosures with IP-grade ingress protection.",
      icon: (
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
      title: cmsData.whyChooseCard5Title || "Easy Maintenance",
      desc:
        cmsData.whyChooseCard5Desc ||
        "Modular cubicle design enables effortless servicing, component replacements, and future expansion.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
        </svg>
      ),
    },
    {
      title: cmsData.whyChooseCard6Title || "Smart Control & Metering",
      desc:
        cmsData.whyChooseCard6Desc ||
        "Integrated multi-function digital meters and programmable controllers for real-time power analytics.",
      icon: (
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
      <Header />

      <Helmet>
        <title>Electrical Control Panels Dealer in Delhi | Kumar Power</title>
        <meta
          name="description"
          content="Explore our range of high-quality electrical control panels for power distribution, control, and protection of electrical systems trusted by industries"
        />
        <link
          rel="canonical"
          href="https://www.kumarpower.com/products/panels"
        />
      </Helmet>

      <main className="bg-black min-h-screen">
        {/* Hero Section */}
        <PanelHero
          HeadingTag={HeadingTag}
          headingPart1={heroHeadingPart1}
          headingPart2={heroHeadingPart2}
          sub={heroSub}
          bgImage={heroBg}
        />

        {/* Product Grid */}
        <PanelGrid
          title={sectionTitle}
          description={sectionDesc}
          panels={electricalPanels}
          onViewSpecs={openSpecsModal}
          onGetQuote={openQuoteModal}
        />

        {/* Why Choose Section */}
        <WhyChooseSection
          title={
            cmsData.whyChooseTitle || "Why Choose Kumar Power Control Panels?"
          }
          cards={whyChooseCards}
        />

        {/* Certifications Section */}
        <CertificationsSection
          title={cmsData.certTitle || "Quality Certifications & Compliance"}
          cert1Title={cmsData.cert1Title || "ISO 9001:2015 Certified"}
          cert2Title={cmsData.cert2Title || "CPRI Type Tested"}
          cert3Title={cmsData.cert3Title || "CE Compliant"}
        />

        {/* Need Help Section */}
        <NeedHelpSection
          title={cmsData.helpTitle || "Need Help Choosing the Right Panel?"}
          sub={
            cmsData.helpSub ||
            "Our power engineering specialists can help design and configure the ideal panel board for your facility."
          }
          btnText={cmsData.helpBtnText || "Talk to Power Expert"}
        />
      </main>

      {/* Specifications Modal */}
      <SpecsModal
        open={showSpecsModal}
        onOpenChange={setShowSpecsModal}
        product={selectedProductForSpecs}
      />

      {/* Quote Request Modal */}
      <QuoteModal
        open={showQuoteModal}
        onOpenChange={setShowQuoteModal}
        product={quoteProduct}
      />

      <Footer />
    </>
  );
};

export default Panels;
