export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-end">
        {/* Vectorized D from 003.pdf */}
        <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
          <path d="M25 90 C 75 90, 95 65, 95 45 C 95 20, 70 10, 20 20 C 10 22, -5 35, 5 45 C 10 30, 25 25, 40 25 C 60 25, 75 35, 75 50 C 75 70, 55 75, 25 75 L 25 90 Z" fill="#FFEB00" />
          <path d="M 22 25 L 35 25 L 35 90 L 22 75 Z" fill="#FFEB00" />
        </svg>
        <span className="text-[2.75rem] font-black font-sans tracking-tight text-white leading-none -ml-1">
          -Arc
        </span>
      </div>
      <div className="flex flex-col mt-[2px] w-full">
        <span className="text-[14px] text-[#FFEB00] font-normal tracking-[0.02em] leading-none mb-[2px]">
          Architectural Interior
        </span>
        <div className="w-[180px] h-[1px] bg-white"></div>
      </div>
    </div>
  );
}
