import type { Metadata } from "next";
import "./globals.css";
import FloatingSiteTools from "./components/FloatingSiteTools";
import GoogleTracking from "./components/GoogleTracking";

const siteUrl = "https://zenttre.mx";
const googleTagIds = [
  process.env.NEXT_PUBLIC_GOOGLE_TAG_ID,
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
].filter((id, index, ids): id is string => Boolean(id) && ids.indexOf(id) === index);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zenttre | Oficinas equipadas en Colonia del Valle, CDMX",
    template: "%s | Zenttre",
  },
  description:
    "Renta oficinas equipadas, salas de juntas, oficina virtual y domicilio fiscal en la Colonia del Valle, CDMX. Espacios flexibles y atención profesional.",
  applicationName: "Zenttre",
  authors: [{ name: "Zenttre", url: siteUrl }],
  creator: "Zenttre",
  publisher: "Zenttre",
  keywords: [
    "oficinas equipadas CDMX",
    "renta de oficinas Colonia del Valle",
    "salas de juntas CDMX",
    "oficina virtual CDMX",
    "domicilio fiscal CDMX",
    "domicilio comercial para empresas",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    title: "Zenttre | Oficinas equipadas en Colonia del Valle, CDMX",
    description: "Oficinas, salas de juntas y servicios empresariales flexibles en la Colonia del Valle, CDMX.",
    url: siteUrl,
    siteName: "Zenttre",
    images: [{ url: "/og.png", width: 1732, height: 909, alt: "Zenttre, oficinas a la medida para ti" }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenttre | Oficinas equipadas en Colonia del Valle, CDMX",
    description: "Oficinas, salas de juntas y servicios empresariales flexibles en la Colonia del Valle, CDMX.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {googleTagIds[0] && (
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleTagIds[0]}`} />
        )}
        {googleTagIds.length > 0 && (
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${googleTagIds
                .map((id) => `gtag('config','${id}',{send_page_view:true});`)
                .join("")}`,
            }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "ProfessionalService"],
              "@id": `${siteUrl}/#business`,
              name: "Zenttre",
              url: siteUrl,
              logo: `${siteUrl}/zenttre-logo-v3.png`,
              image: `${siteUrl}/og.png`,
              description: "Oficinas equipadas, salas de juntas, oficina virtual y domicilio fiscal en la Colonia del Valle, CDMX.",
              telephone: "+52 55 2000 2619",
              email: "mensajes@zenttre.com",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Aniceto Ortega 817",
                addressLocality: "Benito Juárez",
                addressRegion: "Ciudad de México",
                postalCode: "03100",
                addressCountry: "MX",
              },
              areaServed: { "@type": "City", name: "Ciudad de México" },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios Zenttre",
                itemListElement: [
                  "Oficinas equipadas",
                  "Salas de juntas",
                  "Oficina virtual",
                  "Domicilio fiscal y comercial",
                ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
              },
            }).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        {children}
        <FloatingSiteTools />
        <GoogleTracking />
      </body>
    </html>
  );
}
