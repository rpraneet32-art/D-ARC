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

export function ArchitectureShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax image effect
    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Text mask reveal
    gsap.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={textRef} className="order-2 lg:order-1 z-10">
            <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-4">
              01 // Architecture
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-black mb-8 leading-tight">
              Designing the Future,<br /> Respecting the Past.
            </h3>
            <p className="text-lg text-brand-grey mb-10 leading-relaxed">
              Our architectural approach blends modern engineering precision with timeless aesthetics. We create structures that stand as landmarks, from luxury residential villas to cutting-edge commercial spaces. Every line drawn is purposeful.
            </p>
            <Link href="/services/architecture-in-kannur" className="inline-flex items-center text-brand-black font-semibold uppercase tracking-wider text-sm hover:text-brand-gold transition-colors group">
              View Architecture Services
              <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 relative h-[700px] w-full overflow-hidden rounded-sm shadow-xl">
            <Image 
              ref={imageRef}
              src="/assets/projects/WhatsApp Image 2026-06-26 at 15.18.52 (1).jpeg"
              alt="D-Arc Premium Architecture Showcase"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover scale-125 origin-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
