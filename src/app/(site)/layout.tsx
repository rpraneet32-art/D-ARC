import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
  keywords: ["Interior Designers in Kannur", "Best Architects in Kannur", "Luxury Home Interiors Kerala", "Budget Friendly Builders Malabar"],
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
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
        
        {/* Analytics Scripts */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "clarity-project-id");
            `,
          }}
        />

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
