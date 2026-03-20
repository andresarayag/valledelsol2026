'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Amenity } from './types';

interface AmenitiesCarouselProps {
  amenities: Amenity[];
  slidesToShow?: number;
  autoplaySpeed?: number;
}

export default function AmenitiesCarousel({
  amenities,
  slidesToShow = 3,
  autoplaySpeed = 2000,
}: AmenitiesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const getSlidesToShow = () => {
    if (typeof window === 'undefined') return slidesToShow;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return slidesToShow;
  };

  const [responsiveSlides, setResponsiveSlides] = useState(getSlidesToShow());

  useEffect(() => {
    const handleResize = () => {
      setResponsiveSlides(getSlidesToShow());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [slidesToShow]);

  useEffect(() => {
    if (isPaused || amenities.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, amenities.length - responsiveSlides);
        const next = prev + 1;
        return next > maxIndex ? 0 : next;
      });
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [amenities.length, autoplaySpeed, isPaused, responsiveSlides]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, amenities.length - responsiveSlides);
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, amenities.length - responsiveSlides);
      const next = prev + 1;
      return next > maxIndex ? 0 : next;
    });
  };

  if (amenities.length === 0) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / responsiveSlides)}%)`,
          }}
        >
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / responsiveSlides}%` }}
            >
              <figure className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src={amenity.imageUrl}
                  alt={amenity.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-center text-sm">
                  {amenity.caption}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 z-10 transition-colors"
        aria-label="Previous amenities"
      >
        <svg
          className="w-5 h-5 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 z-10 transition-colors"
        aria-label="Next amenities"
      >
        <svg
          className="w-5 h-5 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({
          length: Math.ceil(amenities.length / responsiveSlides),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * responsiveSlides)}
            className={`h-2 rounded-full transition-all ${
              Math.floor(currentIndex / responsiveSlides) === index
                ? 'bg-gray-800 w-8'
                : 'bg-gray-300 w-2 hover:bg-gray-400'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
