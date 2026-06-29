export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center">
        {/* Accurate D-Arc Logo SVG */}
        <svg width="60" height="50" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* The iconic sweeping arc that extends left and curves around */}
          <path d="M 45,10 C 70,10 85,25 85,45 C 85,60 75,75 45,80 L 45,70 C 65,65 75,55 75,45 C 75,30 65,20 45,20 C 30,20 15,28 0,40 C 5,20 25,10 45,10 Z" fill="#D4AF37" />
          {/* The vertical D stem with an angled cut at the bottom */}
          <path d="M 40,25 L 48,25 L 48,80 L 40,70 Z" fill="#D4AF37" />
        </svg>
        <span className="text-4xl font-bold font-sans tracking-tighter text-white -ml-2">-Arc</span>
      </div>
      <div className="flex flex-col mt-1 w-full pl-1">
        <span className="text-[13px] text-[#D4AF37] font-medium tracking-[0.05em] leading-none mb-1">
          Architectural Interior
        </span>
        <div className="w-[185px] h-[1px] bg-[#D4AF37]"></div>
      </div>
    </div>
  );
}
