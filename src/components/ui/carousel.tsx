"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  onIndexChange?: (index: number) => void;
  variant?: "peek" | "roller";
}

// Aceternity-style horizontal carousel: one full-width slide visible, smooth left→right
export const Carousel = ({ children, autoPlay = false, interval = 5000, onIndexChange, variant = "peek" }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);
  const GAP = 24; // px gap between slides
  const PEEK = 96; // px of peek (total); leaves ~48px on each side

  useEffect(() => {
    const measure = () => setWidth(containerRef.current?.clientWidth || 0);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % children.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, children.length]);

  const next = () => {
    setCurrent((p) => {
      const nextIndex = (p + 1) % children.length;
      onIndexChange?.(nextIndex);
      return nextIndex;
    });
  };
  const prev = () => {
    setCurrent((p) => {
      const prevIndex = (p - 1 + children.length) % children.length;
      onIndexChange?.(prevIndex);
      return prevIndex;
    });
  };

  const slideWidth = Math.max(0, width - PEEK);
  const targetX = -(slideWidth + GAP) * current;
  const prevIndex = (current - 1 + children.length) % children.length;
  const nextIndex = (current + 1) % children.length;

  return (
    <div className="relative w-full" ref={containerRef}>
      {variant === "peek" ? (
        <div className="overflow-hidden w-full px-12">
          <motion.div
            className="flex"
            style={{ gap: GAP }}
            drag="x"
            dragConstraints={{ left: -((children.length - 1) * (slideWidth + GAP)), right: 0 }}
            dragMomentum={false}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) next();
              else if (info.offset.x > 50) prev();
            }}
            animate={{ x: targetX }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {children.map((child, idx) => (
              <div key={idx} className="flex-shrink-0" style={{ width: slideWidth }}>
                {child}
              </div>
            ))}
          </motion.div>
        </div>
      ) : (
        // Roller: show three slides (prev / current / next)
        <div className="w-full px-6 md:px-12">
          <div className="relative w-full flex items-stretch justify-center" style={{ gap: GAP }}>
            <motion.div
              key={`prev-${prevIndex}`}
              initial={{ opacity: 0.3, scale: 0.9, x: -40 }}
              animate={{ opacity: 0.45, scale: 0.9, x: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              style={{ width: "32%", pointerEvents: "none" }}
            >
              {children[prevIndex]}
            </motion.div>

            <motion.div
              key={`current-${current}`}
              initial={{ opacity: 0.8, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              style={{ width: "36%" }}
              drag="x"
              dragMomentum={false}
              onDragEnd={(_, info) => {
                if (info.offset.x < -40) next();
                else if (info.offset.x > 40) prev();
              }}
            >
              {children[current]}
            </motion.div>

            <motion.div
              key={`next-${nextIndex}`}
              initial={{ opacity: 0.3, scale: 0.9, x: 40 }}
              animate={{ opacity: 0.45, scale: 0.9, x: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              style={{ width: "32%", pointerEvents: "none" }}
            >
              {children[nextIndex]}
            </motion.div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all shadow-md"
        aria-label="Previous"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all shadow-md"
        aria-label="Next"
      >
        →
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {children.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i);
              onIndexChange?.(i);
            }}
            className={`h-2 rounded-full transition-all ${i === current ? "bg-blue-600 w-8" : "bg-gray-400 w-2"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
