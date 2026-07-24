import { LinkText } from "@/components/ui/LinkText";
import BlogSection from "@/components/landing/BlogSection";
import SEO from "@/components/SEO";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { useSectionData } from "@/store/useCMSStore";

const Blogs = () => {
  const { data: heroData } = useSectionData<any>("blogs", "blogs");

  return (
    <>
      <SEO
        title={heroData.heroHeading || "Blogs | Kumar Power"}
        description={heroData.heroSub || "Expert Insights on Industrial Power Generation"}
        canonical="https://www.kumarpower.com/blogs"
        robots="index, follow"
      />

      <Header />

      <div className="relative bg-black text-white h-auto md:h-[350px] ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroData.heroBg})`,
            filter: "brightness(0.5)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
          {heroData.heroTagline && (
            <span className="text-[#F5B544] font-bold text-sm tracking-wider uppercase mb-3">
              {heroData.heroTagline}
            </span>
          )}
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            {heroData.heroHeading}
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-3 max-w-4xl text-justify"><LinkText text={heroData.heroSub} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
        </div>
      </div>
      <BlogSection />
      <Footer />
    </>
  );
};

export default Blogs;

