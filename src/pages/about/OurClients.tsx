import { LinkText } from "@/components/ui/LinkText";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { useSectionData, usePageHeadingTag } from "@/store/useCMSStore";
import honeywell from "@/assets/Honeywell.png";
import suez from "@/assets/Suez.png";
import adani from "@/assets/Adani.png";
import sikka from "@/assets/S&P Infra.png";
import apollo from "@/assets/Apollo.png";
import cec from "@/assets/CEC (1).png";
import seasons from "@/assets/Seasons (1).png";
import ncc from "@/assets/Ncc Limited.png";
import gmr from "@/assets/Clients page/GMR Infra.jpg";
import airindia from "@/assets/air-india-logo-png_seeklogo-5113 1.png";
import british from "@/assets/BristishPaints.png";
import nbcc from "@/assets/NBCC 1.png";
import afcons from "@/assets/Afcons.png";
import kec from "@/assets/KEC.png";
import ojc from "@/assets/OJC.png";
import mapple from "@/assets/Mapple.png";
import comed from "@/assets/Comed.png";
import mbd from "@/assets/Malhotra.png";
import sp from "@/assets/S&P Infra.png";
import rai from "@/assets/Rai Foundation.png";
import kashyapi from "@/assets/Kashyapi (1).png";
import pwc from "@/assets/PWC.png";
import daiken from "@/assets/Daikin.png";
import ignou from "@/assets/IGNOU-Preview 1.png";
import vistara from "@/assets/Vistara.png";
import ace from "@/assets/Clients page/AceConstruction.jpg";
import claroin from "@/assets/Clients page/Clarion.png";
import Comed from "@/assets/Clients page/Comed.png";
import Dps from "@/assets/Clients page/DPS.jpg";
import GEPL from "@/assets/Clients page/GEPL.jpg";
import addidas from "@/assets/Clients page/Adidas.jpg";
import SEO from "@/components/SEO";

