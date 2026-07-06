import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata: Metadata = {
  title: "Service Locations | D-Arc Architectural Interior",
  description: "D-Arc serves multiple prime locations across the Kannur district including Kannur Town, Taliparamba, Payyanur, Thalassery, and Mattannur.",
};

const locations = [
  {
    title: "Kannur Town",
    slug: "architects-and-interior-designers-in-kannur-town",
    description: "Premium architectural and interior design services in the heart of Kannur.",
    image: "/assets/projects/modern-residential-architects-kannur.jpeg"
  },
  {
    title: "Taliparamba",
    slug: "architects-and-interior-designers-in-taliparamba",
    description: "Bespoke residential and commercial design solutions in Taliparamba.",
    image: "/assets/projects/architects-kannur-villa.webp"
  },
  {
    title: "Payyanur",
    slug: "architects-and-interior-designers-in-payyanur",
    description: "Expert architects and builders serving the Payyanur region.",
    image: "/assets/projects/interior-designers-kannur-home.webp"
  },
  {
    title: "Thalassery",
    slug: "architects-and-interior-designers-in-thalassery",
    description: "Heritage-inspired and contemporary designs for Thalassery homes.",
    image: "/assets/projects/interior-designers-kannur-office.jpeg"
  },
  {
    title: "Mattannur",
    slug: "architects-and-interior-designers-in-mattannur",
    description: "Home to our Experience Centre, serving Mattannur with full turnkey solutions.",
    image: "/assets/projects/commercial-architects-kannur.jpeg"
  }
];

export default function LocationsHubPage() {
  return (
    <div className="flex flex-col w-full bg-brand-black text-brand-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="text-center mb-20">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Our Service <span className="text-brand-gold">Locations</span>
            </h1>
            <p className="text-brand-grey text-lg max-w-2xl mx-auto">
              Proudly delivering award-winning architecture and interior design across prime locations in the Kannur district.
            </p>
          </FadeIn>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc, index) => (
            <FadeIn key={loc.slug} direction="up" delay={index * 0.1}>
              <Link href={`/locations/${loc.slug}`} className="group block bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:border-brand-gold transition-all duration-300 h-full">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={loc.image}
                    alt={loc.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-colors" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">{loc.title}</h3>
                  <p className="text-brand-grey text-sm mb-6">{loc.description}</p>
                  
                  <div className="text-brand-gold text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    View Area Details →
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Map / Reach Us */}
        <FadeIn direction="up" className="mt-24 bg-white/5 border border-white/10 p-12 text-center rounded-sm">
          <h2 className="text-3xl font-serif font-bold mb-4">Don&apos;t See Your Location?</h2>
          <p className="text-brand-grey mb-8 max-w-xl mx-auto">
            We regularly take on specialized projects across Kerala. Contact us to discuss your project requirements regardless of your location.
          </p>
          <Link href="/contact-us" className="inline-block border border-brand-gold text-brand-gold font-bold uppercase tracking-widest px-8 py-4 hover:bg-brand-gold hover:text-brand-black transition-colors">
            Contact Our Team
          </Link>
        </FadeIn>

      </div>
    </div>
  );
}
