import Image from 'next/image';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Responsive sizing: smaller on mobile, reduced by 20% on all breakpoints */}
      <div className="relative w-[160px] h-[44px] md:w-[240px] md:h-[68px] -ml-2">
        <Image
          src="/assets/logo-from-pdf-processed.png"
          alt="D-Arc Architectural Interior Logo"
          fill
          sizes="(max-width: 768px) 160px, 240px"
          className="object-contain object-left drop-shadow-md"
          priority
        />
      </div>
    </div>
  );
}
