'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/* =========================
   DATA CABAÑAS
========================= */
const cabins = [
  {
    title: 'Cabaña para 2 personas',
    description: 'Un rincón perfecto para disfrutar en pareja.',
    details:
      'Suite de un ambiente con techo panorámico de 30m2. Se ubica escondida entre arbustos y árboles frente a la piscina principal, cuenta con una terraza de 15m2.',

    images: [
      '/images/cabanas/cabana2/c1.jpg',
      '/images/cabanas/cabana2/c2.jpg',
      '/images/cabanas/cabana2/c3.jpg',
      '/images/cabanas/cabana2/c4.jpg',
      '/images/cabanas/cabana2/c5.jpg',
      '/images/cabanas/cabana2/c6.jpg',
      '/images/cabanas/cabana2/c7.jpg',
      '/images/cabanas/cabana2/c8.jpg',
      '/images/cabanas/cabana2/c9.jpg',
      '/images/cabanas/cabana2/c10.jpg',
    ],

    icons: [
      {
        icon: '/images/cabanas/iconos/cama-2-plazas.png',
        label: 'Cama 2 plazas',
      },
      {
        icon: '/images/cabanas/iconos/estufa-de-lena.png',
        label: 'Estufa a leña',
      },
      {
        icon: '/images/cabanas/iconos/nevera.png',
        label: 'Nevera',
      },
      {
        icon: '/images/cabanas/iconos/parrilla.png',
        label: 'Parrilla',
      },
      {
        icon: '/images/cabanas/iconos/terraza.png',
        label: 'Terraza',
      },
      {
        icon: '/images/cabanas/iconos/wifi.png',
        label: 'Wifi',
      },
    ],
  },

  {
    title: 'Cabaña para 4 personas',
    description:
      'Espacio acogedor ideal para experiencias familiares inolvidables.',

    details:
      'Cabaña familiar de dos habitaciones más cocina americana de 40m2. Se ubica frente a una zona de juegos infantiles bajo la sombra de pinos, cuenta con una terraza de 20m2.',

    images: [
      '/images/cabanas/cabana4/c1.jpeg',
      '/images/cabanas/cabana4/c2.jpg',
      '/images/cabanas/cabana4/c3.jpg',
      '/images/cabanas/cabana4/c4.jpg',
      '/images/cabanas/cabana4/c5.jpg',
      '/images/cabanas/cabana4/c6.jpeg',
    ],

    icons: [
      {
        icon: '/images/cabanas/iconos/cama-2-plazas.png',
        label: '2 Habitaciones',
      },
      {
        icon: '/images/cabanas/iconos/nevera.png',
        label: 'Nevera',
      },
      {
        icon: '/images/cabanas/iconos/parrilla.png',
        label: 'Parrilla',
      },
      {
        icon: '/images/cabanas/iconos/terraza.png',
        label: 'Terraza',
      },
      {
        icon: '/images/cabanas/iconos/wifi.png',
        label: 'Wifi',
      },
    ],
  },

  {
    title: 'Cabaña para 6 personas',
    description:
      'Cabaña acogedora para familias grandes y grupos de amigos.',

    details:
      'Cabaña familiar de tres habitaciones más cocina americana de 65m2. Se ubica frente a la fuente con cascada de agua, cuenta con una terraza de 30m2.',

    images: [
      '/images/cabanas/cabana6/c1.jpg',
      '/images/cabanas/cabana6/c2.jpg',
      '/images/cabanas/cabana6/c3.jpg',
      '/images/cabanas/cabana6/c4.jpg',
      '/images/cabanas/cabana6/c5.jpg',
      '/images/cabanas/cabana6/c6.jpg',
      '/images/cabanas/cabana6/c10.jpg',
      '/images/cabanas/cabana6/c8.jpg',
      '/images/cabanas/cabana6/c9.jpg',
      '/images/cabanas/cabana6/c7.jpg',
    ],

    icons: [
      {
        icon: '/images/cabanas/iconos/cama-2-plazas.png',
        label: '3 Habitaciones',
      },
      {
        icon: '/images/cabanas/iconos/nevera.png',
        label: 'Nevera',
      },
      {
        icon: '/images/cabanas/iconos/parrilla.png',
        label: 'Parrilla',
      },
      {
        icon: '/images/cabanas/iconos/terraza.png',
        label: 'Terraza',
      },
      {
        icon: '/images/cabanas/iconos/wifi.png',
        label: 'Wifi',
      },
    ],
  },
];

