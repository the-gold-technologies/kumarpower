import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { LinkText } from "@/components/ui/LinkText";
import { useSectionData, usePageHeadingTag } from "@/store/useCMSStore";

const InstallationService = () => {
  const HeadingTag = usePageHeadingTag("installation");
  const { data: cmsData = {} } = useSectionData<any>(
    "installation",
    "installation"
  );

  const heroBadge = cmsData.heroBadge || "";
  const heroHeading = cmsData.heroHeading || "";
  const heroSub = cmsData.heroSub || "";
  const heroBg = cmsData.heroBg || "";
  const heroCtaLabel = cmsData.heroCtaLabel || "";
  const heroCtaLink = cmsData.heroCtaLink || "";

  const introTagline = cmsData.introTagline || "";
  const introHeading = cmsData.introHeading || "";
  const introDesc = cmsData.introDesc || "";
  const introImage = cmsData.introImage || "";
  const introBtn1Label = cmsData.introBtn1Label || "";
  const introBtn1Link = cmsData.introBtn1Link || "";
  const introBtn2Label = cmsData.introBtn2Label || "";
  const introBtn2Link = cmsData.introBtn2Link || "";

  const processTagline = cmsData.processTagline || "";
  const processHeading = cmsData.processHeading || "";
  const processDesc = cmsData.processDesc || "";
  const steps = Array.isArray(cmsData.steps) ? cmsData.steps : [];

  const portfolioTagline = cmsData.portfolioTagline || "";
  const portfolioHeading = cmsData.portfolioHeading || "";
  const portfolioDesc = cmsData.portfolioDesc || "";
  const portfolio = Array.isArray(cmsData.portfolio) ? cmsData.portfolio : [];
  const portfolioCtaLabel = cmsData.portfolioCtaLabel || "";
  const portfolioCtaLink = cmsData.portfolioCtaLink || "";

  const faqTagline = cmsData.faqTagline || "";
  const faqHeading = cmsData.faqHeading || "";
  const faqDesc = cmsData.faqDesc || "";
  const faqs = Array.isArray(cmsData.faqs) ? cmsData.faqs : [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEOJsonLD />

      <SEO
        pageSlug="installation"
        title="Installation Services - Kumar Power"
        description="Expert installation and commissioning services for power generators."
      />

      <main>
        {/* Hero Banner */}
        <div
          className="bg-black py-8 md:py-16"
          style={
            heroBg
              ? {
                  backgroundImage: `url(${heroBg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }
              : undefined
          }
        >
          <div className="container mx-auto text-center px-4 bg-black/50 backdrop-blur-sm py-12 md:py-16">
            {heroBadge && (
              <Badge className="mb-4 bg-[#2D6FBA] text-white hover:bg-[#225488]">
                {heroBadge}
              </Badge>
            )}
            {heroHeading && (
              <HeadingTag className="text-4xl md:text-5xl font-bold text-white mb-6">
                {heroHeading}
              </HeadingTag>
            )}
            {heroSub && (
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                <LinkText
                  text={heroSub}
                  linkClassName="text-[#2D6FBA] hover:underline font-bold"
                />
              </p>
            )}
            {heroCtaLabel && (
              <Button
                asChild
                size="lg"
                className="bg-[#2D6FBA] hover:bg-[#225488]"
              >
                {heroCtaLink.startsWith("http") ||
                heroCtaLink.startsWith("tel:") ? (
                  <a href={heroCtaLink}>{heroCtaLabel}</a>
                ) : (
                  <Link to={heroCtaLink}>{heroCtaLabel}</Link>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Intro Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                {introTagline && (
                  <div className="inline-block mb-4">
                    <div className="flex items-center">
                      <span className="block h-1 w-10 bg-[#2D6FBA] mr-3"></span>
                      <span className="text-[#2D6FBA] font-semibold tracking-wider">
                        {introTagline}
                      </span>
                    </div>
                  </div>
                )}
                {introHeading && (
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {introHeading}
                  </h2>
                )}
                {introDesc && (
                  <p className="text-lg text-muted-foreground mb-8">
                    <LinkText
                      text={introDesc}
                      linkClassName="text-[#2D6FBA] hover:underline font-bold"
                    />
                  </p>
                )}
                <div className="flex flex-wrap gap-4">
                  {introBtn1Label && (
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#2D6FBA] hover:bg-[#225488]"
                    >
                      {introBtn1Link.startsWith("http") ||
                      introBtn1Link.startsWith("tel:") ? (
                        <a href={introBtn1Link}>{introBtn1Label}</a>
                      ) : (
                        <Link to={introBtn1Link}>{introBtn1Label}</Link>
                      )}
                    </Button>
                  )}
                  {introBtn2Label && (
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border border-[#2D6FBA] text-[#2D6FBA] hover:bg-[#2D6FBA] hover:text-white hover:border-[#225488] transition-colors duration-200"
                    >
                      {introBtn2Link.startsWith("http") ||
                      introBtn2Link.startsWith("tel:") ? (
                        <a href={introBtn2Link}>{introBtn2Label}</a>
                      ) : (
                        <Link to={introBtn2Link}>{introBtn2Label}</Link>
                      )}
                    </Button>
                  )}
                </div>
              </div>
              {introImage && (
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={introImage}
                    alt={
                      introHeading || "Professional power system installation"
                    }
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Our Installation Process */}
        {steps.length > 0 && (
          <section className="py-16 md:py-24 bg-black text-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                {processTagline && (
                  <div className="inline-block mb-4">
                    <div className="flex items-center justify-center">
                      <span className="block h-1 w-10 bg-[#2D6FBA] mr-3"></span>
                      <span className="text-blue-400 font-semibold tracking-wider">
                        {processTagline}
                      </span>
                      <span className="block h-1 w-10 bg-[#2D6FBA] ml-3"></span>
                    </div>
                  </div>
                )}
                {processHeading && (
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {processHeading}
                  </h2>
                )}
                {processDesc && (
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    <LinkText
                      text={processDesc}
                      linkClassName="text-[#2D6FBA] hover:underline font-bold"
                    />
                  </p>
                )}
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-[#2D6FBA]"></div>

                  {/* Timeline items */}
                  <div className="space-y-16">
                    {steps.map((step: any, index: number) => (
                      <div
                        key={step.id || index}
                        className="relative pl-12 md:pl-20"
                      >
                        <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-[#2D6FBA] rounded-full flex items-center justify-center text-white font-bold">
                          {step.stepNum || index + 1}
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-[#2D6FBA]">
                          {step.title}
                        </h3>
                        {step.description && (
                          <p className="text-gray-300 mb-4">
                            <LinkText
                              text={step.description}
                              linkClassName="text-[#2D6FBA] hover:underline font-bold"
                            />
                          </p>
                        )}
                        {(step.bullet1 || step.bullet2) && (
                          <ul className="space-y-2">
                            {step.bullet1 && (
                              <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-[#2D6FBA] mt-0.5 flex-shrink-0" />
                                <span>{step.bullet1}</span>
                              </li>
                            )}
                            {step.bullet2 && (
                              <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-[#2D6FBA] mt-0.5 flex-shrink-0" />
                                <span>{step.bullet2}</span>
                              </li>
                            )}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Professional Installation Products Section */}
        {portfolio.length > 0 && (
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                {portfolioTagline && (
                  <div className="inline-block mb-4">
                    <div className="flex items-center justify-center">
                      <span className="block h-1 w-10 bg-[#2D6FBA] mr-3"></span>
                      <span className="text-[#2D6FBA] font-semibold tracking-wider">
                        {portfolioTagline}
                      </span>
                      <span className="block h-1 w-10 bg-[#2D6FBA] ml-3"></span>
                    </div>
                  </div>
                )}
                {portfolioHeading && (
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {portfolioHeading}
                  </h2>
                )}
                {portfolioDesc && (
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                    <LinkText
                      text={portfolioDesc}
                      linkClassName="text-[#2D6FBA] hover:underline font-bold"
                    />
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {portfolio.map((product: any) => (
                  <div
                    key={product.id}
                    className="h-80 w-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name || "Installation project"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {portfolioCtaLabel && (
                <div className="text-center mt-12">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#2D6FBA] hover:bg-[#225488]"
                  >
                    {portfolioCtaLink.startsWith("http") ||
                    portfolioCtaLink.startsWith("tel:") ? (
                      <a href={portfolioCtaLink}>{portfolioCtaLabel}</a>
                    ) : (
                      <Link to={portfolioCtaLink}>{portfolioCtaLabel}</Link>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="py-16 md:py-24 bg-black text-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                {faqTagline && (
                  <div className="inline-block mb-4">
                    <div className="flex items-center justify-center">
                      <span className="block h-1 w-10 bg-[#2D6FBA] mr-3"></span>
                      <span className="text-[#2D6FBA] font-semibold tracking-wider">
                        {faqTagline}
                      </span>
                      <span className="block h-1 w-10 bg-[#2D6FBA] ml-3"></span>
                    </div>
                  </div>
                )}
                {faqHeading && (
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {faqHeading}
                  </h2>
                )}
                {faqDesc && (
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    <LinkText
                      text={faqDesc}
                      linkClassName="text-[#2D6FBA] hover:underline font-bold"
                    />
                  </p>
                )}
              </div>

              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((item: any, index: number) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-gray-700"
                    >
                      <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-blue-400">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <LinkText text={item.answer} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default InstallationService;
