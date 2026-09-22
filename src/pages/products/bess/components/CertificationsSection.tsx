import React from "react";
import { BadgeCheckIcon } from "lucide-react";
import { LinkText } from "@/components/ui/LinkText";

interface CertificationsSectionProps {
  title?: string;
  cert1Title?: string;
  cert2Title?: string;
  cert3Title?: string;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  title,
  cert1Title,
  cert2Title,
  cert3Title,
}) => {
  if (!title && !cert1Title && !cert2Title && !cert3Title) return null;

  return (
    <section className="bg-black text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {title && (
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
            {title}
          </h2>
        )}

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-14">
          {cert1Title && (
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-md bg-gray-800">
                <BadgeCheckIcon
                  className="w-8 h-8"
                  style={{ color: "#2D6FBA" }}
                />
              </div>
              <p className="font-medium text-sm text-gray-300">
                <LinkText
                  text={cert1Title}
                  linkClassName="text-[#2D6FBA] hover:underline font-bold"
                />
              </p>
            </div>
          )}

          {cert2Title && (
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-md bg-gray-800">
                <BadgeCheckIcon
                  className="w-8 h-8"
                  style={{ color: "#2D6FBA" }}
                />
              </div>
              <p className="font-medium text-sm text-gray-300">
                <LinkText
                  text={cert2Title}
                  linkClassName="text-[#2D6FBA] hover:underline font-bold"
                />
              </p>
            </div>
          )}

          {cert3Title && (
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-md bg-gray-800">
                <BadgeCheckIcon
                  className="w-8 h-8"
                  style={{ color: "#2D6FBA" }}
                />
              </div>
              <p className="font-medium text-sm text-gray-300">
                <LinkText
                  text={cert3Title}
                  linkClassName="text-[#2D6FBA] hover:underline font-bold"
                />
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
