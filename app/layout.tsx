import type { Metadata } from "next";
import "./globals.css";
import FloatingSiteTools from "./components/FloatingSiteTools";

export const metadata: Metadata = {
  metadataBase: new URL("https://zenttre.mx"),
  title: "Zenttre | Oficinas a la medida en CDMX",
  description:
    "Oficinas equipadas, salas de juntas, oficinas virtuales y domicilio fiscal en la Colonia del Valle, CDMX.",
  openGraph: {
    title: "Zenttre | Oficinas a la medida para ti",
    description: "Espacios de trabajo flexibles en la Colonia del Valle, CDMX.",
    images: [{ url: "/og.png", width: 1732, height: 909, alt: "Zenttre, oficinas a la medida para ti" }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenttre | Oficinas a la medida para ti",
    description: "Espacios de trabajo flexibles en la Colonia del Valle, CDMX.",
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
      <body>
        {children}
        <FloatingSiteTools />
      </body>
    </html>
  );
}
