import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';

// Import all the newly created homepage sections
import { ArchitectureShowcase } from '@/components/home/ArchitectureShowcase';
import { InteriorDesignShowcase } from '@/components/home/InteriorDesignShowcase';
import { ConstructionTurnkey } from '@/components/home/ConstructionTurnkey';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { ProjectProcess } from '@/components/home/ProjectProcess';
import { WhyChooseDArc } from '@/components/home/WhyChooseDArc';
import { Testimonials } from '@/components/home/Testimonials';
import { CoverageAreas } from '@/components/home/CoverageAreas';
import { LatestBlogs } from '@/components/home/LatestBlogs';
import { MobileStickyCTA } from '@/components/layout/MobileStickyCTA';
import { FAQ } from '@/components/shared/FAQ';

export default function Home() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "D-Arc Architectural Interiors",
      "image": "https://www.darcinterior.com/og-image.jpg",
      "url": "https://www.darcinterior.com",
      "telephone": "+917907009322",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Therur",
        "addressLocality": "Kannur",
        "addressRegion": "Kerala",
        "postalCode": "670795",
        "addressCountry": "IN"
      },
      "priceRange": "$$$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "125"
      }
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* 1. Hero */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/projects/WhatsApp Image 2026-06-26 at 15.18.52 (1).jpeg" 
            alt="D-Arc Home Experience Centre Exterior" 
            fill 
            sizes="100vw"
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 to-brand-black/90" />
        </div>
        <FadeIn delay={0.2} direction="up" className="relative z-10 text-center max-w-4xl px-4">
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
        </FadeIn>
      </section>

      {/* 2. Brand Introduction */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
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
            </FadeIn>
            <FadeIn direction="right" className="relative h-[600px] w-full">
              <Image 
                src="/assets/projects/WhatsApp Image 2026-06-26 at 15.18.49.jpeg"
                alt="D-Arc Showroom Interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-sm transition-all duration-700"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Architecture Showcase */}
      <ArchitectureShowcase />

      {/* 4. Interior Design Showcase */}
      <InteriorDesignShowcase />

      {/* 5. Construction & Turnkey Solutions */}
      <ConstructionTurnkey />

      {/* FAQ Section */}
      <FAQ />

      {/* 6. Featured Projects */}
      <FeaturedProjects />

      {/* 7. Project Process */}
      <ProjectProcess />

      {/* 8. Why Choose D-Arc */}
      <WhyChooseDArc />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. Coverage Areas */}
      <CoverageAreas />

      {/* 11. Latest Blogs */}
      <LatestBlogs />

      {/* 12. Contact CTA */}
      <section className="py-32 bg-brand-gold">
        <FadeIn direction="up" className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-black mb-6 leading-tight">Ready to Build Your Dream Space?</h2>
          <p className="text-brand-black/80 text-xl mb-10 max-w-2xl mx-auto">Schedule a consultation at our Home Experience Center in Mattannur, Kannur.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact-us" className="inline-block bg-brand-black text-brand-gold px-12 py-5 font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-brand-black transition-colors">
              Contact Us Today
            </Link>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-brand-black text-brand-black px-12 py-5 font-bold uppercase tracking-wider text-sm hover:bg-brand-black hover:text-white transition-colors">
              WhatsApp Us
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
