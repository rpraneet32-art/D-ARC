"use client";

import { FadeIn } from '@/components/animations/FadeIn';

const processes = [
  { step: "01", title: "Consultation & Briefing", desc: "We start by understanding your vision, lifestyle requirements, and site constraints." },
  { step: "02", title: "Concept & Design", desc: "Our architects draft precise blueprints and 3D visualisations for your approval." },
  { step: "03", title: "Material Selection", desc: "Experience luxury firsthand at our Experience Centre to finalize finishes and fabrics." },
  { step: "04", title: "Execution & Build", desc: "Our engineers and craftsmen bring the design to life with uncompromising quality." },
  { step: "05", title: "Handover", desc: "We deliver the completed project, meticulously cleaned and ready for you to step in." }
];

export function ProjectProcess() {
  return (
    <section className="py-32 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="text-center mb-24">
          <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-4">
            05 // The Process
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            Seamless Execution,<br /> Zero Surprises.
          </h3>
        </FadeIn>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {processes.map((proc, idx) => (
              <FadeIn key={idx} direction={idx % 2 === 0 ? "right" : "left"} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 w-full"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center z-10 text-brand-black font-bold border-4 border-brand-black hidden md:flex">
                  {proc.step}
                </div>
                <div className={`md:w-1/2 w-full ${idx % 2 === 0 ? 'md:pr-24 text-right' : 'md:pl-24 text-left'}`}>
                  <div className="md:hidden w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-black font-bold mb-4">
                    {proc.step}
                  </div>
                  <h4 className="text-3xl font-serif font-bold mb-4">{proc.title}</h4>
                  <p className="text-brand-grey text-lg">{proc.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
