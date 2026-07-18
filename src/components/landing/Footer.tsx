import { useState } from "react";
import { ChevronDown, ChevronUp, Facebook, Instagram, Linkedin } from "lucide-react";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";

const Footer = () => {
  const [showGeneratorDropdown, setShowGeneratorDropdown] = useState(false);
  
  useSmoothScroll();

  return (
    <>
      {/* Call To Action Section */}
      {/* <section className="bg-white border-t border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 py-8 sm:py-12">
          <div className="flex-1 max-w-full lg:max-w-2xl">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-black mb-3">Call To Action</h2>
            <p className="text-sm sm:text-base lg:text-lg text-black/80">
              Have questions or need more information? We're here to help! Click the "Enquire Now" button to get in touch with our team. Whether you're interested in learning more about our services, products, or pricing, simply send us your inquiry and we'll respond promptly.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full sm:w-auto">
            <a
              href="#contact"
              className="bg-black text-white rounded-lg px-6 py-2.5 font-semibold text-sm sm:text-base text-center shadow hover:bg-gray-900 transition w-full sm:w-auto sm:min-w-[200px]"
            >
              Enquire Now
            </a>
            <a
              href="/downloads/kumar-power-company-profile.pdf"
              download
              className="border border-black text-black rounded-lg px-6 py-2.5 font-semibold text-sm sm:text-base text-center hover:bg-black hover:text-white transition w-full sm:w-auto sm:min-w-[200px]"
            >
              Download Company Profile
            </a>
          </div>
        </div>
      </section> */}

      {/* Main Footer */}
      <footer id="contact" className="bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8 sm:py-12">
            {/* About */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-lg">Kumar Power</h4>
              <p className="text-sm text-white/80">
                Kumar Power is certified ISO 9001:2015 Company &amp; have emerged as the leading Power Solution Providers. Being an authorized Channel Partner of Kirloskar Oil Engines Limited, Kumar Power is committed to provide quality power solutions.
              </p>
            </div>

            {/* Our Products */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-lg">Our Products</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li>
                  <button 
                    onClick={() => setShowGeneratorDropdown(!showGeneratorDropdown)}
                    className="flex items-center w-full hover:text-blue-300 transition-colors"
                  >
                    <span>Kirloskar Generators</span>
                    {showGeneratorDropdown ? 
                      <ChevronUp className="ml-1 h-4 w-4" /> : 
                      <ChevronDown className="ml-1 h-4 w-4" />
                    }
                  </button>
                  
                  {showGeneratorDropdown && (
                    <ul className="ml-4 mt-2 space-y-2 border-l border-white/20 pl-3 ">
                      <li><button onClick={() => window.location.href="/products/kirloskar-gas-generator"} className="text-white/80 hover:text-blue-300 transition-colors">Gas Generators</button></li>
                      <li><button onClick={() => window.location.href="/products/kirloskar-portable-generator"} className="text-white/80 hover:text-blue-300 transition-colors">Portable Generators</button></li>
                      <li><button onClick={() => window.location.href="/products/kirloskar-diesel-generator"} className="text-white/80 hover:text-blue-300 transition-colors">Diesel Generators</button></li>
                    </ul>
                  )}
                </li>
                <li><a href="/products/panels" className="hover:text-blue-300 transition-colors">Electrical Panels</a></li>
                <li><a href="/products/servo-stabilizer" className="hover:text-blue-300 transition-colors">Servo Stabilizers</a></li>
                <li><a href="/products/transformers" className="hover:text-blue-300 transition-colors">Transformers</a></li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-lg">Useful Links</h4>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-sm text-white/90">
                <li><a href="https://www.kumarpower.com" className="hover:text-blue-300 transition-colors">Home</a></li>
                <li><a href="/about/OurProfile" className="hover:text-blue-300 transition-colors">About us</a></li>
                <li><a href="/about/OurClients" className="hover:text-blue-300 transition-colors">Our Clients</a></li>
                <li><a href="/installation" className="hover:text-blue-300 transition-colors">Installation</a></li>
                <li><a href="/about/Testimonials" className="hover:text-blue-300 transition-colors">Testimonials</a></li>
                <li><a href="/about/Certifications" className="hover:text-blue-300 transition-colors">Certifications</a></li>
                <li><a href="/contact" className="hover:text-blue-300 transition-colors">Contact Us</a></li>
                <li><a href="/blogs" className="hover:text-blue-300 transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-lg">Contact Us</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="leading-relaxed">
                  904, Westend Mall, Janakpuri,<br />New Delhi 110058
                </li>
                <li className="space-y-1">
                  <div>Main : <a href="tel:+919773851767" className="hover:text-blue-300 transition-colors">+91 97738 51767</a></div>
                  <div>Support : <a href="tel:+919773877796" className="hover:text-blue-300 transition-colors">+91 97738 77796</a></div>
                  <div>Landline : <a href="tel:01146701273" className="hover:text-blue-300 transition-colors">011-46701273</a></div>
                </li>
                <li className="space-y-1.5 pt-1">
                  {/* <div className="text-white/70 text-xs font-medium uppercase tracking-wide">Email</div> */}
                  <div className="flex items-center gap-2">
                    <span className="text-white/60 w-16">Sales</span>
                    <a href="mailto:sales@kumarpower.com" className="hover:text-blue-300 transition-colors">sales@kumarpower.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/60 w-16">Support</span>
                    <a href="mailto:support@kumarpower.com" className="hover:text-blue-300 transition-colors">support@kumarpower.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/60 w-16">Accounts</span>
                    <a href="mailto:accounts@kumarpower.com" className="hover:text-blue-300 transition-colors">accounts@kumarpower.com</a>
                  </div>
                </li>
                <li className="flex gap-6 pt-2">
                  <a href="https://www.facebook.com/kumargenerator/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" 
                     className="hover:text-blue-500 transition-colors">
                    <Facebook size={20} strokeWidth={1.5} />
                  </a>
                  <a href="https://www.instagram.com/Kumarpowerlimitless" target="_blank" rel="noopener noreferrer" aria-label="Instagram" 
                     className="hover:text-pink-500 transition-colors">
                    <Instagram size={20} strokeWidth={1.5} />
                  </a>
                  <a href="https://www.linkedin.com/company/kumar-generator-house---india/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" 
                     className="hover:text-blue-400 transition-colors">
                    <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 py-4 sm:py-6 text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} Kumar Power. All rights reserved.</p>
            <p>Crafted with ❤️ by <a href="https://thegoldtechnologies.com/" target="_blank" rel="noopener noreferrer" className="text-[#2D6FBA] hover:text-white transition-colors font-medium">The Gold Technologies</a></p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;