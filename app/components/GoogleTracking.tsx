"use client";

import { useEffect } from "react";

const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-7181660965";
const adsConversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleTracking() {
  useEffect(() => {
    const trackLead = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!link || !window.gtag) return;

      const href = link.getAttribute("href") || "";
      if (href.startsWith("mailto:")) {
        window.gtag("event", "generate_lead", {
          method: "email",
          link_url: href.split("?")[0],
        });
        if (adsId && adsConversionLabel) {
          window.gtag("event", "conversion", {
            send_to: `${adsId}/${adsConversionLabel}`,
          });
        }
      } else if (href.startsWith("tel:")) {
        window.gtag("event", "generate_lead", {
          method: "phone",
          link_url: href,
        });
        if (adsId && adsConversionLabel) {
          window.gtag("event", "conversion", {
            send_to: `${adsId}/${adsConversionLabel}`,
          });
        }
      }
    };

    document.addEventListener("click", trackLead);
    return () => document.removeEventListener("click", trackLead);
  }, []);

  return null;
}
