import { usePageHeadingTag } from "@/store/useCMSStore";
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Briefcase, Globe, Award, ArrowRight, Building, Hotel, Trophy } from 'lucide-react';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Import client logos
import ncc from '@/assets/Clients page/Ncc Limited.jpg'
import airindia from '@/assets/Clients page/Air_India.png'
import vistara from '@/assets/Clients page/Vistara.jpg'
import sikki from '@/assets/Clients page/Sikka.jpg'
import addidas from '@/assets/Clients page/Adidas.jpg'
import nationaldisas from '@/assets/Clients page/National Disaster.jpg'
import kec from '@/assets/Clients page/KEC.jpg'
import daikin from '@/assets/Clients page/Daikin.jpg'
import ignou from '@/assets/Clients page/Ignou.jpg'
import nccltd from '@/assets/Clients page/Ncc Limited.jpg'
import honeywell from '@/assets/Clients page/Honeywell.jpg'
import ace from '@/assets/Clients page/AceConstruction.jpg'
import mes from '@/assets/Clients page/MilitaryEngineerServices.png'
import rai from '@/assets/Clients page/Rai Foundation.jpg'
import nbcc from '@/assets/Clients page/NBCC.jpg'
import guru from '@/assets/Clients page/GuruTejBahadur.jpg'
import cec from '@/assets/Clients page/CEC.jpg'
import ojc from '@/assets/Clients page/OJC.jpg'
import seasons from '@/assets/Clients page/Seasons.jpg'
import dps from '@/assets/Clients page/DPS.jpg'
import gmr from '@/assets/Clients page/GMR Infra.jpg'
import britishpaints from '@/assets/Clients page/BristishPaints.jpg'
import vikas from '@/assets/Clients page/VikasPublishing.jpg'
import gepl from '@/assets/Clients page/GEPL.jpg'
import mapple from '@/assets/Clients page/Mapple.jpg'
import clarion from '@/assets/Clients page/Clarion.png'
import snp from '@/assets/Clients page/S&P Infra.jpg'
import afcons from '@/assets/Clients page/Afcons.png'
import comed from '@/assets/Clients page/Comed.png'
import kashyapi from '@/assets/Clients page/Kashyapi.png'
import SEO from '@/components/SEO';
import { useSectionData } from '@/store/useCMSStore';

