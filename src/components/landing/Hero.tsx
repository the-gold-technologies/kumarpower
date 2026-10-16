import { useEffect, useState, useRef, useMemo } from "react";
import { useSectionData } from "@/store/useCMSStore";

const optimizeVideoUrl = (url?: string, width: number = 1280): string => {
  if (!url) return "";
  if (!url.includes("res.cloudinary.com")) return url;
  if (url.includes("/video/upload/ac_none")) return url;
  return url.replace(
    "/video/upload/",
    `/video/upload/ac_none,c_limit,q_auto,vc_h264,w_${width}/`
  );
};

const getPosterUrl = (url?: string, width: number = 1280): string | undefined => {
  if (!url || !url.includes("res.cloudinary.com")) return undefined;
  return url
    .replace("/video/upload/", `/video/upload/c_limit,f_auto,q_auto,w_${width}/`)
    .replace(/\.[^/.]+$/, ".jpg");
};

const Hero = () => {
  const { data: homeData } = useSectionData<any>("home");
  const data = homeData?.hero || {};

  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(min-width: 768px)");
      setIsDesktop(mediaQuery.matches);

      const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, []);

  const activeVideoSrc = useMemo(() => {
    const rawUrl = isDesktop
      ? data.backgroundVideo || data.mobileBackgroundVideo
      : data.mobileBackgroundVideo || data.backgroundVideo;
    return optimizeVideoUrl(rawUrl, isDesktop ? 1280 : 720);
  }, [isDesktop, data.backgroundVideo, data.mobileBackgroundVideo]);

  const posterSrc = useMemo(() => {
    const rawUrl = isDesktop
      ? data.backgroundVideo || data.mobileBackgroundVideo
      : data.mobileBackgroundVideo || data.backgroundVideo;
    return getPosterUrl(rawUrl, isDesktop ? 1280 : 720);
  }, [isDesktop, data.backgroundVideo, data.mobileBackgroundVideo]);

  useEffect(() => {
    if (mounted && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy handled silently
      });
    }
  }, [mounted, activeVideoSrc]);

  return (
    <section
      id="home"
      className="relative w-full bg-black overflow-hidden flex items-center justify-center aspect-[9/16] max-h-[100dvh] md:aspect-auto md:h-screen md:min-h-[600px]"
    >
      {mounted && activeVideoSrc ? (
        <video
          ref={videoRef}
          key={`hero-video-${isDesktop ? "desktop" : "mobile"}-${activeVideoSrc}`}
          src={activeVideoSrc}
          poster={posterSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={
            isDesktop
              ? "absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
              : "w-full h-full object-cover object-center pointer-events-none"
          }
        />
      ) : (
        <div className="absolute inset-0 bg-black animate-pulse" />
      )}
    </section>
  );
};

export default Hero;
