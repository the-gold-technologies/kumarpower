import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// About Us pages
import Certifications from "./pages/about/Certifications";
import OurProfile from "./pages/about/OurProfile";
import PhotoGallery from "./pages/about/PhotoGallery";
import OurClients from "./pages/about/OurClients";
import Testimonials from "./pages/about/Testimonials";
// Main Products page
import Products from "./pages/Products";

import KirloskarDisel from "./pages/products/Kirloskar-diesel-generator";
import KirloskarGas from "./pages/products/kirloskar-gas-generator";
import KirloskarPortable from "./pages/products/kirloskar-portable-generator";
import Panels from "./pages/products/panels";
import Optiprime from "./pages/products/Optiprime";
import Servo from "./pages/products/servo-stabilizer";
import Transformer from "./pages/products/transformers";
// Services pages
import AnnualMaintenance from "./pages/services/AnnualMaintenance";
import Installation from "./pages/services/Installation";
import RepairOverhaul from "./pages/services/RepairOverhaul";
import EmergencySupport from "./pages/services/EmergencySupport";
// Our Clients page (formerly Industries)
import Industries from "./pages/ValueClient";
// Contact page
import Contact from "./pages/contact/Contact";
import Submissions from "./pages/Data";

//Blog Page
import Blogs from "./pages/blogs/Blog";
import BlogPost from "./pages/blogs/BlogPost";
import GlobalScripts from "./components/GlobalScripts";

const queryClient = new QueryClient();

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <GlobalScripts />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* About Us Section Routes */}
          <Route path="/about/OurProfile" element={<OurProfile />} />
          <Route path="/about/Testimonials" element={<Testimonials />} />
          <Route path="/about/OurClients" element={<OurClients />} />
          <Route path="/about/PhotoGallery" element={<PhotoGallery />} />
          <Route path="/about/Certifications" element={<Certifications />} />
          {/* Product Routes */}
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/kirloskar-diesel-generator"
            element={<KirloskarDisel />}
          />
          <Route
            path="/products/kirloskar-gas-generator"
            element={<KirloskarGas />}
          />
          <Route
            path="/products/kirloskar-portable-generator"
            element={<KirloskarPortable />}
          />
          <Route path="/products/panels" element={<Panels />} />
          <Route path="/products/optiprime" element={<Optiprime />} />
          <Route path="/products/servo-stabilizer" element={<Servo />} />
          <Route path="/products/transformers" element={<Transformer />} />
          {/* Services Routes */}
          <Route
            path="/services/annual-maintenance"
            element={<AnnualMaintenance />}
          />
          <Route path="/leads" element={<Submissions />} />
          <Route path="/services/installation" element={<Installation />} />
          <Route
            path="/services/repair-overhaul"
            element={<RepairOverhaul />}
          />
          <Route
            path="/services/emergency-support"
            element={<EmergencySupport />}
          />
          {/* Installation Route */}
          <Route path="/installation" element={<Installation />} />
          {/* Our Clients Route */}
          <Route path="/our-clients" element={<Industries />} />
          {/* Contact Route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
