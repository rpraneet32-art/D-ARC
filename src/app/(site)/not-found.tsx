import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-brand-black">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
        <FadeIn direction="up">
          <h1 className="font-serif text-[150px] md:text-[200px] leading-none font-bold text-brand-gold/10 relative">
            404
            <span className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl text-brand-gold tracking-widest font-sans">
              NOT FOUND
            </span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="text-brand-grey text-lg md:text-xl mt-8 mb-12 max-w-xl mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <Link 
            href="/"
            className="inline-flex items-center text-brand-gold font-bold uppercase tracking-wider text-sm hover:text-brand-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Return to Homepage
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
