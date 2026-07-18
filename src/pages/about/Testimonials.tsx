import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { useState, useEffect } from "react";
import test1 from "@/assets/test1.png";
import test2 from "@/assets/test2.png";
import test3 from "@/assets/test3.png";
import test4 from "@/assets/test4.png";

import testimonial from "@/assets/Testimonial/testii.jpeg"
import trust from "@/assets/Clients page/GMR Infra.jpg";
import trust1 from "@/assets/SIS (1).png";
import trust2 from "@/assets/Vistara 1 (1).png";
import trust3 from "@/assets/Clients page/GMR Infra.jpg";
import trust4 from "@/assets/Honeywell 1 (1).png";
import trust5 from "@/assets/Kashyapi (2).png";
import trust6 from "@/assets/Caritas (1).png";
import trust7 from "@/assets/CEC (1).png";
import ace from "@/assets/Clients page/AceConstruction.jpg";
import claroin from "@/assets/Clients page/Clarion.png";
import Comed from "@/assets/Clients page/Comed.png";
import Dps from "@/assets/Clients page/DPS.jpg";
import GEPL from "@/assets/Clients page/GEPL.jpg";
import addidas from "@/assets/Clients page/Adidas.jpg";
import Portfolio from "@/assets/Brochure/Portfolio.pdf"
import SEO from "@/components/SEO";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <style >{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        .logos-container {
          overflow: hidden;
          padding: 20px 0;
          white-space: nowrap;
          position: relative;
        }
        
        .logos-slide {
          display: inline-block;
          animation: slide 20s linear infinite;
        }
        
        .logo-item {
          display: inline-flex;
          margin: 0 30px;
        }
      `}</style>
      
      {/* <SEOJsonLD /> */}
      <SEO
      title="Why Kumar Power? | Customer Feedback & Testimonials" 
        description="Discover what customers say about Kumar Power. Real reviews and experience highlighting our service quality, product reliability, and trusted power solutions."
     
        canonical="https://kumarpower.com/about/Testimonials"
      />
      <Header />
      
     {/* Success Stories Section - Banner image background header */}
{/* Success Stories Section - Banner image background header */}
<section 
  className="relative py-16 h-80 bg-cover bg-no-repeat text-white" 
  style={{ 
    backgroundImage: `url(${testimonial})`,
    backgroundPosition: "40% 30%"  // X% Y% → adjust this
    // Example: "50% 0%" (center top), "50% 100%" (center bottom), "0% 50%" (left center)
    // Or use pixels: "0px 100px", "50px 200px", etc.
  }}
>
  {/* Optional overlay for readability */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative max-w-7xl mx-auto px-8">
    <div className="mb-6">
      <div className="border-l-4 border-[#2D6FBA] pl-4">
        <h2 className="text-4xl font-bold leading-tight">
          POWERING INDIA'S<br />SUCCESS STORIES
        </h2>
        <p className="mt-2 text-gray-200">Testimonials from industry leaders</p>
      </div>

      
    </div>
  </div>
</section>


      
      {/* Client Stories Section - White background */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-3xl font-semibold">Client Success Stories</h3>
            <button className="text-sm text-gray-500 flex items-center">
              Filter by industry...
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          {/* Testimonial Grid - Exactly as shown in image */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Testimonial 1 - Khushi Aggarwal, Platter Me Crazy */}
            <div className="border rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://res.cloudinary.com/dmhabztbf/image/upload/v1761902468/Screenshot_2025-10-31_144115_lybhem.png"
                    alt="Platter Me Crazy Logo" 
                    className="w-16 h-16 object-contain mr-3 rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-2xl">Khushi Aggarwal</h4>
                    <p className="text-xs text-gray-600">Founder, Platter Me Crazy</p>
                  </div>
                </div>
                <p className="text-base mb-4">
                  <span className="font-semibold">I, Khushi Aggarwal</span>, Founder of <span className="font-semibold">Platter Me Crazy</span>, a brand synonymous with culinary artistry and luxury dining experiences. We curate exquisite charcuterie boards and handcrafted artisanal foods that elevate every occasion into a memorable indulgence. Our signature creations include gourmet flavoured butters, silky-smooth hummus blends, and wholesome baked crisps, each crafted with uncompromising freshness and zero preservatives. Whether for intimate soirées, premium gifting, or grand corporate gatherings, we bring an unmatched blend of flavor, finesse and sophistication to the table.
                </p>
              </div>
            </div>
            {/* Testimonial 2 - Kaustubh Jain, TEAMCC */}
            
            
            {/* Testimonial 3 - Kaustubh Jain, TEAMCC */}
            <div className="border rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://res.cloudinary.com/dmhabztbf/image/upload/v1761902466/Screenshot_2025-10-31_144303_wgqqaq.png"
                    alt="TEAMCC Logo" 
                    className="w-16 h-16 object-contain mr-3 rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-2xl">Kaustubh Jain</h4>
                    <p className="text-xs text-gray-600">TEAM Construction Chemicals (TEAMCC)</p>
                  </div>
                </div>
                <p className="text-base mb-2">
                  I am Kaustubh Jain representing the category marble adhesives and coatings. At TEAMCC we specialise in high-performance epoxy adhesives, polyester adhesives, tile adhesives and marble coatings.
                </p>
                <p className="text-base mb-2">
                  I have had the pleasure of knowing Mr. Jasjot Singh, and I can confidently say he is a true professional in the generator industry. Representing the trusted Kirloskar brand, Jasjot ensures top-quality products backed by exceptional service. His deep knowledge of power solutions, combined with his commitment to delivering the right generator for every requirement, makes him a go-to expert.
                </p>
                <p className="text-base mb-2">
                  Whether it's for commercial, industrial, or residential needs, Jasjot's guidance is reliable and his follow-up impeccable. If you're looking for a dependable generator partner who values both quality and customer satisfaction, I highly recommend Mr. Jasjot Singh.
                </p>
                <div className="text-xs text-gray-500 mt-2">
                  Kaustubh Jain<br />
                  BNI Lakshay
                </div>
              </div>
            </div>
            
            {/* Testimonial 4 - Atul Jewellers */}
            <div className="border rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://res.cloudinary.com/dmhabztbf/image/upload/v1761902462/Screenshot_2025-10-31_144354_iiu1nu.png"
                    alt="Atul Jewellers Logo" 
                    className="w-16 h-16 object-contain mr-3 rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-2xl">Atul Jewellers</h4>
                    <p className="text-xs text-gray-600">Proprietor, New Delhi</p>
                  </div>
                </div>
                <p className="text-base mb-2">
                  We at <span className="font-semibold">Atul Jewellers</span>, are engaged in retail & wholesale of precious gemstones, diamonds & fine jewellery for almost five decades. We are the only jewellery house in Delhi, with in-house state of art gem testing & diamond grading laboratory, and we also provide this facility to almost 500 retailers across Delhi NCR.
                </p>
                <p className="text-base mb-2">
                  I wish to record our appreciation and acknowledgement, for R.S. Kumar of Kumar Generator House, who has provided gensets, for our new store at Defence Colony.
                </p>
                <p className="text-base mb-2">
                  Mr. Kumar and his team is extremely professional in their approach and suggested valuable tips to plan the load distribution, making optimum utilization of energy generated. The rates charged were reasonable and delivery provided in promised time with excellent back up support.
                </p>
                <p className="text-base mb-2">
                  We recommend Kumar Generator House to all my colleagues for power backup facilitation and wish R.S. Kumar & his team all round success in all its endeavors.
                </p>
                <div className="text-xs text-gray-500 mt-2">
                  Dated: 28<sup>th</sup> Dec. 2018<br />
                  for Atul Jewellers<br />
                  <span style={{ fontFamily: 'cursive' }}>Jain</span>, Proprietor
                </div>
              </div>
            </div>
            {/* Testimonial 5 - Brown Gold */}
            <div className="border rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://res.cloudinary.com/dmhabztbf/image/upload/v1761902474/Gemini_Generated_Image_1je1r11je1r11je1_ksybnh.png"
                    alt="Brown Gold Logo" 
                    className="w-16 h-16 object-contain mr-3 rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-2xl">Brown Gold</h4>
                    <p className="text-xs text-gray-600">Bharat Anand, Director</p>
                  </div>
                </div>
                <p className="text-base mb-2">
                  We at Brown Gold are a team of young and dynamic interior designers engaged in the business of providing complete design solutions for our clients, be it individual, architects or corporate for the last 3 decades. We have a passion of interiors which enables us in providing quality and timely delivery of our design services and products for our clients pan India.
                </p>
                <p className="text-base mb-2">
                  We would like to place on record our appreciation for <span className="font-semibold">Mr. R. S. Kumar of Kumar Generator House</span>.
                </p>
                <p className="text-base mb-2">
                  We had taken their services for our 40 KVA Kirloskar generator & a small genset of 7 KVA. We would like to take this opportunity to thank you for providing excellent advice, excellent products & excellent service. We would not hesitate to recommend <span className="font-semibold">Kumar Generator House</span> to prospective clients, looking for a high level of professional service, with attention on a long term client focused relationship.
                </p>
                <p className="text-base mb-2">
                  We are extremely pleased and look forward to increasing our level of business with yourselves in the coming years.
                </p>
                <p className="text-base mb-2">
                  Thank you <span className="font-semibold">Mr. R. S. Kumar</span> for your positive & professional approach.
                </p>
                <div className="text-xs text-gray-500 mt-2">
                  Bharat Anand<br />
                  Director, Brown Gold
                </div>
              </div>
            </div>
            {/* Testimonial 6 - RENT IT BAE */}
            <div className="border rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://res.cloudinary.com/dmhabztbf/image/upload/v1761902462/Screenshot_2025-10-31_144806_gklejh.png"
                    alt="RENT IT BAE Logo" 
                    className="w-16 h-16 object-contain mr-3 rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-2xl">RENT IT BAE</h4>
                    <p className="text-xs text-gray-600">Luxury Fashion Rental Service</p>
                  </div>
                </div>
                <p className="text-base mb-2">
                  RENT IT BAE is a luxury fashion rental service offering Ethnic, Western & Accessories from designer labels at a fraction of MRP. Servicing 15 cities via Website, m-site, Android & iOS apps. First to introduce Monthly Fashion Subscription in the country. The company has its 2 Flagship Stores in New Delhi (Rajouri Garden and Greater Kailash-1). RENT IT BAE has taken the media limelight for building country's first tech driven store.
                </p>
                <p className="text-base mb-2">
                  We highly appreciate the fast and seamless service provided by your company. The installation of invertors for RENT IT BAE's South Delhi Flagship Store at Greater Kailash seemed a fluid task with your service. The requirement for a power back up is a must for all companies now days especially in the retail sector. You understood the requirement and delivered the apt products at a reasonable price. All was done post one phone call. No follow up were required. The products were delivered and installed within 24 hours. We would be happy to recommend your products and service.
                </p>
                <div className="text-xs text-gray-500 mt-2">
                  Thank you.
                </div>
              </div>
            </div>
            {/* Testimonial 7 - K.K. Setia, Olympus, Intown Realtors Pvt Ltd */}
            <div className="border rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://res.cloudinary.com/dmhabztbf/image/upload/v1761902462/Screenshot_2025-10-31_145022_ffeb43.png"
                    alt="Intown Realtors Logo" 
                    className="w-16 h-16 object-contain mr-3 rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-2xl">K.K. Setia</h4>
                    <p className="text-xs text-gray-600">Olympus, Intown Realtors Pvt Ltd</p>
                    <p className="text-xs text-gray-400">3rd March, 2025</p>
                  </div>
                </div>
                <p className="text-base mb-2">
                  I K.K. Setia, Director of Intown Realtors, have been in commercial Real Estate business for the last 18 years. I have been a member of BNI Olympus Noida since December 2015.
                </p>
                <p className="text-base mb-2">
                  "I recently needed a generator for my Sector 18 office building and reached out to my fellow BNI member, Mr. Manjot Singh Kumar. His team promptly inspected the site, provided a tailored solution, and even assisted with the necessary approvals. The generator was delivered and installed within the promised timeframe, and the team ensured that everything was functioning perfectly before they left. I am thoroughly impressed with the professionalism and efficiency displayed by Kumar Generator House. I highly recommend their services to anyone in need of reliable power solutions."
                </p>
              </div>
            </div>
            {/* Testimonial 8 - Shivani Saini, Anytime Fitness */}
            <div className="border rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762064945/Screenshot_2025-11-02_115831_lgqzrn.png"
                    alt="Anytime Fitness Logo" 
                    className="w-16 h-16 object-contain mr-3 rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-2xl">Shivani Saini</h4>
                    <p className="text-xs text-gray-600">Owner, Anytime Fitness</p>
                    <p className="text-xs text-gray-400">26 Sep 25</p>
                  </div>
                </div>
                <p className="text-base mb-2">
                  As fitness industry in India is rising rapidly, Anytime Fitness has marked its biggest presence in this field and possesses more than 160 clubs pan-India with 80+ within Delhi NCR. The club is open 24/7 which gives its members the flexibility to workout at any hour of the day as per their schedule.
                </p>
                <p className="text-base mb-2">
                  The biggest challenge an Anytime Fitness Club faces is uninterrupted 24/7 power supply for its customers. For the same, the club is reliant on an efficient power back up system. During the setting up of Anytime Fitness Sec 29, Gurugram I, Shivani Saini, owner of the club, got the reference of Mr Jasjot Singh (Mob No. 9773877796) of M/s Kumar Generator House from a trustworthy friend.
                </p>
                <p className="text-base mb-2">
                  I write this testimonial to express my deep gratitude to Mr Jasjot Singh of guiding me towards the trusted Kirloskar Brand and explaining me the complete process of installation in great details. He personally visited the site and I must compliment his eye for details and the experience he carries in this field. As a true professional Mr Jasjot and his team ensured a smooth installation and thereafter a continuous follow up till such time the machine got fully functional. The equipment is top notch and has been performing flawlessly during power outages. The customer support has been outstanding, addressing all our concerns promptly. I am truly indebted to services of Kumar Generator House and I would highly recommend Mr Jasjot Singh for any kind of Generator Services in Delhi NCR.
                </p>
                <div className="text-xs text-gray-500 mt-2">
                  Shivani Saini<br />
                  Owner, Anytime Fitness<br />
                  SCO NO 318, SCO Market,<br />
                  Sec 29, Gurugram
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics and Trusted Organizations Section - Dark blue background at bottom */}
      <section className="bg-[#0f1423] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Stats - Exactly matching image layout */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-1">100+</h2>
              <p className="text-sm">Video Testimonials</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-1">25+</h2>
              <p className="text-sm">Industries Served</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-1">10000+</h2>
              <p className="text-sm">Installations Nationwide</p>
            </div>
          </div>
          
          {/* Trusted By Section */}
          <div className="text-center mb-8">
            <p className="text-2xl mb-6">Trusted by India's Leading Organizations</p>
            <div className="logos-container">
              <div className="logos-slide">
                {/* First set of logos */}
                <div className="logo-item">
                  <img src={trust} alt="Seasons" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust1} alt="SIS" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust2} alt="Vistara" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust3} alt="GMR" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust4} alt="Honeywell" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust5} alt="Kashyapi" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust6} alt="Caritas" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={addidas} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={GEPL} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={Dps} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={Comed} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={ace} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={claroin} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762928655/5d8a7ffc-390a-42d8-bee8-2a5c353e5d05_abj0u1.jpg" alt="Trusted Partner" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762928656/68724243-11f2-42ec-85dc-69c153744f3c_n1154o.jpg" alt="Trusted Client" className="max-h-16 w-auto" />
                </div>
                
                {/* Duplicate logos for continuous loop */}
                <div className="logo-item">
                  <img src={trust} alt="Seasons" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust1} alt="SIS" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust2} alt="Vistara" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust3} alt="GMR" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust4} alt="Honeywell" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust5} alt="Kashyapi" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust6} alt="Caritas" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust7} alt="CEC" className="max-h-16 w-auto" />
                </div>
                 <div className="logo-item">
                  <img src={addidas} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={GEPL} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={Dps} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={Comed} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={ace} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={claroin} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762928655/5d8a7ffc-390a-42d8-bee8-2a5c353e5d05_abj0u1.jpg" alt="Trusted Partner" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762928656/68724243-11f2-42ec-85dc-69c153744f3c_n1154o.jpg" alt="Trusted Client" className="max-h-16 w-auto" />
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-2">Ready to join India's most reliable power network?</h3>
            <p className="text-sm max-w-2xl mx-auto mb-6">
              From hospitals to data centers, from factories to airports — Kumar power delivers
              uninterrupted power solutions tailored to your needs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={
                () => {
                  window.location.href = "/contact";
                }
              } className=" bg-[#2D6FBA]  text-black py-2 px-6 rounded flex items-center">
                Request Consultation
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <a href={Portfolio} download>
  <button className="border border-white text-white py-2 px-6 rounded">
    Download Brochure
  </button>
</a>
            </div>
            
            {/* Contact Info */}
            <div className="flex justify-center gap-6 mt-8">
              <a href="https://wa.me/919773877796" className="flex items-center text-sm">
                <div className="bg-[#00FF00] h-8 w-8 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="white" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </div>
                <span>WhatsApp Support</span>
              </a>
              <a href="tel:01140191273" className="flex items-center text-sm">
                <div className="bg-[#2D6FBA] h-8 w-8 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>Helpline: 01140191273</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Testimonials;

