import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased bg-brand-black text-brand-white`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
