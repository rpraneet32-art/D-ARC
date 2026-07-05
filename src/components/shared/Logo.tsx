import Image from 'next/image';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Maximized size within the h-24 (96px) header */}
      <div className="relative w-[280px] h-[85px]">
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
