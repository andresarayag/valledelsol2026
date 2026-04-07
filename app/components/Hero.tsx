'use client';

import { useEffect, useState } from 'react';

interface HeroProps {
  staticText: string;
  animatedWords: string[];
  animationSpeed?: number;
}

const images = [
  '/images/hero/entorno.jpg',
  '/images/hero/descanso.jpg',
  '/images/hero/matrimonio.jpg',
];

export default function Hero({
  staticText,
  animatedWords,
  animationSpeed = 3000,
}: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  // Animación de palabras
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % animatedWords.length);
        setIsVisible(true);
      }, 300);
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [animatedWords.length, animationSpeed]);

  // Slider de imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Slider de imágenes */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-6">

        <h1 className="text-3xl md:text-5xl lg:text-7xl mb-6 text-white">

  {/* Línea 1 */}
  <span className="block font-light">
    {staticText}
  </span>

  {/* Línea 2 */}
  <span className="block mt-2 font-bold">
    la magia de la{" "}
    <span
      className={`inline-block transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4"
      }`}
    >
      {animatedWords[currentIndex]}
    </span>
  </span>

</h1>

        <p className="text-lg md:text-xl mb-8">
          Naturaleza, descanso y experiencias inolvidables en Quillón
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
  href="/cabanas"
  className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold transition hover:bg-gray-200 hover:scale-105 hover:shadow-xl"
>
  Ver Cabañas
</a>

<a
  href="https://www.eventi-app.com/public-quotation/1"
  className="border border-white px-8 py-3 rounded-full text-sm font-medium transition hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl"
>
  Cotizar Evento
</a>

        </div>

      </div>

    </section>
  );
}