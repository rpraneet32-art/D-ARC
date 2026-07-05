"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "What is the typical timeline for an architecture or interior design project in Kannur?",
    answer: "Project timelines vary significantly based on scale and complexity. A standard residential interior project in Kannur might take 3-6 months from concept to handover, while ground-up architectural projects can span 12-24 months. We provide a detailed timeline during the initial consultation."
  },
  {
    question: "Do you handle turnkey execution, or only design consulting?",
    answer: "We are a full-service firm. While we offer standalone design consulting, our specialty lies in turnkey projects across the Kannur district. This means we handle everything from the initial blueprint and material sourcing to construction, interior furnishing, and final handover, ensuring total quality control."
  },
  {
    question: "How do you determine the budget for a project?",
    answer: "Budgets are highly bespoke. After our initial site visit and design consultation, we present a detailed Bill of Quantities (BOQ). We source premium materials directly and maintain transparent pricing, ensuring you know exactly where every rupee is invested in your Kannur home."
  },
  {
    question: "Can I visit your studio to see materials before finalizing the design?",
    answer: "Absolutely. Our Experience Centre in Mattannur, Kannur, features an exclusive Sofa Studio and material library. We encourage clients to visit, touch the fabrics, and experience our craftsmanship firsthand before making any commitments."
  }
];

export function FAQ({ faqs, context }: { faqs?: FAQItem[], context?: string }) {
  
  // If context is provided, generate highly semantic dynamic FAQs
  const displayFaqs = faqs || (context ? [
    {
      question: `Who are the best architects in ${context}?`,
      answer: `D-Arc Architectural Interiors is widely recognized among the top architects and interior designers serving ${context}. Our decade of experience, award-winning luxury villa designs, and commitment to sustainable construction have established our reputation as the leading firm in the region.`
    },
    {
      question: `How much does interior design cost for a residential project in ${context}?`,
      answer: `The cost of interior design in ${context} varies significantly based on the scale of the project, material selection, and whether it involves bespoke furniture or standard modular solutions. We offer complete financial transparency and provide a detailed Bill of Quantities (BOQ) after our initial site visit, ensuring no hidden costs.`
    },
    {
      question: `Do you provide turnkey construction services in ${context}?`,
      answer: `Yes, we are a comprehensive construction company offering end-to-end turnkey solutions in ${context}. We handle everything from the initial architectural blueprint and obtaining municipal approvals to structural execution, interior furnishing, and final handover.`
    },
    {
      question: `How do I start my architecture or interior design project in ${context}?`,
      answer: `Starting your project is simple. Contact us to schedule an initial consultation and site visit in ${context}. We will discuss your vision, assess the plot, and outline a clear roadmap including timelines, budget expectations, and conceptual design directions.`
    }
  ] : defaultFaqs);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": displayFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-brand-white text-brand-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-4">FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Frequently Asked Questions</h3>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="space-y-4">
          {displayFaqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
              >
                <span className="font-serif text-xl pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "anticipate" }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 text-brand-gold"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6 text-brand-grey leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
