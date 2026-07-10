import Image from 'next/image';
import Link from 'next/link';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative flex items-center">
        <Image
          src="/assets/logo-from-pdf-processed.png"
          alt="D-Arc Architectural Interior Logo"
          width={260}
          height={100}
          className="w-[96px] md:w-[132px] h-auto object-contain drop-shadow-sm"
          priority
          unoptimized={true}
        />
      </div>
    </Link>
  );
}