const OurClients = () => {
  const HeadingTag = usePageHeadingTag("our-clients");
  const { data: rawCMSData } = useSectionData<any>("our-clients");
  const cmsData = rawCMSData || {};

  const heroHeading = cmsData.heroHeading;
  const heroDesc = cmsData.heroDesc;
  const heroImage = cmsData.heroImage;
  const heroCtaText = cmsData.heroCtaText;
  const esteemedTitle = cmsData.esteemedTitle;

  const prestigiousTitle = cmsData.prestigiousTitle;
  const prestigiousDesc = cmsData.prestigiousDesc;

  const [activeTab, setActiveTab] = useState("industries");
  const [counts, setCounts] = useState({
    clients: 0,
    years: 0,
    installations: 0,
  });
  const statsRef = useRef(null);
  const animationStarted = useRef(false);

  // Animation function to count up numbers
  const animateNumbers = (resetAnimation = false) => {
    // Allow restarting animation on hover when resetAnimation is true
    if (animationStarted.current && !resetAnimation) return;

    const finalNumbers = {
      clients: cmsData.stat1Num ? parseInt(cmsData.stat1Num) : 0,
      years: cmsData.stat2Num ? parseInt(cmsData.stat2Num) : 0,
      installations: cmsData.stat3Num ? parseInt(cmsData.stat3Num) : 0,
    };

    // Reset counts to 0 for a fresh animation if requested
    if (resetAnimation) {
      setCounts({ clients: 0, years: 0, installations: 0 });
    }

    const duration = 1500; // Slightly faster animation (1.5 seconds)
    const startTime = Date.now();
    animationStarted.current = true;

    const updateNumbers = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1); // Progress from 0 to 1

      // Easing function for smooth animation
      const easeOutQuad = (t) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      setCounts({
        clients: Math.floor(easedProgress * finalNumbers.clients),
        years: Math.floor(easedProgress * finalNumbers.years),
        installations: Math.floor(easedProgress * finalNumbers.installations),
      });

      if (progress < 1) {
        requestAnimationFrame(updateNumbers);
      } else {
        // Set to final values when animation completes
        setCounts(finalNumbers);
        // Allow restarting animation on hover
        if (resetAnimation) {
          animationStarted.current = false;
        }
      }
    };

    updateNumbers();
  };

  // Intersection Observer for triggering animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumbers();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Client data for each category
  const clientCategories: Record<string, any> = {
    mallsAndFarms: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4V5h12v10z" />
          <path d="M9 7a1 1 0 112 0v6a1 1 0 11-2 0V7zM7 9a1 1 0 112 0v4a1 1 0 11-2 0V9zM11 9a1 1 0 112 0v4a1 1 0 11-2 0V9z" />
        </svg>
      ),
      title: "Malls/Banquet Halls/Farm & Guest Houses",
      clients: [],
    },
    contractors: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 4a2 2 0 012-2h10a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm3 2a1 1 0 000 2h8a1 1 0 100-2H6zm0 4a1 1 0 000 2h8a1 1 0 100-2H6zm0 4a1 1 0 000 2h4a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Contractors/Govt Offices",
      clients: [],
    },
    builders: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      title: "Builders",
      clients: [],
    },
    petrol: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 6.707 6.293a1 1 0 00-1.414 1.414L8.586 11 5.293 14.293a1 1 0 001.414 1.414L10 12.414l3.293 3.293a1 1 0 001.414-1.414L11.414 11l3.293-3.293z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Petrol Pump",
      clients: [],
    },
    industries: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
          />
        </svg>
      ),
      title: "Industries",
      clients: [],
    },
    retail: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
          <path
            fillRule="evenodd"
            d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Retail Outlets",
      clients: [],
    },
    banks: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 002-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Banks",
      clients: [],
    },
    embassies: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      title: "Embassies",
      clients: [],
    },
    education: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
      title: "Educational Institutions",
      clients: [],
    },
    medical: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Medical Facilities",
      clients: [],
    },
    construction: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
      ),
      title: "Construction",
      clients: [],
    },
    spiritual: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Spiritual & NGOs",
      clients: [],
    },
    society: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h4v-4a2 2 0 114 0v4h4a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Society/Apartment",
      clients: [],
    },
    hospitality: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
      ),
      title: "Hospitality & Hotels",
      clients: [],
    },
    cpwd: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "CPWD & NBCC Projects",
      clients: [],
    },
    exporters: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      title: "Exporters",
      clients: [],
    },
    manufacturers: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm1 3h12v9a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm2 2a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Manufacturers/Wholesalers/Suppliers",
      clients: [],
    },
    infrastructure: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v1a2 2 0 01-2 2H4a2 2 0 01-2-2V4zM2 10a2 2 0 012-2h12a2 2 0 012 2v1a2 2 0 01-2 2H4a2 2 0 01-2-2v-1zM2 16a2 2 0 012-2h12a2 2 0 012 2v1a2 2 0 01-2 2H4a2 2 0 01-2-2v-1z" />
        </svg>
      ),
      title: "Infrastructure",
      clients: [],
    },
    beautySalon: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 000 2h4a1 1 0 100-2H7z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Beauty Salon",
      clients: [],
    },
  };

  // Merge dynamic clients from CMS into the static categories
  if (Array.isArray(cmsData.clients) && cmsData.clients.length > 0) {
    const groupedClients = cmsData.clients.reduce((acc: any, curr: any) => {
      if (!acc[curr.category]) acc[curr.category] = [];
      acc[curr.category].push(curr.name);
      return acc;
    }, {});

    Object.keys(clientCategories).forEach((key) => {
      const catTitle = clientCategories[key].title;
      if (groupedClients[catTitle]) {
        clientCategories[key].clients = groupedClients[catTitle];
      }
    });
  }

  // Tab Button Component
  const TabButton = ({ id, title, icon, isActive }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center px-3 py-1.5 text-sm rounded-md ${isActive ? "bg-[#2D6FBA]" : "bg-[#2D3546]"} text-white`}
    >
      {icon}
      {title}
    </button>
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        pageSlug="our-clients"
        title="Our Clients - Trusted by Leading Brands & Businesses"
        description="Kumar Power partners with top brands and industries. Discover our client list and the trust we’ve built through quality power solutions."
        canonical="https://www.kumarpower.com/about/OurClients"
      />
      {/* <SEOJsonLD /> */}
      <Header />

      {/* Hero Section */}
      <section
        className="bg-contain bg-center py-24 text-white relative"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "center 20%",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <HeadingTag className="text-5xl md:text-6xl font-bold mb-4 whitespace-pre-line">
            {heroHeading}
          </HeadingTag>
          {/* Add underline below the heading */}
          <div className="w-24 h-1 bg-white mb-10"></div>
          <p className="text-lg max-w-2xl">
            <LinkText
              text={heroDesc}
              linkClassName="text-[#2D6FBA] hover:underline font-bold"
            />
          </p>
          <button className="flex items-center text-white mt-4 text-sm">
            {heroCtaText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 4v16m0 0l-6-6m6 6l6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Our Esteemed Clients Section */}
      <section className="bg-black py-6 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-medium text-center">{esteemedTitle}</h2>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {(cmsData.logos || []).map((logo: any) => (
              <div
                key={logo.id}
                className="flex items-center justify-center p-4"
              >
                <img
                  src={logo.url}
                  alt={logo.alt || "Client Logo"}
                  className="h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        ref={statsRef}
        className="py-16 bg-gradient-to-r from-gray-50 to-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div
              className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 cursor-pointer"
              onMouseEnter={() => animateNumbers(true)}
            >
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#2D6FBA]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-[#2D6FBA] mb-2">
                {counts.clients}+
              </h3>
              <p className="text-sm text-gray-600">
                <LinkText
                  text={cmsData.stat1Text}
                  linkClassName="text-[#2D6FBA] hover:underline font-bold"
                />
              </p>
            </div>
            <div
              className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 cursor-pointer"
              onMouseEnter={() => animateNumbers(true)}
            >
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#2D6FBA]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-[#2D6FBA] mb-2">
                {counts.years}+
              </h3>
              <p className="text-sm text-gray-600">
                <LinkText
                  text={cmsData.stat2Text}
                  linkClassName="text-[#2D6FBA] hover:underline font-bold"
                />
              </p>
            </div>
            <div
              className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 cursor-pointer"
              onMouseEnter={() => animateNumbers(true)}
            >
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#2D6FBA]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-[#2D6FBA] mb-2">
                {counts.installations}+
              </h3>
              <p className="text-sm text-gray-600">
                <LinkText
                  text={cmsData.stat3Text}
                  linkClassName="text-[#2D6FBA] hover:underline font-bold"
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Prestigious Clients Section */}
      <section className="bg-[#3B4255] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-2">
            {prestigiousTitle}
          </h2>
          <p className="text-sm text-center max-w-2xl mx-auto mb-8">
            <LinkText
              text={prestigiousDesc}
              linkClassName="text-[#2D6FBA] hover:underline font-bold"
            />
          </p>

          {/* Industry Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <TabButton
              id="mallsAndFarms"
              title="Malls/Banquet Halls/Farm & Guest Houses"
              icon={clientCategories.mallsAndFarms.icon}
              isActive={activeTab === "mallsAndFarms"}
            />
            <TabButton
              id="contractors"
              title="Contractors/Govt Offices"
              icon={clientCategories.contractors.icon}
              isActive={activeTab === "contractors"}
            />
            <TabButton
              id="builders"
              title="Builders"
              icon={clientCategories.builders.icon}
              isActive={activeTab === "builders"}
            />
            <TabButton
              id="petrol"
              title="Petrol Pump"
              icon={clientCategories.petrol.icon}
              isActive={activeTab === "petrol"}
            />
            <TabButton
              id="industries"
              title="Industries"
              icon={clientCategories.industries.icon}
              isActive={activeTab === "industries"}
            />
            <TabButton
              id="retail"
              title="Retail Outlets"
              icon={clientCategories.retail.icon}
              isActive={activeTab === "retail"}
            />
            <TabButton
              id="banks"
              title="Banks"
              icon={clientCategories.banks.icon}
              isActive={activeTab === "banks"}
            />
            <TabButton
              id="embassies"
              title="Embassies"
              icon={clientCategories.embassies.icon}
              isActive={activeTab === "embassies"}
            />
            <TabButton
              id="education"
              title="Educational Institutions"
              icon={clientCategories.education.icon}
              isActive={activeTab === "education"}
            />
            <TabButton
              id="medical"
              title="Medical Facilities"
              icon={clientCategories.medical.icon}
              isActive={activeTab === "medical"}
            />
            <TabButton
              id="construction"
              title="Construction"
              icon={clientCategories.construction.icon}
              isActive={activeTab === "construction"}
            />
            <TabButton
              id="infrastructure"
              title="Infrastructure"
              icon={clientCategories.infrastructure.icon}
              isActive={activeTab === "infrastructure"}
            />
            <TabButton
              id="manufacturers"
              title="Manufacturers/Wholesalers/Suppliers"
              icon={clientCategories.manufacturers.icon}
              isActive={activeTab === "manufacturers"}
            />
            <TabButton
              id="beautySalon"
              title="Beauty Salon"
              icon={clientCategories.beautySalon.icon}
              isActive={activeTab === "beautySalon"}
            />
            <TabButton
              id="spiritual"
              title="Spiritual & NGOs"
              icon={clientCategories.spiritual.icon}
              isActive={activeTab === "spiritual"}
            />
            <TabButton
              id="cpwd"
              title="CPWD & NBCC Projects"
              icon={clientCategories.cpwd.icon}
              isActive={activeTab === "cpwd"}
            />
            <TabButton
              id="exporters"
              title="Exporters"
              icon={clientCategories.exporters.icon}
              isActive={activeTab === "exporters"}
            />
            <TabButton
              id="society"
              title="Society/Apartment"
              icon={clientCategories.society.icon}
              isActive={activeTab === "society"}
            />
            <TabButton
              id="hospitality"
              title="Hospitality & Hotels"
              icon={clientCategories.hospitality.icon}
              isActive={activeTab === "hospitality"}
            />
          </div>

          {/* Client Grids - one for each tab */}
          <div className="bg-black p-8 rounded-md">
            <div className="flex flex-col mb-6">
              <p className="text-white font-semibold flex gap-2 items-center text-xl">
                {clientCategories[activeTab].icon}
                {clientCategories[activeTab].title}
              </p>
              {/* Blue underline below the name */}
              <span className="mt-2 w-full h-0.5 bg-gradient-to-r from-[#2D6FBA] to-[#2D6FBA]/0 rounded"></span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8">
              {clientCategories[activeTab].clients.map((client, index) => (
                <div key={index}>
                  <p className="font-semibold mb-4">
                    <LinkText
                      text={client}
                      linkClassName="text-[#2D6FBA] hover:underline font-bold"
                    />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurClients;
