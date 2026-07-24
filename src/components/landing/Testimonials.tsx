import { LinkText } from "@/components/ui/LinkText";
import { Quote } from "lucide-react";
import { useSectionData } from "@/store/useCMSStore";

const Testimonials = () => {
  const { data } = useSectionData<any>("home", "testimonials");

  const heading = data.heading || "";
  const subtitle = data.subtitle || "";
  const rawItems = Array.isArray(data.items) ? data.items : [];
  const testimonials = rawItems.map((t: any) => ({
    title: t.headerTitle || t.title || "",
    quote: t.quote || t.content || t.text || "",
    name: t.name || t.authorName || "",
    role: t.role || t.company || "",
    logo: t.logo || t.url || "",
  }));

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        <h3 className="text-2xl md:text-4xl font-bold text-center mb-2">
          {heading}
        </h3>
        <p className="text-center text-gray-700 mb-6 md:mb-10 text-sm md:text-lg"><LinkText text={subtitle} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-xl shadow bg-white border flex flex-col h-full"
            >
              <div className="bg-black text-white rounded-t-xl px-3 md:px-6 py-2 md:py-3 font-semibold text-xs md:text-sm flex items-center gap-2">
                <img
                  src={t.logo}
                  alt={`${t.name} logo`}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain rounded flex-shrink-0 bg-white p-2"
                />
                <span className="truncate">{t.title}</span>
              </div>
              <div className="flex-1 flex flex-col px-4 md:px-6 py-4 md:py-6">
                <Quote className="text-blue-500 w-5 md:w-6 h-5 md:h-6 mb-2" />
                <p className="text-gray-900 text-xs md:text-sm mb-3 md:mb-4 flex-1 leading-relaxed"><LinkText text={t.quote} linkClassName="text-[#2D6FBA] hover:underline font-bold" /></p>
                <div className="mt-auto text-right">
                  <div className="font-bold text-sm md:text-base text-gray-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-600">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
