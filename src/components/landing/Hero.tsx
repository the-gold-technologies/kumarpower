import { useEffect, useState } from "react";
import { useSectionData } from "@/store/useCMSStore";

const Hero = () => {
  const { data: homeData } = useSectionData<any>("home");
  const data = homeData?.hero || {};
  const bgVideo = data.backgroundVideo || "";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
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
      </div>
    </section>
  );
};

export default Hero;
