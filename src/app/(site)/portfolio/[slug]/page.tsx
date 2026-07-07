import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { PORTFOLIO_BY_SLUG_QUERY, PORTFOLIO_QUERY } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { FadeIn } from '@/components/animations/FadeIn';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = await client.fetch(PORTFOLIO_BY_SLUG_QUERY, { slug: resolvedParams.slug });
  if (!project) return { title: 'Project Not Found' };
  
  return {
    title: `${project.title} | D-Arc Architectural Interior`,
    description: project.description || `View our ${project.title} project.`,
    openGraph: {
      images: project.mainImage ? [urlForImage(project.mainImage)?.url() || ''] : [],
    }
  };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = await client.fetch(PORTFOLIO_BY_SLUG_QUERY, { slug: resolvedParams.slug });
  
  if (!project) {
    notFound();
  }

  // Fetch related projects for internal linking
  const allProjects = await client.fetch(PORTFOLIO_QUERY);
  const relatedProjects = allProjects.filter((p: any) => p._id !== project._id).slice(0, 3);

  return (
    <div className="min-h-screen bg-brand-black pt-24 pb-20 text-brand-white">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden mb-16">
        {project.mainImage ? (
          <Image 
            src={urlForImage(project.mainImage)?.url() || '/assets/projects/placeholder.jpg'}
            alt={project.mainImage.alt || project.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-white/5 flex items-center justify-center">No Image</div>
        )}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <FadeIn direction="down">
            <span className="text-brand-gold uppercase tracking-widest font-bold mb-4 block">{project.projectType}</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">{project.title}</h1>
            <p className="text-lg text-brand-grey max-w-2xl mx-auto">{project.location}</p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <FadeIn direction="up">
              <h2 className="text-3xl font-serif font-bold mb-6">About the Project</h2>
              <div className="text-brand-grey space-y-4 text-lg leading-relaxed whitespace-pre-wrap">
                {project.description}
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-1">
            <FadeIn direction="left" className="bg-white/5 border border-white/10 p-8 rounded-sm">
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Project Details</h3>
              <ul className="space-y-4 text-brand-grey">
                {project.location && (
                  <li><strong className="text-white block mb-1">Location</strong> {project.location}</li>
                )}
                {project.area && (
                  <li><strong className="text-white block mb-1">Area</strong> {project.area}</li>
                )}
                {project.completionYear && (
                  <li><strong className="text-white block mb-1">Year Completed</strong> {project.completionYear}</li>
                )}
                {project.materials && project.materials.length > 0 && (
                  <li>
                    <strong className="text-white block mb-1">Materials</strong>
                    {project.materials.join(', ')}
                  </li>
                )}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <Link href="/contact-us" className="block text-center w-full bg-brand-gold text-brand-black font-bold uppercase tracking-widest px-6 py-4 hover:bg-white transition-colors">
                  Get an Estimate
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((img: any, i: number) => (
                <FadeIn key={img._key || i} direction="up" className="relative h-64 md:h-80 w-full overflow-hidden rounded-sm group border border-white/10">
                  <Image 
                    src={urlForImage(img)?.url() || ''}
                    alt={img.alt || `${project.title} Gallery Image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {project.faqs && project.faqs.length > 0 && (
          <div className="mb-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {project.faqs.map((faq: any, i: number) => (
                <div key={faq._key || i} className="bg-white/5 border border-white/10 p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-brand-grey">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Internal Linking - Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="pt-20 border-t border-white/10">
            <h2 className="text-3xl font-serif font-bold mb-10">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((p: any) => (
                <Link key={p._id} href={`/portfolio/${p.slug?.current || '#'}`} className="group block">
                  <div className="relative h-64 w-full mb-4 overflow-hidden rounded-sm border border-white/10">
                    {p.mainImage ? (
                      <Image 
                        src={urlForImage(p.mainImage)?.url() || ''}
                        alt={p.mainImage.alt || p.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-white/5 flex items-center justify-center">No Image</div>
                    )}
                  </div>
                  <h3 className="text-xl font-serif font-bold group-hover:text-brand-gold transition-colors">{p.title}</h3>
                  <p className="text-brand-grey text-sm">{p.projectType}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
