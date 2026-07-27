import { LinkText } from "@/components/ui/LinkText";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import SEO from "@/components/SEO";
import { useSectionData, usePageHeadingTag } from "@/store/useCMSStore";

const About = () => {
  const HeadingTag = usePageHeadingTag("our-profile");
  const { data: pageData } = useSectionData<any>("our-profile");

  const hero = pageData.hero || {};
  const story = pageData.story || {};
  const leadership = pageData.leadership || {};
  const quality = pageData.quality || {};
  const cta = pageData.cta || {};

  // Hero Section fields
  const heroTitle = hero.title || "";
  const heroSubtitle = hero.subtitle || "";
  const heroImage = hero.image || "";
  const paragraph1 = hero.paragraph1 || "";
  const paragraph2 = hero.paragraph2 || "";
  const paragraph3 = hero.paragraph3 || "";
  const paragraph4 = hero.paragraph4 || "";

  // Story Section fields
  const storyTitle = story.storyTitle || "";
  const storySub = story.storySub || "";

  const timeline =
    Array.isArray(story.timeline) && story.timeline.length > 0
      ? story.timeline
      : [];

  // Leadership Section fields
  const teamTitle = leadership.teamTitle || "";

  const team =
    Array.isArray(leadership.team) && leadership.team.length > 0
      ? leadership.team
      : [];

  // Quality Section fields
  const qualityTitle = quality.qualityTitle || "";

  const qualityCards =
    Array.isArray(quality.cards) && quality.cards.length > 0
      ? quality.cards
      : Array.isArray(quality.pillars) && quality.pillars.length > 0
        ? quality.pillars
        : [];
  const policyTitle = quality.policyTitle || "";
  const policyStatement = quality.policyStatement || "";
  const bullet1 = quality.bullet1 || "";
  const bullet2 = quality.bullet2 || "";
  const bullet3 = quality.bullet3 || "";
  const bullet4 = quality.bullet4 || "";
  const isoCertImg = quality.isoCertImg || "";
  const kirloskarCertImg = quality.kirloskarCertImg || "";
  const isoCertTitle = quality.isoCertTitle || "";
  const kirloskarCertTitle = quality.kirloskarCertTitle || "";

  // CTA Section fields
  const ctaTitle = cta.ctaTitle || "";
  const ctaDesc = cta.ctaDesc || "";
  const ctaBtnLabel = cta.ctaBtnLabel || "";
  const ctaBtnUrl = cta.ctaBtnUrl || "";

  return (
    <>
      <SEO
        title="About Us | Kumar Power - Trusted Name in Power Solutions"
        description="Learn about Kumar Power, Delhi’s trusted kirloskar generator and power solutions provider. Know more about our expertise, commitment and service support."
        canonical="https://www.kumarpower.com/about/OurProfile"
      />

      <div className="min-h-screen bg-background">
        <SEOJsonLD />
        <Header />

        {/* Hero Section */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-0">
            {/* Image on the left */}
            <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/3">
              <img
                src={heroImage}
                alt="Kumar Power Facility"
                className="rounded-xl w-[450px] h-[400px] object-cover"
              />
            </div>
            {/* Text on the right */}
            <div className="flex-1 md:w-2/3 md:pl-12 mt-8 md:mt-0">
              <HeadingTag className="text-4xl md:text-5xl font-bold mb-2 text-black">
                {heroTitle}
              </HeadingTag>
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                {heroSubtitle}
              </h2>
              <p className="text-base text-black mb-4"><LinkText text={paragraph1} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              <p className="text-base text-black mb-4"><LinkText text={paragraph2} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              <p className="text-base text-black mb-4"><LinkText text={paragraph3} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
              <p className="text-base text-black"><LinkText text={paragraph4} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="bg-black text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-bold text-center mb-6">
              {storyTitle}
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-16"><LinkText text={storySub} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>

            {/* Timeline Container with gradient background */}
            <div className="max-w-6xl mx-auto bg-gradient-to-b from-white/95 to-transparent p-8">
              {timeline.map((item: any, idx: number) => (
                <div
                  key={item.id || idx}
                  className="relative grid md:grid-cols-2 gap-6 items-center mb-16"
                >
                  <div
                    className={`text-white p-6 rounded-lg flex flex-col items-start ${idx % 2 === 1 ? "md:order-2" : ""}`}
                  >
                    <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-md mb-4">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p><LinkText text={item.description} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                    <div className="w-16 h-1 bg-zinc-600 mt-4 self-start"></div>
                  </div>
                  <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                    <img
                      src={item.image || ""}
                      alt={item.title || ""}
                      className="w-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="py-16 bg-[#AAAAAA]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-2">{teamTitle}</h2>
            <div className="mx-auto w-44 h-1 bg-[#2D6FBA] rounded mb-10"></div>
            <div className="flex flex-col md:flex-row gap-8 mt-12 w-full">
              {team.map((member: any, idx: number) => (
                <div
                  key={member.id || idx}
                  className="bg-white rounded-xl shadow-lg flex flex-col items-center px-6 py-8 w-full border border-gray-200"
                >
                  <img
                    src={member.image || ""}
                    alt={member.name || ""}
                    className="h-[57vh] object-cover mb-4"
                  />
                  <h3 className="text-xl font-bold uppercase mb-1 text-center">
                    {member.name}
                  </h3>
                  <p className="font-semibold text-lg mb-3 text-center"><LinkText text={member.role} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                  <p className="text-base text-justify leading-relaxed"><LinkText text={member.bio} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Commitment Section */}
        <div className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-10">
              {qualityTitle}
              <div className="w-32 h-1 bg-red-500 mx-auto mt-2"></div>
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {qualityCards.map((card: any, index: number) => {
                const defaultPaths = [
                  "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                  "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
                ];
                const svgPath =
                  card.path ||
                  card.iconPath ||
                  defaultPaths[index % defaultPaths.length];

                return (
                  <div
                    key={card.id || index}
                    className="bg-white p-6 rounded-lg text-black"
                  >
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      {card.iconUrl ? (
                        <img
                          src={card.iconUrl}
                          alt={card.title}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-8 h-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={svgPath}
                          />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm"><LinkText text={card.description || card.desc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                  </div>
                );
              })}
            </div>

            <div className="bg-white p-6 rounded-lg text-black max-w-9xl mx-auto mt-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Left: Statement and List */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{policyTitle}</h3>
                  <p className="text-base text-gray-800 mb-6"><LinkText text={policyStatement} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                  <ul className="space-y-4">
                    {bullet1 && (
                      <li className="flex items-center text-base">
                        <svg
                          className="w-5 h-5 text-black mr-2 shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {bullet1}
                      </li>
                    )}
                    {bullet2 && (
                      <li className="flex items-center text-base">
                        <svg
                          className="w-5 h-5 text-black mr-2 shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {bullet2}
                      </li>
                    )}
                    {bullet3 && (
                      <li className="flex items-center text-base">
                        <svg
                          className="w-5 h-5 text-black mr-2 shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {bullet3}
                      </li>
                    )}
                    {bullet4 && (
                      <li className="flex items-center text-base">
                        <svg
                          className="w-5 h-5 text-black mr-2 shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {bullet4}
                      </li>
                    )}
                  </ul>
                </div>
                {/* Right: Certificates */}
                <div className="flex flex-row gap-6 min-w-[220px]">
                  <div className="border border-black rounded-lg flex flex-col items-center justify-center w-[160px] h-[200px] bg-white">
                    <img
                      src={isoCertImg}
                      alt={isoCertTitle}
                      className="h-24 w-24 object-contain mt-6 mb-2 rounded"
                    />
                    <div className="text-sm font-medium text-gray-800 mt-2 mb-2">
                      {isoCertTitle}
                    </div>
                  </div>
                  <div className="border border-black p-2 rounded-lg flex flex-col items-center justify-center w-[160px] h-[200px] bg-white">
                    <img
                      src={kirloskarCertImg}
                      alt={kirloskarCertTitle}
                      className="h-24 w-24 object-contain mt-6 mb-2"
                    />
                    <div className="text-sm font-medium text-gray-800 mt-2 mb-2">
                      {kirloskarCertTitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 min-w-[280px]">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {ctaTitle}
              </h2>
              <p className="text-base md:text-lg text-gray-700"><LinkText text={ctaDesc} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
            </div>
            <div className="mt-6 md:mt-0">
              <a
                href={ctaBtnUrl}
                className="inline-block bg-black hover:bg-black/90 text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                {ctaBtnLabel}
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;
