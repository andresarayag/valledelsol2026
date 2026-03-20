'use client';

import Image from 'next/image';

interface ParallaxHeroProps {
  readonly backgroundImage: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
}

export default function ParallaxHero({
  backgroundImage,
  title,
  subtitle,
  description,
}: ParallaxHeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-end justify-start pb-16 md:pb-24 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6">
          {subtitle}
        </h2>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
