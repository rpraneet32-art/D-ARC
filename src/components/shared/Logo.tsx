import Image from 'next/image';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Responsive sizing: smaller on mobile, 300px on desktop */}
      <div className="relative w-[200px] h-[55px] md:w-[300px] md:h-[85px] -ml-2">
        <Image
          src="/assets/logo-from-pdf-processed.png"
          alt="D-Arc Architectural Interior Logo"
          fill
          className="object-contain object-left drop-shadow-md"
          priority
        />
      </div>
    </div>
  );
}
