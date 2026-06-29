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

const steps = [
  {
    title: "1. Land & Foundation",
    description: "Our construction division handles everything from soil testing to laying robust foundations. We ensure absolute structural integrity from day one.",
    image: "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.52 (1).jpeg"
  },
  {
    title: "2. Precision Construction",
    description: "Utilizing top-tier materials and advanced engineering practices, we construct the superstructure with an uncompromising eye for detail.",
    image: "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.49.jpeg"
  },
  {
    title: "3. Turnkey Handover",
    description: "From plumbing to the final coat of paint and interior furnishing, we deliver a completely finished, move-in-ready home.",
    image: "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.47.jpeg"
  }
];

export function ConstructionTurnkey() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  // In Next.js with React 18, GSAP ScrollTrigger handles standard sticky CSS natively well,
  // but we can add some fade effects as images scroll in.
  useGSAP(() => {
    const images = gsap.utils.toArray('.turnkey-image');
    images.forEach((img: any) => {
      gsap.from(img, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        scrollTrigger: {
          trigger: img,
          start: "top 70%",
        }
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-[#FAFAFA] py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Left Column (Sticky) */}
          <div ref={leftColRef} className="lg:w-1/2 relative">
            <div className="sticky top-40">
              <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-4">
                03 // Construction & Turnkey
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-black mb-8 leading-tight">
                From Raw Earth to <br /> Finished Masterpiece.
              </h3>
              <p className="text-lg text-brand-grey mb-10 leading-relaxed max-w-lg">
                Why juggle multiple contractors? D-Arc provides comprehensive turnkey solutions. We take full accountability for your project, from the initial architectural draft to handing over the keys. 
              </p>
              <Link href="/services/turnkey-projects" className="px-8 py-4 bg-brand-black text-brand-gold font-bold uppercase tracking-wide hover:bg-brand-gold hover:text-brand-black transition-colors inline-block">
                View Turnkey Solutions
              </Link>
            </div>
          </div>

          {/* Right Column (Scrolling Images/Steps) */}
          <div ref={rightColRef} className="lg:w-1/2 flex flex-col gap-24">
            {steps.map((step, idx) => (
              <div key={idx} className="turnkey-image">
                <div className="relative h-[500px] w-full mb-8 rounded-sm overflow-hidden shadow-lg">
                  <Image 
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h4 className="text-2xl font-serif font-bold text-brand-black mb-4">{step.title}</h4>
                <p className="text-brand-grey text-lg leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
