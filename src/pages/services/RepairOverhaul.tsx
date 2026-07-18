import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Wrench, Cpu, AlertTriangle, Clock, FileText, Zap, ArrowRight, Tool, Shield, Activity } from 'lucide-react';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';

import asset2 from "@/assets/Kumar Assets/new750.png"

const RepairOverhaulService = () => {
  // Repair services
  const repairServices = [
    {
      title: "Emergency Repairs",
      description: "Rapid response services for unexpected breakdowns and critical failures requiring immediate attention.",
      icon: <AlertTriangle className="h-10 w-10 text-blue-600" />,
      features: [
        "24/7 emergency response with guaranteed arrival times",
        "Fully equipped mobile repair units for on-site solutions",
        "Priority parts sourcing through our extensive supplier network",
        "Temporary power solutions to minimize operational disruption",
        "Comprehensive root cause analysis to prevent recurrence"
      ]
    },
    {
      title: "Engine Repairs & Overhaul",
      description: "Complete engine servicing from minor repairs to full overhaul and rebuilding for optimal performance.",
      icon: <Wrench className="h-10 w-10 text-blue-600" />,
      features: [
        "Advanced diagnostic technology for precise issue identification",
        "Specialized cylinder head refurbishment and valve reconditioning",
        "Precision crankshaft grinding and bearing replacement",
        "Complete fuel system rebuilding and calibration",
        "Full engine rebuilding with genuine OEM components"
      ]
    },
    {
      title: "Electrical System Repairs",
      description: "Expert troubleshooting and repair of generator control systems, alternators, and power distribution components.",
      icon: <Cpu className="h-10 w-10 text-blue-600" />,
      features: [
        "Professional alternator rewinding and insulation restoration",
        "Precision AVR replacement, calibration, and testing",
        "Advanced control panel diagnostics and component replacement",
        "Comprehensive switchgear inspection and servicing",
        "Circuit breaker testing, maintenance, and certification"
      ]
    },
    {
      title: "Preventive Overhaul",
      description: "Scheduled major overhauls to extend equipment life and prevent costly breakdowns before they occur.",
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      features: [
        "Data-driven condition assessment and predictive analysis",
        "Detailed component life evaluation and wear pattern analysis",
        "Strategic component replacement based on usage patterns",
        "Performance-enhancing system upgrades and modernization",
        "Complete performance restoration and efficiency optimization"
      ]
    }
  ];

  // Benefits of professional repair
  const repairBenefits = [
    {
      title: "Extended Equipment Life",
      description: "Professional repairs and overhauls can significantly extend the operational lifespan of your power equipment, maximizing your return on investment.",
      icon: <Clock className="h-8 w-8 text-blue-400" />
    },
    {
      title: "Improved Reliability",
      description: "Properly repaired and overhauled systems experience fewer breakdowns and provide consistent, dependable power when you need it most.",
      icon: <Shield className="h-8 w-8 text-blue-400" />
    },
    {
      title: "Enhanced Performance",
      description: "Our repair services restore or even improve your system's original performance specifications, ensuring optimal efficiency and output.",
      icon: <Activity className="h-8 w-8 text-blue-400" />
    },
    {
      title: "Cost Effectiveness",
      description: "Quality repairs and strategic overhauls are often more economical than replacement, especially for larger power systems.",
      icon: <FileText className="h-8 w-8 text-blue-400" />
    },
    {
      title: "Regulatory Compliance",
      description: "Our repair services ensure your equipment meets all current regulatory standards for emissions, safety, and performance.",
      icon: <CheckCircle2 className="h-8 w-8 text-blue-400" />
    },
    {
      title: "Minimized Downtime",
      description: "Fast, efficient repair processes and temporary power solutions help minimize operational disruptions during necessary service work.",
      icon: <Zap className="h-8 w-8 text-blue-400" />
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How do I know if my generator needs repair or overhaul?",
      answer: "Warning signs include unusual noises, excessive vibration, increased fuel consumption, difficulty starting, frequent shutdowns, visible leaks, or decreased power output. Our technicians can perform a diagnostic assessment to determine the exact issues and recommend appropriate repairs."
    },
    {
      question: "Can you repair generators on-site or do they need to be transported to your facility?",
      answer: "We can perform many repairs on-site, including most electrical system repairs, minor to moderate engine work, and control system troubleshooting. Major overhauls, engine rebuilds, and alternator rewinding typically require transportation to our specialized workshop facilities."
    },
    {
      question: "How long does a typical repair or overhaul take?",
      answer: "Repair timeframes vary based on the scope of work. Minor repairs may be completed in hours, while standard repairs typically take 1-3 days. Major overhauls can require 1-2 weeks, and complete engine rebuilds may take 2-4 weeks. We provide estimated timelines during our initial assessment."
    },
    {
      question: "Do you provide warranty on repairs and overhauls?",
      answer: "Yes, all our repair work comes with a comprehensive warranty. Minor repairs carry a 3-month warranty, standard repairs have a 6-month warranty, and major overhauls or rebuilds are warrantied for 12 months or 500 operating hours, whichever comes first."
    },
    {
      question: "Can you provide temporary power during major repairs?",
      answer: "Yes, we offer rental generators to ensure continuous power during extended repairs or overhauls. Our team will assess your power requirements and provide appropriately sized temporary power solutions to minimize disruption to your operations."
    },
    {
      question: "Do you use OEM parts for repairs and overhauls?",
      answer: "Yes, we primarily use genuine OEM (Original Equipment Manufacturer) parts for all repairs to ensure optimal performance and reliability. In situations where OEM parts may have extended lead times, we offer high-quality aftermarket alternatives after discussing the options with you."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* <SEOJsonLD
        title="Generator Repair & Overhaul Services | Kumar Power"
        description="Professional repair, maintenance, and overhaul services for generators and power equipment. Fast emergency repairs and comprehensive rebuilding services."
        url="https://kumarpower.com/services/repair-overhaul"
        imageUrl="https://kumarpower.com/images/repair-service.jpg"
      /> */}


      <SEO
        title="Repair & Overhaul Services - Kumar Power"
        description="From emergency repairs to rebuilds, Kumar Power’s certified technicians diagnose and fix equipment issues, minimizing downtime and extending service life."
        
        canonical="https://www.kumarpower.com/services/repair-overhaul"
      />


      <main>
        {/* Hero Banner */}
        <div className="bg-black py-12 md:py-16">
          <div className="container mx-auto text-center px-4">
            <Badge className="mb-4 bg-custom-blue text-white hover:bg-[#225488]">Expert Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Repair & Overhaul Services</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional restoration and renewal of power systems for optimal performance and reliability
            </p>
            <Button asChild size="lg" className="bg-custom-blue hover:bg-[#225488]">
              <Link to="/contact">Request Emergency Service</Link>
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
                    <span className="text-custom-blue font-semibold tracking-wider">KUMAR POWER EXPERTISE</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Expert Generator Repair & Overhaul Services
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  From emergency repairs to complete system rebuilds, Kumar Power's certified technicians
                  have the expertise to diagnose and resolve any issue with your power generation equipment,
                  minimizing downtime and extending service life.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  We use only genuine parts and industry-leading techniques to restore your equipment to
                  optimal performance, ensuring reliability when you need it most while maximizing your
                  investment in critical power infrastructure.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-custom-blue hover:bg-[#225488]">
                    <Link to="/contact">Request Repair Service</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-custom-blue text-custom-blue bg-white hover:bg-custom-blue hover:text-white hover:border-[#225488] transition-colors duration-200"
                  >
                    <a href="tel:+919773851767" className="flex items-center gap-2">
                      <Zap size={18} /> Emergency Repair Hotline
                    </a>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={asset2}
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
                  <span className="text-blue-400 font-semibold tracking-wider">MAKING THE RIGHT CHOICE</span>
                  <span className="block h-1 w-10 bg-custom-blue ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Repair vs. Overhaul: Understanding the Difference
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Knowing when your power equipment needs a simple repair versus a comprehensive overhaul
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="repair" className="w-full">
                <TabsList className="grid grid-cols-2 bg-gray-800">
                  <TabsTrigger value="repair" className="data-[state=active]:bg-custom-blue data-[state=active]:text-white">Repair Services</TabsTrigger>
                  <TabsTrigger value="overhaul" className="data-[state=active]:bg-custom-blue data-[state=active]:text-white">Overhaul Services</TabsTrigger>
                </TabsList>
                <TabsContent value="repair" className="mt-6">
                  <Card className="p-8 bg-gray-900 border-gray-800">
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">When You Need Repair Services</h3>
                    <p className="mb-6 text-gray-300">
                      Repairs address specific issues or component failures in your power system. These are typically
                      needed when your generator is experiencing:
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200">Sudden failure to start or run properly</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200">Unusual noises, vibrations, or performance issues</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200">Fluid leaks or visible damage</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200">Control panel or electrical system malfunctions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200">Isolated component failures that don't affect the entire system</span>
                      </li>
                    </ul>
                    <p className="text-gray-300">
                      Our repair services are designed for quick response and targeted fixes to get your equipment
                      back online with minimal downtime.
                    </p>
                  </Card>
                </TabsContent>
                <TabsContent value="overhaul" className="mt-6">
                  <Card className="p-8 bg-gray-900 border-gray-800">
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">When You Need Overhaul Services</h3>
                    <p className="mb-6 text-gray-300">
                      Overhauls are comprehensive rebuilds or restorations of your power system. These are typically
                      recommended when:
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200">Your generator has reached a specific number of operating hours (typically 10,000-30,000 hours)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200">Multiple systems are showing signs of wear or deterioration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200">Performance has gradually declined despite regular maintenance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200">Major components need replacement (pistons, crankshaft, alternator)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200">You want to extend the lifespan of older but valuable equipment</span>
                      </li>
                    </ul>
                    <p className="text-gray-300">
                      Our overhaul services restore your equipment to like-new condition, extending its useful life
                      and improving reliability and efficiency.
                    </p>
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
                  <span className="text-[#2D6FBA] font-semibold tracking-wider">COMPREHENSIVE SOLUTIONS</span>
                  <span className="block h-1 w-10 bg-custom-blue ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Repair & Overhaul Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive solutions for all your power equipment repair and restoration needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {repairServices.map((service, index) => (
                <Card key={index} className="overflow-hidden border-2 hover:border-custom-blue transition-all duration-300">
                  <div className="p-8">
                    <div className="mb-6">
                      {React.cloneElement(service.icon, { className: "h-10 w-10 text-[#2D6FBA]" })}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
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
                  <span className="text-blue-400 font-semibold tracking-wider">WHY PROFESSIONAL REPAIR MATTERS</span>
                  <span className="block h-1 w-10 bg-custom-blue ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Benefits of Expert Repair & Overhaul
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Investing in professional repair services delivers long-term value and peace of mind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {repairBenefits.map((benefit, index) => (
                <div key={index} className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-custom-blue transition-all duration-300">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-400">{benefit.title}</h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-custom-blue hover:bg-[#225488]">
                <Link to="/contact">Schedule Your Repair Service</Link>
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
                  <span className="text-[#2D6FBA] font-semibold tracking-wider">OUR SYSTEMATIC APPROACH</span>
                  <span className="block h-1 w-10 bg-custom-blue ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Repair Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to efficiently diagnose and resolve power system issues
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-custom-blue"></div>

                {/* Timeline items */}
                <div className="space-y-16">
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-custom-blue rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <h3 className="text-2xl font-bold mb-3 text-[#2D6FBA]">Initial Assessment & Diagnostics</h3>
                    <p className="text-muted-foreground mb-4">
                      Our technicians conduct a thorough inspection and diagnostic testing to identify the root cause of the issue
                      and any related problems that need addressing.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2D6FBA] mt-0.5 flex-shrink-0" />
                        <span>Comprehensive digital diagnostics using advanced testing equipment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2D6FBA] mt-0.5 flex-shrink-0" />
                        <span>Detailed inspection by certified technicians with specialized expertise</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-custom-blue rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <h3 className="text-2xl font-bold mb-3 text-[#2D6FBA]">Detailed Scope & Estimate</h3>
                    <p className="text-muted-foreground mb-4">
                      We provide a comprehensive scope of work and detailed cost estimate, explaining all required repairs,
                      parts, and labor before proceeding with any work.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2D6FBA] mt-0.5 flex-shrink-0" />
                        <span>Transparent pricing with detailed breakdown of all costs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2D6FBA] mt-0.5 flex-shrink-0" />
                        <span>Clear timeline expectations with completion estimates</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-custom-blue rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <h3 className="text-2xl font-bold mb-3 text-[#2D6FBA]">Parts Procurement</h3>
                    <p className="text-muted-foreground mb-4">
                      Our team sources genuine OEM parts or high-quality alternatives as specified, ensuring quick availability
                      for time-sensitive repairs.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2D6FBA] mt-0.5 flex-shrink-0" />
                        <span>Extensive parts inventory for common repair components</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2D6FBA] mt-0.5 flex-shrink-0" />
                        <span>Direct relationships with manufacturers for expedited shipping</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-custom-blue rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <h3 className="text-2xl font-bold mb-3 text-[#2D6FBA]">Skilled Repair Execution</h3>
                    <p className="text-muted-foreground mb-4">
                      Our certified technicians perform the necessary repairs or overhaul procedures according to manufacturer
                      specifications and industry best practices.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2D6FBA] mt-0.5 flex-shrink-0" />
                        <span>Factory-trained technicians with specialized certifications</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2D6FBA] mt-0.5 flex-shrink-0" />
                        <span>Advanced tooling and equipment for precise repairs</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-custom-blue rounded-full flex items-center justify-center text-white font-bold">5</div>
                    <h3 className="text-2xl font-bold mb-3 text-[#2D6FBA]">Testing & Quality Assurance</h3>
                    <p className="text-muted-foreground mb-4">
                      We conduct comprehensive post-repair testing under load conditions to ensure all systems function properly
                      and meet performance specifications.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2D6FBA] mt-0.5 flex-shrink-0" />
                        <span>Load bank testing to verify performance under various conditions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2D6FBA] mt-0.5 flex-shrink-0" />
                        <span>Detailed performance metrics verification and documentation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-custom-blue rounded-full flex items-center justify-center text-white font-bold">6</div>
                    <h3 className="text-2xl font-bold mb-3 text-[#2D6FBA]">Detailed Documentation & Warranty</h3>
                    <p className="text-muted-foreground mb-4">
                      We provide complete documentation of all work performed, parts replaced, and testing results, along with
                      warranty information for your records.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2D6FBA] mt-0.5 flex-shrink-0" />
                        <span>Comprehensive service reports with detailed findings</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2D6FBA] mt-0.5 flex-shrink-0" />
                        <span>Clear warranty terms and recommended follow-up service</span>
                      </li>
                    </ul>
                  </div>
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
                  <span className="text-[#2D6FBA] font-semibold tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
                  <span className="block h-1 w-10 bg-custom-blue ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Common Questions About Repairs
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Get answers to frequently asked questions about our repair and overhaul services
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

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-black to-blue-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Generator Repair or Overhaul Services?
              </h2>
              <p className="text-lg md:text-xl mb-10 text-gray-200">
                Contact our expert technicians today for fast, reliable repair services that get your power systems back to peak performance.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {/* Primary Button */}
                <Button
                  asChild
                  size="lg"
                  className="bg-[#2D6FBA] text-white border border-[#2D6FBA] hover:bg-[#225488] hover:border-[#225488] px-6 py-3 text-base min-w-[220px] rounded-lg font-medium transition-colors duration-200"
                >
                  <Link to="/contact">Request Repair Service</Link>
                </Button>

                {/* Secondary Button */}
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border border-white text-white hover:bg-white hover:text-[#2D6FBA] hover:border-[#2D6FBA] px-6 py-3 text-base min-w-[220px] rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <a href="tel:+919773851767" className="flex items-center gap-2">
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
          background-color: #2D6FBA !important;
        }
        .text-custom-blue {
          color: #2D6FBA !important;
        }
        .border-custom-blue {
          border-color: #2D6FBA !important;
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
