import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

import maintenance from "@/assets/blog1.png";
import blogBG from "@/assets/BlogImages/kirloskar-silent-generator-bg.jpg";
import kirloskarGenerator from "@/assets/BlogImages/kirloskar-genrator.png";
import SEO from "@/components/SEO";
import myBlogImage from "@/assets/BlogImages/kirloskar-silent-generator-cpcb-genset-75dba-noise.jpg";
import myBlogImage2 from "@/assets/BlogImages/kirloskar-silent-green-generator.jpg";
import myBlogFeatureImage from "@/assets/BlogImages/kirloskar-silent-generator-cpcb-genset-75dba-noise-feature-image.jpg";
import { Helmet } from "react-helmet-async";

//Silent Generator Feature
const silentFeatures = [
  {
    id: 1,
    bullets: [
      {
        featureList: (
          <>
            <strong>Better Noise Control -</strong>An in-built silencer inside the acoustic canopy
          </>
        ),
      },
      {
        featureList: (
          <>
            <strong>O2E Series Engines - </strong>optimized for fuel efficiency even at 50% load, not just full load
          </>
        ),
      },
      {
        featureList: (
          <>
            <strong>EGR (Exhaust Gas Recirculation) System - </strong>To reduce NOx emissions
          </>
        ),
      },
      {
        featureList: (
          <>
            <strong>CRDi (Common Rail Direct Injection) Technology - </strong>In mid to large range models for smoother, quieter, powerful operation
          </>
        ),
      },
      {
        featureList: (
          <>
            <strong>KRM Remote Monitoring System - </strong>Real-time genset data on your phone or desktop
          </>
        ),
      },
      {
        featureList: (
          <>
            <strong>KG640C / KG645C - </strong>Microprocessor-based controller with graphical LCD
          </>
        ),
      },
      {
        featureList: (
          <>
            <strong>Class H Insulation - </strong>On alternator windings for long-term reliability
          </>
        ),
      },
      {
        featureList: (
          <>
            <strong>Voltage Build-Up Time - </strong>Of less than 2 seconds at rated RPM
          </>
        ),
      },
    ],
  },
];

const dgRange = [
  { range: "7.5 kVA – 20 kVA", model: "KG4-7.5WS1, KG4-10WS1, KG4-15WS1, KG4-20WS1" },
  { range: "25 kVA – 58.5 kVA", model: "KG4-25WS1, KG4-30WS1, KG4-40WS1, KG4-58.5WS" },
  { range: "82.5 kVA – 160 kVA", model: "KG4-82.5WS1, KG4-100WS1, KG4-125WS1, KG4-160WS11" },
  { range: "200 kVA – 250 kVA", model: "KG4-200WS1, KG4-250WS1" },
  { range: "320 kVA – 750 kVA", model: "KG4-320WS1, KG4-400WS11, KG4-500WS, KG4-625WS, KG4-750WS" },
];

const rightGenset = [
  {
    id: 1,
    bullets: [
      {
        dataList: (
          <>
            <strong>CRDi fuel injection </strong>for smooth and smoke-free performance
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>AREP winding </strong>on alternators for better non-linear load handling
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>DEF (Diesel Exhaust Fluid) </strong>tank for emission compliance in larger models
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Synchronization capability </strong>for parallel operation of multiple gensets
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Modbus communication support </strong>for integration with building management systems
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>
              <a href="https://www.kumarpower.com/blog/amf-panel-for-dg-set" className="text-blue-700">
                AMF Panel for DG Set
              </a>{" "}
            </strong>
            Installation is available for advanced generator control and safety
          </>
        ),
      },
    ],
  },
];

//DG SET SPEC
const dgsetSpec = [
  {
    id: 1,
    bullets: [
      {
        dataList: (
          <>
            <strong>Rated speed:</strong> 1500 RPM (consistent across all models)
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Lube oil change interval:</strong> Every 500 hours — lower maintenance frequency
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Alternator efficiency:</strong> Up to 94–95.7% at full load (higher range models)
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Governing class:</strong> G2 (small range) and G3 (medium to large range) as per ISO 8528
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Power factor:</strong> 0.8 lagging (standard across all models)
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Voltage dip at full load:</strong> Less than 20% — stable power supply for sensitive equipment
          </>
        ),
      },
    ],
  },
];

