import { LinkText } from "@/components/ui/LinkText";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { useState, useEffect, useLayoutEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion
import { useSectionData, usePageHeadingTag } from "@/store/useCMSStore";
import gallery from "@/assets/Gallery1.png";
import gallery2 from "@/assets/gallery2.png";
import gallery3 from "@/assets/gallery3.png";
import gallery4 from "@/assets/gallery4.png";
import gallery5 from "@/assets/gallery5.png";
import gallery6 from "@/assets/gallery6.png";
import gallery7 from "@/assets/gallery7.png";
import gallery8 from "@/assets/gallery8.png";
import gallery9 from "@/assets/gallery9.png";
import gal1 from "@/assets/gal1.png";
import gal2 from "@/assets/gal2.png";
import gal3 from "@/assets/gal3.png";
import gal4 from "@/assets/gal4.png";
import gal5 from "@/assets/gal6.png";
import event1 from "@/assets/Gallery/DIWALI PARTY (100).jpg";
import event2 from "@/assets/Gallery/DIWALI PARTY (105).jpg";
import event3 from "@/assets/Gallery/DIWALI PARTY (24).jpg";
import event4 from "@/assets/Gallery/DIWALI PARTY (28).jpg";
import event5 from "@/assets/Gallery/DIWALI PARTY (29).jpg";
import event6 from "@/assets/Gallery/DIWALI PARTY (30).jpg";
import event7 from "@/assets/Gallery/DIWALI PARTY (31).jpg";
import event8 from "@/assets/Gallery/DIWALI PARTY (32).jpg";
import event9 from "@/assets/Gallery/DIWALI PARTY (33).jpg";
import event10 from "@/assets/Gallery/DIWALI PARTY (4).jpg";
import event11 from "@/assets/Gallery/DIWALI PARTY (5).jpg";
import event12 from "@/assets/Gallery/DIWALI PARTY (53).jpg";
import event13 from "@/assets/Gallery/DIWALI PARTY (54).jpg";
import event14 from "@/assets/Gallery/DIWALI PARTY (55).jpg";
import event15 from "@/assets/Gallery/DIWALI PARTY (56).jpg";
import event16 from "@/assets/Gallery/DIWALI PARTY (57).jpg";
import event17 from "@/assets/Gallery/DIWALI PARTY (58).jpg";
import event18 from "@/assets/Gallery/DIWALI PARTY (59).jpg";
import event19 from "@/assets/Gallery/DIWALI PARTY (6).jpg";
import event20 from "@/assets/Gallery/DIWALI PARTY (60).jpg";
import event21 from "@/assets/Gallery/DIWALI PARTY (61).jpg";
import event22 from "@/assets/Gallery/DIWALI PARTY (62).jpg";
import event23 from "@/assets/Gallery/DIWALI PARTY (63).jpg";
import event24 from "@/assets/Gallery/DIWALI PARTY (64).jpg";
import event25 from "@/assets/Gallery/DIWALI PARTY (65).jpg";
import event26 from "@/assets/Gallery/DIWALI PARTY (66).jpg";
import event27 from "@/assets/Gallery/DIWALI PARTY (67).jpg";
import event28 from "@/assets/Gallery/DIWALI PARTY (68).jpg";
import event29 from "@/assets/Gallery/DIWALI PARTY (69).jpg";
import event30 from "@/assets/Gallery/DIWALI PARTY (70).jpg";
// Diwali Party images (all in 'events' category)
import diwali4 from "@/assets/Gallery/DIWALI PARTY (4).jpg";
import diwali5 from "@/assets/Gallery/DIWALI PARTY (5).jpg";
import diwali6 from "@/assets/Gallery/DIWALI PARTY (6).jpg";
import diwali7 from "@/assets/Gallery/DIWALI PARTY (7).jpg";
import diwali9 from "@/assets/Gallery/DIWALI PARTY (9).jpg";
import diwali24 from "@/assets/Gallery/DIWALI PARTY (24).jpg";
import diwali28 from "@/assets/Gallery/DIWALI PARTY (28).jpg";
import diwali29 from "@/assets/Gallery/DIWALI PARTY (29).jpg";
import diwali30 from "@/assets/Gallery/DIWALI PARTY (30).jpg";
import diwali31 from "@/assets/Gallery/DIWALI PARTY (31).jpg";
import diwali32 from "@/assets/Gallery/DIWALI PARTY (32).jpg";
import diwali33 from "@/assets/Gallery/DIWALI PARTY (33).jpg";
import diwali53 from "@/assets/Gallery/DIWALI PARTY (53).jpg";
import diwali54 from "@/assets/Gallery/DIWALI PARTY (54).jpg";
import diwali55 from "@/assets/Gallery/DIWALI PARTY (55).jpg";
import diwali56 from "@/assets/Gallery/DIWALI PARTY (56).jpg";
import diwali57 from "@/assets/Gallery/DIWALI PARTY (57).jpg";
import diwali58 from "@/assets/Gallery/DIWALI PARTY (58).jpg";
import diwali59 from "@/assets/Gallery/DIWALI PARTY (59).jpg";
import diwali60 from "@/assets/Gallery/DIWALI PARTY (60).jpg";
import diwali61 from "@/assets/Gallery/DIWALI PARTY (61).jpg";
import diwali62 from "@/assets/Gallery/DIWALI PARTY (62).jpg";
import diwali63 from "@/assets/Gallery/DIWALI PARTY (63).jpg";
import diwali64 from "@/assets/Gallery/DIWALI PARTY (64).jpg";
import diwali65 from "@/assets/Gallery/DIWALI PARTY (65).jpg";
import diwali66 from "@/assets/Gallery/DIWALI PARTY (66).jpg";
import diwali85 from "@/assets/Gallery/DIWALI PARTY (85).jpg";
import diwali86 from "@/assets/Gallery/DIWALI PARTY (86).jpg";
import diwali87 from "@/assets/Gallery/DIWALI PARTY (87).jpg";
import diwali88 from "@/assets/Gallery/DIWALI PARTY (88).jpg";
import diwali89 from "@/assets/Gallery/DIWALI PARTY (89).jpg";
import diwali90 from "@/assets/Gallery/DIWALI PARTY (90).jpg";
import diwali91 from "@/assets/Gallery/DIWALI PARTY (91).jpg";
import diwali92 from "@/assets/Gallery/DIWALI PARTY (92).jpg";
import diwali93 from "@/assets/Gallery/DIWALI PARTY (93).jpg";
import diwali94 from "@/assets/Gallery/DIWALI PARTY (94).jpg";
import diwali95 from "@/assets/Gallery/DIWALI PARTY (95).jpg";
import diwali96 from "@/assets/Gallery/DIWALI PARTY (96).jpg";
import diwali97 from "@/assets/Gallery/DIWALI PARTY (97).jpg";
import diwali98 from "@/assets/Gallery/DIWALI PARTY (98).jpg";
import diwali99 from "@/assets/Gallery/DIWALI PARTY (99).jpg";
import diwali100 from "@/assets/Gallery/DIWALI PARTY (100).jpg";
import diwali105 from "@/assets/Gallery/DIWALI PARTY (105).jpg";
import instal1 from "@/assets/Installation/instal1.png";
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
import instal12 from "@/assets/Installation/instal12.png";
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
import instal28 from "@/assets/Installation/instal28.png";
import SEO from "@/components/SEO";

import award1 from "@/assets/Award 1.png";
import award2 from "@/assets/award 2.png";
import award3 from "@/assets/award 3.png";
import award4 from "@/assets/award 4.png";
import ps from "@/assets/ps2.png";
import Portfolio from "@/assets/Brochure/PortfolioProfile.pdf";

// Diwali Party images (all in 'events' category)

// New award images from Cloudinary
const award5 =
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1763018711/gallery4_nwutsh_wg8ygw.png";
const award6 =
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1763018711/gallery3_dcqffp_geri2t.png";

// New image for Experience section
const experienceImage =
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1763019219/Group_9_cc74ol.png";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  size?: {
    colSpan: number;
    rowSpan: number;
  };
}

