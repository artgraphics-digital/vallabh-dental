"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const IMAGES = [
  "/hero-bg.webp",
  "/hero-slide2.webp",
  "/hero-slide3.webp"
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (isLightboxOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isLightboxOpen]);

  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  return (
    <>
      <div
        className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 ring-1 ring-slate-900/5 cursor-pointer group bg-slate-100"
        onClick={() => setIsLightboxOpen(true)}
      >
        <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {IMAGES.map((src, idx) => (
            <div key={idx} className="relative min-w-full h-full">
              <Image
                src={src}
                alt={`Clinic View ${idx + 1}`}
                width={800}
                height={600}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ width: '100%', height: '100%' }}
                priority={idx === 0}
              />
            </div>
          ))}
        </div>

        {/* Hover Click-to-Expand Badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Click to enlarge</span>
        </div>

        {/* Navigation Overlays */}
        <div className="absolute inset-y-0 left-0 flex items-center justify-center px-3 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={prevSlide}
            aria-label="Previous image"
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-slate-800 flex items-center justify-center hover:bg-white transition-all shadow-md hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center justify-center px-3 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={nextSlide}
            aria-label="Next image"
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-slate-800 flex items-center justify-center hover:bg-white transition-all shadow-md hover:scale-105"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-1.5 z-10">
          {IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-white w-6 shadow-sm' : 'bg-white/50 w-2 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
          >
            <X className="w-10 h-10" />
          </button>

          <div className="relative w-full max-w-6xl aspect-[4/3] sm:aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={IMAGES[currentIndex]}
              alt="Fullscreen Clinic View"
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </>
  );
}
