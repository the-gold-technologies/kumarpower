import { Menu, ChevronDown, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import kumarLogo from "@/assets/kumar_power_logo.png";
import { useNavLinks, NavLinkItem } from "@/store/useCMSStore";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [scrolledPastHero, setScrolledPastHero] = useState(
    !isHomePage && (typeof window !== "undefined" ? window.scrollY > 100 : true)
  );

  // Dynamic Navigation Links from CMS
  const cmsNavLinks = useNavLinks();
  const rawLinks = Array.isArray(cmsNavLinks) ? cmsNavLinks : [];
  const activeLinks = rawLinks.filter((l) => l.isActive !== false);

  const mainLinks = activeLinks
    .filter((l) => l.parent === "-" || !l.parent)
    .sort((a, b) => a.order - b.order);

  const getSubLinks = (parentId: string) =>
    activeLinks
      .filter((l) => l.parent === parentId)
      .sort((a, b) => a.order - b.order);

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

        {/* Desktop Navigation Links from CMS */}
        <ul className="hidden md:flex items-center gap-6 text-base font-medium">
          {mainLinks.map((item) => {
            if (item.type === "Dropdown") {
              const subLinks = getSubLinks(item.id);
              return (
                <li key={item.id} className="relative group">
                  <Link
                    to={item.url}
                    className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer py-4"
                  >
                    {item.label} <ChevronDown className="w-4 h-4" />
                  </Link>
                  {subLinks.length > 0 && (
                    <div className="absolute left-0 top-[90%] pt-3 hidden group-hover:block hover:block">
                      <div className="bg-white shadow-lg rounded-md min-w-[260px] z-10 overflow-hidden py-1 border border-slate-100">
                        {subLinks.map((sub) => (
                          <Link
                            key={sub.id}
                            to={sub.url}
                            className="block px-4 py-2.5 text-sm hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            }

            return (
              <li key={item.id}>
                <Link
                  to={item.url}
                  className="hover:text-primary transition-colors py-4"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
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

      {/* Mobile Menu from CMS */}
      <div
        className={`md:hidden bg-white border-t shadow-lg ${isMobileMenuOpen ? "block" : "hidden"}`}
      >
        <div className="px-4 py-2">
          {mainLinks.map((item, idx) => {
            const isLast = idx === mainLinks.length - 1;
            if (item.type === "Dropdown") {
              const subLinks = getSubLinks(item.id);
              return (
                <div key={item.id} className="py-3 border-b">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="mt-2 ml-4 space-y-2">
                      {subLinks.map((sub) => (
                        <Link
                          key={sub.id}
                          to={sub.url}
                          className="block py-1.5 text-sm"
                          onClick={closeMobileMenu}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                </div>
              );
            }

            return (
              <Link
                key={item.id}
                to={item.url}
                className={`block py-3 ${isLast ? "" : "border-b"}`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
