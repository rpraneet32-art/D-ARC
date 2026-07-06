import { Metadata } from 'next';
import { DigitalTour } from '@/components/about/DigitalTour';

export const metadata: Metadata = {
  title: "Experience Centre | D-Arc Architectural Interior",
  description: "Take a virtual tour of the D-Arc Experience Centre in Mattannur, Kannur. Explore our premium materials, custom furniture setups, and modular kitchens.",
};

export default function ExperienceCentrePage() {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* The Digital Tour handles its own full-screen dimensions */}
      <DigitalTour />
      
      <div className="bg-brand-black py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">Visit Us In Person</h2>
          <p className="text-brand-grey mb-8 text-lg">Ready to feel the textures and see the craftsmanship up close?</p>
          <a href="/contact-us" className="inline-block bg-brand-gold text-brand-black font-bold uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors">
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
}
