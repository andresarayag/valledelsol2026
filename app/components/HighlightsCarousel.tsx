'use client';

import { motion } from 'framer-motion';
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
  const [visibleItems, setVisibleItems] = useState(4);

  const maxIndex = Math.max(0, highlights.length - visibleItems);

  /* CANTIDAD DE ELEMENTOS SEGÚN PANTALLA */
  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;

      if (width < 480) {
        setVisibleItems(1);
      } else if (width < 768) {
        setVisibleItems(2);
      } else if (width < 1024) {
        setVisibleItems(3);
      } else {
        setVisibleItems(4);
      }
    };

    updateVisibleItems();

    window.addEventListener('resize', updateVisibleItems);

    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, []);

  /* EVITA QUE EL ÍNDICE QUEDE FUERA DE RANGO AL CAMBIAR DE PANTALLA */
  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  /* AUTOPLAY */
  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => {
      window.clearInterval(interval);
    };
  }, [maxIndex]);

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="bg-gray-100 py-20 sm:py-24 lg:pt-28 lg:pb-40 overflow-hidden">

      <div className="w-full px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* TEXTO */}
          <motion.div
  className="lg:col-span-5 text-left"
  initial={{ opacity: 0, x: -120 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{
    once: false,
    margin: '-100px',
  }}
  transition={{
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-700 leading-tight">
    LO QUE NOS{' '}
    <span className="font-semibold text-gray-900">
      DESTACA
    </span>
  </h2>

  <motion.p
    className="mt-4 text-base sm:text-lg text-gray-600"
    initial={{
      opacity: 0,
      y: -20,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: false,
    }}
    transition={{
      duration: 0.8,
      delay: 0.3,
    }}
  >
    BENEFICIOS A SU ALCANCE
  </motion.p>
</motion.div>

          {/* CARRUSEL */}
          <div className="lg:col-span-7 min-w-0">

            <div className="relative flex items-center">

              {/* FLECHA ANTERIOR */}
              <button
                type="button"
                onClick={prev}
                aria-label="Ver beneficio anterior"
                className="
                  absolute
                  left-0
                  z-20
                  w-10
                  h-10
                  sm:w-12
                  sm:h-12
                  rounded-full
                  bg-white
                  text-gray-500
                  text-3xl
                  sm:text-4xl
                  shadow-lg
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  hover:bg-[#FBB03B]
                  hover:text-black
                  hover:scale-110
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#FBB03B]
                "
              >
                <span className="-mt-1">‹</span>
              </button>

              {/* VIEWPORT */}
              <div className="overflow-hidden w-full mx-12 sm:mx-16 py-8 sm:py-10">

                {/* TRACK */}
                <div
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: `translateX(-${
                      index * (100 / visibleItems)
                    }%)`,
                  }}
                >
                  {highlights.map((item, i) => (
                    <div
                      key={i}
                      className="
                        flex-shrink-0
                        flex
                        flex-col
                        items-center
                        text-center
                        px-3
                        sm:px-4
                        group
                        transition-transform
                        duration-300
                        hover:-translate-y-2
                      "
                      style={{
                        width: `${100 / visibleItems}%`,
                      }}
                    >
                      {/* ÍCONO */}
                      <div
                        className="
                          w-20
                          h-20
                          sm:w-24
                          sm:h-24
                          mb-5
                          rounded-full
                          bg-white
                          flex
                          items-center
                          justify-center
                          shadow-md
                          transition-all
                          duration-300
                          group-hover:bg-[#FBB03B]
                          group-hover:shadow-xl
                        "
                      >
                        <Image
                          src={item.icon}
                          alt={item.text}
                          width={42}
                          height={42}
                          className="
                            w-9
                            h-9
                            sm:w-11
                            sm:h-11
                            object-contain
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                        />
                      </div>

                      {/* TEXTO */}
                      <p className="text-sm sm:text-base text-gray-700 leading-snug font-medium max-w-[170px]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

              {/* FLECHA SIGUIENTE */}
              <button
                type="button"
                onClick={next}
                aria-label="Ver beneficio siguiente"
                className="
                  absolute
                  right-0
                  z-20
                  w-10
                  h-10
                  sm:w-12
                  sm:h-12
                  rounded-full
                  bg-white
                  text-gray-500
                  text-3xl
                  sm:text-4xl
                  shadow-lg
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  hover:bg-[#FBB03B]
                  hover:text-black
                  hover:scale-110
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#FBB03B]
                "
              >
                <span className="-mt-1">›</span>
              </button>

            </div>

            {/* INDICADORES */}
            <div className="flex justify-center gap-2 mt-3">

              {Array.from({
                length: maxIndex + 1,
              }).map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  aria-label={`Ir a la posición ${dotIndex + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === dotIndex
                      ? 'w-8 bg-[#FBB03B]'
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}