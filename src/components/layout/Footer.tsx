"use client";

import Link from 'next/link';
import { Logo } from '../shared/Logo';
import { MapPin, Phone, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith('/studio')) return null;
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Logo className="mb-6" />
            <p className="text-brand-grey text-sm mb-6 mt-4">
              Transforming spaces into exceptional environments that inspire and enrich lives. Founded in 2014.
            </p>
          </div>
          
          <div>
            <h4 className="text-brand-white font-serif font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about-us-in-kannur" className="text-brand-grey hover:text-brand-gold transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services-in-kannur" className="text-brand-grey hover:text-brand-gold transition-colors text-sm">Our Services</Link></li>
              <li><Link href="/portfolio-in-kannur" className="text-brand-grey hover:text-brand-gold transition-colors text-sm">Portfolio</Link></li>
              <li><Link href="/blog" className="text-brand-grey hover:text-brand-gold transition-colors text-sm">Blog</Link></li>
              <li><Link href="/contact-us-in-kannur" className="text-brand-grey hover:text-brand-gold transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-white font-serif font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-brand-grey text-sm">
                <MapPin className="w-5 h-5 mr-3 text-brand-gold shrink-0" />
                <span>Therur, Kannur, Kerala 670595, India</span>
              </li>
              <li className="flex items-center text-brand-grey text-sm">
                <Phone className="w-5 h-5 mr-3 text-brand-gold shrink-0" />
                <a href="tel:+917907009322" className="hover:text-brand-gold transition-colors">+91 7907009322</a>
              </li>
              <li className="flex items-center text-brand-grey text-sm">
                <Mail className="w-5 h-5 mr-3 text-brand-gold shrink-0" />
                <a href="mailto:info@darcinterior.com" className="hover:text-brand-gold transition-colors">info@darcinterior.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-white font-serif font-bold text-lg mb-4">Coverage Area</h4>
            <ul className="space-y-3">
              <li><Link href="/service-areas/kannur-town" className="text-brand-grey hover:text-brand-gold transition-colors text-sm">Kannur Town</Link></li>
              <li><Link href="/service-areas/taliparamba" className="text-brand-grey hover:text-brand-gold transition-colors text-sm">Taliparamba</Link></li>
              <li><Link href="/service-areas/mattannur" className="text-brand-grey hover:text-brand-gold transition-colors text-sm">Mattannur</Link></li>
              <li><Link href="/service-areas" className="text-brand-gold hover:text-white transition-colors text-sm font-medium">View all locations &rarr;</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-grey text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} D-Arc Architectural Interiors. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-brand-grey hover:text-brand-gold transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-brand-grey hover:text-brand-gold transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
