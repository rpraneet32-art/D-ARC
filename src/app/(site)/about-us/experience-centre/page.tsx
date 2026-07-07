import { Metadata } from 'next';
import Image from 'next/image';
import { DigitalTour } from '@/components/about/DigitalTour';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata: Metadata = {
  title: "Architecture Showroom Kannur | Interior Design Experience Centre Kerala",
  description: "Take a virtual tour of the D-Arc Experience Centre in Mattannur, Kannur. Explore our premium materials, custom furniture setups, and modular kitchens.",
  keywords: ["Architecture Showroom Kannur", "Interior Design Experience Centre Kerala", "D-Arc Experience Centre", "Premium Interior Materials", "Modular Kitchen Showroom Kannur"]
};

export default function ExperienceCentrePage() {
  return (
    <div className="min-h-screen bg-brand-black w-full flex flex-col">
      {/* 
        The Digital Tour handles its own full-screen dimensions and sticky scroll logic (1500vh).
        Once the user scrolls past it, the following content will naturally flow into view. 
      */}
      <DigitalTour />
      
      {/* Extended SEO & Editorial Content */}
      <div className="bg-brand-black text-brand-white py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 w-full z-10 relative">
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="text-center mb-20">
            <FadeIn direction="up">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Discover the Ultimate <span className="text-brand-gold">Architecture Showroom</span> in Kannur
              </h1>
              <p className="text-brand-grey text-lg max-w-3xl mx-auto">
                Step beyond blueprints and 3D renders. At our state-of-the-art facility in Mattannur, we bring the finest interior elements and architectural innovations into the physical realm for you to touch, feel, and experience.
              </p>
            </FadeIn>
          </div>

          {/* Section 1 - Material Library */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <FadeIn direction="left" className="space-y-6 text-lg text-brand-grey leading-relaxed">
              <h2 className="text-3xl font-serif font-bold text-white mb-4">A Curated Material Library for Discerning Clients</h2>
              <p>
                Choosing the right finishes for your dream home is arguably the most critical and daunting phase of any construction or interior project. Small sample swatches often fail to convey the true texture and visual impact of a material on a grand scale. That is why we built the premier Architecture Showroom in Kannur. Our material library is a meticulously curated sanctuary featuring hundreds of full-scale slabs and panels.
              </p>
              <p>
                As the leading Interior Design Experience Centre Kerala has to offer, we provide an unparalleled tactile experience. Run your hands over book-matched Italian marble, feel the warmth of hand-scraped teak wood flooring, and observe how different ambient lighting setups interact with our premium textured wallpapers. From marine-grade plywood and high-pressure laminates to avant-garde acoustic panels, every material is displayed exactly as it would appear in your finished space.
              </p>
              <p>
                Our expert architects and material specialists are always on hand to guide you through the selection process, explaining the durability, maintenance requirements, and structural implications of each choice. We take the guesswork out of interior design, ensuring that what you choose is precisely what you get.
              </p>
            </FadeIn>
            <FadeIn direction="right" className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/assets/experience/material-library-kannur.jpg"
                alt="Extensive material library featuring premium wood, marble, and laminates at our Architecture Showroom in Kannur"
                fill
                className="object-cover"
              />
            </FadeIn>
          </div>

          {/* Section 2 - Live Modular Kitchens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 flex-col-reverse lg:flex-row-reverse">
            <FadeIn direction="right" className="space-y-6 text-lg text-brand-grey leading-relaxed">
              <h2 className="text-3xl font-serif font-bold text-white mb-4">Live, Fully Functional Modular Kitchens</h2>
              <p>
                The kitchen is the beating heart of the modern Indian home, and designing it requires a perfect equilibrium of ergonomics, aesthetics, and robust functionality. You cannot truly appreciate a kitchen's workflow from a 2D drawing. Inside our Interior Design Experience Centre Kerala, we have installed several full-scale, fully functional modular kitchens.
              </p>
              <p>
                We invite you to interact with our setups. Open the soft-close tandem drawers, test the hydraulic lift-up cabinets, and experience the smooth glide of our premium German and Austrian hardware (such as Hettich and Blum). We showcase a variety of layouts—island, L-shaped, U-shaped, and parallel—allowing you to physically walk the "working triangle" and understand spatial dynamics. 
              </p>
              <p>
                Furthermore, we display various countertop materials under different lighting scenarios, ranging from high-end quartz and sintered stone to traditional granite. By interacting with these live setups, you can make informed decisions about storage solutions, built-in appliance placements, and lighting design, ensuring your final kitchen is a joy to cook in.
              </p>
            </FadeIn>
            <FadeIn direction="left" className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/assets/experience/modular-kitchen-display.jpg"
                alt="Fully functional premium modular kitchen display with island counter at the Interior Design Experience Centre Kerala"
                fill
                className="object-cover"
              />
            </FadeIn>
          </div>

          {/* Section 3 - Custom Furniture & Lighting */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <FadeIn direction="left" className="space-y-6 text-lg text-brand-grey leading-relaxed">
              <h2 className="text-3xl font-serif font-bold text-white mb-4">Bespoke Furniture and Immersive Lighting Galleries</h2>
              <p>
                D-Arc Architectural Interior doesn't just build the shell; we craft the soul of your home. A significant portion of our Architecture Showroom in Kannur is dedicated to our custom furniture and lighting galleries. We do not rely on mass-produced catalogues. Instead, we design and manufacture bespoke furniture tailored specifically to the dimensions and design language of your home. 
              </p>
              <p>
                In our showroom, you can test the ergonomics of our custom sofas, inspect the joinery of our solid wood dining tables, and appreciate the fine upholstery of our accent chairs. We believe that furniture should not only look spectacular but also provide unparalleled comfort and durability. This commitment to physical comfort is what sets us apart as a top-tier design firm.
              </p>
              <p>
                Adjacent to the furniture gallery is our immersive lighting zone. Lighting fundamentally alters the perception of space, color, and texture. We have meticulously designed automated lighting pods where you can experience the dramatic difference between warm white, cool white, and daylight temperatures. You can observe how architectural wall washers highlight stone cladding, how recessed cove lights create the illusion of height, and how statement chandeliers act as the focal point of a room. This is the ultimate Interior Design Experience Centre Kerala has to offer.
              </p>
            </FadeIn>
            <FadeIn direction="right" className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/assets/experience/furniture-lighting-gallery.jpg"
                alt="Bespoke furniture setups and automated lighting pods inside the D-Arc Architecture Showroom Kannur"
                fill
                className="object-cover"
              />
            </FadeIn>
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto text-center bg-white/5 border border-brand-gold/20 p-12 rounded-sm mt-20">
            <FadeIn direction="up">
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Visit Us In Person</h2>
              <p className="text-brand-grey mb-10 text-lg leading-relaxed">
                Ready to feel the textures and see the craftsmanship up close? A visit to the D-Arc Architecture Showroom in Kannur is the definitive first step in your home-building journey. 
              </p>
              <a href="/contact-us" className="inline-block bg-brand-gold text-brand-black font-bold uppercase tracking-widest px-10 py-5 hover:bg-white transition-colors">
                Book an Appointment
              </a>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
}
