"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const premiumImages = [
  { src: '/assets/projects/architects-kannur-villa.webp', alt: 'Luxury villa designed by architects in Kannur' },
  { src: '/assets/expertise/luxury-villas-1.png', alt: 'Premium luxury villa exterior at dusk' },
  { src: '/assets/expertise/residential-architecture-1.png', alt: 'Modern residential architecture interior' },
  { src: '/assets/expertise/commercial-architecture-1.png', alt: 'High-end commercial architecture' },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % premiumImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={premiumImages[currentIndex].src}
            alt={premiumImages[currentIndex].alt}
            fill
            sizes="100vw"
            className="object-cover opacity-70"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 to-brand-black/90 z-10" />
      <div className="absolute bottom-4 left-4 z-20 text-white/50 text-xs hidden sm:block">
        {premiumImages[currentIndex].alt}
      </div>
    </div>
  );
}
