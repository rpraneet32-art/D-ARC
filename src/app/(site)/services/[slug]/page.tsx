import { client } from "@/sanity/lib/client";
import { SERVICES_QUERY, SERVICE_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { FAQ } from "@/components/shared/FAQ";
import { ContentFreshness } from "@/components/shared/ContentFreshness";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { services as staticServices } from "@/data/services";
import { getSeoOverride } from "@/actions/seo-editor";

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

  const slugString = service.slug?.current || service.slug;
  const targetPath = `/services/${slugString}`;

  const override = await getSeoOverride(targetPath);
  if (override) {
    return {
      title: override.title,
      description: override.description,
      keywords: override.keywords,
      alternates: { canonical: targetPath },
    };
  }

  const keywordMap: Record<string, string[]> = {
    'architecture': ['Residential Architects Kannur', 'Commercial Architecture Kerala'],
    'interior-design': ['Home Interior Designers Kannur', 'Custom Furniture Kannur'],
    'construction': ['Best Builders in Kannur', 'Turnkey Construction Projects'],
    'turnkey-projects': ['Turnkey Builders Kerala', 'End-to-End Construction Kannur'],
    'landscape-design': ['Landscape Architects Kannur', 'Garden Design Kerala'],
    'modular-kitchen': ['Modular Kitchen Designers Kannur', 'Premium Kitchens Kerala'],
    'home-renovation': ['Home Renovation Contractors Kannur', 'House Remodeling Kerala'],
    'structural-engineering': ['Structural Engineers Kannur', 'Safe Building Design Kerala']
  };

  const specificKeywords = keywordMap[slugString] || [`${service.title} Kannur`, `Best ${service.title} Kerala`, "D-Arc Services", "Interior Architecture"];

  return {
    title: `${service.title} | D-Arc Architectural Interiors Kannur`,
    description: service.shortDescription,
    keywords: [...specificKeywords, "Luxury Residential Architects"],
    alternates: {
      canonical: targetPath,
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

  const serviceSlugString = service.slug?.current || service.slug;

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
        <Link href="/services" className="text-brand-gold hover:text-brand-black transition-colors mb-8 inline-flex items-center text-sm font-semibold uppercase tracking-wider">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Services
        </Link>
        
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 border border-gray-100 rounded-xl shadow-sm mt-6">
          
          <h1 className="text-4xl md:text-6xl font-serif text-brand-black mb-6">Expert {service.title} in Kannur</h1>
          <div className="w-20 h-1 bg-brand-gold mb-8"></div>
          
          <div className="mb-10 w-full h-[400px] relative rounded-xl overflow-hidden shadow-md">
            <Image
              src={service.image1 || `/assets/services/${serviceSlugString}-1.png`}
              alt={`Premium ${service.title} primary image by D-Arc in Kannur`}
              fill
              className="object-cover"
            />
          </div>

          <div className="text-lg text-brand-grey leading-relaxed space-y-6 mb-12">
            <p>{service.contentPart1 || service.content}</p>
          </div>

          <div className="mb-10 w-full h-[400px] relative rounded-xl overflow-hidden shadow-md">
            <Image
              src={service.image2 || `/assets/services/${serviceSlugString}-2.png`}
              alt={`${service.title} secondary image by D-Arc in Kannur`}
              fill
              className="object-cover"
            />
          </div>

          <div className="text-lg text-brand-grey leading-relaxed space-y-6 mb-12">
            <p>{service.contentPart2}</p>
          </div>

          <div className="mb-10 w-full h-[400px] relative rounded-xl overflow-hidden shadow-md">
            <Image
              src={service.image3 || `/assets/services/${serviceSlugString}-3.png`}
              alt={`${service.title} detail image by D-Arc in Kannur`}
              fill
              className="object-cover"
            />
          </div>

          <div className="text-lg text-brand-grey leading-relaxed space-y-6 mb-16">
            <p>{service.contentPart3}</p>
          </div>

          {/* Final CTA Section */}
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 text-center">
            <h3 className="text-3xl font-serif text-brand-black mb-4">Ready to start your {service.title} project?</h3>
            <p className="text-brand-grey text-lg mb-8 max-w-2xl mx-auto">
              Partner with the leading experts in {service.title}. We are currently taking on new projects across the Kannur district and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact-us" className="inline-block bg-brand-black text-brand-gold px-10 py-5 font-bold uppercase tracking-wider text-sm hover:bg-brand-gold hover:text-brand-black transition-all shadow-lg hover:shadow-xl">
                Request a Consultation
              </Link>
              <Link href="/portfolio" className="inline-block border-2 border-brand-black text-brand-black px-10 py-5 font-bold uppercase tracking-wider text-sm hover:bg-brand-black hover:text-white transition-all">
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
