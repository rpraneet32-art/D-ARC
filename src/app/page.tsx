import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/projects/WhatsApp Image 2026-06-26 at 15.18.52 (1).jpeg" 
            alt="D-Arc Home Experience Centre Exterior" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 to-brand-black/90" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-white mb-6 leading-tight">
            Architectural Brilliance,<br />
            <span className="text-brand-gold">Interior Perfection</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-grey mb-10 max-w-2xl mx-auto">
            The leading architecture and interior design firm in Kannur. Transforming spaces into exceptional environments that inspire and enrich lives.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/portfolio" className="px-8 py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-wide hover:bg-white transition-colors">
              Explore Our Work
            </Link>
            <Link href="/contact-us" className="px-8 py-4 border border-brand-gold text-brand-gold font-bold uppercase tracking-wide hover:bg-brand-gold hover:text-brand-black transition-colors">
              Get an Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Brand Introduction */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-white mb-8">
                Your Vision, <br />
                <span className="text-brand-gold">Our Masterpiece</span>
              </h2>
              <div className="space-y-6 text-brand-grey">
                <p>
                  Founded in Mattannur, Kannur, in 2014 by Afzal Ali, D-Arc has been at the forefront of transforming living spaces. With a deep-rooted passion for design and construction, we&apos;ve evolved into a comprehensive design and build firm.
                </p>
                <p>
                  Joining the team in 2023, Shuhood Bin Haris brought a wealth of experience in custom furniture and interior design, further enriching our offerings. Today, D-Arc stands as a symbol of innovation, delivering exceptional projects that cater to diverse tastes and lifestyles.
                </p>
              </div>
            </div>
            <div className="relative h-[600px] w-full">
              <Image 
                src="/assets/projects/WhatsApp Image 2026-06-26 at 15.18.49.jpeg"
                alt="D-Arc Showroom Interior"
                fill
                className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Why Choose D-Arc (Experience Center & Sofa Studio) */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-white mb-4">D-Arc&apos;s Signature Offerings</h2>
            <p className="text-brand-grey max-w-2xl mx-auto">Experience unparalleled customization at our dedicated facilities.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-black border border-white/5 p-8 group hover:border-brand-gold/50 transition-colors">
              <div className="relative h-64 mb-8 overflow-hidden rounded-sm">
                <Image src="/assets/projects/WhatsApp Image 2026-06-26 at 15.18.52 (1).jpeg" alt="Home Experience Center" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-white mb-4">Home Experience Center</h3>
              <p className="text-brand-grey mb-6">Elevate your interior design journey with a visit to our Home Experience Center. Discover a vast array of premium materials, finishes, and furniture to inspire your dream home.</p>
              <Link href="/company/experience-centre" className="text-brand-gold font-medium hover:text-white transition-colors uppercase text-sm tracking-wider">Discover More &rarr;</Link>
            </div>
            
            <div className="bg-brand-black border border-white/5 p-8 group hover:border-brand-gold/50 transition-colors">
              <div className="relative h-64 mb-8 overflow-hidden rounded-sm">
                <Image src="/assets/projects/WhatsApp Image 2026-06-26 at 15.18.47.jpeg" alt="The Sofa Studio" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-white mb-4">The Sofa Studio</h3>
              <p className="text-brand-grey mb-6">Indulge in comfort and style at our dedicated Sofa Studio. Experience the art of sofa customization and discover the perfect piece to anchor your living space.</p>
              <Link href="/company/experience-centre" className="text-brand-gold font-medium hover:text-white transition-colors uppercase text-sm tracking-wider">Design Your Comfort &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* 12. Contact CTA */}
      <section className="py-24 bg-brand-gold">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-black mb-6">Ready to Build Your Dream Space?</h2>
          <p className="text-brand-black/80 text-lg mb-10">Schedule a consultation at our Home Experience Center.</p>
          <Link href="/contact-us" className="inline-block bg-brand-black text-brand-gold px-10 py-4 font-bold uppercase tracking-wide hover:bg-white hover:text-brand-black transition-colors">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
