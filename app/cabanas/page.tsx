'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/* DATA */
const cabins = [
  {
    title: 'Cabaña para 2 personas',
    description: 'Un rincón perfecto para disfrutar en pareja.',
    details:
      'Suite de un ambiente con techo panorámico de 30m2. Se ubica escondida entre arbustos y árboles frente a la piscina principal, cuenta con una terraza de 15m2.',
    images: [
      '/images/demo/c1.jpg',
      '/images/demo/c2.jpg',
      '/images/demo/c3.jpg',
    ],
  },
  {
    title: 'Cabañas para 4 personas',
    description:
      'Espacio acogedor ideal para experiencias familiares inolvidables.',
    details:
      'Cabaña familiar de dos habitaciones más cocina americana de 40m2. Se ubica frente a una zona de juegos infantiles bajo la sombra de pinos, cuenta con una terraza de 20m2.',
    images: [
      '/images/demo/c4.jpg',
      '/images/demo/c5.jpg',
      '/images/demo/c6.jpg',
    ],
  },
  {
    title: 'Cabaña para 6 personas',
    description:
      'Cabaña acogedora para familias grandes y grupos de amigos.',
    details:
      'Cabaña familiar de tres habitaciones más cocina americana de 65m2. Se ubica frente a la fuente con cascada de agua, cuenta con una terraza de 30m2.',
    images: [
      '/images/demo/c7.jpg',
      '/images/demo/c8.jpg',
      '/images/demo/c9.jpg',
    ],
  },
];

/* CARRUSEL */
function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [paused, images.length]);

  const next = () =>
    setIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <>
      <div
        className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden cursor-pointer"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onClick={() => setLightbox(true)}
      >
        <Image
          src={images[index]}
          alt="Cabaña Valle del Sol"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />

        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full"
        >
          ‹
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full"
        >
          ›
        </button>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          <div className="relative w-[90%] h-[80%]">
            <Image
              src={images[index]}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

/* PAGE */
export default function CabanasPage() {
  return (
    <div className="min-h-screen">

      <Header />

      <main>

        {/* HERO */}
        <section className="relative h-[70vh] -mt-24">
          <Image
            src="/images/cabanas/hero.jpg"
            alt="Cabañas Valle del Sol"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-semibold">
                Nuestras Cabañas
              </h1>

              <p className="mt-4 text-lg md:text-xl">
                Naturaleza, descanso y desconexión total
              </p>
            </motion.div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Despierta cada mañana disfrutando los colores verdes de la
              naturaleza y termina el día con la magia de un atardecer.
              Nuestras cabañas, diseñadas con un toque rústico y moderno,
              están rodeadas de paisajes impresionantes que invitan al
              descanso y la desconexión.
              <br /><br />
              <strong>Aquí, cada amanecer te regala paz y cada atardecer, un momento
              para atesorar. Ven y vive la tranquilidad en su máxima expresión.</strong>
            </p>
          </div>
        </section>

        {/* BENEFICIOS */}
<section className="relative py-28 md:py-36 overflow-hidden">

  {/* IMAGEN DE FONDO */}
  <Image
    src="/images/cabanas/bg-beneficios.jpeg"
    alt="Servicios cabañas"
    fill
    className="object-cover scale-105"
  />

  {/* OVERLAY + BLUR */}
  <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

  {/* CONTENIDO */}
  <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true }}
    >

      <h2 className="text-3xl md:text-5xl font-semibold mb-12">
        Todas las cabañas incluyen
      </h2>

      <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto text-lg md:text-xl">

        {[
          'Desayuno incluido',
          'Smart TV',
          'Amenidades de baño',
          'Acceso a piscina y áreas verdes',
          'Acceso zona de picnic',
          'Terraza, parrilla y accesorios',
        ].map((item, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="text-orange-400 text-xl">✔</span>
            {item}
          </motion.p>
        ))}

      </div>

    </motion.div>

  </div>

</section>

        {/* CABAÑAS */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 space-y-24">

            {cabins.map((cabin, i) => (
              <motion.div
                key={i}
                className="grid md:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
              >

                <Carousel images={cabin.images} />

                <div>
                  <h3 className="text-3xl font-semibold">
                    {cabin.title}
                  </h3>

                  <p className="mt-4 text-gray-600">
                    {cabin.description}
                  </p>

                  <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                    {cabin.details}
                  </p>

                  <button className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
                    Reservar
                  </button>
                </div>

              </motion.div>
            ))}

          </div>
        </section>

      </main>

      <Footer/>

    </div>
  );
}