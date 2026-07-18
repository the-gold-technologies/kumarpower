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
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import asset1 from "@/assets/Kumar Assets/mrg Green 160kVA-.png";

const AnnualMaintenanceService = () => {
  // FAQ items
  const faqItems = [
    {
      question: "What does the Annual Maintenance Contract cover?",
      answer:
        "Our AMC covers scheduled preventive maintenance visits, troubleshooting, repairs, part replacements as per the selected plan, technical support, and emergency response services. Each plan offers different levels of coverage, but all ensure your power systems operate efficiently with minimal downtime.",
    },
    {
      question: "How often will maintenance be performed?",
      answer:
        "Maintenance frequency depends on your selected plan. Basic AMC includes quarterly visits, Standard AMC includes bi-monthly visits, and Premium AMC includes monthly visits. Additional visits can be arranged as needed for specific requirements.",
    },
    {
      question: "Are parts included in the AMC?",
      answer:
        "Yes, replacement parts are included based on your selected plan. Basic AMC covers essential parts, Standard AMC includes most common replacement components, and Premium AMC offers comprehensive parts coverage. Consumables like oil and filters are included in all plans.",
    },
    {
      question: "What is the emergency response time?",
      answer:
        "Emergency response times vary by plan: Basic AMC ensures 48-hour response, Standard AMC provides 24-hour response, and Premium AMC guarantees 12-hour response. For critical facilities, we can customize response times to meet your specific needs.",
    },
    {
      question: "Can I customize my AMC plan?",
      answer:
        "Yes, we offer customized AMC plans tailored to your specific requirements. Our team will assess your power systems and develop a maintenance program that addresses your unique needs, equipment configuration, and operational demands.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* <SEOJsonLD
        title="Annual Maintenance Contracts | Kumar Power"
        description="Comprehensive annual maintenance contracts for power generators and equipment. Keep your power systems running at peak efficiency with our expert maintenance services."
        url="https://kumarpower.com/services/annual-maintenance"
        imageUrl="https://kumarpower.com/images/maintenance-service.jpg"
      /> */}

      <SEO
        title="Annual Maintainence Contracts- Kumar Power"
        description="Our Annual Maintenance Contracts (AMC) provide scheduled preventive maintenance, prompt repairs, and emergency support to ensure your power generation equipment operates reliably year-round."
        
        canonical="https://www.kumarpower.com/services/annual-maintenance"
      />


      <main>
        {/* Hero Banner */}
        <div className="bg-black py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014000/maintenance_service_detailed_vfgm3h.jpg')] opacity-20 bg-cover bg-center"></div>
          <div className="container mx-auto text-center px-4 relative z-10">
            <div className="flex items-center justify-center mb-4">
              <span
                style={{ backgroundColor: "#2D6FBA" }}
                className="block h-px w-8 md:w-16 mr-2 md:mr-4"
              />
              <span
                style={{ color: "#2D6FBA" }}
                className="text-xl md:text-3xl font-semibold tracking-wide"
              >
                ANNUAL MAINTENANCE CONTRACTS
              </span>
              <span
                style={{ backgroundColor: "#2D6FBA" }}
                className="block h-px w-8 md:w-16 ml-2 md:ml-4"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Preventive Care for Uninterrupted Power
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ensure maximum uptime and equipment longevity with our
              comprehensive maintenance solutions
            </p>
            <Button
              asChild
              size="lg"
              style={{ backgroundColor: "#2D6FBA" }}
              className="hover:brightness-90 text-white px-8 py-6 text-lg"
            >
              <Link to="/contact">Request AMC Quote</Link>
            </Button>
          </div>
        </div>

        {/* Intro Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Keep Your Power Systems Running at{" "}
                  <span style={{ color: "#2D6FBA" }}>Peak Efficiency</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our Annual Maintenance Contracts (AMC) provide scheduled
                  preventive maintenance, prompt repairs, and emergency support
                  to ensure your power generation equipment operates reliably
                  year-round.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  With Kumar Power's expert technicians and genuine Kirloskar
                  parts, you can minimize downtime, extend equipment life, and
                  optimize performance for maximum ROI.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    style={{ backgroundColor: "#2D6FBA" }}
                    className="hover:brightness-90"
                  >
                    <Link to="/contact">Request AMC Quote</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="border border-[#2D6FBA] bg-white text-[#2D6FBA] 
             hover:bg-[#2D6FBA] hover:text-white hover:border-[#2D6FBA] 
             transition-colors duration-200"
                  >
                    <Link to="/products">View All Products</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={asset1}
                  alt="Technician performing maintenance"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span
                style={{ color: "#2D6FBA" }}
                className="font-medium uppercase tracking-wider"
              >
                Why Choose Our AMC
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Benefits of Our Annual Maintenance Contracts
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Proactive maintenance is the key to reliable power generation
                and equipment longevity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <Shield
                      className="h-10 w-10"
                      style={{ color: "#2D6FBA" }}
                    />
                  ),
                  title: "Prevent Costly Breakdowns",
                  description:
                    "Regular maintenance identifies and resolves potential issues before they lead to major failures and expensive repairs.",
                },
                {
                  icon: (
                    <Clock className="h-10 w-10" style={{ color: "#2D6FBA" }} />
                  ),
                  title: "Minimize Downtime",
                  description:
                    "Scheduled maintenance during off-peak hours and priority emergency response ensure your operations continue without interruption.",
                },
                {
                  icon: (
                    <Calendar
                      className="h-10 w-10"
                      style={{ color: "#2D6FBA" }}
                    />
                  ),
                  title: "Extend Equipment Life",
                  description:
                    "Proper maintenance significantly extends the operational lifespan of generators and power equipment, maximizing your investment.",
                },
                {
                  icon: (
                    <AlertCircle
                      className="h-10 w-10"
                      style={{ color: "#2D6FBA" }}
                    />
                  ),
                  title: "Regulatory Compliance",
                  description:
                    "Our maintenance protocols ensure your equipment meets all environmental and safety regulations, avoiding potential penalties.",
                },
                {
                  icon: (
                    <FileText
                      className="h-10 w-10"
                      style={{ color: "#2D6FBA" }}
                    />
                  ),
                  title: "Detailed Documentation",
                  description:
                    "Comprehensive service records and performance reports help with warranty claims, insurance requirements, and future planning.",
                },
                {
                  icon: (
                    <Wrench
                      className="h-10 w-10"
                      style={{ color: "#2D6FBA" }}
                    />
                  ),
                  title: "Expert Technicians",
                  description:
                    "All maintenance is performed by Kirloskar-certified engineers with extensive experience across our full range of equipment.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-gray-900 border-0 p-6 hover:bg-gray-800 transition-colors duration-300"
                >
                  <div className="mb-4" style={{ color: "#2D6FBA" }}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Process */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span
                style={{ color: "#2D6FBA" }}
                className="font-medium uppercase tracking-wider"
              >
                How We Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Our Maintenance Process
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                A systematic approach to ensure comprehensive care for your
                power equipment
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div
                  className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5"
                  style={{ backgroundColor: "#2D6FBA" }}
                ></div>
                {/* Timeline items */}
                <div className="space-y-16">
                  {[
                    {
                      step: 1,
                      title: "Initial System Assessment",
                      description:
                        "Complete evaluation of all power generation equipment to establish baseline conditions and identify any immediate concerns that need addressing.",
                    },
                    {
                      step: 2,
                      title: "Scheduled Preventive Maintenance",
                      description:
                        "Regular visits based on your AMC plan to perform comprehensive maintenance including fluid checks, filter replacements, battery testing, and system calibration.",
                    },
                    {
                      step: 3,
                      title: "Performance Testing & Analysis",
                      description:
                        "Load testing, efficiency measurements, and emissions monitoring to ensure optimal performance and regulatory compliance.",
                    },
                    {
                      step: 4,
                      title: "Detailed Reporting",
                      description:
                        "Comprehensive service reports documenting all maintenance performed, parts replaced, system performance metrics, and recommendations for future improvements.",
                    },
                    {
                      step: 5,
                      title: "Continuous Support",
                      description:
                        "Ongoing technical assistance, emergency response, and proactive notifications for scheduled maintenance to ensure your equipment operates reliably.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="relative pl-12 md:pl-24">
                      <div
                        className="absolute left-0 md:left-4 top-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                        style={{ backgroundColor: "#2D6FBA" }}
                      >
                        {item.step}
                      </div>
                      <h3
                        className="text-2xl font-bold mb-3"
                        style={{ color: "#2D6FBA" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-lg">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span
                style={{ color: "#2D6FBA" }}
                className="font-medium uppercase tracking-wider"
              >
                Get Answers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Common questions about our Annual Maintenance Contracts
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-blue-600 transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 text-lg pb-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-16 md:py-24"
          style={{
            background: "linear-gradient(135deg, black 0%, #2D6FBA 100%)",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Secure Your Power Equipment's Performance?
              </h2>
              <p className="text-lg md:text-xl mb-10 text-gray-200">
                Contact our service team today to discuss the ideal Annual
                Maintenance Contract for your power systems.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button
                  asChild
                  size="lg"
                  style={{
                    backgroundColor: "white",
                    borderColor: "#2D6FBA",
                    color: "#2D6FBA",
                  }}
                  className="hover:bg-[#2D6FBA] hover:text-white hover:border-[#2D6FBA] px-8 py-6 text-lg transition-colors duration-200"
                >
                  <Link to="/contact">Request AMC Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  style={{ borderColor: "white", color: "white" }}
                  className="bg-transparent hover:bg-white/10 hover:text-[#2D6FBA] hover:border-[#2D6FBA] px-8 py-6 text-lg transition-colors duration-200"
                >
                  <Link to="/products" className="text-white hover:text-[#2D6FBA]">
                    Explore Other Services
                  </Link>
                </Button>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AnnualMaintenanceService;
