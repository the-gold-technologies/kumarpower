import { LinkText } from "@/components/ui/LinkText";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

// import maintenance from "@/assets/blog1.png";
import blogBG from "@/assets/BlogImages/industrial-kirloskar-dg-set-bg.jpg";
import kirloskarGenerator from "@/assets/BlogImages/kirloskar-genrator.png";
import SEO from "@/components/SEO";
import myBlogImage from "@/assets/BlogImages/industrial-kirloskar-dg-set-750-1500kva.jpg";
import myBlogFeatureImage from "@/assets/BlogImages/industrial-kirloskar-dg-set-750-1500kva-feature-image.jpg";
import { Helmet } from "react-helmet-async";

const technicalFeatures = [
  {
    id: 1,
    heading: "1. CRDi Engine Technology for Heavy Industrial Load",
    introText: "Large industrial facilities rarely operate under constant load conditions. Equipment startup, production shifts, and sudden load additions require a generator that can respond quickly without compromising performance.",
    bullets: [
      { dataList: "Precise fuel injection control." },
      { dataList: "Faster response to sudden load changes." },
      { dataList: "Improved combustion efficiency. (burning fuel to an extreme level, ensuring the lowest emissions)" },
      { dataList: "Better fuel utilization under varying load conditions.)" },
      { dataList: "Lower emissions compared to conventional fuel systems." },
      { dataList: "Improved engine stability during heavy-duty operations." },
      { dataList: "The O2E (Optimal Operating Efficiency) engine platform is designed for low emissions and improved operational efficiency." },
      { dataList: "The engine and radiator system tested for operation in ambient temperatures up to 50°C, making it suitable for demanding site conditions." },
      { dataList: "Extended 500-hour lube oil change interval, helping reduce maintenance frequency." },
    ],
    outroText: "For manufacturing facilities, infrastructure projects, enterprises, and government works, fast load acceptance can play a critical role in maintaining operational continuity.",
  },
  {
    id: 2,
    heading: "2. CPCB IV+ Compliance for Modern Industrial Projects",
    introText:
      "Many industrial projects today must comply with increasingly strict environmental regulations. Non-compliant equipment can create approval delays, project complications, and operational restrictions. Kirloskar DG sets are designed to meet CPCB IV+ emission norms, making them suitable for regulated industrial and infrastructure environments.",
    bullets: [
      { dataList: "Supports compliance with current emission regulations." },
      { dataList: "Suitable for government and public infrastructure projects." },
      { dataList: "Helps organizations meet environmental objectives." },
      { dataList: "Reduces long-term compliance concerns." },
      { dataList: "Preferred for projects where regulatory approvals are critical." },
    ],
    outroText: "For enterprises, infrastructure contractors, and government tender participants, emission compliance is often a procurement requirement rather than an optional feature.",
  },
  {
    id: 3,
    heading: "3. Fuel Efficiency Under Real Operating Conditions",
    introText:
      "One of the largest operating expenses associated with high-capacity generators is fuel consumption. However, most generators are rarely operated at full rated capacity. According to Kirloskar's operating analysis, industrial generators typically run between 50% and 70% loading due to varying demand across shifts, seasons, and production schedules.",
    bullets: [
      { dataList: "Optimized fuel performance across practical load ranges." },
      { dataList: "Reduced fuel wastage during partial-load operation." },
      { dataList: "Improved operating economics over long running hours." },
      { dataList: "Lower total cost of ownership (TCO)." },
      { dataList: "Suitable for facilities with fluctuating power requirements." },
    ],
    outroText: "For facilities operating generators for extended periods, fuel efficiency directly impacts lifecycle operating costs.",
  },
  {
    id: 4,
    heading: "4. Acoustic Performance for Noise-Sensitive Installations",
    introText:
      "Noise management is a critical consideration in enterprises, hospitals, IT parks, government buildings, commercial facilities, and urban infrastructure projects. Kirloskar DG sets come with a canopy that reduces sound to less than 75 dBA under specified conditions while providing reliable backup power.",
    bullets: [
      { dataList: "Supports deployment near occupied buildings." },
      { dataList: "Improves workplace comfort." },
      { dataList: "Helps meet project noise requirements." },
      { dataList: "Reduces dependency on additional acoustic treatments." },
      { dataList: "Suitable for commercial and institutional environments." },
    ],
    outroText: "Noise control becomes particularly important when generators operate for extended durations or are installed near public-access areas.",
  },
  {
    id: 5,
    heading: "5. Advanced Monitoring and Remote Diagnostics",
    introText:
      "Unplanned downtime can result in production losses, project delays, and increased maintenance costs. Modern industrial generators, therefore, require continuous monitoring and early fault detection. Kirloskar's IoT-enabled monitoring platform provides real-time visibility into generator performance and operating status.",
    bullets: [
      { dataList: "Real-time performance monitoring." },
      { dataList: "Mobile and desktop access." },
      { dataList: "Location tracking." },
      { dataList: "Critical fault alerts." },
      { dataList: "Preventive maintenance notifications." },
      { dataList: "Faster service response during breakdown situations." },
    ],
    outroText: "This enables maintenance teams to identify issues before they develop into costly failures.",
  },
  {
    id: 6,
    heading: "6. Built for Demanding Site Conditions",
    introText: "Industrial projects often operate in challenging environments where high temperatures, dust, and continuous operation can place additional stress on equipment. Kirloskar's UHHP platform incorporates several features designed for demanding applications:",
    bullets: [
      { dataList: "Engine platform designed for heavy-duty operation." },
      { dataList: "Cooling system tested for ambient temperatures up to 50°C." },
      { dataList: "500-hour lube oil change interval to reduce maintenance frequency." },
      { dataList: "High-efficiency alternator design." },
      { dataList: "Harmonic-reducing winding technology." },
      { dataList: "Rugged construction for industrial applications." },
    ],
    outroText: "These features contribute to long-term reliability, reduced maintenance requirements, and improved operational stability across a wide range of industrial applications.",
  },
];

