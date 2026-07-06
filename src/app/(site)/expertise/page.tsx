import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata: Metadata = {
  title: "Our Expertise | Residential & Commercial Architects in Kannur",
  description: "D-Arc Architectural Interior specializes in Residential Architecture, Commercial Architecture, Luxury Villas, and Sustainable Design in Kannur.",
};

const expertiseAreas = [
  {
    title: "Residential Architecture",
    slug: "residential-architecture-in-kannur",
    description: "Designing bespoke homes that reflect your personality and cater to your daily life. From contemporary houses to traditional Kerala styles.",
    image: "/assets/projects/modern-residential-architects-kannur.jpeg",
  },
  {
    title: "Commercial Architecture",
    slug: "commercial-architecture-in-kannur",
    description: "Creating functional, striking commercial spaces that elevate your brand and provide optimal environments for business.",
    image: "/assets/projects/commercial-architects-kannur.jpeg",
  },
  {
    title: "Luxury Villas",
    slug: "luxury-villas-in-kannur",
    description: "High-end bespoke residences featuring premium materials, vast open spaces, and world-class architectural detailing.",
    image: "/assets/projects/architects-kannur-villa.webp",
  },
  {
    title: "Sustainable Design",
    slug: "sustainable-design-in-kannur",
    description: "Eco-friendly architectural practices that minimize environmental impact while maximizing natural light and energy efficiency.",
    image: "/assets/projects/interior-designers-kannur-home.webp",
  }
];

export default function ExpertiseHubPage() {
  return (
    <div className="flex flex-col w-full bg-brand-black text-brand-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="text-center mb-20">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Our <span className="text-brand-gold">Expertise</span>
            </h1>
            <p className="text-brand-grey text-lg max-w-2xl mx-auto">
              Specialized architectural and design focuses tailored to unique project requirements.
            </p>
          </FadeIn>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {expertiseAreas.map((area, index) => (
            <FadeIn key={area.slug} direction={index % 2 === 0 ? "left" : "right"} delay={0.1}>
              <Link href={`/expertise/${area.slug}`} className="group block relative h-[450px] w-full rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h2 className="text-3xl font-serif font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">{area.title}</h2>
                  <p className="text-brand-grey/90 text-sm md:text-base line-clamp-2 mb-6 group-hover:line-clamp-none transition-all">{area.description}</p>
                  
                  <div className="inline-flex items-center text-brand-gold text-sm font-bold uppercase tracking-widest">
                    Explore Portfolio <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
}
