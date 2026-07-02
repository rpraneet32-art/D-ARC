import { targetLocations } from "@/data/locations";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { FAQ } from "@/components/shared/FAQ";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return targetLocations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const location = targetLocations.find((l) => l.slug === resolvedParams.slug);

  if (!location) {
    return { title: "Location Not Found" };
  }

  // 1 Primary Keyword, 2 Secondary
  // Title: 50-60 chars | Desc: 150-160 chars
  return {
    title: `Architects in ${location.name} | Interior Designers | D-Arc`,
    description: `Looking for top architects in ${location.name}? D-Arc provides premium interior design and construction company services near ${location.landmarks}. Contact us!`,
    keywords: [
      `Architects in ${location.name}`,
      `Interior Designers in ${location.name}`,
      `Builders in ${location.name}`,
      `Construction Company in ${location.name}`
    ],
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const resolvedParams = await params;
  const location = targetLocations.find((l) => l.slug === resolvedParams.slug);

  if (!location) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <Breadcrumb />
        
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 border border-gray-100 rounded-xl shadow-sm mt-8">
          {/* H1 with Primary Keyword */}
          <h1 className="text-4xl md:text-5xl font-serif text-brand-black mb-6">
            Architects in {location.name}
          </h1>
          <div className="w-20 h-1 bg-brand-gold mb-8"></div>
          
          <p className="text-lg md:text-xl text-brand-grey leading-relaxed mb-10">
            D-Arc Architectural Interiors is proud to be the leading choice for <strong className="text-brand-black font-medium">architects in {location.name}</strong>. {location.description} Our expertise spans from high-end residential villas to dynamic commercial workspaces across the region, particularly near key landmarks like {location.landmarks}.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              {/* H2 with Secondary Keyword */}
              <h2 className="text-2xl font-serif text-brand-black mb-4">Interior Designers in {location.name}</h2>
              <p className="text-brand-grey mb-6">
                Our award-winning team of <strong className="text-brand-black font-medium">interior designers in {location.name}</strong> specializes in creating stunning, highly functional spaces. We integrate local cultural elements with modern design trends.
              </p>
              <Link href="/services-in-kannur/interior-design-in-kannur" className="text-brand-gold font-semibold uppercase text-sm tracking-wider hover:underline flex items-center">
                Explore Interior Design
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div>
              {/* H2 with Secondary Keyword */}
              <h2 className="text-2xl font-serif text-brand-black mb-4">Construction Company in {location.name}</h2>
              <p className="text-brand-grey mb-6">
                As a trusted <strong className="text-brand-black font-medium">construction company in {location.name}</strong>, we offer turnkey solutions. From laying the foundation to the final interior touches, our builders ensure unparalleled quality.
              </p>
              <Link href="/services-in-kannur/turnkey-projects-in-kannur" className="text-brand-gold font-semibold uppercase text-sm tracking-wider hover:underline flex items-center">
                View Turnkey Solutions
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg mt-12 border border-gray-100">
            <h3 className="text-xl font-serif text-brand-black mb-4">Start your project in {location.name}</h3>
            <p className="text-brand-grey mb-6">
              Ready to build your dream home or commercial space? Partner with the best <strong className="text-brand-black font-medium">builders in {location.name}</strong>.
            </p>
            <div className="flex gap-4">
              <Link href="/contact-us-in-kannur" className="inline-block bg-brand-black text-brand-gold px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-brand-gold hover:text-brand-black transition-colors">
                Contact Us
              </Link>
              <Link href="/portfolio-in-kannur" className="inline-block border-2 border-brand-black text-brand-black px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-brand-black hover:text-white transition-colors">
                Our Portfolio
              </Link>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* FAQ Section */}
      <FAQ />
    </main>
  );
}