//Installation Blog Section Data
const installationData = [
  {
    id: 1,
    heading: "Why Is Proper Diesel Generator Installation Important?",
    bullets: [
      {dataList: (<><strong>Handling heavy weight and vibration:</strong> These engines weigh several tonnes. During operation, they generate intense vibrations that can damage weak ground or building structures.</>),},
      {dataList: (<><strong>Electrical and fire safety:</strong> Due to high voltage, there is a constant risk of severe fires caused by short circuits, earth faults, or fuel leaks.</>),},
      {dataList: (<><strong>Toxic fumes and pollution:</strong> Emissions such as carbon monoxide (CO) and nitrogen oxides (NOx) can be lethal to humans.</>),},
      {dataList: (<><strong>Excessive noise:</strong> Without proper silencers and a specially designed enclosure, the noise generated can be deafening to the surrounding environment.</>),},
      {dataList: (<><strong>Government compliance:</strong> In India, obtaining a No Objection Certificate (NOC) from the Chief Electrical Inspector (CEIG) and the State Pollution Control Board (SPCB) is legally mandatory for commercial or industrial use.</>),},
    ],
  },
  {
    id: 2,
    heading: "What Are the Key Requirements for Diesel Generator Installation?",
    bullets: [
      {dataList: (<><strong>Strong Foundation (Civil Foundation):</strong> The DG set is placed on a concrete pad raised at least 150 mm above ground level, capable of withstanding both static and dynamic loads (operating weight). Anti-Vibration Mounting (AVM) Pads are installed to minimize vibration.</>),},
      {dataList: (<><strong>High Chimney (Stack Height):</strong> According to CPCB IV+ regulations, DG sets larger than 800 kW require a chimney with a minimum height of 30 meters (or 3 meters above the building height) to ensure exhaust fumes are vented directly into the atmosphere.</>),},
      {dataList: (<><strong>Proper Ventilation (Cross Ventilation):</strong> Large ducts and exhaust fans are installed to facilitate fresh air intake and hot air exhaust, preventing the engine from overheating.</>),},
      {dataList: (<><strong>Multiple Earthing (Earthing System):</strong> Separate copper or GI plate/pipe earthing systems are provided for the neutral and the body to prevent accidents caused by leakage current.</>),},
      {dataList: (<><strong>Noise Control (Acoustic Enclosure):</strong> The generator is housed within an acoustic enclosure (canopy) to ensure that noise levels do not exceed 75 dBA at a distance of 1 meter.</>),},
    ],
  },
  {
    id: 3,
    heading: "What Are the Benefits of Proper Diesel Generator Installation?",
    bullets: [
      {
        dataList: (
          <>
            <strong>Extended Lifespan:</strong> Proper ventilation and vibration-free operation prevent premature wear of engine parts, ensuring your substantial investment remains secure for the long term.
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Safety Assurance:</strong> Adequate earthing and safety relays (providing protection against overvoltage, short circuits, and earth faults) ensure the complete safety of both the operator and the building.
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Fuel Efficiency:</strong> When the generator receives the correct airflow and operates without back-pressure, diesel consumption is reduced while optimal power output is maintained.
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Low Maintenance Costs:</strong> Sudden breakdowns are prevented, saving you from the heavy expenses associated with frequent repairs.
          </>
        ),
      },
      {
        dataList: (
          <>
            <strong>Freedom from Legal Hassles:</strong> Compliance with government regulations (CEA/CPCB) eliminates the risk of heavy fines or legal actions, such as the sealing of the premises.
          </>
        ),
      },
    ],
  },
];

const panelSpecs = [
  { feature: "Fault Protection", tech: "Air Circuit Breaker (ACB) / VCB", advantage: "Instant arc-quenching & isolating heavy faults" },
  { feature: "System Insulation", tech: "Class H Insulation (Up to 180°C)", advantage: "High thermal resistance during short circuits" },
  { feature: "Monitoring Brain", tech: "Microprocessor-based Controllers", advantage: "Real-time diagnostics & automatic engine shutdown" },
  { feature: "Safety Standard", tech: "CEIG & CEA Compliance", advantage: "Zero legal penalties and maximum site safety" },
];

