export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-end">
        <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
          <path d="M15 50 Q 15 10, 50 10 C 60 10, 60 50, 15 50 Z" fill="currentColor" className="text-[#D4AF37]" />
          <path d="M20 45 L 20 15 L 30 15 C 45 15, 45 45, 20 45 Z" fill="#111111" />
        </svg>
        <span className="text-3xl font-bold font-serif leading-none tracking-tight text-white">-Arc</span>
      </div>
      <span className="text-[10px] text-[#D4AF37] uppercase tracking-[0.2em] mt-1 text-center w-full block border-t border-[#D4AF37] pt-1 ml-1">
        Architectural Interior
      </span>
    </div>
  );
}
