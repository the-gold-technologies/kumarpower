import { LinkText } from "@/components/ui/LinkText";
import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Wrench,
  Cpu,
  AlertTriangle,
  Clock,
  FileText,
  Zap,
  ArrowRight,
  Tool,
  Shield,
  Activity,
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { useSectionData, usePageHeadingTag } from "@/store/useCMSStore";

import asset2 from "@/assets/Kumar Assets/new750.png";


// Icon Mapper for CMS string icons
const renderIcon = (iconName: string, className: string) => {
  const HeadingTag = usePageHeadingTag("repair-overhaul");
  const icons: Record<string, any> = {
    AlertTriangle, Wrench, Cpu, Clock, Shield, Activity, FileText, CheckCircle2, Zap
  };
  const IconComponent = icons[iconName] || AlertTriangle;
  return <IconComponent className={className} />;
};

const RepairOverhaulService = () => {
  const { data: rawCMSData } = useSectionData<any>("repair-overhaul");
  const cmsData = rawCMSData?.services || rawCMSData || {};

  const heroHeading = cmsData.heroHeading || "";
  const heroSub = cmsData.heroSub || "";

  const introTitle = cmsData.introTitle || "";
  const introDesc1 = cmsData.introDesc1 || "";

  const repairServices = cmsData.services || [];

  const benefitsList = cmsData.benefits || [];

  const faqItems = cmsData.faqs || [];

  // Process Steps
  const processSteps = cmsData.processSteps || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO
        title="Repair & Overhaul Services - Kumar Power"
        description="From emergency repairs to rebuilds, Kumar Power’s certified technicians diagnose and fix equipment issues, minimizing downtime and extending service life."
        canonical="https://www.kumarpower.com/services/repair-overhaul"
      />

      <main>
        {/* Hero Banner */}
        <div className="bg-black py-12 md:py-16">
          <div className="container mx-auto text-center px-4">
            <Badge className="mb-4 bg-custom-blue text-white hover:bg-[#225488]">
              {cmsData.heroBadge}
            </Badge>
            <HeadingTag className="text-4xl md:text-5xl font-bold text-white mb-6">
              {heroHeading}
            </HeadingTag>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"><LinkText text={heroSub} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
            <Button
              asChild
              size="lg"
              className="bg-custom-blue hover:bg-[#225488]"
            >
              <Link to="/contact">{cmsData.heroCtaLabel}</Link>
            </Button>
          </div>
        </div>

        {/* Intro Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <div className="flex items-center">
                    <span className="block h-1 w-10 bg-custom-blue mr-3"></span>
                    <span className="text-custom-blue font-semibold tracking-wider">{cmsData.introTagline}</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {introTitle}
                </h2>
                <p className="text-lg text-muted-foreground mb-6"><LinkText text={introDesc1} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                <p className="text-lg text-muted-foreground mb-8"><LinkText text={cmsData.introDesc2} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-custom-blue hover:bg-[#225488]"
                  >
                    <Link to="/contact">{cmsData.introBtn1Label}</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-custom-blue text-custom-blue bg-white hover:bg-custom-blue hover:text-white hover:border-[#225488] transition-colors duration-200"
                  >
                    <a
                      href="tel:+919773851767"
                      className="flex items-center gap-2"
                    >
                      <Zap size={18} /> {cmsData.introBtn2Label}
                    </a>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={cmsData.introImage || asset2}
                  alt="Technician repairing generator"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Repair vs Overhaul */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-custom-blue mr-3"></span>
                  <span className="text-blue-400 font-semibold tracking-wider">{cmsData.diffTagline}</span>
                  <span className="block h-1 w-10 bg-custom-blue ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {cmsData.diffHeading}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto"><LinkText text={cmsData.diffDesc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="repair" className="w-full">
                <TabsList className="grid grid-cols-2 bg-gray-800">
                  <TabsTrigger
                    value="repair"
                    className="data-[state=active]:bg-custom-blue data-[state=active]:text-white"
                  >
                    {cmsData.repairTabLabel || "Repair Services"}
                  </TabsTrigger>
                  <TabsTrigger
                    value="overhaul"
                    className="data-[state=active]:bg-custom-blue data-[state=active]:text-white"
                  >
                    {cmsData.overhaulTabLabel || "Overhaul Services"}
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="repair" className="mt-6">
                  <Card className="p-8 bg-gray-900 border-gray-800">
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">
                      {cmsData.repairTabTitle}
                    </h3>
                    <p className="mb-6 text-gray-300"><LinkText text={cmsData.repairTabDesc1} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                    <ul className="space-y-3 mb-6">
                      {(cmsData.repairScenarios || []).map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-300"><LinkText text={cmsData.repairTabDesc2} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                  </Card>
                </TabsContent>
                <TabsContent value="overhaul" className="mt-6">
                  <Card className="p-8 bg-gray-900 border-gray-800">
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">
                      {cmsData.overhaulTabTitle}
                    </h3>
                    <p className="mb-6 text-gray-300"><LinkText text={cmsData.overhaulTabDesc1} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                    <ul className="space-y-3 mb-6">
                      {(cmsData.overhaulScenarios || []).map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-300"><LinkText text={cmsData.overhaulTabDesc2} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Repair & Overhaul Services */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-custom-blue mr-3"></span>
                  <span className="text-[#2D6FBA] font-semibold tracking-wider">{cmsData.servicesTagline}</span>
                  <span className="block h-1 w-10 bg-custom-blue ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {cmsData.servicesHeading}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto"><LinkText text={cmsData.servicesDesc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {repairServices.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-2 hover:border-custom-blue transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="mb-6">
                      {typeof service.icon === 'string' ? renderIcon(service.icon, "h-10 w-10 text-[#2D6FBA]") : React.cloneElement(service.icon as React.ReactElement, { className: "h-10 w-10 text-[#2D6FBA]" })}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6"><LinkText text={service.description} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#2D6FBA] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits of Professional Repair */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-custom-blue mr-3"></span>
                  <span className="text-blue-400 font-semibold tracking-wider">
                    {cmsData.benefitsTagline}
                  </span>
                  <span className="block h-1 w-10 bg-custom-blue ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {cmsData.benefitsHeading}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto"><LinkText text={cmsData.benefitsDesc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefitsList.map((benefit: any, index: number) => (
                <div
                  key={index}
                  className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-custom-blue transition-all duration-300"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-400">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300"><LinkText text={benefit.description} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                asChild
                size="lg"
                className="bg-custom-blue hover:bg-[#225488]"
              >
                <Link to="/contact">{cmsData.benefitsCtaLabel}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Our Repair Process */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-custom-blue mr-3"></span>
                  <span className="text-[#2D6FBA] font-semibold tracking-wider">
                    {cmsData.processTagline}
                  </span>
                  <span className="block h-1 w-10 bg-custom-blue ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {cmsData.processHeading}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto"><LinkText text={cmsData.processDesc ||
                  "A systematic approach to efficiently diagnose and resolve power system issues"} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-custom-blue"></div>

                {/* Timeline items */}
                <div className="space-y-16">
                  {processSteps.map((step: any, index: number) => (
                    <div key={index} className="relative pl-12 md:pl-20">
                      <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-custom-blue rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-[#2D6FBA]">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-4"><LinkText text={step.description} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                      <ul className="space-y-2">
                        {step.features &&
                          step.features.map(
                            (feature: string, fIndex: number) => (
                              <li
                                key={fIndex}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle2 className="h-5 w-5 text-[#2D6FBA] mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ),
                          )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-custom-blue mr-3"></span>
                  <span className="text-[#2D6FBA] font-semibold tracking-wider">
                    {cmsData.faqTagline}
                  </span>
                  <span className="block h-1 w-10 bg-custom-blue ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {cmsData.faqHeading}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto"><LinkText text={cmsData.faqDesc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-gray-700"
                  >
                    <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-blue-400">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-black to-blue-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {cmsData.helpTitle}
              </h2>
              <p className="text-lg md:text-xl mb-10 text-gray-200"><LinkText text={cmsData.helpSub} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              <div className="flex flex-wrap gap-4 justify-center">
                {/* Primary Button */}
                <Button
                  asChild
                  size="lg"
                  className="bg-[#2D6FBA] text-white border border-[#2D6FBA] hover:bg-[#225488] hover:border-[#225488] px-6 py-3 text-base min-w-[220px] rounded-lg font-medium transition-colors duration-200"
                >
                  <Link to="/contact">{cmsData.helpBtnLabel}</Link>
                </Button>

                {/* Secondary Button */}
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border border-white text-white hover:bg-white hover:text-[#2D6FBA] hover:border-[#2D6FBA] px-6 py-3 text-base min-w-[220px] rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <a
                    href="tel:+919773851767"
                    className="flex items-center gap-2"
                  >
                    <Zap size={18} /> Emergency Repair Hotline
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx global>{`
        .bg-custom-blue {
          background-color: #2d6fba !important;
        }
        .text-custom-blue {
          color: #2d6fba !important;
        }
        .border-custom-blue {
          border-color: #2d6fba !important;
        }
        .hover\:bg-custom-blue:hover {
          background-color: #225488 !important;
        }
        .hover\:border-custom-blue:hover {
          border-color: #225488 !important;
        }
        .hover\:text-custom-blue:hover {
          color: #225488 !important;
        }
      `}</style>
    </div>
  );
};

export default RepairOverhaulService;
