import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata: Metadata = {
  title: "Architects in Kannur | Interior Designers in Kannur | D-Arc",
  description: "Looking for top architects in Kannur? D-Arc provides expert interior designers in Kannur and premium construction solutions. Contact us for a free estimate!",
  alternates: {
    canonical: "/"
  }
};

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
            src="/assets/projects/architects-kannur-villa.webp" 
            alt="Luxury villa designed by architects in Kannur" 
            fill 
            sizes="100vw"
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 to-brand-black/90" />
          <div className="absolute bottom-4 left-4 z-20 text-white/50 text-xs hidden sm:block">
            Luxury villa designed by leading architects in Kannur
          </div>
        </div>
        <FadeIn delay={0.2} direction="up" className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-white mb-6 leading-tight">
            Architects in Kannur <br />
            <span className="text-brand-gold">Creating Luxury Homes</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-grey mb-10 max-w-2xl mx-auto">
            The leading <Link href="/services-in-kannur/architecture-in-kannur" className="text-brand-gold hover:underline">architecture</Link> and <Link href="/services-in-kannur/interior-design-in-kannur" className="text-brand-gold hover:underline">interior design</Link> firm in Kannur. Transforming spaces into exceptional environments that inspire and enrich lives.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/portfolio-in-kannur" className="px-8 py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-wide hover:bg-white transition-colors">
              Explore Our Work
            </Link>
            <Link href="/contact-us-in-kannur" className="px-8 py-4 border border-brand-gold text-brand-gold font-bold uppercase tracking-wide hover:bg-brand-gold hover:text-brand-black transition-colors">
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
                Best Residential <br />
                <span className="text-brand-gold">Architects in Kannur</span>
              </h2>
              <div className="space-y-6 text-brand-grey">
                <p>
                  Founded in Mattannur, <strong className="text-white font-medium">Kannur</strong>, in 2014 by Afzal Ali, D-Arc has over <strong className="text-white font-medium">10+ years of experience</strong> at the forefront of transforming living spaces. With a deep-rooted passion for design and <Link href="/services-in-kannur/construction-in-kannur" className="text-brand-gold hover:underline">construction</Link>, we&apos;ve evolved into an <strong className="text-white font-medium">award-winning</strong> comprehensive design and build firm.
                </p>
                <p>
                  Our <strong className="text-white font-medium">proven process</strong> ensures flawless execution. Joining the team in 2023, Shuhood Bin Haris brought <strong className="text-white font-medium">certified</strong> expertise in custom furniture and interior design, further enriching our offerings. Today, D-Arc stands as a symbol of innovation, delivering exceptional projects that cater to diverse tastes and lifestyles across our prime <strong className="text-white font-medium">locations</strong>.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" className="relative h-[600px] w-full">
              <Image 
                src="/assets/projects/modern-residential-architects-kannur.jpeg"
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

      {/* 11.5 SEO Content Block */}
      <section className="py-24 bg-brand-white text-brand-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Partner with the Best Residential Architects in Kannur</h2>
          <div className="space-y-4 text-brand-black/80 text-lg">
            <p>
              When it comes to building your dream home, selecting the right team is paramount. As leading <strong>Architects in Kannur</strong>, D-Arc has a legacy of excellence in transforming spaces. Whether you are looking for custom villa designs or comprehensive turnkey solutions, our expertise as top <strong>Architects in Kannur</strong> ensures that every detail is meticulously crafted.
            </p>
            <p>
              A beautiful exterior deserves a breathtaking interior. This is why our team of dedicated <strong>Interior Designers in Kannur</strong> works seamlessly with our architectural division. From spatial planning to selecting premium materials, our <strong>Interior Designers in Kannur</strong> create environments that reflect your unique personality and lifestyle. 
            </p>
            <p>
              Our portfolio stands as a testament to our commitment to quality. As one of the <strong>Best Residential Architects in Kannur</strong>, we take pride in our ability to deliver projects on time and beyond expectations. If you are searching for reliable <strong>Architects in Kannur</strong> who understand local aesthetics and global standards, you have found the right partner.
            </p>
            <p>
              The synergy between our <strong>Architects in Kannur</strong> and our specialized <strong>Interior Designers in Kannur</strong> allows us to offer a truly integrated approach. We invite you to visit our Home Experience Centre to see why we are considered the very <strong>Best Residential Architects in Kannur</strong>. From concept to completion, let our <strong>Architects in Kannur</strong> build the luxury home you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* 12. Contact CTA */}
      <section className="py-32 bg-brand-gold">
        <FadeIn direction="up" className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-black mb-6 leading-tight">Ready to Build Your Dream Space?</h2>
          <p className="text-brand-black/80 text-xl mb-10 max-w-2xl mx-auto">Schedule a consultation at our Home Experience Center in Mattannur, Kannur.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact-us-in-kannur" className="inline-block bg-brand-black text-brand-gold px-12 py-5 font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-brand-black transition-colors">
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
