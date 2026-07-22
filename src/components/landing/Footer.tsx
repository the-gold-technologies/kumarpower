import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import { useSectionData } from "@/store/useCMSStore";

const Footer = () => {
  const { data: homeData } = useSectionData<any>("home");
  const data = homeData?.footer || {};
  const [showGeneratorDropdown, setShowGeneratorDropdown] = useState(false);

  useSmoothScroll();

  const aboutBio =
    data.aboutBio ||
    "Kumar Power is certified ISO 9001:2015 Company & have emerged as the leading Power Solution Providers. Being an authorized Channel Partner of Kirloskar Oil Engines Limited, Kumar Power is committed to provide quality power solutions.";
  const address =
    data.address || "904, Westend Mall, Janakpuri, New Delhi 110058";
  const mainPhone = data.mainPhone || "+91 97738 51767";
  const supportPhone = data.supportPhone || "+91 97738 77796";
  const landline = data.landline || "011-46701273";
  const salesEmail = data.salesEmail || "sales@kumarpower.com";
  const supportEmail = data.supportEmail || "support@kumarpower.com";
  const accountsEmail = data.accountsEmail || "accounts@kumarpower.com";
  const facebookUrl =
    data.facebookUrl || "https://www.facebook.com/kumargenerator/";
  const instagramUrl =
    data.instagramUrl || "https://www.instagram.com/Kumarpowerlimitless";
  const linkedinUrl =
    data.linkedinUrl ||
    "https://www.linkedin.com/company/kumar-generator-house---india/";
  const copyrightText =
    data.copyrightText || "© 2026 Kumar Power. All rights reserved.";

  return (
    <>
      {/* Main Footer */}
      <footer id="contact" className="bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8 sm:py-12">
            {/* About */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-lg">Kumar Power</h4>
              <p className="text-sm text-white/80">{aboutBio}</p>
            </div>

            {/* Our Products */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-lg">Our Products</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li>
                  <button
                    onClick={() =>
                      setShowGeneratorDropdown(!showGeneratorDropdown)
                    }
                    className="flex items-center w-full hover:text-blue-300 transition-colors"
                  >
                    <span>Kirloskar Generators</span>
                    {showGeneratorDropdown ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </button>

                  {showGeneratorDropdown && (
                    <ul className="ml-4 mt-2 space-y-2 border-l border-white/20 pl-3 ">
                      <li>
                        <button
                          onClick={() =>
                            (window.location.href =
                              "/products/kirloskar-gas-generator")
                          }
                          className="text-white/80 hover:text-blue-300 transition-colors"
                        >
                          Gas Generators
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() =>
                            (window.location.href =
                              "/products/kirloskar-portable-generator")
                          }
                          className="text-white/80 hover:text-blue-300 transition-colors"
                        >
                          Portable Generators
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() =>
                            (window.location.href =
                              "/products/kirloskar-diesel-generator")
                          }
                          className="text-white/80 hover:text-blue-300 transition-colors"
                        >
                          Diesel Generators
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <a
                    href="/products/panels"
                    className="hover:text-blue-300 transition-colors"
                  >
                    Electrical Panels
                  </a>
                </li>
                <li>
                  <a
                    href="/products/servo-stabilizer"
                    className="hover:text-blue-300 transition-colors"
                  >
                    Servo Stabilizers
                  </a>
                </li>
                <li>
                  <a
                    href="/products/transformers"
                    className="hover:text-blue-300 transition-colors"
                  >
                    Transformers
                  </a>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-lg">Useful Links</h4>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-sm text-white/90">
                <li>
                  <a
                    href="https://www.kumarpower.com"
                    className="hover:text-blue-300 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about/OurProfile"
                    className="hover:text-blue-300 transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="/about/OurClients"
                    className="hover:text-blue-300 transition-colors"
                  >
                    Our Clients
                  </a>
                </li>
                <li>
                  <a
                    href="/installation"
                    className="hover:text-blue-300 transition-colors"
                  >
                    Installation
                  </a>
                </li>
                <li>
                  <a
                    href="/about/Testimonials"
                    className="hover:text-blue-300 transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="/about/Certifications"
                    className="hover:text-blue-300 transition-colors"
                  >
                    Certifications
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-blue-300 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/blogs"
                    className="hover:text-blue-300 transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-lg">Contact Us</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="leading-relaxed whitespace-pre-line">
                  {address}
                </li>
                <li className="space-y-1">
                  <div>
                    Main :{" "}
                    <a
                      href={`tel:${mainPhone}`}
                      className="hover:text-blue-300 transition-colors"
                    >
                      {mainPhone}
                    </a>
                  </div>
                  <div>
                    Support :{" "}
                    <a
                      href={`tel:${supportPhone}`}
                      className="hover:text-blue-300 transition-colors"
                    >
                      {supportPhone}
                    </a>
                  </div>
                  <div>
                    Landline :{" "}
                    <a
                      href={`tel:${landline}`}
                      className="hover:text-blue-300 transition-colors"
                    >
                      {landline}
                    </a>
                  </div>
                </li>
                <li className="space-y-1.5 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-white/60 w-16">Sales</span>
                    <a
                      href={`mailto:${salesEmail}`}
                      className="hover:text-blue-300 transition-colors"
                    >
                      {salesEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/60 w-16">Support</span>
                    <a
                      href={`mailto:${supportEmail}`}
                      className="hover:text-blue-300 transition-colors"
                    >
                      {supportEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/60 w-16">Accounts</span>
                    <a
                      href={`mailto:${accountsEmail}`}
                      className="hover:text-blue-300 transition-colors"
                    >
                      {accountsEmail}
                    </a>
                  </div>
                </li>
                <li className="flex gap-6 pt-2">
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover:text-blue-500 transition-colors"
                  >
                    <Facebook size={20} strokeWidth={1.5} />
                  </a>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-pink-500 transition-colors"
                  >
                    <Instagram size={20} strokeWidth={1.5} />
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-blue-400 transition-colors"
                  >
                    <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 py-4 sm:py-6 text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>{copyrightText}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
