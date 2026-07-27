import { LinkText } from "@/components/ui/LinkText";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { useSectionData, useCMSStore } from "@/store/useCMSStore";
import trust from "@/assets/Seasons (1).png";
import trust1 from "@/assets/SIS (1).png";
import trust2 from "@/assets/Vistara 1 (1).png";
import trust3 from "@/assets/Clients page/GMR Infra.jpg";
import trust4 from "@/assets/Honeywell 1 (1).png";
import trust5 from "@/assets/Kashyapi (2).png";
import trust6 from "@/assets/Caritas (1).png";
import trust7 from "@/assets/CEC (1).png";
import ace from "@/assets/Clients page/AceConstruction.jpg";
import claroin from "@/assets/Clients page/Clarion.png";
import Comed from "@/assets/Clients page/Comed.png";
import Dps from "@/assets/Clients page/DPS.jpg";
import GEPL from "@/assets/Clients page/GEPL.jpg";
import addidas from "@/assets/Clients page/Adidas.jpg";
import companyProfile from "./profile.pdf"; // Import PDF file
import BackgroundVideo from "../BackgroundVideo";
const Hero = () => {
  const { data: homeData } = useSectionData<any>("home");
  const data = homeData?.hero || {};
  const globalSEO = useCMSStore((state) => state.globalSEO);
  const pageState = useCMSStore((state) => state.pages["home"]);
  const HeadingTag = (pageState?.seo?.headingOptions || globalSEO?.headingOptions || "h1") as keyof JSX.IntrinsicElements;

  // Show overlay after scrolling more than 180px and keep it visible
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const heading1 = data.headingLine1 || "";
  const heading2 = data.headingLine2 || "";
  const subtitle = data.descriptionDesktop || "";
  const btn1Text = data.ctaPrimaryLabel || "";
  const btn1Url = data.ctaPrimaryUrl || "";
  const btn2Text = data.ctaSecondaryLabel || "";
  const profilePdf = data.companyProfilePdf || "";
  const trustedByLabel = data.trustedByLabel || "";
  const bgVideo = data.backgroundVideo || "";

  const logoList = Array.isArray(data.logos) ? data.logos : [];

  useEffect(() => {
    // Check if it's a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      // If user has scrolled past threshold, show overlay permanently
      if (window.scrollY > 180) {
        setShowOverlay(true);
        // Once we've shown the overlay, we can remove the scroll listener
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    // Initial checks
    checkMobile();
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section id="home" className="relative bg-black lg:bg-white">
      <div className="relative h-[50vh] md:h-[78vh] lg:h-[95vh] overflow-hidden rounded-xl z-1 border shadow-[var(--shadow-glow)]">
        {/* Background video from CMS */}
        <div
          className="absolute left-0 lg:top-0 -top-5 inset-0 w-full h-full md:w-[110vw] md:h-[150vh] lg:h-[110vh] z-0 md:top-[-45vh] md:translate-x-[-5%] md:translate-y-[-5%]"
          style={{ zIndex: 0 }}
        >
          {mounted && bgVideo && (
            <video
              src={bgVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Reduced overlay opacity for mobile to maintain video visibility - ensure it doesn't block video controls */}
        <div
          className={`absolute inset-0 ${
            isMobile ? "bg-black/40" : "bg-black/10"
          } z-5 pointer-events-none`}
        ></div>

        {/* Semi-transparent base overlay - make sure it doesn't block video controls */}
        {showOverlay && (
          <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-10 pointer-events-none"></div>
        )}

        {/* Main Content Overlay */}
        {showOverlay && (
          <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center z-20 p-4">
            <div className="backdrop-blur-xl border border-white/30 rounded-2xl p-4 md:p-8 lg:p-12 shadow-2xl w-full max-w-[90%] sm:max-w-xs md:max-w-lg lg:max-w-2xl flex flex-col items-center space-y-2 md:space-y-8">
              <HeadingTag className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center leading-tight drop-shadow-lg">
                {heading1}
                <br />
                {heading2}
              </HeadingTag>
              <p className="text-white/90 text-center text-xs sm:text-sm md:text-lg font-medium">
                <LinkText text={subtitle} linkClassName="text-white underline font-bold" />
              </p>
              <div className="flex flex-col sm:flex-row gap-2 w-full justify-center">
                <Button
                  onClick={() => {
                    window.location.href = btn1Url;
                  }}
                  className="bg-[#2D6FBA] hover:bg-[#22548e] text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg w-full sm:w-auto text-sm md:text-base"
                >
                  {btn1Text}&nbsp; <span className="ml-1 md:ml-2">→</span>
                </Button>
                <Button
                  variant="outline"
                  className="border border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg w-full sm:w-auto flex items-center justify-center backdrop-blur text-sm md:text-base"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = profilePdf;
                    link.download = "Kumar Power - Company Profile.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  {btn2Text}&nbsp;
                  <Download size={16} className="ml-1 md:ml-2" />
                </Button>
              </div>

              {/* Trusted By Logos - with sliding animation */}
              <div className="mt-2 md:mt-6 flex flex-col items-center w-full">
                <span className="text-white text-xs md:text-base font-semibold mb-1 tracking-wide">
                  {trustedByLabel}
                </span>
                <div className="w-full overflow-hidden relative">
                  <div className="flex animate-marquee space-x-4 whitespace-nowrap">
                    {logoList.map((logo: any, idx: number) => (
                      <img
                        key={`logo-1-${idx}`}
                        src={logo.url || logo}
                        alt={logo.alt || `Trusted Partner ${idx + 1}`}
                        className="h-8 sm:h-10 md:h-14 w-auto object-contain bg-white rounded shadow px-1"
                      />
                    ))}
                    {/* Duplicate set of logos for continuous animation */}
                    {logoList.map((logo: any, idx: number) => (
                      <img
                        key={`logo-2-${idx}`}
                        src={logo.url || logo}
                        alt={logo.alt || `Trusted Partner ${idx + 1}`}
                        className="h-8 sm:h-10 md:h-14 w-auto object-contain bg-white rounded shadow px-1"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;

//  <div className="absolute left-0 top-0 w-screen h-screen flex items-center justify-center z-20 sm:hidden">
//           <div className="container mx-auto px-4 flex flex-col items-center">
//             <div
//               className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-4 shadow-2xl w-full max-w-4xl flex flex-col items-center space-y-4"
//               style={{
//                 boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
//                 background:
//                   "linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.10) 100%)",
//                 border: "1.5px solid rgba(255,255,255,0.25)",
//               }}
//             >
//               {/* Mobile version - stacked text */}
//               <div className="absolute w-screen h-screen flex flex-col items-center justify-center space-y-0.5 bg-black">
//                 <p className="text-xs text-white/90 font-medium">Kirloskar Certified</p>
//                 <p className="text-xs text-white/90 font-medium">ISO 9001:2015</p>
//                 <p className="text-xs text-white/90 font-medium">500+ Enterprise Clients</p>
//                 <p className="text-xs text-white/90 font-medium">30+ Years of Excellence</p>
//               </div>
//             </div>
//           </div>
//         </div>
