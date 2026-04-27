'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const highlights = [
  { text: '24.000 m2 de espacio y áreas verdes', icon: '/images/iconos/areas-verdes.png' },
  { text: 'Tinajas con vista a los jardines', icon: '/images/iconos/tinajas.png' },
  { text: 'Piscinas para adultos y niños', icon: '/images/iconos/piscinas.png' },
  { text: 'Restaurant de comida típica chilena', icon: '/images/iconos/empanadas.png' },
  { text: 'Amplios salones de eventos', icon: '/images/iconos/eventos.png' },
  { text: 'Cancha de volleyball', icon: '/images/iconos/volleyball.png' },
  { text: 'Cancha de fútbol', icon: '/images/iconos/futbol.png' },
  { text: 'Cancha de tenis', icon: '/images/iconos/tenis.png' },
];

export default function HighlightsCarousel() {
  const [index, setIndex] = useState(0);

  const visibleItems = 4;
  const maxIndex = highlights.length - visibleItems;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

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

      {/* 🔥 CONTENEDOR CENTRADO REAL */}
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">

          {/* TEXTO */}
          <motion.div
            className="md:col-span-6"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-700 md:whitespace-nowrap">
              LO QUE NOS{" "}
              <span className="font-semibold text-gray-900">DESTACA</span>
            </h2>

            <motion.p
              className="mt-4 text-lg text-gray-600"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              BENEFICIOS A SU ALCANCE
            </motion.p>
          </motion.div>

          {/* CARRUSEL */}
          <div className="md:col-span-6">

            <div className="flex items-center gap-4">

              {/* PREV */}
              <button
                onClick={prev}
                className="text-gray-400 hover:text-gray-700 text-5xl transition"
              >
                ‹
              </button>

              {/* VIEWPORT */}
              <div className="overflow-hidden w-full py-10">

                {/* TRACK */}
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${index * (100 / visibleItems)}%)`,
                  }}
                >
                  {highlights.map((item, i) => (
                    <div
                      key={i}
                      className="w-1/2 sm:w-1/3 md:w-1/4 flex-shrink-0 flex flex-col items-center text-center px-3 group transition-all duration-300 hover:-translate-y-2"
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
                      <p className="text-sm md:text-base text-gray-700 leading-snug font-medium max-w-[150px]">
                        {item.text}
                      </p>

                    </div>
                  ))}
                </div>

              </div>

              {/* NEXT */}
              <button
                onClick={next}
                className="text-gray-400 hover:text-gray-700 text-5xl transition"
              >
                ›
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}