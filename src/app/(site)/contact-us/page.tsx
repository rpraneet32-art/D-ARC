import { Metadata } from 'next';
import Image from 'next/image';
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

        <FadeIn direction="up" className="mt-20 h-[400px] w-full rounded-sm overflow-hidden border border-white/10 relative mb-32">
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

        {/* SEO Editorial Block 1 - Image 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <FadeIn direction="left" className="space-y-6 text-lg text-brand-grey leading-relaxed">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Contact Architects in Kannur</h2>
            <p>
              The journey to building your dream home or commercial space begins with a single, crucial step: finding the right design partner. When you choose to Contact Architects in Kannur, specifically the expert team at D-Arc Architectural Interior, you are not just hiring a drafting service. You are partnering with visionaries dedicated to translating your abstract ideas into structurally sound, breathtaking realities.
            </p>
            <p>
              We understand that the initial consultation can be daunting. That is why our approach is fundamentally conversational and deeply empathetic. During our first meeting—whether at your site, over a virtual call, or in our Mattannur Experience Centre—our primary goal is to listen. We want to understand your lifestyle, your aesthetic preferences, your functional requirements, and your budget constraints. We encourage you to bring reference images, rough sketches, or simply a list of must-haves.
            </p>
            <p>
              By reaching out to us, you gain access to a multidisciplinary team of civil engineers, landscape designers, and project managers. We provide comprehensive site evaluations to assess topography, soil conditions, and sun path orientations. This preliminary data is critical for our architects to design a structure that is naturally well-lit, cross-ventilated, and seamlessly integrated into its surrounding environment. Don't leave your project to chance; contact the leading experts today.
            </p>
          </FadeIn>
          <FadeIn direction="right" className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/assets/contact/contact-architects-kannur.jpg"
              alt="Client consultation meeting to Contact Architects in Kannur at D-Arc Studio"
              fill
              className="object-cover"
            />
          </FadeIn>
        </div>

        {/* SEO Editorial Block 2 - Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 flex-col-reverse lg:flex-row-reverse">
          <FadeIn direction="right" className="space-y-6 text-lg text-brand-grey leading-relaxed">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Why You Should Hire Interior Designers Kannur</h2>
            <p>
              A beautifully designed exterior is only half the story. The interior of a building dictates how you live, work, and interact within the space. Many homeowners mistakenly believe that interior design is merely about selecting paint colors and buying furniture. When you Hire Interior Designers Kannur through D-Arc, you quickly realize it is a highly technical discipline involving spatial ergonomics, lighting psychology, and material acoustics.
            </p>
            <p>
              Our interior design process begins where the architectural blueprints end. We meticulously plan the flow of movement (the traffic patterns) within each room to ensure maximum usability without feeling cramped. We design custom cabinetry and modular kitchens that optimize storage while maintaining a sleek, minimalist aesthetic. By hiring our experts, you avoid the costly mistakes of purchasing incorrectly scaled furniture or selecting materials that deteriorate quickly in Kerala's humid climate.
            </p>
            <p>
              Furthermore, we manage the entire procurement and installation process. We have established direct relationships with premium suppliers for Italian marble, German hardware, and high-end upholstery, securing these materials at competitive rates. Our in-house craftsmen then execute the designs with surgical precision. Hiring professional interior designers is an investment that exponentially increases both the aesthetic and financial value of your property.
            </p>
          </FadeIn>
          <FadeIn direction="left" className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/assets/contact/hire-interior-designers-kannur.jpg"
              alt="Top reasons to Hire Interior Designers Kannur showcasing a beautifully executed luxury bedroom"
              fill
              className="object-cover"
            />
          </FadeIn>
        </div>

        {/* SEO Editorial Block 3 - Image 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <FadeIn direction="left" className="space-y-6 text-lg text-brand-grey leading-relaxed">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Our Commitment to Transparent Communication</h2>
            <p>
              The most common complaint in the construction and design industry is poor communication. We are actively changing this narrative. When you Contact Architects in Kannur at D-Arc, you are assigned a dedicated project manager who serves as your single point of contact. This ensures that you are never left in the dark regarding project timelines, material deliveries, or budget tracking.
            </p>
            <p>
              We utilize modern project management software and provide regular, detailed updates complete with site photographs and progress reports. Whether you are living locally in Kannur or managing your project remotely as an NRI, you will have complete visibility and control over your investment. We believe that an informed client is a happy client.
            </p>
            <p>
              Are you ready to transform your vision into reality? Our team is currently accepting new residential and commercial projects across Northern Kerala. Use the contact form above to send us your project details, or reach out directly via WhatsApp for a faster response. We look forward to hearing from you and demonstrating why we are the preferred choice when you need to Hire Interior Designers Kannur.
            </p>
          </FadeIn>
          <FadeIn direction="right" className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/assets/contact/transparent-communication-darc.jpg"
              alt="Project manager updating a client on site progress after they chose to Contact Architects in Kannur"
              fill
              className="object-cover"
            />
          </FadeIn>
        </div>

      </div>
    </div>
  );
}
