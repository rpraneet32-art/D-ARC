import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import { client } from "@/sanity/lib/client";
import { LOCATIONS_QUERY } from "@/sanity/lib/queries";

export async function CoverageAreas() {
  const locationDocs = await client.fetch<any[]>(LOCATIONS_QUERY);
  const locations = locationDocs.map(doc => doc.name);
  
  return (
    <section className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-4">
              07 // Service Areas
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-black mb-8 leading-tight">
              Proudly Serving <br /> Northern Kerala.
            </h3>
            <p className="text-lg text-brand-grey mb-10 leading-relaxed max-w-lg">
              While our primary market is the Kannur District, our footprint extends across major secondary markets. We bring D-Arc's signature engineering excellence directly to your site, wherever it may be.
            </p>
            <div className="flex flex-wrap gap-3">
              {locations.map((loc, idx) => (
                <span key={idx} className="px-4 py-2 border border-gray-200 text-brand-grey text-sm rounded-full hover:border-brand-gold hover:text-brand-gold transition-colors cursor-default">
                  {loc}
                </span>
              ))}
            </div>
            <div className="mt-12">
              <Link href="/contact-us" className="inline-flex items-center text-brand-black font-semibold uppercase tracking-wider text-sm hover:text-brand-gold transition-colors group">
                Check Availability In Your Area
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" className="relative h-[600px] bg-[#FAFAFA] rounded-sm flex items-center justify-center overflow-hidden border border-gray-100">
            {/* An SVG abstract map representation */}
            <svg viewBox="0 0 400 600" className="w-full h-full text-brand-gold/10 p-12">
              <path fill="currentColor" d="M150 50 Q200 20 250 80 T350 150 Q380 250 300 350 T200 500 Q150 550 100 450 T50 250 Q20 150 150 50 Z" />
              {/* Markers */}
              <circle cx="200" cy="180" r="6" fill="#D4AF37" className="animate-pulse" />
              <text x="215" y="185" fill="#111" fontSize="14" fontWeight="bold">Kannur</text>
              
              <circle cx="250" cy="130" r="4" fill="#111" />
              <text x="260" y="134" fill="#666" fontSize="12">Taliparamba</text>

              <circle cx="150" cy="220" r="4" fill="#111" />
              <text x="90" y="224" fill="#666" fontSize="12">Thalassery</text>

              <circle cx="280" cy="250" r="4" fill="#111" />
              <text x="290" y="254" fill="#666" fontSize="12">Mattannur</text>
            </svg>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
