"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ChevronDown } from 'lucide-react';
import { Logo } from '../shared/Logo';

// Mega Menu Data
const megaMenus = {
  services: [
    { title: 'Architectural Design', href: '/services/architecture', desc: 'From residential homes to commercial buildings.' },
    { title: 'Interior Design', href: '/services/interior-design', desc: 'Stunning, functional spaces that reflect your style.' },
    { title: 'Construction', href: '/services/construction', desc: 'Meticulous attention to detail and high-quality materials.' },
    { title: 'Modular Kitchen', href: '/services/modular-kitchen', desc: 'Style + functionality for the heart of your home.' },
    { title: 'Home Renovation', href: '/services/home-renovation', desc: 'Transforming existing spaces into dream homes.' },
    { title: 'Turnkey Projects', href: '/services/turnkey-projects', desc: 'Comprehensive solutions from concept to completion.' }
  ],
  expertise: [
    { title: 'Residential', href: '/expertise/residential-architecture', desc: 'Custom home designs tailored to your lifestyle.' },
    { title: 'Commercial', href: '/expertise/commercial-architecture', desc: 'Innovative workspaces and retail environments.' },
    { title: 'Luxury Villas', href: '/expertise/luxury-villas', desc: 'High-end bespoke residences with premium finishes.' },
    { title: 'Sustainable Design', href: '/expertise/sustainable-design', desc: 'Eco-friendly architecture for a better tomorrow.' }
  ],
  company: [
    { title: 'About D-Arc', href: '/company', desc: 'Our legacy and vision.' },
    { title: 'Experience Centre', href: '/company/experience-centre', desc: 'Visit our Mattannur studio.' },
    { title: 'Careers', href: '/company/careers', desc: 'Join our growing team.' },
  ]
};

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = (menu: string) => {
    clearTimeout(timeoutId);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setActiveMenu(null);
    }, 150); // slight delay to prevent jarring closes
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-black/80 backdrop-blur-md border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
          <Logo className="scale-90 transform origin-left" />
        </Link>
        
        {/* Main Navigation */}
        <nav className="hidden md:flex h-full" onMouseLeave={handleMouseLeave}>
          <ul className="flex space-x-1 h-full items-center">
            
            {/* Services Tab */}
            <li className="h-full flex items-center relative px-4" onMouseEnter={() => handleMouseEnter('services')}>
              <Link href="/services" className={`text-sm font-medium flex items-center transition-colors ${activeMenu === 'services' || pathname.startsWith('/services') ? 'text-brand-gold' : 'text-brand-white hover:text-brand-gold'}`}>
                Services <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
              </Link>
            </li>

            {/* Expertise Tab */}
            <li className="h-full flex items-center relative px-4" onMouseEnter={() => handleMouseEnter('expertise')}>
              <Link href="/expertise" className={`text-sm font-medium flex items-center transition-colors ${activeMenu === 'expertise' || pathname.startsWith('/expertise') ? 'text-brand-gold' : 'text-brand-white hover:text-brand-gold'}`}>
                Expertise <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeMenu === 'expertise' ? 'rotate-180' : ''}`} />
              </Link>
            </li>

            {/* Portfolio Tab (No Dropdown) */}
            <li className="h-full flex items-center relative px-4" onMouseEnter={() => handleMouseEnter('portfolio')}>
              <Link href="/portfolio" className={`text-sm font-medium transition-colors ${pathname.startsWith('/portfolio') ? 'text-brand-gold' : 'text-brand-white hover:text-brand-gold'}`}>
                Portfolio
              </Link>
            </li>

            {/* Company Tab */}
            <li className="h-full flex items-center relative px-4" onMouseEnter={() => handleMouseEnter('company')}>
              <Link href="/company" className={`text-sm font-medium flex items-center transition-colors ${activeMenu === 'company' || pathname === '/company' ? 'text-brand-gold' : 'text-brand-white hover:text-brand-gold'}`}>
                Company <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeMenu === 'company' ? 'rotate-180' : ''}`} />
              </Link>
            </li>
          </ul>

          {/* Mega Menu Dropdown */}
          <AnimatePresence>
            {activeMenu && activeMenu !== 'portfolio' && (
              <motion.div
                initial={{ opacity: 0, y: 10, rotateX: -5 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: 10, rotateX: -5 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-[96px] left-0 w-full bg-brand-black/95 backdrop-blur-xl border-t border-b border-white/10 shadow-2xl overflow-hidden"
                style={{ transformOrigin: "top center" }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                  <div className="grid grid-cols-4 gap-8">
                    {/* Menu Items */}
                    <div className="col-span-3 grid grid-cols-3 gap-6">
                      {megaMenus[activeMenu as keyof typeof megaMenus].map((item, idx) => (
                        <Link key={idx} href={item.href} className="group block p-4 rounded-sm hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
                          <h4 className="text-brand-gold font-serif font-bold text-lg mb-2 group-hover:translate-x-1 transition-transform">{item.title}</h4>
                          <p className="text-brand-grey text-sm">{item.desc}</p>
                        </Link>
                      ))}
                    </div>
                    {/* Featured Callout Block */}
                    <div className="col-span-1 bg-brand-gold/10 border border-brand-gold/20 p-6 flex flex-col justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-brand-gold/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                      <h4 className="text-brand-white font-serif font-bold text-xl mb-3 relative z-10">Start Your Journey</h4>
                      <p className="text-brand-grey text-sm mb-6 relative z-10">Schedule a visit to our Experience Centre in Kannur to explore materials and designs.</p>
                      <Link href="/contact-us" className="text-brand-gold text-sm font-bold uppercase tracking-wider hover:text-white transition-colors relative z-10 flex items-center">
                        Book a Consultation <span className="ml-2 group-hover:translate-x-2 transition-transform">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="https://wa.me/917907009322" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-brand-white hover:text-brand-gold transition-colors group">
            <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            WhatsApp Us
          </a>
          {/* Refined CTA Button */}
          <Link href="/contact-us" className="relative group overflow-hidden border border-brand-gold px-6 py-2.5">
            <div className="absolute inset-0 bg-brand-gold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            <span className="relative z-10 text-brand-gold group-hover:text-brand-black text-sm font-bold tracking-wide transition-colors duration-300">
              Get Project Estimate
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}
