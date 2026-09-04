'use client';

import { useRef } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import { SocialLink } from '../components/types';

import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';

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
  '/images/colegios/paseos/c2.jpg',
  '/images/colegios/paseos/c3.jpg',
  '/images/colegios/paseos/c4.jpg',
  '/images/colegios/paseos/c5.jpg',
  '/images/colegios/paseos/c6.jpg',
  '/images/colegios/paseos/c7.jpg',
  '/images/colegios/paseos/c8.jpg',
  '/images/colegios/paseos/c9.jpg',
];

/* GALERÍA GRADUACIONES */
const graduationGallery = [
  '/images/colegios/graduaciones/g1.jpg',
  '/images/colegios/graduaciones/g2.jpg',
  '/images/colegios/graduaciones/g3.jpg',
  '/images/colegios/graduaciones/g4.jpg',
  '/images/colegios/graduaciones/g5.jpg',
  '/images/colegios/graduaciones/g6.jpg',
  '/images/colegios/graduaciones/g7.jpg',
  '/images/colegios/graduaciones/g8.jpg',
  '/images/colegios/graduaciones/g9.jpg',
  '/images/colegios/graduaciones/g10.jpg',
  '/images/colegios/graduaciones/g11.jpg',
  '/images/colegios/graduaciones/g12.jpg',
  '/images/colegios/graduaciones/g13.jpg',
  '/images/colegios/graduaciones/g14.jpg',
  '/images/colegios/graduaciones/g15.jpg',
  '/images/colegios/graduaciones/g16.jpg',
];

/* FEATURES */
const paseoFeatures = [
  {
    title: 'Piscinas y juegos',
    description:
      'Toboganes, piscinas y espacios para disfrutar todo el día.',
    icon: '/images/iconos/piscinas.png',
  },
  {
    title: 'Diversión asegurada',
    description:
      'Actividades deportivas, áreas verdes y momentos inolvidables.',
    icon: '/images/iconos/futbol.png',
  },
  {
    title: 'Naturaleza y descanso',
    description:
      'Un entorno seguro y entretenido para estudiantes y profesores.',
    icon: '/images/iconos/areas-verdes.png',
  },
];

const graduationFeatures = [
  'Cena especial',
  'Fiesta y música',
  'Fotografía',
  'Coffee & Cóctel',
  'Espacios decorados',
  'Opciones sin alcohol',
];
export default function ClassOutingsPage() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

const heroY = useTransform(scrollYProgress, [0, 1], ['-12%', '28%']);
const heroScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.28]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f3fbff] overflow-hidden">

      <Header />

      <main>

       {/* HERO */}
<section
  ref={heroRef}
  className="relative min-h-[78vh] h-[85vh] -mt-24 overflow-hidden bg-black"
>
  {/* IMAGEN PARALLAX */}
  <motion.div
    className="absolute -inset-y-32 inset-x-0"
    style={{
      y: heroY,
      scale: heroScale,
    }}
  >
    <Image
      src="/images/colegios/paseos/c10.jpg"
      alt="Paseos de Curso"
      fill
      className="object-cover"
      priority
    />
  </motion.div>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/75" />

  {/* CONTENIDO */}
  <div
    className="
      relative
      z-10
      h-full
      flex
      items-center
      justify-center
      px-6
      pt-36
      md:pt-40
      lg:pt-44
    "
  >
    <div className="max-w-6xl mx-auto text-center text-white">

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="
          uppercase
          tracking-[0.3em]
          sm:tracking-[0.4em]
          md:tracking-[0.45em]
          text-[#FBB03B]
          text-xs
          sm:text-sm
          mb-6
          md:mb-8
        "
      >
        Diversión • Piscinas • Juegos • Naturaleza
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-8xl
          font-bold
          leading-[0.95]
          tracking-tight
          text-white
        "
      >
        Paseos de Curso
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.4,
        }}
        className="
          mt-6
          md:mt-8
          lg:mt-10
          text-lg
          sm:text-xl
          md:text-2xl
          text-white/90
          max-w-5xl
          mx-auto
          leading-relaxed
        "
      >
        Un día lleno de piscinas, juegos y momentos inolvidables para compartir
        junto a compañeros y profesores.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.45,
        }}
        className="
          flex
          flex-col
          sm:flex-row
          gap-5
          mt-10
          md:mt-12
          lg:mt-14
          justify-center
        "
      >
        <PrimaryButton href="https://www.eventi-app.com/public-quotation/1">
          Reserva tu fecha
        </PrimaryButton>

        <SecondaryButton
          href="https://wa.me/56926035311"
          className="
            !border-white/40
            !text-white
            hover:!bg-white
            hover:!text-black
          "
        >
          WhatsApp
        </SecondaryButton>
      </motion.div>

    </div>
  </div>
