"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const tourImages = Array.from({ length: 15 }, (_, i) => `/assets/proj-pics/${i + 1}.jpeg`);

export function DigitalTour() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track the scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map the scroll progress (0 to 1) to the image index (0 to 14)
  const imageIndex = useTransform(scrollYProgress, [0, 1], [0, tourImages.length - 1]);

  return (
    // The container height determines how much scrolling is needed (Reduced from 1500vh to 400vh for much faster scrolling)
    <div ref={containerRef} className="relative w-full h-[400vh] bg-brand-black">
      {/* The sticky element that stays in the viewport */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {tourImages.map((src, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full origin-center"
            style={{
              // Continuous cross-fading: fades in from 0 to 1, then out to 0
              opacity: useTransform(imageIndex, [index - 1, index, index + 1], [0, 1, 0]),
              // Parallax scale effect: scales down continuously as user scrolls past it
              scale: useTransform(imageIndex, [index - 1, index, index + 1], [1.1, 1, 0.95]),
            }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={src}
              alt={`Experience Centre View ${index + 1}`}
              fill
              className="object-cover"
              priority={index < 3} // Preload first few
            />
          </motion.div>
        ))}

        {/* Subtle Dark Gradient Overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
        
        {/* Progress Indicator */}
        <div className="absolute top-[80px] left-0 right-0 flex gap-1 pointer-events-none z-10 h-1 bg-black/20 px-4">
          {tourImages.map((_, idx) => (
            <motion.div 
              key={idx} 
              className="h-full flex-1 bg-brand-gold"
              style={{
                opacity: useTransform(imageIndex, (latest) => (latest >= idx ? 1 : 0.2))
              }}
            />
          ))}
        </div>

        {/* Scroll Instruction Overlay */}
        <div className="absolute bottom-10 left-0 w-full text-center z-20 pointer-events-none flex flex-col items-center justify-center">
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-brand-gold mb-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          </motion.div>
          <span className="text-white text-sm uppercase tracking-widest drop-shadow-md">Scroll to explore</span>
        </div>
      </div>
    </div>
  );
}
