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

  const aboutBio = data.aboutBio || "";
  const address = data.address || "";
  const mainPhone = data.mainPhone || "";
  const supportPhone = data.supportPhone || "";
  const landline = data.landline || "";
  const salesEmail = data.salesEmail || "";
  const supportEmail = data.supportEmail || "";
  const accountsEmail = data.accountsEmail || "";
  const facebookUrl = data.facebookUrl || "";
  const instagramUrl = data.instagramUrl || "";
  const linkedinUrl = data.linkedinUrl || "";
  const copyrightText = data.copyrightText || "";

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
