"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Hand } from "lucide-react";

const tourImages = [
  "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.48 (1).jpeg",
  "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.48 (2).jpeg",
  "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.48.jpeg",
  "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.49 (1).jpeg",
  "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.49 (2).jpeg",
  "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.49 (3).jpeg",
  "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.50 (1).jpeg",
  "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.50 (2).jpeg",
  "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.50.jpeg",
  "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.51 (1).jpeg",
  "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.51 (2).jpeg",
  "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.51.jpeg",
  "/assets/projects/WhatsApp Image 2026-06-26 at 15.18.52.jpeg",
  "/assets/projects/modern-residential-architects-kannur.jpeg",
  "/assets/projects/interior-designers-kannur-home.webp",
  "/assets/projects/interior-designers-kannur-office.jpeg",
  "/assets/projects/commercial-architects-kannur.jpeg"
];

export function DigitalTour() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tourImages.length);
  };

  return (
    <div className="w-full relative py-8">
      <div 
        className="relative w-full h-[60vh] md:h-[85vh] rounded-sm overflow-hidden cursor-pointer shadow-2xl border border-white/10 group bg-brand-black"
        onClick={handleNext}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={tourImages[currentIndex]}
              alt={`Experience Centre View ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay Instruction */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors pointer-events-none" />
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none text-white/80 group-hover:text-brand-gold transition-colors">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mb-2 bg-brand-black/50 p-4 rounded-full backdrop-blur-md border border-white/20"
          >
            <Hand className="w-6 h-6" />
          </motion.div>
          <span className="text-sm font-bold uppercase tracking-widest bg-brand-black/60 px-4 py-2 rounded-sm backdrop-blur-md border border-white/10">
            Click Anywhere to Advance
          </span>
        </div>

        {/* Progress Indicator */}
        <div className="absolute top-6 left-6 right-6 flex gap-1 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity">
          {tourImages.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-brand-gold' : 'bg-white/30'
              }`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