/* =========================
   CARRUSEL IMÁGENES
========================= */
function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden">
      <Image
        src={images[index]}
        alt="Cabaña Valle del Sol"
        fill
        className="object-cover"
      />

      <button
        onClick={() =>
          setIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
          )
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={() =>
          setIndex((prev) => (prev + 1) % images.length)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full"
      >
        ›
      </button>
    </div>
  );
}

/* =========================
   CARRUSEL ÍCONOS
========================= */
function AmenitiesCarousel({
  amenities,
}: {
  amenities: { icon: string; label: string }[];
}) {
  const [index, setIndex] = useState(0);

  const visibleItems = 4;
  const maxIndex = Math.max(0, amenities.length - visibleItems);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="relative flex items-center gap-4 mt-8">

      {/* PREV */}
      <button
        onClick={prev}
        className="absolute left-0 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition"
      >
        ‹
      </button>

      {/* VIEWPORT */}
      <div className="overflow-hidden w-full px-12">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleItems)}%)`,
          }}
        >
          {amenities.map((item, i) => (
            <div
              key={i}
              className="w-1/4 flex-shrink-0 flex flex-col items-center text-center px-3"
            >
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center shadow-sm mb-3">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </div>

              <p className="text-sm text-gray-700 leading-tight">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* NEXT */}
      <button
        onClick={next}
        className="absolute right-0 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition"
      >
        ›
      </button>
    </div>
  );
}

/* =========================
   PAGE
========================= */
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

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/50" />

  {/* CONTENIDO */}
  <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >

      <h1 className="text-4xl md:text-6xl font-semibold">
        Nuestras Cabañas
      </h1>

      <p className="mt-4 text-lg md:text-xl text-white/90">
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
              <strong>
                Aquí, cada amanecer te regala paz y cada atardecer,
                un momento para atesorar. Ven y vive la tranquilidad
                en su máxima expresión.
              </strong>
            </p>

          </div>
        </section>
{/* BENEFICIOS */}
<section className="relative py-28 md:py-36 overflow-hidden">

  {/* IMAGEN FONDO */}
  <Image
    src="/images/cabanas/bg-beneficios.jpeg"
    alt="Servicios cabañas"
    fill
    className="object-cover scale-105"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

  {/* CONTENIDO */}
  <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

    <motion.div
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: false }}
    >

      {/* TÍTULO */}
      <h2 className="text-4xl md:text-5xl font-light leading-tight">
        TODAS LAS CABAÑAS{" "}
        <span className="font-semibold">
          INCLUYEN
        </span>
      </h2>

      {/* BENEFICIOS */}
      <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto text-lg md:text-xl mt-14">

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
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: false }}
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
                className="grid md:grid-cols-2 gap-12 items-start"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false }}
              >

                {/* IZQUIERDA */}
                <div>

                  <Carousel images={cabin.images} />

                  <AmenitiesCarousel amenities={cabin.icons} />

                </div>

                {/* DERECHA */}
                <div className="pt-2">

                  <h3 className="text-3xl font-semibold">
                    {cabin.title}
                  </h3>

                  <p className="mt-4 text-gray-800 font-semibold text-lg">
                    {cabin.description}
                  </p>

                  <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                    {cabin.details}
                  </p>

                  <button className="mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
                    Reservar
                  </button>

                </div>

              </motion.div>
            ))}

          </div>
        </section>

      </main>

      <Footer />

    </div>
  );
}