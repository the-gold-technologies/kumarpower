import { LinkText } from "@/components/ui/LinkText";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import {
  ChevronRight,
  Filter,
  SlidersHorizontal,
  X,
  CheckCircle2,
  Download,
  BadgeCheckIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import hero from "@/assets/Products/HeropBG.png";
import range1 from "@/assets/Products/200CPCB.jpeg";
import optiprime from "@/assets/Products/OPTIPRIMEGEN.png";
import range360 from "@/assets/Products/320CPCB.jpeg";
import range2 from "@/assets/Products/15GAS.jpeg";
import range3 from "@/assets/Range3.png";
import range4 from "@/assets/Range4.png";
import range5 from "@/assets/Range5.png";
import range6 from "@/assets/Products/82.5CPCB.jpeg";
import DG1 from "@/assets/Products/7.5CPCB.jpeg";
import DG2 from "@/assets/Kumar Assets/320KVa.png";
import DG3 from "@/assets/Products/25CPCB.jpeg";
import DG4 from "@/assets/Kumar Assets/62.5KVA DG.png";
import DG5 from "@/assets/Products/750CPCB.jpeg";
import port from "@/assets/Products/2.1PORTABLE.jpeg";
import panel1 from "@/assets/Panel/Porcelin_clad_vaccum_circuit_breaker 1.png";
import panel2 from "@/assets/Products/Vacuum_circuit_breaker.png";
import panel3 from "@/assets/Panel/SF6_Circuit_breaker 1.png";
import panel4 from "@/assets/Panel/Unitised_package_substation 1.png";
import panel5 from "@/assets/Panel/Vacuum_circuit_breaker 2.png";
import panel6 from "@/assets/Panel/amf-panel-auto-synchronize-panels-24 1.png";
import panel7 from "@/assets/Panel/distribution_panel 1.png";
import panel8 from "@/assets/Panel/feeder-pillar2 1.png";
import servo1 from "@/assets/servo/servo1.png";
import servo2 from "@/assets/servo/servo2.png";
import trans1 from "@/assets/transformer/Trans1.png";
import trans2 from "@/assets/transformer/trans2.png";
import trans3 from "@/assets/transformer/trans3.png";
import Brochure from "@/assets/Brochure.pdf";
import GensetWorkingLimit from "@/assets/Brochure/genset working limit .pdf";
import Portfolio from "@/assets/Brochure/Portfolio.pdf";
import bharat from "@/assets/Brochure/Bharat rajptar .pdf";
// Import specific brochures for each generator type
import optiprimeBrochure from "@/assets/Brochure/OPTIPRIME- 117,400,500,640,1000,1500 & 2020 KVA.pdf";
import cpcb7To20 from "@/assets/Brochure/7.5-20 kVA.pdf";
import cpcb25To58 from "@/assets/Brochure/25-58.5.pdf";
import cpcb82To160 from "@/assets/Brochure/82.5-160.pdf";
import cpcb200To250 from "@/assets/Brochure/200-250.pdf";
import cpcb320To750 from "@/assets/Brochure/320-750.pdf";
import cpcb750To1500 from "@/assets/Brochure/750 kVA-1500 kVA.pdf";
import gasBrochure from "@/assets/Brochure/NEW CATELOG - GAS GENSET.pdf";
import petrolBrochure from "@/assets/Brochure/4.Kirloskar powergen_Sentinel series Genset.pdf";
import Direction76 from "@/assets/Brochure/Direction76.pdf";
import SEO from "@/components/SEO";
import { useSectionData } from "@/store/useCMSStore";

const Products = () => {
  const { data: rawCMSData } = useSectionData<any>("products");
  const cmsData = rawCMSData || {};

  const heroHeadingPart1 = cmsData.heroHeadingPart1 || "";
  const heroHeadingPart2 = cmsData.heroHeadingPart2 || "";
  const heroSub = cmsData.heroSub || "";
  const heroBg = cmsData.heroBg || hero;
  const btn1Text = cmsData.btn1Text || "";
  const btn1Url = cmsData.btn1Url || "";
  const btn2Text = cmsData.btn2Text || "";
  const btn2Url = cmsData.btn2Url || Portfolio;

  const sectionTitle = cmsData.sectionTitle || "";
  const sectionDesc = cmsData.sectionDesc || "";

  const certTitle = cmsData.certTitle || "";
  const helpTitle = cmsData.helpTitle || "";
  const helpSub = cmsData.helpSub || "";
  const helpBtnText = cmsData.helpBtnText || "";
  const whyChooseTitle = cmsData.whyChooseTitle || "";

    const stickyTextPart1 = cmsData.stickyTextPart1 || "";
  const stickyTextPart2 = cmsData.stickyTextPart2 || "";
  const downloadBtn1Label = cmsData.downloadBtn1Label || "";
  const downloadBtn1Url = cmsData.downloadBtn1Url || "";
  const downloadBtn2Label = cmsData.downloadBtn2Label || "";
  const downloadBtn2Url = cmsData.downloadBtn2Url || "";
  const talkBtnLabel = cmsData.talkBtnLabel || "";
  const requestBtnLabel = cmsData.requestBtnLabel || "";

  const whyChooseCard1Title = cmsData.whyChooseCard1Title || "";
  const whyChooseCard1Desc = cmsData.whyChooseCard1Desc || "";
  const whyChooseCard2Title = cmsData.whyChooseCard2Title || "";
  const whyChooseCard2Desc = cmsData.whyChooseCard2Desc || "";
  const whyChooseCard3Title = cmsData.whyChooseCard3Title || "";
  const whyChooseCard3Desc = cmsData.whyChooseCard3Desc || "";
  const whyChooseCard4Title = cmsData.whyChooseCard4Title || "";
  const whyChooseCard4Desc = cmsData.whyChooseCard4Desc || "";
  const whyChooseCard5Title = cmsData.whyChooseCard5Title || "";
  const whyChooseCard5Desc = cmsData.whyChooseCard5Desc || "";
  const whyChooseCard6Title = cmsData.whyChooseCard6Title || "";
  const whyChooseCard6Desc = cmsData.whyChooseCard6Desc || "";

  const cert1Title = cmsData.cert1Title || "";
  const cert2Title = cmsData.cert2Title || "";
  const cert3Title = cmsData.cert3Title || "";

  const [selectedCategory, setSelectedCategory] = useState<string>("diesel");
  const [sortBy, setSortBy] = useState<string>("popularity");
  const [powerRange, setPowerRange] = useState<string>("all");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showKirloskarDropdown, setShowKirloskarDropdown] = useState(true);

  // State for product specs modal
  const [showSpecsModal, setShowSpecsModal] = useState(false);
  const [selectedProductForSpecs, setSelectedProductForSpecs] =
    useState<any>(null);

  // Quote modal state
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<any>(null);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [quoteResult, setQuoteResult] = useState("");
  const [quoteSending, setQuoteSending] = useState(false);

  const openQuoteModal = (product: any) => {
    setQuoteProduct(product);
    setQuoteForm({
      name: "",
      email: "",
      phone: "",
      message: `I'm interested in ${product?.name || ""}`,
    });
    setShowQuoteModal(true);
  };

  const closeQuoteModal = () => {
    setShowQuoteModal(false);
    setQuoteProduct(null);
  };

  const handleQuoteChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setQuoteForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuoteResult("Sending....");
    setQuoteSending(true);
    try {
      const formEl = e.target as HTMLFormElement;
      const formData = new FormData(formEl);
      // append access_key and product name
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
      formData.append("product", quoteProduct?.name || "");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setQuoteResult("Form Submitted Successfully");
        formEl.reset();
        setQuoteForm({ name: "", email: "", phone: "", message: "" });
        // close modal after short delay
        setTimeout(() => {
          setShowQuoteModal(false);
          setQuoteResult("");
        }, 1800);
      } else {
        console.error("Error", data);
        setQuoteResult(data.message || "Submission failed");
      }
    } catch (err) {
      console.error(err);
      setQuoteResult("Submission error");
    } finally {
      setQuoteSending(false);
    }
  };

  // Define generator products based on the images
  const fallbackProductCategories = [
    {
      id: "7.5 kVA to 20 kVA",
      name: "Kirloskar Diesel generators",
      image: DG1,
      fuelType: "Diesel",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Three Phase",
      ratingCount: 153,
      rating: 4.8,
      range: "7.5 kVA to 20 kVA",
      category: "diesel",
      description:
        "Our range of diesel generators are designed for maximum performance and reliability. Our generators meet the latest CPCB norms and are built for Indian conditions.",
      technicalSpecs: `Engineered specifically for compact power needs, this range utilizes the robust Kirloskar R550 series engines, known for their naturally aspirated design and reliable G2 class mechanical governing. These units are optimized for low-load operations, consuming approximately 2-3 Liters per hour at 75% load, making them highly economical. The silent canopy design ensures noise levels remain below 75 dBA at 1 meter, making these generators the ideal choice for small retail shops, clinics, residential backup, and small offices where silence is as important as power.`,
      productLink: "/products/kirloskar-diesel-generator",
    },
    {
      id: "15 kVA to 250 kVA",
      name: "Kirloskar Gas Generators",
      image: range2,
      fuelType: "Natural Gas/CNG",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Single/Three Phase",
      ratingCount: 145,
      rating: 4.6,
      range: "15 kVA to 250 kVA",
      category: "gas",
      description:
        "Eco-friendly and efficient, our gas generators provide clean power with lower emissions and reduced operating costs.",
      technicalSpecs: `Utilizing state-of-the-art gas engine technology, this range offers a greener footprint with extremely low NOx and PM emissions that exceed CPCB norms. The engines employ stoichiometric combustion to ensure high thermal efficiency, resulting in operating costs that are 40-50% lower than comparable diesel gensets. With inherent fuel flexibility (compatible with Natural Gas, CNG, and LPG) and a quieter combustion process, these generators are ideal for urban areas with strict pollution norms, green buildings, and cost-conscious businesses.`,
      productLink: "/products/kirloskar-gas-generator",
    },
    {
      id: "2.1 kVA to 5 kVA",
      name: "Kirloskar Portable Generators",
      image: port,
      fuelType: "Gasoline",
      cpcbNorm: "CPCB-IV+",
      cooling: "Air",
      phase: "Single Phase",
      ratingCount: 210,
      rating: 4.5,
      range: "2.1 kVA to 5 kVA",
      category: "portable",
      description:
        "Compact and versatile generators perfect for homes, small businesses, construction sites, and outdoor events.",
      technicalSpecs: `These lightweight and mobile power solutions are designed for "on-the-go" reliability. Featuring ergonomic designs with wheels and handles on select models, they offer easy mobility for any user. The units come with options for easy recoil start or electric start and feature copper-wound alternators for stable voltage output. Equipped with circuit breaker protection and oil alert systems to prevent damage, they are ideal for food trucks, camping trips, home backup for lights and fans, and operating small construction tools.`,
      productLink: "/products/kirloskar-portable-generator",
    },
    {
      id: "optiprime-product-1",
      name: "Kirloskar Optiprime Generator",
      image: optiprime,
      fuelType: "Diesel",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Three Phase",
      ratingCount: 195,
      rating: 4.8,
      range: "100 kVA",
      category: "optiprime",
      description:
        "Kirloskar Optiprime series are advanced generators offering superior fuel efficiency and smart monitoring for optimized performance.",
      technicalSpecs: `The Optiprime series represents the next evolution in generator efficiency, utilizing variable speed and optimized fuel mapping technology. This advanced system delivers significantly better fuel economy at partial loads compared to standard generators, drastically reducing running costs. It comes integrated with an IoT device for real-time health monitoring and predictive maintenance, ensuring maximum uptime. Housed in an enhanced canopy for superior weather protection, the Optiprime is the perfect solution for telecom towers, ATMs, and remote sites with varying load patterns.`,
      productLink: "/products/optiprime",
    },
    {
      id: " (AMF) Panels",
      name: " AMF Panels",
      image: panel6,
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Fan/Natural",
      phase: "Three Phase",
      ratingCount: 112,
      rating: 4.7,
      range: "Various",
      category: "electrical",
      description:
        "High-quality electrical panels for power distribution, control, and protection of your electrical systems.",
      technicalSpecs: `Our Auto Mains Failure (AMF) panels are engineered for seamless power transition, featuring a microprocessor-based controller that manages automatic start/stop logic with precision. The panels utilize high-quality contactors or motorized breakers for reliable changeover operations. Comprehensive protection logic safeguards the load from voltage fluctuations, phase reversals, and frequency errors. The interface includes clear LED/LCD indications for Mains and DG status, ensuring operators have full visibility of the power system at all times.`,
      productLink: "/products/panels",
    },
    {
      id: "single-phase-servo",
      name: "Oil Cooled Servo Stabilizers",
      image: servo1,
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Air/Oil",
      phase: "Single Phase",
      ratingCount: 134,
      rating: 4.5,
      range: "5-100 kVA",
      category: "servo",
      description:
        "Reliable servo stabilizers to protect your equipment from voltage fluctuations and ensure consistent power supply.",
      technicalSpecs: `This range delivers precision voltage correction using advanced oil-immersed technology, making it ideal for heavy-duty cycles. It achieves correction speeds greater than 20V per second with an output voltage regulation accuracy of ±1%. The oil-cooled design ensures superior heat dissipation, extending component life. Built with high-grade variacs (toroidal transformers) and buck-boost transformers, it offers comprehensive protection including low/high voltage cutoffs and overload protection, ensuring total safety for connected equipment.`,
      productLink: "/products/servo-stabilizer",
    },
    {
      id: "distribution-transformer",
      name: "Distribution Transformers",
      image: trans1,
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Oil/Dry",
      phase: "Three Phase",
      ratingCount: 88,
      rating: 4.8,
      range: "100-2500 kVA",
      category: "transformers",
      description:
        "Durable and efficient transformers designed for various industrial and commercial applications.",
      technicalSpecs: `These reliable step-down transformers are crafted for utility and industrial use, featuring a core made from CRGO (Cold Rolled Grain Oriented) silicon steel laminations to minimize losses. The windings are constructed from high-quality Electrolytic Copper or Aluminum with robust paper insulation. Utilizing ONAN (Oil Natural Air Natural) cooling and complying with IS 1180 energy efficiency levels, they include an off-circuit tap changer, allowing for precise voltage adjustments to match network requirements.`,
      productLink: "/products/transformers",
    },
  ];
  
  const ALLProductCategories = Array.isArray(cmsData.categories) ? cmsData.categories : [];

  // Filter products based on selected category
  const getDisplayProducts = () => {
    // Filter by power range if applicable
    const filterByPowerRange = (products) => {
      if (powerRange === "all") return products;

      return products.filter((product) => {
        // Skip filtering non-generator products that don't have power ratings
        if (!product.range || product.range === "Various") return true;

        // Extract numbers from the range string (e.g., "7.5 - 20 kVA" => [7.5, 20])
        const rangeValues = product.range.match(/[\d.]+/g)?.map(Number) || [];

        // If we can't parse the range properly, include the product
        if (rangeValues.length === 0) return true;

        // Get the maximum value in the range (typically the second number)
        const maxValue = Math.max(...rangeValues);
        // Get the minimum value in the range (typically the first number)
        const minValue = Math.min(...rangeValues);

        if (powerRange === "small") {
          // Small: Up to 50 kVA
          return maxValue <= 50;
        } else if (powerRange === "medium") {
          // Medium: 50-250 kVA
          return minValue <= 250 && maxValue >= 50;
        } else if (powerRange === "large") {
          // Large: 250+ kVA
          return maxValue > 250;
        }
        return true;
      });
    };

    // Sort products based on sort option
    const sortProducts = (products) => {
      // For diesel generators, always maintain ascending kVA order regardless of sort option
      if (selectedCategory === "diesel") {
        return products; // Return in the predefined ascending order
      }

      if (sortBy === "rating") {
        return [...products].sort((a, b) => b.rating - a.rating);
      } else if (sortBy === "popularity") {
        return [...products].sort((a, b) => b.ratingCount - a.ratingCount);
      }
      // Add other sorting options like price if needed
      return products;
    };
  };

  // Get the current category display name

  // SEO metadata
  const seoData = {
    title: "Power Equipment Products | Kumar Power",
    description:
      "Browse our full range of Kirloskar-certified diesel generators, electrical panels, transformers and more power solutions for all your industrial needs.",
    url: "https://kumarpower.com/products",
    imageUrl: "https://kumarpower.com/images/products-header.jpg",
  };

  //Function to open the specs modal
  const openSpecsModal = (product) => {
    setSelectedProductForSpecs(product);
    setShowSpecsModal(true);
  };

  return (
    <>
      {/* <SEOJsonLD
        title={seoData.title}
        description={seoData.description}
        url={seoData.url}
        imageUrl={seoData.imageUrl}
      /> */}

      <SEO
        title="Kumar Power - Our Products List"
        description="Kumar Power Products ensure high-quality power solutions, compliance standards, and trusted electrical services across India."
        keywords="power certifications, electrical certification, Kumar Power"
        canonical="https://www.kumarpower.com/products"
      />

      <Header />

      <main className="bg-black min-h-screen">
        {/* Hero Banner */}
        <div className="relative bg-black text-white h-[320px] md:h-[450px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroBg})`,
              filter: "brightness(0.5)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-24 flex flex-col gap-4 h-full justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-2xl">
              {heroHeadingPart1} <span className="text-[#2D6FBA]">{heroHeadingPart2}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl"><LinkText text={heroSub} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full max-w-xs sm:max-w-none">
              <Button
                size="lg"
                variant="default"
                className="bg-[#2D6FBA] hover:bg-[#225488] w-full sm:w-auto"
              >
                <Link to={btn1Url}>{btn1Text}</Link>
              </Button>
              <a href={btn2Url} download>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  {btn2Text}
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Product Selection Area */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-5">
                <h2 className="text-xl font-bold text-white">{sectionTitle}</h2>
                <p className="text-gray-400 mt-1 text-sm"><LinkText text={sectionDesc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {ALLProductCategories.map((product: any) => (
                  <Card
                    key={product.id}
                    className="overflow-hidden border border-gray-700 rounded-md bg-gray-800 hover:bg-gray-750"
                  >
                    <div>
                      <div className="aspect-w-16 aspect-h-9 bg-gray-700 overflow-hidden h-40 sm:h-48">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full bg-white object-contain"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-sm text-white justify-center items-center flex">
                          {product.name}
                        </h3>

                        <div className="mt-3 flex flex-col sm:flex-row gap-2 sm:gap-1 justify-center items-center">
                          <a
                            className="h-7 text-xs flex items-center gap-1 py-0 px-2 border-gray-600 text-gray-300 bg-[#2D6FBA] hover:bg-[#225488] rounded-sm"
                            href={product.productLink}
                          >
                            Explore More <ChevronRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Kumar Power Info */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-400 pt-3 gap-2">
            <div>
              <span className="font-medium text-[#2D6FBA]">{stickyTextPart1}</span>{" "}
              {stickyTextPart2}
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
              {/* Download Button */}

              {/* New Bharat Rajpat Button */}
              <a href={downloadBtn1Url} download>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1 text-xs h-7 p-4 bg-white/20 text-gray-400 hover:bg-[#2D6FBA] hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  {downloadBtn1Label}
                </Button>
              </a>

              <a href={downloadBtn2Url} download>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1 text-xs h-7 p-4 bg-white/20 text-gray-400 hover:bg-[#2D6FBA] hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  {downloadBtn2Label}
                </Button>
              </a>

              {/* Talk Button */}
              <Button
                onClick={() => {
                  window.location.href = "/contact";
                }}
                variant="ghost"
                size="sm"
                className="bg-white/20 flex items-center gap-1 text-xs h-7 p-4 text-gray-400 hover:bg-[#2D6FBA] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                {talkBtnLabel}
              </Button>

              {/* Request Quote Button */}
              <Button
                variant="ghost"
                size="sm"
                className="bg-[#2D6FBA] flex items-center gap-1 text-xs h-7 p-4 text-white hover:bg-[#225488] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                <Link to="/contact">{requestBtnLabel}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Why Choose Kirloskar Generators Section */}
        <section className="bg-[#E5E7EB] text-gray-800 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-2 sm:px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-10">
              {whyChooseTitle}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* {whyChooseCard1Title} */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <div className="mb-4" style={{ color: "#2D6FBA" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-1">
                  {whyChooseCard1Title}
                </h3>
                <p className="text-sm text-gray-600"><LinkText text={whyChooseCard1Desc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              </div>

              {/* {whyChooseCard2Title} */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <div className="mb-4" style={{ color: "#2D6FBA" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-1">
                  {whyChooseCard2Title}
                </h3>
                <p className="text-sm text-gray-600"><LinkText text={whyChooseCard2Desc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              </div>

              {/* {whyChooseCard3Title} */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <div className="mb-4" style={{ color: "#2D6FBA" }}>
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
                </div>
                <h3 className="text-base font-semibold mb-1">{whyChooseCard3Title}</h3>
                <p className="text-sm text-gray-600"><LinkText text={whyChooseCard3Desc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              </div>

              {/* {whyChooseCard4Title} */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <div className="mb-4" style={{ color: "#2D6FBA" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                    <path d="M10.002 4.646a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.707-.708L11.293 7 10.002 5.707a.5.5 0 0 1 0-.708zm-6.293 0a.5.5 0 0 0-.707 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .707-.708L1.707 7l2.001-1.293a.5.5 0 0 0 0-.708z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-1">
                  {whyChooseCard4Title}
                </h3>
                <p className="text-sm text-gray-600"><LinkText text={whyChooseCard4Desc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              </div>

              {/* {whyChooseCard5Title} */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <div className="mb-4" style={{ color: "#2D6FBA" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-1">
                  {whyChooseCard5Title}
                </h3>
                <p className="text-sm text-gray-600"><LinkText text={whyChooseCard5Desc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              </div>

              {/* {whyChooseCard6Title} */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <div className="mb-4" style={{ color: "#2D6FBA" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-1">{whyChooseCard6Title}</h3>
                <p className="text-sm text-gray-600"><LinkText text={whyChooseCard6Desc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="bg-black text-white py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-2 sm:px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
              {certTitle}
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-14">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-md bg-gray-800">
                  <BadgeCheckIcon
                    className="w-8 h-8"
                    style={{ color: "#2D6FBA" }}
                  />
                </div>
                <p className="font-medium text-sm text-gray-300"><LinkText text={cert1Title} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-md bg-gray-800">
                  <BadgeCheckIcon
                    className="w-8 h-8"
                    style={{ color: "#2D6FBA" }}
                  />
                </div>
                <p className="font-medium text-sm text-gray-300"><LinkText text={cert2Title} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-md bg-gray-800">
                  <BadgeCheckIcon
                    className="w-8 h-8"
                    style={{ color: "#2D6FBA" }}
                  />
                </div>
                <p className="font-medium text-sm text-gray-300"><LinkText text={cert3Title} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-8 sm:py-12 bg-[#AAAAAA]">
          <div className="max-w-4xl mx-auto px-2 sm:px-4 text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">
              {helpTitle}
            </h2>
            <p className="text-xs sm:text-sm text-black mb-6"><LinkText text={helpSub} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
            <div className="flex w-full items-center justify-center">
              <Button
                onClick={() => {
                  window.location.href = "/contact";
                }}
                variant="default"
                size="sm"
                className=" bg-white p-4 hover:bg-gray-100 text-gray-800 border border-gray-300 flex items-center justify-center gap-1 font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                {helpBtnText}
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Product Specifications Modal */}
      <Dialog open={showSpecsModal} onOpenChange={setShowSpecsModal}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          {selectedProductForSpecs && (
            <>
              <DialogHeader>
                <DialogTitle className="text-lg sm:text-xl">
                  {selectedProductForSpecs.name} Specifications
                </DialogTitle>
                <DialogDescription className="text-gray-500">
                  <LinkText text={selectedProductForSpecs.description} linkClassName="text-[#2D6FBA] hover:underline font-bold" />
                </DialogDescription>
              </DialogHeader>

              {/* Technical Specifications Section */}
              <div className="mt-4">
                <h3 className="font-semibold text-base mb-2">
                  Technical Specifications:
                </h3>
                <div className="bg-gray-50 rounded-md p-4 text-sm">
                  {/* We now use the specific technicalSpecs data from the product object instead of generic category blocks */}
                  <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                    <LinkText text={selectedProductForSpecs.technicalSpecs} linkClassName="text-[#2D6FBA] hover:underline font-bold" />
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 pt-4 border-t">
                <Button
                  size="sm"
                  variant="default"
                  className="bg-[#2D6FBA] hover:bg-[#225488] w-full sm:w-auto"
                >
                  <Link to="/contact">Request Quote </Link>
                </Button>
                {/* Only show brochure button for generator categories */}
                {["diesel", "gas", "portable", "optiprime"].includes(
                  selectedProductForSpecs.category,
                ) && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-1 w-full sm:w-auto"
                  >
                    <Download className="w-4 h-4" />
                    <a
                      href={
                        selectedProductForSpecs.category === "diesel"
                          ? selectedProductForSpecs.range.includes("7.5") ||
                            selectedProductForSpecs.range.includes("7.5 - 20")
                            ? cpcb7To20
                            : selectedProductForSpecs.range.includes("58") ||
                                selectedProductForSpecs.range.includes(
                                  "25 - 58.5",
                                )
                              ? cpcb25To58
                              : selectedProductForSpecs.range.includes(
                                    "82.5",
                                  ) ||
                                  selectedProductForSpecs.range.includes(
                                    "82.5 - 160",
                                  )
                                ? cpcb82To160
                                : selectedProductForSpecs.range.includes(
                                      "250",
                                    ) ||
                                    selectedProductForSpecs.range.includes(
                                      "200 - 250",
                                    ) ||
                                    selectedProductForSpecs.id.includes(
                                      "200 kVA to 250 kVA",
                                    )
                                  ? cpcb200To250
                                  : selectedProductForSpecs.range.includes(
                                        "320",
                                      ) ||
                                      selectedProductForSpecs.range.includes(
                                        "320 - 750",
                                      )
                                    ? cpcb320To750
                                    : selectedProductForSpecs.range.includes(
                                          "750",
                                        ) ||
                                        selectedProductForSpecs.range.includes(
                                          "750 - 1500",
                                        )
                                      ? cpcb750To1500
                                      : Brochure
                          : selectedProductForSpecs.category === "gas"
                            ? gasBrochure
                            : selectedProductForSpecs.category === "portable"
                              ? petrolBrochure
                              : selectedProductForSpecs.category === "optiprime"
                                ? optiprimeBrochure
                                : Brochure
                      }
                      download={
                        selectedProductForSpecs.category === "diesel"
                          ? `Kirloskar ${selectedProductForSpecs.range} Diesel Generator Brochure.pdf`
                          : selectedProductForSpecs.category === "gas"
                            ? "Kirloskar Gas Generator Brochure.pdf"
                            : selectedProductForSpecs.category === "portable"
                              ? "Kirloskar Portable Generator Brochure.pdf"
                              : selectedProductForSpecs.category === "optiprime"
                                ? "Kirloskar Optiprime Generator Brochure.pdf"
                                : "Generator Brochure.pdf"
                      }
                    >
                      Brochure
                    </a>
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Quote Modal */}
      <Dialog open={showQuoteModal} onOpenChange={setShowQuoteModal}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Request a Quote</DialogTitle>
            <DialogDescription>
              Provide your contact details and product information. We'll
              contact you shortly.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={handleQuoteSubmit}
            className="flex text-black flex-col gap-3 mt-4"
          >
            <div>
              <label className="block text-sm mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                value={quoteForm.name}
                onChange={handleQuoteChange}
                required
                className="w-full text-black px-3 py-2 rounded bg-white border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={quoteForm.email}
                onChange={handleQuoteChange}
                required
                className="w-full text-black px-3 py-2 rounded bg-white border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                name="phone"
                type="tel"
                value={quoteForm.phone}
                onChange={handleQuoteChange}
                required
                className="w-full text-black px-3 py-2 rounded bg-white border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                value={quoteForm.message}
                onChange={handleQuoteChange}
                rows={4}
                className="w-full text-black px-3 py-2 rounded bg-white border border-gray-300"
              />
            </div>

            <div className="flex gap-2 mt-2">
              <Button
                type="submit"
                className="bg-[#2D6FBA] hover:bg-[#225488] "
                disabled={quoteSending}
              >
                {quoteSending ? "Sending..." : "Send Quote"}
              </Button>
              <Button variant="outline" onClick={closeQuoteModal}>
                Cancel
              </Button>
            </div>
            {quoteResult && (
              <div className="mt-2">
                <span className="text-sm text-gray-500">{quoteResult}</span>
              </div>
            )}
          </form>
        </DialogContent>
      </Dialog>

      {/* FIXED: Use a standard <style> tag instead of <style jsx global> */}
      <style>
        {`
          .bg-custom-blue {
            background-color: #2D6FBA !important;
          }
          .text-custom-blue {
            color: #2D6FBA !important;
          }
          .hover\\:bg-custom-blue:hover {
            background-color: #225488 !important;
          }
        `}
      </style>

      <Footer />
    </>
  );
};

export default Products;
