import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useCMSStore } from "../store/useCMSStore";
import { useLocation } from "react-router-dom";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  robots?: string;
  pageSlug?: string;
};

export default function SEO({
  title,
  description,
  keywords,
  ogImage,
  canonical,
  robots,
  pageSlug,
}: SEOProps) {
  const location = useLocation();
  const resolvedSlug =
    pageSlug ||
    (location.pathname === "/" ? "home" : location.pathname.substring(1));

  const globalSEO = useCMSStore((state) => state.globalSEO);
  const fetchGlobalSEO = useCMSStore((state) => state.fetchGlobalSEO);
  const fetchPage = useCMSStore((state) => state.fetchPage);
  const pageState = useCMSStore((state) =>
    resolvedSlug ? state.pages[resolvedSlug] : undefined,
  );

  useEffect(() => {
    fetchGlobalSEO();
    if (resolvedSlug && !pageState) {
      fetchPage(resolvedSlug);
    }
  }, [fetchGlobalSEO, resolvedSlug, pageState, fetchPage]);

  const seoData = pageState?.seo;

  const finalTitle =
    (resolvedSlug === "home"
      ? globalSEO?.siteTitle || seoData?.metaTitle || title
      : seoData?.metaTitle || globalSEO?.siteTitle || title) || "Kumar Power";

  const finalDescription =
    (resolvedSlug === "home"
      ? globalSEO?.siteDescription || seoData?.metaDescription || description
      : seoData?.metaDescription ||
        globalSEO?.siteDescription ||
        description) || "Kumar Power | Kirloskar Generator Dealer";

  const finalKeywords = seoData?.keywords || keywords;
  const finalOgImage = seoData?.ogImage || ogImage;
  const finalCanonical = seoData?.canonicalUrl || canonical;
  const finalRobots = seoData?.noIndex ? "noindex, nofollow" : robots;

  return (
    <Helmet>
      <title>{finalTitle}</title>

      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}

      {finalCanonical && <link rel="canonical" href={finalCanonical} />}
      {finalRobots && <meta name="robots" content={finalRobots} />}

      {seoData?.schema && (
        <script type="application/ld+json">{seoData.schema}</script>
      )}

      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      {finalOgImage && <meta property="og:image" content={finalOgImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      {finalOgImage && <meta name="twitter:image" content={finalOgImage} />}
    </Helmet>
  );
}
