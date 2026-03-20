'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CarouselItem } from './types';

interface ImageCarouselProps {
  items: CarouselItem[];
  autoplaySpeed?: number;
  slidesToShow?: number;
}

export default function ImageCarousel({
  items,
  autoplaySpeed = 2000,
  slidesToShow = 4,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate responsive slides to show
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
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, items.length - responsiveSlides);
        const next = prev + 1;
        // Loop back to start when reaching the end
        return next > maxIndex ? 0 : next;
      });
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [items.length, autoplaySpeed, isPaused, responsiveSlides]);

  return (
    <section 
      className="py-16 bg-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / responsiveSlides)}%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / responsiveSlides}%` }}
              >
                <figure className="relative aspect-square rounded-lg overflow-hidden group">
                  <Image
                    src={item.imageUrl}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-center">
                    {item.caption}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
