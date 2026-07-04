import { client } from "@/sanity/lib/client";
import { SERVICES_QUERY, SERVICE_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { FAQ } from "@/components/shared/FAQ";
import { ContentFreshness } from "@/components/shared/ContentFreshness";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { services as staticServices } from "@/data/services";

export async function generateStaticParams() {
  const sanityServices = await client.fetch<any[]>(SERVICES_QUERY);
  const sanitySlugs = sanityServices.map((service) => service.slug.current);
  const staticSlugs = staticServices.map((service) => service.slug);
  const allSlugs = Array.from(new Set([...sanitySlugs, ...staticSlugs]));
  return allSlugs.map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  let service = await client.fetch<any>(SERVICE_BY_SLUG_QUERY, { slug: resolvedParams.slug });
  
  if (!service) {
    service = staticServices.find((s) => s.slug === resolvedParams.slug);
  }

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | D-Arc Architectural Interiors`,
    description: service.shortDescription,
    keywords: [`${service.title} Kannur`, `Best ${service.title} Kerala`, "D-Arc Services", "Interior Architecture"],
    alternates: {
      canonical: `/services/${service.slug?.current || service.slug}`,
    },
  };
}

import { Breadcrumb } from "@/components/shared/Breadcrumb";

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  let service = await client.fetch<any>(SERVICE_BY_SLUG_QUERY, { slug: resolvedParams.slug });

  if (!service) {
    service = staticServices.find((s) => s.slug === resolvedParams.slug);
  }

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "D-Arc Architectural Interiors"
    },
    "areaServed": {
      "@type": "City",
      "name": "Kannur"
    },
    "description": service.shortDescription
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="container mx-auto px-6">
        <Breadcrumb />
        <Link href="/services-in-kannur" className="text-brand-gold hover:text-brand-black transition-colors mb-8 inline-flex items-center text-sm font-semibold uppercase tracking-wider">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Services
        </Link>
        
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 border border-gray-100 rounded-xl shadow-sm mt-6">
          
          {/* Section 1: Introduction (H1) */}
          <section className="mb-16">
            <h1 className="text-4xl md:text-6xl font-serif text-brand-black mb-6">{service.title} in Kannur</h1>
            <div className="w-20 h-1 bg-brand-gold mb-8"></div>
            <p className="text-xl text-brand-black font-medium leading-relaxed mb-8">
              {service.content}
            </p>
            <p className="text-lg text-brand-grey leading-relaxed mb-6">
              When it comes to executing flawless <strong className="text-brand-black">{service.title}</strong> projects, experience, local knowledge, and uncompromising quality are paramount. In a rapidly developing region like Kannur, standing out requires a delicate balance of traditional aesthetics and modern, sustainable innovation. At D-Arc, we have spent over a decade perfecting our craft, offering unparalleled expertise that transforms ordinary blueprints into extraordinary realities. Whether you are situated in Kannur Town, Taliparamba, or Mattannur, our dedicated professionals are ready to elevate your living or commercial space.
            </p>
            <p className="text-brand-grey leading-relaxed mb-6">
              Our approach to <Link href={`/services-in-kannur/${service.slug?.current || service.slug}`} className="text-brand-gold hover:underline">{service.title.toLowerCase()}</Link> is fundamentally rooted in understanding the unique lifestyle and operational requirements of our clients. We do not believe in cookie-cutter solutions. Instead, we invest significant time during the initial consultation phases to extract your exact vision. This meticulous attention to detail at the onset prevents costly delays and revisions during the execution phase, a standard of practice that has cemented our reputation as the most reliable <Link href="/locations-in-kannur/kannur-town" className="text-brand-gold hover:underline">architects in Kannur</Link>.
            </p>
          </section>

          {/* Section 2: Core Offerings (H2 + H3) */}
          <section className="mb-16 bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-3xl font-serif text-brand-black mb-6">Comprehensive {service.title} Solutions</h2>
            <p className="text-brand-grey leading-relaxed mb-6">
              To deliver truly holistic results, our {service.title} division operates in seamless synchrony with our broader architectural and construction teams. This integrated approach ensures that the design intent is preserved from the first sketch to the final coat of paint.
            </p>

            <h3 className="text-xl font-semibold text-brand-black mb-4 mt-8">Bespoke Residential {service.title}</h3>
            <p className="text-brand-grey leading-relaxed mb-6">
              Residential projects hold a special place in our portfolio. A home is a deeply personal sanctuary, and our residential <Link href="/services-in-kannur/interior-design-in-kannur" className="text-brand-gold hover:underline">interior design</Link> and construction teams treat it as such. We focus on maximizing natural light, ensuring optimal cross-ventilation, and utilizing sustainable materials that thrive in Kerala's tropical climate. By integrating smart home technologies discreetly into the architectural fabric, we provide our clients with homes that are not only visually stunning but incredibly efficient to run and maintain.
            </p>

            <h3 className="text-xl font-semibold text-brand-black mb-4 mt-8">Dynamic Commercial {service.title}</h3>
            <p className="text-brand-grey leading-relaxed mb-6">
              In the commercial sector, the quality of your physical space directly impacts brand perception, employee productivity, and customer retention. Our commercial {service.title} services are tailored to create environments that inspire. From boutique hotels in <Link href="/locations-in-kannur/taliparamba" className="text-brand-gold hover:underline">Taliparamba</Link> to high-end retail showrooms across the district, we deploy robust, high-traffic materials and striking design elements that ensure your commercial property stands out in a competitive market.
            </p>
          </section>

          {/* Section 3: The Process (H2 + H3) */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif text-brand-black mb-6">Our Proven {service.title} Methodology</h2>
            <p className="text-brand-grey leading-relaxed mb-6">
              Delivering excellence consistently requires a rigorous, proven methodology. Our 5-step process ensures absolute transparency, strict adherence to timelines, and flawless execution.
            </p>

            <h3 className="text-xl font-semibold text-brand-black mb-4 mt-8">Phase 1: Discovery & Conceptualization</h3>
            <p className="text-brand-grey leading-relaxed mb-6">
              Every successful {service.title} project begins with a deep dive into the client's requirements. We conduct comprehensive site visits, structural assessments, and budget analyses. Following this, our design team produces initial conceptual sketches and mood boards to align on the stylistic direction before any heavy technical work begins.
            </p>

            <h3 className="text-xl font-semibold text-brand-black mb-4 mt-8">Phase 2: Detailed 3D Visualization</h3>
            <p className="text-brand-grey leading-relaxed mb-6">
              We leverage industry-leading software to create hyper-realistic 3D renders of your proposed space. This critical step allows you to visually experience the outcome, tweaking color palettes, material finishes, and lighting schemes long before physical execution begins. This is particularly crucial for our <Link href="/services-in-kannur/modular-kitchen-in-kannur" className="text-brand-gold hover:underline">modular kitchen</Link> designs where spatial ergonomics must be perfect.
            </p>
            
            <h3 className="text-xl font-semibold text-brand-black mb-4 mt-8">Phase 3: Execution & Turnkey Delivery</h3>
            <p className="text-brand-grey leading-relaxed mb-6">
              As experts in <Link href="/services-in-kannur/turnkey-projects-in-kannur" className="text-brand-gold hover:underline">turnkey projects</Link>, we transition seamlessly from design to execution. Our in-house procurement team sources the finest materials, while our site supervisors ensure strict quality control at every milestone. You receive a fully finished, ready-to-use space without the stress of managing multiple uncoordinated vendors.
            </p>
          </section>

          {/* Section 4: Why Choose Us (H2) */}
          <section className="mb-16 bg-brand-black text-white p-8 md:p-12 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-serif mb-6 text-brand-gold">Why We Lead in {service.title}</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              In a crowded market, discerning clients consistently choose D-Arc for our unmatched dedication to excellence, transparency, and innovation. Here is why we are the preferred choice for {service.title} in the region.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Award-Winning Quality</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our portfolio speaks volumes. We have been recognized by industry bodies for our innovative approach to tropical modernism and sustainable architecture. We don't just follow trends; we set them. Check out our <Link href="/portfolio-in-kannur" className="text-brand-gold hover:underline">portfolio</Link> for proof.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">10+ Years Experience</h3>
                <p className="text-gray-400 leading-relaxed">
                  With over a decade of deep market experience across Kerala, we have successfully delivered over 100+ high-end residential and commercial projects. Experience means we anticipate challenges before they arise.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Transparent Pricing</h3>
                <p className="text-gray-400 leading-relaxed">
                  We believe in total financial transparency. You will receive a detailed, itemized bill of quantities (BOQ) and a crystal-clear contract. No hidden fees, no sudden price escalations, just honest business.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Dedicated Support</h3>
                <p className="text-gray-400 leading-relaxed">
                  We provide comprehensive post-handover support and maintenance guidance to ensure your investment continues to perform and look beautiful for decades to come.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 text-center">
            <h3 className="text-2xl font-serif text-brand-black mb-4">Ready to start your {service.title} project?</h3>
            <p className="text-brand-grey mb-8 max-w-2xl mx-auto">
              Partner with the leading experts in {service.title}. We are currently taking on new projects across the Kannur district and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact-us-in-kannur" className="inline-block bg-brand-black text-brand-gold px-10 py-4 font-bold uppercase tracking-wider text-sm hover:bg-brand-gold hover:text-brand-black transition-all shadow-lg hover:shadow-xl">
                Request a Consultation
              </Link>
              <Link href="/portfolio-in-kannur" className="inline-block border-2 border-brand-black text-brand-black px-10 py-4 font-bold uppercase tracking-wider text-sm hover:bg-brand-black hover:text-white transition-all">
                View Our Portfolio
              </Link>
            </div>
          </div>
          
          <ContentFreshness />
        </div>
      </div>
      
      {/* FAQ Section with Semantic Context */}
      <FAQ context={service.title} />
    </main>
  );
}
