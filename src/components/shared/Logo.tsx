import Image from 'next/image';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Increased width and height for a larger logo, up to header bounds */}
      <div className="relative w-[240px] h-[70px]">
        <Image
          src="/assets/logo-from-pdf-processed.png"
          alt="D-Arc Architectural Interior Logo"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </div>
  );
}
