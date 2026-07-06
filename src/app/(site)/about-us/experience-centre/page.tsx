import { Metadata } from 'next';
import { DigitalTour } from '@/components/about/DigitalTour';

export const metadata: Metadata = {
  title: "Experience Centre | D-Arc Architectural Interior",
  description: "Take a virtual tour of the D-Arc Experience Centre in Mattannur, Kannur. Explore our premium materials, custom furniture setups, and modular kitchens.",
};

export default function ExperienceCentrePage() {
  return (
    <div className="min-h-screen bg-brand-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            D-Arc <span className="text-brand-gold">Experience Centre</span>
          </h1>
          <p className="text-brand-grey text-lg max-w-2xl mx-auto">
            Welcome to our interactive digital tour. Click on any space below to immerse yourself in our curated residential and commercial setups, material libraries, and bespoke design concepts.
          </p>
        </div>
        
        <DigitalTour />
        
        <div className="mt-20 text-center border-t border-white/10 pt-16">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">Visit Us In Person</h2>
          <p className="text-brand-grey mb-8">Ready to feel the textures and see the craftsmanship up close?</p>
          <a href="/contact-us" className="inline-block bg-brand-gold text-brand-black font-bold uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors">
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
}
