import { Metadata } from "next";
import Link from "next/link";
import { targetLocations } from "@/data/locations";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { FAQ } from "@/components/shared/FAQ";

export const metadata: Metadata = {
  title: "Service Areas | D-Arc Architectural Interiors",
  description: "D-Arc provides award-winning architecture and interior design services across all major locations in Kannur District.",
  alternates: {
    canonical: "/locations-in-kannur",
  },
};

export default function LocationsIndexPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <Breadcrumb />
        
        <div className="max-w-4xl mb-16 mt-8">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-black mb-6">Our Service Locations in Kannur</h1>
          <div className="w-20 h-1 bg-brand-gold mb-8"></div>
          <p className="text-xl text-brand-grey leading-relaxed">
            From the coastal stretches of Payyambalam to the bustling town of Mattannur, D-Arc brings world-class architectural and interior design services to every corner of the district.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {targetLocations.map((loc, index) => (
            <Link 
              key={index} 
              href={`/locations-in-kannur/${loc.slug}`}
              className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-between"
            >
              <div>
                <h3 className="text-xl font-serif text-brand-black group-hover:text-brand-gold transition-colors">
                  {loc.name}
                </h3>
              </div>
              <svg className="w-5 h-5 text-brand-grey group-hover:text-brand-gold transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
      
      <FAQ />
    </main>
  );
}
