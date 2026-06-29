"use client";

import { FadeIn } from '@/components/animations/FadeIn';
import Image from 'next/image';
import Link from 'next/link';

const blogs = [
  {
    title: "The Rise of Minimalist Architecture in Kerala",
    category: "Architecture",
    date: "Oct 12, 2025",
    image: "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.52 (1).jpeg"
  },
  {
    title: "Selecting the Perfect Fabric for Custom Sofas",
    category: "Interior Design",
    date: "Sep 28, 2025",
    image: "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.47.jpeg"
  },
  {
    title: "Sustainable Materials for Modern Villas",
    category: "Construction",
    date: "Sep 15, 2025",
    image: "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.49.jpeg"
  }
];

export function LatestBlogs() {
  return (
    <section className="py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-4">
              08 // Journal
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-black leading-tight">
              Design Insights & News.
            </h3>
          </div>
          <Link href="/blog" className="mt-8 md:mt-0 text-brand-black font-semibold uppercase tracking-wider text-sm hover:text-brand-gold transition-colors inline-flex items-center group">
            Read All Articles
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.15} className="group cursor-pointer">
              <div className="relative h-64 w-full mb-6 overflow-hidden rounded-sm">
                <Image 
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center text-sm font-medium text-brand-grey mb-3 space-x-4">
                <span className="text-brand-gold">{blog.category}</span>
                <span>&bull;</span>
                <span>{blog.date}</span>
              </div>
              <h4 className="text-2xl font-serif font-bold text-brand-black group-hover:text-brand-gold transition-colors leading-snug">
                {blog.title}
              </h4>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