</section>

        {/* PASEOS */}
        <section className="relative overflow-hidden bg-[#f3fbff] py-36">

          {/* FORMAS */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#FBB03B]/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0d5cab]/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">

            <div className="grid lg:grid-cols-2 gap-20 items-center">

              {/* TEXTO */}
              <div>

                <div className="inline-block bg-[#FBB03B]/15 text-[#D89B2B] px-5 py-2 rounded-full text-[16px] font-bold mb-8">
                  Paseos entretenidos para colegios
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: '-100px' }}
                  transition={{
                    duration: 1.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h2 className="text-4xl md:text-5xl font-light text-[#0d2033] leading-tight uppercase">
                    EL PASEO QUE TODOS <span className="font-semibold text-[#0d2033]">RECORDARÁN</span>
                  </h2>
                </motion.div>

                <motion.p
                  className="mt-4 text-lg text-gray-700 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Piscinas, juegos, áreas verdes y actividades pensadas para que estudiantes, profesores y apoderados disfruten un día increíble en Valle del Sol.
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-5 mt-12">

                  <a
                    href="https://www.eventi-app.com/public-quotation/1"
                    target="_blank"
                    className="px-10 py-5 rounded-full bg-[#FBB03B] text-black text-[20px] font-bold shadow-[0_20px_60px_rgba(251,176,59,0.45)] hover:scale-105 transition-all duration-500"
                  >
                    Cotizar paseo
                  </a>

                  <a
                    href="https://wa.me/56926035311"
                    target="_blank"
                    className="px-10 py-5 rounded-full border-2 border-[#0d5cab]/20 text-[20px] font-semibold hover:bg-[#0d5cab] hover:text-white transition-all duration-500"
                  >
                    WhatsApp
                  </a>

                </div>

              </div>

              {/* FOTO */}
              <motion.div
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="relative h-[450px] md:h-[650px] rounded-[40px] overflow-hidden shadow-[0_40px_120px_rgba(13,92,171,0.25)]"
              >

                <Image
                  src='/images/colegios/paseos/c1.jpg'
                  alt="Paseos"
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />

              </motion.div>

            </div>

            {/* FEATURES */}
            <div className="grid lg:grid-cols-3 gap-10 mt-28">

              {paseoFeatures.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12, duration: 1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[40px] p-10 shadow-[0_15px_50px_rgba(13,92,171,0.12)] border-4 border-[#dff3ff]"
                >

                  <div className="relative w-24 h-24 mb-8">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-[30px] font-black text-[#0d2033]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[20px] text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </section>

        {/* MODALIDADES */}
        <section className="py-36 bg-white overflow-hidden">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-20">

              <div className="inline-block bg-[#eaf6ff] text-[#0d5cab] px-5 py-2 rounded-full text-[16px] font-bold mb-8">
                Modalidades disponibles
              </div>

              <motion.div
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: '-100px' }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h2 className="text-4xl md:text-5xl font-light text-[#0d2033] leading-tight uppercase">
                  ELIGE LA EXPERIENCIA <span className="font-semibold text-[#0d2033]">IDEAL</span>
                </h2>
              </motion.div>

              <motion.p
                className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto uppercase"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                OPCIONES FLEXIBLES PARA ADAPTARSE A CADA CURSO Y NECESIDAD.
              </motion.p>

            </div>

            <div className="grid lg:grid-cols-2 gap-10">

              {/* CON ALIMENTACION */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[40px] bg-[#fff8ea] border-4 border-[#FBB03B]/20 p-12 shadow-[0_25px_80px_rgba(251,176,59,0.12)]"
              >

                <div className="absolute top-6 right-6 bg-[#FBB03B] text-white px-5 py-2 rounded-full text-sm font-bold">
                  ⭐ Más elegida
                </div>

                <h3 className="text-4xl font-black text-[#1f1f1f]">
                 Con alimentación
                </h3>

                <p className="mt-6 text-[20px] text-gray-700 leading-relaxed">
                  Una experiencia completa para disfrutar sin preocuparse por nada.
                </p>

                <ul className="mt-10 space-y-5">

                  {[
                    'Desayuno, almuerzo y once',
                    'Menús adaptables',
                    'Espacios techados',
                    'Hidratación durante la jornada',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-[20px] text-gray-700"
                    >
                      <span className="w-3 h-3 rounded-full bg-[#FBB03B]" />
                      {item}
                    </li>
                  ))}

                </ul>

              </motion.div>

              {/* SIN ALIMENTACION */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.15 }}
                viewport={{ once: true }}
                className="rounded-[40px] bg-[#f3fbff] p-12 border-4 border-[#dff3ff]"
              >

                <h3 className="text-4xl font-black text-[#1f1f1f]">
                  Sin alimentación
                </h3>

                <p className="mt-6 text-[20px] text-gray-700 leading-relaxed">
                  Organiza la jornada libremente usando nuestras instalaciones.
                </p>

                <ul className="mt-10 space-y-5">

                  {[
                    'Acceso a piscinas y áreas verdes',
                    'Zonas picnic y recreación',
                    'Flexibilidad horaria',
                    'Apoyo logístico',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-[20px] text-gray-700"
                    >
                      <span className="w-3 h-3 rounded-full bg-[#0d5cab]" />
                      {item}
                    </li>
                  ))}

                </ul>

              </motion.div>

            </div>

          </div>

        </section>

        {/* GALERIA PASEOS */}
        <section className="py-36 px-6 bg-[#f3fbff]">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="text-5xl md:text-7xl font-black text-[#0d2033]">
                Revisa todo lo que puedes tener
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {outingGallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-[32px] group"
                >

                  <div className="relative h-[360px]">

                    <Image
                      src={img}
                      alt="Galería"
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
        <section className="relative py-36 bg-black overflow-hidden text-white">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* TEXTO */}
              <div>

                <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-6">
                  Graduaciones en Valle del Sol
                </p>

                <motion.div
                  initial={{ opacity: 0, x: -120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: '-100px' }}
                  transition={{
                    duration: 1.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h2 className="text-4xl md:text-5xl font-light text-white leading-tight uppercase">
                    CELEBRA EL CIERRE DE UNA ETAPA <span className="font-semibold text-white">INOLVIDABLE</span>
                  </h2>
                </motion.div>

                <motion.p
                  className="mt-4 text-lg text-white/80 leading-relaxed"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Espacios elegantes, gastronomía y coordinación completa para vivir una noche especial junto a compañeros, familias y profesores.
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-5 mt-12">

  <PrimaryButton href="https://www.eventi-app.com/public-quotation/1">
    Cotizar graduación
  </PrimaryButton>

<SecondaryButton
  href="https://wa.me/56926035311"
  className="
    !border-white/40
    !text-white
    hover:!bg-white
    hover:!text-black
  "
>
  Hablar por WhatsApp
</SecondaryButton>

</div>

              </div>

              {/* FOTO */}
              <motion.div
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.4 }}
                viewport={{ once: true }}
                className="relative h-[450px] md:h-[650px] rounded-[36px] overflow-hidden"
              >

                <Image
                  src="https://valledelsolquillon.cl/wp-content/uploads/2024/09/DSC03733.jpg"
                  alt="Graduaciones"
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />

              </motion.div>

            </div>

            {/* FEATURES */}
           {/* FEATURES */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">

  {graduationFeatures.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.08 }}
      viewport={{ once: true }}
      className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md p-8"
    >
      <p className="text-[22px] font-medium flex items-center gap-4">
        <span className="text-[#FBB03B] text-2xl">✓</span>
        {item}
      </p>
    </motion.div>
  ))}

