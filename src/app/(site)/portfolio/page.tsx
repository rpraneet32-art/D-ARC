import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { PORTFOLIO_QUERY } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata: Metadata = {
  title: "Portfolio | D-Arc Architectural Interior",
  description: "Explore our portfolio of luxury residential and commercial projects in Kannur and across Kerala.",
};

export const revalidate = 60; // revalidate every 60 seconds

export default async function PortfolioPage() {
  const projects = await client.fetch(PORTFOLIO_QUERY);

  return (
    <div className="min-h-screen bg-brand-black pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn direction="down">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Our <span className="text-brand-gold">Portfolio</span>
            </h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
            <p className="text-brand-grey text-lg">
              Explore our curated selection of luxury residential and commercial projects.
            </p>
          </FadeIn>
        </div>

        {projects && projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: any, index: number) => (
              <FadeIn key={project._id} direction="up" className="group relative overflow-hidden rounded-sm cursor-pointer border border-white/10">
                <Link href={`/portfolio/${project.slug?.current || '#'}`} className="block h-full">
                  <div className="relative h-80 w-full">
                    {project.mainImage ? (
                      <Image 
                        src={urlForImage(project.mainImage)?.url() || '/assets/projects/placeholder.jpg'}
                        alt={project.mainImage.alt || project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-white/5 flex items-center justify-center text-brand-grey">No Image</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-2">{project.projectType || 'Architecture'}</p>
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-brand-grey text-sm mb-4 line-clamp-2">{project.location}</p>
                    <span className="inline-block border-b border-brand-gold text-brand-gold pb-1 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">View Project</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-sm border border-white/10">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">New Projects Coming Soon</h3>
            <p className="text-brand-grey mb-8">We are currently updating our portfolio database.</p>
            <Link href="/contact-us" className="px-8 py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-widest hover:bg-white transition-colors inline-block">
              Start a Project
            </Link>
          </div>
        )}

        {/* SEO Editorial Block 1 - Image 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-32 mb-32">
          <FadeIn direction="left" className="space-y-6 text-lg text-brand-grey leading-relaxed">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Showcasing the Best Architecture Portfolio Kannur</h2>
            <p>
              A portfolio is not just a collection of images; it is a visual testament to a firm's capability, versatility, and commitment to excellence. At D-Arc Architectural Interior, we are immensely proud to present what is widely considered the Best Architecture Portfolio Kannur has to offer. Over the past decade, our dedicated team of architects and engineers has transformed the skyline and residential fabric of Northern Kerala, delivering structures that are as structurally sound as they are visually arresting.
            </p>
            <p>
              Our portfolio spans a diverse range of architectural styles, deeply rooted in the philosophy of Tropical Modernism. You will find expansive luxury villas that maximize cross-ventilation and natural daylight, critical for the humid coastal climate of Kerala. We extensively use indigenous materials like laterite stone and treated timber, seamlessly blended with contemporary elements like exposed concrete and massive glass facades. This juxtaposition of the traditional and the ultra-modern creates a timeless aesthetic that defines our signature style.
            </p>
            <p>
              Beyond residential projects, our architecture portfolio includes cutting-edge commercial spaces, boutique resorts, and institutional buildings. Each project represented here was born from a unique client vision and executed through our rigorous design-and-build methodology. We invite you to study the intricate detailing, the thoughtful spatial planning, and the seamless integration of indoor and outdoor environments that characterize every D-Arc build.
            </p>
          </FadeIn>
          <FadeIn direction="right" className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/assets/portfolio/best-architecture-portfolio-kannur.png"
              alt="Exterior view of a tropical modern villa from the Best Architecture Portfolio Kannur by D-Arc"
              fill
              className="object-cover"
            />
          </FadeIn>
        </div>

        {/* SEO Editorial Block 2 - Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 flex-col-reverse lg:flex-row-reverse">
          <FadeIn direction="right" className="space-y-6 text-lg text-brand-grey leading-relaxed">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Curating Luxury Interior Design Projects</h2>
            <p>
              The true essence of luxury is not found in sheer opulence, but in the meticulous attention to detail, personalized comfort, and flawless execution. Our Luxury Interior Design Projects demonstrate our mastery over interior spaces. As the leading design firm in Kerala, we understand that an interior space must be a sanctuary that reflects the homeowner's personality while offering unparalleled functionality.
            </p>
            <p>
              Browse through our interior portfolio to discover bespoke living rooms featuring book-matched Italian marble, custom-designed ambient lighting, and handcrafted furniture manufactured in our own facilities. We specialize in creating cohesive design narratives that flow seamlessly from room to room. Our modular kitchen designs are particularly renowned for their ergonomic efficiency and premium finishes, utilizing top-tier European hardware to ensure decades of smooth operation.
            </p>
            <p>
              Every interior project showcased here was executed entirely in-house. From the initial 3D visualization to the final placement of decor accessories, our turnkey approach ensures that the original design intent is never compromised by third-party contractors. This rigorous quality control is precisely why our Luxury Interior Design Projects consistently exceed client expectations and set new benchmarks in the industry.
            </p>
          </FadeIn>
          <FadeIn direction="left" className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/assets/portfolio/luxury-interior-design-projects.png"
              alt="Elegant living room interior showcasing bespoke furniture from our Luxury Interior Design Projects"
              fill
              className="object-cover"
            />
          </FadeIn>
        </div>

        {/* SEO Editorial Block 3 - Image 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <FadeIn direction="left" className="space-y-6 text-lg text-brand-grey leading-relaxed">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">The D-Arc Standard of Excellence</h2>
            <p>
              What sets the Best Architecture Portfolio Kannur apart is not just the final glossy photographs, but the robust engineering and project management that made those photographs possible. Every luxury villa, every commercial complex, and every modular kitchen we build is backed by a comprehensive warranty and our unwavering commitment to post-handover support. 
            </p>
            <p>
              We view our portfolio not as a catalogue of past achievements, but as a promise of future excellence. As you explore these Luxury Interior Design Projects and architectural masterpieces, envision the possibilities for your own space. We have the capability, the experience, and the passion to bring even the most ambitious visions to life. 
            </p>
            <p>
              If our design philosophy resonates with you, we encourage you to visit our Experience Centre in Mattannur. There, you can physically interact with the materials, finishes, and craftsmanship that define our work. Let our portfolio serve as the starting point for your own extraordinary project. Contact us today to schedule a consultation with our lead architects and interior designers.
            </p>
          </FadeIn>
          <FadeIn direction="right" className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/assets/portfolio/d-arc-standard-kerala.png"
              alt="Architects reviewing blueprints on site for our Luxury Interior Design Projects"
              fill
              className="object-cover"
            />
          </FadeIn>
        </div>

      </div>
    </div>
  );
}

