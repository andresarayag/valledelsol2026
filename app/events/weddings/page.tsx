'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HorizontalGallery from '../../components/HorizontalGallery';
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

const heroImage =
  'https://valledelsolquillon.cl/wp-content/uploads/2024/08/MF-0221-min.jpg';

const servicesIntro =
  'Celebra tu amor en un lugar mágico, rodeado de naturaleza y tranquilidad, donde cada detalle se convierte en un recuerdo inolvidable.';

const services = [
  {
    title: 'Wedding Planner',
    description:
      'Coordinación completa para que todo salga perfecto.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/planificador-de-la-boda.webp',
    iconAlt: 'Wedding planner',
  },
  {
    title: 'Decoraciones',
    description:
      'Diseño personalizado para una boda única.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/pasillo-1.webp',
    iconAlt: 'Decoración',
  },
  {
    title: 'Chef de Especialidad',
    description:
      'Menús diseñados a medida para cada pareja.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/sombrero-de-cocinero.webp',
    iconAlt: 'Chef',
  },
  {
    title: 'Audiovisuales',
    description:
      'Iluminación, sonido y ambientación profesional.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/sistema-de-sonido.webp',
    iconAlt: 'Audio',
  },
  {
    title: 'Experiencias',
    description:
      'Cabina 360°, tatuajes, artistas y más.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/fotografo.webp',
    iconAlt: 'Experiencias',
  },
  {
    title: 'Bar & Vinos',
    description:
      'Selección del Valle del Itata + barra libre.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/copa-de-vino.png',
    iconAlt: 'Vinos',
  },
];

const gallery = [
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/22789193_1336544243138635_4034647322991933903_n.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/22688736_1336631363129923_5058742057974768606_n.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Matrimonio-1.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Eventos-4.webp',
];

export default function WeddingsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>

        {/* HERO 🔥 */}
        <section className="relative h-[70vh] -mt-24">

          <Image
            src={heroImage}
            alt="Matrimonios Valle del Sol"
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
                Sí, acepto
              </h1>

              <p className="mt-4 text-lg md:text-xl">
                Cotiza con nuestro formato all inclusive
              </p>
            </motion.div>
          </div>

        </section>

        {/* CTA */}
        <div className="text-center -mt-10 mb-16 relative z-10">
          <Link
            href="/cotiza-tu-evento"
            className="inline-block px-10 py-4 rounded-full text-white font-semibold shadow-xl transition hover:scale-105"
            style={{ backgroundColor: 'rgb(251,176,59)' }}
          >
            Cotiza tu evento
          </Link>
        </div>

        {/* INTRO */}
        <motion.section
          className="py-16 text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {servicesIntro}
            </p>
          </div>
        </motion.section>

        {/* LISTA SERVICIOS */}
        <motion.section
          className="py-16 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">

            <h2 className="text-3xl md:text-4xl font-semibold mb-10">
              Todo lo que incluye tu matrimonio
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-left">
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
                <p key={i}>✔ {item}</p>
              ))}
            </div>

          </div>
        </motion.section>

        {/* FEATURES */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

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
        <motion.section
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-3xl md:text-4xl text-center mb-10">
            Nuestros Novios
          </h2>

          <HorizontalGallery images={gallery} height={400} />
        </motion.section>

      </main>

      <Footer
        tagline="Vuelve a esos lugares donde fuiste feliz. Vuelve a Valle del Sol"
        contactEmail="contacto@valledelsolquillon.cl"
        socialLinks={socialLinks}
      />
    </div>
  );
}