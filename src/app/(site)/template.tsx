"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  // Using a built-in framer-motion ease curve
  const customEase = "circOut";

  return (
    <div key={pathname} className="relative w-full bg-brand-black">
      
      {/* The Staggered Architectural Curtain - Hidden on Home Page */}
      {!isHomePage && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex w-full">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="h-full w-1/5 bg-brand-black border-r border-brand-gold/10 last:border-none"
              initial={{ height: "100vh" }}
              animate={{ height: "0vh" }}
              transition={{
                duration: 1.2,
                ease: customEase,
                delay: 0.1 + i * 0.08, // Stagger effect from left to right
              }}
              style={{ transformOrigin: "top" }}
            />
          ))}
        </div>
      )}

      {/* 
        The Page Content Reveal
      */}
      <motion.div
        initial={isHomePage ? { opacity: 0 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: customEase,
          delay: isHomePage ? 0 : 0.2, // Wait for curtain to start opening if not homepage
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
