import { useEffect, useRef } from "react";
import { useCMSStore } from "../store/useCMSStore";

export default function GlobalScripts() {
  const globalSEO = useCMSStore((state) => state.globalSEO);
  const injected = useRef(false);

  useEffect(() => {
    if (!globalSEO || injected.current) return;
    injected.current = true; // Ensure we only inject once

    // Favicon
    if (globalSEO.favicon) {
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = globalSEO.favicon;
    }

    // Google Search Console
    if (globalSEO.searchConsoleId) {
      const meta = document.createElement("meta");
      meta.name = "google-site-verification";
      meta.content = globalSEO.searchConsoleId;
      document.head.appendChild(meta);
    }

    // Google Analytics (GA4)
    if (globalSEO.googleAnalyticsId) {
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${globalSEO.googleAnalyticsId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${globalSEO.googleAnalyticsId}');
      `;
      document.head.appendChild(script2);
    }

    // Google Tag Manager (GTM)
    if (globalSEO.gtmId) {
      const script = document.createElement("script");
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${globalSEO.gtmId}');
      `;
      document.head.appendChild(script);

      // GTM NoScript (body)
      const noscript = document.createElement("noscript");
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${globalSEO.gtmId}`;
      iframe.height = "0";
      iframe.width = "0";
      iframe.style.display = "none";
      iframe.style.visibility = "hidden";
      noscript.appendChild(iframe);
      document.body.insertBefore(noscript, document.body.firstChild);
    }

    const injectRawHTML = (html: string, target: HTMLElement) => {
      const div = document.createElement('div');
      div.innerHTML = html;
      Array.from(div.children).forEach(node => {
        if (node.tagName.toLowerCase() === 'script') {
          const script = document.createElement('script');
          const oldScript = node as HTMLScriptElement;
          Array.from(oldScript.attributes).forEach(attr => script.setAttribute(attr.name, attr.value));
          script.innerHTML = oldScript.innerHTML;
          target.appendChild(script);
        } else {
          target.appendChild(node);
        }
      });
    };

    // Custom Header Scripts (e.g. Meta Pixel, etc)
    if (globalSEO.customHeaderScripts) {
      try {
        injectRawHTML(globalSEO.customHeaderScripts, document.head);
      } catch (e) {
        console.error("Error injecting custom header scripts", e);
      }
    }

    // Custom Footer Scripts
    if (globalSEO.customFooterScripts) {
      try {
        injectRawHTML(globalSEO.customFooterScripts, document.body);
      } catch (e) {
        console.error("Error injecting custom footer scripts", e);
      }
    }

    // Global Schema
    if (globalSEO.schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.innerHTML = globalSEO.schema;
      document.head.appendChild(script);
    }

  }, [globalSEO]);

  return null;
}
