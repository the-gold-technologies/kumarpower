import React from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Shield,
  Wrench,
  Clock,
  Calendar,
  AlertCircle,
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LinkText } from "@/components/ui/LinkText";
import { useSectionData, usePageHeadingTag } from "@/store/useCMSStore";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="h-10 w-10 text-[#2D6FBA]" />,
  Clock: <Clock className="h-10 w-10 text-[#2D6FBA]" />,
  Calendar: <Calendar className="h-10 w-10 text-[#2D6FBA]" />,
  AlertCircle: <AlertCircle className="h-10 w-10 text-[#2D6FBA]" />,
  FileText: <FileText className="h-10 w-10 text-[#2D6FBA]" />,
  Wrench: <Wrench className="h-10 w-10 text-[#2D6FBA]" />,
};

const AnnualMaintenanceService: React.FC = () => {
  const HeadingTag = usePageHeadingTag("annual-maintenance");
  const { data: cmsData = {} } = useSectionData<any>(
    "annual-maintenance",
    "annual-maintenance"
  );

  const heroHeadingPart1 = cmsData.heroHeadingPart1 || "";
  const heroTitle = cmsData.heroTitle || "";
  const heroSub = cmsData.heroSub || "";
  const heroCtaLabel = cmsData.heroCtaLabel || "";
  const heroCtaLink = cmsData.heroCtaLink || "";

  const introTitlePart1 = cmsData.introTitlePart1 || "";
  const introTitlePart2 = cmsData.introTitlePart2 || "";
  const introDesc = cmsData.introDesc || "";
  const introBtn1Label = cmsData.introBtn1Label || "";
  const introBtn1Link = cmsData.introBtn1Link || "";
  const introBtn2Label = cmsData.introBtn2Label || "";
  const introBtn2Link = cmsData.introBtn2Link || "";
  const introImage = cmsData.introImage || "";

  const benefitsTagline = cmsData.benefitsTagline || "";
  const benefitsHeading = cmsData.benefitsHeading || "";
  const benefitsSub = cmsData.benefitsSub || "";
  const benefitsList = Array.isArray(cmsData.benefits) ? cmsData.benefits : [];

  const processTagline = cmsData.processTagline || "";
  const processHeading = cmsData.processHeading || "";
  const processSub = cmsData.processSub || "";
  const processSteps = Array.isArray(cmsData.processSteps)
    ? cmsData.processSteps
    : [];

  const faqTagline = cmsData.faqTagline || "";
  const faqHeading = cmsData.faqHeading || "";
  const faqSub = cmsData.faqSub || "";
  const faqs = Array.isArray(cmsData.faqs) ? cmsData.faqs : [];

  const ctaHeading = cmsData.ctaHeading || "";
  const ctaSub = cmsData.ctaSub || "";
  const ctaBtn1Label = cmsData.ctaBtn1Label || "";
  const ctaBtn1Link = cmsData.ctaBtn1Link || "";
  const ctaBtn2Label = cmsData.ctaBtn2Label || "";
  const ctaBtn2Link = cmsData.ctaBtn2Link || "";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEOJsonLD />

      <SEO
        pageSlug="annual-maintenance"
        title="Annual Maintenance Contracts - Kumar Power"
        description="Our Annual Maintenance Contracts (AMC) provide scheduled preventive maintenance, prompt repairs, and emergency support to ensure your power generation equipment operates reliably year-round."
      />

      <main>
        {/* Hero Banner */}
        <div className="bg-black py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014000/maintenance_service_detailed_vfgm3h.jpg')] opacity-20 bg-cover bg-center" />
          <div className="container mx-auto text-center px-4 relative z-10">
            {heroHeadingPart1 && (
              <div className="flex items-center justify-center mb-4">
                <span className="block h-px w-8 md:w-16 mr-2 md:mr-4 bg-[#2D6FBA]" />
                <span className="text-xl md:text-3xl font-semibold tracking-wide text-[#2D6FBA]">
                  {heroHeadingPart1}
                </span>
                <span className="block h-px w-8 md:w-16 ml-2 md:ml-4 bg-[#2D6FBA]" />
              </div>
            )}
            {heroTitle && (
              <HeadingTag className="text-3xl md:text-5xl font-bold mb-4 text-white">
                {heroTitle}
              </HeadingTag>
            )}
            {heroSub && (
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
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
                className="bg-[#2D6FBA] hover:brightness-90 text-white px-8 py-6 text-lg"
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
                {(introTitlePart1 || introTitlePart2) && (
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {introTitlePart1}{" "}
                    {introTitlePart2 && (
                      <span className="text-[#2D6FBA]">{introTitlePart2}</span>
                    )}
                  </h2>
                )}
                {introDesc && (
                  <p className="text-lg text-gray-700 mb-8">
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
                      className="bg-[#2D6FBA] hover:brightness-90"
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
                      className="border border-[#2D6FBA] bg-white text-[#2D6FBA] hover:bg-[#2D6FBA] hover:text-white hover:border-[#2D6FBA] transition-colors duration-200"
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
                <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={introImage}
                    alt="Technician performing maintenance"
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        {benefitsList.length > 0 && (
          <section className="py-16 md:py-24 bg-black text-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                {benefitsTagline && (
                  <span className="text-[#2D6FBA] font-medium uppercase tracking-wider">
                    {benefitsTagline}
                  </span>
                )}
                {benefitsHeading && (
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                    {benefitsHeading}
                  </h2>
                )}
                {benefitsSub && (
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    <LinkText
                      text={benefitsSub}
                      linkClassName="text-[#2D6FBA] hover:underline font-bold"
                    />
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefitsList.map((item: any, index: number) => {
                  const iconNode = (item.icon && iconMap[item.icon]) || (
                    <Shield className="h-10 w-10 text-[#2D6FBA]" />
                  );
                  return (
                    <Card
                      key={index}
                      className="bg-gray-900 border-0 p-6 hover:bg-gray-800 transition-colors duration-300"
                    >
                      <div className="mb-4">{iconNode}</div>
                      <h3 className="text-xl font-bold mb-3 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">
                        <LinkText
                          text={item.description}
                          linkClassName="text-[#2D6FBA] hover:underline font-bold"
                        />
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Maintenance Process */}
        {processSteps.length > 0 && (
          <section className="py-16 md:py-24 bg-black text-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                {processTagline && (
                  <span className="text-[#2D6FBA] font-medium uppercase tracking-wider">
                    {processTagline}
                  </span>
                )}
                {processHeading && (
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                    {processHeading}
                  </h2>
                )}
                {processSub && (
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    <LinkText
                      text={processSub}
                      linkClassName="text-[#2D6FBA] hover:underline font-bold"
                    />
                  </p>
                )}
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-[#2D6FBA]" />
                  <div className="space-y-16">
                    {processSteps.map((item: any, index: number) => (
                      <div key={index} className="relative pl-12 md:pl-24">
                        <div className="absolute left-0 md:left-4 top-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#2D6FBA]">
                          {item.step || index + 1}
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-[#2D6FBA]">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-lg">
                          <LinkText
                            text={item.description}
                            linkClassName="text-[#2D6FBA] hover:underline font-bold"
                          />
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                {faqTagline && (
                  <span className="text-[#2D6FBA] font-medium uppercase tracking-wider">
                    {faqTagline}
                  </span>
                )}
                {faqHeading && (
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                    {faqHeading}
                  </h2>
                )}
                {faqSub && (
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    <LinkText
                      text={faqSub}
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
                      className="border-b border-gray-200"
                    >
                      <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-blue-600 transition-colors">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-lg pb-6">
                        <LinkText text={item.answer} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        {(ctaHeading || ctaSub) && (
          <section
            className="py-16 md:py-24"
            style={{
              background: "linear-gradient(135deg, black 0%, #2D6FBA 100%)",
            }}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center text-white">
                {ctaHeading && (
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {ctaHeading}
                  </h2>
                )}
                {ctaSub && (
                  <p className="text-lg md:text-xl mb-10 text-gray-200">
                    <LinkText
                      text={ctaSub}
                      linkClassName="text-white underline font-bold"
                    />
                  </p>
                )}
                <div className="flex flex-wrap justify-center gap-6">
                  {ctaBtn1Label && (
                    <Button
                      asChild
                      size="lg"
                      className="bg-white text-[#2D6FBA] hover:bg-[#2D6FBA] hover:text-white hover:border-[#2D6FBA] px-8 py-6 text-lg transition-colors duration-200"
                    >
                      {ctaBtn1Link.startsWith("http") ||
                      ctaBtn1Link.startsWith("tel:") ? (
                        <a href={ctaBtn1Link}>{ctaBtn1Label}</a>
                      ) : (
                        <Link to={ctaBtn1Link}>{ctaBtn1Label}</Link>
                      )}
                    </Button>
                  )}
                  {ctaBtn2Label && (
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-white text-white bg-transparent hover:bg-white/10 hover:text-[#2D6FBA] hover:border-[#2D6FBA] px-8 py-6 text-lg transition-colors duration-200"
                    >
                      {ctaBtn2Link.startsWith("http") ||
                      ctaBtn2Link.startsWith("tel:") ? (
                        <a href={ctaBtn2Link}>{ctaBtn2Label}</a>
                      ) : (
                        <Link to={ctaBtn2Link}>{ctaBtn2Label}</Link>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AnnualMaintenanceService;
