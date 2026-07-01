import Link from "next/link";
import { expertise } from "@/data/expertise";

export const metadata = {
  title: "Our Expertise | D-Arc Architectural Interiors",
  description: "Discover our specialized expertise in residential architecture, commercial spaces, luxury villas, and sustainable design.",
  keywords: ["Luxury Villas Architects", "Commercial Architecture Kerala", "Residential Architects Kannur", "Sustainable Design Consultants"],
  alternates: {
    canonical: "/expertise",
  },
};
import { Breadcrumb } from "@/components/shared/Breadcrumb";

import { FAQ } from "@/components/shared/FAQ";

export default function ExpertisePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Architect",
    "name": "D-Arc Architectural Interiors",
    "image": "https://www.darcinterior.com/og-image.jpg",
    "url": "https://www.darcinterior.com/expertise",
    "telephone": "+917907009322",
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="container mx-auto px-6">
        <Breadcrumb />
        <h1 className="text-4xl md:text-5xl font-serif text-brand-gold mb-6">Our Expertise</h1>
        <p className="text-brand-grey max-w-2xl mb-12 text-lg">
          With years of experience across diverse <Link href="/services/architecture-in-kannur" className="text-brand-gold hover:underline">architectural</Link> typologies, our specialized expertise ensures that your specific <Link href="/contact-us" className="text-brand-gold hover:underline">project requirements</Link> are met with unparalleled precision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {expertise.map((item) => (
            <Link 
              key={item.slug}
              href={`/expertise/${item.slug}`}
              className="block group"
            >
              <div className="bg-white border border-gray-100 p-8 h-full rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl font-serif text-brand-black group-hover:text-brand-gold transition-colors mb-4">
                  {item.title}
                </h2>
                <p className="text-brand-grey">
                  {item.shortDescription}
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold text-brand-gold uppercase tracking-wider">
                  <span>Explore Expertise</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <FAQ />
    </main>
  );
}
