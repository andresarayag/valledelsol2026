'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // 👈 IMPORTANTE

const slides = [
  {
    title: 'Convenios con empresas',
    text: 'Ofrecemos planes especiales para empresas que buscan entregar beneficios reales a sus colaboradores. Accede a tarifas preferenciales, experiencias personalizadas y un entorno ideal para el descanso.',
    image: '/images/convenios.jpeg',
  },
  {
    title: 'Programas para Tour Operadores',
    text: 'Trabajamos junto a tour operadores para crear experiencias únicas en Valle del Sol. Diseñamos programas flexibles, atractivos y con alto valor agregado.',
    image: '/images/tour-operadores.jpeg',
  },
  {
    title: 'Beneficios para Colegios',
    text: 'Programas ideales para giras de estudio y actividades educativas en un entorno seguro, natural y enriquecedor.',
    image: '/images/colegios.jpeg',
  },
];

export default function ContactSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // AUTOPLAY
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  // SWIPE
  let startX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }

    if (endX - startX > 50) {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 TÍTULO ANIMADO */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-700 leading-tight">
            PROGRAMAS <span className="font-semibold text-gray-900">EXCLUSIVOS</span>
          </h2>

          <p className="mt-4 pb-14 text-lg text-gray-600">
            Accede a tarifas preferentes
          </p>
        </motion.div>

        {/* SLIDER */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="overflow-hidden"
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 grid md:grid-cols-2 gap-12 items-center"
              >

                {/* IMAGEN */}
                <div className="flex justify-center">
                  <div className="relative w-full max-w-[420px] aspect-square rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* TEXTO */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
                    {slide.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {slide.text}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                      Más información
                    </button>

                    <a
                      href="https://wa.me/56926035311"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition text-center"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-10 gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                current === index ? 'bg-black scale-125' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}