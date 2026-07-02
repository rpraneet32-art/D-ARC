import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Experience Centre & Sofa Studio | D-Arc",
  description: "Visit our sprawling Home Experience Centre in Mattannur, Kannur. Explore our exclusive Sofa Studio featuring customized, premium furniture.",
  keywords: ["Home Experience Centre Kannur", "Custom Sofa Studio Kerala", "Interior Design Mockups Kannur", "Premium Furniture Showroom"],
};

import { Breadcrumb } from "@/components/shared/Breadcrumb";

import { FAQ } from "@/components/shared/FAQ";

export default function ExperienceCentrePage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <Breadcrumb />
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-black mb-6">Home Experience Centre</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="text-xl text-brand-grey leading-relaxed">
            Step into our sprawling, state-of-the-art facility in Mattannur, Kannur. We believe that seeing is believing.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-24">
          <div className="md:flex">
            <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-serif text-brand-black mb-6">Touch, Feel, and Experience</h2>
              <p className="text-brand-grey mb-6 leading-relaxed">
                Our Home Experience Centre allows you to physically interact with various materials, finishes, and design concepts before making a decision. Walk through fully realized room setups, from modern <Link href="/services-in-kannur/modular-kitchen-in-kannur" className="text-brand-gold hover:underline">modular kitchens</Link> to luxurious <Link href="/expertise-in-kannur/residential-architecture-in-kannur" className="text-brand-gold hover:underline">bedrooms</Link>.
              </p>
              <ul className="space-y-4 mb-8 text-brand-black font-medium">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-3">✓</span> Full-scale interior mockups
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-3">✓</span> Vast library of material samples
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-3">✓</span> Lighting and smart-home demonstrations
                </li>
              </ul>
              <Link href="/contact" className="inline-block border-2 border-brand-black text-brand-black text-center px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-brand-black hover:text-white transition-colors w-fit">
                Book a Visit
              </Link>
            </div>
            <div className="md:w-1/2 bg-gray-100 min-h-[400px] relative">
              <div className="absolute inset-0 flex items-center justify-center text-brand-grey">
                [Experience Centre Image Placeholder]
              </div>
            </div>
          </div>
        </div>

        {/* Sofa Studio Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-black mb-6">The Sofa Studio</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
            <p className="text-xl text-brand-grey leading-relaxed">
              Discover unparalleled comfort and bespoke craftsmanship in our exclusive Sofa Studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-brand-beige text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-brand-black mb-4">Custom Designs</h3>
              <p className="text-brand-grey">Tailor-made sofas that fit your space, style, and posture requirements perfectly.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-brand-beige text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-brand-black mb-4">Premium Fabrics</h3>
              <p className="text-brand-grey">Choose from hundreds of imported fabrics, genuine leathers, and stain-resistant performance materials.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-brand-beige text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-brand-black mb-4">Quality Assured</h3>
              <p className="text-brand-grey">Built with seasoned wood frames and high-resiliency foam for decades of enduring comfort.</p>
            </div>
          </div>
        </div>
      </div>
      
      <FAQ />
    </main>
  );
}
