import { useEffect } from "react";
import { useCMSStore } from "@/store/useCMSStore";

interface SEOJsonLDProps {
  title?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
}

const SEOJsonLD = ({ title, description, url, imageUrl }: SEOJsonLDProps) => {
  const globalSEO = useCMSStore((state) => state.globalSEO);
  const fetchGlobalSEO = useCMSStore((state) => state.fetchGlobalSEO);

  useEffect(() => {
    fetchGlobalSEO();
  }, [fetchGlobalSEO]);

  const resolvedTitle = title || globalSEO?.siteTitle;
  const resolvedDescription = description || globalSEO?.siteDescription;
  const resolvedUrl =
    url ||
    globalSEO?.canonicalUrl ||
    (typeof window !== "undefined" ? window.location.origin : "");
  const resolvedImageUrl = imageUrl || globalSEO?.ogImage;

  const sameAs = [
    globalSEO?.socialLinks?.linkedin,
    globalSEO?.socialLinks?.facebook,
    globalSEO?.socialLinks?.youtube,
    globalSEO?.socialLinks?.instagram,
  ].filter(Boolean);

  if (!resolvedTitle && !resolvedUrl) {
    return null;
  }

  const data: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    ...(resolvedTitle && { name: resolvedTitle }),
    ...(resolvedUrl && { url: resolvedUrl }),
    ...(resolvedDescription && { description: resolvedDescription }),
    ...(resolvedImageUrl && { image: resolvedImageUrl }),
    brand: {
      "@type": "Brand",
      name: "Kirloskar",
    },
    ...(sameAs.length > 0 && { sameAs }),
  };

  const website: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    ...(resolvedTitle && { name: resolvedTitle }),
    ...(resolvedUrl && { url: resolvedUrl }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
};

export default SEOJsonLD;
