import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import { client } from "@/sanity/lib/client";
import { LOCATIONS_QUERY } from "@/sanity/lib/queries";

export async function CoverageAreas() {
  const locationDocs = await client.fetch<any[]>(LOCATIONS_QUERY);
  // Default fallback locations in case Sanity is unreachable
  const locations = locationDocs && locationDocs.length > 0 
    ? locationDocs 
    : [
        { name: "Kannur", slug: { current: "kannur" } },
        { name: "Taliparamba", slug: { current: "taliparamba" } },
        { name: "Thalassery", slug: { current: "thalassery" } },
        { name: "Mattannur", slug: { current: "mattannur" } },
        { name: "Payyanur", slug: { current: "payyanur" } },
        { name: "Kasaragod", slug: { current: "kasaragod" } },
        { name: "Wayanad", slug: { current: "wayanad" } }
      ];
  
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
              {locations.map((loc: any, idx: number) => (
                <Link 
                  key={idx} 
                  href={`/locations/${loc.slug?.current || loc.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 border border-gray-200 text-brand-grey text-sm rounded-full hover:border-brand-gold hover:text-brand-gold transition-colors"
                >
                  {loc.name}
                </Link>
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
            {/* An SVG abstract map representation of Northern Kerala */}
            <svg viewBox="0 0 400 600" className="w-full h-full text-brand-gold/10 p-8">
              <path fill="currentColor" d="M150 20 Q220 10 280 60 T360 200 Q390 350 320 450 T200 580 Q100 550 60 400 T40 150 Q100 50 150 20 Z" />
              
              {/* Markers */}
              {/* Kasaragod (Northmost) */}
              <circle cx="150" cy="80" r="4" fill="#111" />
              <text x="160" y="84" fill="#666" fontSize="12">Kasaragod</text>

              {/* Payyanur */}
              <circle cx="200" cy="140" r="4" fill="#111" />
              <text x="210" y="144" fill="#666" fontSize="12">Payyanur</text>

              {/* Taliparamba */}
              <circle cx="230" cy="190" r="4" fill="#111" />
              <text x="240" y="194" fill="#666" fontSize="12">Taliparamba</text>

              {/* Kannur (Main Hub) */}
              <circle cx="180" cy="240" r="6" fill="#D4AF37" className="animate-pulse" />
              <text x="195" y="245" fill="#111" fontSize="14" fontWeight="bold">Kannur</text>
              
              {/* Mattannur (East of Kannur) */}
              <circle cx="280" cy="260" r="4" fill="#111" />
              <text x="290" y="264" fill="#666" fontSize="12">Mattannur</text>

              {/* Thalassery (South of Kannur) */}
              <circle cx="160" cy="300" r="4" fill="#111" />
              <text x="100" y="304" fill="#666" fontSize="12">Thalassery</text>
              
              {/* Mahe */}
              <circle cx="170" cy="330" r="4" fill="#111" />
              <text x="180" y="334" fill="#666" fontSize="12">Mahe</text>

              {/* Vadakara */}
              <circle cx="185" cy="380" r="4" fill="#111" />
              <text x="195" y="384" fill="#666" fontSize="12">Vadakara</text>

              {/* Kozhikode (Southmost in this view) */}
              <circle cx="210" cy="450" r="4" fill="#111" />
              <text x="220" y="454" fill="#666" fontSize="12">Kozhikode</text>

              {/* Wayanad (East/Inland) */}
              <circle cx="310" cy="380" r="4" fill="#111" />
              <text x="320" y="384" fill="#666" fontSize="12">Wayanad</text>
            </svg>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
