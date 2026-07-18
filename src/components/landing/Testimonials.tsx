import { Quote } from "lucide-react";

const testimonials = [
	{
		title: "TESTIMONIAL BY POOJA JAIN - SHIKHERJEE JEWELLERS",
		quote: `At Vilandl, we make bespoke Polki jewellery with the finest syndicate polkis, coloured gemstones and even finer details. We are extremely conscious about quality and create pieces that will be cherished for generations. We manufacture all of our jewellery pieces in-house and cater to both B2B and B2C clients. Recently, I referred Mr. R. S. Kumar from M/S Kumar Generator House to Mr Abhishek Jain of Jainco Sphere, a real estate company developing luxury homes in Delhi NCR. They had a detailed meeting and were really impressed with the knowledge and command he had on his industry. He suggested some important changes in their existing selection of material and design of LT panels and also, some value-added services which would enrich the experience of their customers. He was so convincing and transparent with his pricing and product detailing that Mr Abhishek gave an order for 2 of his under-construction buildings for Distribution panels, LT panels and chemical earthings. Also, the execution of work at the site was carried out with thorough professionalism and in a really time-bound manner. Mr Jain was very happy to work with M/s Kumar Generator House and highly recommends his services for Best quality, Best pricing and Best services.`,
		name: "Pooja Jain",
		role: "Shikherjee Jewellers",
		logo: "https://res.cloudinary.com/dmhabztbf/image/upload/v1761903094/Screenshot_2025-10-31_145916_tf6wvg.png",
	},
	{
		title: "TESTIMONIAL BY AANCHAL SAINI, AARK WORLD PVT. LTD.",
		quote: `RENT IT BAE is a luxury fashion rental service offering Ethnic, Western & Accessories from designer labels at a fraction of MRP. Servicing 15 cities via Website, m-site, Android & iOS apps. First to introduce Monthly Fashion Subscription in the country. The company has it's 2 Flagship Stores in New Delhi (Rajouri Garden and Greater Kailash-1). RENT IT BAE has taken the media limelight for building country's first tech driven store. We highly appreciate the fast and seamless service provided by your company. The installation of inverters for RENT IT BAE's South Delhi Flagship Store at Greater Kailash seemed a fluid task with your service. The requirement for a power back up is a must for all companies now days especially in the retail sector. You understood the requirement and delivered the apt products at a reasonable price. All was done post one phone call. No follow ups were required. The products were delivered and installed within 24 hours. We would be happy to recommend your products and service.`,
		name: "Aanchal Saini",
		role: "AARK World Pvt. Ltd.",
		logo: "https://res.cloudinary.com/dmhabztbf/image/upload/v1761903093/download_v9kdua.png",
	},
	{
		title: "TESTIMONIAL BY BHARAT ANAND - BROWN GOLD",
		quote: `We at BROWNGOLD are a team of young & dynamic interior designers engaged in the business of providing complete design solutions for our clients, be it individuals, architects or corporate for the last 3 decades. We have a passion of interiors which enables us in providing quality & timely delivery of our design services & products for our clients pan India. We would like to place on record our appreciation for Mr. R.S. Kumar of Kumar Generator House. We had taken their services for our 40 kva kirloskar generator & a small generator of 7 kva. We would like to take this opportunity to thank you for providing excellent advice, excellent products & excellent service. We would not hesitate to recommend Kumar Generator House to prospective clients, looking for a high level of professional service, with attention on a long term client focused relationship. We are extremely pleased & look forward to increasing our level of business with yourselves in the coming`,
		name: "Bharat Anand",
		role: "BROWNGOLD",
		logo: "https://res.cloudinary.com/dmhabztbf/image/upload/v1761902474/Gemini_Generated_Image_1je1r11je1r11je1_ksybnh.png",
	},
];

const Testimonials = () => {
	return (
		<section className="py-8 md:py-16 bg-white">
			<div className="container mx-auto px-4 md:px-0">
				<h3 className="text-2xl md:text-4xl font-bold text-center mb-2">
					Real Stories. Real Power.
				</h3>
				<p className="text-center text-gray-700 mb-6 md:mb-10 text-sm md:text-lg">
					Hear how our generators keep India powered — from Fortune 500 factories
					to city hospitals.
				</p>
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
								<p className="text-gray-900 text-xs md:text-sm mb-3 md:mb-4 flex-1 leading-relaxed">
									{t.quote}
								</p>
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