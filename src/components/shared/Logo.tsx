import Image from 'next/image';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Reduced size to 70% of the previous massive state */}
      <div className="relative w-[300px] h-[85px] -ml-2">
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
