
import { Link } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

import maintenance from "@/assets/blog1.png";
import kirloskarGenerator from "@/assets/BlogImages/kirloskar-genrator.png"
import whyKirloskar from "@/assets/BlogImages/why-choose-kirloskar-generator.jpg"
import SEO from "@/components/SEO";


const BenefitsOfDiesealGenerator = () => {
  return (
    <>
    <SEO
     title="Benefits Of Diesel Generator"
        description="Looking for a reliable Kirloskar Generator dealer? Explore affordable prices, expert installation, 24/7 service support & high-efficiency DG sets. Call now for details."
        canonical="https://www.kumarpower.com/"
        robots="noindex, nofollow"
         
    />
      <Header />

      <main className="bg-white min-h-screen text-black overflow-hidden">

        {/* HERO SECTION */}

        <section className="relative h-[500px] overflow-hidden">

          <img
            src={whyKirloskar}
            alt="Preventive Maintenance"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">

            <Link
              to="/blogs"
              className="text-blue-300 hover:text-white transition mb-6 text-sm tracking-wide"
            >
              ← Back To Blogs
            </Link>

            <div className="inline-flex items-center bg-white/20 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 w-fit">
              <span className="text-sm text-white tracking-wide">
                Kirloskar Generator
              </span>
            </div>

            {/* <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-5xl"
            >
              Preventive Maintenance: Extending Your Generator's Lifespan
            </motion.h1> */}

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-normal max-w-5xl">Why Kirloskar Generators Are Trusted Across All Industries</h1>

          </div>

        </section>

        {/* BLOG SECTION */}

        <section className="py-20">

          <div className="max-w-7xl mx-auto px-4">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">

              {/* LEFT CONTENT */}

              <div className="lg:col-span-8">

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >

                  <img
                    src={maintenance}
                    alt=""
                    className="w-full h-[500px] object-cover rounded-3xl shadow-xl mb-10"
                  />

                </motion.div>

                {/* CONTENT */}

                <article className="space-y-10">

                  <p className="text-xl leading-10 text-gray-700">
                    Abhishek A very comprehensive preventive maintenance strategy is one of the most important investments businesses can make to improve generator reliability, operational efficiency, and long-term performance.
                  </p>

                  {/* QUOTE */}

                  <div className="border-l-4 border-blue-500 pl-8 py-3 bg-blue-50 rounded-r-2xl">
                    <p className="text-2xl italic leading-10 text-gray-800">
                      “Routine maintenance prevents unexpected failures and significantly extends generator lifespan.”
                    </p>
                  </div>

                  {/* SECTION */}

                  <div>

                    <h2 className="text-4xl font-bold mb-6 text-black">
                      Essential Maintenance Schedule
                    </h2>

                    <p className="text-sm leading-9 text-gray-700 mb-6">
                      Industrial generators require structured maintenance intervals to maintain peak operational efficiency. Weekly inspections, monthly load testing, and annual servicing ensure optimal system performance.
                    </p>

                    <p className="text-lg leading-9 text-gray-700">
                      Preventive inspections help identify small issues before they become major equipment failures, reducing downtime and repair costs.
                    </p>

                    <img src={kirloskarGenerator} alt="kirloskar genrator"/>

                  </div>

                  {/* STATS */}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                      <h3 className="text-5xl font-bold text-blue-600 mb-2">
                        30%
                      </h3>

                      <p className="text-gray-600">
                        Lower repair costs
                      </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                      <h3 className="text-5xl font-bold text-blue-600 mb-2">
                        24/7
                      </h3>

                      <p className="text-gray-600">
                        Reliable operational support
                      </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                      <h3 className="text-5xl font-bold text-blue-600 mb-2">
                        20+
                      </h3>

                      <p className="text-gray-600">
                        Years extended lifespan
                      </p>
                    </div>

                  </div>

                  {/* SECOND SECTION */}

                  <div>

                    <h2 className="text-4xl font-bold mb-6 text-black">
                      Fluid Management
                    </h2>

                    <p className="text-lg leading-9 text-gray-700 mb-6">
                      Proper oil management and coolant monitoring are critical for preventing overheating and reducing internal engine wear.
                    </p>

                    <p className="text-lg leading-9 text-gray-700">
                      Using manufacturer-recommended lubricants and replacing filters regularly helps generators perform consistently under heavy industrial loads.
                    </p>

                  </div>
                  <img src={maintenance} alt="Kirloskar generaor"/>
               

                  {/* THIRD SECTION */}

                  <div>

                    <h2 className="text-4xl font-bold mb-6 text-black">
                      Smart Monitoring Systems
                    </h2>

                    <p className="text-lg leading-9 text-gray-700">
                      Modern monitoring systems use IoT and predictive analytics to track performance in real time. These intelligent systems notify operators about maintenance requirements before failures occur.
                    </p>

                  </div>

                </article>

              </div>

              {/* RIGHT SIDEBAR */}

              <div className="lg:col-span-4">

                <div className="sticky top-28 space-y-8">

                  {/* CATEGORY */}

                  <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">

                    <h3 className="text-2xl font-bold mb-6 text-black">
                      Categories
                    </h3>

                    <div className="space-y-4">

                      <Link
                        to="#"
                        className="block text-blue-600 hover:text-blue-800 transition border-b border-gray-200 pb-4"
                      >
                        Generator Maintenance
                      </Link>

                      <Link
                        to="#"
                        className="block text-blue-600 hover:text-blue-800 transition border-b border-gray-200 pb-4"
                      >
                        Industrial Automation
                      </Link>

                      <Link
                        to="#"
                        className="block text-blue-600 hover:text-blue-800 transition border-b border-gray-200 pb-4"
                      >
                        Backup Power Solutions
                      </Link>

                      <Link
                        to="#"
                        className="block text-blue-600 hover:text-blue-800 transition border-b border-gray-200 pb-4"
                      >
                        Energy Efficiency
                      </Link>

                      <Link
                        to="#"
                        className="block text-blue-600 hover:text-blue-800 transition"
                      >
                        Preventive Inspection
                      </Link>

                    </div>

                  </div>

                  {/* CTA */}

                  <div className="bg-[#254f81] rounded-3xl p-8 text-white">

                    <h3 className="text-3xl font-bold leading-tight mb-5">
                      Need Generator Maintenance Services?
                    </h3>

                    <p className="leading-8 text-white/90 mb-8">
                      Connect with Kumar Power for professional maintenance, repair, and industrial power support solutions.
                    </p>

                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center bg-white text-black px-7 py-4 rounded-xl font-semibold hover:bg-gray-100 transition w-full"
                    >
                      Contact Us
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default BenefitsOfDiesealGenerator;