//DG SET SPEC
const greenGenerator = [
  {
    id: 1,
    bullets: [
      {
        dataList: (
          <>
            <strong>No diesel storage required - </strong>fuel is piped directly, metered, and online
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>No adulteration risk - </strong>constant fuel quality guaranteed
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Lower operating cost - </strong>compared to diesel in most urban areas with PNG supply
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Built-in catalytic converter as standard - </strong>cleaner exhaust as compared to diesel
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Plug and play design - </strong>faster installation and commissioning
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>1 year / 3,000 hours warranty - </strong> on the complete genset
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Noise level maintained below 75 dBA - </strong>qualifies as a true silent generator
          </>
        ),
      },
    ],
  },
];

//Benefits OF Silent Generator
const benefitsSpec = [
  {
    id: 1,
    bullets: [
      {
        dataList: (
          <>
            <strong>Low noise output - </strong>operates below 75 dBA, suitable for residential, commercial, and hospital environments
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Weather-resistant enclosure - </strong>protects internal components from dust, moisture, and direct sunlight
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Longer engine life - </strong>enclosed design reduces exposure to harsh external conditions
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>CPCB IV+ compliant - </strong>meets India's latest emission and noise regulations, avoiding legal issues
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Fuel efficient - </strong>Kirloskar's O2E technology optimizes consumption even at partial loads (50–75%), where generators typically run most of the time
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Remote monitoring ready - </strong>KRM system sends real-time alerts, so you always know your generator's status
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Suitable for all settings - </strong>homes, offices, clinics, hotels, data centres, and large industrial facilities
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Low maintenance - </strong>500-hour lube oil change intervals and Anubandhan IV+ AMC options reduce ongoing costs
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Better resale value - </strong>branded, CPCB-compliant silent gensets hold their value better in the second-hand market
          </>
        ),
      },
    ],
  },
];

//Silent Generator For Home
const homeGenerator = [
  {
    id: 1,
    bullets: [
      { dataList: "Noise level below 75 dBA with acoustic canopy" },
      { dataList: "Compact footprint - takes up minimal space on a terrace or backyard" },
      { dataList: "Fuel tank capacity of 32 to 40 litres for long extended backup hours" },
      { dataList: "12V electric start for easy, hassle-free operation" },
      { dataList: "AMF (Auto Mains Failure) feature — generator starts automatically when power goes out" },
    ],
  },
];

