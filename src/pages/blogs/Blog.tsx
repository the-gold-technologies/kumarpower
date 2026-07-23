import BlogSection from "@/components/landing/BlogSection";
import SEO from "@/components/SEO";
import hero from "@/assets/Products/HeropBG.png";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
const Blogs = () => {
  return (
    <>
      <SEO
        title="Benefits Of Diesel Generator"
        description="Looking for a reliable Kirloskar Generator dealer? Explore affordable prices, expert installation, 24/7 service support & high-efficiency DG sets. Call now for details."
        canonical="https://www.kumarpower.com/blogs"
        robots="noindex, nofollow"
      />

      <Header />

      <div className="relative bg-black text-white h-auto md:h-[350px] ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${hero})`,
            filter: "brightness(0.5)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            Our Blogs: Expert Guide to Industrial Power Generation
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-3 max-w-4xl text-justify">
            Kumar Power provides expert insights on industrial power generation,
            focusing on Kirloskar generator efficiency, CPCB IV+ compliance, and
            energy management for continuous operations. The blog serves as a
            resource for manufacturing, commercial, and healthcare sectors
            seeking to optimize power infrastructure and reduce downtime. Read
            more at Kumar Power.
          </p>
        </div>
      </div>
      <BlogSection />
      <Footer />
    </>
  );
};

export default Blogs;
