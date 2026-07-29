import { LinkText } from "@/components/ui/LinkText";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Wrench,
  Gauge,
  BookOpen,
  UserCheck,
  Truck,
  Settings,
  ArrowRight,
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
import { Badge } from "@/components/ui/badge";

import range5 from "@/assets/Range5.png";

import SEO from "@/components/SEO";
import { useSectionData, usePageHeadingTag } from "@/store/useCMSStore";

import instal2 from "@/assets/Installation/instal2.png";
import instal3 from "@/assets/Installation/instal3.png";
import instal4 from "@/assets/Installation/instal4.png";
import instal5 from "@/assets/Installation/instal5.png";
import instal6 from "@/assets/Installation/instal6.png";
import instal7 from "@/assets/Installation/instal7.png";
import instal8 from "@/assets/Installation/instal8.png";
import instal9 from "@/assets/Installation/instal9.png";
import instal10 from "@/assets/Installation/instal10.png";
import instal11 from "@/assets/Installation/instal11.png";

import instal13 from "@/assets/Installation/instal13.png";
import instal14 from "@/assets/Installation/instal14.png";
import instal15 from "@/assets/Installation/instal15.png";
import instal16 from "@/assets/Installation/instal16.png";
import instal17 from "@/assets/Installation/instal17.png";
import instal18 from "@/assets/Installation/instal18.png";
import instal19 from "@/assets/Installation/instal19.png";
import instal20 from "@/assets/Installation/instal20.png";
import instal21 from "@/assets/Installation/instal21.png";
import instal22 from "@/assets/Installation/instal22.png";
import instal23 from "@/assets/Installation/instal23.png";
import instal24 from "@/assets/Installation/instal24.png";
import instal25 from "@/assets/Installation/instal25.png";
import instal26 from "@/assets/Installation/instal26.png";
import instal27 from "@/assets/Installation/instal27.png";
import heroinstal from "@/assets/heroinstalll.jpeg";

const InstallationService = () => {
  const HeadingTag = usePageHeadingTag("installation");
  const { data: rawCMSData } = useSectionData<any>("installation", "services");
  const cmsData = rawCMSData || {};
  console.log("CMS DATA:", cmsData);

  const heroHeading = cmsData.heroHeading || "Installation & Commissioning";
  const heroSub =
    cmsData.heroSub ||
    "Expert power system installation and commissioning services for optimal performance, reliability, and compliance.";

  const introTitle =
    cmsData.introHeading || "Professional Power System Installation";
  const introDesc1 =
    cmsData.introP1 ||
    "Kumar Power delivers end-to-end installation and commissioning services for all types of power generation equipment, ensuring your systems operate at peak efficiency from day one.";
  const introDesc2 =
    cmsData.introP2 ||
    "Our certified technicians handle everything from site assessment and planning to final commissioning and operator training, delivering turnkey solutions that maximize reliability and minimize downtime across industries.";
  const steps = cmsData.steps || [];
  const portfolio = cmsData.portfolio || [];
  const faqs = cmsData.faqs || [];

  return (
    <div className="min-h-screen bg-background">
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
        .transition-transform-500 {
          transition: transform 0.5s;
        }
        .bg-custom-blue {
          background-color: #2D6FBA !important;
        }
        .text-custom-blue {
          color: #2D6FBA !important;
        }
      `}</style>

      <Header />
      {/* <SEOJsonLD
        title="Generator Installation & Commissioning Services | Kumar Power"
        description="Expert installation and commissioning services for power generators and equipment. Professional setup, testing, and training for optimal system performance."
        url="https://kumarpower.com/services/installation"
        imageUrl="https://kumarpower.com/images/installation-service.jpg"
      /> */}

      <SEO title=" " description=" " canonical="" />

      <main>
        {/* Hero Banner */}
        <div
          className="bg-black py-8 md:py-16"
          style={{
            backgroundImage: `url(${heroinstal})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div className="container mx-auto text-center px-4 bg-black/50 backdrop-blur-sm py-12 md:py-16">
            <Badge className="mb-4 bg-custom-blue text-white hover:bg-[#225488]">
              {cmsData.heroBadge || "Professional Services"}
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
              <Link to="/contact">{cmsData.heroCtaLabel || "Schedule a Consultation"}</Link>
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
                    <span className="text-custom-blue font-semibold tracking-wider">
                      {cmsData.introTagline || "KUMAR POWER EXPERTISE"}
                    </span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {introTitle}
                </h2>
                <p className="text-lg text-muted-foreground mb-6"><LinkText text={introDesc1} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                <p className="text-lg text-muted-foreground mb-8"><LinkText text={introDesc2} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-custom-blue hover:bg-[#225488]"
                  >
                    <Link to="/contact">Schedule Installation</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="hover:bg-black"
                  >
                    <Link to="/products">View all Products</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={cmsData.introImage || ""}
                  alt="Professional power system installation"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Installation Process */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-custom-blue mr-3"></span>
                  <span className="text-blue-400 font-semibold tracking-wider">
                    {cmsData.processTagline || "OUR INSTALLATION PROCESS"}
                  </span>
                  <span className="block h-1 w-10 bg-custom-blue ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {cmsData.processHeading || "Our Installation Process"}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto"><LinkText text={cmsData.processDesc || "A comprehensive approach to ensure your power system is installed correctly, efficiently, and with minimal disruption"} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-custom-blue"></div>

                {/* Timeline items */}
                <div className="space-y-16">
                  {steps.map((step: any, index: number) => (
                    <div
                      key={step.id || index}
                      className="relative pl-12 md:pl-20"
                    >
                      <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-custom-blue rounded-full flex items-center justify-center text-white font-bold">
                        {step.stepNum}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-[#2D6FBA]">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 mb-4"><LinkText text={step.description} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Installation Products Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-custom-blue mr-3"></span>
                  <span className="text-custom-blue font-semibold tracking-wider">
                    {cmsData.portfolioTagline || "OUR PROFESSIONAL INSTALLATIONS"}
                  </span>
                  <span className="block h-1 w-10 bg-custom-blue ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {cmsData.portfolioHeading || "Our Installation Portfolio"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8"><LinkText text={cmsData.portfolioDesc || "Explore our comprehensive range of professional generator installations across industrial, commercial, and residential settings"} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {portfolio.map((product) => (
                <div
                  key={product.id}
                  className="h-80 w-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-custom-blue hover:bg-[#225488]"
              >
                <Link to="/contact">{cmsData.portfolioCtaLabel || "Schedule Your Installation"}</Link>
              </Button>
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
                    {cmsData.faqTagline || "FREQUENTLY ASKED QUESTIONS"}
                  </span>
                  <span className="block h-1 w-10 bg-custom-blue ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {cmsData.faqHeading || "Common Questions About Installation"}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto"><LinkText text={cmsData.faqDesc || "Get answers to frequently asked questions about our installation and commissioning services"} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((item, index) => (
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
      </main>
      <Footer />
    </div>
  );
};

export default InstallationService;