</div>

          </div>

        </section>

        {/* GALERÍA DE GRADUACIONES */}
<section className="py-24 bg-black">
  <div className="max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: false, margin: '-100px' }}
    >
      <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
        MOMENTOS QUE <span className="font-semibold text-white">PERDURAN PARA SIEMPRE</span>
      </h2>
    </motion.div>

    <motion.p
      className="mt-4 mb-14 text-lg text-white"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      UNA NOCHE ÚNICA PARA CELEBRAR EL FIN DE UNA GRAN ETAPA
    </motion.p>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {graduationGallery.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: i * 0.05 }}
          className="overflow-hidden rounded-2xl group shadow-lg"
        >
          <div className="relative h-[240px] md:h-[270px]">
            <Image
              src={img}
              alt={`Graduación ${i + 1}`}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />
          </div>
        </motion.div>
      ))}

    </div>

  </div>
</section>

        {/* CTA */}
        <section className="pt-20 pb-20 text-center bg-[#f3fbff]">
       <div className="flex flex-col md:flex-row gap-6 justify-center mt-14 mb-10">

  <SecondaryButton href="https://wa.me/56926035311">
    WhatsApp
  </SecondaryButton>

  <PrimaryButton href="https://www.eventi-app.com/public-quotation/1">
    Cotiza tu evento
  </PrimaryButton>

</div>
</section>
      </main>

      <Footer />

    </div>
  );
}