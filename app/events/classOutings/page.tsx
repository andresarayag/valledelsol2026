'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SocialLink } from '../../components/types';
import Image from 'next/image';
import { motion } from 'framer-motion';

/* SOCIAL */
const socialLinks: SocialLink[] = [
  {
    name: 'Tripadvisor',
    href: 'https://www.tripadvisor.cl/',
    icon: '🌐',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/valledelsolquillon',
    icon: '📘',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/valledelsolquillon.cl/',
    icon: '📷',
  },
];

/* GALERÍA FINAL */
const galleryImages = [
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8320-min.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8327-min.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Piscinas-1-1.jpeg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC01806-min.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC02000-min-min.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC03733.jpg',
];

export default function ClassOutingsPage() {
  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <main>

        {/* HERO */}
        <section className="relative h-[70vh] -mt-24">

          <Image
            src="https://valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8327-min.webp"
            alt="Paseos de curso"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-semibold">
                Paseos de Curso
              </h1>

              <p className="mt-4 text-lg md:text-xl">
                Diversión, naturaleza y experiencias inolvidables
              </p>
            </motion.div>
          </div>

        </section>

        {/* INTRO */}
        <section className="pt-10 pb-20 text-center">
          <div className="max-w-4xl mx-auto px-6 text-gray-700">
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              <strong className="text-black font-semibold md:font-bold lg:font-extrabold tracking-wide block mb-3">
                El paseo de curso perfecto te espera.
              </strong>
              Piscinas, juegos, naturaleza y momentos únicos para compartir con compañeros en un entorno seguro y preparado para disfrutar al máximo.
            </p>
          </div>
        </section>

        {/* AMENITIES PREMIUM */}
<section className="relative py-28 md:py-36 overflow-hidden">

  {/* IMAGEN DE FONDO */}
  <Image
    src="https://valledelsolquillon.cl/wp-content/uploads/2024/08/Piscinas-1-1.jpeg"
    alt="Paseos de curso"
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
        Todo lo que incluye tu paseo
      </h2>

      <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto text-lg md:text-xl">

        {[
          'Piscinas y zonas de recreación',
          'Juegos infantiles',
          'Áreas verdes amplias',
          'Zona de picnic',
          'Parrillas disponibles',
          'Espacios seguros y controlados',
          'Ambiente natural',
          'Actividades al aire libre',
        ].map((item, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="text-[#FBB03B] text-xl">✔</span>
            {item}
          </motion.p>
        ))}

      </div>

    </motion.div>

  </div>

</section>

        {/* GRADUACIONES */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold">
                Graduaciones
              </h2>

              <p className="mt-4 text-gray-600">
                Celebra una graduación inolvidable en un entorno natural, con espacios amplios, seguros y preparados para una experiencia única.
              </p>

              <a
                href="https://wa.me/56926035311"
                target="_blank"
                className="inline-block mt-6 px-8 py-3 rounded-full text-white font-medium"
                style={{ backgroundColor: 'rgb(251,176,59)' }}
              >
                Cotizar por WhatsApp
              </a>
            </motion.div>

            <motion.div
              className="relative h-[400px]"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Image
                src="https://valledelsolquillon.cl/wp-content/uploads/2024/09/DSC03733.jpg"
                alt="Graduaciones"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>

          </div>
        </section>

        {/* GALERÍA PREMIUM */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="overflow-hidden rounded-2xl group"
              >
                <div className="relative h-[260px] md:h-[300px]">
                  <Image
                    src={img}
                    alt="Galería paseos"
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 text-center bg-gray-50">
          <div className="flex flex-col md:flex-row gap-6 justify-center">

            <a
              href="https://wa.me/56926035311"
              target="_blank"
              className="px-10 py-4 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition"
              style={{ backgroundColor: '#25D366' }}
            >
              WhatsApp
            </a>

            <a
              href="https://www.eventi-app.com/public-quotation/1"
              target="_blank"
              className="px-10 py-4 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition"
              style={{ backgroundColor: 'rgb(251,176,59)' }}
            >
              Cotiza tu evento
            </a>

          </div>
        </section>

      </main>

      <Footer/>

    </div>
  );
}