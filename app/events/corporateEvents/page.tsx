'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HorizontalGallery from '../../components/HorizontalGallery';
import EventFeatureCard from '../../components/EventFeatureCard';
import { SocialLink } from '../../components/types';
import Image from 'next/image';
import { motion } from 'framer-motion';

/* SOCIAL */
const socialLinks: SocialLink[] = [
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

/* DATA */
const highlightStats = [
  {
    title: 'Ubicación privilegiada',
    description: 'La mejor ubicación de Quillón.',
    iconUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/ubicacion-1.webp',
  },
  {
    title: 'Hasta 1.000 personas',
    description: 'Eventos masivos sin límites.',
    iconUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/personas.png',
  },
  {
    title: 'Salones equipados',
    description: 'Espacios adaptables a cada formato.',
    iconUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/conferencia.png',
  },
  {
    title: 'Audiovisuales',
    description: 'Tecnología a medida.',
    iconUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/escenario.png',
  },
  {
    title: 'Banquetería',
    description: 'Experiencia gastronómica completa.',
    iconUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/banquete.png',
  },
  {
    title: 'Estacionamientos',
    description: 'Comodidad para todos.',
    iconUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/coche.png',
  },
];

const trainingGalleryImages = [
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Auditorio-2-min-1.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_6617-min-1.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_6620-min.webp',
];

const experiences = [
  {
    title: 'Tour Viñas',
    description: 'Catas, paisajes y experiencias únicas para tu equipo.',
    iconUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/tour-vinos-min.webp',
  },
  {
    title: 'Producción de Eventos',
    description: 'Eventos corporativos con estándar profesional.',
    iconUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8756-min.webp',
  },
  {
    title: 'Banquetería',
    description: 'Menús personalizados de alto nivel.',
    iconUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC01773-min.webp',
  },
];

/* PAGE */
export default function CorporateEventPage() {
  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <main>

        {/* HERO 🔥 */}
        <section className="relative h-[70vh] -mt-24">

          <Image
            src="https://valledelsolquillon.cl/wp-content/uploads/2024/09/Eventos-5-min-e1725423897963.jpeg"
            alt="Eventos Empresas"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-semibold">
                Eventos Corporativos
              </h1>

              <p className="mt-4 text-lg md:text-xl">
                Experiencias que conectan equipos
              </p>
            </motion.div>
          </div>

        </section>

        {/* STRIP */}
        <section className="py-6 bg-black text-white text-center text-sm md:text-base tracking-wide">
          CAPACITACIONES • SEMINARIOS • RETIROS • FIESTAS • CONVENCIONES
        </section>

        {/* BENEFICIOS */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            {highlightStats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <EventFeatureCard
                  title={item.title}
                  description={item.description}
                  iconUrl={item.iconUrl}
                  iconAlt={item.title}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* CAPACITACIONES */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold">
                Capacitaciones
              </h2>

              <p className="mt-4 text-gray-600">
                Espacios diseñados para potenciar el aprendizaje, combinando
                tecnología, comodidad y naturaleza.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <HorizontalGallery images={trainingGalleryImages} height={320} />
            </motion.div>

          </div>
        </section>

        {/* EXPERIENCIAS */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Experiencias Corporativas
            </h2>
          </div>

          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <EventFeatureCard
                  title={exp.title}
                  description={exp.description}
                  iconUrl={exp.iconUrl}
                  iconAlt={exp.title}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA 🔥 */}
        <section className="py-24 text-center">
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Diseñamos experiencias corporativas únicas para tu equipo
          </p>

          <a
            href="https://wa.link/vjoaea"
            target="_blank"
            className="inline-block px-10 py-4 rounded-full text-black font-medium"
            style={{ backgroundColor: 'rgb(251,176,59)' }}
          >
            Cotizar evento
          </a>
        </section>

      </main>

      <Footer/>

    </div>
  );
}