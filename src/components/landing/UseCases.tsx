const UseCases = () => {
  const items = [
    {
      title: "Power Outages and Load Shedding",
      text: "Despite robust infrastructure, metro areas still experience power outages caused by high demand, technical issues, maintenance work, grid failures, natural disasters, and peak-demand overload. Generators provide a reliable backup power source to maintain continuity during these interruptions. Kirloskar generators ensure an uninterrupted power supply, enabling homes, offices, and businesses to operate smoothly.",
    },
    {
      title: "High-Demand Areas",
      text: "Metro cities are hubs for businesses, industries, commercial buildings, hospitals, malls, data centers, and IT companies—all of which require continuous power to avoid operational disruptions. Kirloskar generators offer a dependable solution, minimizing downtime and preventing losses by maintaining essential services during power fluctuations.",
    },
    {
      title: "Dependability for Events and Functions",
      text: "Generators are essential for events such as weddings, concerts, public gatherings, construction projects, and outdoor activities where access to the power grid may be limited. In these situations, a stable power supply is crucial for lighting, sound systems, and equipment. Kirloskar generators ensure smooth operations, particularly for outdoor or temporary venues.",
    },
    {
      title: "Backup for Critical Appliances",
      text: "Households often need generators to keep essential appliances running during outages, such as refrigerators, medical equipment, air conditioners, and security systems. This helps maintain safety and convenience during unexpected power cuts.",
    },
    {
      title: "Increased Usage During Monsoon Season",
      text: "Heavy rains and storms frequently disrupt power lines in metro cities, resulting in power outages. Generators help reduce the impact of these disruptions on both businesses and homes, providing a stable power solution during the monsoon months.",
    },
    {
      title: "Urbanization and Infrastructure Stress",
      text: "Rapid urbanization places stress on existing power grids, occasionally leading to shortages or planned outages. Additionally, large-scale construction projects require a stable electricity supply to power tools and machinery, which may not always be accessible on-site. Generators are vital in supporting these urban growth needs, ensuring continuous development.",
    },
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row min-h-[700px]">
        {/* Left: Vertically and horizontally centered heading */}
        <div className="md:w-1/2 flex items-start md:items-center justify-center md:justify-start pt-0 md:pt-0 md:-mt-16  ">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight md:leading-[1.1] text-left md:text-left">
            Power Solutions
            <br />for Metro Cities
          </h2>
        </div>
        {/* Right: Use case cards in a single column */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <div>
            {items.map((it) => (
              <article key={it.title} className="mb-8">
                <h3 className="text-lg md:text-xl font-semibold mb-1">{it.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">{it.text}</p>
                <button className="text-[#2D6FBA] text-sm hover:text-[#22548e] p-0 m-0">
                  LEARN MORE
                </button>
              </article>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-gray-400 italic text-xs md:text-sm">
              Kirloskar generators, with their reliable performance and versatility, are well-suited to meet the unique demands of metro city environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;