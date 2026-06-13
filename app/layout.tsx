import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Pathak Biofuels | Premium Biomass Pellets & Briquettes India",

  description:
    "Leading manufacturer and supplier of industrial-grade biomass pellets and briquettes. Pinewood Pellets, Sawdust Pellets, Groundshell Pellets, Mustard Pellets and Briquettes. High GCV, Low Ash, Bulk Industrial Supply.",

  keywords: [
    "Biomass Pellets",
    "Biomass Briquettes",
    "Pinewood Pellets",
    "Sawdust Pellets",
    "Groundshell Pellets",
    "Mustard Pellets",
    "Industrial Boiler Fuel",
    "Renewable Energy",
    "Pathak Biofuels",
  ],

  openGraph: {
    title:
      "Pathak Biofuels | Premium Biomass Pellets & Briquettes",

    description:
      "Industrial biomass fuel solutions with high GCV and low ash content.",

    url: "https://www.pathakbiofuels.com",

    siteName: "Pathak Biofuels",

    locale: "en_IN",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "Pathak Biofuels",

    telephone: "+91-6269831886",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Road SH 49",
      addressLocality: "Amanganj",
      addressRegion: "Madhya Pradesh",
      postalCode: "488441",
      addressCountry: "IN",
    },

    url: "https://www.pathakbiofuels.com",

    founder: "Ashutosh Pathak",

    areaServed: "India",
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        {children}
      </body>
    </html>
  );
}