import React, { useState } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import { useSectionData, usePageHeadingTag } from "@/store/useCMSStore";

import { GeneratorHero } from "./generators/components/GeneratorHero";
import { GeneratorSection } from "./generators/components/GeneratorSection";
import { WhyChooseSection, WhyChooseCardData } from "./generators/components/WhyChooseSection";
import { CertificationsSection } from "./generators/components/CertificationsSection";
import { NeedHelpSection } from "./generators/components/NeedHelpSection";
import { SpecsModal } from "./generators/components/SpecsModal";
import { QuoteModal } from "./generators/components/QuoteModal";

const Optiprime = () => {
  const pageSlug = "optiprime";
  const HeadingTag = usePageHeadingTag(pageSlug);
  const { data: rawCMSData } = useSectionData<any>(pageSlug);
  const cmsData = rawCMSData || {};

  const [showSpecsModal, setShowSpecsModal] = useState(false);
  const [selectedProductForSpecs, setSelectedProductForSpecs] = useState<any>(null);

  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<any>(null);

  const openSpecsModal = (product: any) => {
    setSelectedProductForSpecs({
      ...product,
      category: product.category,
    });
    setShowSpecsModal(true);
  };

  const openQuoteModal = (product: any) => {
    setQuoteProduct(product);
    setShowQuoteModal(true);
  };

  const products: any[] = Array.isArray(cmsData.gensets) ? cmsData.gensets : [];

  const whyChooseCards: WhyChooseCardData[] = [
    {
      title: cmsData.whyChooseCard1Title,
      desc: cmsData.whyChooseCard1Desc,
      iconSvg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
        </svg>
      ),
    },
    {
      title: cmsData.whyChooseCard2Title,
      desc: cmsData.whyChooseCard2Desc,
      iconSvg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13z" />
        </svg>
      ),
    },
    {
      title: cmsData.whyChooseCard3Title,
      desc: cmsData.whyChooseCard3Desc,
      iconSvg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
        </svg>
      ),
    },
    {
      title: cmsData.whyChooseCard4Title,
      desc: cmsData.whyChooseCard4Desc,
      iconSvg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
          <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 14 8a5.996 5.996 0 0 1-.89 3.164.5.5 0 1 1-.856-.516A4.996 4.996 0 0 0 13 8a5 5 0 0 0-5-5z" />
        </svg>
      ),
    },
    {
      title: cmsData.whyChooseCard5Title,
      desc: cmsData.whyChooseCard5Desc,
      iconSvg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
        </svg>
      ),
    },
    {
      title: cmsData.whyChooseCard6Title,
      desc: cmsData.whyChooseCard6Desc,
      iconSvg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
        </svg>
      ),
    },
  ];

  const certifications: string[] = [
    cmsData.cert1Title,
    cmsData.cert2Title,
    cmsData.cert3Title,
  ].filter(Boolean);

  return (
    <>
      <Header />
      <SEO pageSlug={pageSlug} />

      <main className="bg-black min-h-screen">
        <GeneratorHero
          HeadingTag={HeadingTag}
          heroHeadingPart1={cmsData.heroHeadingPart1}
          heroHeadingPart2={cmsData.heroHeadingPart2}
          heroSub={cmsData.heroSub}
          heroBg={cmsData.heroBg}
        />

        <div className="max-w-7xl mx-auto px-4 pb-20 space-y-16 mt-8">
          <GeneratorSection
            id="optiprime-generators"
            title={cmsData.sectionTitle}
            description={cmsData.sectionDesc}
            products={products}
            onViewDetails={openSpecsModal}
            onGetQuote={openQuoteModal}
          />
        </div>

        <WhyChooseSection
          title={cmsData.whyChooseTitle}
          cards={whyChooseCards}
        />

        <CertificationsSection
          title={cmsData.certTitle}
          certifications={certifications}
        />

        <NeedHelpSection
          title={cmsData.helpTitle}
          subtitle={cmsData.helpSub}
          buttonText={cmsData.helpBtnText}
        />
      </main>

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

export default Optiprime;
