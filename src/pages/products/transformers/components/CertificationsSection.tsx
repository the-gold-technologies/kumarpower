import React from "react";
import { LinkText } from "@/components/ui/LinkText";
import { BadgeCheckIcon } from "lucide-react";

interface CertificationsSectionProps {
  title: string;
  cert1Title: string;
  cert2Title: string;
  cert3Title: string;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  title,
  cert1Title,
  cert2Title,
  cert3Title,
}) => {
  const certs = [cert1Title, cert2Title, cert3Title].filter(Boolean);
  if (!title && certs.length === 0) return null;

  return (
    <section className="bg-black text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {title && (
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
            {title}
          </h2>
        )}

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-14">
          {certs.map((cert, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-md bg-gray-800">
                <BadgeCheckIcon className="w-8 h-8 text-[#2D6FBA]" />
              </div>
              <p className="font-medium text-sm text-gray-300">
                <LinkText
                  text={cert}
                  linkClassName="text-[#2D6FBA] hover:underline font-bold"
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
