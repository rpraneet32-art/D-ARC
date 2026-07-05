import Link from "next/link";
import { services } from "@/data/services";

export const metadata = {
  title: "Our Services | D-Arc Architectural Interiors",
  description: "Explore our premium architecture, interior design, construction, and turnkey project services in Kannur.",
  keywords: ["Architecture Services Kannur", "Interior Design Kerala", "Turnkey Construction Contractors", "Modular Kitchen Designers"],
  alternates: {
    canonical: "/services-in-kannur",
  },
};
import { Breadcrumb } from "@/components/shared/Breadcrumb";

import { FAQ } from "@/components/shared/FAQ";

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <Breadcrumb />
        <h1 className="text-4xl md:text-5xl font-serif text-brand-gold mb-6">Our Services</h1>
        <p className="text-brand-grey max-w-2xl mb-12 text-lg">
          From conceptual design to final construction, D-Arc offers a comprehensive suite of <Link href="/expertise-in-kannur/residential-architecture-in-kannur" className="text-brand-gold hover:underline">architectural</Link> and <Link href="/services-in-kannur/interior-design-in-kannur" className="text-brand-gold hover:underline">interior design</Link> services tailored to your exact needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service) => (
            <Link 
              key={service.slug}
              href={`/services-in-kannur/${service.slug}`}
              className="block group"
            >
              <div className="bg-white border border-gray-100 p-8 h-full rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl font-serif text-brand-black group-hover:text-brand-gold transition-colors mb-4">
                  {service.title}
                </h2>
                <p className="text-brand-grey">
                  {service.shortDescription}
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold text-brand-gold uppercase tracking-wider">
                  <span>Explore Service</span>
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
