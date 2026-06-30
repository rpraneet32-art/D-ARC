import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.darcinterior.com'),
  title: "D-Arc Architectural Interiors | Architects in Kannur",
  description: "D-Arc Architectural Interiors is the most premium architecture and interior design firm in Kannur, Kerala. Discover our Home Experience Center.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "D-Arc Architectural Interiors",
    description: "Premium architecture and interior design firm in Kannur.",
    url: "https://www.darcinterior.com",
    siteName: "D-Arc Architectural Interiors",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "D-Arc Architectural Interiors",
    description: "Premium architecture and interior design firm in Kannur.",
    images: ["/og-image.jpg"],
  },
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "D-Arc Architectural Interiors",
      "image": "https://www.darcinterior.com/og-image.jpg",
      "url": "https://www.darcinterior.com",
      "telephone": "+917907009322",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Therur",
        "addressLocality": "Kannur",
        "addressRegion": "Kerala",
        "postalCode": "670795",
        "addressCountry": "IN"
      },
      "priceRange": "$$$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "D-Arc Architectural Interiors",
      "url": "https://www.darcinterior.com",
      "logo": "https://www.darcinterior.com/og-image.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+917907009322",
        "contactType": "customer service"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": "https://www.darcinterior.com",
      "name": "D-Arc Architectural Interiors | Architects in Kannur"
    }
  ];

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased bg-brand-black text-brand-white`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
