'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HorizontalGallery from '../components/HorizontalGallery';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import { SocialLink } from '../components/types';
import Image from 'next/image';
import { motion } from 'framer-motion';
/* ===========================================================
   SOCIAL
=========================================================== */

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

/* ===========================================================
   DESTACADOS
=========================================================== */

const highlights = [
  {
    title: 'Programas Personalizados',
    description:
      'Diseñamos itinerarios a la medida para cada grupo y tour operador.',
    icon: '🧳',
  },
  {
    title: 'Alojamiento & Gastronomía',
    description:
      'Todo en un solo lugar para ofrecer una experiencia completa.',
    icon: '🏨',
  },
  {
    title: 'Excelente Ubicación',
    description:
      'El punto de partida ideal para descubrir el valle del Itata.',
    icon: '📍',
  },
  {
    title: 'Experiencias Locales',
    description:
      'Viñas, gastronomía, naturaleza y cultura en un mismo destino.',
    icon: '🍷',
  },
];

/* ===========================================================
   GALERÍA
=========================================================== */

const galleryImages = [
  '/images/tour-operadores/01.jpg',
  '/images/tour-operadores/02.jpg',
  '/images/tour-operadores/03.jpg',
  '/images/tour-operadores/04.jpg',
];

/* ===========================================================
   PAGE
=========================================================== */

export default function TourOperadoresPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-white">

      <Header />

      <main>

        {/* ======================================================
                            HERO
        ======================================================= */}

        {/* HERO */}
<section className="relative h-screen -mt-24 overflow-hidden bg-black">

  <Image
    src="/images/tour/t3.jpg"
    alt="Turismo para Grupos"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/75" />

  <div className="relative z-10 h-full flex items-center justify-center px-6 pt-24">

    <div className="max-w-6xl mx-auto text-center text-white">

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="uppercase tracking-[0.45em] text-[#FBB03B] text-sm mb-8"
      >
        Turismo Receptivo • Tour Operadores
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white"
      >
        Turismo para
        <br />
        Grupos
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.25,
        }}
        className="mt-10 text-xl md:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed"
      >
        Diseñamos programas turísticos para delegaciones nacionales e internacionales que buscan descubrir el Valle del Itata desde un lugar único, rodeado de naturaleza, gastronomía y experiencias inolvidables.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.45,
        }}
        className="flex flex-col sm:flex-row gap-5 justify-center mt-14"
      >

        <PrimaryButton href="https://wa.link/vjoaea">
          Solicitar Programa
        </PrimaryButton>

        <SecondaryButton
          href="#intro"
          className="
            !border-white/40
            !text-white
            hover:!bg-white
            hover:!text-black
          "
        >
          Descubrir Más
        </SecondaryButton>

      </motion.div>

    </div>

  </div>

