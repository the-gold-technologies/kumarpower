import { CheckCircle2, ArrowRight } from "lucide-react";
import teamImg from "@/assets/gallery-networking.jpg";
import { Button } from "@/components/ui/button";
import three from "@/assets/Gallery/Threee.png";
import { useSectionData } from "@/store/useCMSStore";

const About = () => {
  const { data } = useSectionData<any>("home", "about");

  const heading1 = data.bannerTitle || "ABOUT KUMAR POWER";
  const heading2 = data.bannerSubtitle || "Powering Progress.";
  const titleLine1 = data.mainHeadingLine1 || "Engineering India's";
  const titleLine2 = data.mainHeadingLine2 || "Energy Backbone.";
  const description =
    data.description ||
    "For over 30+ years, Kumar Power has engineered uninterrupted power across India's industries, infrastructure, and institutions. With Kirloskar certification and ISO 9001:2015 accreditation, we serve 500+ enterprise clients with unmatched reliability and scale.";
  const feature1 = data.feature1 || "Kirloskar Authorized Distributor";
  const feature2 = data.feature2 || "24/7 Service Infrastructure";
  const feature3 = data.feature3 || "500+ Enterprise Clients";
  const feature4 = data.feature4 || "ISO 9001:2015 Accredited";
  const image = data.teamImage || three;
  const btnText = data.ctaLabel || "Explore Our Legacy";
  const btnUrl = data.ctaUrl || "/about/OurProfile";

  const features = [
    { label: feature1 },
    { label: feature2 },
    { label: feature3 },
    { label: feature4 },
  ];

  return (
    <>
      {/* Hero Section as per provided image */}
      <div className="bg-black py-6 md:py-10">
        <div className="container mx-auto text-center px-4">
          <div className="flex items-center justify-center mb-1">
            <span className="block h-px w-8 md:w-16 bg-white mr-2 md:mr-4" />
            <span className="text-white text-2xl md:text-4xl font-semibold tracking-wide">
              {heading1}
            </span>
          </div>
          <div className="text-white text-xl md:text-2xl font-normal">
            {heading2}
          </div>
        </div>
      </div>
      {/* End Hero Section */}
      <section id="about" className="py-8  md:py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center px-4 md:px-0">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl tracking-tighter  mb-10 whitespace-pre-line">
              {titleLine1}
              <br />
              {titleLine2}
            </h2>
            <p className="mb-6 text-base md:text-lg">{description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 mb-8">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-12 w-12">
                    <CheckCircle2
                      className="text-white"
                      style={{ background: "#2D6FBA", borderRadius: "9999px" }}
                    />
                  </span>
                  <span className="text-base font-medium">{f.label}</span>
                </div>
              ))}
            </div>
            <Button
              asChild
              size="lg"
              className="mt-2"
              style={{ background: "#2D6FBA" }}
            >
              <a
                onClick={() => {
                  window.location.href = btnUrl;
                }}
                className="flex items-center gap-2 hover:bg-[#22548e] px-6 py-6 rounded-lg cursor-pointer"
                style={{ background: "#2D6FBA" }}
              >
                {btnText} <ArrowRight className="h-5 w-5 ml-1" />
              </a>
            </Button>
          </div>
          {/* Right: Team Image */}
          <div className="flex justify-center">
            <img
              src={image}
              alt="Kumar Power team"
              className="w-full max-w-2xl object-contain"
              loading="lazy"
              style={{ background: "transparent" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
