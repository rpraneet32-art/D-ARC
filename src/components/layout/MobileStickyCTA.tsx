"use client";

import Link from 'next/link';
import { MessageCircle, FileText } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function MobileStickyCTA() {
  const pathname = usePathname();
  if (pathname.startsWith('/studio')) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-black border-t border-white/10 p-4 md:hidden flex justify-between items-center gap-4">
      <a 
        href="https://wa.me/917907009322" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex-1 flex items-center justify-center bg-white/5 text-brand-white px-4 py-3 rounded-sm text-sm font-medium hover:bg-white/10 transition-colors"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        WhatsApp
      </a>
      <Link 
        href="/contact-us" 
        className="flex-1 flex items-center justify-center bg-brand-gold text-brand-black px-4 py-3 rounded-sm text-sm font-bold hover:bg-white transition-colors"
      >
        <FileText className="w-4 h-4 mr-2" />
        Estimate
      </Link>
    </div>
  );
}
