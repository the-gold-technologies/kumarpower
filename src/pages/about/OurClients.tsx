import { useState, useEffect, useRef } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { useSectionData } from "@/store/useCMSStore";
import handshake from "@/assets/handshake.png";
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
  const { data: rawCMSData } = useSectionData<any>("our-clients");
  const cmsData = rawCMSData || {};

  const heroHeading =
    cmsData.heroHeading ||
    cmsData.title ||
    "Powering India's\nElite Enterprises";
  const heroDesc =
    cmsData.heroDesc ||
    cmsData.description ||
    "For over three decades, Kumar Generator House has been the trusted power partner for India's most demanding institutions.";
  const esteemedTitle = cmsData.esteemedTitle || "Our Esteemed Clients";

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
      clients: 500,
      years: 30,
      installations: 10000,
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
  const clientCategories = {
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
      clients: [
        "Bridge Green Farm (Farmhouse)",
        "Mr. Sanjeev Puri & Geeta Puri, Uppal Farms, Bilaspur. (Farmhouse)",
        "Silver Grand Services (Banquet Hall)",
        "Ananda Farm (Farmhouse)",
        "Baghol Hospitality Infra Services (P) Ltd. (Guest House)",
        "Celebration de grande (Banquet Hall)",
        "Variety Shopping Centre (Shopping Mall)",
        "Mr. Pawan, Eden Garden (Farmhouse)",
        "Saifi Farm (Farm House)",
        "Mark Mall (Shopping Mall)",
        "Aashirwad Banquet Hall",
        "RD FIESTA (Banquet Hall)",
        "Beauty Green Farm House",
        "Mr. P.J. Sight, Chattarpur (Farm House)",
        "Mr. Lalit Dua, Dua Farms (Farm House)",
        "Farida Begum, Farm No. 7 (Farm House)",
        "UK Chaudhary, Jona Farm House (Farm House)",
        "Mr. Karma, Green Beauty Farms (Farm House)",
        "AMA Guest House (Guest House)",
        "Saurabh Chopra, Farm House",
      ],
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
      clients: [
        "National Engineers & Contractors (MES) - Company Clos",
        "Chauhan Hi-Tech Projects (P) Ltd.",
        "The Collector, Camp Office, Tiruvannamalai.",
        "Trishul Enterprises",
        "JM Associates",
        "BD Raizada & Co. (MES)",
        "Ajit Jain & Co. (MES)",
        "Gupta Engineers & Contactors (MES)",
        "RS Sharma Contractors (P) Ltd. (MES)",
        "Globe Civil Projects Pvt.Ltd.",
        "Dharamraj Contracts (I) (P) Ltd.",
        "Trilok & Associates",
        "Ace Pipeline Contracts (P) Ltd.",
        "Jai Mangla",
        "Pacific Trade Links (MES)",
        "Ganjoo & co. (MES)",
        "Amit Associates (Amit goel) - MES",
        "Jain Associates (MES)",
        "Kansal & Company - Construction (MES)",
        "Virender Construction (MES)",
        "Yogesh - MR sales (MES)",
        "Global Enterprises (MES)",
        "Surjit Ling & Done (MES)",
      ],
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
      clients: [
        "Mango Infatech Solutions (P) Ltd.",
        "LG Builders",
        "Vikas Buildtech (P) Ltd.",
        "Surjit Singh & Sons",
        "SSG Buildcon LLP",
        "Pal & Paul Builders Ltd",
        "Piyare Lal Hari Singh Builders (P) Ltd.",
        "M/s. Property Shopee",
        "M/s. Ratan Buildtech (P) Ltd.",
        "Chettinad Property Developers (P) Ltd.",
        "M/s. Osaaka Realtors (P) Ltd.",
        "Chopra Promotors",
        "M/s. Chauhan Associates",
        "Shomit Finance Ltd.",
        "Mr. SK Goyal (PLHS Builders)",
        "UP INFRAESTATE PVT. LTD.",
        "JS Builders",
        "PCR Infratech (P) Ltd.",
        "Auris Developers (P) Ltd.",
        "Nishtha Builders",
        "JK BUILDTECH",
        "Yograj Builders",
        "Starcity Real Estates (P) Ltd.",
        "Akrati Technimont Ltd.",
        "Lamba Builders",
        "SANSKAR",
        "Dkrrish Builders (P) Ltd.",
        "Eco Green Buildtech (P) Ltd.",
        "Investsmart Solutions (P) Ltd.",
        "Celina Projects (P) Ltd",
      ],
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
      clients: [
        "Delhi Aviation Fuel Facility (P) Ltd",
        "JK Filling Station, Bharat Petroleum Pump",
        "MKR Highway Filling Station, (U.P.)",
        "Tuli Motors",
        "Sheetla Filling Station, Rewari.",
        "Shaheed Anusuya Dhyani Service Station, Hari Nagar",
        "Yash Filling Station, Najafgarh",
        "Kartar Kissan Sewa Kendra, Distt. Jhajjar",
        "Auto Fuel Indian Oil Petrol Pump",
        "National Service Station",
        "Bedi Saxena Service Station",
        "Mangla Petro, Pitampura",
      ],
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
      clients: [
        "Anjani Broadband Solutions (P) Ltd.",
        "Grapes Digital (P) Ltd.",
        "Berger Paints (1) Ltd.",
        "Irisi Global Services (P) Ltd.",
        "Veolia India (P) Ltd.",
        "Faction Communication Pvt. Ltd.",
        "Accord BPO Services (P) Ltd.",
        "Auto Power Gen. Systems (P) Ltd.",
        "N.K. Kapur & Co. (P) Ltd.",
        "Leo Network Power Systems",
        "Kaks Financial & Management Consultants Pvt. Ltd.",
        "Unitop International",
        "Vij Engineers & Consultants Pvt. Ltd.",
        "Safe & Secure Online Marketing (P) Ltd.",
        "Capital Business Solutions (P) Ltd.",
        "Gigatel Networks Private Limited",
        "Channel One",
        "Sark EPC Projects Pvt Ltd.",
        "Comed Chemicals Ltd.",
        "Orian Automobiles (P) Ltd.",
        "National Heavy Electric Corporation",
        "D.S. DUCTOFAB SYSTEMS PVT. LTD.",
        "Sapieo Software India (P) Ltd.",
        "HDFC Sales Pvt. Ltd.",
        "Meraki Sport and Entertainment (P) Ltd.",
        "LRG Steel Concept (P) Ltd.",
        "Elite HR Practices (P) Ltd.",
        "Worldwide Facility Management Services (P) Ltd. (Aroon Aviation)",
        "Webon Flex Marketing (P) Ltd.",
        "Uttar Bharat Hydro Power (P) Ltd.",
        "Divyanshi Power Solution",
        "World Phone Internet Services (P) Ltd.",
        "Cyber Group India Pvt. Ltd.",
        "Seco Industries",
        "Shubhankr Texfab India",
        "AJS Software Tech. (P) Ltd.",
        "Sharad Advertising (P) Ltd.",
        "KGL Logistics Pvt. Ltd.",
        "Glaze Trading India Pvt Ltd.",
        "Sehgal Industries",
        "Maco Infotech Ltd.",
        "Tata Chemicals Ltd",
        "Nirja Publishers & Printers (P) Ltd.",
        "SIS India Ltd.",
        "Market X-Cel Data Matrix (P) Ltd.",
        "Dhanluxmi Agro Industries",
        "Dreams Hospitality (P) Ltd.",
        "M+V Marketing & Sales (P) Ltd.",
        "SKETS Studio (P) Ltd.",
        "Falcon Force (P) Ltd.",
        "North East Region Finservices Ltd.",
        "Hexagramm",
        "SJVN Ltd., Rampur Hydro Electric Project",
        "Sandys Hospitality (P) Ltd.",
        "Moment Expro",
        "Le-Grand Hospitality (P) Ltd.",
        "Tirupati Cement",
        "R.K. Global",
        "Swagatam Enterprises",
        "Automation Engineers",
        "GND India Ltd.",
        "World Phone internet P. Ltd.",
        "Concept Communication",
      ],
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
      clients: [
        "Samir Orange n White",
        "Delhi Designer Studio",
        "Numer uno KVC Retail",
        "ADI Sports (1) (P) Ltd.",
        "Max Hypermarkets India (P) Ltd.",
        "Cutecumber Designs Pvt. Ltd.",
        "Gems Mart Jewellers",
        "Jindal Agro International",
        "Aman Hosiery",
        "Jaydeep Fashion",
        "Grover Garments",
        "KS Selection (P) Ltd.",
        "VS Jeweller",
        "Shivam Jewellers",
        "Girdhari Lal & Sons",
        "Harbans Jwellers",
        "Atul Jewellers.",
        "Shery Clothing and Designs (P) Ltd.",
        "Incense Fashions",
        "Mohan Lal & Sons",
        "Nike Showroom",
        "Anekvarna",
        "Pritam Jewellers",
        "Big C",
        "Bansal Textiles",
        "Roop Jewellers",
        "CHEAP-Shoe Store",
        "AK Fashion",
        "Sanskriti Apparels",
        "AG Fashions",
        "Harbans Jewellers",
        "Global Mode & Accessories (P) Ltd.",
        "Kridha Footwear",
        "Malik Jewellers",
        "MB Jewellers",
        "Fineese International Design Pvt. Ltd.",
        "Rich Trend",
        "SDS Creations",
        "Sha Sha Fashion Trendz (P) Ltd.",
      ],
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
      clients: [
        "Central Bank of India",
        "Bank of India, Mahipalpur",
        "Andhra Bank, Paschim Vihar, New Delhi.",
        "State Bank Of Patiala",
        "Kangra Bank, Prahladpur, New Delhi.",
        "Axis Bank",
        "Canara Bank, Meerut",
        "The Karnataka Bank",
        "Citi Bank, Punjabi Bagh",
      ],
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
      clients: [
        "Embassy of The Democratic Republic of Congo",
        "Embassy of the republic of Lithuania",
        "Sikkim House",
        "Romania Embassy",
        "The Embassy of Sultanate of Oman",
      ],
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
      clients: [
        "Lamba Book Depot",
        "Baba Haridass Institute of Nursing Education",
        "KD Campus (P) ltd.",
        "Green Tree Education (P) Ltd.",
        "School of Business Management & Technologies",
        "IIT College",
        "Oscar Public School",
        "Shishu Bharti School",
        "Lakshay Online Test Centre",
        "Vikas Publication (P) Ltd",
        "SDS Institute of Modern Studies",
        "Akash Institute",
        "Delhi Technical Campus",
        "Mount St. Mary's School",
        "MCPS Junior School",
        "GRM Public School",
        "ARMY PUBLIC SCHOOL",
        "Kelvin Institute",
        "Modern Child Public Sec. School",
        "Jagannath Engineering Mgt. Technical Campur",
        "St. Thomas School",
        "BK Convent School",
        "Deshbandhu College",
        "Vinod Gupta Classes",
        "The Scholar School",
        "SOUTH DELHI PUBLIC SCHOOL",
        "Springdales School",
        "IIT-INAS PACE EDUCATION",
        "Crescent School",
        "Sacred Heart College",
        "Rai Foundation",
        "BSC Publications",
        "IGNOU, Regional Centre, NCT of Delhi",
        "Educity peda gogy (P) Ltd.",
        "Shadman English Mediam School",
        "TINU PUBLIC SCHOOL",
        "Shree Adhya Educational Books (P) Ltd.",
        "Mahashay Chunnilal Saraswati Bal Mandir Sr. Sec. School",
        "Kiran Prakashan (P) Ltd.",
        "Navyug Public School",
        "Vishal International School",
        "St. Lawrence School",
        "Salwan Public School",
        "New Bal Bharti Public School",
        "DPS School",
        "Baghpat Institute of Education & Technology",
        "Polish Institute",
      ],
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
      clients: [
        "Sarvodya Hospital & institute of medical science.",
        "Dinesh Baghpat Sarvodya Hospital & Institute of medical sciences.",
        "Galaxy Hospital",
        "Hi physix Laboratory",
        "Amit Test & Calibration Centre",
        "Toasha Vaccines Ltd.",
        "Alshifa Multispeciality Hospital",
        "City Medicos",
        "Vibes Healthcare Ltd.",
        "Insight Softlabz",
        "East Delhi Focus Imaging (LLP) (LAB)",
        "City X Ray & Scan Clinic (P) Ltd.",
        "General Hospital, Leh",
        "Patnaiks Laser Eye Institute",
        "Global Health Line (P) Ltd.",
        "Khemchand Chugh Arya Samaj Hospital",
        "Nueclear Healthcare Ltd.",
        "Akash Hospital",
        "Arvind Medicare (P) Ltd.",
        "Tomer Multi Speciality Hospital",
        "Vardan Clinic",
        "Sanyasi Ayurveda",
        "Viviano Healthcare (P) Ltd.",
        "Sankalp Hospital",
        "Gandhi Nursing Home",
        "Dr. Faheem Ahmed, Fatima Child Care Centre, Rampur, UP",
        "Nature & Nurture Healthcare (P) Ltd.",
        "Animal Hospital",
        "Kesar Hospital",
        "Revive Hospital",
        "Hi Physix Laboratory India (P) Ltd.",
      ],
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
      clients: [
        "Tribeni Construction Ltd.",
        "Juneja Construction (P) Ltd.",
        "Jeet Construction Co.",
        "Rishab Construction Pvt Ltd",
        "S&P Infrastructure Developers (P) ltd.",
        "A&T Engg. (P) Ltd.",
        "Janhavi Construction",
        "Varindera Construction Ltd.",
        "Ramacivil India Construction (P) Ltd.",
        "Starcity Real Estate Pvt. Ltd.",
        "Chhavi Construction Co.",
        "Oriental Structural Engineers (P) Ltd.",
        "ASGI Reality & Infra developers (P) Ltd",
        "Angelique International Ltd.",
        "WELCOME CONSTRUCTION CO LTD, CAMROON",
        "Amranottos infratech Pvt. Ltd.",
        "Pinnacle Superstructures (P) Ltd.",
        "Infra 13 (P) Ltd.",
        "Nirman Enconprojects (P) Ltd.",
        "KEC International Ltd.",
        "Shivom Projects (P) Ltd.",
        "Arvind Construction",
        "KC Infratech",
        "Julka Construction",
        "Anupam Construction",
        "Windchimes Construction (P) Ltd.",
        "Gram Bharti Construction",
        "J.K. Construction & Developers",
        "Brahma Construction",
        "Metamorphosis Construction",
        "Parnika Commercial & Estates (P) Ltd.",
        "High Tech Profile (P) Ltd.",
        "Pashupati Effects (P) Ltd.",
        "CTC Projects Pvt. Ltd.",
        "Continental Engineering Corporation",
        "CEC",
        "E-Homes Infrastructure (P) Ltd",
        "S. P. SINGLA CONSTRUCTION PVT. LTD.",
        "Spherical Construction & Interiors",
        "Dharamraj Construct (1) Pvt. Ltd.",
        "ATS Township (P) Ltd.",
      ],
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
      clients: [
        "Narayani Tandhandas Deosar Trust, Deosar Mandir, Haryana",
        "Shiri Sidh Hanuman Mandir, Gurgaon",
        "Ganga Foundation, Moradabad",
        "Shri Shiv Durga Mandir, Punjabi Bagh",
        "Guru Ji Ashram, Ghaziabad",
        "Dharampal Mehra Charitable Trust, (UP)",
        "Sulahkul Satsang Mandir, Karnal",
        "Damian Foundation India (Trust), Qutub Vihar",
        "Sai Retina Foundation, Dilshad Colony",
        "Methodist Church, New Delhi.",
        "St. Thomas Malankara Catholic Church, Uttam Nagar",
        "Gurudwara Shri Guru Singh Sabha, Old Mahavir Nagar",
        "DWARKA KALIBARI, Dwarka",
        "Ganpati Miniral, Gulab Pura",
        "Sant Nirankari Mandal, Tilak Nagar",
        "Maa Saheb Dargah, Mehrauli",
        "Hindu Dharam Sabha Janak Puri,",
        "Maharaja Sawai Man Singh II Museum Trust, Maharani Bagh",
        "Swami Sambodh Prakash ji Maharaj, Haridwar",
        "Manav Mandir Mission Trust, Ashram Ring Road",
        "Father Wilson, Church, Tahirpur",
        "GURUDWARA SAHIB, Hari Nagar",
        "Nutrition Foundation of India, Qutub Institutional Area",
        "Mahant Dharam Singh Trust, Main Najafgarh Road",
      ],
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
      clients: [
        "Group Housing Society Ltd, Dwarka",
        "Shiksha Enclave Co-op. Housing Society Ltd",
        "Adam M2K Projects LLP",
        "Raison Armour Homes Residents Welfare Association, Ghaziabad",
        "Jeevan Apartment Residents Assoication, Okhla",
        "Mangalam Villas Module - Ghaziabad.",
        "New Jyoti Co-operative Group Housing Society Ltd., Dwarka",
        "Elders Homes Society, Rohini",
      ],
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
      clients: [
        "W.G. Hospitality (Restaurant)",
        "WUSHU Chinese Cuisine (Restaurant)",
        "Hotel B Continental (Hotel)",
        "Vivah Residency (Hotel)",
        "Café Brown Sugar (Restaurant)",
        "Hotel Corus (Hotel)",
        "Melody Food Merchant (P) Ltd. (Restaurant)",
        "Headway Foods & Resturant LLP (Restaurant)",
        "Karim Restaurant (Restaurant)",
        "zest Hospitality (P) Ltd (Restaurant)",
        "Rosedale Inn (P) Ltd. (Hotel)",
        "Hotel Pluto (Hotel)",
        "Hotel Runway (Hotel)",
        "Hotel Singh Empire (Hotel)",
        "Kwality Dhaba ( Restaurant )",
        "Hotel USA (Hotel)",
        "Golden Highway (Restaurant )",
        "Kalsang Ama café (Restaurant)",
        "Karat 87 Hotel Pvt. Ltd. (Hotel)",
        "Hotel Cubic Inn (Hotel)",
        "Himalayan Splendour Resort (Hotel)",
        "Darbar Restaurant (Restaurant)",
        "PRADEEP JI, OYO Hotels, (Hotel)",
        "THE GRACE HOUSE (Hotel)",
      ],
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
      clients: [
        "Education",
        "Builders",
        "Jaydeep Fashion",
        "KS Selection (P) Ltd.",
        "Shivam Jewellers",
        "Atul Jewellers.",
        "Jewellers",
        "Aman Hosiery",
        "Grover Garments",
        "VS Jeweller",
        "Girdhari Lal & Sons",
      ],
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
      clients: [
        "PMI Engineering Export (P) Ltd, Chennai",
        "Bishnu Impex (P) Ltd., Noida",
        "Grandeur Overseas, Karol Bagh",
        "Aufa Pakua",
        "Kangra Export, New Delhi",
        "AL Global (Export)",
        "Agni Exports, Gurgaon",
        "Aditya Enterprises",
        "Deepeeka Exports (P) Ltd, Meerut",
        "Swaraj Exports, Noida",
        "Salman",
        "Neha Exports",
        "MANISH (Knott Fashion Studio)",
        "Exim International",
        "Mount Meru India (P) Ltd.",
        "Ramnik Overseas",
        "Patwal",
        "Doyen Overseas Pvt. Ltd.",
      ],
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
      clients: [
        "Globe Auto Parts (P) Ltd.",
        "Sonam Furniture",
        "Modvak Cables (I) (P) Ltd.",
        "Navnit Blister Packs (P) Ltd.",
        "KK Lighting India (P) Ltd.",
        "Suez India (P) Ltd.",
        "Om Steel Tubes Ltd.",
        "Vandana Aircraft Services (P) Ltd.",
        "Ashirwad Oil Engines Ltd.",
        "Ksheer Dhenu Foods (P) Ltd.",
        "MRL Tyres Ltd.",
        "AyurSens Naturals",
        "ROYAL PAPER IND.",
        "5 Core Electronics Ltd.",
        "Harshey India (P) Ltd.",
        "Volga India Rubber (P) Ltd.",
        "Indian Scrap Traders",
        "Malik Seasoning & Spices (P) Ltd.",
        "LRG Steel Concept (P) Ltd.",
        "Varmora Granito (P) Ltd.",
        "Glimps Electronics (P) Ltd.",
        "Green House & Hestoft Foods (P) Ltd.",
        "APL Apollo Tubes Ltd.",
        "KBC Asia & Co. (P) Ltd.",
        "Wellmake Engineering Company (P) Ltd.",
        "Relax Technologies (P) Ltd.",
        "Al badr Seafoods (P) Ltd.",
        "Bisleri international",
        "Momspet Apparels (P) Ltd.",
        "MV Shoecare (P) Ltd.",
        "Quality materesses (P) Ltd.",
        "Libra International Ltd.",
        "Men Moms (P) Ltd.",
        "Circle E-Retail Pvt. Ltd.",
        "CRP Metals (P) Ltd.",
        "Alice Biotech (P) Ltd.",
        "Craftex India",
        "Daikin Airconditioning India (P) Ltd.",
        "Ruchi International",
        "Mix Power Solutions",
        "Automation Engineers A.B. Pvt. Ltd.",
        "Azad Body Builders",
        "Thermotech Engineering Corporation",
        "Lloyd Insulation (India) Ltd.",
        "Marut Techno Tools (P) Ltd.",
        "Southern Boilers Equipments (P) Ltd.",
        "CPL Energy India (P) Ltd.",
        "TESPA TOOLS (P) LTD.",
        "The Linc Publicity (P) Ltd.",
        "Bhular India (P) Ltd.",
        "Trimax Minrals (P) Ltd",
        "KBM Spices (P) Ltd.",
        "Ace Mobile Manufacturers (P) Ltd.",
        "Trodat Marking India (P) Ltd.",
        "Sardar Frozen Products (P) Ltd.",
        "Apple Tree Building Maintenance (P) Ltd.",
        "Gabsons Engineers & Consultants",
        "Sunrider India (P) Ltd.",
        "Vaadi Herbals (P) Ltd.",
        "Divine Seating Collection",
      ],
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
      clients: [
        "Green Infrastructures (P) Ltd",
        "Sikka Infrastructure (P) Ltd",
        "Joule Infrastructure (P) Ltd.",
        "JPG Infraestate",
        "Afcons Infrastructure Ltd.",
        "SAV Infratech (P) Ltd.",
        "Kashyapi Infrastructure (P) Ltd.",
        "Liza Infrastructure Pvt. Ltd.",
        "Goyala Infra Projects (P) Ltd.",
      ],
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
      clients: [
        "ADAMO SALOON, Malviya Nagar",
        "Hair Café Beauty Saloon",
        "Spa Aqua, GK-I",
        "Toni & Guy, Model Town",
        "Suhag Beauty Saloon, Dwarka",
      ],
    },
  };

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
          backgroundImage: `url(${handshake})`,
          backgroundPosition: "center 20%",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 whitespace-pre-line">
            {heroHeading}
          </h1>
          {/* Add underline below the heading */}
          <div className="w-24 h-1 bg-white mb-10"></div>
          <p className="text-lg max-w-2xl">{heroDesc}</p>
          <button className="flex items-center text-white mt-4 text-sm">
            Explore our client portfolio
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
            {/* Row 1 */}
            <div className="flex items-center justify-center ">
              <img src={honeywell} alt="Honeywell" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={suez} alt="Suez" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={adani} alt="Adani Wilmar" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={sikka} alt="Sikka" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={apollo} alt="Apollo" className="h-20" />
            </div>

            {/* Row 2 */}
            <div className="flex items-center justify-center">
              <img src={cec} alt="National Small Industries" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={seasons} alt="Seasons" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={ncc} alt="NCC" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={gmr} alt="GMR" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={airindia} alt="Air India" className="h-20" />
            </div>

            {/* Row 3 */}
            <div className="flex items-center justify-center">
              <img src={british} alt="British Paints" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={nbcc} alt="NHPC" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={afcons} alt="Afcons" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={kec} alt="KEC" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={ojc} alt="Oriental" className="h-20" />
            </div>

            {/* Row 4 */}
            <div className="flex items-center justify-center">
              <img src={mapple} alt="Mapple" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={comed} alt="Coated" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={mbd} alt="MBD Group" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={sp} alt="Infrastructure" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={rai} alt="Raj Foundation" className="h-20" />
            </div>

            {/* Row 5 */}
            <div className="flex items-center justify-center">
              <img src={kashyapi} alt="Kashyapi" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={pwc} alt="PwC" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={daiken} alt="Daikin" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={ignou} alt="IGNOU" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={vistara} alt="Vistaar" className="h-20" />
            </div>
            {/* Row 6 */}
            <div className="flex items-center justify-center">
              <img src={ace} alt="Ace Construction" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={claroin} alt="Clarion" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={Comed} alt="Comed" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={Dps} alt="DPS" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src={addidas} alt="Adidas" className="h-20" />
            </div>
            {/* Row 7 - New logos */}
            <div className="flex items-center justify-center">
              <img src={GEPL} alt="GEPL" className="h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762928655/5d8a7ffc-390a-42d8-bee8-2a5c353e5d05_abj0u1.jpg"
                alt="Trusted Partner"
                className="h-20"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762928656/68724243-11f2-42ec-85dc-69c153744f3c_n1154o.jpg"
                alt="Trusted Client"
                className="h-20"
              />
            </div>
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
              <p className="text-sm text-gray-600">Enterprise Clients</p>
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
              <p className="text-sm text-gray-600">Years of Service</p>
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
                Installations Across India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Prestigious Clients Section */}
      <section className="bg-[#3B4255] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-2">
            Our Prestigious Clients
          </h2>
          <p className="text-sm text-center max-w-2xl mx-auto mb-8">
            We are proud to partner with industry leaders across various
            sectors, providing exceptional power solutions.
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
                  <p className="font-semibold mb-4">{client}</p>
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
