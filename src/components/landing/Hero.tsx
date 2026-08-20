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
    <section id="home" className="relative w-full bg-black overflow-hidden">
      {mounted && bgVideo && (
        <video
          src={bgVideo}
          autoPlay
          loop
          playsInline
          className="w-full h-auto block object-cover"
        />
      )}
    </section>
  );
};

export default Hero;
