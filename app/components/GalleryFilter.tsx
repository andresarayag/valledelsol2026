'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  {
    title: 'ÁREAS VERDES',
    image: '/images/galeria/areas-verdes.jpg',
    description:
      'DESCUBRE MÁS DE 24.000 M² DE ÁREAS VERDES DISEÑADAS PARA EL DESCANSO Y LA CONEXIÓN CON LA NATURALEZA. VIVE MOMENTOS ÚNICOS EN UN ENTORNO AMPLIO, TRANQUILO Y LLENO DE VIDA.',
  },
  {
    title: 'PISCINAS',
    image: '/images/galeria/piscinas.jpg',
    description:
      'DISFRUTA DE REFRESCANTES PISCINAS PARA ADULTOS Y NIÑOS, IDEALES PARA RELAJARSE Y COMPARTIR EN FAMILIA.',
  },
  {
    title: 'HABITACIONES',
    image: '/images/galeria/habitaciones.jpg',
    description:
      'RELÁJATE EN HABITACIONES DISEÑADAS PARA BRINDAR CALIDEZ, COMODIDAD Y DESCANSO.',
  },
  {
    title: 'COMIDA TÍPICA',
    image: '/images/galeria/comida.jpg',
    description:
      'DESCUBRE LA AUTÉNTICA GASTRONOMÍA CHILENA A TRAVÉS DE SUS PLATOS MÁS TRADICIONALES.',
  },
  {
    title: 'TINAJAS',
    image: '/images/galeria/tinajas.jpg',
    description:
      'NUESTRAS TINAJAS OFRECEN UNA EXPERIENCIA DE BIENESTAR INSPIRADA EN LA HIDROTERAPIA, GRACIAS A SU SISTEMA DE CALDERA E HIDROMASAJE.',
  },
  {
    title: 'CANCHAS',
    image: '/images/galeria/canchas.jpg',
    description:
      'DISFRUTA DE NUESTRAS CANCHAS DEPORTIVAS EN UN ENTORNO NATURAL IDEAL PARA COMPARTIR, COMPETIR Y VIVIR MOMENTOS ACTIVOS AL AIRE LIBRE',
  },
];

export default function GalleryFilter() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const current = items[active];

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

      {/* IMAGEN */}
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

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* CONTENIDO */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">

        {/* MENÚ */}
        <div className="flex flex-wrap gap-4 mb-12">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all backdrop-blur-md border ${
                active === index
                  ? 'bg-white text-black border-white shadow-lg scale-105'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20 hover:scale-105'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* TEXTO */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
            className="max-w-xl text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* 🔥 TÍTULO (ESTILO GLOBAL + SLIDE LEFT) */}
            <motion.h2
              className="text-4xl md:text-5xl font-light text-white leading-tight"
              initial={{ opacity: 0, x: -120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {current.title.split(' ')[0]}{' '}
              <span className="font-semibold">
                {current.title.split(' ').slice(1).join(' ')}
              </span>
            </motion.h2>

            {/* 🔥 DESCRIPCIÓN (FADE IN DOWN) */}
            <motion.p
              className="mt-6 text-lg text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {current.description}
            </motion.p>

          </motion.div>
        </AnimatePresence>

      </div>

    </section>
  );
}