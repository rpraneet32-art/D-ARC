"use client";

import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Architecture Design',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Hello D-Arc Architectural Interiors!%0A%0A*New Project Enquiry*%0AName: ${formData.name}%0APhone: ${formData.phone}%0AService: ${formData.service}%0A%0AMessage:%0A${formData.message}`;
    
    // Replace with the actual business WhatsApp number
    const whatsappNumber = '917907009322';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-grey mb-2">Your Name</label>
          <input 
            type="text" 
            id="name" 
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-brand-black border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" 
            placeholder="John Doe" 
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-grey mb-2">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-brand-black border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" 
            placeholder="+91 98765 43210" 
          />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-brand-grey mb-2">Service Interested In</label>
        <select 
          id="service" 
          value={formData.service}
          onChange={handleChange}
          className="w-full bg-brand-black border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors appearance-none"
        >
          <option>Architecture Design</option>
          <option>Interior Design</option>
          <option>Construction</option>
          <option>Turnkey Project</option>
          <option>Modular Kitchen</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-grey mb-2">Message Details</label>
        <textarea 
          id="message" 
          rows={4} 
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-brand-black border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" 
          placeholder="Tell us about your project..."
        ></textarea>
      </div>
      <button type="submit" className="w-full bg-transparent border-2 border-brand-gold text-brand-gold font-bold uppercase tracking-widest px-8 py-4 hover:bg-brand-gold hover:text-brand-black transition-colors">
        Submit Request
      </button>
    </form>
  );
}
