import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
  Linkedin,
  Facebook,
  Instagram,
  MessageSquare,
} from "lucide-react";
import { useSectionData } from "@/store/useCMSStore";

export const Footer: React.FC = () => {
  const { data: homeData } = useSectionData<any>("home");
  const data = homeData?.footer || {};

  const address =
    data.address || "904, Westend Mall, Janakpuri, New Delhi 110058";
  const mainPhone = data.mainPhone || "9773851767";
  const salesEmail = data.salesEmail || "Sales@kumarpower.com";

  return (
    <footer
      id="footer-section"
      className="bg-slate-950 text-slate-400 text-sm pt-20 pb-12 border-t border-slate-800"
    >
      <div className="container mx-auto px-4 max-w-7xl space-y-16">
        {/* Top Header Row: Brand Identity, Tagline & Major CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-white tracking-tight">
                KUMAR <span className="text-[#1A6AA2]">POWER</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-[#1A6AA2]/10 border border-[#1A6AA2]/30 text-xs font-mono font-bold text-[#1A6AA2] uppercase tracking-wider">
                Authorised Kirloskar Partner
              </span>
            </div>
            <p className="text-base text-slate-300 font-medium">
              Complete Electrical Solution Provider and Authorised Kirloskar
              Channel Partner
            </p>
            <p className="text-xs text-slate-500 font-normal italic">
              "Kumar Power does not merely supply equipment. We design and
              integrate the complete electrical system around your actual
              operational requirement."
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="https://wa.me/919773851767?text=Hello%20Kumar%20Power,%20I%20have%20an%20electrical%20system%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1A6AA2] hover:bg-[#145380] text-white text-xs font-bold px-6 py-3.5 rounded-full transition-all shadow-lg shadow-[#1A6AA2]/20 group"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Quick WhatsApp Enquiry</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Column 1: Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              Solutions
            </h4>
            <ul className="space-y-3 text-xs font-medium">
              <li>
                <Link
                  to="/products/kirloskar-diesel-generator"
                  className="hover:text-white transition-colors"
                >
                  Power Generation
                </Link>
              </li>
              <li>
                <Link
                  to="/products/transformers"
                  className="hover:text-white transition-colors"
                >
                  Transformers
                </Link>
              </li>
              <li>
                <Link
                  to="/products/panels"
                  className="hover:text-white transition-colors"
                >
                  Electrical Panels
                </Link>
              </li>
              <li>
                <Link
                  to="/products/optiprime"
                  className="hover:text-white transition-colors"
                >
                  BESS (Battery Storage)
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-white transition-colors"
                >
                  Solar & Renewable
                </Link>
              </li>
              <li>
                <Link
                  to="/products/servo-stabilizer"
                  className="hover:text-white transition-colors"
                >
                  Power Quality
                </Link>
              </li>
              <li>
                <Link
                  to="/services/installation"
                  className="hover:text-white transition-colors"
                >
                  Turnkey Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              Industries
            </h4>
            <ul className="space-y-3 text-xs font-medium">
              <li>
                <a
                  href="#consultation-form"
                  className="hover:text-white transition-colors"
                >
                  Manufacturing
                </a>
              </li>
              <li>
                <a
                  href="#consultation-form"
                  className="hover:text-white transition-colors"
                >
                  Hospitality
                </a>
              </li>
              <li>
                <a
                  href="#consultation-form"
                  className="hover:text-white transition-colors"
                >
                  Healthcare
                </a>
              </li>
              <li>
                <a
                  href="#consultation-form"
                  className="hover:text-white transition-colors"
                >
                  Commercial Real Estate
                </a>
              </li>
              <li>
                <a
                  href="#consultation-form"
                  className="hover:text-white transition-colors"
                >
                  Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="#consultation-form"
                  className="hover:text-white transition-colors"
                >
                  Data Centres
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-3 text-xs font-medium">
              <li>
                <Link
                  to="/about/OurProfile"
                  className="hover:text-white transition-colors"
                >
                  About Kumar Power
                </Link>
              </li>
              <li>
                <Link
                  to="/about/OurProfile"
                  className="hover:text-white transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  to="/about/OurClients"
                  className="hover:text-white transition-colors"
                >
                  Projects & Clients
                </Link>
              </li>
              <li>
                <Link
                  to="/about/Certifications"
                  className="hover:text-white transition-colors"
                >
                  Partners & Certifications
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              Resources
            </h4>
            <ul className="space-y-3 text-xs font-medium">
              <li>
                <Link
                  to="/blogs"
                  className="hover:text-white transition-colors"
                >
                  Knowledge Centre
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="hover:text-white transition-colors"
                >
                  Downloads & Manuals
                </Link>
              </li>
              <li>
                <a
                  href="#consultation-form"
                  className="hover:text-white transition-colors"
                >
                  FAQs & Support
                </a>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-white transition-colors"
                >
                  Product Catalogues
                </Link>
              </li>
              <li>
                <Link
                  to="/services/emergency-support"
                  className="hover:text-white transition-colors"
                >
                  Technical Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              Contact
            </h4>
            <div className="space-y-3 text-xs font-normal">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1A6AA2] shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1A6AA2] shrink-0" />
                <a
                  href={`tel:+91${mainPhone}`}
                  className="hover:text-white transition-colors font-medium"
                >
                  {mainPhone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#1A6AA2] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:Sales@kumarpower.com"
                    className="hover:text-white transition-colors font-medium"
                  >
                    Sales@kumarpower.com
                  </a>
                  <a
                    href="mailto:Accounts@kumarpower.com"
                    className="hover:text-white transition-colors font-medium"
                  >
                    Accounts@kumarpower.com
                  </a>
                  <a
                    href="mailto:Support@kumarpower.com"
                    className="hover:text-white transition-colors font-medium"
                  >
                    Support@kumarpower.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1 text-slate-500 text-[11px]">
                <ShieldCheck className="w-4 h-4 text-[#1A6AA2] shrink-0" />
                <span>ISO 9001:2015 | GSTIN: 07AAAACK1234F1Z</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Socials & Legal */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Kumar Power (Kumar Generators Pvt.
            Ltd.). All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={data.linkedinUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={data.facebookUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={data.instagramUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              to="/about/OurProfile"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/about/OurProfile"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/about/Certifications"
              className="hover:text-white transition-colors"
            >
              Statutory Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
