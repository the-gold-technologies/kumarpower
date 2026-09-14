import { Menu, ChevronDown, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import kumarLogo from "@/assets/kumar_power_logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [scrolledPastHero, setScrolledPastHero] = useState(
    !isHomePage && (typeof window !== "undefined" ? window.scrollY > 100 : true)
  );

  useEffect(() => {
    if (!isHomePage) {
      setScrolledPastHero(true);
      return;
    }

    const checkHeroVisibility = () => {
      // If user is at or near the top of the page, navbar must stay hidden
      if (window.scrollY < 50) {
        setScrolledPastHero(false);
        return;
      }

      const heroEl = document.getElementById("home");
      if (heroEl && heroEl.offsetHeight > 100) {
        const rect = heroEl.getBoundingClientRect();
        // Show navbar only after hero section has completely scrolled above the screen
        setScrolledPastHero(rect.bottom <= 0);
      } else {
        setScrolledPastHero(window.scrollY > 400);
      }
    };

    checkHeroVisibility();
    window.addEventListener("scroll", checkHeroVisibility, { passive: true });
    window.addEventListener("resize", checkHeroVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", checkHeroVisibility);
      window.removeEventListener("resize", checkHeroVisibility);
    };
  }, [isHomePage, location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const headerClasses = isHomePage
    ? `fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm transition-all duration-300 ease-in-out ${
        scrolledPastHero
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`
    : "sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm w-full";

  return (
    <header className={headerClasses}>
      <nav className="max-w-7xl px-6 mx-auto flex items-center justify-between h-16">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={kumarLogo}
            alt="Kumar Power"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 text-base font-medium">
          <li>
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>

          {/* About */}
          <li>
            <Link
              to="/about/OurProfile"
              className="hover:text-primary transition-colors py-4"
            >
              About
            </Link>
          </li>

          {/* Solutions Mega Dropdown */}
          <li className="relative group">
            <Link
              to="/products"
              className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer py-4"
            >
              Solutions <ChevronDown className="w-4 h-4" />
            </Link>
            <div className="absolute left-0 top-[90%] pt-3 hidden group-hover:block hover:block">
              <div className="bg-white shadow-lg rounded-md min-w-[260px] z-10 overflow-hidden py-1 border border-slate-100">
                <Link
                  to="/products/kirloskar-diesel-generator"
                  className="block px-4 py-2.5 text-sm hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer"
                >
                  Power Generation
                </Link>
                <Link
                  to="/products/kirloskar-portable-generator"
                  className="block px-4 py-2.5 text-sm hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer"
                >
                  Portable Generators
                </Link>
                <Link
                  to="/products/transformers"
                  className="block px-4 py-2.5 text-sm hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer"
                >
                  Transformers/Substation
                </Link>
                <Link
                  to="/products/panels"
                  className="block px-4 py-2.5 text-sm hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer"
                >
                  Electrical Panels
                </Link>
                <Link
                  to="/products/optiprime"
                  className="block px-4 py-2.5 text-sm hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer"
                >
                  Battery Energy Storage System
                </Link>
                <Link
                  to="/products"
                  className="block px-4 py-2.5 text-sm hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer"
                >
                  Solar and Renewable Energy
                </Link>
                <Link
                  to="/products/servo-stabilizer"
                  className="block px-4 py-2.5 text-sm hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer"
                >
                  Servo Stabiliser Pannel
                </Link>
              </div>
            </div>
          </li>

          {/* Our Clients */}
          <li>
            <Link
              to="/about/OurClients"
              className="hover:text-primary transition-colors py-4"
            >
              Our Clients
            </Link>
          </li>

          {/* Insights */}
          <li>
            <Link
              to="/blogs"
              className="hover:text-primary transition-colors py-4"
            >
              Insights
            </Link>
          </li>


          {/* Contact */}
          <li>
            <Link
              to="/contact"
              className="hover:text-primary transition-colors py-4"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Profile Logo CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#consultation-form" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014410/Screenshot_2025-06-02_at_12.44.43_PM_lxdedo.png"
              alt="Kumar Power Profile Logo"
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t shadow-lg ${isMobileMenuOpen ? "block" : "hidden"}`}
      >
        <div className="px-4 py-2">
          <Link
            to="/"
            className="block py-3 border-b"
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          {/* About */}
          <Link
            to="/about/OurProfile"
            className="block py-3 border-b"
            onClick={closeMobileMenu}
          >
            About
          </Link>

          {/* Solutions Dropdown Mobile */}
          <div className="py-3 border-b">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-2 ml-4 space-y-2">
                <Link
                  to="/products/kirloskar-diesel-generator"
                  className="block py-1.5 text-sm"
                  onClick={closeMobileMenu}
                >
                  Power Generation
                </Link>
                <Link
                  to="/products/kirloskar-portable-generator"
                  className="block py-1.5 text-sm"
                  onClick={closeMobileMenu}
                >
                  Portable Generators
                </Link>
                <Link
                  to="/products/transformers"
                  className="block py-1.5 text-sm"
                  onClick={closeMobileMenu}
                >
                  Transformers/Substation
                </Link>
                <Link
                  to="/products/panels"
                  className="block py-1.5 text-sm"
                  onClick={closeMobileMenu}
                >
                  Electrical Panels
                </Link>
                <Link
                  to="/products/optiprime"
                  className="block py-1.5 text-sm"
                  onClick={closeMobileMenu}
                >
                  Battery Energy Storage System
                </Link>
                <Link
                  to="/products"
                  className="block py-1.5 text-sm"
                  onClick={closeMobileMenu}
                >
                  Solar and Renewable Energy
                </Link>
                <Link
                  to="/products/servo-stabilizer"
                  className="block py-1.5 text-sm"
                  onClick={closeMobileMenu}
                >
                  Servo Stabiliser Pannel
                </Link>
              </div>
            </details>
          </div>

          <Link
            to="/about/OurClients"
            className="block py-3 border-b"
            onClick={closeMobileMenu}
          >
            Our Clients
          </Link>

          <Link
            to="/blogs"
            className="block py-3 border-b"
            onClick={closeMobileMenu}
          >
            Insights
          </Link>


          <Link to="/contact" className="block py-3" onClick={closeMobileMenu}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
