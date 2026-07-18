
import { Link } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

import weather from "@/assets/blog3.png";
import SEO from "@/components/SEO";

const GeneratorPerformance = () => {
  return (
    <>
    <SEO
         title="Benefits Of Diesel Generator"
            description="Looking for a reliable Kirloskar Generator dealer? Explore affordable prices, expert installation, 24/7 service support & high-efficiency DG sets. Call now for details."
            
            canonical="https://www.kumarpower.com/"
            robots="noindex, nofollow"
             
        />
      <Header />

      <main className="bg-black min-h-screen text-white">

        {/* HERO SECTION */}

        <section className="relative h-[320px] md:h-[450px] overflow-hidden">

          <img
            src={weather}
            alt="Generator Performance"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">

            <Link
              to="/blogs"
              className="text-white/80 hover:text-white transition mb-5"
            >
              ← Back To Blogs
            </Link>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold"
            >
              Optimizing Generator Performance in Extreme Weather Conditions
            </motion.h1>

          </div>

        </section>

        {/* BLOG CONTENT */}

        <section className="py-16">

          <div className="max-w-5xl mx-auto px-4">

            <div className="bg-white rounded-2xl overflow-hidden">

              <img
                src={weather}
                alt=""
                className="w-full h-[450px] object-cover"
              />

              <div className="p-8 md:p-12 text-gray-700">

                <p className="text-lg leading-8 mb-6">
                  Extreme weather conditions can severely impact generator performance if proper precautions aren't taken.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Temperature Regulation
                </h2>

                <p className="text-lg leading-8 mb-8">
                  In hot weather, ensure proper ventilation around your generator.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Moisture Protection
                </h2>

                <p className="text-lg leading-8">
                  Rain and humidity can damage electrical components.
                </p>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default GeneratorPerformance;
