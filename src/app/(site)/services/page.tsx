import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata: Metadata = {
  title: "Construction Services Kannur | Building Contractors Kerala | D-Arc",
  description: "Explore our comprehensive range of services including Architectural Design, Interior Design, Construction, Turnkey Projects, and Modular Kitchens in Kannur.",
  keywords: ["Construction Services Kannur", "Building Contractors Kerala", "Turnkey Construction", "Best Builders in Kannur", "Home Renovation Contractors Kannur"]
};

const services = [
  {
    title: "Architectural Design",
    slug: "architecture",
    description: "From visionary concepts to detailed blueprints, we design homes and commercial spaces that blend aesthetics with robust functionality.",
    image: "/assets/projects/architects-kannur-villa.webp",
  },
  {
    title: "Interior Design",
    slug: "interior-design",
    description: "Transforming empty spaces into inspiring environments. We specialize in luxury residential interiors, modular kitchens, and office layouts.",
    image: "/assets/proj-pics/2.jpeg",
  },
  {
    title: "Construction",
    slug: "construction",
    description: "Our construction division brings designs to life with uncompromising quality, skilled craftsmanship, and strict adherence to timelines.",
    image: "/assets/projects/best-construction-company-kannur.jpeg",
  },
  {
    title: "Turnkey Projects",
    slug: "turnkey-projects",
    description: "A hassle-free experience. We manage everything from initial design and approvals to construction and final interior styling.",
    image: "/assets/projects/modern-residential-architects-kannur.jpeg",
  },
  {
    title: "Modular Kitchen",
    slug: "modular-kitchen",
    description: "Ergonomic, stylish, and highly functional modular kitchens built with premium hardware and finishes tailored to your cooking habits.",
    image: "/assets/proj-pics/12.jpeg",
  },
  {
    title: "Home Renovation",
    slug: "home-renovation",
    description: "Breathe new life into your existing property. Our renovation services modernize your space while respecting its original character.",
    image: "/assets/proj-pics/7.jpeg",
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
              Comprehensive design and build solutions under one roof. We deliver excellence at every stage of your project as the premier Building Contractors Kerala.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => (
            <FadeIn key={service.slug} direction="up" delay={index * 0.1}>
              <Link href={`/services/${service.slug}`} className="group block bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:border-brand-gold transition-all duration-300 h-full flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} provided by D-Arc Construction Services Kannur`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

        {/* SEO Editorial Block 1 - Image 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <FadeIn direction="left" className="space-y-6 text-lg text-brand-grey leading-relaxed">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Leading Construction Services Kannur</h2>
            <p>
              When undertaking a new building project, whether residential or commercial, the selection of the right contractor determines the ultimate success of your investment. At D-Arc Architectural Interior, our Construction Services Kannur division is built on a foundation of unyielding integrity, precision engineering, and rigorous quality control. We do not just build structures; we forge legacies in concrete and steel.
            </p>
            <p>
              The Kerala landscape presents unique challenges for construction. Heavy monsoons, high humidity, and coastal proximity require a nuanced understanding of material science and structural engineering. As the most trusted Building Contractors Kerala, we employ advanced waterproofing techniques, utilize high-grade anti-corrosive steel, and strictly monitor concrete curing times to ensure maximum compressive strength. Every site is supervised by seasoned civil engineers who ensure that the execution strictly adheres to the architectural blueprints without deviation.
            </p>
            <p>
              We firmly believe that transparency is the cornerstone of trust. Our clients receive highly detailed, itemized Bills of Quantities (BOQs) before the groundbreaking ceremony. We abhor hidden costs and mid-project price escalations. Our procurement network allows us to source premium materials—from ultra-tech cement and TMT steel bars to bespoke fenestrations—at highly competitive rates, passing the value directly to our clients. 
            </p>
          </FadeIn>
          <FadeIn direction="right" className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/assets/services/construction-services-kannur.png"
              alt="Engineers overseeing a large residential build site for Construction Services Kannur"
              fill
              className="object-cover"
            />
          </FadeIn>
        </div>

        {/* SEO Editorial Block 2 - Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 flex-col-reverse lg:flex-row-reverse">
          <FadeIn direction="right" className="space-y-6 text-lg text-brand-grey leading-relaxed">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">The Premier Building Contractors Kerala for Turnkey Projects</h2>
            <p>
              Coordinating between architects, civil contractors, electricians, plumbers, carpenters, and painters can easily become a logistical nightmare for a homeowner. This fragmented approach often leads to miscommunications, budget overruns, and severe delays. D-Arc eliminates this friction by offering comprehensive Turnkey Construction solutions. As the leading Building Contractors Kerala, we act as your single point of contact and accountability from the initial design phase all the way to handing over the keys.
            </p>
            <p>
              Our turnkey approach means that our architectural design team works in perfect synergy with our on-site construction managers and our interior design specialists. Because we manage the entire lifecycle of the project, we can foresee and mitigate potential clashes between the structural framework and the interior requirements (like HVAC ducting or customized lighting niches) long before they become expensive problems on site.
            </p>
            <p>
              This streamlined, in-house synergy translates into significantly faster project completion times and a much higher quality of finish. Whether it is a luxury tropical villa overlooking the backwaters or a cutting-edge commercial IT space in the city, our dedicated project management protocols ensure that timelines are strictly met and quality is never compromised. We are redefining what it means to offer premium Construction Services Kannur by prioritizing client peace of mind above all else.
            </p>
          </FadeIn>
          <FadeIn direction="left" className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/assets/services/turnkey-building-contractors-kerala.png"
              alt="Completed turnkey luxury project showcasing seamless interior and exterior transition by Building Contractors Kerala"
              fill
              className="object-cover"
            />
          </FadeIn>
        </div>

        {/* Call to Action */}
        <FadeIn direction="up" className="mt-20 text-center bg-brand-gold/10 border border-brand-gold/20 p-12 rounded-sm relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to Start Building?</h2>
            <p className="text-brand-grey mb-8 max-w-xl mx-auto text-lg leading-relaxed">
              Partner with the top Building Contractors Kerala. Whether you require bespoke architectural design or end-to-end turnkey Construction Services Kannur, our team is ready to execute your vision flawlessly.
            </p>
            <Link href="/contact-us" className="inline-block bg-brand-gold text-brand-black font-bold uppercase tracking-widest px-10 py-5 hover:bg-white transition-colors">
              Get Your Free Estimate
            </Link>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}

