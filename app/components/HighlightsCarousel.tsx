'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const highlights = [
  {
    text: '24.000 m2 de espacio y áreas verdes',
    icon: '/images/iconos/areas-verdes.png',
  },
  {
    text: 'Tinajas con vista a los jardines',
    icon: '/images/iconos/tinajas.png',
  },
  {
    text: 'Piscinas para adultos y niños',
    icon: '/images/iconos/piscinas.png',
  },
  {
    text: 'Restaurant de comida típica chilena',
    icon: '/images/iconos/empanadas.png',
  },
  {
    text: 'Amplios salones de eventos',
    icon: '/images/iconos/eventos.png',
  },
  {
    text: 'Cancha de volleyball',
    icon: '/images/iconos/volleyball.png',
  },
  {
    text: 'Cancha de fútbol',
    icon: '/images/iconos/futbol.png',
  },
  {
    text: 'Cancha de tenis',
    icon: '/images/iconos/tenis.png',
  },
];

export default function HighlightsCarousel() {
  const [index, setIndex] = useState(0);

  const visibleItems = 4;
  const maxIndex = highlights.length - visibleItems;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="bg-gray-100 pt-28 pb-40">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}
        <div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-700 leading-tight">
            Lo que nos <span className="font-semibold text-gray-900">destaca</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Beneficios a su alcance
          </p>
        </div>

        {/* CARRUSEL */}
        <div>
          <div className="flex items-center gap-8">

            {/* PREV */}
            <button onClick={prev} className="text-gray-400 hover:text-gray-700 text-3xl">
              ‹
            </button>

            {/* VIEWPORT */}
            <div className="overflow-hidden w-full">

              {/* TRACK */}
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${index * 25}%)`,
                  width: `${(highlights.length / visibleItems) * 100}%`,
                }}
              >
                {highlights.map((item, i) => (
                  <div
                    key={i}
                    className="w-1/4 flex-shrink-0 flex flex-col items-center text-center px-4 group transition-all duration-300 hover:-translate-y-1"
                  >

                    {/* ICONO */}
                    <div className="w-20 h-20 mb-4 rounded-full bg-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-[#FBB03B] group-hover:shadow-xl">

                      <Image
                        src={item.icon}
                        alt={item.text}
                        width={36}
                        height={36}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />

                    </div>

                    {/* TEXTO */}
                    <p className="text-base text-gray-700 leading-snug font-medium max-w-[160px]">
                      {item.text}
                    </p>

                  </div>
                ))}
              </div>

            </div>

            {/* NEXT */}
            <button onClick={next} className="text-gray-400 hover:text-gray-700 text-3xl">
              ›
            </button>

          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-8 gap-3">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? 'bg-gray-800 scale-125' : 'bg-gray-400/50'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}