const faqsList = [
  {
    question: "Is it now mandatory to buy a CPCB IV+ compliant Kirloskar silent generator in India",
    answer:
      "Yes. As of mid 2023, the Central Pollution Control Board (CPCB) made CPCB IV+ compliance mandatory for all new diesel generator sets from 7.5 kVA to 1500 kVA or more. If you buy a non-compliant generator today, it can risk in legal penalties, the forced replacement, and buness operational shutdowns. Especialy in Delhi NCR and other pollutios sensitive zones. <a href='https://www.kumarpower.com'>Kirloskar Generators</a> current lineup, including the KOEL Green series, is fully CPCB IV+ certified.",
  },
  {
    question: "What is the difference between a silent generator or DG Set?",
    answer:
      "The DG set is a type of silent generator running on diesel. In the Kirloskar DG Sets, ranging from 7.5 kVA to 1500 kVA (160kVA, 200kVA, 250kVA, 320kVA, 400kVA, 500kVA, 750kVA, 1010kVA, 1250kVA, 1500kVA & <a href='/products/optiprime'>Optiprime Genset</a> are most famous), follow the CPCB IV+ emission guidelines while maintaining the noise level below 75 decibels. Kirloskar silent generators are available in both diesel and gas options.",
  },
  {
    question: "How much does it actually cost to run a Kirloskar silent generator per month?",
    answer:
      "The monthly running cost depends on the load size and usage hours. For a 82.5 kVA Kirloskar silent diesel generator running 25 hrs a month at 75% load, fuel consumption is roughly around 13-14ltr per hour. With current diesel prices (~₹95–105/litre), this works out to approximately ₹30,875-₹36,750 per month in fuel alone. With Anubandhan IV+ no need to worry but if not than add monthly maintenance of ₹2,500-₹5,000, and your total monthly cost lands between ₹33,375-₹41,750. Far lower than diesel generator alternatives of comparable power due to Kirloskar's O2E fuel efficiency technology.",
  },
  {
    question: "Can a Kirloskar silent generator handle the continuous power needs of a data centre or server room?",
    answer:
      "Yes, but with careful load planning. Kirloskar's high-capacity DV and SL90 series gensets - available in ranges up to 1500 kVA, Optiprime 2020kVA - are actively used in data centres and telecom infrastructure across India. For data centres, the key requirement is N+1 or 2N redundancy, seamless <a href='/products/panels'>AMF panel</a> (Automatic Mains Failure) integration, and load bank testing capability. Kirloskar gensets support all three. To configure the right DG set + AMF panel combination for your data load free to ask Kumar Power (ISO9001:2015) an authorised Kirloskar Generator Dealer in Delhi. ",
  },
  {
    question: "Is a Kirloskar silent generator safe to use in a hospital or healthcare facility?",
    answer:
      "Absolutely. Hospitals require generators that provide clean, stable power without voltage spikes, and with noise low enough not to disturb patients. Kirloskar silent generators operate at less than 75 dB(A) @1 meter distance, well within acceptable hospital noise limits. Their alternators maintain voltage regulation within ±1%, which protects sensitive medical equipment like ventilators and imaging machines. Most hospital-grade installations pair Kirloskar gensets with a UPS system for zero-transfer-time switching.",
  },
  {
    question: "Which silent generator brand is better for Indian conditions - Kirloskar or Cummins?",
    answer:
      "Both are excellent brands, but they serve slightly different priorities. Kirloskar (DG Set & KOEL Green) is an india brand and built specifically for Indian conditions like heat, dust, and voltage fluctuations, and has a wider service network with 420+ touchpoints across India. Cummins scores higher in very large capacity ranges (above 1000 or 1500 kVA) and international deployments. For small-to-mid range (7.5-500 kVA), even high range like 1500kVA needs in Indian cities and semi-urban areas, Kirloskar generally prefers on serviceability, spare part availability, and total cost of ownership.",
  },
  {
    question: "What warranty does a Kirloskar silent generator come with, and what does it cover?",
    answer:
      "Kirloskar silent generators (KOEL Green series) come with a standard 2-year warranty (calculated from the installation or invoice date) or a 5000-hour warranty (whichever comes first) that covers manufacturing defects in the engine and alternator. One more thing to understand - It does not cover wear-and-tear items like filters, belts, or damage from improper fuel use, but labour is free during the warranty period for on-site service. Buying from an authorised dealer like Kumar Power ensures you get genuine warranty registration on Kirloskar's official portal and priority service support.",
  },
  {
    question: "How much space is needed to install a Kirloskar silent generator at home or in an office?",
    answer:
      "Space requirements vary by model. A popular 15 kVA Kirloskar silent generator has dimensions of roughly 1740 mm (L) × 1050 mm (W) × 1410 mm (H). For installation, you additionally need 2 to 3 feet (approx 1 meter) of clearance on all sides for ventilation, opening the canopy door and maintenance access. A levelled concrete base pad to handle its weight (~605 kg) and copper/GI plate earthing ( 2 dedicated earthing pits, 1 for Neutral, 1 for body) are mandatory. Before installing it on the terrace, the slab's load-bearing capacity must be verified by a structural engineer. A generator cannot be placed in a closed room (utility room) unless the exhaust pipe is properly vented and fresh air ventilation is provided. Installations are completed within a day by a certified technician.",
  },
  {
    question: "Can a Kirloskar silent generator run on gas or biofuel instead of diesel?",
    answer:
      "Yes. Kirloskar Oil Engines Limited (KOEL) has launched IoT-enabled gas generator sets that run on PNG (Piped Natural Gas) and CNG. These gas generators produce lower noise and significantly fewer emissions compared to diesel variants, making them ideal for urban areas with gas pipeline access. For bio-fuel, Kirloskar engines support up to B7 blended diesel (7% biodiesel mix) without any modification. Full biofuel and hydrogen-based gensets are still in the trial phase industrywide as of 2026. ",
  },
  {
    question: "What should I check before buying a Kirloskar silent generator for my factory or commercial unit?",
    answer:
      "Before buying, verify five things: (1) Load Calculation: get a certified electrician to calculate your total connected load in kW, then size your generator at 25% headroom above that. (2) CPCB IV+ Compliance: mandatory for all new purchases. (3) AMF Panel: ensures automatic switchover during power cuts without manual intervention. (4) Fuel Tank Capacity: for longer outages, a larger base-mounted fuel tank reduces refilling frequency. (5) Service Network: confirm your dealer has certified technicians within your area for faster breakdown response.",
  },
  {
    question: "Why does my Kirloskar silent generator start but not give power output?",
    answer:
      "If your generator engine is running perfectly but there is no power output, it is usually caused by one of three issues: (1) Tripped Circuit Breaker (MCB/MCCB): Check the main control panel. If there is a sudden overload, the breaker will trip to 'OFF'. Simply reset it to 'ON'. (2) Failed AVR (Automatic Voltage Regulator): This small electronic device inside the alternator controls the voltage. If it gets damaged due to voltage spikes, the generator will produce zero output, and the AVR must be replaced. (3) Loss of Residual Magnetism or Damaged Rotating Diodes: If the generator has been sitting idle for months, the alternator can lose its natural magnetism (residual magnetism). Alternatively, a blown diode in the rectifier assembly can block power generation.",
  },
];

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqsList.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const KirloskarSilentGenerator = () => {
  return (
    <>
      <SEO
        title="Kirloskar Silent Generator: Low Noise, High Performance Power Backup"
        description="Discover how Kirloskar Silent Generators provide low-noise operation, fuel efficiency, and reliable power backup for homes, offices, shops, and industrial applications. Learn features, benefits, and buying considerations."
        canonical="https://www.kumarpower.com/blog/kirloskar-silent-generator"
        ogImage={myBlogImage}
        keywords="Kirloskar Silent Generator, Kirloskar Silent Generator Features, Kirloskar Silent Power Generator, Benefits of Silent Generator, Silent Generator Price, Silent Generator Specification, 15kVA Silent Generator, 20kVA Silent Generator, 250kVA Silent Generator, 500kVA Silent Generator, 750kVA Silent Generator, 1010kVA Silent Generator, 1250kVA Silent Generator, Silent Diesel Generator Specification"
        robots="index, follow"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchemaData)}</script>
      </Helmet>
      <Header />

      <main className="bg-white min-h-screen text-black overflow-hidden">
        {/* HERO SECTION */}

        <section className="relative h-[500px] font-['Poppins',sans-serif] overflow-hidden">
          <img src={blogBG} alt="Kirloskar Silent Generator - Low Noise (75dBA) High Performance with Diesel (7.5-1500kVA) and Gas (15-250kVA) Variants" className="absolute inset-0 w-full h-full object-cover scale-105" />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
            <Link to="/blogs" className="text-blue-300 hover:text-white transition mb-6 text-sm tracking-wide">
              ← Back To Blogs
            </Link>

            <div className="inline-flex items-center bg-[#254f81] backdrop-blur-md border px-6 py-2 rounded-full mb-3 md:mb-8 w-fit">
              <span className="font-['Poppins',sans-serif] text-[10px] md:text-xs text-white tracking-wide font-bold tracking-[3px] uppercase">Kirloskar Silent Generator</span>
            </div>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-['Poppins',sans-serif] text-[32px] leading-tight md:text-5xl font-bold text-white max-w-5xl mb-2 border-b border-white/10 pb-4 ">
              Kirloskar Silent Generator for Home and Business: Diesel, Green & DG Set Guide
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="font-['Poppins',sans-serif] text-sm md:text-sm text-white max-w-4xl mt-4 text-justify">
              The Central Pollution Control Board (CPCB) has already set strict rules and regulations for power generators. Under the CPCB IV+ emission norms, generators must comply with the guidelines to avoid penalties and business shutdowns. Emissions should be controlled, and the noise level should remain below 75dB(A). That's where the <a href="https://www.kumarpower.com" className="text-blue-300 hover:text-[#f00] transition font-bold">Kirloskar Silent Generator
                    </a> comes in handy. Kirloskar Silent Generators are fuel efficient with their new fuel injection technology called CRDi, burning fuel to an extreme level to reduce emissions while increasing performance, and the canopy that reduces the sound and the vibrating effect of the generator
                    to keep it under 75dB.
            </motion.p>
          </div>
        </section>

        {/* BLOG SECTION */}

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
              {/* LEFT CONTENT */}

              <div className="lg:col-span-8">
            
                {/* CONTENT */}

                <article className="space-y-10">
                  

                  {/* SECTION 1 */}

                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black leading-normal">What Is a Silent Generator?</h2>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">
                      A silent generator is a standard diesel or <a href="https://www.kumarpower.com" className=" hover:text-[#0f0] transition font-bold">gas generator</a> fitted inside a specially designed acoustic enclosure that is called a canopy. This canopy is built with sound-absorbing material like high-density foam or glass wool, which keeps the noise level low. It not only reduces
                      noise but also saves the genset from dust, rain, and sunlight.
                    </p>

                    <img className="my-6 rounded-md" src={myBlogImage} alt="Kirloskar Silent Generator CPCB IV+ Compliance less than 75dBA" title="Kirloskar Silent Generator CPCB IV+ Compliance less than 75dBA" />

                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">
                      A canopy can only reduce sound; it can't totally silence the generator. When a generator is used to make electricity, the engine inside it starts running on its rated RPM (Revolutions Per Minute). In a generator, RPM is directly linked to its power generation capacity and
                      engine speed.
                    </p>

                    

                    {/* QUOTE */}

                    <div className="border-l-4 border-blue-500 px-6 py-3 bg-blue-50 rounded-r-2xl mb-6">
                      <p className="text-base italic leading-8 text-gray-800 text-justify">
                        As in India, 50 Hz is the standard frequency for electricity. When the alternator inside the generator rotates, it generates AC electricity. To maintain the frequency of 50Hz, the piston of the engine has to run at a specific speed, such as 1500RPM or 3000RPM. When the engine
                        runs at this speed, they produce mechanial sound of the alternator rotation(vibration of electromagnetic force) and the friction of the piston. So the higher the RPM, the higher the sound.
                      </p>
                    </div>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-8">
                      The Kirloskar silent power generator operates at a noise level of less than 75 dBA at 1 metre distance, which is roughly similar to the sound of a normal conversation. Kirloskar Generators has verified technical specifications across the entire Powergen range. From the compact
                      7.5 kVA models to heavy-duty 750 kVA to 1500kVA units, all units follow the emission guidelines and noise control over less than 75 dBA. They are CPCB IV+ compliant.
                    </p>
                  </div>

                  {/* SECTION 2 */}

                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Kirloskar Silent Generator - A Name Built on 100+ Years of Engineering</h2>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">
                      Whether you want a compact 3 kVA{" "}
                      <a href="/products/kirloskar-portable-generator" className="text-blue-700 font-bold">
                        portable generator for house
                      </a>
                      , or a mid-range 250kVA gas generator for a commercial building or office, or a heavy-duty 1500 kVA DG set for your large industrial facility. When people search for a reliable silent generator in India, the name Kirloskar comes up for good reason. Kirloskar Oil Engines Limited
                      (KOEL) (1946) carries over a century (starting of Kirloskar 1888) of engineering heritage and currently operates one of the largest genset fleets in the country, serving 50+ countries globally.
                    </p>

                    <img className="my-6 rounded-md" src={myBlogFeatureImage} alt="Kirloskar Silent Generator For Industries That prefers Silent Operations" title="Kirloskar Silent Generator 3kVA to 1500kVA (Diesel, Gas, Portable) CPCB IV+ <75dBA" />

                    <h3 className="text-xl font-semibold mt-6 mb-2 text-dark-600">But what makes the Kirloskar silent generator stand apart technically:</h3>

                    {/* Silent Genset */}

                    <div>
                      <div className="flex flex-col gap-y-4 my-6 pl-2">
                        {/* Direct pehle item ke bullets par loop chalaya */}
                        {silentFeatures[0]?.bullets.map((b, idx) => (
                          <div key={idx} className="flex items-start gap-4 border-b border-gray-200 pb-4 last:border-0">
                            <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-4 w-4 shrink-0 mt-1">
                              <CheckCircle2 className="text-white h-4 w-4" style={{ background: "#2D6FBA", borderRadius: "9999px" }} />
                            </span>
                            <span className="text-base text-gray-700 text-justify">{b.featureList}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* SECTION 3 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Silent Diesel Generator - Powerful, Efficient, and Clean Power Solution</h2>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">
                      Diesel remains the most practical fuel for power backup in India, especially where PNG connections are not available. A{" "}
                      <a href="/products/kirloskar-diesel-generator" className="text-blue-700 font-bold">
                        silent diesel generator
                      </a>{" "}
                      combines diesel's reliability with the comfort of low-noise operation.
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-2 text-dark-600">Kirloskar's CPCB IV+ diesel range covers:</h3>

                    {/* Table */}
                    <div className="w-full overflow-x-auto my-8 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 my-6">
                      <table className="w-full text-left border-collapse min-w-[800px]">
                        {/* Table Header */}
                        <thead>
                          <tr className="bg-[#2D6FBA] border-b border-gray-100">
                            <th className="px-8 py-4 text-[12px] font-bold text-white uppercase tracking-wider w-1/4">Range</th>
                            <th className="px-8 py-4 text-[12px] font-bold text-white uppercase tracking-wider w-1/3">Model Available</th>
                          </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-gray-100 text-[14px] text-gray-600">
                          {dgRange.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                              <td className="px-8 py-6 font-semibold text-gray-800 align-middle text-blue-700">{row.range}</td>
                              <td className="px-8 py-6 text-gray-600 align-middle">{row.model}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">
                      All models in this range maintain a noise level of less than 75 dBA when fitted with the acoustic canopy and CPCB IV+ emission guidelines. A consistent specification across small home-use units and large commercial installations alike.
                    </p>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-8">
                      <strong>The Anubandhan IV+ service programme adds further peace of mind:</strong> complete coverage for 5 years or 6,000 hours, one-time payment, 24x7 support, and genuine Kirloskar spares serviced by certified engineers.
                    </p>
                  </div>

                  {/* SECTION 4 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Right Choice of Silent Power Generator for Businesses and Commercial Spaces</h2>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">For critical infrastructure, including healthcare, hospitality, aviation, and institutional campuses, an uninterrupted power supply is fundamental to operational continuity and reducing financial loss.</p>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">
                      Kumar Power addresses this necessity through the deployment of{" "}
                      <a href="/blog/industrial-kirloskar-dg-set-750kva-1500kva" className="text-blue-700 font-bold">
                        high-capacity Kirloskar generators
                      </a>{" "}
                      (from 250kVA to 1500 kVA). Engineered for high-load reliability and compliance with stringent acoustic standards, these systems are trusted by leading global institutions, including Honeywell, Apollo Hospitals, and the U.S. Embassy New Delhi.
                    </p>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">For industrial and commercial applications, this range delivers optimized fuel efficiency, advanced digital monitoring, and seamless load-block handling.</p>

                    {/* Right Genset */}

                    <div>
                      <div className="flex flex-col gap-y-4 my-6 pl-2">
                        {rightGenset[0]?.bullets.map((b, idx) => (
                          <div key={idx} className="flex items-start gap-4 border-b border-gray-200 pb-4 last:border-0">
                            <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-4 w-4 shrink-0 mt-1">
                              <CheckCircle2 className="text-white h-4 w-4" style={{ background: "#2D6FBA", borderRadius: "9999px" }} />
                            </span>
                            <span className="text-base text-gray-700 text-justify">{b.dataList}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* SECTION 4 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black"> Kirloskar DG Set Specifications - Why Industries Believe in This</h2>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">
                      For critical infrastructure, including healthcare, hospitality, aviation, and institutional campuses, an uninterrupted power supply is fundamental to operational continuity and reducing financial loss. A Kirloskar DG Set is more than just a generator in a box. Every unit goes
                      through rigorous testing before dispatch and is built on proven engine platforms that have been refined over generations.
                    </p>
                    <p className="text-base leading-8 text-gray-700 text-justify mb-6 font-bold">Key technical highlights across the range:</p>

                    {/* DG SET SPEC */}
                    <div>
                      <div className="flex flex-col gap-y-4 my-6 pl-2">
                        {dgsetSpec[0]?.bullets.map((b, idx) => (
                          <div key={idx} className="flex items-start gap-4 border-b border-gray-200 pb-4 last:border-0">
                            <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-4 w-4 shrink-0 mt-1">
                              <CheckCircle2 className="text-white h-4 w-4" style={{ background: "#2D6FBA", borderRadius: "9999px" }} />
                            </span>
                            <span className="text-base text-gray-700 text-justify">{b.dataList}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">
                      The KG645CR / KG640C / KG745 microprocessor controllers monitor everything from lube oil pressure and engine temperature to battery condition and fuel level - and send alerts directly to your phone if something needs attention.
                    </p>
                  </div>

                  {/* SECTION 5 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Kirloskar Green Generator - Cleaner Power, Lower Running Cost</h2>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">
                      The{" "}
                      <a href="/products/kirloskar-gas-generator" className="text-blue-700 font-bold">
                        Kirloskar Green Generator
                      </a>{" "}
                      is a dedicated natural gas genset range designed for locations with PNG (Piped Natural Gas) availability. Available from 15 kVA to 250 kVA, with CPCB IV+ compliance and a distinctly green acoustic enclosure - easy to identify on any installation site.
                    </p>

                    <img className="my-6 rounded-md" src={myBlogImage2} alt="Kirloskar Silent Green Generator 15 kVA to 250 kVA" title="Kirloskar Silent Green Generator 15 kVA to 250 kVA" />

                    {/* Green Genset Spec */}
                    <div>
                      <div className="flex flex-col gap-y-4 my-6 pl-2">
                        {greenGenerator[0]?.bullets.map((b, idx) => (
                          <div key={idx} className="flex items-start gap-4 border-b border-gray-200 pb-4 last:border-0">
                            <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-4 w-4 shrink-0 mt-1">
                              <CheckCircle2 className="text-white h-4 w-4" style={{ background: "#2D6FBA", borderRadius: "9999px" }} />
                            </span>
                            <span className="text-base text-gray-700 text-justify">{b.dataList}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">The gas train inside the enclosure consists of a gas filter, solenoid valve, and pressure regulators - all CPCB-approved and designed specifically for genset application.</p>
                  </div>

                  {/* SECTION 6 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Why Kirloskar Silent Generators Are Getting Popular?</h2>

                    {/* Benefits Of Silent Generator */}
                    <div>
                      <div className="flex flex-col gap-y-4 my-6 pl-2">
                        {benefitsSpec[0]?.bullets.map((b, idx) => (
                          <div key={idx} className="flex items-start gap-4 border-b border-gray-200 pb-4 last:border-0">
                            <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-4 w-4 shrink-0 mt-1">
                              <CheckCircle2 className="text-white h-4 w-4" style={{ background: "#2D6FBA", borderRadius: "9999px" }} />
                            </span>
                            <span className="text-base text-gray-700 text-justify">{b.dataList}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* SECTION 7 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">What are the benefits of choosing the Kirloskar Silent Generator for the home?</h2>
                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">
                      A traditional open genset hits noise levels around 95 to 110 dBA like a train horn. At that level, it wakes up the whole building and the entire neighbourhood. Using a silent generator for home use solves this completely. Kirloskar Silent Generator has a comprehensive range of
                      silent generators for use in homes and residential places.
                    </p>

                    <div className="flex flex-col gap-y-4 my-6">
                      {/* item-1 */}
                      <div className="flex items-start gap-4">
                        {/* 2. shrink-0, mt-1 */}
                        <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-6 w-6 shrink-0 mt-1">
                          <CheckCircle2 className="text-white h-4 w-4" style={{ background: "#2D6FBA", borderRadius: "9999px" }} />
                        </span>
                        {/* text-justify */}
                        <span className="text-base leading-8 text-gray-700 text-justify">
                          <strong>Kirloskar Portable Generator:</strong> Ranging 3kW & 5kW in the petrol segment, 3.5 kVA, 5.5 kVA & 7.5 kVA in the diesel segment.
                        </span>
                      </div>

                      {/* item-2 */}
                      <div className="flex items-start gap-4">
                        {/* 2. shrink-0, mt-1 */}
                        <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-6 w-6 shrink-0 mt-1">
                          <CheckCircle2 className="text-white h-4 w-4" style={{ background: "#2D6FBA", borderRadius: "9999px" }} />
                        </span>
                        {/* text-justify */}
                        <span className="text-base leading-8 text-gray-700 text-justify">
                          <strong>Kirloskar Diesel Generator:</strong> Ranging 7.5kVA, 10kVA, 15kVA, 20kVA, 25kVA, 30kVA & 40kVA on diesel fuel.
                        </span>
                      </div>

                      {/* item-3 */}
                      <div className="flex items-start gap-4">
                        {/* 2. shrink-0, mt-1 */}
                        <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-6 w-6 shrink-0 mt-1">
                          <CheckCircle2 className="text-white h-4 w-4" style={{ background: "#2D6FBA", borderRadius: "9999px" }} />
                        </span>
                        {/* text-justify */}
                        <span className="text-base leading-8 text-gray-700 text-justify">
                          <strong>Kirloskar Green Generator:</strong> 15kVA to 250 kVA Natural Gas Generators on natural fuel like PNG.
                        </span>
                      </div>
                    </div>
                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">These ranges of Kirloskar Silent Generators are well-suited for residential areas (houses & societies) and commercial & hospitality (coaching centres, small malls, shops & hotels) services.</p>
                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">
                      <strong>Top Features:</strong>

                      {/* Generator For Home */}
                      <div>
                        <div className="flex flex-col gap-y-4 my-6 pl-2">
                          {homeGenerator[0]?.bullets.map((b, idx) => (
                            <div key={idx} className="flex items-start gap-4 border-b border-gray-200 pb-4 last:border-0">
                              <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-4 w-4 shrink-0 mt-1">
                                <CheckCircle2 className="text-white h-4 w-4" style={{ background: "#2D6FBA", borderRadius: "9999px" }} />
                              </span>
                              <span className="text-base text-gray-700 text-justify">{b.dataList}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </p>
                  </div>

                  {/*
                  <a
                    href="https://api.whatsapp.com/send?phone=+91%2097738%2051767&text=Hi!%20Kumar%20Power,%20I%20need%20consultation%20about%20the%20power%20backup%20I%20need%20for%20my%20facility?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 w-full sm:w-auto bg-gradient-to-r from-amber-400 to-blue-500 hover:from-amber-500 hover:to-blue-600 text-white font-medium border-2 border-white rounded-md px-6 py-4 h-auto"
                  >
                    <span className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-download size-5">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" x2="12" y1="15" y2="3"></line>
                      </svg>
                      Having Doubts? - Get Free Consultation Now.
                    </span>
                  </a> */}

                  {/* SECOND SECTION */}
                  {/*

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
                  */}

                  {/* THIRD SECTION */}
                  {/*

                  <div>

                    <h2 className="text-4xl font-bold mb-6 text-black">
                      Smart Monitoring Systems
                    </h2>

                    <p className="text-lg leading-9 text-gray-700">
                      Modern monitoring systems use IoT and predictive analytics to track performance in real time. These intelligent systems notify operators about maintenance requirements before failures occur.
                    </p>

                  </div> */}

                  {/* FAQ Section with Dropdown Loop */}

                  <section className="max-w-4xl mx-auto my-12 px-4 py-8 bg-gray-50 rounded-2xl border border-gray-100">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-left">FAQs</h2>

                    <div className="space-y-4">
                      {faqsList.map((faq, index) => (
                        <details key={index} name="faq-accordion" className="group border border-gray-200 bg-white rounded-sm p-2 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:shadow-sm cursor-pointer">
                          <summary className="flex items-center justify-between text-gray-900 focus:outline-none select-none">
                            <span className="text-md font-semibold p-2">{faq.question}</span>
                            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                              {/* Plus/Minus Icons toggled by Tailwind group-open */}
                              <svg className=" absolute inset-0 w-3 h-3 opacity-100 group-open:opacity-0 transition-opacity duration-300" xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                              </svg>
                              <svg className="absolute inset-0 w-3 h-3 opacity-0 group-open:opacity-100 transition-opacity duration-300" xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                              </svg>
                            </span>
                          </summary>

                          <p className="mt-4 leading-relaxed text-gray-700 border-t border-gray-100 p-2 select-text text-md text-justify [&_a]:text-blue-600 [&_a]:underline [&_a]:font-bold" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                        </details>
                      ))}
                    </div>
                  </section>

                  {/* CTA Section in the End */}
                  <div className="bg-[#252525] rounded-2xl p-8 text-white text-center">
                    <h3 className="text-3xl font-bold leading-tight mb-5">Powering Industries Without the Noise</h3>

                    <p className="leading-8 text-white/90 mb-8">Explore Kirloskar's full range of silent diesel generators - CPCB IV+ compliant, fuel-efficient, and built for Indian conditions.</p>

                    <Link to="/products/kirloskar-diesel-generator" className="inline-flex items-center justify-center bg-white text-black px-7 py-4 rounded-xl font-semibold hover:bg-gray-100 transition w-full">
                      Kirloskar Silent Diesel Generators Full Range →
                    </Link>
                  </div>
                </article>
              </div>

              {/* RIGHT SIDEBAR */}

              <div className="lg:col-span-4">
                <div className="sticky top-28 space-y-8">
                  {/* CATEGORY */}

                  <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
                    <h3 className="text-2xl font-bold mb-6 text-black">Latest Post</h3>

                    <div className="space-y-4">
                      <Link to="/blog/industrial-kirloskar-dg-set-750kva-1500kva" className="block text-blue-600 hover:text-blue-800 transition border-b border-gray-200 pb-4">
                        Industrial Kirloskar DG Set
                      </Link>

                      <Link to="/blog/amf-panel-for-dg-set" className="block text-blue-600 hover:text-blue-800 transition border-b border-gray-200 pb-4">
                        AMF Panel For DG Set
                      </Link>
                    </div>
                  </div>

                  {/* CTA */}

                  <div className="bg-[#254f81] rounded-3xl p-8 text-white">
                    <h3 className="text-3xl font-bold leading-tight mb-5">Need Help Choosing the Right Silent Generator?</h3>
                    <p className="leading-8 text-white/90 mb-8">Get expert advice on CPCB compliance, fuel type and noise level guidanceand form Kumar Power.</p>
                    <Link to="/contact" className="inline-flex items-center justify-center bg-white text-black px-7 py-4 rounded-xl font-semibold hover:bg-gray-100 transition w-full">
                      Get Free Expert Guidance
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
     {/* Scroll to Top Button */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ backgroundColor: "#254f81" }} className="border-2 border-white fixed bottom-[165px] md:bottom-[170px] right-10 md:right-16 z-[9999] flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:translate-y-[-4px] active:scale-95">
        {/* <span className="font-['Poppins',sans-serif] text-lg font-extrabold transform -rotate-90">&gt;</span> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>

      <Footer />
    </>
  );
};

export default KirloskarSilentGenerator;
