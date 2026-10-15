import React, { useState } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import SEOJsonLD from "@/components/SEOJsonLD";
import { useSectionData, usePageHeadingTag } from "@/store/useCMSStore";
import { LinkText } from "@/components/ui/LinkText";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { downloadPdf } from "@/lib/utils";

import { SpecsModal } from "./products/generators/components/SpecsModal";
import { QuoteModal } from "./products/generators/components/QuoteModal";

// Renders **bold** segments and keeps LinkText behavior for the rest
const RichText: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-bold text-gray-900">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <LinkText
            key={i}
            text={part}
            linkClassName="text-[#2D6FBA] hover:underline font-bold"
          />
        ),
      )}
    </>
  );
};

const Products = () => {
  const pageSlug = "products";
  const HeadingTag = usePageHeadingTag(pageSlug);
  const { data: rawCMSData } = useSectionData<any>(pageSlug);
  const cmsData = rawCMSData || {};

  const [showSpecsModal, setShowSpecsModal] = useState(false);
  const [selectedProductForSpecs, setSelectedProductForSpecs] =
    useState<any>(null);

  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<any>(null);

  const openSpecsModal = (product: any) => {
    setSelectedProductForSpecs(product);
    setShowSpecsModal(true);
  };

  const openQuoteModal = (product: any) => {
    setQuoteProduct(product);
    setShowQuoteModal(true);
  };

  const categories: any[] = Array.isArray(cmsData.categories)
    ? cmsData.categories
    : Array.isArray(cmsData.products)
      ? cmsData.products
      : [];

  const whyChooseCards = [
    {
      title: cmsData.whyChooseCard1Title,
      desc: cmsData.whyChooseCard1Desc,
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
      title: cmsData.whyChooseCard2Title,
      desc: cmsData.whyChooseCard2Desc,
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
      title: cmsData.whyChooseCard3Title,
      desc: cmsData.whyChooseCard3Desc,
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
      title: cmsData.whyChooseCard4Title,
      desc: cmsData.whyChooseCard4Desc,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
          <path
            fillRule="evenodd"
            d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 14 8a5.996 5.996 0 0 1-.89 3.164.5.5 0 1 1-.856-.516A4.996 4.996 0 0 0 13 8a5 5 0 0 0-5-5z"
          />
        </svg>
      ),
    },
    {
      title: cmsData.whyChooseCard5Title,
      desc: cmsData.whyChooseCard5Desc,
      icon: (
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
      title: cmsData.whyChooseCard6Title,
      desc: cmsData.whyChooseCard6Desc,
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
  ].filter((c) => Boolean(c.title));

  const hasWhyChooseParas = Boolean(
    cmsData.whyChoosePara1 || cmsData.whyChoosePara2,
  );

  const certifications = [
    cmsData.cert1Title,
    cmsData.cert2Title,
    cmsData.cert3Title,
  ].filter(Boolean);

  return (
    <>
      <Header />
      <SEO pageSlug={pageSlug} />
      <SEOJsonLD />

      <main className="bg-black min-h-screen">
        {/* Hero Section */}
        {cmsData.heroBg && (
          <div className="relative bg-black text-white h-[260px] md:h-[400px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${cmsData.heroBg})`,
                filter: "brightness(0.5)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

            <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
              <HeadingTag className="text-2xl md:text-5xl font-bold">
                {cmsData.heroHeadingPart1}{" "}
                <span className="text-[#2D6FBA]">
                  {cmsData.heroHeadingPart2}
                </span>
              </HeadingTag>
              {cmsData.heroSub && (
                <p className="text-sm sm:text-base md:text-lg mt-2 max-w-2xl">
                  <LinkText
                    text={cmsData.heroSub}
                    linkClassName="text-[#2D6FBA] hover:underline font-bold"
                  />
                </p>
              )}

              {(cmsData.btn1Text || cmsData.btn2Text) && (
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  {cmsData.btn1Text && (
                    <Button
                      size="lg"
                      className="bg-[#2D6FBA] hover:bg-[#225488] text-white"
                      asChild
                    >
                      <Link to={cmsData.btn1Url}>{cmsData.btn1Text}</Link>
                    </Button>
                  )}
                  {cmsData.btn2Text && (
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() =>
                        downloadPdf(cmsData.btn2Url, `${cmsData.btn2Text}.pdf`)
                      }
                      className="bg-transparent border-white text-white hover:bg-white/10"
                    >
                      {cmsData.btn2Text}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Sticky Actions Bar */}
        {(cmsData.stickyTextPart1 ||
          cmsData.downloadBtn1Label ||
          cmsData.downloadBtn2Label) && (
          <div className="bg-[#2D6FBA]/10 border-y border-[#2D6FBA]/30 py-3 sticky top-16 z-20 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-3 text-sm">
              <span className="text-white font-medium">
                {cmsData.stickyTextPart1}{" "}
                <span className="text-[#2D6FBA] font-bold">
                  {cmsData.stickyTextPart2}
                </span>
              </span>

              <div className="flex items-center gap-2">
                {cmsData.downloadBtn1Label && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      downloadPdf(
                        cmsData.downloadBtn1Url,
                        `${cmsData.downloadBtn1Label}.pdf`,
                      )
                    }
                    className="text-xs bg-white/10 text-white hover:bg-[#2D6FBA]"
                  >
                    {cmsData.downloadBtn1Label}
                  </Button>
                )}
                {cmsData.downloadBtn2Label && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      downloadPdf(
                        cmsData.downloadBtn2Url,
                        `${cmsData.downloadBtn2Label}.pdf`,
                      )
                    }
                    className="text-xs bg-white/10 text-white hover:bg-[#2D6FBA]"
                  >
                    {cmsData.downloadBtn2Label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Product Fleet / Categories */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {cmsData.sectionTitle && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white">
                {cmsData.sectionTitle}
              </h2>
              {cmsData.sectionDesc && (
                <p className="text-gray-400 mt-1 text-sm">
                  <LinkText
                    text={cmsData.sectionDesc}
                    linkClassName="text-[#2D6FBA] hover:underline font-bold"
                  />
                </p>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat: any, idx: number) => (
              <Card
                key={cat.id || idx}
                className="overflow-hidden border border-gray-700 rounded-lg bg-gray-800 flex flex-col justify-between"
              >
                {cat.image && (
                  <div className="aspect-w-16 aspect-h-9 bg-white h-48 flex items-center justify-center p-4">
                    <img
                      src={cat.image}
                      alt={cat.name || cat.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                )}

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-white">
                      {cat.name || cat.title}
                    </h3>
                    {cat.description && (
                      <p className="text-xs text-gray-300 mt-2 line-clamp-3">
                        {cat.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600"
                      onClick={() => openSpecsModal(cat)}
                    >
                      View Specs
                    </Button>
                    <Button
                      size="sm"
                      className="text-xs bg-[#2D6FBA] hover:bg-[#225488] text-white"
                      onClick={() => openQuoteModal(cat)}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        {(whyChooseCards.length > 0 || hasWhyChooseParas) && (
          <section className="bg-[#E5E7EB] text-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4">
              {cmsData.whyChooseTitle && (
                <h2 className="text-2xl font-bold text-center mb-8">
                  {cmsData.whyChooseTitle}
                </h2>
              )}

              {/* Two intro paragraphs */}
              {hasWhyChooseParas && (
                <div className="mb-8 space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
                  {cmsData.whyChoosePara1 && (
                    <p>
                      <RichText text={cmsData.whyChoosePara1} />
                    </p>
                  )}
                  {cmsData.whyChoosePara2 && (
                    <p>
                      <RichText text={cmsData.whyChoosePara2} />
                    </p>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyChooseCards.map((card, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-md shadow-sm">
                    <div className="mb-4 text-[#2D6FBA]">{card.icon}</div>
                    <h3 className="text-base font-semibold mb-1">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      <LinkText
                        text={card.desc}
                        linkClassName="text-[#2D6FBA] hover:underline font-bold"
                      />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certifications Section */}
        {certifications.length > 0 && (
          <section className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
              {cmsData.certTitle && (
                <h2 className="text-2xl font-bold text-center mb-8">
                  {cmsData.certTitle}
                </h2>
              )}
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-md bg-gray-800 text-[#2D6FBA] font-bold text-xl">
                      ✓
                    </div>
                    <p className="font-medium text-sm text-gray-300">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Need Help Section */}
        {cmsData.helpTitle && (
          <section className="py-12 bg-[#AAAAAA]">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                {cmsData.helpTitle}
              </h2>
              {cmsData.helpSub && (
                <p className="text-sm text-black mb-6">
                  <LinkText
                    text={cmsData.helpSub}
                    linkClassName="text-[#2D6FBA] hover:underline font-bold"
                  />
                </p>
              )}
              {cmsData.helpBtnText && (
                <Button
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                  variant="default"
                  size="sm"
                  className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300"
                >
                  {cmsData.helpBtnText}
                </Button>
              )}
            </div>
          </section>
        )}
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

export default Products;
