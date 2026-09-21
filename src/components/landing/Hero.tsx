import { useEffect, useState, useRef } from "react";
import { useSectionData } from "@/store/useCMSStore";

const Hero = () => {
  const { data: homeData } = useSectionData<any>("home");
  const data = homeData?.hero || {};
  const desktopVideo = data.backgroundVideo || "/Kumar%20Power%20FINAL.mp4";
  const mobileVideo =
    data.mobileBackgroundVideo || "/KUMAR%20POWER%20AI%20PORTRAIT.mp4";

  const [mounted, setMounted] = useState(false);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (desktopVideoRef.current) {
        desktopVideoRef.current.play().catch(() => {
          // Autoplay policy handled silently
        });
      }
      if (mobileVideoRef.current) {
        mobileVideoRef.current.play().catch(() => {
          // Autoplay policy handled silently
        });
      }
    }
  }, [mounted, desktopVideo, mobileVideo]);

  return (
    <section
      id="home"
      className="relative w-full bg-black overflow-hidden flex items-center justify-center aspect-[9/16] max-h-[100dvh] md:aspect-auto md:h-screen md:min-h-[600px]"
    >
      {mounted && (
        <>
          {/* Mobile Video: Upright dedicated mobile portrait video from CMS */}
          <video
            ref={mobileVideoRef}
            key={`mobile-${mobileVideo}`}
            src={mobileVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="md:hidden w-full h-full object-cover object-center pointer-events-none"
          />

          {/* Desktop & Tablet Video: Landscape video with object-top to prevent logo cropping */}
          <video
            ref={desktopVideoRef}
            key={`desktop-${desktopVideo}`}
            src={desktopVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="hidden md:block absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
          />
        </>
      )}
    </section>
  );
};

export default Hero;
