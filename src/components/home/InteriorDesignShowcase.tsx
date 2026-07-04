"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const galleryImages = [
  { src: "/assets/projects/luxury-interior-design-kannur.jpeg", title: "Luxury Living" },
  { src: "/assets/projects/modern-residential-architects-kannur.jpeg", title: "Modern Minimalism" },
  { src: "/assets/projects/best-construction-company-kannur.jpeg", title: "Spatial Harmony" },
];

export function InteriorDesignShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Horizontal scrolling logic
    let totalScroll = sliderRef.current!.scrollWidth - window.innerWidth;
    
    gsap.to(sliderRef.current, {
      x: () => -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: true, // 1:1 perfect native scroll mapping without delay
        start: "top top",
        end: () => "+=" + totalScroll,
        invalidateOnRefresh: true,
      }
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-brand-black text-brand-white relative">
      {/* Intro Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-4">
            02 // Interior Design
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight">
            Interior Designers in Kannur<br /> Curating Extraordinary Spaces.
          </h2>
          <p className="text-lg text-brand-grey mb-10 leading-relaxed">
            Every interior we design is a deeply personal narrative. We source premium materials, craft bespoke furniture in our Sofa Studio, and orchestrate light to transform empty rooms into breathtaking experiences.
          </p>
          <Link href="/services-in-kannur/interior-design-in-kannur" className="inline-flex items-center text-white font-semibold uppercase tracking-wider text-sm hover:text-brand-gold transition-colors group">
            Explore Interiors
            <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Horizontal Slider pinned area */}
      <div ref={containerRef} className="h-screen w-full overflow-hidden flex items-center">
        <div ref={sliderRef} className="flex gap-8 px-8 sm:px-20 min-w-max h-[70vh]">
          {galleryImages.map((img, i) => (
            <div key={i} className="relative w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] h-full rounded-sm overflow-hidden group">
              <Image 
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <span className="text-brand-gold font-semibold tracking-wider text-sm mb-2 block">0{i + 1}</span>
                <h4 className="text-3xl font-serif">{img.title}</h4>
              </div>
            </div>
          ))}
          {/* Final CTA slide inside the scroller */}
          <div className="relative w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] h-full flex flex-col items-center justify-center bg-[#111] border border-white/10 rounded-sm">
            <h4 className="text-4xl font-serif text-white mb-6 text-center">Ready to Redesign?</h4>
            <Link href="/about-us-in-kannur/experience-centre" className="px-8 py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-wide hover:bg-white transition-colors">
              Visit Sofa Studio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