const Masonry = ({ images }: { images: GalleryImage[] }) => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for individual images - sliding from right to left
  const itemVariants = {
    hidden: { opacity: 0, x: 50 }, // Start from the right
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      key={images.map((img) => img.id).join("-")} // Force re-render on filter change
    >
      {images.map((image, index) => {
        // Calculate span classes based on image index for varying sizes
        const spanClasses = `
          ${index % 3 === 0 ? "col-span-2 row-span-2" : ""}
          ${index % 5 === 0 ? "md:col-span-2" : ""}
          ${index % 4 === 0 ? "lg:row-span-2" : ""}
        `;

        return (
          <motion.div
            key={image.id}
            className={`relative group overflow-hidden rounded-lg ${spanClasses}`}
            variants={itemVariants}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

const SimpleImageGrid = ({ images }: { images: GalleryImage[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative overflow-hidden rounded-lg group"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

const fallbackGalleryImages: GalleryImage[] = [
  // Award Ceremony images

  { id: 3, src: award3, alt: "Industry Leadership Award", category: "Award" },
  {
    id: 4,
    src: award4,
    alt: "Best Power Solutions Provider",
    category: "Award",
  },
  {
    id: 5,
    src: award5,
    alt: "Kumar Power Industry Recognition",
    category: "Award",
  },
  {
    id: 6,
    src: award6,
    alt: "Kumar Power Achievement Award",
    category: "Award",
  },

  // Diwali Party images (all in 'events' category)
  { id: 101, src: diwali4, alt: "Diwali Party 4", category: "events" },
  { id: 102, src: diwali5, alt: "Diwali Party 5", category: "events" },
  { id: 103, src: diwali6, alt: "Diwali Party 6", category: "events" },
  { id: 104, src: diwali7, alt: "Diwali Party 7", category: "events" },
  { id: 106, src: diwali24, alt: "Diwali Party 24", category: "events" },
  { id: 107, src: diwali28, alt: "Diwali Party 28", category: "events" },
  { id: 108, src: diwali29, alt: "Diwali Party 29", category: "events" },
  { id: 109, src: diwali30, alt: "Diwali Party 30", category: "events" },
  { id: 110, src: diwali31, alt: "Diwali Party 31", category: "events" },
  { id: 111, src: diwali32, alt: "Diwali Party 32", category: "events" },
  { id: 112, src: diwali33, alt: "Diwali Party 33", category: "events" },
  { id: 113, src: diwali53, alt: "Diwali Party 53", category: "events" },
  { id: 114, src: diwali54, alt: "Diwali Party 54", category: "events" },
  { id: 115, src: diwali55, alt: "Diwali Party 55", category: "events" },
  { id: 116, src: diwali56, alt: "Diwali Party 56", category: "events" },
  { id: 117, src: diwali57, alt: "Diwali Party 57", category: "events" },
  { id: 118, src: diwali58, alt: "Diwali Party 58", category: "events" },
  { id: 119, src: diwali59, alt: "Diwali Party 59", category: "events" },
  { id: 120, src: diwali60, alt: "Diwali Party 60", category: "events" },
  { id: 121, src: diwali61, alt: "Diwali Party 61", category: "events" },
  { id: 122, src: diwali62, alt: "Diwali Party 62", category: "events" },
  { id: 123, src: diwali63, alt: "Diwali Party 63", category: "events" },
  { id: 124, src: diwali64, alt: "Diwali Party 64", category: "events" },
  { id: 125, src: diwali65, alt: "Diwali Party 65", category: "events" },
  { id: 126, src: diwali66, alt: "Diwali Party 66", category: "events" },
  { id: 127, src: diwali85, alt: "Diwali Party 85", category: "events" },
  { id: 128, src: diwali86, alt: "Diwali Party 86", category: "events" },
  { id: 129, src: diwali87, alt: "Diwali Party 87", category: "events" },
  { id: 130, src: diwali88, alt: "Diwali Party 88", category: "events" },
  { id: 131, src: diwali89, alt: "Diwali Party 89", category: "events" },
  { id: 132, src: diwali90, alt: "Diwali Party 90", category: "events" },
  { id: 133, src: diwali91, alt: "Diwali Party 91", category: "events" },
  { id: 134, src: diwali92, alt: "Diwali Party 92", category: "events" },
  { id: 135, src: diwali93, alt: "Diwali Party 93", category: "events" },
  { id: 136, src: diwali94, alt: "Diwali Party 94", category: "events" },
  { id: 137, src: diwali95, alt: "Diwali Party 95", category: "events" },
  { id: 138, src: diwali96, alt: "Diwali Party 96", category: "events" },
  { id: 139, src: diwali97, alt: "Diwali Party 97", category: "events" },
  { id: 140, src: diwali98, alt: "Diwali Party 98", category: "events" },
  { id: 141, src: diwali99, alt: "Diwali Party 99", category: "events" },
  { id: 142, src: diwali100, alt: "Diwali Party 100", category: "events" },
  { id: 143, src: diwali105, alt: "Diwali Party 105", category: "events" },
  // Installation images (all in 'installations' category)
  // { id: 201, src: instal1, alt: "Installation 1", category: "installations" },
  { id: 202, src: instal2, alt: "Installation 2", category: "installations" },
  { id: 203, src: instal3, alt: "Installation 3", category: "installations" },
  { id: 204, src: instal4, alt: "Installation 4", category: "installations" },
  { id: 205, src: instal5, alt: "Installation 5", category: "installations" },
  { id: 206, src: instal6, alt: "Installation 6", category: "installations" },
  { id: 207, src: instal7, alt: "Installation 7", category: "installations" },
  { id: 208, src: instal8, alt: "Installation 8", category: "installations" },
  { id: 209, src: instal9, alt: "Installation 9", category: "installations" },
  {
    id: 210,
    src: instal10,
    alt: "Installation 10",
    category: "installations",
  },
  {
    id: 211,
    src: instal11,
    alt: "Installation 11",
    category: "installations",
  },
  {
    id: 213,
    src: instal13,
    alt: "Installation 13",
    category: "installations",
  },
  {
    id: 214,
    src: instal14,
    alt: "Installation 14",
    category: "installations",
  },
  {
    id: 215,
    src: instal15,
    alt: "Installation 15",
    category: "installations",
  },
  {
    id: 216,
    src: instal16,
    alt: "Installation 16",
    category: "installations",
  },
  {
    id: 217,
    src: instal17,
    alt: "Installation 17",
    category: "installations",
  },
  {
    id: 218,
    src: instal18,
    alt: "Installation 18",
    category: "installations",
  },
  {
    id: 219,
    src: instal19,
    alt: "Installation 19",
    category: "installations",
  },
  {
    id: 220,
    src: instal20,
    alt: "Installation 20",
    category: "installations",
  },
  {
    id: 221,
    src: instal21,
    alt: "Installation 21",
    category: "installations",
  },
  {
    id: 222,
    src: instal22,
    alt: "Installation 22",
    category: "installations",
  },
  {
    id: 223,
    src: instal23,
    alt: "Installation 23",
    category: "installations",
  },
  {
    id: 224,
    src: instal24,
    alt: "Installation 24",
    category: "installations",
  },
  {
    id: 225,
    src: instal25,
    alt: "Installation 25",
    category: "installations",
  },
  {
    id: 226,
    src: instal26,
    alt: "Installation 26",
    category: "installations",
  },
  {
    id: 227,
    src: instal27,
    alt: "Installation 27",
    category: "installations",
  },
  {
    id: 228,
    src: instal28,
    alt: "Installation 28",
    category: "installations",
  },
];

const fallbackStoryImages: GalleryImage[] = [
  {
    id: 9,
    src: gal1,
    alt: "Manufacturing facility",
    category: "factory",
  },
  {
    id: 10,
    src: gal2,
    alt: "NTPC Power Plant",
    category: "installations",
  },
  {
    id: 11,
    src: gal3,
    alt: "Cyclone Relief",
    category: "on-site",
  },
  {
    id: 12,
    src: gal4,
    alt: "Eco-Friendly Generators",
    category: "events",
  },
];

const PhotoGallery = () => {
  const { data: rawCMSData } = useSectionData<any>("photo-gallery");
  const cmsData = rawCMSData || {};
  const HeadingTag = usePageHeadingTag("photo-gallery");

  const heroHeading =
    cmsData.hero?.heading || cmsData.heroHeading || cmsData.title || "";
  const heroSubtitle =
    cmsData.hero?.subtitle || cmsData.heroSubtitle || cmsData.subtitle || "";
  const heroImage = cmsData.hero?.bgImage || "";

  const rawExpTitle = cmsData.experience?.title || "";
  const expTitleParts = rawExpTitle.split(" ");
  const experienceTitlePart1 = expTitleParts[0] || "";
  const experienceTitlePart2 = expTitleParts.slice(1).join(" ");
  const experienceDesc = cmsData.experience?.description || "";
  const experienceBtn1Text = cmsData.experience?.btn1Label || "";
  const experienceBtn1Link = cmsData.experience?.btn1Url || "";
  const experienceBtn2Text = cmsData.experience?.btn2Label || "";
  const experienceBtn2Link =
    cmsData.experience?.btn2Url || cmsData.experience?.profilePdf || "";
  const expImage = cmsData.experience?.bgImage || "";

  const [activeFilter, setActiveFilter] = useState("installations");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([]);
  const [filteredStoryImages, setFilteredStoryImages] = useState<
    GalleryImage[]
  >([]);
  const [visibleCount, setVisibleCount] = useState(12);

  const seeMoreLabel = cmsData.seeMoreLabel || "See More";
  const emptyGalleryMessage =
    cmsData.emptyGalleryMessage ||
    "No gallery images found matching your filter criteria.";
  const emptyGalleryBtnLabel =
    cmsData.emptyGalleryBtnLabel || "Show Installation Images";
  const showLessLabel = cmsData.showLessLabel || "Show Less";

  const filters = [
    { id: "installations", label: "Installations" },
    { id: "events", label: "Events" },
    { id: "Award", label: "Award Ceremony" },
  ];

  const galleryImages: GalleryImage[] = useMemo(() => {
    const cmsPhotos = Array.isArray(cmsData.photos) ? cmsData.photos : [];
    // Filter out dummy 111-byte blank images from seed
    const validCmsPhotos = cmsPhotos.filter(
      (p) => !p.src || !p.src.includes("kaiglbifaeze81525a0m"),
    );

    // If CMS has very few photos (like the initial seed), append static ones so the gallery looks full!
    // Always append static images to make the gallery look full (12+ images)
    return [...validCmsPhotos, ...fallbackGalleryImages];
    return validCmsPhotos;
  }, [cmsData.photos]);
  const storyImages: GalleryImage[] = useMemo(() => {
    const cmsStory = Array.isArray(cmsData.storyImages)
      ? cmsData.storyImages
      : [];
    return [...cmsStory, ...fallbackStoryImages];
    return cmsStory;
  }, [cmsData.storyImages]);

  // Filter images based on active filter and search query
  useEffect(() => {
    setVisibleCount(12); // Reset see more on filter/search change
    const filterImages = () => {
      let filtered = [...galleryImages];
      // Remove the "all" condition since we no longer have it
      filtered = filtered.filter((img) => img.category === activeFilter);

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(
          (img) =>
            img.alt.toLowerCase().includes(query) ||
            img.category.toLowerCase().includes(query),
        );
      }
      setFilteredImages(filtered);

      // Separately filter story images for the "Real Stories" section
      let filteredStories = [...storyImages];
      filteredStories = filteredStories.filter(
        (img) => img.category === activeFilter,
      );

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredStories = filteredStories.filter(
          (img) =>
            img.alt.toLowerCase().includes(query) ||
            img.category.toLowerCase().includes(query),
        );
      }
      setFilteredStoryImages(filteredStories);
    };
    filterImages();
  }, [activeFilter, searchQuery, galleryImages, storyImages]);

  return (
    <div className="min-h-screen bg-background">
      {/* <SEOJsonLD /> */}
      <SEO
        title="Kumar Power - Photo Gallery | Explore Our Legacy"
        description="Explore our legacy in action through real project images. View Kumar Power’s photo gallery showcasing installations, on-site work, and power solutions in action."
        canonical="https://kumarpower.com/about/PhotoGallery"
      />
      <Header />

      {/* Hero Banner - Updated to match the image exactly */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl w-full mx-auto px-6">
            <HeadingTag className="text-5xl md:text-6xl font-bold text-white mb-2">
              {heroHeading}
            </HeadingTag>
            <p className="text-white text-lg">
              <LinkText
                text={heroSubtitle}
                linkClassName="text-[#2D6FBA] hover:underline font-bold"
              />
            </p>
          </div>
        </div>
        <img
          src={heroImage}
          alt="Warehouse with yellow shelving"
          className="w-full h-[400px] object-cover"
        />
      </section>

      {/* Filter Controls */}
      <section className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
            <span className="text-sm text-gray-500">Filter Gallery</span>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-1 text-sm rounded-md ${
                  activeFilter === filter.id
                    ? "bg-[#2D6FBA] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="relative"></div>
        </div>
      </section>

      {/* Featured Gallery - Modified to use SimpleImageGrid instead of SlidingGallery */}
      <section className="py-10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Featured Gallery
          </h2>

          <AnimatePresence mode="wait">
            {filteredImages.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <p className="text-white text-lg">
                  <LinkText
                    text={emptyGalleryMessage}
                    linkClassName="text-[#2D6FBA] hover:underline font-bold"
                  />
                </p>
                <button
                  onClick={() => {
                    setActiveFilter("installations");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 bg-[#2D6FBA] text-white rounded-md hover:bg-[#22548e] transition-colors"
                >
                  {emptyGalleryBtnLabel}
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="gallery"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <SimpleImageGrid
                  images={filteredImages.slice(0, visibleCount)}
                />
                <div className="flex justify-center items-center gap-4 mt-8">
                  {filteredImages.length > visibleCount ? (
                    <button
                      className="px-6 py-2 bg-[#2D6FBA] text-white rounded hover:bg-[#22548e] transition-colors"
                      onClick={() => setVisibleCount((prev) => prev + 12)}
                    >
                      {seeMoreLabel}
                    </button>
                  ) : visibleCount > 12 ? (
                    <button
                      className="px-6 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition-colors"
                      onClick={() => setVisibleCount(12)}
                    >
                      {showLessLabel}
                    </button>
                  ) : null}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Experience Power Excellence Section */}
      <section className="py-10 bg-black text-white ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4">
                {experienceTitlePart1}{" "}
                <span className="text-blue-400">{experienceTitlePart2}</span>
              </h3>
              <p className="text-sm mb-6">
                <LinkText
                  text={experienceDesc}
                  linkClassName="text-[#2D6FBA] hover:underline font-bold"
                />
              </p>
              <div className="flex flex-wrap gap-4">
                {experienceBtn1Text && (
                  <a
                    href={experienceBtn1Link || "/contact"}
                    className="bg-[#2D6FBA] text-white text-sm px-6 py-2 rounded hover:bg-[#22548e] transition-colors"
                  >
                    {experienceBtn1Text}
                  </a>
                )}
                {experienceBtn2Text && (
                  <a
                    href={experienceBtn2Link || Portfolio}
                    download={
                      experienceBtn2Link === Portfolio ||
                      experienceBtn2Link === ""
                    }
                    className="border border-white text-white text-sm px-6 py-2 rounded hover:bg-white hover:text-black transition-colors"
                  >
                    {experienceBtn2Text}
                  </a>
                )}
              </div>
            </div>
            {expImage && (
              <div className="flex items-center justify-center">
                <img
                  src={expImage}
                  alt="Kumar Power excellence showcase"
                  className="w-full h-auto max-h-[350px] rounded object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PhotoGallery;
