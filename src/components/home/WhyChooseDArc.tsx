"use client";

import { FadeIn } from '@/components/animations/FadeIn';

const features = [
  {
    title: "Uncompromising Quality",
    desc: "We source only the finest materials and employ masterful craftsmen to ensure every detail is perfect.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "End-to-End Execution",
    desc: "From the first architectural sketch to the final interior accessory, we handle the entire lifecycle under one roof.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "10+ Years Legacy",
    desc: "Founded in 2014, our extensive portfolio is a testament to a decade of exceeding client expectations.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden costs. We provide detailed estimates and maintain clear communication regarding budgets.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  }
];

export function WhyChooseDArc() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="text-center mb-24">
          <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-4">
            Why Choose Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-black leading-tight max-w-3xl mx-auto">
            The D-Arc Advantage.
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.15} className="bg-[#FAFAFA] p-8 rounded-sm border border-gray-100 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors shadow-sm">
                {feature.icon}
              </div>
              <h4 className="text-xl font-serif font-bold text-brand-black mb-3">{feature.title}</h4>
              <p className="text-brand-grey leading-relaxed text-sm">
                {feature.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
