import { client } from "@/sanity/lib/client";
import { SERVICES_QUERY, SERVICE_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { FAQ } from "@/components/shared/FAQ";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  const services = await client.fetch<any[]>(SERVICES_QUERY);
  return services.map((service) => ({
    slug: service.slug.current,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = await client.fetch<any>(SERVICE_BY_SLUG_QUERY, { slug: resolvedParams.slug });
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | D-Arc Architectural Interiors`,
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${service.slug.current}`,
    },
  };
}

import { Breadcrumb } from "@/components/shared/Breadcrumb";

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  const service = await client.fetch<any>(SERVICE_BY_SLUG_QUERY, { slug: resolvedParams.slug });

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <Breadcrumb />
        <Link href="/services" className="text-brand-gold hover:text-brand-black transition-colors mb-8 inline-flex items-center text-sm font-semibold uppercase tracking-wider">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Services
        </Link>
        
        <div className="max-w-4xl bg-white p-8 md:p-12 border border-gray-100 rounded-xl shadow-sm mt-6">
          <h1 className="text-4xl md:text-6xl font-serif text-brand-black mb-6">{service.title}</h1>
          <div className="w-20 h-1 bg-brand-gold mb-8"></div>
          <p className="text-lg md:text-xl text-brand-grey leading-relaxed">
            {service.content}
          </p>
          
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="text-2xl font-serif text-brand-black mb-4">Ready to start your project?</h3>
            <Link href="/contact" className="inline-block bg-brand-black text-white px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-brand-gold transition-colors">
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <FAQ />
    </main>
  );
}
