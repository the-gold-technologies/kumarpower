import { LinkText } from "@/components/ui/LinkText";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionData, usePageHeadingTag } from "@/store/useCMSStore";
import SEO from "@/components/SEO";
import { downloadPdf } from "@/lib/utils";

interface GalleryImage {
  id: string | number;
  src: string;
  alt: string;
  category: string;
}

const SimpleImageGrid = ({ images }: { images: GalleryImage[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

const PhotoGallery = () => {
  const { data: cmsData = {} } = useSectionData<any>(
    "photo-gallery",
    "photo-gallery"
  );
  const HeadingTag = usePageHeadingTag("photo-gallery");

  const heroHeading = cmsData.hero?.heading || "";
  const heroSubtitle = cmsData.hero?.subtitle || "";
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
  const [visibleCount, setVisibleCount] = useState(12);

  const seeMoreLabel = cmsData.seeMoreLabel || "See More";
  const showLessLabel = cmsData.showLessLabel || "Show Less";

  const filters = [
    { id: "installations", label: "Installations" },
    { id: "events", label: "Events" },
    { id: "Award", label: "Award Ceremony" },
  ];

  const galleryImages: GalleryImage[] = useMemo(() => {
    return Array.isArray(cmsData.photos) ? cmsData.photos : [];
  }, [cmsData.photos]);

  // Filter images based on active filter and search query
  useEffect(() => {
    setVisibleCount(12);
    let filtered = [...galleryImages];
    filtered = filtered.filter(
      (img) => img.category?.toLowerCase() === activeFilter.toLowerCase()
    );

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (img) =>
          img.alt?.toLowerCase().includes(query) ||
          img.category?.toLowerCase().includes(query)
      );
    }
    setFilteredImages(filtered);
  }, [activeFilter, searchQuery, galleryImages]);

  return (
    <div className="min-h-screen bg-background">
      <SEOJsonLD />
      <SEO
        pageSlug="photo-gallery"
        title="Kumar Power - Photo Gallery | Explore Our Legacy"
        description="Explore our legacy in action through real project images. View Kumar Power’s photo gallery showcasing installations, on-site work, and power solutions in action."
      />
      <Header />

      {/* Hero Banner */}
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
        {heroImage && (
          <img
            src={heroImage}
            alt="Hero background"
            className="w-full h-[400px] object-cover"
          />
        )}
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
                className={`px-4 py-1 text-sm rounded-md transition-colors ${
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

      {/* Featured Gallery */}
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
                  No gallery images found matching your filter criteria.
                </p>
                <button
                  onClick={() => {
                    setActiveFilter("installations");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 bg-[#2D6FBA] text-white rounded-md hover:bg-[#22548e] transition-colors"
                >
                  Show Installation Images
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
                  {filteredImages.length > visibleCount && seeMoreLabel ? (
                    <button
                      className="px-6 py-2 bg-[#2D6FBA] text-white rounded hover:bg-[#22548e] transition-colors"
                      onClick={() => setVisibleCount((prev) => prev + 12)}
                    >
                      {seeMoreLabel}
                    </button>
                  ) : visibleCount > 12 && showLessLabel ? (
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
                    href={experienceBtn1Link}
                    className="bg-[#2D6FBA] text-white text-sm px-6 py-2 rounded hover:bg-[#22548e] transition-colors"
                  >
                    {experienceBtn1Text}
                  </a>
                )}
                {experienceBtn2Text && (
                  <button
                    type="button"
                    onClick={() => {
                      if (experienceBtn2Link) {
                        downloadPdf(
                          experienceBtn2Link,
                          "Kumar Power Company Profile.pdf",
                        );
                      }
                    }}
                    className="border border-white text-white text-sm px-6 py-2 rounded hover:bg-white hover:text-black transition-colors cursor-pointer"
                  >
                    {experienceBtn2Text}
                  </button>
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
