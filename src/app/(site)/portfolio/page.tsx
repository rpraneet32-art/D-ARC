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
      </div>
    </div>
  );
}
