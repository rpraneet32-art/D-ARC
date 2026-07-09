import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { client } from "@/sanity/lib/client";
import { PORTFOLIO_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export async function FeaturedProjects() {
  let projects: any[] = [];
  try {
    const allProjects = await client.fetch<any[]>(PORTFOLIO_QUERY);
    projects = allProjects.slice(0, 4);
  } catch (error) {
    console.error("Failed to fetch portfolio projects:", error);
  }
  
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-4">
              04 // Featured Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-black leading-tight">
              A Legacy of <br /> Engineering Excellence.
            </h3>
          </div>
          <Link href="/portfolio" className="mt-8 md:mt-0 px-8 py-4 border border-brand-black text-brand-black font-bold uppercase tracking-wide hover:bg-brand-black hover:text-white transition-colors">
            View All Projects
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.2} className="group cursor-pointer">
              <div className="relative h-[600px] w-full mb-6 overflow-hidden rounded-sm">
                <Image 
                  src={project.mainImage ? urlForImage(project.mainImage).url() : '/assets/projects/placeholder.jpeg'}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-2xl font-serif font-bold text-brand-black">{project.title}</h4>
                  <p className="text-brand-grey mt-1">{project.category} &mdash; {project.location}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-brand-grey flex items-center justify-center text-brand-grey group-hover:bg-brand-gold group-hover:text-white group-hover:border-brand-gold transition-colors">
                  <svg className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
