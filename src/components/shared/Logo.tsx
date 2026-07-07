import Image from 'next/image';
import Link from 'next/link';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      {/* Responsive sizing: sharp, fixed aspect ratio, removed negative margins */}
      <div className="relative w-[140px] h-[40px] md:w-[200px] md:h-[56px]">
        <Image
          src="/assets/logo-from-pdf-processed.png"
          alt="D-Arc Architectural Interior Logo"
          fill
          sizes="(max-width: 768px) 140px, 200px"
          className="object-contain object-left drop-shadow-sm"
          priority
          quality={100}
        />
      </div>
    </Link>
  );
}
