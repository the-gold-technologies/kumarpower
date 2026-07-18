import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import OurProfile from "@/assets/ourprofile1.png"
import Welding from "@/assets/welding.png";
import Contract from "@/assets/contract.png";
import iso from "@/assets/Contact/iso.jpeg";
import Nation from "@/assets/Nation.png";
import rajvinder from "@/assets/rajvinder.png";
import manjot from "@/assets/manjot.png";
import jagjit from "@/assets/jagjit.png";
import isoprof from "@/assets/iso profile.png";
import kirlo from "@/assets/kirlosksar profile.png"
import gen from "@/assets/Range5.png"
import earth from "@/assets/earth.png"
import certificate from "@/assets/Certificate 1.png"
import certi from "@/assets/certi1.png"
import isocerti from "@/assets/Testimonial/iso certificate.jpeg"
import SEO from "@/components/SEO";

const About = () => {
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
              src={OurProfile}
              alt="Kumar Power Facility" 
              className="rounded-xl w-[450px] h-[400px] object-cover"
            />
          </div>
          {/* Text on the right */}
          <div className="flex-1 md:w-2/3 md:pl-12 mt-8 md:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-black">Know About Kumar Power</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">–Trusted Name in Power Solutions Industry</h2>
            <p className="text-base text-black mb-4">
             Kumar Power is a premier Kirloskar-certified power partner with over 30+ years of excellence in providing comprehensive power solutions across India. Established in 1995, we have grown to become one of the most trusted names in power generation equipment and services.
            </p>
            <p className="text-base text-black mb-4">
              Our expertise spans across sales, installation, commissioning, and maintenance of diesel generators, ensuring uninterrupted power supply for critical operations, our expertise spans across SITC (Supply, Installation, Testing & Commissioning) and end-to-end power solutions..
            </p>
            <p className="text-base text-black mb-4">
              As an authorized dealer and service provider for Kirloskar Green generators, we bring the reliability and efficiency of world-class power solutions to our clients. Our team of certified engineers and technicians ensures that every installation meets the highest standards of performance and safety.
            </p>
            <p className="text-base text-black">
              With a customer-first approach and commitment to excellence, Kumar Power has successfully delivered over 10000+ power solutions across the country, building lasting relationships with our clients through exceptional service and support.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-6">Our Story</h2>
          <p className="text-center max-w-3xl mx-auto mb-16">
            From humble beginnings to becoming India's premier power solutions provider,
            our journey has been defined by innovation, quality, and unwavering
            commitment to excellence.
          </p>

          {/* Timeline Container with gradient background */}
          <div className="max-w-6xl mx-auto bg-gradient-to-b from-white/95 to-transparent p-8">
            {/* 1975 - Foundation */}
            <div className="relative grid md:grid-cols-2 gap-6 items-center mb-16">
              <div className="text-white p-6 rounded-lg flex flex-col items-start md:items-start">
                <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-md mb-4">1995</span>
                <h3 className="text-xl font-bold mb-3">Foundation</h3>
                <p>Kumar Power was established with a vision to provide reliable power solutions to businesses across India.</p>
                <div className="w-16 h-1 bg-zinc-600 mt-4 self-start"></div>
              </div>
              <div>
                <img 
                  src={gen}
                  alt="Welding work" 
                  className="w-full  object-cover rounded-lg"
                />
              </div>
            </div>
            {/* 2005 - Kirloskar Partnership */}
            <div className="relative grid md:grid-cols-2 gap-6 items-center mb-16">
              <div className="text-white p-6 rounded-lg md:order-2 flex flex-col items-start md:items-start">
                <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-md mb-4">2001</span>
                <h3 className="text-xl font-bold mb-3">Kirloskar Partnership</h3>
                <p>Became an authorized partner of Kirloskar, expanding our product range and technical capabilities.</p>
                <div className="w-16 h-1 bg-zinc-600 mt-4 self-start"></div>
              </div>
              <div className="md:order-1">
                <img 
                  src={certificate} 
                  alt="Contract signing" 
                  className="w-full  object-cover rounded-lg"
                />
              </div>
            </div>
            {/* 2012 - ISO Certification */}
            <div className="relative grid md:grid-cols-2 gap-6 items-center mb-16">
              <div className="text-white p-6 rounded-lg flex flex-col items-start md:items-start">
                <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-md mb-4">2012</span>
                <h3 className="text-xl font-bold mb-3">ISO Certification</h3>
                <p>Achieved ISO 9001:2015 certification, validating our commitment to quality management systems.</p>
                <div className="w-16 h-1 bg-zinc-600 mt-4 self-start"></div>
              </div>
              <div>
                <img 
                  src={iso}
                  alt="Person working on laptop" 
                  className="w-[70vh] h-[55vh]  object-cover rounded-lg"
                />
              </div>
            </div>
            {/* 2020 - Nationwide Expansion */}
            <div className="relative grid md:grid-cols-2 gap-6 items-center">
              <div className="text-white p-6 rounded-lg md:order-2 flex flex-col items-start md:items-start">
                <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-md mb-4">2020</span>
                <h3 className="text-xl font-bold mb-3">Nationwide Expansion</h3>
                <p>Expanded operations to all major cities in India with service centers and technical support teams.</p>
                <div className="w-16 h-1 bg-white mt-4 self-start"></div>
              </div>
              <div className="md:order-1">
                <img 
                  src={earth}
                  alt="Skyscraper buildings" 
                  className="w-full  object-cover  rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Meet the Team Section */}
      <div className="py-16 bg-[#AAAAAA]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-2">
            Meet the Visionaries Behind the Power
          </h2>
          <div className="mx-auto w-44 h-1 bg-[#2D6FBA] rounded mb-10"></div>
          <div className="flex flex-col md:flex-row gap-8 mt-12 w-full">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-lg flex flex-col items-center px-6 py-8 w-full border border-gray-200">
              <img 
                src={rajvinder}
                alt="Rajvinder Singh Kumar" 
                className="h-[57vh] object-cover mb-4"
              />
              <h3 className="text-xl font-bold uppercase mb-1 text-center">RS KUMAR</h3>
              <p className="font-semibold text-lg mb-3 text-center">(Founder)</p>
              
              <p className="text-base text-justify leading-relaxed">
                RS Kumar is the Founder of Kumar Generator House, a company he established with a vision to provide reliable and sustainable power solutions. With decades of industry experience,he has been the driving force behind the company's growth and success. His leadership is centered on innovation, customer satisfaction, and a commitment to excellence. Under his guidance, Kumar Generator House has become a trusted name in the industry, focused on empowering businesses and communities with top-quality solutions.
              </p>
            </div>
            {/* Team Member 2 - MS Kumar (now in center) */}
            <div className="bg-white rounded-xl shadow-lg flex flex-col items-center px-6 py-8 w-full border border-gray-200">
              <img 
                src={manjot}
                alt="Manjot Singh Kumar" 
                className="h-[57vh] object-cover mb-4"
              />
              <h3 className="text-xl font-bold uppercase mb-1 text-center">MS KUMAR</h3>
              <p className="font-semibold text-lg mb-3 text-center">(Director)</p>
              
              <p className="text-base text-justify leading-relaxed">
                MS Kumar is the director of Kumar Generator House, a company with a rich legacy of over 30 years in providing reliable power solutions. With a keen focus on growth, innovation, and sustainability, Manjot leads the company towards achieving excellence in every aspect of its operations. His leadership style emphasizes customer satisfaction, operational efficiency, and long-term business relationships, ensuring that Kumar Generator House remains a trusted name in the industry.
              </p>
            </div>
            {/* Team Member 3 - JS Kumar (now on right) */}
            <div className="bg-white rounded-xl shadow-lg flex flex-col items-center px-6 py-8 w-full border border-gray-200">
              <img 
                src={jagjit}
                alt="Jagjit Singh Kumar" 
                className="h-[57vh] object-cover mb-4"
              />
              <h3 className="text-xl font-bold uppercase mb-1 text-center">JS KUMAR</h3>
              <p className="font-semibold text-lg mb-3 text-center">(Director)</p>
              
              <p className="text-base text-justify leading-relaxed">
                JS Kumar is a director at Kumar Generator House, where he plays a pivotal role in overseeing business strategy, operations, and growth initiatives. With a focus on enhancing internal processes and fostering partnerships, He is committed to driving the company's expansion and ensuring the delivery of efficient, high-quality service to clients. His strategic approach and dedication to innovation continue to shape the company's success in the power solutions sector.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quality Commitment Section */}
      <div className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            Our Commitment to Quality
            <div className="w-32 h-1 bg-red-500 mx-auto mt-2"></div>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {/* Timely Delivery */}
            <div className="bg-white p-6 rounded-lg text-black">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Timely Delivery</h3>
              <p className="text-sm">
                We understand the critical nature of power solutions and ensure on-time delivery and installation.
              </p>
            </div>
            
            {/* Expert Engineering */}
            <div className="bg-white p-6 rounded-lg text-black">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Engineering</h3>
              <p className="text-sm">
                Our team of qualified engineers ensures robust design and flawless implementation of all projects.
              </p>
            </div>
            
            {/* Business Continuity */}
            <div className="bg-white p-6 rounded-lg text-black">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Business Continuity</h3>
              <p className="text-sm">
                Our solutions are designed to provide uninterrupted power supply, ensuring your operations never stop.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg text-black max-w-9xl mx-auto mt-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Left: Statement and List */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Quality Policy Statement</h3>
                <p className="text-base text-gray-800 mb-6">
                  At Kumar Power, we are committed to delivering world-class power products and turnkey solutions that exceed customer expectations. Our robust design, meticulous manufacturing, and comprehensive testing ensure reliability and performance in every installation.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-base">
                    <svg className="w-5 h-5 text-black mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    ISO 9001:2015 certified quality management system
                  </li>
                  <li className="flex items-center text-base">
                    <svg className="w-5 h-5 text-black mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Rigorous testing protocols for all equipment
                  </li>
                  <li className="flex items-center text-base">
                    <svg className="w-5 h-5 text-black mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Continuous improvement through customer feedback
                  </li>
                  <li className="flex items-center text-base">
                    <svg className="w-5 h-5 text-black mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Regular training and skill enhancement for our team
                  </li>
                </ul>
              </div>
              {/* Right: Certificates */}
              <div className="flex flex-row gap-6 min-w-[220px]">
                <div className="border border-black rounded-lg flex flex-col items-center justify-center w-[160px] h-[200px] bg-white">
                  <img 
                    src={iso}
                    alt="ISO 9001:2015" 
                    className="h-24 w-24 object-contain mt-6 mb-2  rounded"
                  />
                  <div className="text-sm font-medium text-gray-800 mt-2 mb-2">ISO 9001:2015</div>
                </div>
                <div className="border border-black p-2 rounded-lg flex flex-col items-center justify-center w-[160px] h-[200px] bg-white">
                  <img 
                    src="https://res.cloudinary.com/dmhabztbf/image/upload/v1757064221/Screenshot_2025-06-02_at_12.44.43_PM_lxdedo_tuh3qm.png"
                    alt="Kirloskar Authorized" 
                    className="h-24 w-24 object-contain mt-6 mb-2"
                  />
                  <div className="text-sm font-medium text-gray-800 mt-2 mb-2">Kirloskar Authorized</div>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Power Your Business?</h2>
            <p className="text-base md:text-lg text-gray-700">
              Contact us today for a consultation and discover how Kumar Generator House can provide reliable power solutions tailored to your needs.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="/contact" className="inline-block bg-black hover:bg-black/90 text-white px-8 py-3 rounded-md font-medium transition-colors">
              Get in Touch →
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
