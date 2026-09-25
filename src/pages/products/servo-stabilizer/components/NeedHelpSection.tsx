import React from "react";
import { LinkText } from "@/components/ui/LinkText";
import { Button } from "@/components/ui/button";

interface NeedHelpSectionProps {
  title: string;
  sub: string;
  btnText: string;
}

export const NeedHelpSection: React.FC<NeedHelpSectionProps> = ({
  title,
  sub,
  btnText,
}) => {
  if (!title && !sub && !btnText) return null;

  return (
    <section className="py-8 sm:py-12 bg-[#AAAAAA]">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 text-center">
        {title && (
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">
            {title}
          </h2>
        )}
        {sub && (
          <p className="text-xs sm:text-sm text-black mb-6">
            <LinkText
              text={sub}
              linkClassName="text-[#2D6FBA] hover:underline font-bold"
            />
          </p>
        )}
        {btnText && (
          <div className="flex w-full items-center justify-center">
            <Button
              onClick={() => {
                window.location.href = "/contact";
              }}
              variant="default"
              size="sm"
              className="bg-white p-4 hover:bg-gray-100 text-gray-800 border border-gray-300 flex items-center justify-center gap-2 font-medium cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>{btnText}</span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
