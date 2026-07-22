import { useSectionData } from "@/store/useCMSStore";

const UseCases = () => {
  const { data: homeData } = useSectionData<any>("home");
  const data = homeData?.useCases || homeData?.["use-cases"] || {};

  const line1 = data.headingLine1 || "";
  const line2 = data.headingLine2 || "";
  const note = data.footerQuote || data.footerNote || "";
  const items =
    Array.isArray(data.cases) && data.cases.length > 0
      ? data.cases
      : Array.isArray(data.items) && data.items.length > 0
        ? data.items
        : [];

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row min-h-[700px]">
        {/* Left: Vertically and horizontally centered heading */}
        <div className="md:w-1/2 flex items-start md:items-center justify-center md:justify-start pt-0 md:pt-0 md:-mt-16  ">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight md:leading-[1.1] text-left md:text-left whitespace-pre-line">
            {line1}
            <br />
            {line2}
          </h2>
        </div>
        {/* Right: Use case cards in a single column */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <div>
            {items.map((it: any) => (
              <article key={it.title} className="mb-8">
                <h3 className="text-lg md:text-xl font-semibold mb-1">
                  {it.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">
                  {it.text}
                </p>
                <button className="text-[#2D6FBA] text-sm hover:text-[#22548e] p-0 m-0 cursor-pointer">
                  LEARN MORE
                </button>
              </article>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-gray-400 italic text-xs md:text-sm">{note}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
