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
  '/images/colegios/paseos/p1.jpg',
  '/images/colegios/paseos/p2.jpg',
  '/images/colegios/paseos/p4.jpg',
  '/images/colegios/paseos/p5.jpg',
  '/images/colegios/paseos/p6.jpg',
  '/images/colegios/paseos/p7.jpg',
  '/images/colegios/paseos/p8.jpg',
  '/images/colegios/paseos/p10.jpg',
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
    title: '💦 Piscinas y juegos',
    description:
      'Toboganes, piscinas y espacios para disfrutar todo el día.',
    icon: '/images/iconos/piscinas.png',
  },
  {
    title: '🎉 Diversión asegurada',
    description:
      'Actividades deportivas, áreas verdes y momentos inolvidables.',
    icon: '/images/iconos/futbol.png',
  },
  {
    title: '🌴 Naturaleza y descanso',
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
  return (
    <div className="min-h-screen flex flex-col bg-[#f3fbff] overflow-hidden">

      <Header />

      <main>

        {/* HERO */}
        <section className="relative min-h-[100vh] pt-40 md:pt-52 overflow-hidden">

          <Image
            src='/images/colegios/paseos/g1.jpg'
            alt="Paseos de Curso"
            fill
            className="object-cover"
            priority
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d5cab]/40 via-[#0d5cab]/20 to-[#081521]/75" />

          {/* ELEMENTOS DECORATIVOS */}
          <div className="absolute top-36 left-8 text-yellow-300 text-6xl animate-pulse">
            ☀️
          </div>

          <div className="absolute bottom-40 right-10 text-blue-200 text-6xl animate-bounce">
            💦
          </div>

          <div className="absolute top-56 right-20 text-yellow-200 text-5xl rotate-12">
            ✨
          </div>

          <div className="absolute inset-0 flex items-center">

            <div className="max-w-7xl mx-auto px-6 w-full">

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-3xl text-white"
              >

                <div className="inline-block bg-[#FBB03B] text-black px-6 py-3 rounded-full text-[16px] font-bold shadow-2xl mb-8">
                  🌴 Diversión • Piscinas • Juegos • Naturaleza
                </div>

                <h1 className="text-5xl md:text-8xl font-black leading-[0.95] drop-shadow-2xl">
                  Paseos de Curso
                </h1>

                <p className="mt-8 text-[20px] md:text-[28px] leading-relaxed text-white/95 font-medium max-w-2xl">
                  Un día lleno de piscinas, juegos y momentos inolvidables
                  para compartir junto a compañeros y profesores.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 mt-12">

                  <a
                    href="https://www.eventi-app.com/public-quotation/1"
                    target="_blank"
                    className="px-10 py-5 rounded-full bg-[#FBB03B] text-black text-[20px] font-bold shadow-[0_20px_60px_rgba(251,176,59,0.45)] hover:scale-105 transition-all duration-500"
                  >
                    🎉 Reserva tu fecha
                  </a>

                  <a
                    href="https://wa.me/56926035311"
                    target="_blank"
                    className="px-10 py-5 rounded-full border-2 border-white/70 text-[20px] font-semibold backdrop-blur-md hover:bg-white hover:text-black transition-all duration-500"
                  >
                    WhatsApp
                  </a>

                </div>

              </motion.div>

            </div>

          </div>

        </section>

        {/* STRIP BENEFICIOS */}
        <section className="bg-[#0d5cab] text-white py-10">

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">

            {[
              '💦 Piscinas',
              '⚽ Juegos',
              '🌴 Áreas verdes',
              '🍔 Alimentación opcional',
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-3xl py-5 text-[20px] font-semibold backdrop-blur-md"
              >
                {item}
              </div>
            ))}

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
              <motion.div
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
              >

                <div className="inline-block bg-[#FBB03B]/15 text-[#D89B2B] px-5 py-2 rounded-full text-[16px] font-bold mb-8">
                  🎈 Paseos entretenidos para colegios
                </div>

                <h2 className="text-5xl md:text-7xl leading-[1] font-black text-[#0d2033]">
                  El paseo que todos recordarán
                </h2>

                <p className="mt-10 text-[20px] text-gray-700 leading-relaxed max-w-2xl">
                  Piscinas, juegos, áreas verdes y actividades pensadas
                  para que estudiantes, profesores y apoderados disfruten
                  un día increíble en Valle del Sol.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 mt-12">

                  <a
                    href="https://www.eventi-app.com/public-quotation/1"
                    target="_blank"
                    className="px-10 py-5 rounded-full bg-[#FBB03B] text-black text-[20px] font-bold shadow-[0_20px_60px_rgba(251,176,59,0.45)] hover:scale-105 transition-all duration-500"
                  >
                    🎉 Cotizar paseo
                  </a>

                  <a
                    href="https://wa.me/56926035311"
                    target="_blank"
                    className="px-10 py-5 rounded-full border-2 border-[#0d5cab]/20 text-[20px] font-semibold hover:bg-[#0d5cab] hover:text-white transition-all duration-500"
                  >
                    WhatsApp
                  </a>

                </div>

              </motion.div>

              {/* FOTO */}
              <motion.div
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="relative h-[450px] md:h-[650px] rounded-[40px] overflow-hidden shadow-[0_40px_120px_rgba(13,92,171,0.25)]"
              >

                <Image
                  src='/images/colegios/paseos/p3.jpg'
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
                🌟 Modalidades disponibles
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-[#0d2033] leading-[1]">
                Elige la experiencia ideal
              </h2>

              <p className="mt-8 text-[20px] text-gray-600 max-w-3xl mx-auto">
                Opciones flexibles para adaptarse a cada curso y necesidad.
              </p>

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
                  🍔 Con alimentación
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
                  🌴 Sin alimentación
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

              <div className="inline-block bg-[#FBB03B]/15 text-[#D89B2B] px-5 py-2 rounded-full text-[16px] font-bold mb-8">
                📸 Momentos inolvidables
              </div>

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
              <motion.div
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.4 }}
                viewport={{ once: true }}
              >

                <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-6">
                  Graduaciones en Valle del Sol
                </p>

                <h2 className="text-5xl md:text-7xl font-light leading-[1.05]">
                  Celebra el cierre de una etapa inolvidable
                </h2>

                <p className="mt-10 text-[20px] md:text-[22px] text-white/80 leading-relaxed">
                  Espacios elegantes, gastronomía y coordinación completa
                  para vivir una noche especial junto a compañeros,
                  familias y profesores.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 mt-12">

                  <a
                    href="https://www.eventi-app.com/public-quotation/1"
                    target="_blank"
                    className="px-10 py-5 rounded-full text-white text-[20px] font-semibold hover:scale-105 transition-all duration-500"
                    style={{ backgroundColor: 'rgb(251,176,59)' }}
                  >
                    Cotizar graduación
                  </a>

                  <a
                    href="https://wa.me/56926035311"
                    target="_blank"
                    className="px-10 py-5 rounded-full border border-white/20 text-[20px] font-medium hover:bg-white hover:text-black transition-all duration-500"
                  >
                    Hablar por WhatsApp
                  </a>

                </div>

              </motion.div>

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

                  <p className="text-[22px] font-medium">
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
        <section className="py-36 text-center bg-[#f3fbff]">

          <div className="max-w-5xl mx-auto px-6">

            <div className="inline-block bg-[#FBB03B]/15 text-[#D89B2B] px-5 py-2 rounded-full text-[16px] font-bold mb-8">
              🌴 Valle del Sol Quillón
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-[#0d2033] leading-[1]">
              Reserva una experiencia inolvidable
            </h2>

            <p className="mt-8 text-[20px] md:text-[24px] text-gray-600 leading-relaxed">
              Diversión, naturaleza y momentos únicos para todo tu curso.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center mt-14">

              <a
                href="https://wa.me/56926035311"
                target="_blank"
                className="px-10 py-5 rounded-full text-white text-[20px] font-bold shadow-lg hover:scale-105 transition"
                style={{ backgroundColor: '#25D366' }}
              >
                WhatsApp
              </a>

              <a
                href="https://www.eventi-app.com/public-quotation/1"
                target="_blank"
                className="px-10 py-5 rounded-full text-black text-[20px] font-bold shadow-lg hover:scale-105 transition"
                style={{ backgroundColor: 'rgb(251,176,59)' }}
              >
                🎉 Cotiza tu evento
              </a>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}