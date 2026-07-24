import { LinkText } from "@/components/ui/LinkText";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Wrench, Gauge, BookOpen, UserCheck, Truck, Settings, ArrowRight } from 'lucide-react';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';

const InstallationService = () => {
  // Sample products with distinct categories
  const installationProducts = [
    { id: 1, name: "Industrial Generator A", imageUrl: "https://via.placeholder.com/150", category: "Industrial" },
    { id: 2, name: "Commercial Generator B", imageUrl: "https://via.placeholder.com/150", category: "Commercial" },
    { id: 3, name: "Residential Generator C", imageUrl: "https://via.placeholder.com/150", category: "Residential" },
    { id: 4, name: "Industrial Generator D", imageUrl: "https://via.placeholder.com/150", category: "Industrial" },
    { id: 5, name: "Commercial Generator E", imageUrl: "https://via.placeholder.com/150", category: "Commercial" },
    { id: 6, name: "Residential Generator F", imageUrl: "https://via.placeholder.com/150", category: "Residential" },
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How long does the installation process take?",
      answer: "The installation timeline varies based on the system complexity and site conditions. Small to medium generators typically take 1-3 days, while larger industrial installations may require 1-2 weeks. Our team will provide a detailed timeline during the initial assessment."
    },
    {
      question: "Do you handle all required permits and approvals?",
      answer: "Yes, we manage the entire permitting process. Our team handles all necessary documentation, regulatory compliance, and approvals from local authorities, ensuring your installation meets all legal requirements."
    },
    {
      question: "Can you install generators in difficult locations?",
      answer: "Absolutely. Our installation teams are equipped to handle challenging locations including rooftops, basements, confined spaces, and remote sites. We have specialized equipment for crane lifts, custom mounting solutions, and extended cable runs."
    },
    {
      question: "Will the installation cause disruption to our operations?",
      answer: "We minimize disruption by carefully planning the installation process. Most electrical connections requiring power interruption can be scheduled during off-hours. Our team coordinates closely with your staff to develop an installation plan that accommodates your operational needs."
    },
    {
      question: "What happens after installation is complete?",
      answer: "Following installation, we conduct comprehensive commissioning tests, provide detailed operator training, and deliver complete documentation including operation manuals, warranty information, and maintenance schedules. We also offer ongoing maintenance contracts to keep your system operating at peak performance."
    },
    {
      question: "Are your installations covered by warranty?",
      answer: "Yes, all our installation work is backed by a comprehensive warranty. We provide a standard 12-month warranty on labor and workmanship, in addition to any manufacturer warranties on the equipment. Extended warranty options are also available for added peace of mind."
    }
  ];

  // Installation benefits
  const installationBenefits = [
    {
      title: "Maximize System Reliability",
      description: "Proper installation ensures your power system performs optimally during critical situations, minimizing the risk of failures when you need power most."
    },
    {
      title: "Extend Equipment Lifespan",
      description: "Professional installation with correct mounting, connections, and calibration significantly extends the operational life of your generator and related components."
    },
    {
      title: "Ensure Code Compliance",
      description: "Our certified technicians ensure all installations meet or exceed local codes, national standards, and manufacturer specifications."
    },
    {
      title: "Optimize Performance",
      description: "Expert installation and commissioning maximize fuel efficiency, power output, and system responsiveness for optimal performance."
    },
    {
      title: "Minimize Maintenance Issues",
      description: "Correctly installed systems require less maintenance and experience fewer operational problems over their lifetime."
    },
    {
      title: "Protect Warranty Coverage",
      description: "Professional installation by authorized technicians maintains manufacturer warranty coverage and provides additional installation workmanship guarantees."
    }
  ];

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filtered products based on selected category
  const filteredProducts = selectedCategory
    ? installationProducts.filter((product) => product.category === selectedCategory)
    : installationProducts;

  return (
    <>
      <SEO
              title="Installation "
              description="Kumar Power Installation ensure high-quality power solutions, compliance standards, and trusted electrical services across India."
              keywords="power certifications, electrical certification, Kumar Power"
              canonical="https://www.kumarpower.com/about/certifications"
            />
      <div className="min-h-screen bg-background">
        <Header />
        {/* <SEOJsonLD
        title="Generator Installation & Commissioning Services | Kumar Power"
        description="Expert installation and commissioning services for power generators and equipment. Professional setup, testing, and training for optimal system performance."
        url="https://kumarpower.com/services/installation"
        imageUrl="https://kumarpower.com/images/installation-service.jpg"
      /> */}


        <main>
          {/* Hero Banner */}
          <div className="bg-black py-12 md:py-16">
            <div className="container mx-auto text-center px-4">
              <Badge className="mb-4 bg-blue-600 text-white hover:bg-blue-700">Professional Services</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Installation & Commissioning</h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Expert power system installation and commissioning services for optimal performance, reliability, and compliance.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">Schedule a Consultation</Link>
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
                      <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                      <span className="text-blue-600 font-semibold tracking-wider">KUMAR POWER EXPERTISE</span>
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Professional Power System Installation
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Kumar Power delivers end-to-end installation and commissioning services for all types of
                    power generation equipment, ensuring your systems operate at peak efficiency from day one.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8">
                    Our certified technicians handle everything from site assessment and planning to final
                    commissioning and operator training, delivering turnkey solutions that maximize reliability
                    and minimize downtime across industries.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Link to="/contact">Schedule Installation</Link>
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014000/installation_service_detailed_hjd9tw.jpg"
                    alt="Generator installation in progress"
                    className="w-full h-auto"
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
                    <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                    <span className="text-blue-400 font-semibold tracking-wider">THE KUMAR POWER APPROACH</span>
                    <span className="block h-1 w-10 bg-blue-600 ml-3"></span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Installation Process
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  A comprehensive approach to ensure your power system is installed correctly, efficiently, and with minimal disruption
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>

                  {/* Timeline items */}
                  <div className="space-y-16">
                    <div className="relative pl-12 md:pl-20">
                      <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <h3 className="text-2xl font-bold mb-3 text-blue-400">Initial Consultation & Site Survey</h3>
                      <p className="text-gray-300 mb-4">
                        We begin with a thorough assessment of your power requirements and site conditions to determine the optimal
                        system configuration, placement, and infrastructure needs.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Comprehensive load analysis and power requirements assessment</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Detailed site inspection and infrastructure evaluation</span>
                        </li>
                      </ul>
                    </div>

                    <div className="relative pl-12 md:pl-20">
                      <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <h3 className="text-2xl font-bold mb-3 text-blue-400">Detailed Design & Planning</h3>
                      <p className="text-gray-300 mb-4">
                        Our engineers develop comprehensive installation plans including electrical schematics, mechanical layouts,
                        and project timelines tailored to your specific needs.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Custom system design optimized for your facility</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Detailed project timeline and resource allocation</span>
                        </li>
                      </ul>
                    </div>

                    <div className="relative pl-12 md:pl-20">
                      <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                      <h3 className="text-2xl font-bold mb-3 text-blue-400">Permitting & Compliance</h3>
                      <p className="text-gray-300 mb-4">
                        We handle all necessary permits, regulatory approvals, and compliance requirements to ensure your installation
                        meets all local and national standards.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Complete management of permit acquisition process</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Regulatory compliance verification and documentation</span>
                        </li>
                      </ul>
                    </div>

                    <div className="relative pl-12 md:pl-20">
                      <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                      <h3 className="text-2xl font-bold mb-3 text-blue-400">Professional Installation</h3>
                      <p className="text-gray-300 mb-4">
                        Our certified technicians execute the installation according to the detailed plan, ensuring all components are
                        properly installed, connected, and secured.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Expert mechanical and electrical installation by certified technicians</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Quality control checks at each installation milestone</span>
                        </li>
                      </ul>
                    </div>

                    <div className="relative pl-12 md:pl-20">
                      <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                      <h3 className="text-2xl font-bold mb-3 text-blue-400">Testing & Commissioning</h3>
                      <p className="text-gray-300 mb-4">
                        We conduct comprehensive testing of all systems, including load testing, performance verification, and safety checks
                        to ensure everything functions correctly.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Full-load testing under various operational conditions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>System performance optimization and calibration</span>
                        </li>
                      </ul>
                    </div>

                    <div className="relative pl-12 md:pl-20">
                      <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">6</div>
                      <h3 className="text-2xl font-bold mb-3 text-blue-400">Training & Handover</h3>
                      <p className="text-gray-300 mb-4">
                        We provide thorough training for your staff on system operation and basic maintenance, along with complete documentation
                        and warranty information.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Comprehensive operator training and knowledge transfer</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Complete system documentation and maintenance schedules</span>
                        </li>
                      </ul>
                    </div>
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
                    <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                    <span className="text-blue-600 font-semibold tracking-wider">OUR PROFESSIONAL INSTALLATIONS</span>
                    <span className="block h-1 w-10 bg-blue-600 ml-3"></span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Installation Portfolio
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                  Explore our comprehensive range of professional generator installations across industrial, commercial, and residential settings
                </p>

                <div className="flex flex-wrap gap-4 justify-center mb-10">
                  <Badge
                    className={`cursor-pointer px-4 py-2 ${selectedCategory === null ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                      }`}
                    onClick={() => setSelectedCategory(null)}
                  >
                    All Installations
                  </Badge>
                  <Badge
                    className={`cursor-pointer px-4 py-2 ${selectedCategory === 'Industrial' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                      }`}
                    onClick={() => setSelectedCategory('Industrial')}
                  >
                    Industrial
                  </Badge>
                  <Badge
                    className={`cursor-pointer px-4 py-2 ${selectedCategory === 'Commercial' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                      }`}
                    onClick={() => setSelectedCategory('Commercial')}
                  >
                    Commercial
                  </Badge>
                  <Badge
                    className={`cursor-pointer px-4 py-2 ${selectedCategory === 'Residential' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                      }`}
                    onClick={() => setSelectedCategory('Residential')}
                  >
                    Residential
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <p className="text-white font-medium"><LinkText text={product.name} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                        <Badge className="self-start mt-2 bg-blue-600">{product.category}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/contact">Schedule Your Installation</Link>
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
                    <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                    <span className="text-blue-400 font-semibold tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
                    <span className="block h-1 w-10 bg-blue-600 ml-3"></span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Common Questions About Installation
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Get answers to frequently asked questions about our installation and commissioning services
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
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
    </>
  );
};

export default InstallationService;
