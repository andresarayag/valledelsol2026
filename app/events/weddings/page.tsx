'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EventFeatureCard from '../../components/EventFeatureCard';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const backgroundIncludes = '/images/matrimonio/matri.JPG';

const weddingGallery = [
  '/images/matrimonio/galeria1.jpg',
  '/images/matrimonio/galeria2.jpg',
  '/images/matrimonio/galeria3.jpg',
  '/images/matrimonio/galeria4.jpg',
];

const services = [
  {
    title: 'Wedding Planner',
    description: 'Coordinación completa para que todo salga perfecto.',
    iconUrl: '/images/matrimonio/planificador-de-la-boda.WEBP',
    iconAlt: 'Wedding planner',
  },
  {
    title: 'Decoraciones',
    description: 'Diseño personalizado para una boda única.',
    iconUrl: '/images/matrimonio/pasillo-1.WEBP',
    iconAlt: 'Decoración',
  },
  {
    title: 'Chef de Especialidad',
    description: 'Menús diseñados a medida para cada pareja.',
    iconUrl: '/images/matrimonio/sombrero-de-cocinero.WEBP',
    iconAlt: 'Chef',
  },
  {
    title: 'Audiovisuales',
    description: 'Iluminación, sonido y ambientación profesional.',
    iconUrl: '/images/matrimonio/sistema-de-sonido.WEBP',
    iconAlt: 'Audio',
  },
  {
    title: 'Experiencias',
    description: 'Cabina 360°, tatuajes, artistas y más.',
    iconUrl: '/images/matrimonio/fotografo.WEBP',
    iconAlt: 'Experiencias',
  },
  {
    title: 'Bar & Vinos',
    description: 'Selección del Valle del Itata + barra libre.',
    iconUrl: '/images/matrimonio/copa-de-vino.WEBP',
    iconAlt: 'Vinos',
  },
];

export default function WeddingsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>

       {/* HERO VIDEO */}
<section className="relative h-[85vh] -mt-24 overflow-hidden bg-black">

  {/* VIDEO BACKGROUND */}
  <div className="absolute inset-0 w-full h-full overflow-hidden">

    <iframe
      className="
        absolute top-1/2 left-1/2
        min-w-full min-h-full
        w-auto h-auto
        aspect-video
        -translate-x-1/2 -translate-y-1/2
        pointer-events-none
      "
      src="https://www.youtube.com/embed/br3Qe9JXdVU?autoplay=1&mute=1&controls=0&loop=1&playlist=br3Qe9JXdVU&modestbranding=1&showinfo=0&rel=0"
      title="Video Matrimonios Valle del Sol"
      allow="autoplay; fullscreen"
    />

  </div>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60" />

  {/* CONTENIDO */}
  <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">

    <div>

      {/* TÍTULO */}
      <h1
                className="text-5xl md:text-7xl font-light"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontStyle: 'italic',
                  letterSpacing: '1px',
                }}
              >
                Sí, acepto
              </h1>

      {/* SUBTÍTULO */}
      <motion.p
        className="text-xl md:text-3xl font-light text-white/90"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Cotiza con nuestro formato all inclusive
      </motion.p>

    </div>

  </div>

</section>

        {/* CTA */}
        <div className="text-center -mt-12 mb-20 relative z-10">
          <Link
            href="/cotiza-tu-evento"
            className="inline-block px-12 py-4 rounded-full text-white font-semibold shadow-2xl hover:scale-105 transition"
            style={{ backgroundColor: 'rgb(251,176,59)' }}
          >
            Cotiza tu evento
          </Link>
        </div>

        {/* INTRO */}
        <section className="pt-10 pb-20 text-center">
          <div className="max-w-6xl mx-auto px-6">

            {/* TÍTULO */}
            <motion.h2
              className="text-4xl md:text-5xl font-light text-gray-700 leading-tight whitespace-nowrap"
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              CELEBRA TU AMOR EN UN{' '}
              <span className="font-semibold text-gray-900">
                LUGAR MÁGICO
              </span>
            </motion.h2>

            {/* SUBTÍTULO */}
            <motion.p
              className="mt-6 text-xl md:text-2xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              RODEADO DE NATURALEZA Y TRANQUILIDAD, DONDE CADA DETALLE SE CONVIERTE EN UN RECUERDO INOLVIDABLE.
            </motion.p>

          </div>
        </section>

        {/* BENEFICIOS */}
       {/* BENEFICIOS MATRIMONIO */}
{/* BENEFICIOS MATRIMONIO */}
<section className="relative py-28 md:py-36 overflow-hidden">

  {/* PARALLAX BACKGROUND */}
  <div className="absolute inset-0 -z-10">
    <Image
      src={backgroundIncludes}
      alt="Matrimonios Valle del Sol"
      fill
      className="w-full h-[120%] object-cover parallax-bg"
    />

    <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
  </div>

  {/* CONTENIDO */}
  <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true }}
    >

      <h2 className="text-3xl md:text-5xl font-semibold mb-12">
        Todo lo que incluye tu matrimonio
      </h2>

      <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto text-lg md:text-xl">

        {[
          'Servicio de alimentación completo',
          'Banquetería y bar abierto',
          'Wedding planner',
          'DJ y animador',
          'Decoración incluida',
          'Salones climatizados',
          'Jardines para ceremonia',
          'Cabaña para novios',
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

        {/* FEATURES */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <EventFeatureCard {...service} />
              </motion.div>
            ))}

          </div>
        </section>

        {/* GALERÍA */}
        <section className="px-6 pb-24 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

            {weddingGallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden rounded-2xl group"
              >
                <div className="relative h-[300px]">

                  <Image
                    src={img}
                    alt="Matrimonio Valle del Sol"
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-gray-100 text-center">

          <div className="max-w-5xl mx-auto px-6">

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

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}