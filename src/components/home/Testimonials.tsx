"use client";

import { FadeIn } from '@/components/animations/FadeIn';

const testimonials = [
  {
    quote: "D-Arc didn't just build our house; they engineered a masterpiece. The attention to detail and transparency throughout the process was incredible.",
    author: "Dr. Mohammed",
    location: "Kannur"
  },
  {
    quote: "The team's ability to translate our vague ideas into a stunning, highly functional commercial space was nothing short of brilliant.",
    author: "Sara & Co.",
    location: "Thalassery"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn direction="up" className="mb-24">
          <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-4">
            06 // Client Testimonials
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-black leading-tight">
            Word of Mouth.
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {testimonials.map((test, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.2} className="text-left bg-white p-12 shadow-sm border border-gray-100 rounded-sm relative">
              <svg className="w-12 h-12 text-brand-gold/20 absolute top-8 left-8" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-xl md:text-2xl text-brand-black font-serif italic mb-8 relative z-10 leading-relaxed pt-6">
                "{test.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full mr-4 flex items-center justify-center text-brand-black font-bold text-lg">
                  {test.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-brand-black font-bold uppercase tracking-wider text-sm">{test.author}</h4>
                  <p className="text-brand-grey text-sm">{test.location}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
