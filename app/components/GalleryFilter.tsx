'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  {
    title: 'Áreas Verdes',
    image: '/images/galeria/areas-verdes.jpg',
    description:
      'Descubre más de 24.000 m² de áreas verdes diseñadas para el descanso y la conexión con la naturaleza. Vive momentos únicos en un entorno amplio, tranquilo y lleno de vida.',
  },
  {
    title: 'Piscinas',
    image: '/images/galeria/piscinas.jpg',
    description:
      'Disfruta de refrescantes piscinas para adultos y niños, ideales para relajarse y compartir en familia. Vive momentos únicos en un entorno pensado para el descanso y la experiencia.',
  },
  {
    title: 'Habitaciones',
    image: '/images/galeria/habitaciones.jpg',
    description:
      'Relájate en habitaciones diseñadas para brindar calidez, comodidad y descanso. Vive momentos únicos en un entorno acogedor pensado para desconectarte y recargar energías.',
  },
  {
    title: 'Comida Chilena',
    image: '/images/galeria/comida.jpeg',
    description:
      'Descubre lo mejor de la comida chilena con platos tradicionales llenos de sabor y tradición. Vive momentos únicos en un entorno donde la gastronomía es parte de la experiencia.',
  },
  {
    title: 'Eventos Corporativos',
    image: '/images/galeria/eventos-corporativos.jpeg',
    description:
      'Realiza eventos corporativos, aniversarios, matrimonios y graduaciones en un entorno único. Vive momentos especiales en espacios diseñados para celebrar y conectar.',
  },
];

export default function GalleryFilter() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const current = items[active];

  // AUTOPLAY
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [active, paused]);

  return (
    <section
      className="relative w-full h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      {/* IMAGEN ANIMADA */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.image}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${current.image})` }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* OVERLAY PRO */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* CONTENIDO */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">

        {/* MENÚ */}
        <div className="flex flex-wrap gap-6 mb-12 text-white text-sm md:text-base font-medium">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`transition ${
                active === index
                  ? 'border-b-2 border-white pb-1'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* TEXTO ANIMADO */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
              exit: {
                opacity: 0,
                y: -20,
                transition: { duration: 0.4 },
              },
            }}
            className="max-w-xl text-white"
          >

            {/* TÍTULO */}
            <motion.h2
              className="text-4xl md:text-6xl font-semibold leading-tight"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              {current.title}
            </motion.h2>

            {/* DESCRIPCIÓN */}
            <motion.p
              className="mt-6 text-lg text-white/90 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              {current.description}
            </motion.p>

          </motion.div>
        </AnimatePresence>

      </div>

    </section>
  );
}