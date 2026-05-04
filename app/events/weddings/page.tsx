'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EventFeatureCard from '../../components/EventFeatureCard';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SocialLink } from '../../components/types';

const socialLinks: SocialLink[] = [
  {
    name: 'Tripadvisor',
    href: 'https://www.tripadvisor.cl/Hotel_Review-g3732316-d7155218-Reviews-Centro_de_Eventos_Valle_del_Sol-Quillon_Biobio_Region.html',
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
  {
    name: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=%2B56976705424',
    icon: '💬',
  },
];

const heroImage = '/images/matrimonio/matrimonio.JPG';
const backgroundIncludes = '/images/matrimonio/matri.JPG';

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

        {/* HERO */}
        <section className="relative h-[75vh] -mt-24">
          <Image
            src={heroImage}
            alt="Matrimonios Valle del Sol"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-light">
                Sí, acepto
              </h1>

              <p className="mt-6 text-lg md:text-2xl font-light">
                Cotiza con nuestro formato all inclusive
              </p>
            </motion.div>
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

        {/* INTRO TEXTO */}
<section className="pt-5 pb-20 text-center">
  <div className="max-w-5xl mx-auto px-6 text-gray-700 leading-relaxed">
    <p className="text-xl md:text-2xl lg:text-4xl font-light leading-relaxed">
      <strong className="text-black font-semibold md:font-bold lg:font-extrabold block mb-3">
        Celebra tu amor en un lugar mágico,
      </strong>
      rodeado de naturaleza y tranquilidad, donde cada detalle se convierte en un recuerdo inolvidable.
    </p>
  </div>
</section>

       {/* BENEFICIOS MATRIMONIO */}
<section className="relative py-28 md:py-36 overflow-hidden">

  {/* IMAGEN DE FONDO */}
  <Image
    src={backgroundIncludes}
    alt="Matrimonios Valle del Sol"
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

        {/* VIDEO */}
        <section className="py-24 bg-gray-100 text-center">
          <div className="max-w-5xl mx-auto px-6">

            <h2 className="text-4xl md:text-5xl mb-12 font-light">
              Vive la experiencia
            </h2>

            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUTUBE_ID"
                title="Video matrimonio"
                allowFullScreen
              />
            </div>

            {/* BOTONES */}
            <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">

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

      <Footer/>
    </div>
  );
}