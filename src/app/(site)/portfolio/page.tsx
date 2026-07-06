import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Portfolio | Coming Soon | D-Arc Architectural Interior",
  description: "Our portfolio of luxury residential and commercial projects is currently being updated. Check back soon for stunning project galleries.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
          Our <span className="text-brand-gold">Portfolio</span>
        </h1>
        <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
        <p className="text-brand-grey text-xl md:text-2xl mb-12">
          We are currently curating our latest luxury residential and commercial projects for you to explore. 
          Check back soon to see our design masterpieces.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:border-brand-gold hover:text-brand-gold transition-colors w-full sm:w-auto">
            Return Home
          </Link>
          <Link href="/contact-us" className="px-8 py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-widest hover:bg-white transition-colors w-full sm:w-auto">
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
}
