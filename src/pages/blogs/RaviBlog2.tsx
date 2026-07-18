
import { Link } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

import sustainable from "@/assets/blog2.png";
import SEO from "@/components/SEO";

const RaviBlog2 = () => {
  return (
    <>
    <SEO
         title="Benefits Of Diesel Generator"
            description="Looking for a reliable Kirloskar Generator dealer? Explore affordable prices, expert installation, 24/7 service support & high-efficiency DG sets. Call now for details."
            
            canonical="https://www.kumarpower.com/"
            robots="noindex, nofollow"
             
        />
      <Header />

      <main className="bg-[#050505] min-h-screen text-white overflow-hidden">

        {/* HERO SECTION */}

        <section className="relative min-h-[85vh] flex items-center overflow-hidden">

          <img
            src={sustainable}
            alt="Sustainable Power Solutions"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-[#050505]"></div>

          <div className="absolute inset-0 backdrop-blur-[2px]"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >

              <Link
                to="/blogs"
                className="inline-flex items-center text-white/80 hover:text-white transition mb-8 text-sm tracking-wide"
              >
                ← Back To Blogs
              </Link>

              <div className="inline-flex items-center bg-[#2D6FBA]/20 border border-[#2D6FBA]/40 px-4 py-2 rounded-full mb-6 backdrop-blur-md">
                <span className="text-sm text-[#8FC8FF] tracking-wide">
                  INDUSTRIAL POWER • SUSTAINABILITY
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-7xl font-bold leading-[1.1] mb-8"
              >
                The Future of Sustainable Power Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-2xl text-white/75 leading-9 max-w-3xl"
              >
                Discover how renewable energy integration and intelligent industrial systems are transforming the future of backup power infrastructure.
              </motion.p>

              {/* AUTHOR */}

              <div className="flex items-center gap-5 mt-10">

                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2D6FBA] to-cyan-400"></div>

                <div>
                  <p className="font-semibold text-lg">
                    Kumar Power Editorial Team
                  </p>

                  <p className="text-white/60 text-sm">
                    Published • 12 May 2026
                  </p>
                </div>

              </div>

            </motion.div>

          </div>

        </section>

        {/* MAIN CONTENT */}

        <section className="relative py-20">

          <div className="max-w-7xl mx-auto px-4">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* LEFT CONTENT */}

              <div className="lg:col-span-8">

                {/* FEATURE IMAGE */}

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-3xl mb-12 shadow-2xl"
                >

                  <img
                    src={sustainable}
                    alt=""
                    className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
                  />

                </motion.div>

                {/* ARTICLE */}

                <article className="space-y-10">

                  <p className="text-xl leading-10 text-white/80">
                    The industrial power landscape is rapidly evolving as sustainability becomes a major operational priority for enterprises worldwide. Organizations are increasingly shifting toward intelligent power ecosystems that combine renewable energy, automation, and resilient backup infrastructure.
                  </p>

                  {/* QUOTE */}

                  <div className="border-l-4 border-[#2D6FBA] pl-8 py-3 bg-white/[0.03] rounded-r-2xl">
                    <p className="text-2xl italic leading-10 text-white/90">
                      “Sustainable industrial energy is no longer an innovation — it is becoming the global standard.”
                    </p>
                  </div>

                  {/* SECTION */}

                  <div>

                    <h2 className="text-4xl font-bold mb-6">
                      Hybrid Power Systems
                    </h2>

                    <p className="text-lg leading-9 text-white/75 mb-6">
                      Modern industries are integrating solar arrays, smart battery systems, and diesel generators into unified hybrid infrastructures. These systems intelligently distribute power according to operational demand while significantly reducing fuel dependency.
                    </p>

                    <p className="text-lg leading-9 text-white/75">
                      Hybrid systems also minimize downtime risks and improve operational continuity in manufacturing plants, data centers, healthcare facilities, and commercial infrastructure.
                    </p>

                  </div>

                  {/* STATS */}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-8">
                      <h3 className="text-5xl font-bold text-[#57B4FF] mb-2">
                        40%
                      </h3>

                      <p className="text-white/70">
                        Reduction in fuel consumption
                      </p>
                    </div>

                    <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-8">
                      <h3 className="text-5xl font-bold text-[#57B4FF] mb-2">
                        65%
                      </h3>

                      <p className="text-white/70">
                        Better operational efficiency
                      </p>
                    </div>

                    <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-8">
                      <h3 className="text-5xl font-bold text-[#57B4FF] mb-2">
                        24/7
                      </h3>

                      <p className="text-white/70">
                        Intelligent monitoring systems
                      </p>
                    </div>

                  </div>

                  {/* SECOND SECTION */}

                  <div>

                    <h2 className="text-4xl font-bold mb-6">
                      Energy Storage Advancements
                    </h2>

                    <p className="text-lg leading-9 text-white/75 mb-6">
                      Advances in lithium-ion battery technology have dramatically improved storage capabilities while reducing overall deployment costs. Energy storage now enables businesses to utilize renewable energy more efficiently during peak operational hours.
                    </p>

                    <p className="text-lg leading-9 text-white/75">
                      Smart energy storage also improves grid independence and supports uninterrupted operations during outages or energy fluctuations.
                    </p>

                  </div>

                  {/* THIRD SECTION */}

                  <div>

                    <h2 className="text-4xl font-bold mb-6">
                      AI Driven Power Management
                    </h2>

                    <p className="text-lg leading-9 text-white/75">
                      Artificial intelligence is transforming industrial energy systems through predictive analytics, automated maintenance scheduling, and dynamic load balancing. AI powered systems optimize energy efficiency while reducing operational risks and maintenance costs.
                    </p>

                  </div>

                </article>

              </div>

              {/* SIDEBAR */}

              <div className="lg:col-span-4">

                <div className="sticky top-28 space-y-8">

                  {/* SIDEBAR CARD */}

                  <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

                    <h3 className="text-2xl font-bold mb-6">
                      Related Topics
                    </h3>

                    <div className="space-y-4">

                      <div className="border-b border-white/10 pb-4">
                        <p className="text-white/80 hover:text-[#57B4FF] transition cursor-pointer">
                          Smart Industrial Automation
                        </p>
                      </div>

                      <div className="border-b border-white/10 pb-4">
                        <p className="text-white/80 hover:text-[#57B4FF] transition cursor-pointer">
                          Renewable Backup Systems
                        </p>
                      </div>

                      <div className="border-b border-white/10 pb-4">
                        <p className="text-white/80 hover:text-[#57B4FF] transition cursor-pointer">
                          Industrial Battery Technology
                        </p>
                      </div>

                      <div>
                        <p className="text-white/80 hover:text-[#57B4FF] transition cursor-pointer">
                          Sustainable Manufacturing
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* CTA */}

                  <div className="bg-gradient-to-br from-[#2D6FBA] to-cyan-500 rounded-3xl p-8">

                    <h3 className="text-3xl font-bold leading-tight mb-5">
                      Need Sustainable Industrial Solutions?
                    </h3>

                    <p className="text-white/90 leading-8 mb-8">
                      Connect with Kumar Power for advanced industrial power systems and intelligent energy infrastructure.
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

export default RaviBlog2;

