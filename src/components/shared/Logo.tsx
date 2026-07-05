import Image from 'next/image';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Massively increased size using scale to meet user's requirement of the D filling the frame */}
      <div className="relative w-[320px] h-[90px] -ml-2">
        <Image
          src="/assets/logo-from-pdf-processed.png"
          alt="D-Arc Architectural Interior Logo"
          fill
          className="object-contain object-left scale-[1.35] origin-left drop-shadow-xl"
          priority
        />
      </div>
    </div>
  );
}
