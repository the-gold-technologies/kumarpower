import { Button } from "@/components/ui/button";
import { Phone, Download } from "lucide-react";
import need from "@/assets/need assistance.png"

const CTASection = () => {
  // WhatsApp function to open chat with the given phone number
  const openWhatsApp = () => {
    // Format: https://wa.me/<phone_number>
    const phoneNumber = "919773851767"; // Remove + and add country code without leading zero
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <section id="cta" className="py-16 bg-black relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-contain bg-center z-0"
        style={{ backgroundImage: `url(${need})` }}
      ></div>
      
      <div className="container mx-auto flex flex-col items-start text-left relative z-10 px-4 md:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Need Expert Assistance?</h2>
         
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Button 
            className="w-full sm:w-auto bg-transparent hover:bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-md px-6 py-3 h-auto"
            asChild
          >
            <a onClick={
                () => {
                  window.location.href = "/contact";
                }
              } className="flex items-center gap-2">
              <Phone className="size-5"/> Talk to an Expert
            </a>
          </Button>
          <Button 
            className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-blue-500 hover:from-amber-500 hover:to-blue-600 text-white font-medium border-2 border-white rounded-md px-6 py-3 h-auto"
            onClick={openWhatsApp}
          >
            <span className="flex items-center gap-2">
              <Download className="size-5"/> Connect on WhatsApp 
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;