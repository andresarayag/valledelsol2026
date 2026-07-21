'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HorizontalGallery from '../../components/HorizontalGallery';
import EventFeatureCard from '../../components/EventFeatureCard';
import { SocialLink } from '../../components/types';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
    title: 'Team Building',
    description: 'Actividades para fortalecer la integración y motivación de los equipos.',
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
  const heroRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: heroRef,
  offset: ['start start', 'end start'],
});

const heroY = useTransform(scrollYProgress, [0, 1], ['-12%', '28%']);

const heroScale = useTransform(
  scrollYProgress,
  [0, 1],
  [1.15, 1.28]
);
  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-white">

      <Header />

      <main>

        {/* HERO */}

        {/* HERO */}
{/* HERO */}
<section
  ref={heroRef}
  className="relative h-[85vh] -mt-24 overflow-hidden bg-black"
>
  <motion.div
    className="absolute -inset-y-32 inset-x-0"
    style={{
      y: heroY,
      scale: heroScale,
    }}
  >
    <Image
      src="/images/empresas/e4.jpg"
      alt="Eventos Empresas"
      fill
      priority
      className="object-cover"
    />
  </motion.div>

  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/75" />

  <div className="relative z-10 h-full flex items-center justify-center px-6 pt-24">
    <div className="max-w-6xl mx-auto text-center text-white">

      <motion.h1
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white"
      >
        Servicios Corporativos
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.4,
        }}
        className="mt-10 text-xl md:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed"
      >
        Espacios premium para reuniones, capacitaciones, celebraciones y experiencias inolvidables.
      </motion.p>

    </div>
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

      <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm font-bold mb-5">
        Infraestructura Corporativa
      </p>

      <h2 className="text-4xl md:text-5xl font-light text-BLACK leading-tight uppercase">
      TODO LO QUE TU EMPRESA <span className="font-semibold text-BLACK">NECESITA</span>
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

{/* PASEOS FIN DE AÑO */}

<section className="relative py-36 bg-[#071827] overflow-hidden text-white">

  <Image
    src="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8756-min.webp"
    alt="Paseos Fin de Año"
    fill
    className="object-cover scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#071827]/85 to-black/55" />
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FBB03B]/20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-[#FBB03B]/10 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

    <motion.div
      initial={{ opacity:0, x:-120 }}
      whileInView={{ opacity:1, x:0 }}
      transition={{
        duration:1.4,
        ease:[0.22,1,0.36,1],
      }}
      viewport={{ once:true }}
    >

      <div className="inline-flex items-center gap-3 rounded-full bg-[#FBB03B] px-6 py-3 text-black text-sm md:text-base font-bold uppercase tracking-[0.2em] shadow-[0_20px_60px_rgba(251,176,59,0.35)] mb-8">
        Producto destacado para empresas
      </div>

      <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm font-bold mb-5">

        Celebraciones Corporativas

      </p>

      <h2 className="text-4xl md:text-5xl font-light text-white leading-tight uppercase">
      PASEOS DE <span className="font-semibold text-white">FIN DE AÑO</span>
      </h2>

      <motion.p
        initial={{ opacity:0,y:-20 }}
        whileInView={{ opacity:1,y:0 }}
        transition={{ duration:.9 }}
        viewport={{ once:true }}
        className="mt-8 text-xl md:text-2xl text-white/85 leading-relaxed"
      >

        Uno de nuestros productos más fuertes: jornadas corporativas pensadas
        para cerrar el año con entretención, naturaleza, gastronomía y espacios
        exclusivos para todo el equipo.

      </motion.p>

      <motion.p
        initial={{ opacity:0,y:-20 }}
        whileInView={{ opacity:1,y:0 }}
        transition={{ duration:.9, delay:.15 }}
        viewport={{ once:true }}
        className="mt-6 text-lg text-white/70 leading-relaxed"
      >

        Piscinas, quinchos, amplias áreas verdes, música, banquetería,
        actividades recreativas y coordinación completa convierten cada jornada
        en una experiencia memorable para colaboradores, equipos directivos y
        sus familias.

      </motion.p>

      <div className="grid sm:grid-cols-2 gap-5 mt-10">

  {[
    'Celebraciones privadas',
    'Banquetería completa',
    'Piscinas y áreas verdes',
    'Actividades recreativas',
  ].map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.08, duration: 0.7 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 text-lg font-semibold flex items-center gap-4"
    >
      <span className="text-[#FBB03B] text-2xl leading-none">
        ✓
      </span>

      <span>
        {item}
      </span>
    </motion.div>
  ))}

</div>

      <div className="flex flex-col sm:flex-row gap-5 mt-12">

        <a
          href="https://wa.link/vjoaea"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#FBB03B] text-black text-lg font-bold shadow-[0_20px_60px_rgba(251,176,59,0.35)] hover:scale-105 transition-all duration-500"
        >
          Cotizar evento
        </a>

        <a
          href="https://www.eventi-app.com/public-quotation/1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-white/30 text-white text-lg font-semibold backdrop-blur-md hover:bg-white hover:text-black transition-all duration-500"
        >
          WhatsApp
        </a>

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
      className="relative h-[520px] md:h-[680px] rounded-[42px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.45)] border border-white/10"
    >

      <Image
        src="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Eventos-5-min-e1725423897963.jpeg"
        alt="Celebración corporativa de fin de año"
        fill
        className="object-cover hover:scale-110 transition duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

    </motion.div>

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

      <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm font-bold mb-5">

        Eventos Empresariales

      </p>

      <h2 className="text-4xl md:text-5xl font-light text-BLACK leading-tight uppercase">
      CAPACITACIONES, SEMINARIOS <span className="font-semibold text-BLACK">Y CONGRESOS</span>
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
            ✔ Team Building
          </h4>

          <p className="text-gray-600 text-sm">
            Actividades para fortalecer la integración, liderazgo y trabajo en equipo.
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

      <h2 className="text-4xl md:text-5xl font-light text-white leading-tight uppercase">
                    SERVICIOS <span className="font-semibold text-white">CORPORATIVOS</span>
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

      <h2 className="text-4xl md:text-5xl font-light text-white leading-tight uppercase">
      BENEFICIOS EXCLUSIVOS PARA <span className="font-semibold text-white">TUS COLABORADORES</span>
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

          Descuentos

        </h3>

        <p className="text-white/70">

          Tarifas preferenciales durante todo el año.

        </p>

      </div>

      <div className="rounded-3xl bg-white/10 backdrop-blur-md p-8">

        <h3 className="text-2xl mb-3">

          Promociones

        </h3>

        <p className="text-white/70">

          Beneficios exclusivos para colaboradores y sus familias.

        </p>

      </div>

      <div className="rounded-3xl bg-white/10 backdrop-blur-md p-8">

        <h3 className="text-2xl mb-3">

          Experiencias

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

      <h2 className="text-4xl md:text-5xl font-light text-black leading-tight uppercase">
      DESCUBRE <span className="font-semibold text-black">NUESTROS ESPACIOS</span>
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

    <h2 className="text-4xl md:text-5xl font-light text-black leading-tight uppercase">
      CREAMOS EXPERIENCIAS CORPORATIVAS QUE <span className="font-semibold text-black">INSPIRAN, CONECTAN Y FORTALECEN EQUIPOS.</span>
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