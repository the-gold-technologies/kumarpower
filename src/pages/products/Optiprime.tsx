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
import { Helmet } from "react-helmet-async";
import { useSectionData } from "@/store/useCMSStore";

const Products = () => {
  const { data: rawCMSData } = useSectionData<any>("optiprime");
  const cmsData = rawCMSData || {};
  const { data: productsRawCMSData } = useSectionData<any>("products");
  const productsCMSData = productsRawCMSData || {};

  const heroHeadingPart1 = cmsData.heroHeadingPart1 || "";
  const heroHeadingPart2 = cmsData.heroHeadingPart2 || "";
  const heroSub = cmsData.heroSub || "";
  const heroBg = cmsData.heroBg || hero;

  const sectionTitle = cmsData.sectionTitle || "";
  const sectionDesc = cmsData.sectionDesc || "";

  const whyChooseCard1Title = productsCMSData.whyChooseCard1Title || "";
  const whyChooseCard1Desc = productsCMSData.whyChooseCard1Desc || "";
  const whyChooseCard2Title = productsCMSData.whyChooseCard2Title || "";
  const whyChooseCard2Desc = productsCMSData.whyChooseCard2Desc || "";
  const whyChooseCard3Title = productsCMSData.whyChooseCard3Title || "";
  const whyChooseCard3Desc = productsCMSData.whyChooseCard3Desc || "";
  const whyChooseCard4Title = productsCMSData.whyChooseCard4Title || "";
  const whyChooseCard4Desc = productsCMSData.whyChooseCard4Desc || "";
  const whyChooseCard5Title = productsCMSData.whyChooseCard5Title || "";
  const whyChooseCard5Desc = productsCMSData.whyChooseCard5Desc || "";
  const whyChooseCard6Title = productsCMSData.whyChooseCard6Title || "";
  const whyChooseCard6Desc = productsCMSData.whyChooseCard6Desc || "";

  const cert1Title = productsCMSData.cert1Title || "";
  const cert2Title = productsCMSData.cert2Title || "";
  const cert3Title = productsCMSData.cert3Title || "";

  const whyChooseTitle = productsCMSData.whyChooseTitle || "";
  const certTitle = productsCMSData.certTitle || "";
  const helpTitle = productsCMSData.helpTitle || "";
  const helpSub = productsCMSData.helpSub || "";
  const helpBtnText = productsCMSData.helpBtnText || "";


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

  // Define product categories
  const categories = [{ id: "electrical", name: "Electrical Panels" }];

  // Define electrical panels
  const optiprimeGenerators = cmsData.gensets || [];

  // Define servo stabilizers

  // Define transformers

  // Filter products based on selected category

  // Get the display products based on filters

  // Get the current category display name

  // SEO metadata
  // const seoData = {
  //   title: "Power Equipment Products | Kumar Power",
  //   description:
  //     "Browse our full range of Kirloskar-certified diesel generators, electrical panels, transformers and more power solutions for all your industrial needs.",
  //   url: "https://kumarpower.com/products",
  //   imageUrl: "https://kumarpower.com/images/products-header.jpg",
  // };

  // Handler for category selection
  const handleCategorySelection = (categoryId: string) => {
    // If it's a main category with subcategories, show the dropdown
    if (categoryId === "kirloskar") {
      // Toggle the dropdown if clicking on Kirloskar again
      if (
        selectedCategory === "diesel" ||
        selectedCategory === "gas" ||
        selectedCategory === "portable" ||
        selectedCategory === "optiprime"
      ) {
        setShowKirloskarDropdown(!showKirloskarDropdown);
      } else {
        // If coming from a different category, set default to diesel and show dropdown
        setSelectedCategory("diesel");
        setShowKirloskarDropdown(true);
      }
    } else {
      // For other main categories, set the category and hide Kirloskar dropdown
      setSelectedCategory(categoryId);
      setShowKirloskarDropdown(false);
    }
  };

  // Handler for subcategory selection
  const handleSubcategorySelection = (subcategoryId: string) => {
    setSelectedCategory(subcategoryId);
    // Keep the dropdown open when selecting subcategories
  };

  // Function to open the specs modal
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



      <Header />

      <Helmet>
        <title>
          Optiprime Generators Dealer in Delhi | Kumar Power
        </title>

        <meta
          name="description"
          content="Explore our Kirloskar-certified Optiprime generators, trusted across India’s most demanding industries for reliable and efficient power solutions today."
        />

        <link
          rel="canonical" href="https://www.kumarpower.com/products/optiprime" />
      </Helmet>

      <main className="bg-black min-h-screen">
        {/* Hero Banner */}
        <div className="relative bg-black text-white h-[220px] md:h-[350px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroBg})`,
              filter: "brightness(0.5)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90"></div>

          <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl md:text-5xl font-bold">
              {heroHeadingPart1} <span className="text-[#2D6FBA]">{heroHeadingPart2}</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-2 max-w-2xl"><LinkText text={heroSub} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
          </div>
        </div>

        {/* Product Selection Area */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8">
          {/* Filter and Sort Controls */}

          <div className="flex flex-col md:flex-row gap-6">
            {/* Category Sidebar */}

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white">{sectionTitle}</h2>
                <p className="text-gray-400 mt-1 text-sm"><LinkText text={sectionDesc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {optiprimeGenerators.map((product) => (
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
                        <h3 className="font-medium text-sm text-white">
                          {product.name}
                        </h3>

                        <div className="mt-2 text-xs text-gray-300">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <span>Fuel Type: {product.fuelType}</span>
                            <span>CPCB Norm: {product.cpcbNorm}</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1">
                            <span>Cooling: {product.cooling}</span>
                            <span>Phase: {product.phase}</span>
                          </div>
                        </div>

                        <div className="mt-2 flex items-center">
                          <span className="text-yellow-400 text-xs">★</span>
                          <span className="text-xs ml-1 text-gray-300">
                            {product.rating}
                          </span>
                          <span className="text-xs ml-1 text-gray-500">
                            ({product.ratingCount})
                          </span>
                        </div>

                        <div className="mt-3 flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 text-xs flex items-center gap-1 py-0 px-2 border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600"
                            onClick={() => openSpecsModal(product)}
                          >
                            View Specs <ChevronRight className="w-3 h-3" />
                          </Button>

                          <Button
                            variant="default"
                            size="sm"
                            className="h-7 text-xs py-0 px-4 bg-[#2D6FBA] hover:bg-[#225488] text-white"
                            onClick={() => openQuoteModal(product)}
                          >
                            Get Quote
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Remove Not Sure What Fits Section */}
              {/* <div className="mt-10 bg-gray-800 w-full sm:max-w-xs md:max-w-md lg:max-w-xs xl:max-w-sm 2xl:max-w-md p-4 rounded-md border border-gray-700 mx-auto flex flex-col items-center text-center">
                <h3 className="font-medium text-base mb-1 text-white">Not sure what fits?</h3>
                <p className="text-xs text-gray-400 mb-3">
                  Use our 3-step Generator Selector to find the perfect power solution for your needs.
                </p>
                <Button
                  variant="default"
                  size="sm"
                  className="text-xs px-4 py-1 h-7 bg-[#2D6FBA] hover:bg-[#225488] text-white flex items-center gap-1"
                  onClick={() => setShowSelectorModal(true)}
                >
                  Start Selector <ChevronRight className="w-3 h-3" />
                </Button>
              </div> */}
            </div>
          </div>

          {/* Kumar Power Info */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-400 pt-3 gap-2">
            {/* <div>
              <span className="font-medium text-[#2D6FBA]">Kumar Power:</span>{" "}
              India's Most Trusted Kirloskar-Certified Generator Brand!
            </div> */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
              {/* Download Button */}

              {/* New Bharat Rajpat Button */}
              {/* <a href={bharat} download="Bharat rajptar .pdf">
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
                  Download Bharat Rajptar
                </Button>
              </a> */}

              {/* <a href={Direction76} download="Direction76.pdf">
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
                  Download Direction 76
                </Button>
              </a> */}

              {/* Talk Button */}
              {/* <Button
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
                Talk to Power Expert
              </Button> */}

              {/* Request Quote Button */}
              {/* <Button
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
                <Link to="/contact">Request Quote</Link>
              </Button> */}
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
              {/* Unmatched Reliability */}
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
                <h3 className="text-base font-semibold mb-1">{whyChooseCard1Title}</h3>
                <p className="text-sm text-gray-600"><LinkText text={whyChooseCard1Desc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              </div>

              {/* Fuel Efficiency */}
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
                <h3 className="text-base font-semibold mb-1">{whyChooseCard2Title}</h3>
                <p className="text-sm text-gray-600"><LinkText text={whyChooseCard2Desc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              </div>

              {/* Rapid Response */}
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

              {/* Low Noise Operation */}
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
                <h3 className="text-base font-semibold mb-1">{whyChooseCard4Title}</h3>
                <p className="text-sm text-gray-600"><LinkText text={whyChooseCard4Desc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              </div>

              {/* Easy Maintenance */}
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
                <h3 className="text-base font-semibold mb-1">{whyChooseCard5Title}</h3>
                <p className="text-sm text-gray-600"><LinkText text={whyChooseCard5Desc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              </div>

              {/* Smart Controls */}
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
                </svg>{helpBtnText}</Button>
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
