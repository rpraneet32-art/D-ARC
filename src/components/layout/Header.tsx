"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ChevronDown, Menu, X } from 'lucide-react';
import { Logo } from '../shared/Logo';

// Mega Menu Data
const megaMenus = {
  services: [
    { title: 'Architecture', href: '/services/architecture', desc: 'From residential homes to commercial buildings.' },
    { title: 'Interior Design', href: '/services/interior-design', desc: 'Stunning, functional spaces that reflect your style.' },
    { title: 'Construction', href: '/services/construction', desc: 'Meticulous attention to detail and high-quality materials.' },
    { title: 'Turnkey Projects', href: '/services/turnkey-projects', desc: 'Comprehensive solutions from concept to completion.' },
    { title: 'Landscape Design', href: '/services/landscape-design', desc: 'Beautiful outdoor spaces and garden environments.' },
    { title: 'Modular Kitchen', href: '/services/modular-kitchen', desc: 'Style + functionality for the heart of your home.' },
    { title: 'Home Renovation', href: '/services/home-renovation', desc: 'Transforming existing spaces into dream homes.' },
    { title: 'Structural Engineering', href: '/services/structural-engineering', desc: 'Safe, sustainable, and robust structural designs.' }
  ],
  expertise: [
    { title: 'Residential Architecture', href: '/expertise/residential-architecture', desc: 'Custom home designs tailored to your lifestyle.' },
    { title: 'Commercial Architecture', href: '/expertise/commercial-architecture', desc: 'Innovative workspaces and retail environments.' },
    { title: 'Luxury Villas', href: '/expertise/luxury-villas', desc: 'High-end bespoke residences with premium finishes.' },
    { title: 'Modern Homes', href: '/expertise/modern-homes', desc: 'Sleek, minimalist designs for modern living.' },
    { title: 'Space Planning', href: '/expertise/space-planning', desc: 'Ergonomic and efficient spatial layouts.' },
    { title: 'Structural Design', href: '/expertise/structural-design', desc: 'Ensuring absolute safety and longevity.' },
    { title: 'Project Consultation', href: '/expertise/project-consultation', desc: 'Expert guidance for your construction journey.' }
  ],
  portfolio: [
    { title: 'Residential', href: '/portfolio?category=residential', desc: 'Bespoke homes and luxury villas.' },
    { title: 'Commercial', href: '/portfolio?category=commercial', desc: 'Offices, retail, and hospitality spaces.' },
    { title: 'Interior', href: '/portfolio?category=interior', desc: 'Stunning interior transformations.' },
    { title: 'Architecture', href: '/portfolio?category=architecture', desc: 'Ground-up architectural masterpieces.' },
    { title: 'Construction', href: '/portfolio?category=construction', desc: 'High-quality builds built to last.' },
    { title: 'Turnkey', href: '/portfolio?category=turnkey', desc: 'End-to-end project execution.' }
  ],
  company: [
    { title: 'About Us', href: '/about-us', desc: 'Our legacy and vision.' },
    { title: 'Experience Centre', href: '/about-us/experience-centre', desc: 'Visit our Mattannur studio.' },
    { title: 'Our Team', href: '/about-us/team', desc: 'Meet the visionaries behind D-Arc.' },
  ],
  blog: [
    { title: 'Architecture Blog', href: '/blog?category=architecture', desc: 'Insights and trends in architecture.' },
    { title: 'Interior Design Blog', href: '/blog?category=interior-design', desc: 'Tips and inspiration for your interiors.' }
  ]
};

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  let timeoutId: NodeJS.Timeout;

  if (pathname.startsWith('/studio')) return null;

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
        <div className="flex-shrink-0 hover:opacity-80 transition-opacity py-2">
          <Logo />
        </div>
        
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

            {/* Portfolio Tab */}
            <li className="h-full flex items-center relative px-4" onMouseEnter={() => handleMouseEnter('portfolio')}>
              <Link href="/portfolio" className={`text-sm font-medium flex items-center transition-colors ${activeMenu === 'portfolio' || pathname.startsWith('/portfolio') ? 'text-brand-gold' : 'text-brand-white hover:text-brand-gold'}`}>
                Portfolio <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeMenu === 'portfolio' ? 'rotate-180' : ''}`} />
              </Link>
            </li>

            {/* Company Tab */}
            <li className="h-full flex items-center relative px-4" onMouseEnter={() => handleMouseEnter('company')}>
              <Link href="/about-us" className={`text-sm font-medium flex items-center transition-colors ${activeMenu === 'about-us' || pathname === '/about-us' ? 'text-brand-gold' : 'text-brand-white hover:text-brand-gold'}`}>
                Company <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeMenu === 'about-us' ? 'rotate-180' : ''}`} />
              </Link>
            </li>

            {/* Blog Tab */}
            <li className="h-full flex items-center relative px-4" onMouseEnter={() => handleMouseEnter('blog')}>
              <Link href="/blog" className={`text-sm font-medium flex items-center transition-colors ${activeMenu === 'blog' || pathname.startsWith('/blog') ? 'text-brand-gold' : 'text-brand-white hover:text-brand-gold'}`}>
                Blog <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeMenu === 'blog' ? 'rotate-180' : ''}`} />
              </Link>
            </li>
          </ul>

          {/* Mega Menu Dropdown */}
          <AnimatePresence>
            {activeMenu && (
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
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-white p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 overflow-y-auto max-h-[70vh]">
              <div className="border-b border-white/10 pb-2">
                <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-white font-medium hover:text-brand-gold py-2">Services</Link>
                <div className="pl-4 space-y-3 mt-2 mb-2 border-l border-white/10">
                  {megaMenus.services.map((item, idx) => (
                    <Link key={idx} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-grey text-sm hover:text-brand-gold">{item.title}</Link>
                  ))}
                </div>
              </div>
              <div className="border-b border-white/10 pb-2">
                <Link href="/expertise" onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-white font-medium hover:text-brand-gold py-2">Expertise</Link>
                <div className="pl-4 space-y-3 mt-2 mb-2 border-l border-white/10">
                  {megaMenus.expertise.map((item, idx) => (
                    <Link key={idx} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-grey text-sm hover:text-brand-gold">{item.title}</Link>
                  ))}
                </div>
              </div>
              <div className="border-b border-white/10 pb-2">
                <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-white font-medium hover:text-brand-gold py-2">Portfolio</Link>
                <div className="pl-4 space-y-3 mt-2 mb-2 border-l border-white/10">
                  {megaMenus.portfolio.map((item, idx) => (
                    <Link key={idx} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-grey text-sm hover:text-brand-gold">{item.title}</Link>
                  ))}
                </div>
              </div>
              <div className="border-b border-white/10 pb-2">
                <Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-white font-medium hover:text-brand-gold py-2">Company</Link>
                <div className="pl-4 space-y-3 mt-2 mb-2 border-l border-white/10">
                  {megaMenus.company.map((item, idx) => (
                    <Link key={idx} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-grey text-sm hover:text-brand-gold">{item.title}</Link>
                  ))}
                </div>
              </div>
              <div className="border-b border-white/10 pb-2">
                <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-white font-medium hover:text-brand-gold py-2">Blog</Link>
                <div className="pl-4 space-y-3 mt-2 mb-2 border-l border-white/10">
                  {megaMenus.blog.map((item, idx) => (
                    <Link key={idx} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-grey text-sm hover:text-brand-gold">{item.title}</Link>
                  ))}
                </div>
              </div>
              <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-gold font-bold py-2">Get Project Estimate</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
