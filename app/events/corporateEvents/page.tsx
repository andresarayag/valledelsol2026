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
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/ubicacion-1.webp',
  },
  {
    title: 'Hasta 1.000 personas',
    description: 'Espacios para eventos de gran convocatoria.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/personas.png',
  },
  {
    title: 'Salones equipados',
    description: 'Configurables para cada tipo de actividad.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/conferencia.png',
  },
  {
    title: 'Tecnología Audiovisual',
    description: 'Proyección, sonido e iluminación profesional.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/escenario.png',
  },
  {
    title: 'Banquetería',
    description: 'Coffee break, almuerzos y cenas corporativas.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/banquete.png',
  },
  {
    title: 'Estacionamientos',
    description: 'Amplios espacios para colaboradores y visitantes.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/coche.png',
  },
];

const trainingGalleryImages = [
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Auditorio-2-min-1.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_6617-min-1.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_6620-min.webp',
];

/* EXPERIENCIAS */

const experiences = [
  {
    title: 'Tour de Viñas',
    description:
      'Recorridos y degustaciones en las mejores viñas del Valle del Itata.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/tour-vinos-min.webp',
  },
  {
    title: 'Ruta de Licorerías',
    description:
      'Conoce la tradición local mediante experiencias de destilados y licores.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8756-min.webp',
  },
  {
    title: 'Atractivos Naturales',
    description:
      'Playas, lagunas, senderos y paisajes ideales para desconectarse.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC01773-min.webp',
  },
  {
    title: 'Coaching Empresarial',
    description:
      'Programas orientados al liderazgo, comunicación y trabajo colaborativo.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Auditorio-2-min-1.webp',
  },
  {
    title: 'Team Building',
    description:
      'Actividades diseñadas para fortalecer la integración y motivación de los equipos.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Eventos-5-min-e1725423897963.jpeg',
  },
  {
    title: 'Actividades Outdoor',
    description:
      'Experiencias recreativas y deportivas en un entorno natural privilegiado.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_6617-min-1.webp',
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

        <section className="relative h-[75vh] -mt-24">

          <Image
            src="/images/empresas/e4.jpg"
            alt="Eventos Empresas"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex items-center justify-center text-center text-white">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >

              <h1 className="text-5xl md:text-7xl font-light">
                Eventos Corporativos
              </h1>

              <p className="mt-6 text-lg md:text-2xl text-white/90">
                Espacios premium para reuniones, capacitaciones, celebraciones
                y experiencias inolvidables.
              </p>

            </motion.div>

          </div>

        </section>

        {/* STRIP */}

        <section className="py-6 bg-black text-white text-center uppercase tracking-[0.35em] text-sm md:text-base">
          Capacitaciones • Seminarios • Congresos • Convenios • Paseos de Fin de Año
        </section>
{/* BENEFICIOS */}

<section className="py-28 bg-white">

  <div className="max-w-6xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >

      <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">
        Infraestructura Corporativa
      </p>

      <h2 className="text-4xl md:text-5xl font-light">
        Todo lo que tu empresa necesita
      </h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
      >
        En Valle del Sol Quillón contamos con espacios modernos, amplias áreas
        verdes y servicios integrales para desarrollar reuniones, jornadas
        estratégicas, convenciones, celebraciones y encuentros empresariales
        completamente personalizados.
      </motion.p>

    </motion.div>

    <div className="grid md:grid-cols-3 gap-10">

      {highlightStats.map((item, i) => (

        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.08,
            duration: .8,
          }}
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

{/* CAPACITACIONES */}

<section className="py-32 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

    <motion.div
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.4,
        ease: [0.22,1,0.36,1],
      }}
      viewport={{ once: true }}
    >

      <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">

        Eventos Empresariales

      </p>

      <h2 className="text-4xl md:text-5xl font-light leading-tight">

        Capacitaciones, Seminarios y Congresos

      </h2>

      <motion.p
        initial={{ opacity:0, y:-20 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:.9 }}
        viewport={{ once:true }}
        className="mt-8 text-lg text-gray-600 leading-relaxed"
      >

        Organizamos capacitaciones, seminarios, congresos y jornadas
        corporativas en un entorno rodeado de naturaleza. Disponemos de
        programas de uno o varios días, con o sin alojamiento, adaptándonos a
        las necesidades de cada organización.

      </motion.p>

      <motion.p
        initial={{ opacity:0, y:-20 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:.9, delay:.15 }}
        viewport={{ once:true }}
        className="mt-6 text-lg text-gray-600 leading-relaxed"
      >

        Nuestros programas incluyen salones climatizados, equipamiento
        audiovisual, coffee break, almuerzos, banquetería, alojamiento en
        cómodas cabañas, amplios estacionamientos y todos los servicios
        necesarios para garantizar una experiencia profesional de primer nivel.

      </motion.p>

      <div className="grid grid-cols-2 gap-5 mt-10">

        <div className="rounded-2xl bg-white shadow-lg p-5">

          <h4 className="font-semibold mb-2">
            ✔ Con estadía
          </h4>

          <p className="text-gray-600 text-sm">
            Ideal para programas de integración y jornadas de varios días.
          </p>

        </div>

        <div className="rounded-2xl bg-white shadow-lg p-5">

          <h4 className="font-semibold mb-2">
            ✔ Sin estadía
          </h4>

          <p className="text-gray-600 text-sm">
            Perfecto para reuniones, cursos y capacitaciones de una jornada.
          </p>

        </div>

        <div className="rounded-2xl bg-white shadow-lg p-5">

          <h4 className="font-semibold mb-2">
            ✔ Coffee Break
          </h4>

          <p className="text-gray-600 text-sm">
            Opciones gastronómicas adaptadas a cada evento.
          </p>

        </div>

        <div className="rounded-2xl bg-white shadow-lg p-5">

          <h4 className="font-semibold mb-2">
            ✔ Tecnología
          </h4>

          <p className="text-gray-600 text-sm">
            Sonido, proyección, iluminación y soporte audiovisual.
          </p>

        </div>

      </div>

    </motion.div>

    <motion.div
      initial={{ opacity:0, x:120 }}
      whileInView={{ opacity:1, x:0 }}
      transition={{
        duration:1.4,
        ease:[0.22,1,0.36,1],
      }}
      viewport={{ once:true }}
    >

      <HorizontalGallery
        images={trainingGalleryImages}
        height={430}
      />

    </motion.div>

  </div>

</section>
{/* EXPERIENCIAS */}

<section className="relative py-32 bg-black overflow-hidden text-white">

  <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-95" />

  <div className="relative max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.4,
        ease: [0.22,1,0.36,1],
      }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >

      <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">

        Más que un evento

      </p>

      <h2 className="text-4xl md:text-6xl font-light">

        Experiencias Corporativas

      </h2>

      <motion.p
        initial={{ opacity:0,y:-20 }}
        whileInView={{ opacity:1,y:0 }}
        transition={{ duration:.9 }}
        viewport={{ once:true }}
        className="mt-8 text-white/70 text-lg max-w-4xl mx-auto leading-relaxed"
      >

        Diseñamos programas corporativos completamente personalizados que
        combinan naturaleza, gastronomía, cultura y actividades de integración,
        fortaleciendo el trabajo en equipo y transformando cada encuentro en una
        experiencia memorable.

      </motion.p>

    </motion.div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

      {experiences.map((exp, i) => (

        <motion.div
          key={i}
          initial={{ opacity:0, y:60 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{
            duration:.8,
            delay:i*.08,
          }}
          viewport={{ once:true }}
          className="group rounded-[32px] overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FBB03B]/60 transition-all duration-500"
        >

          <div className="relative h-64 overflow-hidden">

            <Image
              src={exp.iconUrl}
              alt={exp.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>

          </div>

          <div className="p-8">

            <h3 className="text-2xl font-light mb-4">

              {exp.title}

            </h3>

            <p className="text-white/70 leading-relaxed">

              {exp.description}

            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* PASEOS FIN DE AÑO */}

<section className="py-32 bg-white">

  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

    <motion.div
      initial={{ opacity:0, x:-120 }}
      whileInView={{ opacity:1, x:0 }}
      transition={{
        duration:1.4,
        ease:[0.22,1,0.36,1],
      }}
      viewport={{ once:true }}
    >

      <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">

        Celebraciones Corporativas

      </p>

      <h2 className="text-4xl md:text-5xl font-light leading-tight">

        Paseos de Fin de Año

      </h2>

      <motion.p
        initial={{ opacity:0,y:-20 }}
        whileInView={{ opacity:1,y:0 }}
        transition={{ duration:.9 }}
        viewport={{ once:true }}
        className="mt-8 text-lg text-gray-600 leading-relaxed"
      >

        Celebra los logros de tu organización en un entorno natural privilegiado.
        Organizamos paseos de fin de año completamente personalizados para
        empresas, combinando gastronomía, recreación y entretención para todos
        los colaboradores.

      </motion.p>

      <motion.p
        initial={{ opacity:0,y:-20 }}
        whileInView={{ opacity:1,y:0 }}
        transition={{ duration:.9, delay:.15 }}
        viewport={{ once:true }}
        className="mt-6 text-lg text-gray-600 leading-relaxed"
      >

        Piscinas, quinchos, amplias áreas verdes, música, banquetería,
        actividades recreativas y espacios exclusivos convierten cada jornada en
        una experiencia inolvidable para todo el equipo.

      </motion.p>

      <div className="grid grid-cols-2 gap-5 mt-10">

        <div className="rounded-2xl bg-gray-50 p-5 shadow-md">

          🎉 Celebraciones privadas

        </div>

        <div className="rounded-2xl bg-gray-50 p-5 shadow-md">

          🍽 Banquetería completa

        </div>

        <div className="rounded-2xl bg-gray-50 p-5 shadow-md">

          🏊 Piscinas y áreas verdes

        </div>

        <div className="rounded-2xl bg-gray-50 p-5 shadow-md">

          🎶 Actividades recreativas

        </div>

      </div>

    </motion.div>

    <motion.div
      initial={{ opacity:0, x:120 }}
      whileInView={{ opacity:1, x:0 }}
      transition={{
        duration:1.4,
        ease:[0.22,1,0.36,1],
      }}
      viewport={{ once:true }}
      className="relative h-[620px] rounded-[36px] overflow-hidden shadow-2xl"
    >

      <Image
        src="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8756-min.webp"
        alt="Paseos Fin de Año"
        fill
        className="object-cover hover:scale-110 transition duration-700"
      />

    </motion.div>

  </div>

</section>
{/* CONVENIOS */}

<section className="relative py-36 overflow-hidden">

  <Image
    src="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_6617-min-1.webp"
    alt="Convenios Corporativos"
    fill
    className="object-cover scale-105"
  />

  <div className="absolute inset-0 bg-black/75" />

  <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

    <motion.div
      initial={{ opacity:0, x:-120 }}
      whileInView={{ opacity:1, x:0 }}
      transition={{
        duration:1.4,
        ease:[0.22,1,0.36,1],
      }}
      viewport={{ once:true }}
    >

      <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">

        Convenios Empresariales

      </p>

      <h2 className="text-4xl md:text-6xl font-light">

        Beneficios exclusivos para tus colaboradores

      </h2>

      <motion.p
        initial={{ opacity:0,y:-20 }}
        whileInView={{ opacity:1,y:0 }}
        transition={{ duration:.9 }}
        viewport={{ once:true }}
        className="mt-8 text-xl text-white/80 leading-relaxed max-w-4xl mx-auto"
      >

        Desarrollamos convenios corporativos para que todos los colaboradores
        de las empresas asociadas puedan disfrutar de descuentos exclusivos,
        promociones permanentes y tarifas preferenciales en alojamiento,
        restaurante, actividades recreativas y servicios de Valle del Sol
        Quillón.

      </motion.p>

    </motion.div>

    <div className="grid md:grid-cols-3 gap-8 mt-20">

      <div className="rounded-3xl bg-white/10 backdrop-blur-md p-8">

        <h3 className="text-2xl mb-3">

          💰 Descuentos

        </h3>

        <p className="text-white/70">

          Tarifas preferenciales durante todo el año.

        </p>

      </div>

      <div className="rounded-3xl bg-white/10 backdrop-blur-md p-8">

        <h3 className="text-2xl mb-3">

          🎁 Promociones

        </h3>

        <p className="text-white/70">

          Beneficios exclusivos para colaboradores y sus familias.

        </p>

      </div>

      <div className="rounded-3xl bg-white/10 backdrop-blur-md p-8">

        <h3 className="text-2xl mb-3">

          🌿 Experiencias

        </h3>

        <p className="text-white/70">

          Acceso preferente a actividades y programas especiales.

        </p>

      </div>

    </div>

  </div>

</section>

{/* GALERÍA */}

<section className="py-32 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity:0, x:-120 }}
      whileInView={{ opacity:1, x:0 }}
      transition={{
        duration:1.4,
        ease:[0.22,1,0.36,1],
      }}
      viewport={{ once:true }}
      className="mb-16 text-center"
    >

      <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">

        Conoce Valle del Sol

      </p>

      <h2 className="text-4xl md:text-5xl font-light">

        Galería Corporativa

      </h2>

    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {corporateGallery.map((img, i) => (

        <motion.div
          key={i}
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{
            duration:.7,
            delay:i*.08,
          }}
          viewport={{ once:true }}
          className="group overflow-hidden rounded-[32px]"
        >

          <div className="relative h-[340px]">

            <Image
              src={img}
              alt="Galería Corporativa"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500"/>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* CTA */}

<section className="py-32 bg-white">

  <motion.div
    initial={{ opacity:0,y:40 }}
    whileInView={{ opacity:1,y:0 }}
    transition={{ duration:1 }}
    viewport={{ once:true }}
    className="max-w-4xl mx-auto px-6 text-center"
  >

    <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">

      Planifiquemos tu próximo evento

    </p>

    <h2 className="text-4xl md:text-6xl font-light leading-tight">

      Creamos experiencias corporativas que inspiran, conectan y fortalecen equipos.

    </h2>

    <p className="mt-8 text-lg text-gray-600 leading-relaxed">

      Nuestro equipo te acompañará en la planificación de reuniones,
      capacitaciones, congresos, celebraciones y actividades de integración,
      adaptándonos completamente a las necesidades de tu organización.

    </p>

    <a
      href="https://wa.link/vjoaea"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center mt-12 px-12 py-5 rounded-full text-black font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
      style={{ backgroundColor: 'rgb(251,176,59)' }}
    >

      Solicitar Cotización

    </a>

  </motion.div>

</section>

      </main>

      <Footer />

    </div>

  );
}