import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  PhoneCall,
  Clock,
  Truck,
  Zap,
  AlertTriangle,
  Shield,
  Headset,
  LifeBuoy,
  Siren,
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
import { Badge } from "@/components/ui/badge";
import { LinkText } from "@/components/ui/LinkText";
import { useSectionData, usePageHeadingTag } from "@/store/useCMSStore";

const iconMap: Record<string, React.ReactNode> = {
  PhoneCall: <PhoneCall className="h-10 w-10 text-[#2D6FBA]" />,
  Clock: <Clock className="h-10 w-10 text-[#2D6FBA]" />,
  Truck: <Truck className="h-10 w-10 text-[#2D6FBA]" />,
  Zap: <Zap className="h-10 w-10 text-[#2D6FBA]" />,
  AlertTriangle: <AlertTriangle className="h-10 w-10 text-[#2D6FBA]" />,
  Shield: <Shield className="h-10 w-10 text-[#2D6FBA]" />,
  Siren: <Siren className="h-8 w-8 text-[#2D6FBA] mb-3" />,
  LifeBuoy: <LifeBuoy className="h-8 w-8 text-[#2D6FBA] mb-3" />,
  Headset: <Headset className="h-8 w-8 text-[#2D6FBA] mb-3" />,
};

const EmergencySupportService: React.FC = () => {
  const HeadingTag = usePageHeadingTag("emergency-support");
  const { data: cmsData = {} } = useSectionData<any>(
    "emergency-support",
    "emergency-support"
  );

  const heroTagline = cmsData.heroTagline || "";
  const heroHeading = cmsData.heroHeading || "";
  const heroSub = cmsData.heroSub || "";
  const emergencyPhone = cmsData.emergencyPhone || "";

  const introTagline = cmsData.introTagline || "";
  const introTitle = cmsData.introTitle || "";
  const introDesc = cmsData.introDesc || "";
  const introHotlineLabel = cmsData.introHotlineLabel || "";
  const introBtn2Label = cmsData.introBtn2Label || "";
  const introBtn2Link = cmsData.introBtn2Link || "";
  const introImage = cmsData.introImage || "";

  const statsTagline = cmsData.statsTagline || "";
  const statsHeading = cmsData.statsHeading || "";
  const statsSub = cmsData.statsSub || "";
  const responseStats = Array.isArray(cmsData.responseStats) ? cmsData.responseStats : [];

  const benefitsTagline = cmsData.benefitsTagline || "";
  const benefitsHeading = cmsData.benefitsHeading || "";
  const benefitsSub = cmsData.benefitsSub || "";
  const serviceBenefits = Array.isArray(cmsData.serviceBenefits) ? cmsData.serviceBenefits : [];

  const processTagline = cmsData.processTagline || "";
  const processHeading = cmsData.processHeading || "";
  const processSub = cmsData.processSub || "";
  const processSteps = Array.isArray(cmsData.processSteps) ? cmsData.processSteps : [];

  const scenariosTagline = cmsData.scenariosTagline || "";
  const scenariosHeading = cmsData.scenariosHeading || "";
  const scenariosSub = cmsData.scenariosSub || "";
  const emergencyScenarios = Array.isArray(cmsData.emergencyScenarios) ? cmsData.emergencyScenarios : [];

  const faqTagline = cmsData.faqTagline || "";
  const faqHeading = cmsData.faqHeading || "";
  const faqSub = cmsData.faqSub || "";
  const faqs = Array.isArray(cmsData.faqs) ? cmsData.faqs : [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEOJsonLD />

      <SEO
        pageSlug="emergency-support"
        title="Reliable 24/7 Emergency Support - Kumar Power"
        description="Kumar Power's emergency response team is available 24 hours a day, 7 days a week, 365 days a year to ensure your operations can continue without disruption."
      />

      <main>
        {/* Hero Banner */}
        <div className="bg-black py-12 md:py-16">
          <div className="container mx-auto text-center px-4">
            {heroTagline && (
              <Badge className="mb-4 bg-[#2D6FBA] text-white hover:bg-[#225488]">
                {heroTagline}
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
            {emergencyPhone && (
              <Button
                asChild
                size="lg"
                className="bg-[#2D6FBA] hover:bg-[#225488] text-white"
              >
                <a href={`tel:${emergencyPhone}`} className="flex items-center gap-2">
                  <PhoneCall size={20} /> Emergency Hotline
                </a>
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
                      <span className="block h-1 w-10 bg-[#2D6FBA] mr-3" />
                      <span className="text-[#2D6FBA] font-semibold tracking-wider">
                        {introTagline}
                      </span>
                    </div>
                  </div>
                )}
                {introTitle && (
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {introTitle}
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
                  {emergencyPhone && (
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#2D6FBA] hover:bg-[#225488] text-white"
                    >
                      <a
                        href={`tel:${emergencyPhone}`}
                        className="flex items-center gap-2"
                      >
                        <PhoneCall size={20} /> {introHotlineLabel}
                      </a>
                    </Button>
                  )}
                  {introBtn2Label && (
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border border-[#2D6FBA] text-[#2D6FBA] hover:bg-[#2D6FBA] hover:text-white hover:border-[#225488] transition-colors duration-200"
                    >
                      {introBtn2Link.startsWith("http") || introBtn2Link.startsWith("tel:") ? (
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
                    alt="Emergency generator service technician"
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Response Statistics */}
        {responseStats.length > 0 && (
          <section className="py-16 md:py-24 bg-black text-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                {statsTagline && (
                  <div className="inline-block mb-4">
                    <div className="flex items-center justify-center">
                      <span className="block h-1 w-10 bg-[#2D6FBA] mr-3" />
                      <span className="text-[#2D6FBA] font-semibold tracking-wider">
                        {statsTagline}
                      </span>
                      <span className="block h-1 w-10 bg-[#2D6FBA] ml-3" />
                    </div>
                  </div>
                )}
                {statsHeading && (
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {statsHeading}
                  </h2>
                )}
                {statsSub && (
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    <LinkText
                      text={statsSub}
                      linkClassName="text-[#2D6FBA] hover:underline font-bold"
                    />
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {responseStats.map((stat: any, index: number) => (
                  <div
                    key={index}
                    className="text-center p-8 bg-gray-900 rounded-lg border border-gray-800 hover:border-[#2D6FBA] transition-all duration-300"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-[#2D6FBA] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xl font-semibold mb-3 text-white">
                      {stat.label}
                    </div>
                    <p className="text-gray-300">
                      <LinkText
                        text={stat.description}
                        linkClassName="text-[#2D6FBA] hover:underline font-bold"
                      />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Emergency Service Benefits */}
        {serviceBenefits.length > 0 && (
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                {benefitsTagline && (
                  <div className="inline-block mb-4">
                    <div className="flex items-center justify-center">
                      <span className="block h-1 w-10 bg-[#2D6FBA] mr-3" />
                      <span className="text-[#2D6FBA] font-semibold tracking-wider">
                        {benefitsTagline}
                      </span>
                      <span className="block h-1 w-10 bg-[#2D6FBA] ml-3" />
                    </div>
                  </div>
                )}
                {benefitsHeading && (
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {benefitsHeading}
                  </h2>
                )}
                {benefitsSub && (
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    <LinkText
                      text={benefitsSub}
                      linkClassName="text-[#2D6FBA] hover:underline font-bold"
                    />
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceBenefits.map((benefit: any, index: number) => {
                  const iconNode = (benefit.icon && iconMap[benefit.icon]) || (
                    <PhoneCall className="h-10 w-10 text-[#2D6FBA]" />
                  );
                  return (
                    <Card
                      key={index}
                      className="p-8 border-2 hover:border-[#2D6FBA] transition-all duration-300"
                    >
                      <div className="mb-6">{iconNode}</div>
                      <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground">
                        <LinkText
                          text={benefit.description}
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

        {/* Emergency Response Process */}
        {processSteps.length > 0 && (
          <section className="py-16 md:py-24 bg-black text-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                {processTagline && (
                  <div className="inline-block mb-4">
                    <div className="flex items-center justify-center">
                      <span className="block h-1 w-10 bg-[#2D6FBA] mr-3" />
                      <span className="text-[#2D6FBA] font-semibold tracking-wider">
                        {processTagline}
                      </span>
                      <span className="block h-1 w-10 bg-[#2D6FBA] ml-3" />
                    </div>
                  </div>
                )}
                {processHeading && (
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
                    {processSteps.map((step: any, idx: number) => (
                      <div key={idx} className="relative pl-12 md:pl-20">
                        <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-[#2D6FBA] rounded-full flex items-center justify-center text-white font-bold">
                          {step.step || idx + 1}
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-[#2D6FBA]">
                          {step.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          <LinkText
                            text={step.description}
                            linkClassName="text-[#2D6FBA] hover:underline font-bold"
                          />
                        </p>
                        {Array.isArray(step.points) && step.points.length > 0 && (
                          <ul className="space-y-2">
                            {step.points.map((pt: string, pIdx: number) => (
                              <li key={pIdx} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-[#2D6FBA] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300">{pt}</span>
                              </li>
                            ))}
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

        {/* Common Emergency Scenarios */}
        {emergencyScenarios.length > 0 && (
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                {scenariosTagline && (
                  <div className="inline-block mb-4">
                    <div className="flex items-center justify-center">
                      <span className="block h-1 w-10 bg-[#2D6FBA] mr-3" />
                      <span className="text-[#2D6FBA] font-semibold tracking-wider">
                        {scenariosTagline}
                      </span>
                      <span className="block h-1 w-10 bg-[#2D6FBA] ml-3" />
                    </div>
                  </div>
                )}
                {scenariosHeading && (
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {scenariosHeading}
                  </h2>
                )}
                {scenariosSub && (
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    <LinkText
                      text={scenariosSub}
                      linkClassName="text-[#2D6FBA] hover:underline font-bold"
                    />
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {emergencyScenarios.map((scenario: any, index: number) => {
                  const iconNode = (scenario.icon && iconMap[scenario.icon]) || (
                    <AlertTriangle className="h-8 w-8 text-[#2D6FBA] mb-3 mx-auto" />
                  );
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-[#2D6FBA] text-center"
                    >
                      <div className="flex justify-center mb-2">{iconNode}</div>
                      <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>
                      <p className="text-muted-foreground">
                        <LinkText
                          text={scenario.description}
                          linkClassName="text-[#2D6FBA] hover:underline font-bold"
                        />
                      </p>
                    </div>
                  );
                })}
              </div>
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
                      <span className="block h-1 w-10 bg-[#2D6FBA] mr-3" />
                      <span className="text-[#2D6FBA] font-semibold tracking-wider">
                        {faqTagline}
                      </span>
                      <span className="block h-1 w-10 bg-[#2D6FBA] ml-3" />
                    </div>
                  </div>
                )}
                {faqHeading && (
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {faqHeading}
                  </h2>
                )}
                {faqSub && (
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
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
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-[#2D6FBA]">
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

export default EmergencySupportService;
