import { targetLocations } from "@/data/locations";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    let desc = `Looking for top architects in ${location.name}? D-Arc provides premium interior design and turnkey construction services near ${location.landmarks}.`;
    if (desc.length < 150) desc += " Contact our expert team today to begin planning your dream home.";
    if (desc.length < 150) desc += " Let us build your vision.";
    if (desc.length > 160) desc = desc.substring(0, 157) + "...";

    const keywordMap: Record<string, string[]> = {
      'kannur-town': ['Architects in Kannur Town', 'Interior Designers in Kannur Town', 'Builders in Kannur Town'],
      'kannur-city': ['Architects in Kannur City', 'Interior Designers in Kannur City', 'Construction Company Kannur City'],
      'taliparamba': ['Architects in Taliparamba', 'Interior Designers in Taliparamba', 'Turnkey Builders Taliparamba'],
      'thalassery': ['Architects in Thalassery', 'Interior Designers in Thalassery', 'Heritage Architecture Thalassery'],
      'pazhayangadi': ['Architects in Pazhayangadi', 'Construction Company Pazhayangadi'],
      'mattool': ['Architects in Mattool', 'Waterfront Villa Designers Mattool'],
      'mattannur': ['Architects in Mattannur', 'Builders in Mattannur', 'Interior Designers Mattannur'],
      'chakkarakkal': ['Architects in Chakkarakkal', 'Home Builders Chakkarakkal'],
      'iritty': ['Architects in Iritty', 'Construction Contractors Iritty'],
      'irikkur': ['Architects in Irikkur', 'Residential Builders Irikkur'],
      'sreekandapuram': ['Architects in Sreekandapuram', 'Interior Designers Sreekandapuram'],
      'panoor': ['Architects in Panoor', 'Luxury Home Builders Panoor'],
      'nadapuram': ['Architects in Nadapuram', 'Villa Designers Nadapuram'],
      'vadakara': ['Architects in Vadakara', 'Builders in Vadakara', 'Interior Designers Vadakara']
    };

    const specificKeywords = keywordMap[location.slug] || [
      `Architects in ${location.name}`,
      `Interior Designers in ${location.name}`,
      `Builders in ${location.name}`
    ];

    return {
      title: `Architects in ${location.name} | Interior Designers | D-Arc`,
      description: desc,
      keywords: specificKeywords,
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
        
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 border border-gray-100 rounded-xl shadow-sm mt-8">
          
          {/* Section 1: Introduction (H1) - IMAGE 1 */}
          <section className="mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-brand-black mb-6">
              Architects in {location.name} Creating Luxury Homes
            </h1>
            <div className="w-20 h-1 bg-brand-gold mb-8"></div>
            
            <div className="mb-10 w-full h-[400px] relative rounded-xl overflow-hidden shadow-md">
              <Image
                src="/assets/projects/modern-villa.png"
                alt={`Luxury Architecture and Interior Design in ${location.name}`}
                fill
                className="object-cover"
              />
            </div>
            
            <p className="text-lg md:text-xl text-brand-grey leading-relaxed mb-6">
              D-Arc Architectural Interiors is proud to be recognized as the premier choice for <strong className="text-brand-black font-medium">architects serving {location.name}</strong>. {location.description} Our diverse portfolio and commitment to uncompromising quality have established us as leaders in the region, particularly near key landmarks like {location.landmarks}. For over a decade, we have been transforming visions into reality by designing bespoke luxury homes, modern residential villas, and dynamic commercial workspaces that reflect the unique lifestyle and aspirations of our clients in the {location.name} region.
            </p>
            <p className="text-lg text-brand-grey leading-relaxed mb-6">
              Whether you are looking to build a contemporary masterpiece from the ground up or require meticulous renovations to an existing heritage property, our team possesses the profound local knowledge and technical expertise required to navigate the complexities of construction in Kerala. From navigating local building codes and zoning laws to optimizing floor plans for the tropical climate and monsoon seasons, being the top <Link href="/services/architecture" className="text-brand-gold hover:underline">residential architects in Kannur</Link> means we leave nothing to chance. We believe that true architectural excellence is born at the intersection of aesthetic brilliance and uncompromising functionality.
            </p>
            <p className="text-lg text-brand-grey leading-relaxed mb-6">
              The architectural landscape of {location.name} is evolving rapidly. There is a growing demand for sustainable, energy-efficient designs that seamlessly blend indoor and outdoor living spaces. We respond to this demand by implementing passive cooling strategies, maximizing natural light through expansive glazing, and integrating lush, landscaped courtyards into our core designs. When you partner with us, you are not merely hiring a draughtsman; you are collaborating with visionary thinkers dedicated to elevating your standard of living through thoughtful spatial design. Our architectural philosophy insists that the structure must respond intelligently to its immediate environment.
            </p>
          </section>

          {/* Section 2: Interior Design (H2 + H3) - IMAGE 2 */}
          <section className="mb-16 bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100">
            <h2 className="text-3xl font-serif text-brand-black mb-6">Expert Interior Designers in {location.name}</h2>
            
            <p className="text-brand-grey text-lg leading-relaxed mb-8">
              Architecture provides the canvas, but interior design brings the space to life. Our award-winning team of <strong className="text-brand-black font-medium">interior designers in {location.name}</strong> specializes in curating stunning, highly functional interiors that evoke emotion and inspire daily living. We take a holistic approach to design, ensuring that the interior aesthetics are in perfect harmony with the exterior architectural language. An expertly designed interior does not just look beautiful; it improves your psychological well-being by optimizing spatial flow and introducing harmonious color palettes.
            </p>

            <div className="mb-10 w-full h-[350px] relative rounded-xl overflow-hidden shadow-md">
              <Image
                src={`/assets/locations/interior-design-${location.slug}.jpg`}
                alt={`Premium Interior Design Services in ${location.name}`}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-2xl font-semibold text-brand-black mb-4 mt-8">Bespoke Residential Interiors</h3>
            <p className="text-brand-grey text-lg leading-relaxed mb-6">
              Your home should be a sanctuary—a deeply personal reflection of your tastes and experiences. As leading experts in <Link href="/services/interior-design" className="text-brand-gold hover:underline">luxury interior design in Kannur</Link>, we meticulously select every element, from the tactile quality of the fabrics to the precise color temperature of the ambient lighting. We specialize in custom furniture design, sourcing rare materials, and integrating smart home automation systems to create environments of unparalleled comfort and sophistication in {location.name}. Our designers work closely with you to understand the rhythms of your daily life, ensuring that every room is tailored exactly to your functional needs.
            </p>
            
            <h3 className="text-2xl font-semibold text-brand-black mb-4 mt-8">Premium Modular Kitchens</h3>
            <p className="text-brand-grey text-lg leading-relaxed mb-6">
              The kitchen is the heart of the modern Indian home. Our specialized <Link href="/services/modular-kitchen" className="text-brand-gold hover:underline">modular kitchen</Link> designs combine European minimalist aesthetics with the robust functionality required for traditional Kerala cooking. We utilize high-moisture-resistant materials (BWR grade), state-of-the-art German hardware (like Hettich or Blum), and ergonomic layouts (the classic working triangle) to ensure your kitchen in {location.name} is both beautiful and highly efficient. Whether you prefer a sleek, handle-less contemporary finish or a warm, wood-textured transitional style, our designers will tailor the space to your exact culinary requirements, ensuring cooking is a joy rather than a chore.
            </p>
          </section>

          {/* Section 3: Construction & Turnkey (H2 + H3) - IMAGE 3 */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif text-brand-black mb-6">The Most Reliable Construction Company in {location.name}</h2>
            <p className="text-brand-grey text-lg leading-relaxed mb-8">
              Executing a flawless architectural vision requires more than just great design; it demands impeccable execution. As a trusted <strong className="text-brand-black font-medium">construction company in {location.name}</strong>, D-Arc provides comprehensive turnkey solutions that eliminate the stress and fragmentation typical of traditional building processes. By keeping architecture, interior design, and construction entirely in-house, we guarantee strict quality control, transparent budgeting, and guaranteed delivery timelines. We bridge the gap between paper designs and physical reality with zero friction.
            </p>

            <div className="mb-10 w-full h-[350px] relative rounded-xl overflow-hidden shadow-md">
              <Image
                src={`/assets/locations/construction-${location.slug}.jpg`}
                alt={`Turnkey construction site progress managed by D-Arc in ${location.name}`}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-2xl font-semibold text-brand-black mb-4 mt-8">Uncompromising Building Standards</h3>
            <p className="text-brand-grey text-lg leading-relaxed mb-6">
              We utilize only premium-grade raw materials sourced directly from verified manufacturers and trusted distributors. Our structural engineers and site supervisors conduct rigorous multi-point quality checks at every phase of construction, from the initial soil testing and deep foundation laying to the final coat of weather-resistant exterior paint. As the leading <Link href="/services/turnkey-projects" className="text-brand-gold hover:underline">builders in {location.name}</Link>, we refuse to cut corners, ensuring that your property appreciates in value and stands structurally sound against the test of time and Kerala's heavy monsoons. 
            </p>

            <h3 className="text-2xl font-semibold text-brand-black mb-4 mt-8">Seamless Project Management</h3>
            <p className="text-brand-grey text-lg leading-relaxed mb-6">
              Our clients are ambitious, busy individuals who demand excellence without the daily hassle of micromanaging a construction site. We utilize advanced project management software to provide real-time updates, photographic progress reports, and financial tracking. When you choose our turnkey services, you are assigned a dedicated project manager who serves as your single point of contact throughout the entire lifecycle of the build in {location.name}. This means no running around trying to coordinate electricians, plumbers, and carpenters—we handle every logistical detail so you don't have to.
            </p>
          </section>

          {/* Section 4: Deep Dive on Services (H2 + H3) */}
          <section className="mb-16 bg-brand-black text-white p-8 md:p-12 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-serif mb-6 text-brand-gold">Our Comprehensive Service Offerings in {location.name}</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              To truly serve as the best architecture firm for {location.name}, we have developed a holistic suite of services designed to handle projects of immense scale and complexity. 
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Commercial Architecture</h3>
                <p className="text-gray-400 leading-relaxed">
                  Beyond residential projects, we design high-yield commercial spaces including retail showrooms, corporate offices, and hospitality venues. A well-designed commercial space can significantly boost employee productivity and customer retention. View our <Link href="/portfolio" className="text-brand-gold hover:underline">commercial portfolio</Link> to see our impact.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Renovation & Remodeling</h3>
                <p className="text-gray-400 leading-relaxed">
                  Transform your outdated property into a modern masterpiece. Our <Link href="/services/renovation" className="text-brand-gold hover:underline">renovation services</Link> in {location.name} involve careful structural assessments, space optimization, and complete aesthetic overhauls while preserving the emotional heritage of the original structure.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Landscape Design</h3>
                <p className="text-gray-400 leading-relaxed">
                  We seamlessly integrate the built environment with nature. Our landscape architects design stunning outdoor living areas, swimming pools, zen gardens, and customized hardscaping that enhance the overall curb appeal of your {location.name} property.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Vastu Consulting</h3>
                <p className="text-gray-400 leading-relaxed">
                  We deeply respect traditional Indian architectural principles. Our designs can integrate Vastu Shastra guidelines to ensure optimal energy flow, spatial harmony, and prosperity without compromising on modern contemporary aesthetics.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Why Choose Us (H2 + H3) */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif text-brand-black mb-6">Why D-Arc is the Top Choice for Architecture in {location.name}</h2>
            <p className="text-brand-grey text-lg leading-relaxed mb-8">
              In a crowded market, discerning clients consistently choose D-Arc for our unmatched dedication to excellence, transparency, and innovation. Here is why we are the preferred interior designers and construction company in the region.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-brand-black mb-2 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">1</span>
                  Award-Winning Design Pedigree
                </h3>
                <p className="text-brand-grey text-lg leading-relaxed pl-11">
                  Our portfolio speaks volumes. We have been recognized by industry bodies for our innovative approach to tropical modernism and sustainable architecture. We don't just follow trends; we set them.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-brand-black mb-2 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">2</span>
                  Over a Decade of Proven Experience
                </h3>
                <p className="text-brand-grey text-lg leading-relaxed pl-11">
                  With 10+ years of deep market experience in {location.name} and across Kerala, we have successfully delivered over 100+ high-end residential and commercial projects. Experience means we anticipate challenges before they arise, saving you time and money.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-brand-black mb-2 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">3</span>
                  Transparent Pricing & Contracts
                </h3>
                <p className="text-brand-grey text-lg leading-relaxed pl-11">
                  We believe in total financial transparency. Before a single brick is laid, you will receive a detailed, itemized bill of quantities (BOQ) and a crystal-clear contract. No hidden fees, no sudden price escalations, just honest business.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Client Journey (H2) */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif text-brand-black mb-6">Our Proven 5-Step Process</h2>
            <p className="text-brand-grey text-lg leading-relaxed mb-6">
              When you hire the leading architects serving {location.name}, you expect a seamless, professional experience from day one. Our structured process ensures absolute clarity and satisfaction.
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-brand-grey text-lg">
              <li><strong>Initial Consultation & Site Visit:</strong> We meet to discuss your lifestyle needs, budget, and vision, followed by a thorough analysis of your plot in {location.name}.</li>
              <li><strong>Concept Development:</strong> Our team presents initial sketches, mood boards, and 3D architectural massing to align on the design direction.</li>
              <li><strong>Detailed 3D Visualization:</strong> We create photorealistic 3D renders of your interiors and exteriors, allowing you to virtually walk through your future home.</li>
              <li><strong>Technical Drawings & Approvals:</strong> We produce exhaustive structural, electrical, and plumbing drawings, and assist in securing necessary municipal approvals.</li>
              <li><strong>Turnkey Execution & Handover:</strong> Our builders take over the site, executing the design to perfection, culminating in a rigorous final inspection and key handover.</li>
            </ol>
          </section>
          
          {/* Final CTA Section */}
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 text-center">
            <h3 className="text-3xl font-serif text-brand-black mb-4">Ready to Transform Your Space in {location.name}?</h3>
            <p className="text-brand-grey text-lg mb-8 max-w-2xl mx-auto">
              Whether you are looking to build a sprawling luxury villa or seeking the expertise of premium <strong className="text-brand-black font-medium">interior designers in {location.name}</strong>, our team is ready to listen. Let us create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact-us" className="inline-block bg-brand-black text-brand-gold px-10 py-5 font-bold uppercase tracking-wider text-sm hover:bg-brand-gold hover:text-brand-black transition-all shadow-lg hover:shadow-xl">
                Schedule a Free Consultation
              </Link>
              <Link href="/about-us" className="inline-block border-2 border-brand-black text-brand-black px-10 py-5 font-bold uppercase tracking-wider text-sm hover:bg-brand-black hover:text-white transition-all">
                Learn More About Us
              </Link>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* FAQ Section with Context injection */}
      <FAQ context={location.name} />
    </main>
  );
}
