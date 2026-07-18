import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

import blogBG from "@/assets/BlogImages/amf-control-panel-bg-img.jpg";
import SEO from "@/components/SEO";
import myBlogImageOG from "@/assets/BlogImages/amf-panel-for-dg-set-electrical-control-panel.jpg";
import myBlogFeatureImage from "@/assets/BlogImages/amf-panel-for-generator-feature-image.jpg";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

// AMF Vs Other Panels
const panelTerm = [
  { term: "AMF Panel", des: "Automatically senses mains failure, triggers the backup generator, and switches the electrical load seamlessly without manual intervention." },
  { term: "Distribution Board / Power Distribution Board", des: "Splits the incoming power supply into multiple individual circuits via circuit breakers. It functions purely for distribution and does not monitor power sources or switch loads." },
  { term: "Electrical Control Panel", des: "An umbrella term for any industrial enclosure that houses control, monitoring, or protection devices for specific machinery or automated processes. (An AMF panel is a specialized type of control panel)." },
  { term: "Electrical Panel Board / Panel Box", des: "Refers to the physical metal or plastic enclosure itself. It acts as the protective outer shell that houses a distribution board, control logic, or AMF components." },
  { term: "ATS (Automatic Transfer Switch)", des: "The dedicated switching hardware component responsible for transferring power sources. It is just one integral part housed inside a full AMF panel, not a standalone replacement for it." },
];

// AMF Panel Specification
const panelSpecs = [
  { spec: "Voltage rating", feature: "230V single phase / 415V three phase" },
  { spec: "Current rating", feature: "Matched to genset's rated full-load current, from small 1-phase to large 3-phase DG sets" },
  { spec: "Frequency rating", feature: "50/60 Hz" },
  { spec: "IP rating", feature: "IP42 (Indoor) / IP54 (Outdoor/Dust-prone)" },
  { spec: "Operating temperature", feature: "-5°C to +55°C" },
  { spec: "Genset start delay", feature: "3–5 seconds" },
  { spec: "Return-to-mains delay", feature: "30–60 seconds (adjustable)" },
  { spec: "Cool-down period", feature: "2–5 minutes before genset shutdown" },
  { spec: "Breaker type", feature: "MCCB for smaller loads, ACB for high-current three phase systems" },
  { spec: "Controller Type", feature: "Microprocessor-based intelligent AMF controller" },
  { spec: "Control Logic", feature: "Precision programmed automatic start/stop sequence" },
  { spec: "User Interface", feature: "Clear LED/LCD display for Mains & DG status monitoring" },
  { spec: "Standards reference", feature: "Built and wired as per IS/IEC low-voltage switchgear practice" },
];

// AMF Feature
const amfFeatures = [
  {
    id: 1,
    bullets: [
      {
        featureList: (
          <>
            <strong>Faster Response to Power Failures - </strong>An AMF panel continuously monitors the utility supply and initiates the backup sequence automatically. This eliminates the delay between a power outage and generator startup, even when no operator is present.
          </>
        ),
      },
      {
        featureList: (
          <>
            <strong>Improved Equipment Protection - </strong>Automatic transfer minimizes uncontrolled shutdowns and delayed restarts, helping protect sensitive electrical loads such as servers, medical equipment, PLC-controlled machinery, and lift controllers.
          </>
        ),
      },
      {
        featureList: (
          <>
            <strong>Reduced Fuel Consumption and Engine Wear - </strong>The generator operates only when utility power is genuinely unavailable and shuts down automatically once mains power is stable. This avoids unnecessary running hours, reducing fuel use and long-term engine wear.
          </>
        ),
      },
      {
        featureList: (
          <>
            <strong>Safer Power Transfer - </strong>The interlocked switching mechanism prevents the utility supply and generator from being connected simultaneously. This reduces the risk of backfeeding, protects electrical equipment, and improves personnel safety during outages.
          </>
        ),
      },
      {
        featureList: (
          <>
            <strong>Better Maintenance and Operational Visibility - </strong>Many modern AMF panels record events such as power failures, generator start and stop times, alarms, and operating hours. These records simplify preventive maintenance, troubleshooting, and load planning.
          </>
        ),
      },
    ],
  },
];

const faqsList = [
  {
    question: "What is an AMF panel used for?",
    answer: "AMF Control Panel is a device that used to start a standby generator and shift the electrical load onto it automatically when mains power fails, then move the load back once mains is stable - without manual intervention.",
  },
  {
    question: "How long does an AMF panel take to switch to generator power?",
    answer: "Mains failure is usually sensed in 2–5 seconds, and the full changeover — including letting the generator stabilise - typically completes in under 15–20 seconds, though the delays are adjustable per site.",
  },
  {
    question: "What is the difference between an ATS and an AMF panel?",
    answer: "An ATS only performs the physical switching between two sources. An AMF panel includes the ATS plus the sensing, timing, and start/stop logic needed to run the whole failure-and-recovery sequence on its own.",
  },
  {
    question: "Can an AMF panel be added to an existing generator?",
    answer: "Yes, in most cases. If the generator's control unit has accessible start/stop and sensing terminals, an AMF panel can be retrofitted without replacing the genset.",
  },
  {
    question: "Is an AMF panel necessary for a small generator?",
    answer:
      "Not always. For a generator someone can start manually within a minute, like <a href='http://www.kumarpower.com/products/kirloskar-portable-generator'>portable generator</a> for home or 5kVA to 20kVA range of gas generators, a basic ATS may be enough. But for shops, clinics, or any load where every second of downtime matters, an AMF panel removes the need for a person to react at all.",
  },
  {
    question: "Does an AMF panel work with single phase and three phase generators?",
    answer: "Yes — the panel's switch rating, sensing relay, and wiring are simply selected to match whether the system is single phase (230V) or three phase (415V).",
  },
  {
    question: "What size AMF panel do I need for my generator?",
    answer: "Size the panel to the generator's rated full-load current, not just its kVA figure, then confirm it against the actual connected load. This is best checked during a site survey rather than guessed from the genset's nameplate alone.",
  },
  {
    question: "How much maintenance does an AMF panel need?",
    answer: "A check every 3–6 months is standard: tightening terminals, testing the changeover under real load, and checking the battery charger output. Most field failures come from loose connections or a weak battery, not the panel's control logic.",
  },
  {
    question: "Does an AMF panel work on physics or electronics?",
    answer:
      "Both. Voltage sensing uses basic electromagnetic induction through a transformer, frequency sensing uses zero-crossing detection of the AC waveform, and the actual decision to switch is made by a microcontroller running programmed logic. The final switching action comes from an electromagnetic relay or contactor.",
  },
  {
    question: "Why does a generator trip even after the AMF panel starts it?",
    answer:
      "The AMF panel only picks the power source. The generator itself can still trip afterward from overload, low oil pressure, high coolant temperature, overspeed, or a voltage dip on a large step-load — these are handled by the engine's own protection system, separately from the AMF logic.",
  },
  {
    question: "Can an AMF panel be controlled or monitored from a phone?",
    answer:
      "Yes, if it's fitted with a GSM or IoT module. These send SMS or app alerts on mains failure and recovery, allow remote monitoring of voltage, frequency, and run-hours, and on some systems allow remote start or stop commands. The core AMF logic still works on its own, with or without internet.",
  },
  {
    question: "Does an AMF panel prevent backfeed into the grid?",
    answer: "Yes, a properly wired AMF panel uses mechanical or electrical interlocking so the generator and mains supply can never connect at the same time. This stops backfeed, which is what protects utility linemen working on the grid during a power cut.",
  },
  {
    question: "What is the difference between a relay-based and a microprocessor-based AMF panel?",
    answer:
      "A relay-based AMF panel uses fixed timers and physical relays to sequence the changeover, which is simple but limited on data. A microprocessor-based AMF panel runs on programmable logic, shows live readings on a display, and can log faults - most new installations now prefer the microprocessor type.",
  },
  {
    question: "Can one AMF panel control multiple generators?",
    answer: "A standard AMF panel is built for one generator and one mains source. Running multiple generators together needs a synchronizing panel, which manages load sharing between gensets in addition to the automatic mains failure logic.",
  },
  {
    question: "How long does an AMF panel last before it needs replacement?",
    answer: "A well-maintained AMF panel typically lasts 10-15 years. The control logic rarely fails first — it's usually the contactors, relays, or battery charger that wear out and need replacing, which extends the panel's working life well before a full swap is needed.",
  },
  {
    question: "What certifications should a good AMF panel have?",
    answer: "Look for panels built to IS 8623 or IEC 61439 standards for switchgear safety, along with a CE mark if the components are imported. These certifications confirm the panel has been tested for insulation, short-circuit withstand, and safe switching under load.",
  },
];

