import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata: Metadata = {
  title: "Our Services | D-Arc Architectural Interior in Kannur",
  description: "Explore our comprehensive range of services including Architectural Design, Interior Design, Construction, Turnkey Projects, and Modular Kitchens in Kannur.",
};

const services = [
  {
    title: "Architectural Design",
    slug: "architecture-in-kannur",
    description: "From visionary concepts to detailed blueprints, we design homes and commercial spaces that blend aesthetics with robust functionality.",
    image: "/assets/projects/architects-kannur-villa.webp",
  },
  {
    title: "Interior Design",
    slug: "interior-design-in-kannur",
    description: "Transforming empty spaces into inspiring environments. We specialize in luxury residential interiors, modular kitchens, and office layouts.",
    image: "/assets/projects/interior-designers-kannur-office.jpeg",
  },
  {
    title: "Construction",
    slug: "construction-in-kannur",
    description: "Our construction division brings designs to life with uncompromising quality, skilled craftsmanship, and strict adherence to timelines.",
    image: "/assets/projects/commercial-architects-kannur.jpeg",
  },
  {
    title: "Turnkey Projects",
    slug: "turnkey-projects-in-kannur",
    description: "A hassle-free experience. We manage everything from initial design and approvals to construction and final interior styling.",
    image: "/assets/projects/modern-residential-architects-kannur.jpeg",
  },
  {
    title: "Modular Kitchen",
    slug: "modular-kitchen-in-kannur",
    description: "Ergonomic, stylish, and highly functional modular kitchens built with premium hardware and finishes tailored to your cooking habits.",
    image: "/assets/projects/interior-designers-kannur-home.webp",
  },
  {
    title: "Home Renovation",
    slug: "home-renovation-in-kannur",
    description: "Breathe new life into your existing property. Our renovation services modernize your space while respecting its original character.",
    image: "/assets/projects/architects-kannur-villa.webp", // Using a placeholder for now
  }
];

export default function ServicesHubPage() {
  return (
    <div className="flex flex-col w-full bg-brand-black text-brand-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="text-center mb-20">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Our <span className="text-brand-gold">Services</span>
            </h1>
            <p className="text-brand-grey text-lg max-w-2xl mx-auto">
              Comprehensive design and build solutions under one roof. We deliver excellence at every stage of your project.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.slug} direction="up" delay={index * 0.1}>
              <Link href={`/services/${service.slug}`} className="group block bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:border-brand-gold transition-all duration-300 h-full flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-colors" />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">{service.title}</h3>
                    <p className="text-brand-grey leading-relaxed">{service.description}</p>
                  </div>
                  <div className="mt-8 flex items-center text-brand-gold text-sm font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    Learn More <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Call to Action */}
        <FadeIn direction="up" className="mt-32 text-center bg-brand-gold/10 border border-brand-gold/20 p-12 rounded-sm relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-brand-grey mb-8 max-w-xl mx-auto">
              Every project is unique. Let&apos;s discuss your specific requirements and see how we can bring your vision to life.
            </p>
            <Link href="/contact-us" className="inline-block bg-brand-gold text-brand-black font-bold uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors">
              Get Project Estimate
            </Link>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
