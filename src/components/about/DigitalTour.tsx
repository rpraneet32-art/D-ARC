"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Generate array of 1 to 15 image paths
const tourImages = Array.from({ length: 15 }, (_, i) => `/assets/proj-pics/${i + 1}.jpeg`);

export function DigitalTour() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tourImages.length);
  };

  return (
    <div className="w-full relative">
      <div 
        className="relative w-full min-h-[calc(100vh-6rem)] overflow-hidden cursor-pointer group bg-brand-black"
        onClick={handleNext}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 2 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 w-full h-full origin-center"
          >
            <Image
              src={tourImages[currentIndex]}
              alt={`Space ${currentIndex + 1} of 15`}
              fill
              className="object-cover"
              priority={currentIndex === 0 || currentIndex === 1} // Preload first two
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle Dark Gradient Overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
        
        {/* Progress Indicator */}
        <div className="absolute top-0 left-0 right-0 flex gap-1 pointer-events-none z-10 h-1 bg-black/20">
          {tourImages.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-full flex-1 transition-all duration-700 ${
                idx <= currentIndex ? 'bg-brand-gold' : 'bg-transparent'
              }`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
