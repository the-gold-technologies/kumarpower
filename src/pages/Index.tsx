import React from "react";
import Header from "@/components/landing/Header";
import PositioningStatement from "@/components/landing/PositioningStatement";
import ElectricalEcosystem from "@/components/landing/ElectricalEcosystem";
import SolutionPortfolio from "@/components/landing/SolutionPortfolio";
import FeaturedSolutions from "@/components/landing/FeaturedSolutions";
import IndustriesServed from "@/components/landing/IndustriesServed";
import WhyKumarPower from "@/components/landing/WhyKumarPower";
import NumbersCredibility from "@/components/landing/NumbersCredibility";
import SelectedProjects from "@/components/landing/SelectedProjects";
import PartnerCertifications from "@/components/landing/PartnerCertifications";
import KnowledgeCenter from "@/components/landing/KnowledgeCenter";
import ConsultationForm from "@/components/landing/ConsultationForm";
import LandingTestimonials from "@/components/landing/LandingTestimonials";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import SEOJsonLD from "@/components/SEOJsonLD";
import Hero from "@/components/landing/Hero";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <SEO
        title="Complete Electrical Power Solutions Provider | Kumar Power"
        description="Kumar Power designs, supplies, integrates & supports complete electrical power systems—from grid entry to final load. Authorised Kirloskar Channel Partner."
        canonical="https://www.kumarpower.com/"
      />

      {/* Header with MegaMenu */}
      <Header />

      <main>
        {/* 1. Full-screen hero video journey (Dark Industrial Impact) */}
        <Hero />

        {/* 2. Immediate positioning statement (Clean White) */}
        <PositioningStatement />

        {/* 3. Complete electrical ecosystem graphic (High-Tech Dark Navy Contrast) */}
        <ElectricalEcosystem />

        {/* 4. Core solution portfolio (Clean White) */}
        <SolutionPortfolio />

        {/* 5. Featured solutions (Light Cool Slate) */}
        <FeaturedSolutions />

        {/* 6. Industries served (Clean White) */}
        <IndustriesServed />

        {/* 7. Why Kumar Power (Light Cool Slate) */}
        <WhyKumarPower />

        {/* 8. Numbers and credibility (Deep Navy High Impact Stat Band) */}
        <NumbersCredibility />

        {/* 9. Selected projects and case studies (Clean White) */}
        <SelectedProjects />

        {/* 10. Partner and certification section (Light Cool Slate) */}
        <PartnerCertifications />

        {/* 11. Knowledge centre / Power Insights (Clean White) */}
        <KnowledgeCenter />

        {/* 12. Real Stories. Real Power. (Customer Testimonials) */}
        <LandingTestimonials />

        {/* 13. Consultation section (High-Impact Navy Conversion Card) */}
        <ConsultationForm />
      </main>

      {/* 13. Structured Footer (Deep Navy / Charcoal) */}
      <Footer />
    </div>
  );
};

export default Index;
