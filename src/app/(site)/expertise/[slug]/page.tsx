import { client } from "@/sanity/lib/client";
import { EXPERTISE_QUERY, EXPERTISE_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { FAQ } from "@/components/shared/FAQ";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { expertise as staticExpertises } from "@/data/expertise";

export async function generateStaticParams() {
  const sanityExpertises = await client.fetch<any[]>(EXPERTISE_QUERY);
  const sanitySlugs = sanityExpertises.map((item) => item.slug.current);
  const staticSlugs = staticExpertises.map((item) => item.slug);
  const allSlugs = Array.from(new Set([...sanitySlugs, ...staticSlugs]));
  return allSlugs.map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  let item = await client.fetch<any>(EXPERTISE_BY_SLUG_QUERY, { slug: resolvedParams.slug });
  
  if (!item) {
    item = staticExpertises.find((s) => s.slug === resolvedParams.slug);
  }

  if (!item) {
    return {
      title: "Expertise Not Found",
    };
  }

  const slugString = item.slug?.current || item.slug;

  const keywordMap: Record<string, string[]> = {
    'residential-architecture': ['Residential Architects Kannur', 'Custom Home Architecture'],
    'commercial-architecture': ['Commercial Architects Kannur', 'Office Interior Designers'],
    'luxury-villas': ['Luxury Villa Architects Kerala', 'Premium Villa Construction Kannur'],
    'modern-homes': ['Modern Home Architects Kannur', 'Minimalist Architecture Kerala'],
    'space-planning': ['Space Planning Experts Kannur', 'Ergonomic Interior Layouts'],
    'structural-design': ['Building Structural Designers', 'Safe Construction Practices'],
    'project-consultation': ['Architectural Consultation Kannur', 'Building Project Management']
  };

  const specificKeywords = keywordMap[slugString] || [`${item.title} Kannur`, `Best ${item.title} Kerala`, "D-Arc Expertise"];

  return {
    title: `${item.title} | D-Arc Architectural Interiors`,
    description: item.shortDescription,
    keywords: [...specificKeywords, "Architecture Specialists"],
    alternates: {
      canonical: `/expertise/${slugString}`,
    },
  };
}

import { Breadcrumb } from "@/components/shared/Breadcrumb";

export default async function ExpertiseDetailPage({ params }: Props) {
  const resolvedParams = await params;
  let item = await client.fetch<any>(EXPERTISE_BY_SLUG_QUERY, { slug: resolvedParams.slug });

  if (!item) {
    item = staticExpertises.find((s) => s.slug === resolvedParams.slug);
  }

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <Breadcrumb />
        <Link href="/expertise" className="text-brand-gold hover:text-brand-black transition-colors mb-8 inline-flex items-center text-sm font-semibold uppercase tracking-wider">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Expertise
        </Link>
        
        <div className="max-w-4xl bg-white p-8 md:p-12 border border-gray-100 rounded-xl shadow-sm mt-6">
          <h1 className="text-4xl md:text-6xl font-serif text-brand-black mb-6">{item.title}</h1>
          <div className="w-20 h-1 bg-brand-gold mb-8"></div>
          
          <div className="mb-10 w-full h-[400px] relative rounded-xl overflow-hidden shadow-md">
            <Image
              src={item.slug.includes('commercial') ? "/assets/interior/premium-commercial.png" : (item.slug.includes('villa') ? "/assets/projects/modern-villa.png" : "/assets/interior/premium-residential.png")}
              alt={`${item.title} by D-Arc in Kannur`}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-lg md:text-xl text-brand-grey leading-relaxed">
            {item.content}
          </p>
          
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="text-2xl font-serif text-brand-black mb-4">Discuss your specific requirements</h3>
            <Link href="/contact-us" className="inline-block bg-brand-black text-white px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-brand-gold transition-colors">
              Contact Our Experts
            </Link>
            <p className="mt-6 text-sm text-brand-grey">
              Explore our <Link href="/services" className="text-brand-gold hover:underline">Services</Link> or view our <Link href="/portfolio" className="text-brand-gold hover:underline">Portfolio</Link> to see our expertise in action.
            </p>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <FAQ />
    </main>
  );
}