const ValueClient = () => {
  const HeadingTag = usePageHeadingTag("value-client");
  const { data: rawCMSData } = useSectionData<any>("our-clients");
  const cmsData = rawCMSData || {};

  const heroHeading = cmsData.heroHeading || "Our Valued Clients";
  const heroSub = cmsData.heroSub || "Trusted by leading organizations across India for reliable power generation solutions.";

  const industrialClients = Array.isArray(cmsData.industrialClients) && cmsData.industrialClients.length > 0
    ? cmsData.industrialClients
    : [
        { name: "NCC Limited", logo: ncc },
        { name: "KEC", logo: kec },
        { name: "Honeywell", logo: honeywell },
        { name: "S&P Infra", logo: snp },
        { name: "Afcons", logo: afcons },
        { name: "Comed", logo: comed },
        { name: "Kashyapi", logo: kashyapi },
        { name: "GMR Infra", logo: gmr },
        { name: "vistara", logo: vistara },
        { name: "addidas", logo: addidas },
        { name: "daikin", logo: daikin },
        { name: "nccltd", logo: nccltd },
        { name: "guru", logo: guru },
        { name: "britishpaints", logo: britishpaints },
        { name: "vikas", logo: vikas },
        { name: "gepl", logo: gepl }
      ];

  const constructionClients = Array.isArray(cmsData.constructionClients) && cmsData.constructionClients.length > 0
    ? cmsData.constructionClients
    : [
        { name: "NBCC", logo: nbcc },
        { name: "Ace Construction", logo: ace },
        { name: "CEC", logo: cec },
        { name: "OJC", logo: ojc },
        { name: "Sikka", logo: sikki }
      ];

  const hospitalityClients = Array.isArray(cmsData.hospitalityClients) && cmsData.hospitalityClients.length > 0
    ? cmsData.hospitalityClients
    : [
        { name: "Mapple", logo: mapple },
        { name: "Seasons", logo: seasons },
        { name: "Clarion", logo: clarion }
      ];

  const governmentClients = Array.isArray(cmsData.governmentClients) && cmsData.governmentClients.length > 0
    ? cmsData.governmentClients
    : [
        { name: "Air India", logo: airindia },
        { name: "IGNOU", logo: ignou },
        { name: "Rai Foundation", logo: rai },
        { name: "Military Engineer Services", logo: mes },
        { name: "National Disaster", logo: nationaldisas }
      ];

  const testimonials = Array.isArray(cmsData.testimonials) && cmsData.testimonials.length > 0
    ? cmsData.testimonials
    : [
        {
          quote: "Kumar Power's expertise in power solutions has been instrumental in ensuring our operations run smoothly with zero downtime. Their installation team was professional and efficient.",
          author: "Operations Director",
          company: "Adani Group"
        },
        {
          quote: "We've been working with Kumar Power for over 5 years, and their reliable service and technical knowledge continue to exceed our expectations.",
          author: "Facility Manager",
          company: "Apollo Hospitals"
        },
        {
          quote: "The installation team at Kumar Power handled our complex power requirements with expertise. Their attention to detail and commitment to quality is commendable.",
          author: "Project Head",
          company: "NBCC Limited"
        }
      ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* <SEOJsonLD
        title="Our Valued Clients | Kumar Power"
        description="Kumar Power is trusted by leading organizations across industries. View our client portfolio and success stories."
        url="https://kumarpower.com/value-client"
        imageUrl="https://kumarpower.com/images/clients-showcase.jpg"
      /> */}

      <SEO
        title="Our Valuable Clients - Kumar Power"
        description="Our commitment to excellence, reliability, and innovation has earned us the trust of some of the most prestigious organizations in India and beyond"
        keywords="power certifications, electrical certification, Kumar Power"
        canonical="https://www.kumarpower.com/our-clients"
      />

      <main>
        {/* Hero Banner */}
        <div className="bg-black py-12 md:py-16">
          <div className="container mx-auto text-center px-4">
            <Badge className="mb-4 bg-[#2D6FBA] text-white hover:bg-[#2D6FBA]">Trusted Partnerships</Badge>
            <HeadingTag className="text-4xl md:text-5xl font-bold text-white mb-6">Our Valued Clients</HeadingTag>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powering success for leading organizations across diverse industries with reliable power solutions.
            </p>
            <Button asChild size="lg" className="bg-[#2D6FBA] hover:bg-[#2D6FBA]">
              <Link to="/contact">Become Our Client</Link>
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
                    <span className="block h-1 w-10 bg-[#2D6FBA] mr-3"></span>
                    <span className="text-[#2D6FBA] font-semibold tracking-wider">TRUSTED PARTNERSHIPS</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Powering Success Across Industries
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Kumar Power, we take pride in our diverse portfolio of clients spanning multiple
                  industries. From government institutions and healthcare facilities to industrial
                  powerhouses and hospitality leaders, we deliver tailored power solutions that meet
                  unique operational needs.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Our commitment to excellence, reliability, and innovation has earned us the trust of
                  some of the most prestigious organizations in India and beyond. We value these
                  partnerships and continuously strive to exceed expectations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-[#2D6FBA] hover:bg-[#2D6FBA]">
                    <Link to="/contact">Discuss Your Requirements</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className='hover:bg-black'>
                    <Link to="/products">View Our Services</Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src={ncc} alt="Client working with Kumar Power" className="w-full h-auto object-contain bg-white p-6" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src={kec} alt="Client partnership with Kumar Power" className="w-full h-auto object-contain bg-white p-6" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src={nbcc} alt="Kumar Power client installation" className="w-full h-auto object-contain bg-white p-6" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src={honeywell} alt="Kumar Power service delivery" className="w-full h-auto object-contain bg-white p-6" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Showcase */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-[#2D6FBA] mr-3"></span>
                  <span className="text-[#2D6FBA] font-semibold tracking-wider">OUR VALUED CLIENTS</span>
                  <span className="block h-1 w-10 bg-[#2D6FBA] ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Partners in Success
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're proud to work with organizations that demand the highest standards of performance and reliability
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8">
              {/* Combine all logos for this section */}
              {[...industrialClients, ...constructionClients, ...hospitalityClients, ...governmentClients].map((client, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-24 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industrial Sector */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-[#2D6FBA] mr-3"></span>
                  <span className="text-[#2D6FBA] font-semibold tracking-wider">INDUSTRIAL SECTOR</span>
                  <span className="block h-1 w-10 bg-[#2D6FBA] ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powering Industrial Excellence
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Delivering reliable power solutions for manufacturing, production, and critical infrastructure
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {industrialClients.map((client, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#2D6FBA] transition-all duration-300 flex flex-col items-center">
                  <div className="bg-white rounded-lg p-4 w-full h-32 flex items-center justify-center mb-4">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-24 max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center text-[#2D6FBA]">{client.name}</h3>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-[#2D6FBA] hover:bg-[#2D6FBA]">
                <Link to="/installation">Industrial Power Solutions</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Sector Expertise */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-[#2D6FBA] mr-3"></span>
                  <span className="text-[#2D6FBA] font-semibold tracking-wider">INDUSTRY EXPERTISE</span>
                  <span className="block h-1 w-10 bg-[#2D6FBA] ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Serving Diverse Industries
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our specialized power solutions are trusted across a wide range of sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="overflow-hidden border-2 hover:border-[#2D6FBA] transition-all duration-300">
                <div className="p-8">
                  <div className="mb-6">
                    <Building2 className="h-10 w-10 text-[#2D6FBA]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Construction</h3>
                  <p className="text-muted-foreground mb-6">
                    Reliable power for construction sites, ensuring project continuity and efficiency with minimal downtime.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {constructionClients.map((client, index) => (
                      <Badge key={index} className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                        {client.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border-2 hover:border-[#2D6FBA] transition-all duration-300">
                <div className="p-8">
                  <div className="mb-6">
                    <Hotel className="h-10 w-10 text-[#2D6FBA]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Hospitality</h3>
                  <p className="text-muted-foreground mb-6">
                    Uninterrupted power solutions for hotels and resorts, ensuring guest comfort and operational excellence.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {hospitalityClients.map((client, index) => (
                      <Badge key={index} className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                        {client.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border-2 hover:border-[#2D6FBA] transition-all duration-300">
                <div className="p-8">
                  <div className="mb-6">
                    <Globe className="h-10 w-10 text-[#2D6FBA]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Government</h3>
                  <p className="text-muted-foreground mb-6">
                    Secure and reliable power infrastructure for government institutions and critical public services.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {governmentClients.map((client, index) => (
                      <Badge key={index} className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                        {client.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border-2 hover:border-[#2D6FBA] transition-all duration-300">
                <div className="p-8">
                  <div className="mb-6">
                    <Building className="h-10 w-10 text-[#2D6FBA]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Commercial</h3>
                  <p className="text-muted-foreground mb-6">
                    Custom power solutions for businesses, ensuring operational continuity and protecting critical assets.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                      Daikin
                    </Badge>
                    <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                      British Paints
                    </Badge>
                    <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                      OJC
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-6 bg-[#2D6FBA] hover:bg-[#2D6FBA]">Join Our Client Portfolio</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Experience the Kumar Power Difference?
              </h2>
              <p className="text-xl md:text-2xl mb-10">
                Join the ranks of industry leaders who trust Kumar Power for their critical power needs.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button asChild size="lg" className="bg-[#2D6FBA] hover:bg-[#2D6FBA] text-lg px-8 py-4 h-14">
                  <Link to="/contact">Contact Our Team</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#2D6FBA] text-black hover:bg-black  text-lg px-8 py-4 h-14"
                >
                  <Link to="/products">Explore Our Solutions</Link>
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

export default ValueClient;
