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

/* GALERÍA PASEOS */
const outingGallery = [
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8320-min.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8327-min.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Piscinas-1-1.jpeg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC01806-min.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC02000-min-min.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC03733.jpg',
];

/* GALERÍA GRADUACIONES */
const graduationGallery = [
  'https://valledelsolquillon.cl/wp-content/uploads/2024/09/DSC03733.jpg',
  'https://valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8320-min.webp',
  'https://valledelsolquillon.cl/wp-content/uploads/2024/09/DSC02000-min-min.webp',
  'https://valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8327-min.webp',
];

/* ÍCONOS */
const icons = [
  '/images/cabanas/iconos/piscina.png',
  '/images/cabanas/iconos/parrilla.png',
  '/images/cabanas/iconos/juegos.png',
  '/images/cabanas/iconos/areas-verdes.png',
  '/images/cabanas/iconos/fogata.png',
  '/images/cabanas/iconos/quincho.png',
];

export default function ClassOutingsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">

      <Header />

      <main>

        {/* HERO */}
        <section className="relative h-[70vh] -mt-24">

          <Image
            src='/images/colegios/paseos/g1.jpg'
            alt="Paseos de Curso"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >

              <h1 className="text-4xl md:text-6xl font-semibold tracking-wide">
                Paseos de Curso y Graduaciones
              </h1>

              <p className="mt-4 text-lg md:text-xl text-white/90">
                Diversión, naturaleza y experiencias inolvidables
              </p>

            </motion.div>

          </div>

        </section>

        {/* INTRO */}
        <section className="relative pt-20 pb-28 overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

          <div className="relative max-w-5xl mx-auto px-6 text-center">

            <motion.h2
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-light text-black leading-tight"
            >
              El paseo de curso perfecto te espera
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-lg md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
            >
              Piscinas, juegos, naturaleza y momentos únicos para compartir con compañeros en un entorno seguro y preparado para disfrutar al máximo.
            </motion.p>

          </div>

        </section>

        {/* CARRUSEL ICONOS */}
        <section className="py-10 overflow-hidden bg-black">

          <div className="marquee flex gap-16 w-max">

            {[...icons, ...icons].map((icon, i) => (
              <div
                key={i}
                className="relative w-24 h-24 md:w-32 md:h-32 opacity-90 hover:opacity-100 transition"
              >
                <Image
                  src={icon}
                  alt="Icono"
                  fill
                  className="object-contain"
                />
              </div>
            ))}

          </div>

        </section>

        {/* MODALIDADES */}
        <section className="py-28 bg-white">

          <div className="max-w-6xl mx-auto px-6">

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >

              <h2 className="text-4xl md:text-5xl font-light">
                Modalidades disponibles
              </h2>

              <p className="mt-5 text-gray-600 text-lg">
                Opciones flexibles para adaptarse a cada colegio y experiencia.
              </p>

            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[32px] bg-black text-white p-10"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-[#FBB03B]/20 to-transparent" />

                <div className="relative">

                  <h3 className="text-3xl font-semibold mb-6">
                    Paseos con alimentación
                  </h3>

                  <p className="text-white/80 leading-relaxed">
                    Incluye opciones gastronómicas y espacios preparados para disfrutar una experiencia completa durante toda la jornada.
                  </p>

                </div>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.15 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[32px] border border-gray-200 p-10 bg-white shadow-2xl"
              >

                <h3 className="text-3xl font-semibold mb-6">
                  Paseos sin alimentación
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Ideal para grupos que desean organizar su jornada de forma independiente utilizando todas nuestras instalaciones.
                </p>

              </motion.div>

            </div>

          </div>

        </section>

        {/* CONVENIOS */}
        <section className="relative py-32 overflow-hidden">

          <Image
            src="https://valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8327-min.webp"
            alt="Convenios colegios"
            fill
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-black/75" />

          <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[0.4em] text-[#FBB03B] text-sm mb-6">
                Convenios especiales
              </p>

              <h2 className="text-4xl md:text-6xl font-light leading-tight">
                Convenios exclusivos con colegios y centros de padres
              </h2>

              <p className="mt-8 text-lg md:text-2xl text-white/80 leading-relaxed">
                Accede a precios preferentes, beneficios exclusivos y reservas prioritarias para entregar una experiencia inolvidable a estudiantes y familias.
              </p>

            </motion.div>

          </div>

        </section>

        {/* GALERÍA PASEOS */}
        <section className="py-28 px-6 bg-gray-50">

          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mb-16"
            >

              <h2 className="text-4xl md:text-5xl font-light">
                Galería Paseos de Curso
              </h2>

            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {outingGallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-[28px]"
                >

                  <div className="relative h-[320px]">

                    <Image
                      src={img}
                      alt="Paseos"
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500" />

                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </section>

        {/* GRADUACIONES */}
        <section className="relative py-32 bg-black overflow-hidden text-white">

          <div className="absolute inset-0 opacity-20">
            <div className="parallax-bg w-full h-full" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
                viewport={{ once: true }}
              >

                <p className="uppercase tracking-[0.3em] text-[#FBB03B] text-sm mb-5">
                  Graduaciones premium
                </p>

                <h2 className="text-4xl md:text-6xl font-light leading-tight">
                  Una celebración inolvidable
                </h2>

                <p className="mt-8 text-white/75 text-lg leading-relaxed">
                  Espacios elegantes y preparados para celebrar uno de los momentos más importantes de la vida escolar.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-4">

                  {[
                    'Fotógrafo',
                    'Fiesta',
                    'Cena',
                    'Coffee & Cóctel',
                    'Barra libre',
                    'Opciones sin alcohol',
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5"
                    >
                      {item}
                    </motion.div>
                  ))}

                </div>

                <a
                  href="https://wa.me/56926035311"
                  target="_blank"
                  className="inline-block mt-10 px-10 py-4 rounded-full text-white font-semibold hover:scale-105 transition"
                  style={{ backgroundColor: 'rgb(251,176,59)' }}
                >
                  Cotizar Graduación
                </a>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="relative h-[520px] rounded-[32px] overflow-hidden"
              >

                <Image
                  src="https://valledelsolquillon.cl/wp-content/uploads/2024/09/DSC03733.jpg"
                  alt="Graduaciones"
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />

              </motion.div>

            </div>

          </div>

        </section>

        {/* GALERÍA GRADUACIONES */}
        <section className="py-28 px-6 bg-white">

          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mb-16"
            >

              <h2 className="text-4xl md:text-5xl font-light">
                Galería Graduaciones
              </h2>

            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {graduationGallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-[28px] group"
                >

                  <div className="relative h-[340px]">

                    <Image
                      src={img}
                      alt="Graduaciones"
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500" />

                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </section>

        {/* CTA FINAL */}
        <section className="py-28 text-center bg-gray-50">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="px-6"
          >

            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Vive una experiencia inolvidable en Valle del Sol
            </h2>

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

          </motion.div>

        </section>

      </main>

      <Footer />

    </div>
  );
}