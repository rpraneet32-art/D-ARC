import Image from 'next/image';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative w-[180px] h-[55px]">
        <Image
          src="/assets/logo-from-pdf.png"
          alt="D-Arc Architectural Interior Logo"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </div>
  );
}
