import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { Logo } from '../shared/Logo';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Logo />
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/services" className="text-brand-white hover:text-brand-gold transition-colors text-sm font-medium">Services</Link>
          <Link href="/expertise" className="text-brand-white hover:text-brand-gold transition-colors text-sm font-medium">Expertise</Link>
          <Link href="/portfolio" className="text-brand-white hover:text-brand-gold transition-colors text-sm font-medium">Portfolio</Link>
          <Link href="/company" className="text-brand-white hover:text-brand-gold transition-colors text-sm font-medium">Company</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://wa.me/917907009322" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-brand-white hover:text-brand-gold transition-colors">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp Us
          </a>
          <Link href="/contact-us" className="bg-brand-gold text-brand-black px-5 py-2.5 rounded-sm text-sm font-bold hover:bg-white transition-colors">
            Get Project Estimate
          </Link>
        </div>
      </div>
    </header>
  );
}
