import { Metadata } from 'next';
import { FadeIn } from '@/components/animations/FadeIn';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from '@/components/contact/ContactForm';
export const metadata: Metadata = {
  title: "Contact Us | D-Arc Architectural Interior in Kannur",
  description: "Get in touch with D-Arc Architectural Interior. Visit our Experience Centre in Mattannur, Kannur or contact us for a free estimate.",
};

export default function ContactUsPage() {
  return (
    <div className="flex flex-col w-full bg-brand-black text-brand-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="text-center mb-20">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Let&apos;s Build <span className="text-brand-gold">Together</span>
            </h1>
            <p className="text-brand-grey text-lg max-w-2xl mx-auto">
              Ready to transform your space? Contact us today for a consultation or visit our Experience Centre in Kannur.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <FadeIn direction="left" className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold/10 p-3 rounded-full text-brand-gold mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Experience Centre</h3>
                    <p className="text-brand-grey leading-relaxed">
                      D-Arc Architectural Interior<br />
                      Mattannur, Kannur<br />
                      Kerala 670702, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold/10 p-3 rounded-full text-brand-gold mt-1">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                    <p className="text-brand-grey leading-relaxed">
                      <a href="tel:+917907009322" className="hover:text-brand-gold transition-colors">+91 79070 09322</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold/10 p-3 rounded-full text-brand-gold mt-1">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                    <p className="text-brand-grey leading-relaxed">
                      <a href="mailto:info@darcinterior.com" className="hover:text-brand-gold transition-colors">info@darcinterior.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold/10 p-3 rounded-full text-brand-gold mt-1">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Working Hours</h3>
                    <p className="text-brand-grey leading-relaxed">
                      Monday - Saturday<br />
                      9:30 AM - 6:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-8 border-t border-white/10">
              <a href="https://wa.me/917907009322" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-brand-gold text-brand-black font-bold uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors text-center">
                Chat on WhatsApp
              </a>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="right" className="bg-white/5 border border-white/10 p-8 rounded-sm">
            <h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </FadeIn>
        </div>

        <FadeIn direction="up" className="mt-20 h-[400px] w-full rounded-sm overflow-hidden border border-white/10 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.6262276535567!2d75.5683935!3d11.9310862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba436ebcc7a8a15%3A0xc6ed7e8083818e3!2sMattannur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          ></iframe>
        </FadeIn>

      </div>
    </div>
  );
}