const BlogAMFPanel = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [simStatus, setSimStatus] = useState("System Armed. Monitoring Mains...");
  const [simRunning, setSimRunning] = useState(false);
  const [simLogs, setSimLogs] = useState<string[]>([]);
  const [meters, setMeters] = useState({ mains: "415V / 50Hz", gen: "000V / 00Hz", load: "Mains Line" });

  const runSimulation = () => {
    if (simRunning) return;
    setSimRunning(true);
    setSimLogs([]);

    const sequence = [
      { t: 0, status: "CRITICAL ALERT: Utility Mains Power FAILURE detected.", m: { mains: "000V / 00Hz", gen: "000V / 00Hz", load: "NONE (Blackout)" } },
      { t: 10, status: "T+2s: Mains failure confirmed. Sending start command signal to standby DG Set.", m: { mains: "000V / 00Hz", gen: "000V / 00Hz", load: "NONE (Blackout)" } },
      { t: 25, status: "T+5s: DG Set Engine cranking... Ignition successful.", m: { mains: "000V / 00Hz", gen: "380V / 46Hz", load: "NONE (Blackout)" } },
      { t: 40, status: "T+9s: Generator voltage stabilized at rated limits.", m: { mains: "000V / 00Hz", gen: "415V / 50Hz", load: "NONE (Blackout)" } },
      { t: 55, status: "T+13s: Actuating AMF Changeover Mechanism. Opening Mains Contactor.", m: { mains: "000V / 00Hz", gen: "415V / 50Hz", load: "NONE (Blackout)" } },
      { t: 70, status: "T+15s: Closing Generator Contactor. Load safely TRANSFERRED to DG Set.", m: { mains: "000V / 00Hz", gen: "415V / 50Hz", load: "Generator Line" } },
      { t: 95, status: "SYSTEM STATUS: Running on Standby Generator Power smoothly.", m: { mains: "000V / 00Hz", gen: "415V / 50Hz", load: "Generator Line" } },
    ];

    sequence.forEach((step) => {
      setTimeout(() => {
        setSimStatus(step.status);
        setMeters(step.m);
        setSimLogs((prev) => [...prev, step.status]);
      }, step.t * 50);
    });

    setTimeout(
      () => {
        setSimRunning(false);
      },
      95 * 50 + 400,
    );
  };

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

  return (
    <>
      <SEO
        title="AMF Panel For DG Set | Automatic Mains Failure Control Panel"
        description="Looking for an AMF Panel for DG Set? Explore its working, components, specifications, installation process, benefits and automatic power transfer in this guide."
        canonical="https://www.kumarpower.com/blog/amf-panel-for-dg-set"
        ogImage={myBlogImageOG}
        keywords="AMF Panel for DG Set, Automatic Mains Failure Panel, AMF Control Panel, DG Set Auto Start Panel, Kirloskar AMF Panel, Kumar Power AMF Panel"
        robots="index, follow"
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
      .hud-sim { border: 1.5px solid #0a0a0a; background: #0a0a0a; color: #ffffff; padding: 26px 26px 22px; margin: 20px 0 10px; }
        .hud-top { display: flex; justify-content: space-between; align-items: center; font-family: 'Poppins', monospace; font-size: 0.68rem; color: rgba(255,255,255,0.4); border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 12px; margin-bottom: 16px; }
        .hud-meters { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(255,255,255,0.15); margin-bottom: 20px; }
        .meter { background: #0a0a0a; padding: 12px 14px; }
        .meter span { display: block; font-family: 'Poppins', monospace; font-size: 0.62rem; color: rgba(255,255,255,0.4); margin-bottom: 6px; }
        .meter b { font-family: 'Poppins', monospace; font-size: 0.92rem; color: #ffffff; font-weight: 500; }
        .hud-btn { font-family: 'Poppins', monospace; font-size: 0.8rem; background: #254f81; color: #ffffff; border: none;
        padding: 8px 12px; cursor: pointer; transition: background .15s; }
        .hud-btn:disabled { background: #333; color： #777; cursor: not-allowed; }
        .hud-log { background: rgba(255,255,255,0.05); height: 250px; overflow-y: auto; padding: 12px; border: 1px solid rgba(255,255,255,0.1); font-family: 'Poppins', monospace; font-size: 0.78rem; }
        .cta-band { background: #0a0a0a; color: #ffffff; margin-top: 40px; padding: 56px 28px; text-align: center; }
        .cta-btn { font-family: 'Poppins', monospace; font-size: 0.85rem; background: #254f81; color: #ffffff; text-decoration: none; padding: 14px 30px; display: inline-block; border: 1.5px solid #254f81; }
      `,
        }}
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchemaData)}</script>
      </Helmet>
      <Header />

      <main className="bg-white min-h-screen text-black overflow-hidden">
        {/* HERO SECTION */}

        <section className="relative h-[500px] font-['Poppins',sans-serif] overflow-hidden">
          <img src={blogBG} alt="High-Capacity AMF Control Panels Installed in the Facility For DG Sets" className="absolute inset-0 w-full h-full object-cover scale-105" />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
            <Link to="/blogs" className="text-blue-300 hover:text-white transition mb-6 text-sm tracking-wide">
              ← Back To Blogs
            </Link>

            <div className="inline-flex items-center bg-[#254f81] backdrop-blur-md border px-6 py-2 rounded-full mb-3 md:mb-8 w-fit">
              <span className="font-['Poppins',sans-serif] text-[10px] md:text-xs text-white tracking-wide font-bold tracking-[3px]">AMF CONTROL PANEL</span>
            </div>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-['Poppins',sans-serif] text-[32px] leading-tight md:text-5xl font-bold text-white max-w-5xl mb-2 border-b border-white/10 pb-4 ">
              AMF Panel for DG Set: Automatic Main Failure Control Panel
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="font-['Poppins',sans-serif] text-sm md:text-sm text-white max-w-4xl mt-4 text-justify">
              AMF stands for Automatic Mains Failure; it's one type of electrical control panel. An{" "}
              <a href="/products/panels" className="text-blue-300 hover:text-[#f00] transition font-bold">
                AMF Control Panel
              </a>{" "}
              is a smart electric device that tracks the main power supply. It automatically starts the generator during a main power failure, transfers load from the main to the DG set, and switches back when mains power returns - without any manual intervention. This device turns your manual
              generator into a fully automatic power backup system.
            </motion.p>
          </div>
        </section>

        {/* BLOG SECTION */}

        <section className="py-20 font-['Poppins',sans-serif]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
              {/* LEFT CONTENT */}

              <div className="lg:col-span-8">
                {/* CONTENT */}

                <article className="space-y-6">
                  <div className="text-xs bg-[#254f81] text-white px-4 py-2 inline-block">01 · DEFINITION</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black leading-normal border-b-2 border-blue-500 pb-2 w-fit">What Is AMF Panel?</h2>
                  <p className="text-base leading-8 text-gray-700 text-justify">
                    In electrical distribution engineering, an <strong>AMF (Automatic Mains Failure)</strong> panel serves as the critical automation bridge between a primary utility power grid and a secondary emergency standby generator line. Without human intervention, it acts as an intelligent
                    supervisor that continuously samples input lines and commands power source flip-flops within seconds of a grid anomaly. In simple words:
                  </p>
                  <p className="text-base leading-8 text-gray-700 text-justify">
                    AMF (Automatic Mains Failure) Panel is an{" "}
                    <a href="/products/panels" className="text-[#254f81] hover:text-[#f00] transition font-bold">
                      electrical control device
                    </a>{" "}
                    specially designed to detect a power outage in the main grid electric supply. When detect interruption, it automatically starts your standby genset. It safely transfers the electrical load to the generator, then switches back to mains power and shuts down the generator once the
                    main grid supply is restored.
                  </p>
                  <div className="flex flex-col md:flex-row flex-wrap justify-start items-start md:items-center gap-3 md:gap-x-4 text-sm font-semibold mb-6">
                    <span className="bg-[#254f81]/10 backdrop-blur-sm text-[#254f81] border border-[#254f81]/20 px-4 py-2 rounded-full">Automated Transfer</span>
                    <span className="bg-[#254f81]/10 backdrop-blur-sm text-[#254f81] border border-[#254f81]/20 px-4 py-2 rounded-full">Generator Management</span>
                    <span className="bg-[#254f81]/10 backdrop-blur-sm text-[#254f81] border border-[#254f81]/20 px-4 py-2 rounded-full">Cooling-down Cycle</span>
                  </div>
                  <div className="border-l-4 border-[#254f81] px-6 py-4 bg-[#254f81]/10 rounded-r-sm mb-12">
                    <h6 className="text-sm font-bold text-[#254f81] uppercase tracking-wide mb-1">Field Definition</h6>
                    <p className="text-base leading-6 text-gray-800 text-justify">
                      An AMF panel does not simply shift current vectors; it actively protects systems, checks line health, tells the generator engine when to ignite, monitors stable voltage frequencies, and performs structural load changeover.
                    </p>
                  </div>
                  <img className="border-2 border-[#e2e2e2] my-6 rounded-md" src={myBlogImageOG} alt="AMF Panel For DG Set - Modern Power Soltions" title="AMF Panel For DG Set - Modern Power Soltions" />
                  <hr />
                  {/* SECTION 1 */}
                  <div className="text-xs bg-[#254f81] text-white px-4 py-2 inline-block !mt-[70px]">02 · CORE PARTS</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black leading-normal border-b-2 border-blue-500 pb-2 w-fit">The Core Components of an AMF Panel</h2>
                  <p className="text-base leading-8 text-gray-700 text-justify">
                    Open up any AMF control panel, and you'll find the same working parts, just sized differently depending on the{" "}
                    <a href="/blog/industrial-kirloskar-dg-set-750kva-1500kva" className="text-[#254f81] hover:text-[#f00] transition font-bold">
                      generator capacity
                    </a>
                    . A heavy-duty industrial AMF installation consolidates switchgear, computational logical components, and safety modules into a unified structural enclosure. Below are the key building blocks:{" "}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    <div className="group bg-white border border-[#254f81a4] rounded-sm p-6 shadow-sm hover:translate-y-[-2px] hover:shadow-md">
                      <span className="text-xs text-[#254f81c4] uppercase tracking-wider font-semibold block mb-2 group-hover:text-[#254f81]">COMP-01</span>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">AMF Controller / Microcontroller Logic</h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify">The brain of the panel. Continuously samples mains voltage across phases. Runs the timers for mains failure detection, engine cranking, and cool-down.</p>
                    </div>

                    <div className="group bg-white border border-[#254f81a4] rounded-sm p-6 shadow-sm hover:translate-y-[-2px] hover:shadow-md">
                      <span className="text-xs text-[#254f81c4] uppercase tracking-wider font-semibold block mb-2 group-hover:text-[#254f81]">COMP-02</span>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Automatic Transfer Switch (ATS) / Contactors</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">Heavy-duty motorized switches or mechanically interlocked contactors that physically switch the load terminal between mains and generator lines.</p>
                    </div>

                    <div className="group bg-white border border-[#254f81a4] rounded-sm p-6 shadow-sm hover:translate-y-[-2px] hover:shadow-md">
                      <span className="text-xs text-[#254f81c4] uppercase tracking-wider font-semibold block mb-2 group-hover:text-[#254f81]">COMP-03</span>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Battery Charger (Trickle/Boost Mode)</h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify">Keeps the generator's starting battery charged using mains power. Vital because an AMF panel is useless if the genset battery is dead when a power cut happens.</p>
                    </div>

                    <div className="group bg-white border border-[#254f81a4] rounded-sm p-6 shadow-sm hover:translate-y-[-2px] hover:shadow-md">
                      <span className="text-xs text-[#254f81c4] uppercase tracking-wider font-semibold block mb-2 group-hover:text-[#254f81]">COMP-04</span>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Protective Relays & Circuit Breakers</h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify">MCBs, MCCBs, or air circuit breakers (ACB) that safeguard the load and the generator from short circuits, overcurrent, phase reversal, and single-phasing.</p>
                    </div>

                    <div className="group bg-white border border-[#254f81a4] rounded-sm p-6 shadow-sm hover:translate-y-[-2px] hover:shadow-md">
                      <span className="text-xs text-[#254f81c4] uppercase tracking-wider font-semibold block mb-2 group-hover:text-[#254f81]">COMP-05</span>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Sensing Transformers & Fuses</h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify">Step-down transformers that scale down line voltages to safe levels for the controller to read, paired with control fuses for isolation.</p>
                    </div>

                    <div className="group bg-white border border-[#254f81a4] rounded-sm p-6 shadow-sm hover:translate-y-[-2px] hover:shadow-md">
                      <span className="text-xs text-[#254f81c4] uppercase tracking-wider font-semibold block mb-2 group-hover:text-[#254f81]">COMP-06</span>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Busbars and Termination Blocks</h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify">Thick electrolytic copper or aluminum bars designed to handle the full rated current of the installation with minimal thermal loss.</p>
                    </div>
                  </div>
                  <hr />
                  {/* SECTION 2 */}
                  <div className="text-xs bg-[#254f81] text-white px-4 py-2 inline-block !mt-[70px]">03 · LOGIC</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black leading-normal border-b-2 border-blue-500 pb-2 w-fit">How an AMF Panel Works: 5 Senconds of Working Method</h2>
                  <p className="text-base leading-8 text-gray-700 text-justify">
                    The value of an{" "}
                    <a href="/products/panels" className="text-[#254f81] hover:text-[#f00] transition font-bold">
                      AMF panel
                    </a>{" "}
                    is entirely in its sequencing. From detecting a power outage to starting the genset, shifting loads, and shutting down the genset when the power comes back, here's the real order of events during a mains failure:
                  </p>
                  <div className="font-['Poppins',sans-serif] max-w-4xl mx-auto p-6">
                    <div className="relative border-l border-gray-200 ml-4 pl-8 space-y-8">
                      {/* Step 01 */}
                      <div className="relative">
                        <span className="absolute -left-[50px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#254f81] bg-[#254f81] text-[11px] font-semibold text-white">01</span>
                        <h3 className="text-base font-bold text-gray-900 mb-1">Mains drops</h3>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">The sensing relay detects loss of voltage or a bad phase within 2–5 seconds.</p>
                      </div>

                      {/* Step 02 */}
                      <div className="relative">
                        <span className="absolute -left-[50px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#254f81] bg-[#254f81] text-[11px] font-semibold text-white">02</span>
                        <h3 className="text-base font-bold text-gray-900 mb-1">Start signal sent</h3>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">The panel signals the generator's control unit to crank. A short delay (usually 3–5 seconds) prevents the genset from firing during momentary blips.</p>
                      </div>

                      {/* Step 03 */}
                      <div className="relative">
                        <span className="absolute -left-[50px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#254f81] bg-[#254f81] text-[11px] font-semibold text-white">03</span>
                        <h3 className="text-base font-bold text-gray-900 mb-1">Generator stabilises</h3>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">The panel waits for the genset to reach rated voltage and frequency — not just for the engine to start running.</p>
                      </div>

                      {/* Step 04 */}
                      <div className="relative">
                        <span className="absolute -left-[50px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#254f81] bg-[#254f81] text-[11px] font-semibold text-white">04</span>
                        <h3 className="text-base font-bold text-gray-900 mb-1">Load transfer</h3>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">The changeover switch disconnects mains and connects the generator to the load. Mains and generator are never bridged together.</p>
                      </div>

                      {/* Step 05 */}
                      <div className="relative">
                        <span className="absolute -left-[50px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#254f81] bg-[#254f81] text-[11px] font-semibold text-white">05</span>
                        <h3 className="text-base font-bold text-gray-900 mb-1">Mains returns</h3>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">The relay detects stable mains and starts a return delay, usually 30–60 seconds, to rule out a false recovery.</p>
                      </div>

                      {/* Step 06 */}
                      <div className="relative">
                        <span className="absolute -left-[50px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#254f81] bg-[#254f81] text-[11px] font-semibold text-white">06</span>
                        <h3 className="text-base font-bold text-gray-900 mb-1">Reverse transfer</h3>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">Load shifts back to mains.</p>
                      </div>

                      {/* Step 07 */}
                      <div className="relative">
                        <span className="absolute -left-[50px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#254f81] bg-[#254f81] text-[11px] font-semibold text-white">07</span>
                        <h3 className="text-base font-bold text-gray-900 mb-1">Cool-down and shutdown</h3>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">The generator runs unloaded for a few minutes before the panel shuts it down, protecting the engine from thermal shock.</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-base leading-8 text-gray-700 text-justify">Each of these steps is fully automated and executes without any manual intervention. That is the core purpose of this panel.</p>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-normal border-b-2 border-blue-500 pb-2 w-fit">Combination of Physics and Electronics</h3>
                  <p className="text-base leading-8 text-gray-700 text-justify">
                    An AMF panel operates on standard electrical physics managed by basic electronic controllers. Contrary to common misconceptions, it does not involve complex chemical monitoring or engine-level combustion sensing. The core functionality is straightforward telemetry and automation.
                    Here is a breakdown of what the system measures:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white border border-[#254f81a4] rounded-sm p-6 shadow-sm hover:translate-y-[-2px]">
                      <h4 className="text-lg font-bold text-[#254f81] mb-3">Sensing Voltage</h4>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        A small transformer (or a resistor voltage divider) steps the mains voltage down to a safe low level. This is plain electromagnetic induction - the same principle behind every transformer. The stepped-down signal is then read by the panel's circuit.
                      </p>
                    </div>

                    <div className="bg-white border border-[#254f81a4] rounded-sm p-6 shadow-sm hover:translate-y-[-2px]">
                      <h4 className="text-lg font-bold text-[#254f81] mb-3">Sensing Frequency</h4>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        AC power crosses zero volts twice in every cycle. A comparator circuit flags each crossing, and a microcontroller times the gap between them to calculate frequency. If the gap drifts outside a safe band (roughly 47–53 Hz on a 50 Hz supply), the panel treats it as a fault -
                        even if the voltage still looks fine.
                      </p>
                    </div>

                    <div className="bg-white border border-[#254f81a4] rounded-sm p-6 shadow-sm hover:translate-y-[-2px]">
                      <h4 className="text-lg font-bold text-[#254f81] mb-3">Making the Decision</h4>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        A microcontroller or PLC compares these readings against set thresholds. A short debounce timer stops it from reacting to a one-second flicker - this is programmed logic, not a physical law, and it's what actually gives the panel its "intelligence."
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-base leading-8 text-gray-700 text-justify">
                    The final action: physically moving the changeover switch comes down to an electromagnet again. When the microcontroller energises a contactor coil, it pulls a mechanical armature that closes or opens the contacts. There's no motor, no software running the switch itself - just a
                    coil, a spring, and a magnetic field, the same idea used in every relay since the 1830s.
                  </p>
                  <div className="border-l-4 border-[#254f81] px-6 py-4 bg-[#254f81]/10 rounded-r-sm mb-12">
                    <h6 className="text-sm font-bold text-[#254f81] uppercase tracking-wide mb-1">In Engineering:</h6>
                    <p className="text-base leading-6 text-gray-800 text-justify">
                      The "sensing" side is analogue electronics (transformers, comparators, voltage dividers) and signal processing (zero-crossing counting). The "decision" side is embedded systems - a microcontroller running a state machine. The "action" side is electromechanics - a relay or
                      contactor. An AMF panel is a small, complete example of all three working together.
                    </p>
                  </div>
                  <div className="hud-sim">
                    <div className="hud-top">
                      <span>SYSTEM HUD SIMULATOR [v2.4]</span>
                      <span className="hud-clock">ACTIVE LOGS</span>
                    </div>
                    <div className="hud-status" style={{ display: "flex", alignItems: "center", gap: "10px", margin: "14px 0" }}>
                      <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: simRunning ? "#d9534f" : "#5cb85c" }}></div>
                      <div id="hudText">{simStatus}</div>
                    </div>
                    <div className="hud-meters">
                      <div className="meter">
                        <span>MAINS INPUT</span>
                        <b>{meters.mains}</b>
                      </div>
                      <div className="meter">
                        <span>GENSET STAGE</span>
                        <b>{meters.gen}</b>
                      </div>
                      <div className="meter">
                        <span>CONNECTED LOAD</span>
                        <b>{meters.load}</b>
                      </div>
                    </div>
                    <button className="hud-btn" onClick={runSimulation} disabled={simRunning}>
                      {simRunning ? "Running Transition Sequence..." : "Simulate Utility Mains Failure"}
                    </button>
                    {simLogs.length > 0 && (
                      <div className="hud-log" style={{ marginTop: "16px" }}>
                        {simLogs.map((log, lIdx) => (
                          <div key={lIdx} style={{ marginBottom: "4px", borderBottom: "1px solid #222", paddingBottom: "5px", color: "#a9b7c6" }}>
                            ➔ {log}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-xs leading-6 text-[#254f81] text-justify">Timings are illustrative — real panels are configurable, typically in the ranges given in the Specifications section below.</p>
                  <hr />
                  {/* Section 3 */}
                  <div className="text-xs bg-[#254f81] text-white px-4 py-2 inline-block uppercase !mt-[70px]">04 · AMF Wiring with DG SET</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black leading-normal border-b-2 border-blue-500 pb-2 w-fit">How the AMF Panel Links to the DG Set</h2>
                  <p className="text-base leading-8 text-gray-700 text-justify">
                    In a{" "}
                    <a href="/products/kirloskar-diesel-generator" className="text-[#254f81] hover:text-[#f00] transition font-bold">
                      DG Set
                    </a>{" "}
                    installation, the AMF panel functions as the automation interface between the utility supply, the generator controller, and the connected load. It does not generate electrical power or replace the generator controller. Instead, it monitors the mains supply, exchanges control and
                    feedback signals with the DG set, verifies electrical parameters, and manages the automatic changeover sequence. Engine protection, speed regulation, and alternator control remain the responsibility of the generator's own controller.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-sm transition-shadow hover:translate-y-[-2px]">
                      <h3 className="text-lg font-bold text-[#254f81] mb-3 border-b pb-2">Control Interface</h3>
                      <p className="text-sm text-gray-600">The AMF controller interfaces with the generator control module through dedicated digital inputs and relay outputs for command exchange and status feedback.</p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-sm transition-shadow hover:translate-y-[-2px]">
                      <h3 className="text-lg font-bold text-[#254f81] mb-3 border-b pb-2">Voltage & Frequency Feedback</h3>
                      <p className="text-sm text-gray-600">Voltage and frequency sensing circuits continuously sample both utility and generator supply, providing the controller with real-time electrical measurements for decision logic.</p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-sm transition-shadow hover:translate-y-[-2px]">
                      <h3 className="text-lg font-bold text-[#254f81] mb-3 border-b pb-2">DC Supply & Battery Circuit</h3>
                      <p className="text-sm text-gray-600">The panel supervises the DC starting battery and charging circuit to verify control power availability and detect low-voltage conditions.</p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-sm transition-shadow hover:translate-y-[-2px]">
                      <h3 className="text-lg font-bold text-[#254f81] mb-3 border-b pb-2">Communication Network</h3>
                      <p className="text-sm text-gray-600">Where supported, RS485/Modbus communication establishes direct data exchange with the generator controller for alarms, operating parameters, and diagnostic information.</p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-sm transition-shadow hover:translate-y-[-2px]">
                      <h3 className="text-lg font-bold text-[#254f81] mb-3 border-b pb-2">Power Interface</h3>
                      <p className="text-sm text-gray-600">Generator output conductors terminate at the panel incomer through appropriately rated switching and protection devices, forming the power path to the connected load.</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-[#254f81] px-6 py-4 bg-[#254f8114] rounded-r-sm mb-12">
                    <p className="text-base leading-7 text-[#1c1c1c] text-justify">
                      A mismatch here — wrong sensing voltage, missing earth reference, or an under-rated control cable — is the most common reason an AMF panel "doesn't respond" even though both the panel and generator work fine on their own.
                    </p>
                  </div>{" "}
                  <hr />
                  {/* Section 4 */}
                  <div className="text-xs bg-[#254f81] text-white px-4 py-2 inline-block !mt-[70px]">05 · Generator Tripping</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black leading-normal border-b-2 border-blue-500 pb-2 w-fit">Why Generators Trip - The Engineering Behind It</h2>
                  <p className="text-base leading-8 text-gray-700 text-justify">
                    A "trip" isn't the generator failing, it's the generator's protection system stepping in to stop small problems from becoming expensive ones. It's worth knowing these are usually handled by the genset's own controller, separately from the AMF panel's job of picking a power
                    source.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    <div className="bg-white border border-[#254f81a4] rounded-sm p-6 shadow-sm hover:shadow-lg transition-shadow hover:bg-[#f5fbff] hover:translate-y-[-1px]">
                      <span className="text-xs text-[#254f81c4] uppercase tracking-wider font-semibold block mb-2">CAUSE / 1</span>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Overload / Over-current</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">Connected load exceeds the rated current, often by 110–125%. The breaker or controller opens to protect windings and cabling before they overheat.</p>
                    </div>

                    <div className="bg-white border border-[#254f81a4] rounded-sm p-6 shadow-sm hover:shadow-lg transition-shadow hover:bg-[#f5fbff] hover:translate-y-[-1px]">
                      <span className="text-xs text-[#254f81c4] uppercase tracking-wider font-semibold block mb-2">CAUSE / 2</span>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Low Oil Pressure</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">An oil pressure sensor catches poor lubrication before bearings and cylinder walls take real damage.</p>
                    </div>

                    <div className="bg-white border border-[#254f81a4] rounded-sm p-6 shadow-sm hover:shadow-lg transition-shadow hover:bg-[#f5fbff] hover:translate-y-[-1px]">
                      <span className="text-xs text-[#254f81c4] uppercase tracking-wider font-semibold block mb-2">CAUSE / 3</span>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">High Coolant Temperature</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">A temperature sensor trips the set before the engine block or head gasket is damaged by heat.</p>
                    </div>

                    <div className="bg-white border border-[#254f81a4] rounded-sm p-6 shadow-sm hover:shadow-lg transition-shadow hover:bg-[#f5fbff] hover:translate-y-[-1px]">
                      <span className="text-xs text-[#254f81c4] uppercase tracking-wider font-semibold block mb-2">CAUSE / 4</span>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Overspeed</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">If the governor fails and rotational speed climbs roughly 10% above rated, an overspeed trip cuts fuel before the engine damages itself.</p>
                    </div>

                    <div className="bg-white border border-[#254f81a4] rounded-sm p-6 shadow-sm hover:shadow-lg transition-shadow hover:bg-[#f5fbff] hover:translate-y-[-1px]">
                      <span className="text-xs text-[#254f81c4] uppercase tracking-wider font-semibold block mb-2">CAUSE / 5</span>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Undervoltage on Load Acceptance</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">A large sudden load can outpace the alternator's excitation for a moment, voltage dips, and the set trips before it can recover.</p>
                    </div>

                    <div className="bg-white border border-[#254f81a4] rounded-sm p-6 shadow-sm hover:shadow-lg transition-shadow hover:bg-[#f5fbff] hover:translate-y-[-1px]">
                      <span className="text-xs text-[#254f81c4] uppercase tracking-wider font-semibold block mb-2">CAUSE / 6</span>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Fuel and Environment Faults</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">Contaminated fuel, clogged filters, or dust and humidity ingress cause combustion or insulation issues that show up as nuisance trips.</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-[#254f81] px-6 py-4 bg-[#254f8114] rounded-r-sm mb-12">
                    <h6 className="text-sm font-bold text-[#254f81] uppercase tracking-wide mb-2">AMF panel vs. engine protection</h6>
                    <p className="text-base leading-7 text-[#1c1c1c] text-justify">
                      The AMF panel decides which source feeds the load. Engine protection is often built into the same genset controller. It decides whether the engine itself is safe to keep running. In modern control panels, both live in one enclosure. The Genset Controller and the AMF Panel
                      communicate with each other via RS485 or CANbus cables.
                    </p>
                  </div>
                  <p className="text-base leading-7 text-gray-800 text-justify">
                    Even though the decision to trip originates from the generator's own controller, the signal is immediately transmitted to the AMF panel. The AMF panel displays a message such as "DG Tripped due to LLOP" on the screen and immediately attempts to switch back to the Mains supply. In
                    many large systems, the AMF itself functions as the master controller.
                  </p>
                  <hr />
                  {/* Section 5 */}
                  <div className="text-xs bg-[#254f81] text-white px-4 py-2 inline-block !mt-[70px]">06 · ELECTRICAL CONTROL PANELS</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black leading-normal border-b-2 border-blue-500 pb-2 w-fit">AMF Panel VS. Other Electrical Control Panels</h2>
                  <p className="text-base leading-8 text-gray-700 text-justify">
                    In the electrical industry, the term 'Panel' is used quite broadly, which can sometimes lead to confusion. To maintain technical clarity, it is critical to classify enclosures by their specific operational functions. An AMF (Auto Mains Failure) Panel is not just a distribution
                    box; it is an intelligent, automated command centre designed specifically for power continuity and emergency backup management.
                  </p>
                  <p className="text-base leading-8 text-gray-700 text-justify">
                    While standard panels focus on{" "}
                    <a href="/products/panels" className="text-[#254f81] hover:text-[#f00] transition font-bold">
                      power distribution
                    </a>{" "}
                    and circuit protection, an AMF panel monitors the grid health, commands generator start-ups, and handles seamless source switching. To understand its exact hierarchy on site, we must look at how it interfaces with other critical power systems.
                  </p>
                  {/* Table Wrapper */}
                  <div className="w-full my-8 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden">
                    {/* Desktop View: Standard Table (Hidden on Mobile) */}
                    <table className="hidden md:table w-full text-left border-collapse table-fixed">
                      <thead>
                        <tr className="bg-[#254f81] border-b border-gray-100">
                          <th className="px-8 py-4 text-[11px] font-bold text-white uppercase tracking-wider w-1/3">Term</th>
                          <th className="px-8 py-4 text-[11px] font-bold text-white uppercase tracking-wider w-2/3">Technical Definition & Core Function</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-[14px] text-gray-600">
                        {panelTerm.map((row, index) => (
                          <tr key={index} className="hover:bg-[#254f8114] transition-colors">
                            <td className="px-8 py-4 font-semibold text-gray-800 align-top text-blue-700 break-words">{row.term}</td>
                            <td className="px-8 py-4 text-gray-600 align-top break-words">{row.des}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* Mobile View: Stacked Cards Layout (Hidden on Desktop) */}
                    <div className="block md:hidden divide-y divide-gray-100">
                      {panelTerm.map((row, index) => (
                        <div key={index} className="p-5 hover:bg-gray-50 transition-colors">
                          <div className="text-[14px] font-bold text-[#254f81] mb-2">{row.term}</div>
                          <div className="text-[13px] text-gray-600 leading-relaxed">{row.des}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <hr />
                  {/* Section 6 */}
                  <div className="text-xs bg-[#254f81] text-white px-4 py-2 inline-block !mt-[70px]">07 · BENEFITS</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black leading-normal border-b-2 border-blue-500 pb-2 w-fit">Benefits of AMF Panel for DG Set</h2>
                  {/* AMF Panel */}
                  <div className="p-4 bg-[#254f8114] rounded-lg shadow-sm">
                    <div>
                      <div className="flex flex-col gap-y-4 my-6 pl-2">
                        {/* Direct pehle item ke bullets par loop chalaya */}
                        {amfFeatures[0]?.bullets.map((b, idx) => (
                          <div key={idx} className="flex items-start gap-4 border-b border-gray-200 pb-4 last:border-0">
                            <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-4 w-4 shrink-0 mt-2">
                              <CheckCircle2 className="text-white h-4 w-4" style={{ background: "#2D6FBA", borderRadius: "9999px" }} />
                            </span>
                            <p className="!leading-loose text:sm md:text-base text-gray-700 text-justify">{b.featureList}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <img className="my-6 rounded-md" src={myBlogFeatureImage} alt="AMF Control Panel For DG Set - Kumar Power ISO 9001:2015" title="AMF Control Panel For DG Set - Kumar Power ISO 9001:2015" />
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-normal border-b-2 border-blue-500 pb-2 w-fit">Manual Transfer Switch vs. Automatic AMF Panel</h3>
                  <div className="w-full border border-[#254f8114] grid grid-cols-1 md:grid-cols-2 text-left rounded-[2px]">
                    {/* Left Column: WITHOUT AMF PANEL */}
                    <div className="bg-white p-6 md:p-8 flex flex-col justify-start rounded-[2px]">
                      <h4 className="font-bold text-sm tracking-widest text-gray-500 uppercase mb-6 border-b border-gray-200 pb-4">Manual Changeover Switch</h4>
                      <ul className="space-y-4 divide-y divide-gray-200">
                        <li className="py-5 text-gray-700 text-sm leading-relaxed">Requires an operator to detect the power failure and manually start the generator.</li>
                        <li className="py-5 text-gray-700 text-sm leading-relaxed">Manual changeover can delay power restoration by several minutes depending on staff availability.</li>
                        <li className="py-5 text-gray-700 text-sm leading-relaxed">Possibility of operator error during changeover.</li>
                        <li className="py-5 text-gray-700 text-sm leading-relaxed">No automatic engine monitoring or protective shutdown functions.</li>
                        <li className="py-5 text-gray-700 text-sm leading-relaxed">Generator may continue running unnecessarily after utility power returns, increasing fuel consumption.</li>
                        <li className="py-5 text-gray-700 text-sm leading-relaxed">No automatic event history or runtime records.</li>
                        <li className="py-5 text-gray-700 text-sm leading-relaxed">Suitable only where trained personnel are always available.</li>
                        <li className="py-5 text-gray-700 text-sm leading-relaxed">Lower initial investment but higher operational risk and dependency on manpower.</li>
                      </ul>
                    </div>

                    {/* Right Column: WITH AMF PANEL */}
                    <div className="bg-[#1d447a] text-white p-6 md:p-8 flex flex-col justify-start rounded-[2px]">
                      <h4 className="font-bold text-sm tracking-widest text-white uppercase mb-6 border-b border-[#2b5694] pb-4">Automatic AMF Control Panel</h4>
                      <ul className="space-y-0 divide-y divide-[#2b5694]">
                        <li className="py-5 text-gray-100 text-sm leading-relaxed">Detects mains failure automatically and starts the generator without human intervention.</li>
                        <li className="py-5 text-gray-100 text-sm leading-relaxed">Automatically transfers the electrical load to the generator within seconds after power failure.</li>
                        <li className="py-5 text-gray-100 text-sm leading-relaxed">Interlocked switching prevents mains and generator from being connected simultaneously.</li>
                        <li className="py-5 text-gray-100 text-sm leading-relaxed">Continuously monitors engine parameters such as oil pressure, coolant temperature, battery voltage, frequency, and overspeed for safe operation.</li>
                        <li className="py-5 text-gray-100 text-sm leading-relaxed">Automatically stops the generator after mains supply stabilizes, reducing fuel usage and engine wear.</li>
                        <li className="py-5 text-gray-100 text-sm leading-relaxed">Records generator run hours, fault history, and power outage events for maintenance and analysis.</li>
                        <li className="py-5 text-gray-100 text-sm leading-relaxed">Ideal for unmanned facilities, hospitals, data centers, telecom sites, industries, and critical infrastructure requiring uninterrupted power.</li>
                        <li className="py-5 text-gray-100 text-sm leading-relaxed">Higher initial investment but significantly improves reliability, safety, and long-term operational efficiency.</li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                  {/* Section 7 */}
                  <div className="text-xs bg-[#254f81] text-white px-4 py-2 inline-block !mt-[70px]">08 · Specification</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black leading-normal border-b-2 border-blue-500 pb-2 w-fit">Specification of AMF Control Panel</h2>
                  <p className="text-base leading-8 text-gray-700 text-justify">
                    AMF control panel specifications vary depending on generator capacity, application, and automation requirements. At{" "}
                    <a href="https://www.kumarpower.com" className="text-[#254f81] hover:text-[#f00] transition font-bold">
                      Kumar Power
                    </a>
                    , we design and supply AMF control panels with carefully selected electrical components and industry-standard configurations to ensure reliable automatic power transfer and long-term operational performance. The table below outlines the typical technical specifications of an AMF
                    control panel used with diesel generator sets.
                  </p>
                  {/* Specifications */}
                  <div className="w-full my-8 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden">
                    {/* Desktop View: Proper Table (Yeh sirf bade screens par dikhega, no scroll) */}
                    <table className="hidden md:table w-full text-left border-collapse table-fixed">
                      <thead>
                        <tr className="bg-[#254f81] border-b border-gray-100">
                          <th className="px-8 py-4 text-[11px] font-bold text-white uppercase tracking-wider w-1/3">Parameter</th>
                          <th className="px-8 py-4 text-[11px] font-bold text-white uppercase tracking-wider w-2/3">Typical Range / Specification</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-[14px] text-gray-600">
                        {panelSpecs.map((row, index) => (
                          <tr key={index} className={`transition-colors hover:bg-gray-50 ${index % 2 === 0 ? "bg-[#254f8114]" : "bg-white"}`}>
                            <td className="px-8 py-4 font-semibold text-[#254f81] align-top break-words">{row.spec}</td>
                            <td className="px-8 py-4 text-[#0a0a0a] align-top break-words">{row.feature}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* Mobile View: Stacked View (Mobile par text automatic next line me wrap ho jayega, zero scroll) */}
                    <div className="block md:hidden divide-y divide-gray-100">
                      {panelSpecs.map((row, index) => (
                        <div key={index} className={`p-4 transition-colors ${index % 2 === 0 ? "bg-[#254f8114]" : "bg-white"}`}>
                          <div className="text-[14px] font-bold text-blue-700 mb-1 break-words">{row.spec}</div>
                          <div className="text-[13px] text-[#0a0a0a] leading-relaxed break-words">{row.feature}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <hr />
                  {/* SECTION 8 */}
                  <div className="text-xs bg-[#254f81] text-white px-4 py-2 inline-block uppercase !mt-[70px]">09 · Installation Process</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black leading-normal border-b-2 border-blue-500 pb-2 w-fit">Installation of AMF Control Panel On-Site With Generator</h2>
                  <p className="text-base leading-8 text-gray-700 text-justify">
                    Full on-site deployment and integration of the AMF panel with the{" "}
                    <a href="/products/kirloskar-diesel-generator" className="text-[#254f81] hover:text-[#f00] transition font-bold">
                      diesel generator
                    </a>{" "}
                    unit. The process includes precise control cable routing, secure hardwiring into the generator's control logic, and a complete system test (mains failure simulation) to ensure instant, automated power backup.
                  </p>
                  <div className="font-['Poppins',sans-serif] max-w-4xl mx-auto p-6">
                    <div className="relative border-l border-gray-200 ml-4 pl-8 space-y-8">
                      {/* Step 01 */}
                      <div className="relative">
                        <span className="absolute -left-[50px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#254f81] bg-[#254f81] text-[11px] font-semibold text-white">01</span>
                        <h3 className="text-base font-bold text-gray-900 mb-1">Load and site survey</h3>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">Connected load, generator capacity, and existing wiring are checked before choosing a panel rating.</p>
                      </div>

                      {/* Step 02 */}
                      <div className="relative">
                        <span className="absolute -left-[50px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#254f81] bg-[#254f81] text-[11px] font-semibold text-white">02</span>
                        <h3 className="text-base font-bold text-gray-900 mb-1">Panel selection and sizing</h3>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">Changeover switch, breaker rating, and enclosure type are matched to the generator and the site conditions (indoor, dusty, outdoor).</p>
                      </div>

                      {/* Step 03 */}
                      <div className="relative">
                        <span className="absolute -left-[50px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#254f81] bg-[#254f81] text-[11px] font-semibold text-white">03</span>
                        <h3 className="text-base font-bold text-gray-900 mb-1">Mounting and cabling</h3>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">Panel is mounted, incoming mains, genset, and outgoing load cables are run and terminated with proper earthing.</p>
                      </div>

                      {/* Step 04 */}
                      <div className="relative">
                        <span className="absolute -left-[50px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#254f81] bg-[#254f81] text-[11px] font-semibold text-white">04</span>
                        <h3 className="text-base font-bold text-gray-900 mb-1">Control wiring to genset</h3>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">Start/stop, sensing, and battery leads are connected between the generator's control panel and the AMF panel.</p>
                      </div>

                      {/* Step 05 */}
                      <div className="relative">
                        <span className="absolute -left-[50px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#254f81] bg-[#254f81] text-[11px] font-semibold text-white">05</span>
                        <h3 className="text-base font-bold text-gray-900 mb-1">Dry run testing</h3>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">Mains is simulated as failed with no load connected, to check sensing time, start sequence, and changeover without risking equipment.</p>
                      </div>

                      {/* Step 06 */}
                      <div className="relative">
                        <span className="absolute -left-[50px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#254f81] bg-[#254f81] text-[11px] font-semibold text-white">06</span>
                        <h3 className="text-base font-bold text-gray-900 mb-1">Load testing and commissioning</h3>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">Real load is connected and a full failure-recovery cycle is run and timed before handover.</p>
                      </div>

                      {/* Step 07 */}
                      <div className="relative">
                        <span className="absolute -left-[50px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#254f81] bg-[#254f81] text-[11px] font-semibold text-white">07</span>
                        <h3 className="text-base font-bold text-gray-900 mb-1">Handover and AMC</h3>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">Settings are documented, and a maintenance schedule is set up so sensing delays and connections are checked periodically.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <br />
                  {/* CTA Section in the End */}
                  <div className="bg-[#252525] rounded-2xl p-8 text-white text-center">
                    <h3 className="text-3xl font-bold leading-tight mb-5">Need a Reliable AMF Panel for Your DG Set?</h3>

                    <p className="leading-8 text-white/90 mb-8">Get an AMF control panel professionally matched to your generator capacity and application. Kumar Power supplies industry-grade AMF panels for seamless automatic power transfer, equipment protection, and reliable backup operation.</p>

                    <Link to="/products/panels" className="inline-flex items-center justify-center bg-white text-black px-7 py-4 rounded-xl font-semibold hover:bg-gray-100 transition w-full">
                      Explore Our Range Of Electrical Control Panels →
                    </Link>
                  </div>
                  {/* FAQ Section with Dropdown Loop */}
                  <section className="max-w-4xl mx-auto my-12 px-4 py-8 bg-gray-50 rounded-2xl border border-gray-100">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-left">FAQs</h2>

                    <div className="space-y-4">
                      {faqsList.map((faq, index) => (
                        <details key={index} name="faq-accordion" className="group border border-gray-200 bg-white rounded-sm p-2 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:shadow-sm cursor-pointer">
                          <summary className="flex items-center justify-between text-[#254f81] focus:outline-none select-none">
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

                          <p className="mt-4 leading-relaxed text-gray-700 border-t border-gray-100 p-2 select-text text-md text-justify [&_a]:text-[#254f81] [&_a:hover]:text-[#f00] [&_a]:font-bold" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                        </details>
                      ))}
                    </div>
                  </section>
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

                      <Link to="/blog/kirloskar-silent-generator" className="block text-blue-600 hover:text-blue-800 transition border-b border-gray-200 pb-4">
                        Kirloskar Silent Generator
                      </Link>
                    </div>
                  </div>

                  {/* CTA */}

                  <div className="bg-[#254f81] rounded-3xl p-8 text-white">
                    <h3 className="text-3xl font-bold leading-tight mb-5">Not Sure Which AMF Panel Fits Your Generator?</h3>

                    <p className="leading-8 text-white/90 mb-8">Get expert guidance from Kumar Power, serving industries since 1995 as an Authorized Kirloskar Channel Partner and ISO 9001:2015 Certified provider of complete power backup and electrical solutions in Delhi.</p>

                    <Link to="/contact" className="inline-flex items-center justify-center bg-white text-black px-7 py-4 rounded-xl font-semibold hover:bg-gray-100 transition w-full">
                      Talk to Our Experts
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

export default BlogAMFPanel;
