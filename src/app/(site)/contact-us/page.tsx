"use client";

import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';

import { Breadcrumb } from "@/components/shared/Breadcrumb";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Architecture',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // PRD 9.1.3: WhatsApp Pre-fill Integration
    const phoneNumber = "917907009322"; // Primary D-Arc WhatsApp
    const text = `Hi D-Arc team! I would like to get a project estimate.
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Project Type:* ${formData.projectType}
*Message:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    // Automatically redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "ContactPoint",
        "telephone": "+917907009322",
        "contactType": "customer support",
        "areaServed": "IN",
        "availableLanguage": ["en", "ml"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "D-Arc Architectural Interiors",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Therur",
        "addressLocality": "Kannur",
        "addressRegion": "Kerala",
        "postalCode": "670795",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.9329711,
        "longitude": 75.5670868
      }
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#FAFAFA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />
        <FadeIn direction="up" className="text-center mb-24">
          <h1 className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-4">
            Get Project Estimate
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-black leading-tight">
            Let's build your vision.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <FadeIn direction="left" className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-brand-black mb-8">Send an Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-grey mb-2">Full Name *</label>
                <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-gold transition-colors bg-transparent" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-grey mb-2">Email Address *</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-gold transition-colors bg-transparent" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-grey mb-2">Phone Number *</label>
                  <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-gold transition-colors bg-transparent" />
                </div>
              </div>
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-brand-grey mb-2">Project Type</label>
                <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-gold transition-colors bg-transparent">
                  <option value="Architecture">Architecture</option>
                  <option value="Interior Design">Interior Design</option>
                  <option value="Construction">Construction</option>
                  <option value="Turnkey">Turnkey Project</option>
                  <option value="Sofa Studio">Sofa Customization</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-grey mb-2">Project Details</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-gold transition-colors bg-transparent resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-black text-brand-gold font-bold uppercase tracking-wide py-5 hover:bg-brand-gold hover:text-brand-black transition-colors mt-8">
                Submit & Connect via WhatsApp
              </button>
            </form>
          </FadeIn>

          {/* Contact Details & Map */}
          <FadeIn direction="right" className="flex flex-col gap-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-brand-black mb-6">Contact Information</h3>
              <div className="space-y-4 text-brand-grey">
                <p><strong className="text-brand-black">Head Office:</strong> Therur, Kannur, Kerala, India 670795</p>
                <p><strong className="text-brand-black">Phone:</strong> +91 79070 09322</p>
                <p><strong className="text-brand-black">Email:</strong> info@darc.com</p>
                <p><strong className="text-brand-black">Visit Us:</strong> Explore our <Link href="/about-us-in-kannur/experience-centre" className="text-brand-gold hover:underline">Home Experience Centre</Link></p>
                <p><strong className="text-brand-black">Business Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div className="w-full h-80 bg-gray-200 relative overflow-hidden rounded-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.9300588632665!2d75.5670868!3d11.9329711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4353dd71abdbf%3A0x6e9f1680d21e8e52!2sD-ARC%20Architectural%20Interiors!5e0!3m2!1sen!2sin!4v1717616140081!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="D-Arc Location Map"
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