</section>

        {/* ======================================================
                          INTRO
        ======================================================= */}

        <section
          id="intro"
          className="py-28 bg-white"
        >

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
                Tu aliado estratégico
              </p>

              <h2 className="text-4xl md:text-5xl font-light leading-tight">

                El punto de partida para descubrir el Valle del Itata

              </h2>

              <motion.p
                initial={{ opacity:0, y:-20 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:.9 }}
                viewport={{ once:true }}
                className="mt-8 text-lg text-gray-600 leading-relaxed"
              >

                En Valle del Sol Quillón trabajamos junto a tour operadores,
                agencias y organizadores de viajes ofreciendo programas
                completos para grupos, combinando alojamiento, gastronomía,
                actividades recreativas y circuitos turísticos en un solo
                destino.

              </motion.p>

              <motion.p
                initial={{ opacity:0, y:-20 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{
                  duration:.9,
                  delay:.15,
                }}
                viewport={{ once:true }}
                className="mt-6 text-lg text-gray-600 leading-relaxed"
              >

                Nuestro equipo coordina cada detalle para que cada viaje sea
                cómodo, seguro y memorable, adaptándonos a las necesidades de
                cada delegación y entregando una atención personalizada desde la
                llegada hasta el regreso.

              </motion.p>

            </motion.div>

            <motion.div
              initial={{ opacity:0, x:120 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{
                duration:1.4,
                ease:[0.22,1,0.36,1],
              }}
              viewport={{ once:true }}
              className="relative h-[650px] rounded-[36px] overflow-hidden shadow-2xl"
            >

              <Image
                src="/images/tour/t2.jpg"
                alt="Tour Operadores"
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />

            </motion.div>

          </div>

        </section>
        {/* ======================================================
                    TURISMO NACIONAL
        ======================================================= */}

        <section className="py-32 bg-gray-50">

          <div className="max-w-7xl mx-auto px-6">

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >

              <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">
                Turismo Nacional
              </p>

              <h2 className="text-4xl md:text-6xl font-light">
                Programas diseñados para recorrer Chile en grupo
              </h2>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .9 }}
                viewport={{ once: true }}
                className="mt-8 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
              >

                Desarrollamos programas especialmente pensados para grupos que
                buscan descubrir Quillón y el Valle del Itata con comodidad,
                seguridad y una experiencia completamente organizada.

              </motion.p>

            </motion.div>

            {/* ======================================================
                        ADULTO MAYOR
            ======================================================= */}

            <div className="grid lg:grid-cols-2 gap-20 items-center mb-36">

              <motion.div
                initial={{ opacity:0, x:-120 }}
                whileInView={{ opacity:1, x:0 }}
                transition={{
                  duration:1.4,
                  ease:[0.22,1,0.36,1],
                }}
                viewport={{ once:true }}
                className="relative h-[650px] rounded-[36px] overflow-hidden shadow-2xl"
              >

                <Image
                  src="/images/tour/t4.jpg"
                  alt="Adulto Mayor"
                  fill
                  className="object-cover hover:scale-110 transition duration-700"
                />

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

                <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">

                  Programas Especiales

                </p>

                <h3 className="text-4xl font-light mb-8">

                  Turismo para Adulto Mayor

                </h3>

                <p className="text-lg text-gray-600 leading-relaxed mb-10">

                  Creamos programas especialmente pensados para agrupaciones de
                  adultos mayores, privilegiando la comodidad, la buena
                  gastronomía, la recreación y una atención cercana durante toda
                  la estadía.

                </p>

                <div className="grid sm:grid-cols-2 gap-5">

                  {[
                    'Programas Todo Incluido',
                    'Alojamiento confortable',
                    'Restaurante',
                    'Actividades recreativas',
                    'Piscinas y áreas verdes',
                    'Atención personalizada',
                    'Amplios estacionamientos',
                    'Entorno seguro y tranquilo',
                  ].map((item, index) => (

                    <motion.div
                      key={index}
                      initial={{ opacity:0, y:20 }}
                      whileInView={{ opacity:1, y:0 }}
                      transition={{
                        duration:.6,
                        delay:index*.05,
                      }}
                      viewport={{ once:true }}
                      className="rounded-2xl bg-white shadow-lg p-5 hover:-translate-y-1 transition duration-300"
                    >

                      <span className="text-[#FBB03B] font-bold mr-2">

                        ✔

                      </span>

                      {item}

                    </motion.div>

                  ))}

                </div>

              </motion.div>

            </div>

            {/* ======================================================
                        DELEGACIONES
            ======================================================= */}

            <div className="grid lg:grid-cols-2 gap-20 items-center">

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

                  Viajes Grupales

                </p>

                <h3 className="text-4xl font-light mb-8">

                  Delegaciones y Organizaciones

                </h3>

                <p className="text-lg text-gray-600 leading-relaxed mb-10">

                  Recibimos delegaciones provenientes de todo Chile,
                  coordinando programas turísticos para clubes, asociaciones,
                  centros de adultos mayores, instituciones y organizaciones
                  que buscan vivir una experiencia completa en Quillón.

                </p>

                <div className="grid sm:grid-cols-2 gap-5">

                  {[
                    'Clubes de Adulto Mayor',
                    'Delegaciones Municipales',
                    'Organizaciones Sociales',
                    'Viajes Grupales',
                    'Programas Personalizados',
                    'Restaurante',
                    'Recorridos Turísticos',
                    'Experiencias Locales',
                  ].map((item, index) => (

                    <motion.div
                      key={index}
                      initial={{ opacity:0, y:20 }}
                      whileInView={{ opacity:1, y:0 }}
                      transition={{
                        duration:.6,
                        delay:index*.05,
                      }}
                      viewport={{ once:true }}
                      className="rounded-2xl bg-white shadow-lg p-5 hover:-translate-y-1 transition duration-300"
                    >

                      <span className="text-[#FBB03B] font-bold mr-2">

                        ✔

                      </span>

                      {item}

                    </motion.div>

                  ))}

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
                className="relative h-[650px] rounded-[36px] overflow-hidden shadow-2xl"
              >

                <Image
                  src="/images/tour/t5.jpg"
                  alt="Delegaciones"
                  fill
                  className="object-cover hover:scale-110 transition duration-700"
                />

              </motion.div>

            </div>

          </div>

        </section>
        
        {/* ======================================================
                    TURISMO INTERNACIONAL
        ======================================================= */}

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
              className="text-center mb-24"
            >

              <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">

                Turismo Internacional

              </p>

              <h2 className="text-4xl md:text-6xl font-light">

                Recibimos grupos de todo el mundo

              </h2>

              <motion.p
                initial={{ opacity:0,y:-20 }}
                whileInView={{ opacity:1,y:0 }}
                transition={{ duration:.9 }}
                viewport={{ once:true }}
                className="mt-8 text-white/70 text-lg max-w-4xl mx-auto leading-relaxed"
              >

                Coordinamos la experiencia completa desde la llegada de los
                pasajeros a Chile, entregando alojamiento, gastronomía,
                transporte y recorridos turísticos para que cada viaje se
                desarrolle de forma cómoda, segura y sin preocupaciones.

              </motion.p>

            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

              {[
                {
                  emoji: '✈️',
                  title: 'Traslados Aeropuerto',
                  text: 'Coordinamos traslados privados desde y hacia el aeropuerto para recibir a cada delegación con puntualidad y comodidad.',
                },
                {
                  emoji: '🧳',
                  title: 'Recepción de Delegaciones',
                  text: 'Nuestro equipo acompaña la llegada de los grupos y coordina cada detalle del programa turístico.',
                },
                {
                  emoji: '🏨',
                  title: 'Alojamiento',
                  text: 'Cómodas cabañas y espacios preparados para grupos de distintos tamaños durante toda su estadía.',
                },
                {
                  emoji: '🍽️',
                  title: 'Gastronomía Local',
                  text: 'Menús especialmente preparados para grupos, resaltando sabores tradicionales de la zona.',
                },
                {
                  emoji: '🚌',
                  title: 'Transporte Turístico',
                  text: 'Apoyamos la coordinación logística para excursiones y recorridos por los principales atractivos del destino.',
                },
                {
                  emoji: '🌎',
                  title: 'Programas Personalizados',
                  text: 'Cada itinerario se adapta al tiempo disponible, intereses del grupo y temporada del año.',
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity:0, y:60 }}
                  whileInView={{ opacity:1, y:0 }}
                  transition={{
                    duration:.8,
                    delay:index*.08,
                  }}
                  viewport={{ once:true }}
                  className="group rounded-[30px] bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-[#FBB03B]/60 hover:bg-white/10 transition-all duration-500"
                >

                  <div className="text-5xl mb-6">

                    {item.emoji}

                  </div>

                  <h3 className="text-2xl font-light mb-5">

                    {item.title}

                  </h3>

                  <p className="text-white/70 leading-relaxed">

                    {item.text}

                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* ======================================================
                SERVICIO INTEGRAL
        ======================================================= */}

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

                Una experiencia completa

              </p>

              <h2 className="text-4xl md:text-5xl font-light leading-tight">

                Un solo lugar para coordinar todo el viaje

              </h2>

              <motion.p
                initial={{ opacity:0,y:-20 }}
                whileInView={{ opacity:1,y:0 }}
                transition={{ duration:.9 }}
                viewport={{ once:true }}
                className="mt-8 text-lg text-gray-600 leading-relaxed"
              >

                Trabajamos junto a agencias y tour operadores nacionales e
                internacionales para ofrecer una solución integral, permitiendo
                centralizar alojamiento, alimentación, actividades y logística
                en un mismo destino.

              </motion.p>

              <div className="grid grid-cols-2 gap-5 mt-10">

                {[
                  '✔ Programas Flexibles',
                  '✔ Atención Personalizada',
                  '✔ Gastronomía',
                  '✔ Amplios Espacios',
                  '✔ Experiencias Locales',
                  '✔ Coordinación Integral',
                ].map((item, index) => (

                  <motion.div
                    key={index}
                    initial={{ opacity:0, y:20 }}
                    whileInView={{ opacity:1, y:0 }}
                    transition={{
                      duration:.6,
                      delay:index*.05,
                    }}
                    viewport={{ once:true }}
                    className="rounded-2xl bg-gray-50 shadow-md p-5 hover:-translate-y-1 transition duration-300"
                  >

                    {item}

                  </motion.div>

                ))}

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
              className="relative h-[650px] rounded-[36px] overflow-hidden shadow-2xl"
            >

              <Image
                src="/images/tour/t6.jpg"
                alt="Turismo Internacional"
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />

            </motion.div>

          </div>

        </section>
        {/* ======================================================
                    ASÍ VIVIMOS EL VIAJE
        ======================================================= */}

        <section className="relative py-32 bg-black overflow-hidden text-white">

          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

          <div className="relative max-w-7xl mx-auto px-6">

            <motion.div
              initial={{ opacity:0, x:-120 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{
                duration:1.4,
                ease:[0.22,1,0.36,1],
              }}
              viewport={{ once:true }}
              className="text-center mb-24"
            >

              <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">

                Así vivimos el viaje

              </p>

              <h2 className="text-4xl md:text-6xl font-light">

                Una experiencia organizada de principio a fin

              </h2>

              <motion.p
                initial={{ opacity:0,y:-20 }}
                whileInView={{ opacity:1,y:0 }}
                transition={{ duration:.9 }}
                viewport={{ once:true }}
                className="mt-8 text-white/70 text-lg max-w-4xl mx-auto leading-relaxed"
              >

                Coordinamos cada etapa del programa para que los pasajeros
                disfruten del destino sin preocupaciones, mientras el tour
                operador cuenta con un respaldo confiable durante todo el viaje.

              </motion.p>

            </motion.div>

            <div className="relative">

              {/* Línea horizontal */}

              <div className="hidden lg:block absolute top-16 left-0 right-0 h-[2px] bg-white/10" />

              <div className="grid lg:grid-cols-7 gap-10">

                {[
                  {
                    icon:'✈️',
                    title:'Llegada',
                    text:'Recepción del grupo en el aeropuerto o punto de encuentro.',
                  },
                  {
                    icon:'🚌',
                    title:'Traslado',
                    text:'Traslado cómodo y seguro hacia Valle del Sol Quillón.',
                  },
                  {
                    icon:'🏨',
                    title:'Bienvenida',
                    text:'Check-in, instalación y recepción del grupo.',
                  },
                  {
                    icon:'🍽️',
                    title:'Gastronomía',
                    text:'Almuerzos, cenas y cocina local durante la estadía.',
                  },
                  {
                    icon:'🍷',
                    title:'Excursiones',
                    text:'Viñas, licorerías, naturaleza y patrimonio del Valle del Itata.',
                  },
                  {
                    icon:'🏖️',
                    title:'Tiempo Libre',
                    text:'Piscinas, áreas verdes y actividades recreativas.',
                  },
                  {
                    icon:'🧳',
                    title:'Regreso',
                    text:'Coordinación de salida y retorno del grupo.',
                  },
                ].map((step,index)=>(

                  <motion.div
                    key={index}
                    initial={{ opacity:0,y:60 }}
                    whileInView={{ opacity:1,y:0 }}
                    transition={{
                      duration:.8,
                      delay:index*.08,
                    }}
                    viewport={{ once:true }}
                    className="relative text-center"
                  >

                    <div className="relative z-10 w-24 h-24 mx-auto rounded-full bg-[#FBB03B] flex items-center justify-center text-4xl shadow-2xl">

                      {step.icon}

                    </div>

                    <h3 className="mt-8 text-2xl font-light">

                      {step.title}

                    </h3>

                    <p className="mt-4 text-white/70 leading-relaxed">

                      {step.text}

                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* ======================================================
                    ¿POR QUÉ ELEGIRNOS?
        ======================================================= */}

        <section className="py-32 bg-white">

          <div className="max-w-7xl mx-auto px-6">

            <motion.div
              initial={{ opacity:0,x:-120 }}
              whileInView={{ opacity:1,x:0 }}
              transition={{
                duration:1.4,
                ease:[0.22,1,0.36,1],
              }}
              viewport={{ once:true }}
              className="text-center mb-20"
            >

              <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">

                ¿Por qué Valle del Sol?

              </p>

              <h2 className="text-4xl md:text-6xl font-light">

                Un partner confiable para Tour Operadores

              </h2>

            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

              {[
                {
                  icon:'🏨',
                  title:'Infraestructura',
                  text:'Alojamiento, restaurante, piscinas y amplios espacios en un solo lugar.',
                },
                {
                  icon:'🚌',
                  title:'Programas Grupales',
                  text:'Experiencia organizando viajes para delegaciones nacionales e internacionales.',
                },
                {
                  icon:'📍',
                  title:'Ubicación Estratégica',
                  text:'Excelente punto de partida para recorrer Quillón y el Valle del Itata.',
                },
                {
                  icon:'🍽️',
                  title:'Gastronomía',
                  text:'Menús adaptados para grupos y cocina con identidad local.',
                },
                {
                  icon:'🤝',
                  title:'Atención Personalizada',
                  text:'Acompañamiento permanente antes, durante y después de cada programa.',
                },
                {
                  icon:'🌿',
                  title:'Experiencias',
                  text:'Naturaleza, cultura, viñas y actividades para todas las edades.',
                },
              ].map((card,index)=>(

                <motion.div
                  key={index}
                  initial={{ opacity:0,y:50 }}
                  whileInView={{ opacity:1,y:0 }}
                  transition={{
                    duration:.8,
                    delay:index*.08,
                  }}
                  viewport={{ once:true }}
                  className="group rounded-[30px] bg-gray-50 shadow-xl p-10 hover:-translate-y-3 transition-all duration-500"
                >

                  <div className="text-5xl mb-6">

                    {card.icon}

                  </div>

                  <h3 className="text-2xl font-light mb-5">

                    {card.title}

                  </h3>

                  <p className="text-gray-600 leading-relaxed">

                    {card.text}

                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>
        {/* ======================================================
                            CTA FINAL
        ======================================================= */}

        <section className="relative py-40 overflow-hidden">

          <Image
            src="/images/tour/t1.jpg"
            alt="Tour Operadores"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-6">

                Comencemos a trabajar juntos

              </p>

              <h2 className="text-4xl md:text-6xl font-light leading-tight">

                Diseñemos el próximo
                <br />
                programa turístico
                <br />
                para tus pasajeros

              </h2>

              <motion.p
                initial={{ opacity:0, y:-20 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:.9 }}
                viewport={{ once:true }}
                className="mt-10 text-xl text-white/80 leading-relaxed max-w-3xl mx-auto"
              >

                Nuestro equipo puede ayudarte a crear programas para adultos
                mayores, delegaciones, viajes grupales y pasajeros
                internacionales, incorporando alojamiento, gastronomía,
                excursiones y experiencias adaptadas a cada grupo.

              </motion.p>

              <motion.div
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{
                  duration:.9,
                  delay:.2,
                }}
                viewport={{ once:true }}
                className="flex flex-col sm:flex-row justify-center gap-6 mt-14"
              >

                <a
                  href="https://wa.link/vjoaea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-5 rounded-full font-semibold text-lg shadow-2xl hover:scale-105 transition duration-300"
                  style={{
                    backgroundColor: "#FBB03B",
                    color: "#111",
                  }}
                >
                  Solicitar Programa
                </a>

                <a
                  href="/contacto"
                  className="px-12 py-5 rounded-full border border-white/40 hover:bg-white hover:text-black transition duration-300 text-lg"
                >
                  Contáctanos
                </a>

              </motion.div>

            </motion.div>

          </div>

        </section>

      </main>

      <Footer/>

    </div>
  );
}