const faqsList = [
  {
    question: "What industries commonly use 750 kVA to 1500 kVA Kirloskar DG sets?",
    answer:
      "750 kVA to 1500 kVA <a href='/products/kirloskar-diesel-generator'>Kirloskar DG Sets</a> are commonly used in manufacturing plants, data centers, hospitals, commercial complexes, warehouses, construction projects, mining operations, and large infrastructure facilities. These industries require reliable backup or prime power for uninterrupted operations.",
  },
  {
    question: "How much load can a 1000 kVA Kirloskar DG set handle?",
    answer: "A 1000 kVA Kirloskar DG set typically delivers around 800 kW of usable power, depending on the power factor (0.8) and operating conditions. It can support heavy industrial machinery, HVAC systems, production lines, and critical electrical loads in large facilities.",
  },
  {
    question: "Is a Kirloskar DG set suitable for continuous industrial operation?",
    answer: "Yes. Industrial Kirloskar DG sets are designed for both standby and prime power applications. They are engineered to operate continuously for extended periods when maintained according to manufacturer guidelines.",
  },
  {
    question: "What is the difference between a 750 kVA and a 1500 kVA DG set?",
    answer:
      "The primary difference is power output capacity. A <a href='/products/kirloskar-diesel-generator'>1500 kVA DG set</a> can handle significantly higher electrical loads than a 750 kVA unit, making it suitable for larger factories, industrial plants, and mission-critical infrastructure requiring greater power demand.",
  },
  {
    question: "Are these heavy duty Kirloskar DG set too noisy?",
    answer: "No, Kirloskar Generators full range from 7.5 to 1500 kVA are available with canopy. This canopy reduce the mechanical sound of the generators, keep it below 75dBA @ 1 meter area.",
  },
  {
    question: "How do I choose the right DG set capacity for my facility?",
    answer:
      "The right DG set capacity depends on your total load. Calculating load, get total kVA and 25% above to total load. For example: 10 ACs, office lighting, and computers around 25-30kW, with power factor (0.8), 30/0.8 around 37.5kVA, and to handle startup surges and future expensions add upto 25% of total load, so around 46.8 kVA.",
  },
  {
    question: "Which is the best industrial DG set for factories requiring 24/7 power backup?",
    answer: "For large factories and industrial facilities requiring dependable 24/7 power backup, Kirloskar DG sets in the 750 kVA to 1500 kVA range are widely used due to their reliability, fuel efficiency, service network, and suitability for heavy-duty operations.",
  },
  {
  question: "Do 750 kVA to 1500 kVA DG sets comply with CPCB IV+ emission norms?",
  answer: "Yes. Kirloskar DG sets in this capacity range are built to meet CPCB IV+ emission standards, which are mandatory in India for gensets above 800 kVA. This includes lower NOx and particulate emissions through advanced combustion technology and after-treatment systems, keeping the units compliant for industrial and commercial installations."
},
{
  question: "How much diesel does a 1000 kVA DG set consume per hour?",
  answer: "As a general benchmark, diesel gensets consume roughly 0.25-0.3 litres of fuel per kWh of load. For a 1000 kVA set running at 75-80% load, this works out to approximately 160-190 litres per hour, though actual consumption depends on load factor, ambient temperature, and maintenance condition."
},
{
  question: "What foundation is required for installing a 1500 kVA DG set?",
  answer: "A 1500 kVA DG set needs a reinforced concrete foundation designed to handle both static weight and dynamic vibration load, typically built on anti-vibration mounts. Site factors like soil bearing capacity, exhaust routing, and ventilation clearance are assessed during a site survey before finalizing the foundation design."
},
{
  question: "Can two or more industrial DG sets be run in parallel for redundancy?",
  answer: "Yes, through a synchronizing panel that allows multiple gensets to share load automatically. This setup is common in data centers and hospitals where N+1 redundancy is required, so if one unit trips or goes for maintenance, the remaining sets continue supplying uninterrupted power."
},
{
  question: "What is the difference between an open-skid and a containerized 1000 kVA DG set?",
  answer: "An open-skid DG set is installed inside an existing engine room or enclosure built at the site, while a containerized unit comes pre-fitted inside a weatherproof, soundproof enclosure ready for outdoor placement. Containerized sets cost more upfront but reduce civil work and installation time significantly."
},
{
  question: "How often does a 750 kVA to 1500 kVA DG set need major servicing?",
  answer: "Beyond routine checks every 250 running hours, major servicing including injector calibration, turbocharger inspection, and cooling system overhaul is typically scheduled every 2000-3000 running hours or annually, whichever comes first, depending on load pattern and operating environment."
},
{
  question: "Can a high-capacity industrial DG set be monitored remotely?",
  answer: "Yes, most 750 kVA to 1500 kVA Kirloskar DG sets support remote monitoring through IoT-enabled controllers, giving real-time data on load, fuel level, temperature, and run-hours. This helps facility teams schedule maintenance proactively and get instant alerts on faults, reducing unplanned downtime."
},
{
  question: "What warranty and after-sales support comes with a Kirloskar industrial DG set?",
  answer: "Kirloskar industrial DG sets typically come with a standard manufacturer warranty covering the engine and alternator, backed by an authorized service network for AMC, spare parts, and emergency breakdown support. Extended warranty and comprehensive AMC plans are also available for facilities running critical operations."
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

const KirloskarGeneratorsBlog = () => {
  return (
    <>
      <SEO
        title="High-Capacity Industrial Kirloskar DG Sets 750kVA to 1500kVA"
        description="Explore Kirloskar DG Sets from 750 kVA to 1500 kVA for heavy industrial power needs. Learn about key features, top industries, installation tips, and compliance standards."
        canonical="https://www.kumarpower.com/blog/industrial-kirloskar-dg-set-750kva-1500kva"
        ogImage={myBlogImage}
        keywords="Industrial Kirloskar DG Set, High Capacity DG Set, Industrial Kirloskar Diesel Generators, Kirloskar Diesel Generator 750 kVA, Kirloskar Diesel Generator 1500 kVA, Industrial Kirloskar Generator"
        robots="index, follow"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchemaData)}</script>
      </Helmet>
      <Header />

      <main className="bg-white min-h-screen text-black overflow-hidden">
        {/* HERO SECTION */}


        <section className="relative h-[500px] font-['Poppins',sans-serif] overflow-hidden">
          <img src={blogBG} alt="Industrial Kirloskar DG Set (750 kVA to 1500 kVA) for Heavy Duty Power Requirement and Emergency Power Backup" className="absolute inset-0 w-full h-full object-cover scale-105" />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
            <Link to="/blogs" className="text-blue-300 hover:text-white transition mb-6 text-sm tracking-wide">
              ← Back To Blogs
            </Link>

            <div className="inline-flex items-center bg-[#254f81] backdrop-blur-md border px-6 py-2 rounded-full mb-3 md:mb-8 w-fit">
              <span className="font-['Poppins',sans-serif] text-[10px] md:text-xs text-white tracking-wide font-bold tracking-[3px]">KIRLOSKAR DG SET</span>
            </div>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-['Poppins',sans-serif] text-[32px] leading-tight md:text-5xl font-bold text-white max-w-5xl mb-2 border-b border-white/10 pb-4 ">
              Industrial Kirloskar DG Set (750 kVA to 1500 kVA) for Heavy Duty Power Requirement
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="font-['Poppins',sans-serif] text-sm md:text-sm text-white max-w-4xl mt-4 text-justify">
              Even metro cities face constant power cuts due to rising electricity demands alongside growing needs. Heavy-duty industrial <a href="/products/panels" className="text-blue-300 hover:text-[#f00] transition font-bold">Kirloskar DG sets</a> ranging from 750 kVA to 1500 kVA are engineered for continuous, reliable prime and standby power in large-scale manufacturing, infrastructure, IT, data centres, hospitals, and commercial sectors.
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
                  <p className="text-base leading-8 text-gray-700 text-justify">
                    How machinery runs constantly in a factory, warehouse, enterprises, and large industries, having plenty of orders for stocks. But what if the grid electricity fails? How will you manage the downtime caused by the power failure? The Mechanical Jamming or Thermal Shock that harms
                    expensive machines & temporary machinery shutdowns, production deadlines, and the labour cost - How will you manage this?{" "}
                  </p>

                  {/* QUOTE */}

                  <div className="border-l-4 border-blue-500 px-6 py-3 bg-blue-50 rounded-r-2xl">
                    <p className="text-base italic leading-8 text-gray-800 text-justify">
                      Sitting worklessly during a power outage, looking at the machinery shutting down, it's a scene that feels like a very painful story from a business owner's POV. A small amount of time that causes production halts can affect the revenue and the reputation of the industry in the
                      market, turning into a very big amount of loss for businesses.
                    </p>
                  </div>

                  <p className="text-base leading-8 text-gray-700 text-justify">
                    We can't control the grid electricity. In peak summertimes, well, not only summertime, but it's every time, there is always high power demand. The machines we use in our daily life, for commercial buildings, as well as in industrial sectors, everything depends on power. Due to
                    this additional power load, power maintenance shutdowns and grid power failures are to be expected. Even the weather contributes to this, too. And then it strikes us: Yes! We do need a backup.
                  </p>

                  <img className="my-6 rounded-md" src={myBlogImage} alt="High Capacity Industrial Kirloskar DG Set 750 kVA to 1500 kVA" title="High Capacity Industrial Kirloskar DG Set 750 kVA to 1500 kVA" />

                  <p className="text-base leading-8 text-gray-700 text-justify">
                    Industrial facilities with high electricity demand require a power backup solution that can support continuous operations without compromising equipment performance. Based on load planning requirements across manufacturing plants, infrastructure & construction projects,
                    commercial complexes, and process industries, Kirloskar DG sets in the 750 kVA to 1500 kVA range are typically selected for handling large motor loads, critical systems, heavy-duty applications, and peak power requirements.
                  </p>

                  {/* SECTION 1 */}

                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black leading-normal">Understanding Heavy-Duty Industrial Power Requirements</h2>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-8">
                      Heavy-duty power requirements are significantly different from standard commercial and residential backup applications. Because industrial facilities operate multiple high-capacity machines, motor-driven equipment, HVAC systems, process loads, and critical infrastructure
                      simultaneously. From production in the industry to the warehouse shifting, machines work continuously. As a result, power demand can fluctuate throughout the day, particularly during equipment startup and peak production cycles.
                    </p>
                    <p className="text-base leading-8 text-gray-700 text-justify">
                      Before selecting a high-capacity DG set in the 750 to 1500 kVA range, industries or businesses should evaluate their actual load profile, maximum power demand, future expansion plans, and operational criticality. A thorough assessment helps determine whether the selected
                      capacity can support both current requirements and long-term growth without affecting efficiency or reliability.
                    </p>
                  </div>

                  {/* SECTION 2 */}

                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Which Industries Require 750 kVA to 1500 kVA KOEL DG Sets?</h2>

                    <p className="text-base leading-8 text-gray-700 text-justify">
                      In this high-capacity industrial{" "}
                      <a href="/products/kirloskar-diesel-generator" className="text-blue-700 font-bold">
                        Kirloskar Diesel Generators
                      </a>{" "}
                      segment, the available range is 750 kVA (600kW), 900 kVA (720kW), 1010 kVA (808kW), 1250 kVA (1000kW), and 1500 kVA (1200kW) with 0.8 lagging power factor. Provide a reliable and uninterrupted power supply. Various industries require a stable power backup connection for
                      seamless operations.
                    </p>

                    <img className="my-6 rounded-md shadow-xl" src={myBlogFeatureImage} alt="High-Capacity Industrial Kirloskar DG Set 750 kVA to 1500 kVA - Keep Running Industries 24/7" title="Kirloskar DG Set For Indutsries 24/7 Power Backup - 750kVA, 900kVA, 1010kVA, 1250kVA and 1500kVA" />

                    <h3 className="text-xl md:text-2xl font-bold mt-6 mb-2 text-black">Manufacturing Plants (1000 kVA to 1500 kVA)</h3>

                    <p className="text-base leading-8 text-gray-700 text-justify">
                      Manufacturing facilities often experience high starting currents due to CNC machines, compressors, conveyor systems, and heavy-duty motors. In such environments, a 1250 kVA DG set is frequently preferred because it provides sufficient headroom during simultaneous equipment
                      startup while reducing the risk of voltage fluctuations during production hours that a 750 kVA unit may struggle to absorb.
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold mt-6 mb-2 text-black">Steel & Metal Processing Units (1250 kVA to 1500 kVA)</h3>

                    <p className="text-base leading-8 text-gray-700 text-justify">
                      Steel fabrication and metal processing operations typically involve welding equipment, induction furnaces, cutting machines, and large motor-driven systems. These applications demand high surge handling capability, making larger DG capacities more practical for maintaining
                      operational continuity during grid outages.
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold mt-6 mb-2 text-black">Large Data Centres (1000 kVA to 1500 kVA)</h3>

                    <p className="text-base leading-8 text-gray-700 text-justify">
                      Data centres have to prioritise uptime over everything else. In this digital world, they can't afford even a single-second power cut due to the high risk of losing cache data (live data in temporary memory) and online services (transactions and server-based software) failure.
                      Server stops, apps/software stop, business stops - total chaos. DG sets in this range are commonly integrated with UPS infrastructure to support servers, cooling systems, networking equipment, and security systems. Additional capacity margins are often maintained to accommodate
                      future rack expansion.
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold mt-6 mb-2 text-black">Hospitals & Healthcare Facilities (1000 kVA to 1500 kVA)</h3>

                    <p className="text-base leading-8 text-gray-700 text-justify">
                      A massive jump in patient cases has been observed in hospitals recently. The demand for healthcare and hospital services has risen significantly due to the emergence of new diseases, driven by poor environmental conditions. In these emergency situations, healthcare environments
                      require reliable backup power for critical care equipment (ventilators), operating theatres (OT), intensive care unit (ICU), diagnostic systems (MRI, CT, ECG), and emergency infrastructure. Capacity planning typically focuses on ensuring uninterrupted support for life-safety
                      systems while maintaining operational resilience during prolonged outages.
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold mt-6 mb-2 text-black">Enterprises & Large Corporate Campuses (750 kVA to 1250 kVA)</h3>

                    <p className="text-base leading-8 text-gray-700 text-justify">
                      Large enterprises often operate multiple departments, centralised HVAC systems, data rooms, security infrastructure, elevators, and extensive office equipment across a single facility or campus. During a power outage, maintaining business continuity becomes a priority,
                      particularly for organisations that depend on uninterrupted operations and digital infrastructure. Depending on the size of the facility and critical load requirements, DG sets ranging from 750 kVA to 1250 kVA are commonly considered to support essential systems while ensuring
                      operational stability.
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold mt-6 mb-2 text-black">Construction & Infrastructure Projects (1000 kVA to 1500 kVA)</h3>

                    <p className="text-base leading-8 text-gray-700 text-justify">
                      Major construction and infrastructure projects frequently require temporary but dependable power for tower cranes, batching plants, welding equipment, site offices, dewatering pumps, lighting systems, and heavy machinery. Since power demand can vary significantly across
                      different project phases, contractors often prefer higher-capacity DG sets to accommodate fluctuating loads and multiple equipment startups. Units in the 1000 kVA to 1500 kVA range are commonly deployed on large-scale infrastructure developments where project delays caused by
                      power interruptions can directly impact timelines and costs.
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold mt-6 mb-2 text-black">Government Tenders, Bridges & Public Infrastructure Works (1000 kVA to 1500 kVA)</h3>

                    <p className="text-base leading-8 text-gray-700 text-justify">
                      Government-funded projects such as bridge construction, highway development, railway infrastructure, public buildings, water treatment facilities, and urban development initiatives often require reliable power support in locations where permanent electrical infrastructure may
                      not yet be available. High-capacity DG sets help maintain the continuous operation of construction equipment, project offices, lighting systems, and specialised machinery throughout the project lifecycle. Capacity selection is typically based on the scale of work, equipment
                      deployment, and the requirement to sustain operations across multiple shifts.
                    </p>
                  </div>

                  {/* SECTION 3 */}

                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black leading-normal">How to Choose the Right kVA DG Set From 750 to 1500 kVA Range: Top Selection Factors</h2>
                    <p className="text-base leading-8 text-gray-700 text-justify">
                      In our campaign of{" "}
                      <a href="https://www.kumarpower.com" className="text-blue-700 font-bold">
                        Kirloskar Generators
                      </a>
                      , we found through various installations that many businesses select generator capacity based only on connected load, only to face voltage fluctuations, excessive fuel consumption, and limited capacity for future expansion. In heavy-duty applications, proper DG sizing requires
                      a detailed understanding of load behaviour rather than simply adding up equipment ratings.
                    </p>{" "}
                    <br />
                    {/* STATS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-[#2D6FBA] mb-2">Peak Demand vs Running Load</h3>

                        <p className="text-gray-600">Peak load can be significantly higher than the average operating load.</p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-[#2D6FBA] mb-2">Motor Starting Current</h3>

                        <p className="text-gray-600">Industrial motors may draw 3 to 7 times their rated current during startup.</p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-[#2D6FBA] mb-2">Future Expansion Margin</h3>

                        <p className="text-gray-600">Maintain 10% to 20% spare capacity for future equipment additions.</p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-[#2D6FBA] mb-2">Operating Profile</h3>

                        <p className="text-gray-600">Most industrial DG sets operate at only 50% to 70% loading during normal conditions.</p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-[#2D6FBA] mb-2">Prime or Standby Requirement</h3>

                        <p className="text-gray-600">Prime-rated generators support unlimited operating hours and allow 10% temporary overload.</p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-[#2D6FBA] mb-2">Environmental Conditions</h3>

                        <p className="text-gray-600">Ambient temperature, altitude, dust, and ventilation conditions influence generator performance.</p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-[#2D6FBA] mb-2">Regulatory Compliance</h3>

                        <p className="text-gray-600">Emission norms and noise restrictions should be considered before project execution.</p>
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mt-6 mb-2 text-black">Professional Load Study Before Choosing a Generator</h3>
                    <p className="text-base leading-8 text-gray-700 text-justify">
                      Just as we should not take high-potency medication without a doctor's advice, we should not purchase a generator without consulting an expert. At{" "}
                      <a href="/about/OurProfile" className="text-blue-700 font-bold">
                        Kumar Power
                      </a>
                      , we are dedicated to providing extreme power solutions to our clients. You can ask queries related to your industry load consumption and receive proper guidance about choosing the right power genset for your facility. An expert engineer from Kunmar Power inspects the site,
                      calculates the loads, and recommends the best that fits your utility, keeping future expansion in mind.
                    </p>
                    <div className="flex flex-col gap-y-4 my-6">
                      {/* item-1 */}
                      <div className="flex items-start gap-4">
                        {/* 2. shrink-0, mt-1 */}
                        <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-7 w-7 shrink-0 mt-1">
                          <CheckCircle2 className="text-white h-5 w-5" style={{ background: "#2D6FBA", borderRadius: "9999px" }} />
                        </span>
                        {/* text-justify */}
                        <span className="text-base leading-8 text-gray-700 text-justify">
                          <strong>Protection against Over-sizing:</strong> You avoid purchasing a generator that is significantly larger than necessary, thereby saving lakhs of rupees (since both purchasing and operating an oversized generator are expensive).
                        </span>
                      </div>

                      {/* item-2 */}
                      <div className="flex items-start gap-4">
                        {/* 2. shrink-0, mt-1 */}
                        <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-7 w-7 shrink-0 mt-1">
                          <CheckCircle2 className="text-white h-5 w-5" style={{ background: "#2D6FBA", borderRadius: "9999px" }} />
                        </span>
                        {/* text-justify */}
                        <span className="text-base leading-8 text-gray-700 text-justify">
                          <strong>Protection against Under-sizing:</strong> You avoid purchasing a generator that is too small for your needs, thereby preventing issues such as frequent power outages or machine shutdowns.
                        </span>
                      </div>

                      {/* item-3 */}
                      <div className="flex items-start gap-4">
                        {/* 2. shrink-0, mt-1 */}
                        <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-7 w-7 shrink-0 mt-1">
                          <CheckCircle2 className="text-white h-5 w-5" style={{ background: "#2D6FBA", borderRadius: "9999px" }} />
                        </span>
                        {/* text-justify */}
                        <span className="text-base leading-8 text-gray-700 text-justify">
                          <strong>Fuel Savings:</strong> If the generator is correctly sized, it will consume diesel in the appropriate quantity, resulting in lower monthly operating costs.
                        </span>
                      </div>
                    </div>
                    <a
                      href="https://api.whatsapp.com/send?phone=+91%2097738%2051767&text=Hi!%20Kumar%20Power,%20I%20need%20consultation%20about%20the%20power%20backup%20I%20need%20for%20my%20facility?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-[#2D6FBA] hover:bg-primary/90 w-full sm:w-auto bg-gradient-to-r from-amber-400 to-blue-500 hover:from-amber-500 hover:to-blue-600 text-white font-medium border-2 border-white rounded-md px-6 py-4 h-auto"
                    >
                      <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-download size-5">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" x2="12" y1="15" y2="3"></line>
                        </svg>
                        Having Doubts? - Get Free Consultation Now.
                      </span>
                    </a>
                  </div>

                  {/* SECTION 4 */}

                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-3 text-black leading-normal">Key Technical Features of Kirloskar DG Sets (750 kVA to 1500 kVA)</h2>

                    <p className="text-base leading-8 text-gray-700 text-justify">When evaluating high-capacity industrial DG sets, businesses should focus on technical capabilities that directly impact reliability, efficiency, and long-term operating costs.</p>
                    <div>
                      {technicalFeatures.map((section) => (
                        <div key={section.id} className="mb-12">
                          {/* 1. H3 Heading */}
                          <h3 className="text-xl md:text-2xl font-bold mt-12 mb-2">{section.heading}</h3>

                          {/* 2. Intro Paragraph */}
                          <p className="text-gray-600 text-justify"><LinkText text={section.introText} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>

                          {/* 3. LI Bullet Points (Inner Loop) */}
                          <div className="flex flex-col gap-y-4 my-6 pl-2">
                            {section.bullets.map((b, idx) => (
                              <div key={idx} className="flex items-start gap-4">
                                <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-4 w-4 shrink-0 mt-1">
                                  <CheckCircle2 className="text-white h-4 w-4" style={{ background: "#2D6FBA", borderRadius: "9999px" }} />
                                </span>
                                <span className="text-base text-gray-700 text-justify">{b.dataList}</span>
                              </div>
                            ))}
                          </div>

                          {/* 4. Outro Paragraph */}
                          <p className="text-gray-600 text-justify"><LinkText text={section.outroText} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SECTION 5 */}

                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-3 text-black leading-normal">Diesel Generator Installation Guidelines: Ensuring Safety, Performance and Regulatory Compliance</h2>

                    <p className="text-base leading-8 text-gray-700 text-justify">
                      The installation of a high-capacity Diesel Generator (DG) set is slightly different from a standard small generator. Since these units generate high currents and intense vibrations, as well as substantial amounts of smoke and heat, strict installation guidelines have been
                      established by the <strong>Central Electricity Authority</strong> (CEA) and the <strong>Central Pollution Control Board</strong> (CPCB).
                    </p>

                    <div>
                      {installationData.map((section) => (
                        <div key={section.id} className="mb-12">
                          {/* 1. H3 Heading */}
                          <h3 className="text-xl md:text-2xl font-bold mt-12 mb-2">{section.heading}</h3>

                          {/* 3. LI Bullet Points (Inner Loop) */}
                          <div className="flex flex-col gap-y-4 my-6 pl-2">
                            {section.bullets.map((b, idx) => (
                              <div key={idx} className="flex items-start gap-4 border-b border-gray-200 pb-4 last:border-0">
                                <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-4 w-4 shrink-0 mt-1">
                                  <CheckCircle2 className="text-white h-4 w-4" style={{ background: "#2D6FBA", borderRadius: "9999px" }} />
                                </span>
                                <span className="text-base text-gray-700 text-justify">{b.dataList}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Panels */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-3 text-black leading-normal">How Kirloskar DG Sets (750 - 1500 kVA) Handle Heavy-Duty Faults & Short Circuits</h2>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-8">
                      When you invest in a high-capacity Kirloskar DG Set, it's not only about buying an engine, it's about investing in a highly secure power station. Industrial buyers are always concerned about the short circuit and the maintenance cost of these diesel generators. At such high
                      loads, a short circuit or fault could result in losses amounting to lakhs and crores. To prevent this, Kirloskar DG sets come equipped with an industry-grade, dedicated Control Panel or <a href="/products/panels" className="text-blue-700 font-bold">AMF Panel</a>/LT Panel that provides multi-layered protection.
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold mt-12 mb-2">Main Circuit Breakers (MCB)</h3>
                    <p className="text-base leading-8 text-gray-700 text-justify mb-4">
                      From an engineering perspective, we know that during a short circuit, the current suddenly rises to 10 to 40 times the normal value. To prevent this, heavy-duty, customized breakers are installed on the DG set's output panel.
                    </p>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">
                      <strong className="text-dark-600">Air Circuit Breaker (ACB):</strong> ACBs are used in these high-capacity 415V Kirloskar Diesel Generators. They feature a Micrologic Control trip unit that detects a short circuit in the generator and cuts off power to the entire system within
                      0.02 to 0.1 seconds.
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold mt-12 mb-2">Numerical Protection Relays</h3>
                    <p className="text-base leading-8 text-gray-700 text-justify mb-4">
                      This is the brain of the genset. It's a Microprocessor-Based device which measure current and voltage of the generator every second. To prevent short circuits, specific ANSI code (international standard) programming is fed into it.
                    </p>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-4">
                      <strong className="text-dark-600">Overcurrent Protection (Code 50/51):</strong> As soon as the current rises up to its set limit, this relay immediately sends a signal to trip the breaker.
                    </p>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-4">
                      <strong className="text-dark-600">Differential Protection (Code 87G):</strong> This is a crucial protection feature for high-capacity DG sets. It compares the current entering the alternator with the current exiting it. If even a slight difference (leakage) is detected, it
                      identifies an internal short circuit within the generator windings and immediately shuts down the generator.
                    </p>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">
                      <strong className="text-dark-600">Earth Fault Protection (Code 50N/51N):</strong> If a live wire breaks and comes into contact with the generator body or the ground, this system detects the ground fault and trips the unit, preventing shock.{" "}
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold mt-12 mb-2">Insulation & Alternator Protection</h3>
                    <p className="text-base leading-8 text-gray-700 text-justify mb-4">Alternator windings face intense heat (Thermal Shock), and high mechanical shock is generated by a short circuit. To prevent this, the alternator has safety windings: </p>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-4">
                      <strong className="text-dark-600">Class H Insulation:</strong> High-grade Class H insulation is applied to the alternator windings, allowing them to easily withstand temperatures up to 180°C without melting.
                    </p>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">
                      <strong className="text-dark-600">Fault Withstand Capacity:</strong> The windings of high-capacity alternators are secured (bound) in such a way that they do not break apart due to the severe electromagnetic forces generated during a short circuit.
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold mt-12 mb-2">Smart Controllers and AVR (Digital Controllers & AVR)</h3>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-4">
                      <strong className="text-dark-600">Digital Controller (Deep Sea, ComAp, Woodward):</strong> These modern smart panels monitor the health of the generator. In the event of a short circuit, they not only trip the breaker but also send a signal to the engine actuator to
                      immediately cut off the diesel supply, ensuring the engine shuts down instantly.
                    </p>

                    <p className="text-base leading-8 text-gray-700 text-justify mb-6">
                      <strong className="text-dark-600">AVR (Automatic Voltage Regulator):</strong> This component features short-circuit current maintenance capabilities. During a fault, it rapidly drops the voltage to prevent the fault current from exceeding a specific limit, giving sufficient
                      time for the breaker to trip.
                    </p>
                  </div>

                  {/* Table */}
                  <div className="w-full overflow-x-auto my-8 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                      {/* Table Header (Yeh toh sirf 1 baar hi dikhega) */}
                      <thead>
                        <tr className="bg-[#2D6FBA] border-b border-gray-100">
                          <th className="px-8 py-4 text-[11px] font-bold text-white uppercase tracking-wider w-1/4">Feature / Component</th>
                          <th className="px-8 py-4 text-[11px] font-bold text-white uppercase tracking-wider w-1/3">Technology Used (750kVA - 1500kVA)</th>
                          <th className="px-8 py-4 text-[11px] font-bold text-white uppercase tracking-wider">Core Advantage</th>
                        </tr>
                      </thead>

                      {/* Table Body (Yahan sirf 1 baar row ka code hai jo loop se repeat hoga) */}
                      <tbody className="divide-y divide-gray-100 text-[14px] text-gray-600">
                        {panelSpecs.map((row, index) => (
                          <tr key={index} className="hover:bg-gray-50 transition-colors">
                            <td className="px-8 py-6 font-semibold text-gray-800 align-middle text-blue-700">{row.feature}</td>
                            <td className="px-8 py-6 text-gray-600 align-middle">{row.tech}</td>
                            <td className="px-8 py-6 text-gray-500 leading-relaxed align-middle">{row.advantage}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

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
                    <h3 className="text-2xl font-bold leading-tight mb-5">Ready to Power Your Industry with the Right DG Set?</h3>

                    <p className="leading-8 text-white/90 mb-8">Explore Kirloskar generators' power range 7.5 kVA to 1500 kVA and find the exact fit for your facility's load requirements.</p>

                    <Link to="/products/kirloskar-diesel-generator" className="inline-flex items-center justify-center bg-white text-black px-7 py-4 rounded-xl font-semibold hover:bg-gray-100 transition w-full">
                      Explore 7.5 kVA to 1500 kVA DG Sets →
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
                      <Link to="/blog/kirloskar-silent-generator" className="block text-blue-600 hover:text-blue-800 transition border-b border-gray-200 pb-4">
                        Kirloskar Silent Generator
                      </Link>

                        <Link to="/blog/amf-panel-for-dg-set" className="block text-blue-600 hover:text-blue-800 transition border-b border-gray-200 pb-4">
                        AMF Panel For DG Set
                      </Link>
                    </div>
                  </div>

                  {/* CTA */}

                  <div className="bg-[#254f81] rounded-3xl p-8 text-white">
                    <h3 className="text-3xl font-bold leading-tight mb-5">Looking for the right power backup for your industry?</h3>

                    <p className="leading-8 text-white/90 mb-8">Get free advice from our experts and choose the right Kirloskar DG Set (750 kVA - 1500 kVA) for your facility.</p>

                    <Link to="/contact" className="inline-flex items-center justify-center bg-white text-black px-7 py-4 rounded-xl font-semibold hover:bg-gray-100 transition w-full">
                      Get Free Expert Consultation
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

export default KirloskarGeneratorsBlog;
