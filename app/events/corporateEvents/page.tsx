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

/* BENEFICIOS */
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
    title: 'Licorerías',
    description: 'Recorridos y degustaciones premium.',
    iconUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8756-min.webp',
  },
  {
    title: 'Coaching Outdoor',
    description: 'Jornadas de conexión y trabajo en equipo.',
    iconUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC01773-min.webp',
  },
];

const corporateGallery = [
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Eventos-5-min-e1725423897963.jpeg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8756-min.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC01773-min.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Auditorio-2-min-1.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_6617-min-1.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_6620-min.webp',
];

/* PAGE */
export default function CorporateEventPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-white">

      <Header />

      <main>

        {/* HERO */}
        <section className="relative h-[70vh] -mt-24">

          <Image
            src='/images/empresas/e4.jpg'
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
        <section className="py-6 bg-black text-white text-center text-sm md:text-base tracking-[0.3em] uppercase">
          Capacitaciones • Seminarios • Retiros • Fiestas • Convenciones
        </section>

        {/* BENEFICIOS */}
        <section className="py-24">

          <div className="max-w-6xl mx-auto px-6">

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >

              <h2 className="text-4xl md:text-5xl font-light">
                Todo lo que tu empresa necesita
              </h2>

              <p className="mt-5 text-gray-600 text-lg">
                Espacios y servicios diseñados para eventos corporativos de alto nivel.
              </p>

            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">

              {highlightStats.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
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

          </div>

        </section>

        {/* CONVENIOS */}
        <section className="relative py-32 overflow-hidden">

          <Image
            src="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_6617-min-1.webp"
            alt="Convenios"
            fill
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-black/75" />

          <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[0.4em] text-[#FBB03B] text-sm mb-5">
                Convenios Corporativos
              </p>

              <h2 className="text-4xl md:text-6xl font-light leading-tight">
                Beneficios exclusivos para colaboradores
              </h2>

              <p className="mt-8 text-lg md:text-2xl text-white/80 leading-relaxed">
                Nuestros convenios permiten que todos los colaboradores suscritos accedan a descuentos, promociones y tarifas preferentes para disfrutar experiencias únicas junto a sus familias y equipos.
              </p>

            </motion.div>

          </div>

        </section>

        {/* PASEOS FIN DE AÑO */}
        <section className="py-28 bg-gray-50">

          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: 'easeOut' }}
              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[0.3em] text-[#FBB03B] text-sm mb-5">
                Celebraciones Corporativas
              </p>

              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Paseos de fin de año
              </h2>

              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                Creamos jornadas inolvidables para celebrar junto a tu equipo en un entorno natural, con piscinas, gastronomía, actividades recreativas y espacios exclusivos.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative h-[500px] overflow-hidden rounded-[32px]"
            >

              <Image
                src="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8756-min.webp"
                alt="Paseos fin de año"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />

            </motion.div>

          </div>

        </section>

        {/* CAPACITACIONES */}
        <section className="py-28 bg-white">

          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[0.3em] text-[#FBB03B] text-sm mb-5">
                Eventos Empresariales
              </p>

              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Capacitaciones, Seminarios y Congresos
              </h2>

              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                Disponemos de formatos con y sin estadía, incluyendo salón equipado, coffee break, amenidades, tecnología audiovisual y espacios diseñados para potenciar cada encuentro corporativo.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >

              <HorizontalGallery images={trainingGalleryImages} height={360} />

            </motion.div>

          </div>

        </section>

        {/* EXPERIENCIAS */}
        <section className="relative py-32 bg-black text-white overflow-hidden">

          <div className="absolute inset-0 opacity-20">
            <div className="parallax-bg w-full h-full" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6">

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >

              <h2 className="text-4xl md:text-6xl font-light">
                Experiencias Corporativas
              </h2>

              <p className="mt-6 text-white/70 text-lg max-w-3xl mx-auto">
                Diseñamos actividades únicas para fortalecer equipos y crear momentos memorables.
              </p>

            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">

              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
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

          </div>

        </section>

        {/* GALERÍA */}
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
                Galería Corporativa
              </h2>

            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {corporateGallery.map((img, i) => (
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
                      alt="Galería Corporativa"
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

        {/* CTA */}
        <section className="py-28 text-center bg-white">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="px-6"
          >

            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Diseñamos experiencias corporativas únicas
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
              Eventos, capacitaciones y celebraciones diseñadas para conectar equipos en un entorno premium.
            </p>

            <a
              href="https://wa.link/vjoaea"
              target="_blank"
              className="inline-block px-10 py-4 rounded-full text-black font-medium hover:scale-105 transition shadow-xl"
              style={{ backgroundColor: 'rgb(251,176,59)' }}
            >
              Cotizar evento
            </a>

          </motion.div>

        </section>

      </main>

      <Footer />

    </div>
  );
}