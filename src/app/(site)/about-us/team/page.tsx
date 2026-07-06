import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Our Team | Coming Soon | D-Arc Architectural Interior",
  description: "Meet the visionary architects, designers, and engineers behind D-Arc.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
          Our <span className="text-brand-gold">Team</span>
        </h1>
        <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
        <p className="text-brand-grey text-xl md:text-2xl mb-12">
          We are currently updating the profiles of our talented architects, interior designers, and engineers. 
          Check back soon to meet the minds behind D-Arc.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/about-us" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:border-brand-gold hover:text-brand-gold transition-colors w-full sm:w-auto">
            About Company
          </Link>
          <Link href="/contact-us" className="px-8 py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-widest hover:bg-white transition-colors w-full sm:w-auto">
            Work With Us
          </Link>
        </div>
      </div>
    </div>
  );
}
