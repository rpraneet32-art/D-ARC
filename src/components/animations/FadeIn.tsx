"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function FadeIn({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const yOffset = direction === 'up' ? 50 : direction === 'down' ? -50 : 0;
    const xOffset = direction === 'left' ? 50 : direction === 'right' ? -50 : 0;

    gsap.from(container.current, {
      y: yOffset,
      x: xOffset,
      opacity: 0,
      duration: 1,
      delay: delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }, { scope: container });

  return (
    <div ref={container} className={`will-change-transform will-change-opacity ${className}`}>
      {children}
    </div>
  );
}
